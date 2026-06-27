# Alex Yoza — Portfolio (alexyoza.com) — DevByAlex Status

> Single source of truth for the autonomous workflow. `dev-autopilot` reads this
> file to decide what to do next; every stage/feature skill updates it. Keep it
> short and current — push detail into feature cards and the log. Use absolute
> dates. Tag anything inferred (not observed) `(needs review)`.
>
> **Bugs you hit go in [`docs/BUGS.md`](./BUGS.md), not here.** The autopilot
> drains that log **before any build step** and won't enter the launch stage
> while it has open bugs.

**Stage:** plan <!-- plan | dev | launch -->
**Updated:** 2026-06-26 · main · (pre-revamp baseline)
**Stack:** Next.js 13 (App Router) · React 18 · JavaScript (no TS) · npm · CSS Modules · deployed on Vercel · no backend/DB/auth/tests/CI

## Gates (Alex approves these — agents must never self-check them)

- [ ] Spec approved
- [ ] Implementation guide approved
- [ ] Wireframes approved   ← the **dev stage is blocked** until these three are checked
- [ ] Staging deployed   ← auto via Pipeline by Alex on push to `staging`
- [ ] `staging → main` production promotion approved   ← Alex's call; `main` is protected production
- [ ] Legal & compliance passed   ← **hard gate**: not ship-ready until the `/launch-compliance` scan is clean
- [ ] Accessibility (WCAG 2.2 AA) passed   ← **hard gate**: not ship-ready until the a11y audit is clean

## Plan

- [x] `docs/SPEC.md` written — **reverse stub only**, needs `/plan-spec reverse` + Alex approval (needs review)
- [ ] Brand foundation (`docs/BRAND.md`) — public-facing → required (`/marketer-brand-generation`)
- [ ] `docs/IMPLEMENTATION_GUIDE.md` written
- [ ] Wireframes created (`docs/wireframes/`) — **capture from existing UI** (`/plan-wireframes capture`)
- [ ] Design resources specced (`docs/design/RESOURCES.md`) — loader · marketing load-in · OG preview image

## Dev

- [x] Scaffold (one-time baseline) — Next.js 13 App Router skeleton already in place ✅ `(needs review)`
- [ ] Custom app loader (built per `docs/design/RESOURCES.md`, or override recorded with a reason)
- [x] Authentication — **N/A**: static public portfolio, no accounts/backend (no auth to build or validate)

### Features

Build order top-to-bottom. Per-step legend: ⬜ not started · 🟡 in progress · ✅ done · ❌ failing.
Status: `todo` → `in-progress` → `blocked` → `done`. All Impl values below are inferred from existing routes — `(needs review)`.

| # | Feature | Spec | Wireframe | Tests | Impl | Feat-Valid | Integ-Valid | Aligned | Status |
|---|---------|:----:|:---------:|:-----:|:----:|:----------:|:-----------:|:-------:|--------|
| 1 | Home / about (`app/page.js`) | ⬜ | ⬜ | ⬜ | ✅ | ⬜ | ⬜ | ⬜ | in-progress |
| 2 | Work index + cases (boh, sdsc, sitesbyalex, xxi) | ⬜ | ⬜ | ⬜ | ✅ | ⬜ | ⬜ | ⬜ | in-progress |
| 3 | Projects index + pages (gsfhi, language-app, racctracc, uhfd) | ⬜ | ⬜ | ⬜ | ✅ | ⬜ | ⬜ | ⬜ | in-progress |
| 4 | Contact (`app/contact`) | ⬜ | ⬜ | ⬜ | ✅ | ⬜ | ⬜ | ⬜ | in-progress |
| 5 | Shared chrome (Footer, Navigate) | ⬜ | ⬜ | ⬜ | ✅ | ⬜ | ⬜ | ⬜ | in-progress |

## Launch

- [ ] No open bugs in `docs/BUGS.md`   ← soft gate: autopilot won't enter launch while bugs are open
- [ ] Acceptance tests written (`docs/ACCEPTANCE_TESTS.md`)
- [ ] Acceptance suite passed against staging (`/launch-verify`)
- [ ] Visual QA passed (`/launch-visual-qa`)
- [ ] Staging smoke test passed
- [ ] Launch-readiness audit passed
- [ ] Legal/compliance scan passed (`/launch-compliance`)
- [ ] Accessibility audit passed (WCAG 2.2 AA)
- [ ] SEO audit passed
- [ ] Prose pass done
- [ ] Store listing assets generated — N/A (web only)
- [ ] Submitted to TestFlight + Play internal — N/A (web only)

