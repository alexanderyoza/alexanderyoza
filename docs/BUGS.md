# Alex Yoza — Portfolio (alexyoza.com) — Bug Log

> Drop bugs here as you hit them — one entry per bug under **Open**. This file is
> for **you** (the human); `dev-goal` is the one that clears it.
>
> On every run, **before** scaffold, auth, or any feature work, the goal run
> drains this log: it fixes **every** open bug — each through its own verify loop
> via `fix-errors` — moves it to **Fixed** with the fixing commit, and only then
> moves on. Open bugs also **block the launch stage**: the loop will not
> advance into `/launch-acceptance` while any remain.
>
> You only need **Title** + enough **Repro / detail** for the fix to be
> unambiguous. Leave the rest blank — the loop fills the Fixed rows. Keep IDs
> unique and monotonic (BUG-001, BUG-002, …); never reuse a retired ID.

## Open

<!-- Copy this block per bug. Anything the loop cannot reproduce or pin down
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

## Fixed

<!-- newest first — the loop appends here: BUG-id — title — fix summary
     (branch · commit · date). Rotates: keep the current stage's entries,
     max ~20; each names its commit, so pruning loses nothing. -->

- BUG-004 — wireframes never captured — resolved by **backfilling the CAPTURE-mode inventory** into `docs/wireframes/README.md` from the shipped screens (5 routes + shared chrome, flows, missing-state notes) (2026-07-08; `claude/design-gate-enforcement`).
- BUG-001 — home missing committed sections — resolved by **amending DESIGN.md** to the built, deliberately-short home (Alex's call, 2026-07-08; `claude/design-gate-enforcement`).
- BUG-002 — missing kind tags — resolved by **dropping the tag from the contract**; the merged index stays uniform (Alex's call, 2026-07-08; same branch).
- BUG-003 — project pages had no prose — **moot: pages removed.** `/projects/gsfhi` and `/projects/uhfd` were orphans (no inbound links, not in the Experience index); deleted with their stylesheet and assets (Alex's call, 2026-07-08; same branch).
- BUG-005 — half-underlined project h1 — **moot: same removal** (the deleted project pages were the only screens with linked h1s).
