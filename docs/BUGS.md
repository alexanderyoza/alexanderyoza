# Alex Yoza — Portfolio (alexyoza.com) — Bug Log

> Drop bugs here as you hit them — one entry per bug under **Open**. This file is
> for **you** (the human); `dev-autopilot` is the one that clears it.
>
> On every run, **before** scaffold, auth, or any feature work, the autopilot
> drains this log: it fixes **every** open bug — each through its own verify loop
> via `fix-errors` — moves it to **Fixed** with the fixing commit, and only then
> moves on. Open bugs also **block the launch stage**: the autopilot will not
> advance into `/launch-acceptance` while any remain.
>
> You only need **Title** + enough **Repro / detail** for the fix to be
> unambiguous. Leave the rest blank — the autopilot fills the Fixed rows. Keep IDs
> unique and monotonic (BUG-001, BUG-002, …); never reuse a retired ID.

## Open

<!-- Copy this block per bug. Anything the autopilot can't reproduce or pin down
     it will NOT silently close — it leaves the bug here and records why in
     docs/STATUS.md › Blockers, then asks you. -->
<!--
### BUG-001 — <short title>
- **Severity:** blocker | high | medium | low
- **Surface:** <screen / route / module / file>
- **Repro:** <steps, or the exact failing input / command>
- **Expected:** <what should happen>
- **Actual:** <what happens instead — paste the error / stack trace>
- **Notes:** <links, related feature id, anything that pins it down>
-->

### BUG-001 — Home page missing committed DESIGN.md sections (design-critic CRIT-002, major)
- **Severity:** high
- **Surface:** `/` — `app/page.js`
- **Repro:** load the home page; compare against `docs/DESIGN.md` › Layout › Home
- **Expected:** masthead (with eyebrow) → two-column about + meta sidebar → "Selected work" typographic index → education → "Let's build something" contact close
- **Actual:** masthead (no eyebrow) → floating meta strip → single-column about prose → footer; Selected-work index, education, and contact close absent
- **Notes:** design-critic gate run 2026-07-08 (retroactive enforcement of DevByAlex `123bb20`). **Alex's call: build the missing sections or amend DESIGN.md** — the critic will fail the gate either way until doc and screen agree.

### BUG-002 — Experience index rows missing the kind tag (design-critic CRIT-005, minor)
- **Severity:** low
- **Surface:** `/work` — `app/work/page.js`
- **Repro:** compare index rows against DESIGN.md ("year · title · description · kind tag")
- **Expected:** small tag distinguishing ROLE / PROJECT / STUDIO per row
- **Actual:** no tag; employment, projects, and studios are visually identical
- **Notes:** from the 2026-07-08 design-critic gate run.

### BUG-003 — Project detail pages have no prose (design-critic CRIT-007, minor)
- **Severity:** low
- **Surface:** `/projects/gsfhi`, `/projects/uhfd`
- **Repro:** open either page
- **Expected:** DESIGN.md detail layout: eyebrow → serif h1 → figures → **prose** → back link (work pages show the pattern)
- **Actual:** h1, date, three unlabeled tech logos, gallery, back link — no description at all
- **Notes:** needs real content from Alex; from the 2026-07-08 design-critic gate run.

### BUG-004 — Wireframes never captured from the existing UI (design-critic process note)
- **Severity:** medium
- **Surface:** `docs/wireframes/` (unfilled template)
- **Repro:** open `docs/wireframes/README.md`
- **Expected:** `/plan-wireframes capture` backfilled frames, so the critic can judge structure against intent
- **Actual:** template only; DESIGN.md is the sole intent contract
- **Notes:** already an unchecked Plan item in STATUS.md; the critic flagged it during the 2026-07-08 gate run.

### BUG-005 — Project h1 reads as half-underlined (design-critic CRIT-008, advisory)
- **Severity:** low
- **Surface:** `/projects/gsfhi`, `/projects/uhfd` — `styles/projectInfo.module.css` `.title a`
- **Repro:** view either project h1: "GSF LLC — <u>Housing Development Company Website</u>"
- **Expected:** underline the whole linked title, or move the external link out of the h1 into a "Visit site ↗" meta line
- **Actual:** hairline underline covers only the linked span with no cue why the boundary falls mid-title
- **Notes:** non-blocking advisory from the 2026-07-08 gate re-run (PASS); fine to batch with BUG-003's prose work.

## Fixed

<!-- newest first — the autopilot appends here: BUG-id — title — fix summary
     (branch · commit · date). Kept as an audit trail; safe to prune old entries. -->

_(none)_
