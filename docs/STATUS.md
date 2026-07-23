# Alex Yoza — Portfolio (alexyoza.com) — DevByAlex Status

> Single source of truth for the autonomous workflow. `dev-goal` reads this
> file to decide what to do next; every stage/feature skill updates it. Keep it
> short and current — push detail into feature cards and the log. Use absolute
> dates. Tag anything inferred (not observed) `(needs review)`.
>
> **Bugs you hit go in [`docs/BUGS.md`](./BUGS.md), cosmetic tweaks in
> [`docs/TWEAKS.md`](./TWEAKS.md), and planned changes in
> [`docs/TODO.md`](./TODO.md) — not here.** The goal run drains bugs, then
> tweaks, then todos, **before any build unit** and won't enter the launch
> stage while any lane has open entries.

**Stage:** plan <!-- plan | dev | launch -->
**Updated:** 2026-07-08 · main · (design-enforcement pass; redesign PRs #8–#11 merged 2026-07-07)
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
- [x] Design style chosen (`docs/DESIGN.md`) — PRIMARY × SECONDARY via `/plan-design`, with web-searched real-world references recorded (backfilled 2026-07-08 per DevByAlex `123bb20` mandate; rides under the wireframes gate)
- [x] Wireframes created (`docs/wireframes/`) — captured from the existing UI 2026-07-08 (BUG-004 closed); rides under Alex's approval gate with the guide
- [ ] Design resources specced (`docs/design/RESOURCES.md`) — loader · marketing load-in · OG preview image

## Dev

- [x] Scaffold (one-time baseline) — Next.js 13 App Router skeleton already in place ✅ `(needs review)`
- [ ] Custom app loader (built per `docs/design/RESOURCES.md`, or override recorded with a reason)
- [x] Authentication — **N/A**: static public portfolio, no accounts/backend (no auth to build or validate)

### Features

Build order top-to-bottom. Per-step legend: ⬜ not started · 🟡 in progress · ✅ done · ❌ failing.
Status: `todo` → `in-progress` → `blocked` → `done`. All Impl values below are inferred from existing routes — `(needs review)`.

| # | Feature | Spec | Wireframe | Tests | Impl | Feat-Valid | Integ-Valid | E2E | Aligned | Status |
|---|---------|:----:|:---------:|:-----:|:----:|:----------:|:-----------:|:---:|:-------:|--------|
| 1 | Home / about (`app/page.js`) | ⬜ | ⬜ | ⬜ | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | in-progress |
| 2 | Work index + cases (boh, sdsc, sitesbyalex, xxi) | ⬜ | ⬜ | ⬜ | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | in-progress |
| 3 | ~~Projects index + pages~~ — **retired 2026-07-08**: routes were orphans; projects live as rows/↗ links in the Experience index | — | — | — | — | — | — | n/a | — | done |
| 4 | Contact (`app/contact`) | ⬜ | ⬜ | ⬜ | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | in-progress |
| 5 | Shared chrome (Footer, Navigate) | ⬜ | ⬜ | ⬜ | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | in-progress |

E2E = golden-path flow green against the running app (Playwright web / Maestro native); `n/a` when the feature has no user-facing flow.

## Launch

- [ ] No open bugs in `docs/BUGS.md`   ← soft gate: the loop won't enter launch while any lane (bugs/tweaks/todos) has open entries
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

<!-- dev-goal reads THIS line first. Exactly one next step. -->
→ Redesign is DONE (premium editorial × Swiss/minimalist + editorial serif,
PRs #8–#11 merged 2026-07-07; design-enforcement pass 2026-07-08 — see Log).
Next: finish the plan-stage backlog — `/plan-spec reverse` approval, then
`/marketer-brand-generation`. (Wireframe capture done 2026-07-08.)

## Blockers / open questions

- **Compliance unknowns:** is the contact page a form (PII) or mailto? Any analytics?
  (drives the compliance section)

<!-- Resolved 2026-07-08: the 2026-06-26 "dark-mode redesign requested" blocker
     (superseded twice; current style applied via PRs #8–#11), "resume pending"
     (docs/resume.pdf landed; content updated from it), and "working branch"
     (iteration happened on claude/* branches, merged by PR). -->

## Log

<!-- newest first: date — skill — what changed (branch, commit).
     Rotates: keep the current stage's entries, max ~15 lines; prune the rest
     on stage transition (git keeps the history). -->
- 2026-07-23, dev-update, re-vendored DevByAlex v0.5.0 `2e5d96c` (per-feature e2e gate); STATUS features table gained the E2E column. pulse: n/a
- 2026-07-15 — dev-update (goal-driven rollout) — **Workflow re-vendored `278bc25` → `d4d590f` (v0.3.0)** — `dev-autopilot` + `dev-schedule` removed (pruned from `.claude/skills/`); replaced by goal-driven `/dev-goal` (push until the goal is met; slim orchestrator, one green commit per unit) and the `/dev-todo` planned-change lane. Doc backfill the re-vendor doesn't touch: stamped `docs/TWEAKS.md` (cosmetic light lane, was missing since the 313a2d1 tweak-lane release) + `docs/TODO.md` (planned changes); STATUS header/soft-gate/next-action and BUGS/AI_WORKFLOW/DECISIONS references repointed from autopilot to `dev-goal`. No app code changed. (main)
- 2026-07-08 — gate findings resolved (round 2, Alex's calls) — BUG-001 closed by amending DESIGN.md to the built short home; BUG-002 closed by dropping the kind tag from the contract; BUG-003/005 mooted by **removing the orphaned `/projects/gsfhi` + `/projects/uhfd` routes** (plus `projectInfo.module.css`, their assets, and Navigate's dead `/projects` check). BUG-004 (wireframe capture) remains the only open bug. Branch `claude/design-gate-enforcement` (PR #12).
- 2026-07-08 — design-enforcement pass — the `123bb20` design mandates enforced retroactively: (1) web-searched real-world references backfilled into `docs/DESIGN.md` (Allie, Blancpain, Kirilenko, UNCUT.wtf + gallery pool, anti-reference) with Why/Alternatives; (2) the 2026-07-07 style decision backfilled into `docs/DECISIONS.md`; (3) **design-critic screenshot gate run for the first time** on all 7 routes × light/dark × desktop/mobile — first run FAIL (1 blocker, 3 major, 3 minor); fixed CRIT-001 (Reveal.js hardened: IO-missing bail + 3s fallback so content can never strand at opacity 0), CRIT-003 (dead "← Back to projects" links → `/work` "Back to experience"), CRIT-004 (accent discipline: monochrome project h1 links, `--text-dim` role subtitles); CRIT-006 withdrawn on evidence (Coming-soon ↗ rows really are live external links). Re-run **PASS**, conditional on BUG-001..005 (`docs/BUGS.md`) — home-page sections build-vs-amend, kind tags, project prose, wireframe capture, h1 underline — which are Alex's calls.
- 2026-07-07 — restyle rollout — premium editorial × Swiss/minimalist + editorial serif applied across all screens (PRs #8–#11 merged to `main`); supersedes Bento tiles and Aurora glow. Content updates rode along (Crucible rename, positioning subheader, Experience links).
- 2026-07-07 — workflow sync — DevByAlex synced to `123bb20` (`cf2c432`): uiux-redesign skill, design-critic screenshot gate, universal design rules, web-searched-references mandate in plan-design.
- 2026-06-26 — redesign (readability + polish) — bumped bg-video tint for legibility; About headline split into 3 lines (companies emphasized); Capital One tile now matches Ponzu/Nisatsu (dark gradient + whitened wordmark); footer made semi-transparent glass (bg video shows through); SitesByAlex detail page uses vector `<Logo>`.
- 2026-06-26 — redesign (full-page bg video) — video is now a **fixed full-page background** (`BackgroundScrubVideo`) scrubbed by whole-page scroll (frame 0 at top → last frame at bottom); all content rides over it with a readability scrim. Replaced new audio-stripped clip. Removed old `ScrollVideoHero`.
- 2026-06-26 — redesign (hero interaction) — hero is now **hybrid scroll-scrub**: video is a sticky background scrubbed by scroll distance while the hero content scrolls normally past it (no pin/freeze). Scrub range tuned to ~100vh so it completes as the content clears into the About section (track 200vh).
- 2026-06-26 — redesign (polish round) — **hero video wired** (`public/hero/hero.mp4`, 1280×720/10s) — now autoplay-loops **in place** with normal scroll to content (dropped the pin-and-scrub per Alex). Capital One wordmark on light tile. Next.js "N" given white backing (marquee + cards + uhfd detail). Contact gains themed SVG icons (email/LinkedIn/GitHub). Card hovers softened to subtle scale + soft shadow (no big zoom). Copy: home link → "View my experience →", Work H1 → "Experience", Education heading simplified. UHFD stack firebase→Next.js. Nisatsu removed from Projects (stays in Experience).
- 2026-06-26 — redesign (detail sweep + logo) — dark-themed all 6 detail pages via `work.module.css` + `projectInfo.module.css` (framed hero/gallery images, accent links, fixed type scale for 16px root). Replaced PNG-invert logo hack with a vector `<Logo>` (ALEX monogram, `currentColor`) in nav + footer — crisp and visible on dark. All 10 routes SSR 200, clean.
- 2026-06-26 — redesign (sweep) — swept **work / projects / contact** into the dark system. Work: Capital One (StreamPro, Core Modernization), Ponzu + Nisatsu (coming soon), SitesByAlex (live), SDSC, BoH; Prom XXI dropped. Projects: AGY (live), Nisatsu, Trading Lab (coming soon), UHFD + GSF (live); RaccTracc dropped. Contact: email/LinkedIn/GitHub only (phone removed, incl. footer). Live-deploy previews captured via Playwright; Ponzu/Nisatsu marks pulled from sibling repos. All pages SSR 200, clean. Branch `redesign`, uncommitted.
- 2026-06-26 — redesign (home-first) — wrote `docs/DESIGN.md` (always-dark system); new `globals.css` dark foundation + tokens; floating-glass nav + dark footer; **rebuilt landing page** with scroll-scrub video hero (`ScrollVideoHero`, animated fallback until asset lands), `Reveal` scroll-in, intro/skills-marquee/stack/education. Content updated from resume (Capital One, Nisatsu, Ponzu). Dev server verified (SSR 200, no errors). Branch `redesign`, uncommitted.
- 2026-06-26 — init-ai — workflow bootstrapped; STATUS reconciled against existing Next.js portfolio (mature static site, no auth/tests/CI). Redesign request logged.
