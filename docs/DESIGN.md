# Alex Yoza — Design System (dark, always)

> The visual contract for the redesign. Linear/Vercel-grade restraint with a
> futuristic edge. **Always dark — no light mode.** Source of truth for every
> screen; `/uiux-audit` checks against this. Branch: `redesign`.

## Style choice

**Direction:** premium editorial × Aurora  <!-- PRIMARY structure × SECONDARY feeling -->
**Chosen:** 2026-07-06 · confirmed by Alex · governs every screen.

- **PRIMARY — premium editorial** (structure): a personal portfolio is a
  low-density, type-forward content-presentation site. Editorial gives generous
  space, high-contrast type, and a reading rhythm. The PRIMARY wins every
  conflict — usability and the accessibility floor follow it, not the feeling.
- **SECONDARY — Aurora** (feeling): glowing gradient light — *dreamy ·
  futuristic · quiet-confident*. Carries the indigo→cyan glow, the ambient
  accent gradients, and the scroll-scrub video hero. It colors the editorial
  spine; it never overrides it.
- **Token implications:** near-black `--bg #08090C`; iridescent accent
  `--accent #6E8BFF` → `--accent-2 #56E1E9` via `--accent-grad`; Inter (tight
  display + mono eyebrows); restrained motion with one ambient-light
  centerpiece. These match the tokens already below — Aurora **formalizes** the
  built look rather than changing it.
- **Alternatives considered:** *premium editorial × Tenebrism* (darker, more
  cinematic — more shadow, less glow) and *premium editorial × Luxury
  Typography* (the editorial default — pure type discipline, drops the glow).
  The aesthetic cousin *technical devtool × Utilitarian* (the Linear/Vercel
  language) was set aside as mood-led: the site's category is editorial, not a
  devtool.
- **Catalog:** `.claude/knowledge/design/design-styles.md` (Aurora is #16 of the
  50 named styles).

## Direction

- **Primary reference:** Linear (calm, precise, dark, subtle gradients) +
  Vercel (high-contrast type, generous space, crisp borders).
- **Secondary refs:** agyllc.com (editorial warmth, blurred light), Apple product
  pages (scroll-driven video hero).
- **Feel (3 words):** precise · futuristic · quiet-confident.
- **Motion:** refined & restrained — micro-interactions, scroll reveals, one bold
  centerpiece (the scroll-scrub video hero). No bouncy/spinny gimmicks.

## Color (dark only)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#08090C` | page background (near-black, slightly blue) |
| `--bg-elev` | `#0E1014` | cards, raised surfaces |
| `--bg-elev-2` | `#15181E` | hover / nested surfaces |
| `--border` | `rgba(255,255,255,0.08)` | hairline borders |
| `--border-strong` | `rgba(255,255,255,0.14)` | focus / emphasis borders |
| `--text` | `#EDEEF2` | primary text |
| `--text-dim` | `#9AA1AD` | secondary text |
| `--text-faint` | `#5C636E` | tertiary / captions |
| `--accent` | `#6E8BFF` | primary accent (electric indigo) |
| `--accent-2` | `#56E1E9` | secondary accent (cyan) |
| `--accent-grad` | `linear-gradient(120deg,#6E8BFF,#56E1E9)` | hero text / CTA glow |
| `--danger` | `#FF6B6B` | errors |

Contrast: body text ≥ 7:1 on `--bg` (AAA where feasible), all interactive ≥ 4.5:1.

## Typography

- **UI / body:** Inter (already wired via `next/font`). Variable.
- **Display:** Inter tight (`-0.03em`) at large sizes; consider a future serif/
  mono display accent for headers (optional, deferred).
- **Mono accent:** `--font-mono` for labels/eyebrows (uppercase, letter-spaced).
- Scale (rem, base 16px — **fix the current 32px root**): 0.75 / 0.875 / 1 / 1.25 /
  1.5 / 2 / 3 / 4.5 / 6. Line-height 1.1 display, 1.6 body.
- Eyebrow labels: 0.75rem, uppercase, `letter-spacing:0.12em`, `--text-faint`.

## Space / radius / shadow

- Spacing scale (px): 4 8 12 16 24 32 48 64 96 128.
- Radius: `--r-sm:8px` `--r-md:14px` `--r-lg:20px` `--r-full:999px`.
- Borders do the work; shadows are subtle: `--shadow:0 1px 0 rgba(255,255,255,.04) inset, 0 20px 60px -20px rgba(0,0,0,.6)`.
- Section rhythm: `clamp(96px, 12vw, 200px)` vertical between sections.

## Motion

- Durations: 150ms (micro) · 240ms (default) · 400ms (entrance). Never > 450ms.
- Easing: `cubic-bezier(0.22,1,0.36,1)` (easeOutExpo-ish) for entrances;
  `ease` only for color. **Never `transition: all`.**
- Patterns: scroll-reveal fade-up (12px, staggered), hairline underline grows on
  hover, `:active` scale 0.98 on buttons, glow pulse on primary CTA (subtle).
- **`prefers-reduced-motion`:** disable scroll-scrub (show poster), reveals become
  instant, no looping motion.

## Signature element — scroll-scrub video hero

Landing page hero: a muted `playsInline` video whose `currentTime` is driven by
scroll progress (rAF + lerp). Fallback: poster image + animated mesh/grid when no
video / reduced-motion / load error. Spec + asset dims in
`docs/reference/INTAKE.md` §D2.

## Components

- **Nav:** floating glass pill, `backdrop-filter: blur(12px)`, hairline border,
  active link = accent underline. (Refs: Linear, AGY.)
- **Cards (work/projects):** `--bg-elev`, hairline border, preview image top,
  hover lifts border to `--border-strong` + faint accent glow + image zoom 1.03.
  "Coming soon" cards: dimmed, `cursor:default`, badge instead of link.
- **Buttons:** primary = accent gradient text/glow on dark; secondary = hairline
  outline. Mono eyebrow labels above section headers.
- **Background texture:** optional faint grid / radial accent glows, very low
  opacity. Subtle, not noisy.

## Anti-patterns (do not)

- No light mode, no pure-black `#000`, no pure-white `#FFF` text.
- No generic SaaS purple-gradient-everything; accents are restrained.
- No `transition: all`, no animations on interruptible UI, no autoplaying audio.
- No emoji as UI icons; use a consistent SVG icon set.
