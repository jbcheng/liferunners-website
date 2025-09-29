import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { pages, siteMeta } from '../src/data/pages.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');
const baseUrl = process.env.BASE_URL || 'https://life-runners.org';
const basePath = process.env.BASE_PATH || '';

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderNavigation(locale, currentUrl) {
  const items = locale.navigation
    .map((item) => renderNavItem(item, currentUrl))
    .join('');
  return `<ul>${items}</ul>`;
}

function renderNavItem(item, currentUrl) {
  const isCurrent = currentUrl === item.href;
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const label = escapeHtml(item.label);
  const href = basePath + item.href;
  const link = `<a href="${href}"${isCurrent ? ' aria-current="page"' : ''}>${label}</a>`;
  if (!hasChildren) {
    return `<li class="nav-item">${link}</li>`;
  }
  const childList = item.children.map((child) => renderNavItem(child, currentUrl)).join('');
  return `<li class="nav-item nav-item-parent">${link}<ul class="sub-nav">${childList}</ul></li>`;
}

function renderLanguageSwitcher(page) {
  const locales = Object.values(siteMeta.locales);
  return locales
    .map((locale) => {
      const isActive = page.lang === locale.code;
      const targetHref = basePath + (locale.code === page.lang ? page.url : page.altLang || locale.pathPrefix);
      return `<a href="${targetHref}"${isActive ? ' aria-current="true"' : ''}>${escapeHtml(locale.label)}</a>`;
    })
    .join('<span aria-hidden="true">|</span>');
}

function renderBreadcrumbs(page) {
  if (!page.breadcrumbs || page.breadcrumbs.length === 0) {
    return '';
  }
  const items = page.breadcrumbs
    .map((crumb) => `<a href="${basePath + crumb.href}">${escapeHtml(crumb.label)}</a>`)
    .join(' / ');
  return `<nav aria-label="Breadcrumb" class="breadcrumbs">${items} / <span>${escapeHtml(page.title)}</span></nav>`;
}

function renderSections(page) {
  return (page.sections || [])
    .map((section) => {
      const idAttr = section.id ? ` id="${section.id}"` : '';
      const heading = section.title ? `<h2>${escapeHtml(section.title)}</h2>` : '';
      return `<section class="section"${idAttr}>${heading}${section.content || ''}</section>`;
    })
    .join('\n');
}

function renderFooter(locale) {
  const contactBlock = locale.footer.contact.items
    .map((item) => {
      if (item.href) {
        return `<li><strong>${escapeHtml(item.label)}:</strong> <a href="${item.href}">${escapeHtml(item.value)}</a></li>`;
      }
      return `<li><strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.value)}</li>`;
    })
    .join('');
  const social = locale.footer.social
    .map((item) => `<a href="${item.href}" target="_blank" rel="noopener">${escapeHtml(item.label)}</a>`)
    .join(' · ');
  return `
    <footer>
      <div class="footer-content">
        <div>
          <h2>${escapeHtml(locale.footer.contact.title)}</h2>
          <ul>${contactBlock}</ul>
        </div>
        <div>
          <h2>${escapeHtml(siteMeta.locales.en.code === locale.code ? 'Mission Field' : '事工范围')}</h2>
          <p>${escapeHtml(locale.footer.address)}</p>
          <div class="social-links">${social}</div>
        </div>
        <div>
          <h2>${escapeHtml(siteMeta.locales.en.code === locale.code ? 'Newsletter & Media' : '媒体与通讯')}</h2>
          <p>${escapeHtml(siteMeta.locales.en.code === locale.code
            ? 'Stay updated with bilingual stories, prayer prompts, and training resources.'
            : '接收双语动态、祷告事项与训练资源。')}</p>
        </div>
        <p>${escapeHtml(locale.footer.legal)}</p>
      </div>
    </footer>
  `;
}

function renderHead(page, locale) {
  const canonical = `${baseUrl}${basePath}${page.url}`;
  const altHref = page.altLang ? `${baseUrl}${basePath}${page.altLang}` : canonical;
  const siteName = locale.code === 'en' ? 'Life Runners Fellowship' : '生命跑者团契';
  const pageTitle = page.title === siteName ? siteName : `${page.title} · ${siteName}`;
  const description = page.description || (locale.code === 'en'
    ? 'Bilingual discipleship community combining faith, athletics, and missions serving the US and China.'
    : '双语门训社群，结合信仰、运动与差传，服事美国与中国的肢体。');
  const ogImage = `${baseUrl}${basePath}/assets/img/lucas-canino-MFCzJQoFXzc-unsplash.jpg`;
  const ogType = page.url === '/en/' || page.url === '/zh/' ? 'website' : 'article';

  return `
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(pageTitle)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(locale.code === 'en' ? 'Life Runners Fellowship - Running with purpose' : '生命跑者团契 - 带着永恒目标奔跑')}" />
    <meta property="og:site_name" content="${escapeHtml(siteName)}" />
    <meta property="og:locale" content="${locale.code === 'en' ? 'en_US' : 'zh_CN'}" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonical}" />
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="twitter:image:alt" content="${escapeHtml(locale.code === 'en' ? 'Life Runners Fellowship - Running with purpose' : '生命跑者团契 - 带着永恒目标奔跑')}" />

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="${basePath}/assets/img/logo-placeholder.svg" />

    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="${siteMeta.locales.en.code === locale.code ? 'en' : 'zh-CN'}" href="${canonical}" />
    <link rel="alternate" hreflang="${siteMeta.locales.en.code === locale.code ? 'zh-CN' : 'en'}" href="${altHref}" />
    <link rel="stylesheet" href="${basePath}/assets/styles.css" />
  `;
}

