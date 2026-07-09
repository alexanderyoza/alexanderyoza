# Alex Yoza — Portfolio (alexyoza.com) — Wireframes

> Written by `/plan-wireframes`, in one of two modes. **GENERATE** (greenfield):
> low-fidelity Figma frames per feature. **CAPTURE** (existing app): an inventory
> of the screens already in the code — no Figma. Either way it's the artifact each
> feature is validated against and **part of Alex's approval gate** with the guide.

**Mode:** CAPTURE (from code) — backfilled 2026-07-08 (BUG-004); reflects the
current shipped UI (premium editorial × Swiss/minimalist), not an approved
redesign.
**Updated:** 2026-07-08

## Screen → feature map

> In CAPTURE mode, "Frame link / source" is the file the screen lives in, and
> mark states that are **missing** in the code (they become feature-board work).

| Feature | Screen | Frame link / source | States covered |
|---------|--------|---------------------|----------------|
| Home / about (F1) | Home — masthead (serif name → italic-accent lede → CTA pair, portrait right) → hairline rule → meta facts strip (role, location) → rule → single-column about prose | `app/page.js` (`styles/page.module.css`) | default, light/dark, responsive (portrait stacks ≤860px) |
| Experience (F2) | Experience index — serif h1 → **Education** group (2 rows) → **Work** group (8 rows, ongoing-first ordering). Row = dates · title · role · description · affordance arrow (`→` internal, `↗` external, "Coming soon" static/linked) | `app/work/page.js` (`styles/workOverview.module.css`) | default, light/dark, hover (row), external vs internal vs static rows |
| Experience (F2) | Work detail — Bank of Hawaii: logo mark + date row → thin-framed hero figure → serif h1 + position + location → bullet prose → "← Back to experience" | `app/work/boh/page.js` (`styles/work.module.css`) | default, light/dark |
| Experience (F2) | Work detail — SDSC: same pattern as BoH | `app/work/sdsc/page.js` (`styles/work.module.css`) | default, light/dark |
| Contact (F4) | Contact — serif h1 ("Let's build something.") → lede → 3 link rows (icon · label · value · arrow): email, LinkedIn, GitHub | `app/contact/page.js` (`styles/contact.module.css`) | default, light/dark, hover |
| Shared chrome (F5) | Nav — logo · About / Experience / Contact (accent underline on active) · theme toggle | `components/Navigate.js`, `components/ThemeToggle.js` | default, active item, light/dark |
| Shared chrome (F5) | Footer | `components/Footer.js` | default, light/dark |
| Shared chrome (F5) | Scroll reveal — IO-driven, hardened: bails without IO, 3s fallback so content can't strand hidden | `components/Reveal.js` | default, reduced-motion/IO-missing fallback |

**Missing states (feature-board candidates):**
- No custom `not-found.js` — 404 falls back to the unstyled Next.js default
  (off-brand against the editorial chrome).
- No loading/error states exist anywhere — acceptable: every page is static
  with no data fetching or forms.
- `/projects/*` detail pages were **removed 2026-07-08** (orphaned routes);
  external ↗ links on Experience rows are the only project surface — not a
  missing state, recorded so nobody re-adds them from old references.

## Primary user flow(s)

1. Home → "View experience →" → Experience index → row (`/work/boh` or
   `/work/sdsc`) → "← Back to experience" → external ↗ (Nisatsu / Ponzu / AGY /
   SitesByAlex, new tab).
2. Home → "Get in touch →" (or nav Contact) → Contact → mailto / LinkedIn /
   GitHub.
3. Any page → nav theme toggle → light/dark persists via `localStorage.theme`
   (`data-theme` on `<html>`).

## Notes

- Low-fidelity: structure and flow, not pixel polish.
- Captured from code, not designed: this inventory documents the shipped
  screens as the validation artifact (DevByAlex `123bb20` gate requirement).
- Honors `docs/DESIGN.md` tokens: near-monochrome editorial, serif display over
  clean sans, hairline rules, one restrained accent, light/dark parity.
- Copy is terse and label-like throughout (CTAs "View experience →",
  "Get in touch →"; contact lede) — no AI-tell phrasing observed at capture.