## Next action

<!-- dev-autopilot reads THIS line first. Exactly one next step. -->
→ Alex has requested a **full dark-mode redesign** (Linear/Vercel feel, futuristic
animations, generated media). Before building: `/plan-spec reverse` to backfill the
real spec from code + Alex's resume, then `/marketer-brand-generation` (public-facing),
then `/uiux-redesign` for the new always-dark theme. (See Blockers.)

## Blockers / open questions

- **Redesign requested (2026-06-26):** always-dark theme, Linear/Vercel aesthetic,
  futuristic animations, generated videos/characters/icons. Needs a design direction
  doc (`docs/DESIGN.md` via `/uiux-redesign`) before sweeping screens.
- **Resume pending:** Alex is providing a resume to update site details — fold into
  `/plan-spec reverse`.
- **Working branch:** repo's only branch is the protected production `main`. Create a
  dedicated iteration branch (e.g. `redesign` or `staging`) before any dev/cron runs.
- **Compliance unknowns:** is the contact page a form (PII) or mailto? Any analytics?
  (drives the compliance section)

## Log

<!-- newest first: date — skill — what changed (branch, commit) -->
- 2026-06-26 — redesign (readability + polish) — bumped bg-video tint for legibility; About headline split into 3 lines (companies emphasized); Capital One tile now matches Ponzu/Nisatsu (dark gradient + whitened wordmark); footer made semi-transparent glass (bg video shows through); SitesByAlex detail page uses vector `<Logo>`.
- 2026-06-26 — redesign (full-page bg video) — video is now a **fixed full-page background** (`BackgroundScrubVideo`) scrubbed by whole-page scroll (frame 0 at top → last frame at bottom); all content rides over it with a readability scrim. Replaced new audio-stripped clip. Removed old `ScrollVideoHero`.
- 2026-06-26 — redesign (hero interaction) — hero is now **hybrid scroll-scrub**: video is a sticky background scrubbed by scroll distance while the hero content scrolls normally past it (no pin/freeze). Scrub range tuned to ~100vh so it completes as the content clears into the About section (track 200vh).
- 2026-06-26 — redesign (polish round) — **hero video wired** (`public/hero/hero.mp4`, 1280×720/10s) — now autoplay-loops **in place** with normal scroll to content (dropped the pin-and-scrub per Alex). Capital One wordmark on light tile. Next.js "N" given white backing (marquee + cards + uhfd detail). Contact gains themed SVG icons (email/LinkedIn/GitHub). Card hovers softened to subtle scale + soft shadow (no big zoom). Copy: home link → "View my experience →", Work H1 → "Experience", Education heading simplified. UHFD stack firebase→Next.js. Nisatsu removed from Projects (stays in Experience).
- 2026-06-26 — redesign (detail sweep + logo) — dark-themed all 6 detail pages via `work.module.css` + `projectInfo.module.css` (framed hero/gallery images, accent links, fixed type scale for 16px root). Replaced PNG-invert logo hack with a vector `<Logo>` (ALEX monogram, `currentColor`) in nav + footer — crisp and visible on dark. All 10 routes SSR 200, clean.
- 2026-06-26 — redesign (sweep) — swept **work / projects / contact** into the dark system. Work: Capital One (StreamPro, Core Modernization), Ponzu + Nisatsu (coming soon), SitesByAlex (live), SDSC, BoH; Prom XXI dropped. Projects: AGY (live), Nisatsu, Trading Lab (coming soon), UHFD + GSF (live); RaccTracc dropped. Contact: email/LinkedIn/GitHub only (phone removed, incl. footer). Live-deploy previews captured via Playwright; Ponzu/Nisatsu marks pulled from sibling repos. All pages SSR 200, clean. Branch `redesign`, uncommitted.
- 2026-06-26 — redesign (home-first) — wrote `docs/DESIGN.md` (always-dark system); new `globals.css` dark foundation + tokens; floating-glass nav + dark footer; **rebuilt landing page** with scroll-scrub video hero (`ScrollVideoHero`, animated fallback until asset lands), `Reveal` scroll-in, intro/skills-marquee/stack/education. Content updated from resume (Capital One, Nisatsu, Ponzu). Dev server verified (SSR 200, no errors). Branch `redesign`, uncommitted.
- 2026-06-26 — init-ai — workflow bootstrapped; STATUS reconciled against existing Next.js portfolio (mature static site, no auth/tests/CI). Redesign request logged.
