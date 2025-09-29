# Site Specification (docs/sites_spec.md)

> This document translates the requirements into a buildable spec for a coding agent and developers.

## 1. Functional Scope

### 1.1 Languages
- UI languages: **English** (`en`), **Simplified Chinese** (`zh-CN`)
- Language toggle stored in URL (`/en/*`, `/zh/*`) or cookie
- All navigational elements and page content must be localized

### 1.2 Audience & Regions
- Accessible from **United States** and **mainland China**
- External links (e.g., YouTube) **must open in a new tab** and provide **regional fallbacks** (audio, transcript, PDF)

### 1.3 Browsers (Support Matrix)
- Desktop: Chrome (Win/Mac), Safari (Mac), Edge (Win)
- Mobile: iOS Safari, Android Chrome
- Responsive breakpoints: `sm` (360), `md` (768), `lg` (1024), `xl` (1280)

---

## 2. Information Architecture & Routes

- `/` — Home (mission, motto, featured ministries, latest events)
- `/about` — About Us
  - `/about/confession`
  - `/about/logo`
  - `/about/team`
  - `/about/calendar` (embedded monthly calendar + event list)
- `/ministries`
  - `/ministries/body` — Exercise your body
  - `/ministries/godliness` — Practice godliness
  - `/ministries/love` — Live out love
- `/resources`
  - `/resources/ot` — Old Testament (organized by book → chapter)
  - `/resources/nt` — New Testament (organized by book → chapter)
  - `/resources/faq` — 信仰问题解答（按日期/主题）
- `/events`
  - `/events/upcoming`
  - `/events/past` — entries with writing, photos, video links
- `/support`
  - `/support/contact`
  - `/support/donation`

> All routes should have localized equivalents under `/zh/…` if URL localization is used.

---

## 3. Content Models (Headless CMS or equivalent)

### 3.1 `siteSettings`
- `siteName` (string, i18n)
- `defaultLocale` (enum: `en` | `zh-CN`)
- `navigation` (array of links, i18n)

### 3.2 `page`
- `slug` (string)
- `title` (i18n string)
- `sections` (rich content blocks, i18n)
- `hero` (optional image)
- `seo` (title/description, i18n)

### 3.3 `event`
- `title` (i18n)
- `slug`
- `startDateTime` (ISO)
- `endDateTime` (ISO, optional)
- `location` (string, i18n)
- `summary` (i18n)
- `links` (array: { kind: `"youtube"|"spotify"|"pdf"|"audio"|"ext"`, url })
- `gallery` (images[])
- `status` (`"upcoming"|"past"`)
- `displayOnCalendar` (boolean)

### 3.4 `study`
- `testament` (`"OT"|"NT"`)
- `book` (enum; e.g., Genesis, Matthew; i18n label)
- `chapter` (number or range)
- `title` (i18n)
- `content` (rich text, i18n)
- `attachments` (array: audio/pdf links)
- `updatedAt` (auto)

> Editing frequency: up to **twice daily**.

### 3.5 `faq`
- `question` (i18n)
- `answer` (i18n)
- `publishedAt` (date)
- `tags` (array)

### 3.6 `post` (blog)
- `title` (i18n)
- `slug`
- `coverImage`
- `body` (i18n rich text)
- `publishedAt`

### 3.7 `mediaAsset`
- `kind` (`"audio"|"pdf"|"image"`)
- `file` (URL)
- `regionFallback` (object with optional alternative URLs)
- `transcript` (optional, for accessibility & China fallback)

---

## 4. Components (Design System)

- **Header** (logo, nav, language switcher, donate button)
- **Footer** (contact, social, copyright, ICP note if mirrored in CN)
- **Hero** (title, motto)
- **Card** (event, study, post)
- **Gallery** (grid with lightbox)
- **MediaPlayer**
  - Video: embed YouTube (lazy-load), display fallback notice
  - Audio: HTML5 `<audio>` for MP3/M4A; Spotify link as optional
  - PDF: on-site viewer or download link
- **Calendar** (list + month view; server-generated iCal optional)

---

## 5. External Links & Regional Fallbacks

Rules:
1. All external links open in **`target="_blank" rel="noopener"`**
2. If a **YouTube** link is present, provide at least one **fallback**:
   - On-site audio (MP3/M4A) **or**
   - Transcript + PDF slides
3. Provide **country-aware notices** (“If video is unavailable, use audio/PDF”) without IP-based gating

---

## 6. Performance & Security

- **Targets**:
  - First byte within 1–2s on typical broadband
  - **Start rendering < 10s** with ≥25 concurrent users
- **Optimization**:
  - Static pre-render where possible, cache headers, image optimization
  - Lazy-load embeds (YouTube) and non-critical JS
- **Security**:
  - CMS with role-based access (`admin`, `editor`, `viewer`)
  - HTTPS everywhere, HSTS, CSP (allow YouTube/Spotify if used)
  - Admin UI behind auth; rate-limit form endpoints (contact)
  - Backups for CMS and media storage

---

## 7. SEO & Accessibility

- SEO: per-page metadata, sitemap.xml, robots.txt, OpenGraph images
- i18n SEO: `hreflang`, localized titles/descriptions
- Accessibility: semantic HTML, ARIA where needed, alt text for images, captions/transcripts for media

---

## 8. Editor Workflows

- **Bible Study**: editor creates/updates `study` items (2×/day possible)
- **Events**: editor creates an `event`; when past end time, toggle status to `past` and attach gallery/links
- **Blog**: editor creates `post` as needed
- **Publishing**: draft → review → publish; auto-build or ISR revalidation

---

## 9. Deployment Plan

- Primary hosting: Vercel/Netlify (with CDN)
- Static asset storage: project repo or object storage (S3/R2)
- Optional **China mirror**: static export synced to CN-friendly CDN
- DNS: A/AAAA/CNAME + MX for mailboxes
- Backups: daily CMS export; weekly media backup

---

## 10. Acceptance Criteria (Traceable)

- [ ] EN/中文 toggle visible on every page
- [ ] All IA routes implemented (and `/zh/*` variants if using URL-based i18n)
- [ ] Works on required browsers and mobile
- [ ] Media types supported (YouTube, MP3/M4A, PDF); external links in new tabs
- [ ] China fallback present wherever external platforms may be blocked
- [ ] Bible Study updatable twice daily without code changes
- [ ] Events updatable weekly; past events archive with media
- [ ] Blog optional but supported
- [ ] Security: admin auth, HTTPS, backups
- [ ] Performance: page starts rendering in <10s under 25 concurrent users

---

## 11. Future Enhancements (Optional)

- iCal feed export for events
- Search (site-wide, bilingual)
- RSS for blog
- Donation integrations (Stripe/PayPal) with receipts
- Newsletter signup
