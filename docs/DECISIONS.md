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
