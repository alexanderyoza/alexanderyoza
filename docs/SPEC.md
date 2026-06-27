# Alex Yoza — Portfolio (alexyoza.com) — Spec

> Written by `/plan-spec`. The foundation for the data model, routes, screens,
> and the implementation guide. **Needs Alex's approval** (gate in
> `docs/STATUS.md`) before the guide. Tag inferred items `(needs review)`.
>
> **This is a reverse-engineered stub** — the app already exists. Backfill the
> real spec from the code with `/plan-spec reverse`, then have Alex approve it.

**Status:** draft <!-- draft | approved -->
**Updated:** 2026-06-26

## Problem & user

- **Problem:** _Personal portfolio site to present Alex Yoza's work, projects,
  and contact info to recruiters/clients._ (needs review)
- **Who it's for:** _Recruiters, potential clients/collaborators viewing Alex's
  portfolio._ (needs review)

## Core jobs (the 3–5 things a user must be able to do)

1. _Browse Alex's professional work (Work index + per-company case pages: boh,
   sdsc, sitesbyalex, xxi)._ (needs review)
2. _Browse Alex's personal projects (Projects index + per-project pages: gsfhi,
   language-app, racctracc, uhfd)._ (needs review)
3. _Read the about/intro on the home page and find contact details._ (needs review)

## Explicitly out of scope (v1)

- _No accounts, no backend, no CMS — static content edited in code._ (needs review)

## Data model sketch

- _None — static site, content hard-coded in page components._ (needs review)

## Auth & access

- _None. Fully public static portfolio; no login, no protected routes._ (needs review)

## Legal, privacy & compliance (the "don't get sued" section)

> Decided here, built in the guide, verified at launch by `/launch-compliance`.
> This captures the requirements; it is not legal advice. **(needs review)**

- **Data collected & PII:** _Likely none beyond a contact link/form — confirm the
  contact page mechanism._ (needs review)
- **Terms of Service:** _Probably N/A (no accounts/payments/UGC)._ (needs review)
- **Privacy Policy:** _Required only if analytics/trackers or a contact form
  collecting PII are present — confirm._ (needs review)
- **Cookie consent (web):** _Required only if non-essential cookies/analytics
  run — confirm whether any analytics are wired._ (needs review)
- **Regulatory regimes in scope:** _Likely "none — static personal site" unless
  EU visitors + analytics; confirm._ (needs review)
- **User-rights obligations:** _N/A if no PII stored._ (needs review)
- **Subscriptions & auto-renewal:** _N/A — no billing._
- **Accessibility target:** **WCAG 2.2 AA** (public site — ADA/EAA exposure).

## Monetization

- _None — personal portfolio._ (needs review)

## Platform

- _Web (responsive). Deployed on Vercel at alexyoza.com._

## Design & UX (drives the wireframes — fill this in here)

- **Existing screens:** home, contact, projects (index + 4), work (index + 4) —
  already built with CSS Modules. Wireframes should be **captured from the
  existing UI**, not generated. (needs review)
- _Remaining design fields to be filled by `/plan-spec reverse`._

## SEO & discoverability

> Drives the SEO structure baked into the guide and verified by `/seo-audit` at
> launch. **This is a public marketing/portfolio site — SEO is in scope.**

- **Public / marketing surfaces:** _All routes are public and indexable._
- **Brand foundation:** _`docs/BRAND.md` does NOT exist yet. Run
  `/marketer-brand-generation` before `/plan-guide` (public-facing)._ (needs review)
- _Remaining SEO fields to be filled by `/plan-spec reverse`._

## Integrations & constraints

- _Hosting: Vercel. No third-party services detected in code — confirm._ (needs review)

## Launch success

- _Site is accurate, accessible (WCAG 2.2 AA), SEO-clean, prose-clean, and
  compliance-clean before being treated as ship-ready under the workflow._

## Open questions

- Is there a contact **form** (collects PII) or just a mailto/links? (drives the
  whole compliance section)
- Any analytics / trackers wired anywhere?
- Is `alexyoza.com` the canonical domain, and is it the production deploy?
