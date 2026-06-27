# Redesign intake — Alex Yoza portfolio

> Working doc for the dark-mode redesign. Branch: `redesign`.
> Direction: **always-dark**, Linear/Vercel feel, **refined & restrained**
> futuristic motion, **home-first** rollout. Resume: `docs/resume.pdf`.

## A. Resume reconciliation (resume → site)

Source of truth: `docs/resume.pdf`. Contact email per resume: **alex.yoza@gmail.com**.

| Resume item | On site now? | Action |
|---|---|---|
| **Capital One** — Associate SWE, Richmond VA (Feb 2026–) | ❌ no | **ADD to Work** (newest + flagship role: observability, AWS CDK, Go, ~1B req/day) |
| **Nisatsu** — Founder, language-learning app (Jan 2026–) | ~ as `language-app` "Flashcard RN App" | **RENAME/EXPAND → Nisatsu**; link = **"Coming soon"** |
| **Ponzu** — CTO & Co-Founder, AI workflow orchestration (Sep 2025–) | ❌ no | **ADD to Work**; link = **"Coming soon"** |
| **SitesByAlex** — Web Developer (Jun 2023–) | ✅ `work/sitesbyalex` | update copy from resume; live link → sitesbyalex.com |
| **SDSC** — Developer Intern (2024) | ✅ `work/sdsc` | update copy from resume |
| **Bank of Hawaii** — eSolutions Intern (2022) | ✅ `work/boh` | update copy from resume |
| **Trading Lab** — Python algo-trading platform (in dev) | ❌ no | **ADD to Projects** |
| **ICU Tokyo** exchange + **UCSD** BS CS | ✅ home | update dates/details from resume |
| `work/xxi` — "Prom XXI / Private Event Coordinator" (non-tech) | ✅ on site | **DROP** (removed — not on resume) |
| **AGY** (agyllc.com) — Alex's umbrella software studio | ❌ no | **ADD a single showcase card** linking to agyllc.com. Do **NOT** nest projects under it — it's one card, not a container. |
| Existing projects: `uhfd` (Union Hills Family Dentistry), `gsfhi` (GSF LLC), `racctracc` (RaccTracc) | ✅ | keep; add live links if any |

## B. Live deploy links (link FROM each page)

| Page | Route | Live URL | Status |
|---|---|---|---|
| sitesbyalex | `/work/sitesbyalex` | https://sitesbyalex.com/ | ✅ provided |
| **AGY (umbrella studio)** | new showcase card | https://agyllc.com/ | ✅ add single card, links out; no nested projects |
| Nisatsu | `/projects/...` | — | **Coming soon** (no link) |
| Ponzu | `/work/...` | — | **Coming soon** (no link) |
| gsfhi (GSF LLC) | `/projects/gsfhi` | https://gsfhi.com/ | ✅ provided |
| uhfd (Union Hills Family Dentistry) | `/projects/uhfd` | https://unionhillsfamilydentistry.com/ | ✅ provided |
| ~~racctracc~~ | ~~`/projects/racctracc`~~ | — | ❌ **REMOVE** (drop card; delete route in sweep) |
| Capital One | `/work/...` | (n/a internal) | — |

## C. Screenshot previews

- Captured visually for reference: sitesbyalex.com, agyllc.com (both dark/editorial — good aesthetic refs).
- Real preview files to be generated during build via a headless Playwright script
  → saved to `public/work/<name>/preview.png` or `public/projects/<name>/preview.png`.
- Alternatively Alex provides images at the dimensions in section D.

## D. Image dimensions (for anything Alex provides)

| Asset | Dimensions | Format | Notes |
|---|---|---|---|
| Project/work card preview | **1600 × 1000** (16:10) | PNG or WebP | downscaled in-card; @2x-safe |
| Nisatsu card image | 1600 × 1000 | PNG/WebP | "coming soon" card |
| Ponzu card image | 1600 × 1000 | PNG/WebP | "coming soon" card |
| Portrait (home hero) | **1200 × 1500** (4:5) | PNG/WebP | replaces `portrait.png` if updating |
| Logo / personal mark | **SVG** | SVG | enables animated loader + crisp nav |
| OG / social share image | 1200 × 630 | PNG | I generate from brand tokens |
| Skill/tech icons | SVG preferred (else 128×128) | SVG/PNG | moving toward a clean icon set |

## D2. Landing-page scroll-video-frame hero (requested)

Apple-style: scroll position scrubs through a video / frame sequence. Plan:
- Implementation: muted `playsInline` `<video>`, scroll progress → `currentTime`
  (rAF + lerp smoothing). Fallback to static poster on `prefers-reduced-motion`
  and on load error. Mobile-safe.
- **Asset needed** (generate via Gemini/Veo or provide):
  - Hero video: **1920×1080**, ~6–10s, **no audio**, H.264 `.mp4` (+ `.webm` if easy),
    target < 8 MB. Dark/futuristic, slow continuous motion that reads well when
    scrubbed (e.g. abstract grid/particles forming the "AGY"/initials, or a
    flythrough). A taller **1080×1350** mobile cut is a plus.
  - Poster frame: 1920×1080 PNG (first frame) for fallback.
- Alternative (sharper, heavier): numbered frame sequence (e.g. 120× `1600×900`
  JPGs) drawn to `<canvas>`. Say the word and I'll spec the frame export instead.

## FINAL DECISIONS (2026-06-26, confirmed by Alex)

**Work (experience):**
- Capital One — Associate Software Engineer. Card text: **"Team StreamPro, Core
  Modernization"** and nothing more (no metrics/bullets). No logo found → styled card.
- Ponzu — CTO & Co-Founder. Logo `public/work/ponzu/logo.png`. **Coming soon** (link exists, hold for now).
- Nisatsu — Founder. Logo `public/work/nisatsu/logo.png`. **Coming soon**.
- SitesByAlex — link sitesbyalex.com, preview ✅.
- SDSC, Bank of Hawaii — keep, existing images.
- ~~Prom XXI~~ — **dropped (confirmed).**

**Projects:**
- AGY — agyllc.com, preview ✅, logo `public/projects/agy/logo.png` (black → invert on dark).
- Nisatsu (language app) — existing `public/projects/language-app/*` screenshots, logo two-books. Coming soon.
- Trading Lab — `public/projects/stockapi/stockapi-cover.png` (dark candlestick, on-theme). Coming soon.
- Union Hills Family Dentistry — unionhillsfamilydentistry.com, preview ✅.
- GSF LLC — gsfhi.com, preview ✅.
- ~~RaccTracc~~ — **dropped (confirmed).**
- **No other projects for now** (confirmed — DayDump/Conceptify NOT added).

**Contact:** email + LinkedIn + GitHub only. **Drop the phone number.**

**Media copied from sibling repos:** Ponzu, Nisatsu marks ✅. (DayDump/Conceptify removed — unused.)

**Still open:** hero video (`public/hero/hero.mp4`, fallback live until then); optional logo SVG.

## E. (resolved — nothing more to add for now)

- [ ] _Alex: list the additional projects (name, 1-liner, tech, live URL or "coming soon", image)._
