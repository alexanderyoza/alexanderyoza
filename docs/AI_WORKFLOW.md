# Alex Yoza — Portfolio (alexyoza.com) — How this repo is built (DevByAlex workflow)

This project is built with the **DevByAlex** autonomous workflow. `docs/STATUS.md`
is the live control file; this file is the map.

## Stages

1. **Plan** (human-gated)
   - `/plan-spec` → `docs/SPEC.md` — interview until the spec is complete
     (incl. legal/privacy/compliance + SEO posture).
   - `/marketer-brand-generation` → `docs/BRAND.md` — brand foundation, **if the
     app is public-facing** (seeds SEO titles/locale + prose voice).
   - `/plan-guide` → `docs/IMPLEMENTATION_GUIDE.md` + `docs/features/*` — granular,
     ordered build plan (incl. a compliance/legal feature + a11y/SEO cross-cutting).
   - `/plan-wireframes` → `docs/wireframes/` — Figma frames per feature (needs a
     Figma MCP); copy is `prose-check`ed.
   - **Alex approves** the spec, guide, and wireframes. The dev stage is blocked
     until the three gates in `docs/STATUS.md` are checked.

2. **Dev** (autonomous once gates are met)
   - `/dev-scaffold` — one-time baseline: monorepo topology (`marketing/` apex +
     `web/` full-stack app on app.domain + optional `app/` mobile), branch model
     (protected `main` = production, `staging` = working line), skeleton, tooling,
     tests, and CI + deploy via Pipeline by Alex (`pba.yml` + thin caller).
   - `/dev-auth` — authentication first; security & privacy prioritized.
   - `/feature-loop <id>` — per feature: parallel tests + implementation →
     feature validation → integration validation → align to guide/wireframes →
     update STATUS.
   - `/dev-autopilot` — advances the build one safe step per run; this is what a
     schedule calls.

3. **Launch readiness**
   - Staging deploys automatically via Pipeline by Alex on push to `staging`; the
     human gate is the `staging → main` production promotion (`main` is protected).
   - `/launch-acceptance` → `docs/ACCEPTANCE_TESTS.md` (scenario spec) plus the
     runnable suites that execute it against staging: Playwright specs for every
     web surface (`marketing/` + `web/`), Maestro flows for iOS/Android.
   - `/launch-compliance` — legal scan (ToS, privacy policy, cookie consent),
     `accessibility-critique` (WCAG 2.2 AA), `seo-audit`, and `prose-check`;
     reconciles a fix queue and the two **hard gates** (Legal & compliance,
     Accessibility) that block ship-ready in `docs/STATUS.md`.
   - Companions: `/staging-smoke-test`, `/launch-readiness`.

## Rules of the road

- Dev work commits and pushes **straight to the working branch** — the branch you
  call the skill on, or the one a cron sets explicitly. No per-step branches, no
  PR pile-up. Use a dedicated iteration branch (e.g. `staging`/`autopilot`), not a
  protected default.
- Agents never self-approve a gate; approvals are Alex's.
- `docs/STATUS.md` stays accurate and the test suite stays green at every stop.
- Tests trace to the spec; never weakened just to make code pass.
- Security and privacy beat convenience — most of all in auth.

To run unattended, see `docs/SCHEDULING.md` in the DevByAlex repo.
