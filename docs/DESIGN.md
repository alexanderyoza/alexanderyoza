# Alex Yoza — Design System (Bento UI · light + dark)

> The visual contract for the redesign. A calm, modular **bento** portfolio:
> content lives in rounded tiles on a clean grid, mixing imagery, stats, text,
> and logos. **Light and dark, user-toggleable** (no-flash, persisted, respects
> system preference). Source of truth for every screen. Branch: `redesign`.

## Style choice

**Direction:** premium editorial × **Bento UI**  <!-- PRIMARY structure × SECONDARY feeling -->
**Chosen:** 2026-07-07 · confirmed by Alex · governs every screen.
**Supersedes:** premium editorial × Aurora (dark-only, indigo/cyan glow, scroll-scrub
video hero) — retired 2026-07-07 at Alex's direction. The flat bento system replaces
the ambient aurora glow and the always-dark constraint.

- **PRIMARY — premium editorial** (structure, unchanged): a personal portfolio is a
  low-density, type-forward content site. Editorial gives generous space, strong
  type, and a reading rhythm. The PRIMARY wins every conflict; usability and the
  accessibility floor follow it.
- **SECONDARY — Bento UI** (feeling): modular compartmentalized tiles on a clean
  grid — *organized · friendly · modern*. Content is composed as a bento of
  differently-sized rounded cards: image tiles, stat/number tiles, text tiles,
  skill-icon tiles, logo tiles. Subtle shadows and hairline borders; **flat, no
  glow, no gradients-everywhere.**
- **Token implications:** dual-theme semantic tokens; warm off-white light ground
  / near-black dark ground; one confident accent plus a few soft tile tints for
  variety; Inter; generous radii (bento reads rounded); soft low shadows; restrained
  lift-on-hover motion.
- **Catalog:** `.claude/knowledge/design/design-styles.md` (Bento UI is #39 of the 50).

## Theming (light + dark toggle)

- Tokens are **semantic** (`--bg`, `--text`, `--accent`…) and flip by theme.
- Resolution order: no attribute → follow `prefers-color-scheme`; `:root[data-theme="light"]`
  / `:root[data-theme="dark"]` override and win.
- A no-flash inline script in `<head>` stamps `data-theme` from `localStorage`
  before first paint. A `ThemeToggle` client component sets/persists it.
- Both themes meet the contrast floor: body text ≥ 7:1, all interactive ≥ 4.5:1.

## Color

Semantic tokens (see `styles/globals.css` for the two theme blocks):

| Token | Role |
|---|---|
| `--bg` | page ground (warm off-white / near-black) |
| `--surface` | tile / card background |
| `--surface-2` | hover / nested surface |
| `--border` | hairline tile borders |
| `--border-strong` | emphasis / focus borders |
| `--text` / `--text-dim` / `--text-faint` | primary / secondary / tertiary text |
| `--accent` / `--accent-ink` | primary accent + its on-accent text |
| `--tile-a … --tile-d` (+ `-ink`) | soft tile tints for grid variety (blue/green/amber/violet) |

## Typography

- **UI / body / display:** Inter (variable, via `next/font`). Tight tracking on
  large display sizes (`-0.03em`); 1.5–1.6 line-height on body.
- **Mono accent:** `--font-mono` for eyebrows/labels/stats (uppercase, spaced).
- Scale (rem, 16px root): 0.75 / 0.875 / 1 / 1.25 / 1.5 / 2 / 3 / 4. Big stat
  numbers may go larger inside their tiles.

## Space / radius / shadow

- Spacing scale (px): 4 8 12 16 24 32 48 64 96.
- Radius: `--r-sm:10px` `--r-md:18px` `--r-lg:26px` `--r-full:999px` (bento = rounded).
- Shadows soft and low, no glow: `--shadow-sm`, `--shadow` (both theme-aware; lighter in dark).
- Bento gap: 16–20px between tiles; section rhythm `clamp(72px, 10vw, 140px)`.

## The signature element — the bento grid

Each major section is a responsive bento: a CSS grid of tiles that span 1–2
columns / 1–2 rows. Tiles mix types (image, stat, text, icon, logo, CTA). Tiles
lift subtly on hover (border → `--border-strong`, shadow deepens, ~translateY(-2px)).
Collapses to a single column on mobile. Reuse the `.tile` primitive.

## Motion

- Durations: 150ms (micro) · 220ms (default) · 360ms (entrance). Easing
  `cubic-bezier(0.22,1,0.36,1)`. **Never `transition: all`.**
- Patterns: tile hover-lift, scroll-reveal fade-up (staggered), `:active` scale 0.98.
- `prefers-reduced-motion`: reveals instant, no looping motion.

## Anti-patterns (do not)

- No aurora glow, no gradient-on-everything, no scroll-scrub video hero (retired).
- No `transition: all`; no animations on interruptible UI; no autoplaying audio.
- No pure `#000` / `#FFF` text; keep the warm off-white / near-black grounds.
- No emoji as UI icons; consistent SVG icon set.
- Bento tiles must stay legible — tints are soft backings, never low-contrast text.
