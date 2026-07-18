# NÓN Cà Phê — Landing Page

A single-page, bilingual (English / 中文) marketing site for **NÓN Cà Phê**, a Vietnamese coffee shop in Kuchai Lama, Kuala Lumpur. Built with Next.js and Tailwind CSS, with a [Sanity](https://www.sanity.io) content backend so the owner can update the menu, business hours, and photos without touching code.

**Live site:** https://non-ca-phe-landing.vercel.app
**Content admin:** https://non-ca-phe-landing.vercel.app/studio

## Tech stack

- **Next.js 15** (App Router), React 19
- **Tailwind CSS 3** — design tokens (colors, fonts, radii) in [tailwind.config.js](tailwind.config.js)
- **Sanity** (embedded Studio at `/studio`) — content backend, `sanity@4.22.0` / `next-sanity@11.6.13` (pinned; see [Known constraints](#known-constraints))
- **next/font** — self-hosted Caprasimo + Figtree (Latin) and Noto Serif/Sans SC (Chinese fallback, since neither Latin font has CJK glyphs)
- Deployed on **Vercel**, GitHub repo auto-deploys `main` on push

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

You'll need a `.env.local` with the Sanity project connection (see [Environment variables](#environment-variables) below) — without it, `sanity/env.js` throws on startup.

```bash
npm run build     # production build
npm start         # run the production build locally
```

## Project structure

```
app/
  page.js              Home page — fetches Sanity content server-side (ISR, 60s)
  layout.js             Fonts, metadata, wraps the page in LanguageProvider
  robots.js, sitemap.js Generated robots.txt / sitemap.xml
  studio/[[...tool]]/   Embedded Sanity Studio (catch-all route)
components/              One file per page section (Nav, Hero, Story, FounderStory,
                          Menu, Culture, Visit, Footer) + shared UI (ImagePlaceholder,
                          LanguageToggle, WhatsAppButton)
data/
  translations.js        Central EN/ZH string dictionary for all UI copy
  founderStory.js         Founder's bilingual first-person story (paragraph pairs)
lib/
  LanguageContext.jsx     EN/ZH toggle state (React context + localStorage)
  sanity-queries.js       GROQ queries used by app/page.js
sanity/
  schemaTypes/            menuItem, socialPost, businessHours, siteImages
  structure.js             Studio sidebar layout (pins the two singletons on top)
  lib/client.js, image.js  Sanity client + image URL builder
sanity.config.js, sanity.cli.js   Studio configuration
```

## How content is managed

The owner edits everything from **`/studio`**, logged in with their own Sanity account (Google/GitHub/email — whoever has been added as a project member). Four content types:

| Studio item | Controls |
|---|---|
| **Site Photos** (singleton) | Hero photo and "Our Story" photo. Falls back to a placeholder block until a photo is uploaded. |
| **Business Hours** (singleton) | Open/close time (or "closed") for each day of the week, plus an optional bilingual announcement banner (e.g. holiday closures) shown only when filled in. |
| **Menu Item** | Vietnamese name, EN/ZH title & description, photo, category (Traditional Phin Drip / Handcrafted Specialty), "Signature" badge toggle, display order. |
| **Social Post** | Photo + platform (Instagram, Xiaohongshu, Facebook, TikTok, WeChat, Google Reviews, Twitter/X, YouTube) for the "From our regulars" wall. Falls back to placeholder tiles when empty. |

Edits appear on the live site **within ~60 seconds** (ISR revalidation) — no redeploy needed. The public site only ever *reads* from Sanity (no write token is shipped to the browser); writes only happen through an authenticated Studio session.

### Bilingual system

All UI copy lives in [data/translations.js](data/translations.js) as `{ en, zh }` pairs, read via the `useLanguage()` hook ([lib/LanguageContext.jsx](lib/LanguageContext.jsx)). The toggle in the nav swaps the whole page between languages (not stacked bilingual text) and persists the choice to `localStorage`. The footer tagline is pinned to English regardless of the toggle, by request.

Menu items and the founder's story carry their own `{en, zh}` fields directly on the Sanity document / in `data/founderStory.js`, rather than going through the central dictionary.

## Environment variables

Set these in **Vercel → Project → Settings → Environment Variables** (Production, Preview, and Development):

| Variable | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `jbwje2b3` | Public — safe to expose client-side |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Public dataset, read-only from the site |

Locally, these live in `.env.local` (gitignored, not committed).

## Deployment

Push to `main` → Vercel builds and deploys automatically. No manual steps beyond keeping the two env vars above in sync if the Sanity project ever changes.

If the production domain ever changes, update it in three places: `app/robots.js`, `app/sitemap.js`, `app/layout.js` (`metadataBase`), and add the new domain to the Sanity project's CORS origins (Studio → API settings, or `sanity.io/manage`).

## Known constraints

- **Sanity version pin**: `sanity@5` / `next-sanity@12`+ require a React API (`useEffectEvent`) not yet available in this project's React 19.2 / Next 15 combination, and fail to build. Pinned to `sanity@4.22.0`, `@sanity/vision@4.22.0`, `next-sanity@11.6.13` — confirmed working. Re-test compatibility before upgrading either Next.js or Sanity.
- **No embedded Google Map**: the classic no-API-key "embed" trick now returns `X-Frame-Options: SAMEORIGIN` from Google, so it can't be iframed. The Visit section links out to Google Maps instead. A real embedded map needs a Google Maps Embed API key (Google Cloud project + billing).
- **`npm audit`** reports vulnerabilities entirely inside Sanity's own CLI tooling (`@sanity/runtime-cli`, transitively `adm-zip`/`js-yaml`/`uuid`) — used only for local `sanity` CLI commands, not reachable from the deployed site or the Studio's client bundle.
- **No CSP header** — a Content-Security-Policy was intentionally left out to avoid breaking Sanity image loading / the embedded Studio without thorough testing. `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and HSTS are set in [next.config.js](next.config.js).

## Design reference

The original approved prototype (plain HTML/CSS handoff from Claude Design) is kept in [project/](project/) for reference — it's not part of the build.
