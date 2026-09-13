# Design revert — "sharp edges / primary colors" base + current content

## What was reverted to

Base design restored from commit `fd36c0b` ("update to sitesbyalex") — the last
state before `43aaf6b` ("Redesign portfolio: dark theme with scroll-scrub
background video"). Two design changes ago, counting:

1. `43aaf6b` — dark theme + scroll-scrub background video
2. `52bfbb1` / `c3cbe41` / `cb1d30a` — premium editorial × Aurora
3. (unmerged on `origin/claude/app-redesign-alignment-s2x2xs`) — Bento UI

### The restored design DNA

| Trait | Value |
| --- | --- |
| Background | `#F5F5F5` |
| Text | `#333333` |
| Primary accent | `#007BFF` (blue) — borders, active nav, footer, buttons |
| Secondary accent | `#FFA733` (orange) — hover, rules, badges, "learn more" |
| Corners | square everywhere (0 radius) |
| Depth | hard offset shadows — `10px 10px 5px rgba(0,0,0,.25)` desktop, `5px 5px 3px` mobile |
| Framing | 2–4px solid blue borders around images and cards |
| Type | root `32px` (24px ≤800px), everything in fractional `rem`, normal weight headings |
| Width | `--max-width: 2500px` |
| Motion | 0.2s transitions, marquee tickers |

Two deliberate deviations from `fd36c0b`: the "Go Back" buttons and the skill
tooltips were the only rounded elements in the old design (`border-radius: 50px`
and `2px`). They are square now, since sharp edges were the point of the revert.

---

## New content carried forward from the dark/editorial design

### Site level
- [x] Metadata: title `Alex Yoza — Software Engineer`, description naming Capital
      One / Nisatsu / Ponzu, `metadataBase`, OpenGraph block
- [x] `viewport.themeColor` / `colorScheme` flipped back to light (`#F5F5F5`)
- [x] `components/Logo.js` — vector ALEX monogram inheriting `currentColor`
      (replaces the raster `/logo.png`); `rx` dropped from 12 → 0 for sharpness
- [x] `components/Reveal.js` — fade-up-on-scroll, honors `prefers-reduced-motion`
- [x] Nav logo is a link to `/` with an `aria-label`
- [x] Nav goes full-width edge-to-edge on mobile
- [x] Footer: GitHub link added, phone number removed, © 2026
- [x] `app/icon.png` favicon

### Home `/`
- [x] Hero eyebrow `Software Engineer · Richmond, VA`
- [x] Hero name treatment (`Yoza` in accent colour)
- [x] Hero sub copy — core modernization, common capability and tooling at
      Capital One, AI-assisted workflows, full-stack products
- [x] Hero CTAs — `View experience` / `See projects`
- [x] Scroll cue
- [x] About section — `SWE at Capital One.` + UCSD grad / side projects
      (language-learning app, AI workflow orchestration platform) /
      "systems that stay up and interfaces that feel inevitable"
- [x] About links — `Get in touch` / `View my experience →`
- [x] **Full stack section (entirely new)** — Languages / Frameworks & UI /
      Cloud & infra tag groups (TypeScript, Go, SQL, React Native, FastAPI,
      Tailwind, AWS, AWS CDK, Docker, CI/CD, Developer Tooling, PostgreSQL)
- [x] `Education` section heading
- [x] Updated course list (Operating Systems promoted, `Algorithms`)
- [x] ICU course tag `Japanese (Conversational)`

### Experience `/work`
- [x] Header — eyebrow `Career`, `Experience`, lede about banking automation →
      billion-request-a-day service
- [x] **Capital One** — Associate Software Engineer, Team StreamPro / Core
      Modernization, Feb 2026 – Present
- [x] **Ponzu** — CTO & Co-Founder, AI workflow orchestration platform,
      Sep 2025 – Present, `Coming soon`
- [x] **Nisatsu** — Founder & Software Engineer, AI language-learning app,
      Jan 2026 – Present, `Coming soon`
- [x] SitesByAlex — retitled, `Client websites & web apps`, now links out to
      sitesbyalex.com with a `Live ↗` badge and a preview screenshot
- [x] Stack meta lines — SDSC `React · Node · Firebase`, BOH
      `Power Automate · Python automation`
- [x] `Coming soon` / `Live ↗` badges
- [x] Preview screenshots on cards instead of bare logos

### Projects `/projects`
- [x] Header — eyebrow `Projects`, `Things I've built.`, lede
- [x] **AGY** — independent software studio, links to agyllc.com
- [x] **Trading Lab** — algorithmic strategy research/simulation/scoring,
      `Coming soon`
- [x] Blurbs for Union Hills Family Dentistry and GSF LLC
- [x] Cards link out to the live sites; detail pages reachable from the card
- [x] UHFD stack corrected to Next.js / React / Node

### Contact `/contact`
- [x] Header — eyebrow `Contact`, `Let's build something.`, lede
- [x] Labelled rows (Email / LinkedIn / GitHub) with values
      `alex.yoza@gmail.com`, `/in/alex-yoza`, `@alexanderyoza`
- [x] Inline SVG icons for each channel

### Detail pages
- [x] Bullet copy for SDSC / Bank of Hawaii / SitesByAlex (incl. the
      "Saved 1,500+ hours annually" and Python-scripts bullets)
- [x] `Project` / `Experience` eyebrows, `← Back to …` labels
- [x] UHFD and GSF gallery pages

---

## Intentionally dropped (design, not content)

- `components/BackgroundScrubVideo.js` + `/hero/hero.mp4` — a dark-theme
  device; a full-bleed dark video does not work under a `#F5F5F5` page. File
  kept in the repo, no longer rendered.
- Aurora ambient gradients (`body::before` / `body::after`)
- Glassmorphism (`backdrop-filter`) on nav and footer
- Gradient text (`--accent-grad`) — replaced with solid `#007BFF`
- Rounded pill nav

## Content that stayed removed

Deleted before this revert and deliberately **not** restored:
`Prom XXI` (work), `Flashcard React Native Mobile App` (projects),
`RaccTracc` (projects), phone number in contact/footer.
