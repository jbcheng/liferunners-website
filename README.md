# Life Runners Fellowship Website

A statically generated, bilingual (English / 简体中文) website for **Life Runners Fellowship**, a California-based 501(c) non-profit. The site communicates vision, ministries, resources, and events while staying fast to host and easy to update from structured content files.

> Motto: *Exercise your body 操练身体 · Practice godliness 操练敬虔 · Live out love 活出爱*

## ✨ Highlights

- Fully localised navigation, pages, and media callouts in English and Simplified Chinese
- Static build with zero third-party runtime dependencies (plain Node.js)
- China-accessible media fallbacks and notices wherever YouTube/Spotify links appear
- Structured content authored in `src/data/pages.mjs` with shared components for hero, sections, and cards
- Automated sitemap, robots.txt, and canonical/hreflang tags for SEO
- Simple Node-based dev server with optional auto-rebuild watching

## 🧰 Prerequisites

- [Node.js](https://nodejs.org/) **18 LTS or newer** (uses native ES modules and `fs.cp`)
- npm (bundled with Node)

No additional npm packages are required.

## 🚀 Local Development

```bash
# 1) Install dependencies (none beyond lockfile, but keeps scripts available)
npm install

# 2) Start the dev server with rebuild-on-change and local static hosting
npm run dev

# The dev server builds into `dist/` and serves http://localhost:4321.
# When recursive file watching is unsupported on your platform,
# the script logs a warning—simply re-run `npm run build` manually after edits.
```

### Manual build & preview

```bash
# Generate static HTML, CSS, media, sitemap, and robots.txt into dist/
npm run build

# Serve the prebuilt site (no rebuild on change)
npm run serve
# Visit http://localhost:4321
```

The build script copies everything from `public/` and renders pages defined in `src/data/pages.mjs` for both `/en/*` and `/zh/*` routes. The repository ships with placeholder media directories so editors can drop PDFs, audio files, and gallery assets without touching layout code.

## 🗂 Content Editing Workflow

1. Edit `src/data/pages.mjs` to update copy, links, section layouts, or add new pages.
2. (Optional) Add supporting files under `public/media/…` — ensure filenames match the URLs referenced in content.
3. Run `npm run build` to regenerate `dist/` and verify locally with `npm run serve` or `npm run dev`.
4. Commit the generated source files (the `dist/` folder is produced at build time and is not committed).

Because the content is structured in reusable section objects, non-technical editors can update text by following the inline comments and section titles. Future teams can migrate the data layer into a headless CMS without rewriting layouts.

## 🌐 Deployment Options

The static output in `dist/` can be hosted on any CDN or static hosting provider. Recommended free-tier options:

- **GitHub Pages** — push the contents of `dist/` to a `gh-pages` branch and configure the custom domain `life-runners.org`.
- **Netlify** — connect the repository, set the build command to `npm run build`, and publish the generated `dist/` folder. Netlify offers free HTTPS certificates and easy domain mapping.
- **Cloudflare Pages** or **Vercel** — similar configuration, great global CDN coverage.

For China-accessible mirrors, export the `dist/` folder and upload to a mainland-friendly CDN (e.g., aliyun OSS + CDN) so `/media/*` assets remain reachable.

### DNS & Email Notes

- Point the apex/root and `www` records of `life-runners.org` to your chosen host.
- Configure MX records for mailboxes such as `donation@life-runners.org` and `admin@life-runners.org` once the domain is live.

## 🧪 Testing Checklist

- `npm run build` must succeed before deployment.
- Validate the generated HTML with your preferred accessibility/SEO tooling.
- Ensure external media links include China fallback assets before publishing.

## 📁 Repository Structure

```
├── public/                 # Static assets copied verbatim
│   ├── assets/             # Global CSS + images
│   └── media/              # Placeholder folders for audio, PDFs, transcripts, galleries
├── scripts/                # Build, dev, and serve scripts (Node.js)
├── src/data/pages.mjs      # All localized navigation + page content definitions
├── docs/                   # Requirement specs from stakeholders
└── dist/                   # Generated output (ignored until build)
```

## 📄 License

Copyright © Life Runners Fellowship. All rights reserved. Content usage may be restricted; consult project owners.

---

### Contributing

1. Create a feature branch.
2. Update content in `src/data/pages.mjs` or static assets in `public/`.
3. Run `npm run build` and review the output locally.
4. Commit with clear messages and open a PR (include bilingual notes and screenshots when relevant).