function renderPageHtml(page) {
  const locale = siteMeta.locales[page.lang];
  if (!locale) {
    throw new Error(`Unknown locale ${page.lang} for ${page.url}`);
  }
  const langAttr = page.lang === 'zh' ? 'zh-Hans' : 'en';
  const nav = renderNavigation(locale, page.url);
  const languageSwitcher = renderLanguageSwitcher(page);
  const breadcrumbs = renderBreadcrumbs(page);
  const sections = renderSections(page);
  const hero = page.hero
    ? `<section class="hero">${page.hero.eyebrow ? `<p class="badge">${escapeHtml(page.hero.eyebrow)}</p>` : ''}<h1>${escapeHtml(page.hero.title)}</h1><p>${escapeHtml(page.hero.subtitle || '')}</p>${page.hero.cta ? `<a class="button" href="${basePath + page.hero.cta.href}">${escapeHtml(page.hero.cta.label)}</a>` : ''}</section>`
    : '';

  return `<!DOCTYPE html>
<html lang="${langAttr}">
<head>
${renderHead(page, locale)}
<style>.hero { background-image: linear-gradient(120deg, rgba(27, 107, 80, 0.45), rgba(19, 75, 56, 0.50)), url('${basePath}/assets/img/lucas-canino-MFCzJQoFXzc-unsplash.jpg') !important; }</style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header>
    <div class="nav-container">
      <div class="branding">
        <img src="${basePath}/assets/img/logo-placeholder.svg" alt="Life Runners logo" />
        <strong>${escapeHtml(siteMeta.locales.en.code === locale.code ? 'Life Runners Fellowship' : '生命跑者团契')}</strong>
      </div>
      <button class="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav aria-label="Primary navigation" class="main-nav">
        ${nav}
      </nav>
      <div class="language-switcher" aria-label="Language">
        ${languageSwitcher}
      </div>
    </div>
  </header>
  <script>
    (function() {
      var toggle = document.querySelector('.mobile-menu-toggle');
      var nav = document.querySelector('.main-nav');
      toggle.addEventListener('click', function() {
        var isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isOpen);
        nav.classList.toggle('open');
      });
    })();
  </script>
  <main id="main">
    ${breadcrumbs}
    ${hero}
    ${sections}
  </main>
  ${renderFooter(locale)}
</body>
</html>`;
}

async function copyPublicAssets() {
  await fs.cp(publicDir, distDir, { recursive: true });
}

export async function buildSite() {
  await fs.rm(distDir, { recursive: true, force: true });
  await fs.mkdir(distDir, { recursive: true });
  await copyPublicAssets();

  for (const page of pages) {
    const outputPath = path.join(distDir, page.path);
    const dir = path.dirname(outputPath);
    await fs.mkdir(dir, { recursive: true });
    const html = renderPageHtml(page);
    await fs.writeFile(outputPath, html, 'utf8');
  }

  // Root redirect to default locale
  const defaultLocale = siteMeta.locales[siteMeta.defaultLocale];
  const rootIndex = `<!DOCTYPE html><html lang="${siteMeta.defaultLocale}"><head><meta charset="utf-8" /><meta http-equiv="refresh" content="0; url=${basePath}${defaultLocale.pathPrefix}/" /><link rel="canonical" href="${baseUrl}${defaultLocale.pathPrefix}/" /></head><body></body></html>`;
  await fs.writeFile(path.join(distDir, 'index.html'), rootIndex, 'utf8');

  // Generate sitemap
  const urls = pages.map((page) => `${baseUrl}${page.url}`);
  urls.push(`${baseUrl}/`);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join('\n')}\n</urlset>`;
  await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');

  // Robots
  const robots = `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`;
  await fs.writeFile(path.join(distDir, 'robots.txt'), robots, 'utf8');
}

if (import.meta.url === pathToFileURL(__filename).href) {
  buildSite().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

