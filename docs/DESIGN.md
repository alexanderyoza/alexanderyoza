# Alex Yoza — Design System (minimalist × editorial · light + dark)

> The visual contract for the redesign. A type-led, near-monochrome editorial
> portfolio: serif display over a clean sans, hairline rules, generous
> whitespace, one restrained accent. **Light and dark, user-toggleable.**
> Source of truth for every screen. Branch: `redesign`.

## Style choice

**Direction:** premium editorial × **Swiss/minimalist + editorial serif**  <!-- PRIMARY × SECONDARY -->
**Chosen:** 2026-07-07 · confirmed by Alex · governs every screen.
**Supersedes:** premium editorial × Bento UI (modular tiles) — retired 2026-07-07;
and before it premium editorial × Aurora (dark glow). The current system is flat,
type-first, and hairline-driven — no tiles, no glow.

- **PRIMARY — premium editorial** (structure): low-density, type-forward portfolio.
- **SECONDARY — minimalist × editorial** (feeling): Swiss discipline (strict rhythm,
  active whitespace, restraint, near-monochrome) crossed with an editorial serif
  voice (high-contrast display serif for headlines over a clean sans for reading).
  Content is presented as **typographic indexes** — contents-page rows with year,
  title, and tag — not cards.

**Why:** a portfolio's product is the person; type-first restraint reads as
senior confidence where tiles (Bento) read as a dashboard and glow (Aurora)
reads as a template trend. Near-monochrome + one red accent survives both
themes and ages well; the index device fits a career that is rows of work,
not a grid of thumbnails.

**Alternatives considered:** the two retired directions — Bento UI (tiles;
retired: modular chrome fought the editorial voice) and Aurora (dark glow;
retired: trend-bound, decoration-led). No third candidate was recorded at
pick time (2026-07-07).

**Real-world references (pulled by web search — backfilled 2026-07-08):**
- Thibaud Allie — http://www.thibaudallie.com — the exact type register:
  high-contrast display serif (Roslindale) over a clean grotesque body
  (Graphik) on a personal portfolio; the role Fraunces/Inter play here.
  (Typewolf portfolio top-40, site-of-the-day.)
- Thierry Blancpain — https://thierryblancpain.com — Swiss typographic
  discipline on a personal site: strict rhythm, active whitespace,
  near-monochrome restraint. Shares PRIMARY (low-density portfolio).
  (siteinspire: typographic · portfolio · minimal.)
- Slava Kirilenko — https://slavakirilenko.com — minimal type-led personal
  portfolio; work as quiet text rows, not cards — the index device.
  (Same siteinspire collection.)
- UNCUT.wtf — https://uncut.wtf — live typeface catalogue built as a
  typographic index: rows with metadata columns, list/grid restraint, zero
  decoration — the model for the "Selected work" / Experience indexes.
- Gallery pool: https://httpster.net/style/typographic/ and siteinspire
  portfolio × typographic × minimal — where these were pulled; re-search
  here if the style evolves.
- **Anti-reference:** generic "Swiss style" listicle treatments (giant
  Helvetica, red circles, poster props without product density) — borrow the
  grid discipline, never the poster decoration.

<!-- Backfill note (2026-07-08): references added to comply with the
     plan-design web-reference mandate (DevByAlex 123bb20), which landed
     after this style was chosen. Blancpain/Kirilenko verified via gallery
     listings (direct fetch blocked); Allie via Typewolf; UNCUT live. -->

## Typography

- **Display / headlines:** **Fraunces** (variable serif, incl. italic), via
  `next/font`. Carries the masthead name, page titles, section heads, row titles,
  and the occasional italic accent phrase. Used with restraint.
- **Body / UI:** **Inter**. All reading text, labels, meta.
- **Labels / eyebrows:** tracked uppercase Inter (`.eyebrow`) with a short red tick.
- Measure ~56–65ch for reading. `font-variant-numeric: tabular-nums` on years/data.

## Color (light + dark)

Semantic tokens flip by theme (see `styles/globals.css`). Warm-neutral paper /
warm near-black — deliberately **not** cream — near-monochrome with **one accent**.

| Token | Role |
|---|---|
| `--bg` | page ground (`#FBFAF7` light / `#14130F` dark) |
| `--surface` / `--surface-2` | raised / hover surface |
| `--border` / `--border-strong` | hairlines / emphasis |
| `--text` / `--text-dim` / `--text-faint` | primary / secondary / tertiary |
| `--accent` / `--accent-ink` | restrained red (`#D23A24` / `#FF5C43`) + on-accent text |

The accent appears only on: eyebrow ticks, one italic phrase, links, active-nav
underline, list hovers, and the contact email rule. ~95% of the page is monochrome.

## Space / radius / shadow

- Spacing scale (px): 4 8 12 16 24 32 48 72 96. Section rhythm via `.rule` hairlines
  with `clamp(40px, 6vw, 72px)` margins.
- Radius small (`--r-sm:4 --r-md:8 --r-lg:12`) — squarer, editorial.
- **Hairlines do the work; shadows are minimal.** Figures use a thin border, not a card.

## Layout

- **Home:** editorial masthead (eyebrow → serif name → italic lede → support) →
  two-column about with a meta sidebar → a "Selected work" typographic index →
  education → a "Let's build something" contact close.
- **Experience:** one combined index of **roles + projects** (merged — Projects is
  no longer a separate section) with year · title · description · kind tag.
- **Detail pages:** eyebrow → serif h1 → thin-framed hero/gallery figures →
  prose → an underlined back link.
- **Nav:** clean top bar, hairline underline, accent-underline on the active item.
  Items: **About · Experience · Contact**.

## Motion

- Durations 150/220/420ms, easing `cubic-bezier(0.22,1,0.36,1)`. Never `transition: all`.
- Scroll-reveal fade-up (staggered); list rows inset + title→accent on hover.
- `prefers-reduced-motion`: reveals instant, no looping motion.

## Anti-patterns (do not)

- No cards/tiles or drop shadows as the primary device; no Bento grid; no aurora glow.
- No cream-paper + terracotta + Playfair cliché — the ground is warm-neutral, the
  serif is Fraunces, the accent is a true red used sparingly.
- No `transition: all`; no pure `#000`/`#FFF` text; no emoji as UI icons.
- Serif stays for display; body/UI stays Inter — don't set long text in the serif.
