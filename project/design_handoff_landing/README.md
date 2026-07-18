# Handoff: NÓN Cà Phê Landing Page

## Overview
A single-page, bilingual (English / Chinese) marketing site for NÓN Cà Phê, a Vietnamese coffee shop in Kuchai Lama, Kuala Lumpur. Sections: hero, brand story, interactive menu (tabbed), culture accordion + social wall, and a footer with location/hours.

## About the Design Files
The original design was built as an **HTML prototype** (`index.html` in the project root, using the "Organic" design system's CSS tokens/classes) to establish visual direction. This folder converts that approved design into **React + Tailwind CSS components** so it can be dropped into a real codebase. Treat the JSX here as close to production-ready, but adapt it to your codebase's existing conventions (routing, image handling, state, i18n) rather than copy-pasting verbatim.

## Fidelity
**High-fidelity.** Colors, type, spacing and radii below are exact values from the approved design's token set (the Organic design system). Recreate pixel-perfectly.

## Tech assumptions
- React 18+, functional components, hooks.
- Tailwind CSS v3. `tailwind.config.js` in this folder extends the theme with the exact design tokens — merge it into your project's config (or copy the `theme.extend` block).
- Fonts: Google Fonts "Caprasimo" (headings) and "Figtree" (body, weights 400/600/700). Load via `next/font`, a `<link>`, or `@font-face` per your app's convention.
- No component library dependency — every component is plain Tailwind-styled JSX.

## Design Tokens (also in tailwind.config.js)
Colors:
- bg: #f5ead8 (page background)
- surface: #ebddc5 (card/panel fill, e.g. accordion background)
- ink: #201e1d (body text)
- accent (terracotta) ramp: 100 #fff2eb, 200 #ffe1d0, 300 #ffc6a5, 400 #f6a06b, 500 #d67f48, 600 #b2622d, 700 #8c491a, 800 #643312, 900 #402310, DEFAULT #c67139
- sage (accent-2) ramp: 100 #f0fae1, 200 #e1eecc, 300 #ccdbb2, 400 #aebf92, 500 #8fa073, 600 #728157, 700 #56633f, 800 #3d472b, 900 #272e1b, DEFAULT #7a8a5e

Typography:
- font-heading: "Caprasimo", system-ui, sans-serif (weight 400 only — display headings)
- font-body: "Figtree", system-ui, sans-serif (400/600/700 — body, UI labels)

Radii: sm 8px, md 16px, lg 28px, xl (over-rounded containers/photos) 56px (2× lg). Buttons/inputs/tags: fully pill (9999px).

Shadows: sm `0 1px 2px rgba(46,43,37,.14)`, md `0 3px 10px rgba(46,43,37,.16)`, lg `0 12px 32px rgba(46,43,37,.22)`.

Spacing rhythm: base leading unit 28px, half-step 14px; section vertical padding is generally 3× the leading unit.

## Screens / Views
Single scrolling page, sections below in order.

### 1. Nav (sticky header)
- Sticky top, translucent cream background with backdrop blur.
- Left: circular logo (34×34, object-cover, rounded-full) + wordmark "NÓN Cà Phê" (font-body, bold).
- Center/right: text links "Our Story", "Menu", "Visit" (hidden under 720px).
- Right: primary pill button "Find Us / 导航到店" — scrolls to #visit.

### 2. Hero
- Two-column grid (desktop): text column (~55%) + photo column (~45%); stacks to 1 column under 880px, image ordered first on mobile in the Story section only (hero keeps text first).
- Large soft sage-200 decorative circle (380px) bleeding off the bottom-left, behind content (z-index -1), clipped so it never widens the page.
- Display heading (Caprasimo, clamp 38–64px, tight custom line-height ~1.08): two lines —
  "More than coffee," / "it's a culture."
- Subhead (Figtree 17px/28px line-height, max ~58ch): "A 2-year journey of craftsmanship by a Malaysian-Vietnamese couple. Bringing authentic, direct-trade Vietnamese coffee straight to the heart of Kuchai Lama." — followed by a smaller (0.88em), 75%-opacity Chinese line: "不只是一杯咖啡，更是一场文化蔓延。马越夫妻的两年手作坚守，将原产地直供的浓厚风味，带入 Kuchai Lama 的日常时光。"
- Two buttons in a row: primary "Explore Menu / 浏览今日风味" (scrolls to #menu), ghost/outline "Find Us / 导航到店" (scrolls to #visit).
- Photo: rounded-[56px] overflow-hidden, shadow-lg, aspect-ratio 4:5, desaturated/lifted "washed" treatment (see Assets), placeholder caption "Slow-drip coffee, cinematic hero shot".

### 3. Our Story (id="story")
- Two-column grid: photo (~42%) + copy (~58%), image first on mobile.
- Photo: rounded-[56px], aspect 4:5, washed treatment, placeholder "Founders crafting coffee, polaroid style".
- Kicker label (13px, uppercase, tracked, terracotta-700, bold): "Our Journey"
- Heading (Caprasimo, 34px/1.4 leading): "From Saigon to KL" with a small (0.56em) Chinese subline "我们的故事：从西贡到吉隆坡".
- Two English paragraphs (15.5px/28px, ink at 82% opacity, max 54ch) — the couple's love story, direct-trade sourcing, refusal to shortcut.
- One Chinese paragraph (14.5px, 75% opacity) — full translation of both English paragraphs.

Exact copy:
> "It started with a cup of cà phê sữa đá on a Saigon afternoon — and a Malaysian traveller who fell for the coffee, and then for the woman who poured it. Two years later, that same care sits behind our counter in Kuchai Lama."
>
> "We buy directly from small farms along Vietnam's central highlands, choosing every sack ourselves and roasting to the bold, unhurried profile our home taught us. No shortcuts, no instant blends — just the phin, gravity, and time."

### 4. Menu (id="menu") — "Today's Blackboard / 今日风味黑板"
- Section heading (Caprasimo 34px) + Chinese subline.
- Tab bar (role=tablist): two pill buttons, "Traditional Phin Drip / 经典滴漏系列" and "Handcrafted Specialty / 匠心手作系列". Active tab: solid terracotta fill, white text. Inactive: transparent, 1px divider border, hover = accent-100 fill + accent-300 border. Keyboard focus = 2px accent outline, 2px offset.
- Below: a responsive card grid (auto-fit, min 260px columns, gap = leading unit) that swaps content per active tab (only one panel visible at a time — no layout shift on switch, panels have equal card count so no page jump).
- Card: white/surface card (design's `.card` = neutral-100 fill, rounded-md, shadow-sm), image on top (aspect 4:3), optional absolute-positioned signature tag chip (top-left, terracotta pill, "🌟 Signature / 招牌必点"), title (bold, with a smaller 62%-size 70%-opacity Vietnamese/Chinese subline), 14.5px description.

Menu data (4 items, 2 per tab):

**Traditional Phin Drip / 经典滴漏系列**
1. Vietnamese Black Coffee — *Cà Phê Đen · 黑咖啡* — "Bold, slow-dripped robusta over ice or hot, no sugar needed — just deep roasted intensity."
2. Vietnamese Iced Milk Coffee 🌟 Signature — *Cà Phê Sữa Đá · 越式炼乳冰咖啡* — "Our house classic — dark phin-dripped coffee swirled with condensed milk over ice."

**Handcrafted Specialty / 匠心手作系列**
1. Vietnamese Egg Coffee 🌟 Signature — *Cà Phê Trứng · 黄金蛋咖啡* — "Whipped egg yolk, condensed milk and coffee, layered into a warm, custard-like crema."
2. Coconut Espresso Slush — *Cà Phê Cốt Dừa · 椰香冰咖啡* — "Frozen coconut cream blended with espresso for a tropical, rich finish."

### 5. Culture & Social
- Kicker "Slow Living" + heading "Why so slow?" + Chinese subline "为什么越南咖啡这么慢？".
- One accordion item (expanded by default, but collapsible), max-width ~720px, surface-colored rounded-lg panel:
  - Summary: "💡 The phin, and the patience it asks for" with a custom +/– indicator (no default marker), terracotta-700 colored.
  - Body: English paragraph then Chinese paragraph (75% opacity, smaller), both explaining the phin's gravity-drip slowness as a deliberate "slow living" gift.
- Below, a second sub-header: kicker "Community" + heading "From our regulars" + Chinese subline "来自老顾客的分享".
- A 6-up image grid (Instagram/Xiaohongshu check-in placeholders), square aspect, rounded-md, gap = space-3; collapses to 3 columns under 880px.

### 6. Visit / Footer (id="visit")
- Large rounded-[56px] sage-100 "patch" panel, auto-fit 3-column grid (min 220px), containing:
  - **Location**: small uppercase terracotta-700 label "Location" + "Jalan Kuchai Maju 6, Kuchai Lama, Kuala Lumpur".
  - **Brewing Hours**: label + "Wed – Mon: 10:30 AM – 6:00 PM" / "Tuesday: Closed" (two lines).
  - **Follow Along**: label + "@noncaphe" + two circular icon links (Instagram, Xiaohongshu — Lucide-style outline icons, stroke-width 2.75, sage-200 circle background, sage-800 icon color, hover → sage-300 background).
- Final footer bar below the patch: centered, small (13px), 70%-opacity text: "NÓN Cà Phê · Kuchai Lama, Kuala Lumpur · More than coffee, it's a culture."

## Interactions & Behavior
- **Nav CTA / hero CTAs**: smooth-scroll to section anchors (#menu, #visit). Implement with `element.scrollIntoView({behavior:'smooth'})` or your router's anchor handling; respect `prefers-reduced-motion` (fall back to instant scroll).
- **Menu tabs**: controlled by a single `activeTab` state (`'phin' | 'special'`), default `'phin'`. Clicking a tab button updates state; only the matching panel renders/shows. Maintain `role="tablist""/"tab"/"tabpanel"` and `aria-selected` for accessibility.
- **Accordion**: native `<details>/<summary>` semantics (or a controlled `open` boolean if you need custom animation). Defaults open.
- **Hover states**: buttons/tabs/tags/social icons all get a themed hover tint (see tokens) — never a browser default.
- **Focus states**: every interactive element gets `:focus-visible` → 2px solid accent outline, 2px offset (Tailwind: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c67139]`).
- **Responsive**: hero/story grids collapse to 1 column under 880px; nav text links hide under 720px (icon-only CTA remains); social grid drops from 6 to 3 columns under 880px.

## State Management
- `activeTab`: string, 'phin' | 'special', lifted in the Menu component (or page-level if another section ever needs it).
- No async data fetching in this design — menu items and copy are static content (see `data/menu.js`). Wire to a CMS/API later by replacing the static array.

## Assets
- **Logo**: `assets/logo.png` — circular mark used in the nav (34×34). Source file: NonCaPhe Logo Transparent.png (user-provided, transparent background — safe on any surface color).
- **Photography placeholders**: hero photo, story/founders photo, 6 social check-in images, and 4 menu item photos — all currently placeholders in the prototype (drag-and-drop `<image-slot>` elements). Replace with real photography; recommended treatment is the "washed" look (desaturate ~60%, contrast ~85%, brightness ~110%, opacity ~94% — CSS: `filter: saturate(0.6) contrast(0.85) brightness(1.1) opacity(0.94)`, or the Tailwind arbitrary equivalent) applied to hero and story photos only (not menu/social thumbnails, which should read at full color/appetite-appeal).
- **Icons**: Instagram and Xiaohongshu icons are hand-drawn inline SVGs in the prototype at stroke-width 2.75 (Lucide style). Swap for your icon library's equivalents at the same stroke weight if available.

## Files in this folder
- `tailwind.config.js` — theme tokens (colors, fonts, radii) to merge into your project config.
- `data/menu.js` — the 4 menu items with EN/VN/CN copy, tags, category.
- `components/Nav.jsx`
- `components/Hero.jsx`
- `components/Story.jsx`
- `components/Menu.jsx`
- `components/Culture.jsx`
- `components/Visit.jsx`
- `components/Footer.jsx`
- `components/LandingPage.jsx` — composes all sections into the full page.
- Original HTML reference: `../index.html` (project root) — the approved prototype this was converted from.
