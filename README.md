# Life Runners Fellowship Website

A bilingual (English / 简体中文) website for **Life Runners Fellowship**, a California-based 501(c) non-profit. The site shares the organization’s vision and provides resources such as ministry info, Bible study materials, upcoming events, and ways to support/donate.

> Motto: *Exercise your body 操练身体 · Practice godliness 操练敬虔 · Live out love 活出爱*

---

## ✨ Goals

- Communicate vision, faith statement, ministries, and activities
- Serve audiences in both the **United States and mainland China**
- Make frequently updated content (Bible materials, events, blog) **easy for non-technical editors to maintain**
- Support video, audio, and PDF media with **regional fallbacks** when platforms are blocked

## 🌐 Domains & Email

- Existing: `chinesechristianhome.com`
- Proposed: `life-runners.org` (if available) or `life-runners.org`-like variants
- Mailboxes (examples):
  - `donation@life-runners.org`
  - `admin@life-runners.org`

> Final domain and mail routing (MX) will be confirmed during deployment.

## 🧭 Information Architecture (Top-level)

- About Us / 关于我们
  - Confession of Faith / 信仰告白
  - Our Logo / 标志
  - Leadership Team / 领袖团队
  - Event Calendar / 活动日历
- Ministry / 事工介绍
  - Exercise your body / 操练身体
  - Practice godliness / 操练敬虔
  - Live out love / 活出爱
- Resources / 查经资料
  - Old Testament / 旧约（按卷）
  - New Testament / 新约（按卷）
  - Q&A / 信仰问题解答（按日期）
- Events / 活动预告·记录
  - Upcoming / 即将举行
  - Past (writings, photos, videos) / 往期（文字、图片、视频）
- Support & Donation / 支持与奉献
  - Contact / 联系方式
  - Donation Info / 奉献须知

## 🧩 Features

- **Bilingual UI with user-selectable language (EN / 简体中文)**
- **Responsive** design for desktop and mobile
- **Media support**: YouTube videos, on-site MP3/M4A or Spotify audio, on-site PDFs
- **External link strategy**: open in new tab; provide **China-accessible fallbacks**
- **Update-friendly** dynamic sections (non-technical editors):
  - Bible study materials (up to twice daily)
  - Upcoming events (weekly)
  - Blog (as needed)
- **Performance**: Target initial render within 10 seconds even under 25 concurrent users
- **Security**: Prevent unauthorized changes; protect admin/editor access

## 🛠 Suggested Tech Stack

- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS
- **i18n**: `next-intl` or `@lingui/react`
- **Content**: Headless CMS (Sanity, Contentful, or Strapi). For low-cost hosting, consider Markdown/MDX with Git-based CMS (Netlify CMS)
- **Media**: YouTube + on-site audio (MP3/M4A); Spotify links optional; PDFs hosted on site
- **Deployment**: Vercel/Netlify (primary), plus **China-accessible mirror** (e.g., Vercel China/Edge, or a static export on a mainland-friendly CDN)
- **Analytics**: Plausible/Umami (privacy-friendly) or GA4
- **Calendar**: Static event pages + optional iCal feed generation

> You can swap components if your coding agent prefers another stack, as long as requirements remain satisfied.

## 📦 Getting Started (Dev)

```bash
# 1) Clone and install
git clone <your-repo-url> life-runners-site
cd life-runners-site
npm i

# 2) Run
npm run dev

# 3) Build
npm run build
npm run start
```

### Environment Variables (examples)

Create `.env.local`:

```
SITE_NAME="Life Runners Fellowship"
DEFAULT_LOCALE="en"
SUPPORTED_LOCALES="en,zh-CN"
CMS_PROJECT_ID="..."
CMS_DATASET="production"
YOUTUBE_CHANNEL_URL="https://www.youtube.com/..."
CHINA_FALLBACK_AUDIO_BASE="/media/audio/"
```

## 🧱 Content Model (high level)

- `page` (About, Ministries, Support)
- `post` (Blog / Articles)
- `event` (upcoming/past; date/time, location, summary, links, gallery)
- `study` (Bible study material; testament/book/chapter, attachments)
- `faq` (信仰问题解答)
- `mediaAsset` (audio/pdf metadata)

See `docs/sites_spec.md` for detailed fields and validation rules.

## 🌏 China Accessibility Plan

- All external links open in **new tab**
- Provide **alternative access** when platforms are blocked:
  - If YouTube is unavailable, provide **audio** (MP3/M4A) or **transcript + PDF**
  - Prefer on-site hosting for essential media files
- Consider a static-export mirror on a CN-friendly CDN

## 🧪 Acceptance Criteria (Summary)

- All pages & sections listed above are present in EN/中文
- Bible study, events, blog are editable without code deployments
- Media types supported as specified; external links with fallbacks
- Works on Chrome, Safari, Edge, iOS & Android default browsers
- Meets performance and security expectations

## 🤝 Roles

- **Technical Team**: implementation & ops
- **Content Team**: copy, translations, updates
- **Review Team**: editorial QA
- **Executive Producer**: final approvals

## 📄 License

Copyright © Life Runners Fellowship. Content usage may be restricted; consult project owners.

---

### Contributing

1. Create a feature branch
2. Commit with clear messages
3. Open a PR; include screenshots and i18n notes
4. Tag reviewers (tech + content)

---

### Roadmap (Proposed)

- Week 1–2: Scaffold + i18n + IA
- Week 3–4: Core pages + CMS wiring
- Week 5–6: Events + Study models + Media pipeline
- Week 7–8: SEO, sitemap, analytics, hardening
- Launch window: 2025-12 (target)
