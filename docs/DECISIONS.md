# Decision Log

Material decisions made while building this app, newest first. The workflow
appends here instead of writing back to an external brain — this file is the
project's own durable record of *why* things are the way they are.

Append an entry whenever a stage makes a choice worth remembering: an auth
provider, a data-model tradeoff, a scaffolding/topology call, a launch decision.
Keep each entry short — the rationale matters more than the prose.

## Format

```
## YYYY-MM-DD — <short title>
**Stage:** <plan-spec | dev-auth | dev-scaffold | dev-autopilot | launch-* | …>
**Decision:** <what was decided, one or two sentences>
**Why:** <the reasoning / what it rules out>
**Affects:** <files, features, or follow-ups this constrains>
```

---

<!-- Newest entries below this line -->

## 2026-07-11 — No extra observability on this site
**Stage:** launch (Alex's call, during the DevByAlex v0.2.0 rollout)
**Decision:** No error monitoring, analytics, or uptime alerting will be added.
The `/launch-observability` contract is **waived** — the `Observability wired`
launch row and the live-events row in STATUS are N/A, not pending.
**Why:** Static public portfolio with no backend, accounts, or transactions —
production signal beyond user reports isn't worth the surface it adds. This also
settles the analytics half of the compliance unknown: nothing to disclose
because nothing is collected.
**Affects:** `docs/STATUS.md` Launch + Live sections (rows N/A);
`/launch-compliance` (no analytics disclosure needed); `/live-triage` runs on
`docs/FEEDBACK.md` user reports alone.

## 2026-07-11 — Leave-no-orphans enforcement sweep; workflow synced to ec490f4
**Stage:** dev-update (DevByAlex vendor sync + retro orphan sweep)
**Decision:** Vendored workflow re-synced ff86ad9 → **ec490f4** (leave-no-orphans
rule). Retro sweep of the app removed 23 provably unreferenced public assets:
`next.svg`/`vercel.svg` (boilerplate), `github.png`/`javascript.png` (pre-redesign
leftovers), `public/skills/` (12 icons — old home skills grid, removed in the
2026-06-26 redesign), `work/xxi.JPG`/`work/xxi-work.jpg` (Prom XXI dropped,
confirmed in INTAKE), `public/projects/racctracc/` (3 files — RaccTracc dropped,
confirmed), `projects/nisatsu/logo.png` (byte-identical duplicate of
`work/nisatsu/logo.png`), `work/capitalone/logo.png` (superseded by `icon.jpg`,
which `/work` uses). Code, components, styles, and deps had no orphans.
**Kept pending Alex's call:** `projects/stockapi/stockapi-cover.png` (Trading Lab
"coming soon" asset, recorded kept in INTAKE but no surface remains) and
`projects/agy/preview.png` (recorded kept for the retired projects card; `/work`
uses only the AGY logo).
**Why:** Rolling out DevByAlex's leave-no-orphans rule — every run cleans up what
its work strands; these assets were stranded by the redesign and the projects
retirement. `npm run build` green after removal.
**Affects:** `.claude/` (managed vendor files), `public/`; STATUS feature row 2
still lists `xxi` from route inference — stale, xxi is dropped.

## 2026-07-08 — Gate findings resolved by contract amendment + orphan removal, not building
**Stage:** plan-design (enforcement pass, round 2 — Alex's calls on the deferred BUG queue)
**Decision:** (1) DESIGN.md's Home layout amended to the built, deliberately-short
page (masthead → meta facts → about) instead of building the committed
Selected-work index / education / contact close — those live on Experience and
Contact. (2) The kind tag dropped from the Experience index contract; the merged
index stays uniform. (3) `/projects/gsfhi` and `/projects/uhfd` **removed**
(with `styles/projectInfo.module.css` and their `public/projects/` assets) —
they were orphans with no inbound links, absent from the Experience index, and
Alex believed them already gone; external ↗ links on index rows are now the only
project surface. This also mooted the no-prose and half-underlined-h1 findings.
**Why:** doc and screens must agree for the design-critic gate to be finally
clean, and Alex chose the built reality over the aspirational section list.
Removing dead routes beats polishing pages nothing links to.
**Affects:** `docs/DESIGN.md` (Layout), `app/projects/*` (deleted),
`components/Navigate.js` (dead `/projects` active-state check removed),
`docs/BUGS.md` (BUG-001/002/003/005 closed; BUG-004 wireframes still open).

## 2026-07-08 — Design mandate enforced: web-searched references backfilled into DESIGN.md
**Stage:** plan-design (enforcement pass)
**Decision:** Backfilled the mandatory real-world reference set (Thibaud Allie,
Thierry Blancpain, Slava Kirilenko, UNCUT.wtf + gallery pool and an
anti-reference) into `docs/DESIGN.md`, with Why and Alternatives, to comply
with the plan-design web-reference mandate from DevByAlex `123bb20` (synced
here as `cf2c432`).
**Why:** The mandate landed one day after the current style was chosen, so the
style pick predated it; downstream stages (wireframes, redesign sweeps, the
design critic) now judge against pulled references instead of memory. The
2026-07-07 style pick itself was also missing from this log (only the retired
Aurora pick was recorded) — see the entry below.
**Affects:** `docs/DESIGN.md` (Style choice); the design-critic gate now has
its reference set; `docs/STATUS.md` reconciled the same day.

## 2026-07-07 — Visual style re-pinned: premium editorial × Swiss/minimalist + editorial serif (backfilled 2026-07-08)
**Stage:** plan-design (restyle) — *entry backfilled during the 2026-07-08
enforcement pass; the decision itself was made and applied 2026-07-07.*
**Decision:** Superseded premium editorial × Bento UI (and before it × Aurora)
with **premium editorial × Swiss/minimalist + editorial serif**: flat,
type-first, hairline-driven, light + dark, Fraunces display over Inter,
near-monochrome with one red accent, content as typographic indexes.
**Why:** Tiles read as a dashboard and glow reads as a template trend; a
portfolio's product is the person, and type-first restraint reads as senior
confidence. Applied across all screens via the redesign-alignment PRs
(#8–#11) merged 2026-07-07.
**Affects:** `docs/DESIGN.md` (Style choice, Supersedes), `styles/globals.css`
tokens, every customer-facing screen.

## 2026-07-06 — Visual style pinned: premium editorial × Aurora
**Stage:** plan-design
**Decision:** Committed the site's named style as **premium editorial × Aurora**
(PRIMARY structure × SECONDARY feeling) in `docs/DESIGN.md`, formalizing the
existing dark, Linear/Vercel-grade look under the plan-design vocabulary added in
DevByAlex `06f734c`.
**Why:** The DESIGN.md predated `/plan-design` — it described a look without
pinning a named style, and an intentionless default is the #1 generic-AI-UI tell.
Portfolio = premium-editorial structure (category + density, not mood); Aurora's
glowing indigo→cyan gradient light matches the built `--accent-grad` + scroll-scrub
hero and the *precise · futuristic · quiet-confident* feel. Alex confirmed the pick
over Tenebrism and Luxury Typography.
**Affects:** `docs/DESIGN.md` (Style choice); governs `/uiux-audit`,
`/plan-wireframes`, `/dev-scaffold`, and any future `/uiux-redesign`.
