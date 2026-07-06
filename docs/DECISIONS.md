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
