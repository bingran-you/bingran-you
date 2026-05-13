---
name: win98-paper-theme
description: Apply the bingranyou.com "Win98 paper" site-wide theme to your Next.js + Tailwind site so every route shares the same OS dialect as `/palace`. Ships a drop-in `globals.css` with the mint-paper palette, Win98 violet hyperlinks, Alfa Slab One display headings + Millennium body serif + MSSerif eyebrow labels, an additive-blended paper-smudge overlay that recreates `/palace`'s CRT shader recipe in CSS (`mix-blend-mode: plus-lighter`, opacity 0.12), per-glyph CJK fallback to Noto Serif SC, and a raised Win98 `.palace-cta` button. Pairs with the `memory-palace` skill — that one stages `/palace` itself; this one makes the front door, About, blog, and every other route speak the same visual language. Use when the user wants their existing Next.js site to feel cohesive with a `/palace` rollout, when porting palace typography to non-palace routes, or when re-expressing a Three.js shader effect in plain CSS.
author: Bingran You (@bingran-you)
license: MIT
---

# Win98 Paper Theme — make every route speak the same OS dialect as `/palace`

**Live demo:** [bingranyou.com](https://bingranyou.com) — the front door, blog, posts, and every internal route share this theme. Click "Enter the Memory Palace" to see it hand off to the 3D scene.

## What this skill ships

A drop-in `app/globals.css` for a Next.js + Tailwind v4 host that paints the entire site in the same paper palette the `/palace` desktop interior uses. Five components:

1. **Palette** — mint paper base (`#dbe3cf`), black ink, classic Netscape/Win98 violet hyperlinks (`#551a8b` unvisited / `#2f0a52` visited).
2. **Typography** — Alfa Slab One display H1, MillenniumBold for H2–H6, Millennium body serif, MSSerif (pixel-aliased Win98 control font) for `.font-mono` eyebrow labels. Per-glyph fallback chain for CJK (Latin → Millennium, Han → Noto Serif SC).
3. **Paper smudge overlay** — fixed-position `body::after` with the same recipe palace's `MonitorScreen.ts:272` uses in 3D: smudges.jpg + additive blending + opacity 0.12. CSS analogue is `mix-blend-mode: plus-lighter` + 2 px blur for the softening palace gets for free from CRT scanlines.
4. **Justified prose + auto-hyphenation** on `.prose`, `.text-block`, and their `<p>` / `<li>` descendants — matches palace's About page text blocks.
5. **`.palace-cta`** — a raised Win98 button class for the "Enter the Memory Palace" CTA (and any other primary action you want shaped like a 3D-button).

## When to use

- You've shipped `memory-palace` (or are about to) and want the rest of your site to feel like the same machine, not a wrapper around an iframe.
- You're styling a Next.js + Tailwind v4 site and want a retro-paper aesthetic that's *not* a Win95 mockup but reads as "the documentation hand-off after you exit the 3D scene."
- You want to learn how to re-express a Three.js `AdditiveBlending` shader recipe in vanilla CSS (`mix-blend-mode: plus-lighter` is the answer; the snippet shows the rest).

## Prerequisites

1. **Next.js** with `app/` directory (the file path assumes `app/globals.css`).
2. **Tailwind v4** — the file uses `@import "tailwindcss"` and `@plugin "@tailwindcss/typography"` (Tailwind v4's CSS-first config syntax). For v3 or non-Tailwind hosts, see "Non-Tailwind adaptation" below.
3. **`next/font` loading Noto Serif SC as `--font-noto-serif-sc`** — used for CJK glyph fallback. If you only ship Latin, you can drop the `--font-noto-serif-sc` references and the per-glyph fallback degrades gracefully to `Songti SC` / `serif`.

## 5-minute quick start

From your host site's root:

```bash
# 1. Drop the CSS file into app/
cp <skill>/assets/globals.css app/globals.css
# (or merge with your existing globals.css — see Migration notes below)

# 2. Drop the fonts into public/ at the path the CSS references
mkdir -p public/fonts/win98
cp <skill>/assets/fonts/*.ttf <skill>/assets/fonts/*.woff2 <skill>/assets/fonts/OFL.txt \
    public/fonts/win98/

# 3. Drop the smudge texture
mkdir -p public/textures
cp <skill>/assets/textures/paper-smudges.jpg public/textures/

# 4. Wire next/font (for CJK fallback) in app/layout.tsx
# Add:
#   import { Noto_Serif_SC } from "next/font/google";
#   const notoSerifSC = Noto_Serif_SC({
#     subsets: ["latin"],
#     weight: ["400", "700"],
#     variable: "--font-noto-serif-sc",
#     display: "swap",
#   });
# Then on <html>: className={notoSerifSC.variable}
```

That's it. Restart your dev server; every route now wears the paper.

## Asset map

| Asset (this skill) | Action | Destination (host) |
|---|---|---|
| `assets/globals.css` | Drop in or merge | host `app/globals.css` |
| `assets/fonts/AlfaSlabOne-Regular.woff2` | Drop in | `public/fonts/win98/` |
| `assets/fonts/MSSansSerif.ttf` | Drop in | `public/fonts/win98/` |
| `assets/fonts/Millennium.ttf` | Drop in | `public/fonts/win98/` |
| `assets/fonts/Millennium-Bold.ttf` | Drop in | `public/fonts/win98/` |
| `assets/fonts/OFL.txt` | Drop in (license, ship alongside fonts) | `public/fonts/win98/` |
| `assets/textures/paper-smudges.jpg` | Drop in | `public/textures/` |

See `assets/INDEX.md` for the apply-order checklist.

## How the CSS smudge overlay maps to the Three.js shader

The `/palace` outer scene applies smudges to the CRT screen via:

```ts
// palace-outer/src/Application/World/MonitorScreen.ts:272-ish
new THREE.MeshBasicMaterial({
    map: smudgesTexture,
    blending: THREE.AdditiveBlending,
    opacity: 0.12,
    transparent: true,
});
```

Three.js's `AdditiveBlending` performs per-channel `dst = src + dst`. The CSS analogue is `mix-blend-mode: plus-lighter` — same math, different syntax. The skill's CSS does:

```css
body::after {
  background-image: url("/textures/paper-smudges.jpg");
  filter: blur(2px) hue-rotate(45deg) saturate(0.2) brightness(0.95);
  opacity: 0.12;
  mix-blend-mode: plus-lighter;
}
```

The blur softens the brush strokes so they read as haze — palace gets the same softening from CRT scanlines + camera distance. The `hue-rotate(45deg) saturate(0.2) brightness(0.95)` chain shifts the smudge texture from cool greenish-blue to neutral warm so it sits naturally on the mint paper background instead of cooling it.

## Customizing the palette

Three custom properties drive everything:

```css
--paper-bg:           #dbe3cf;   /* mint paper */
--paper-ink:          #0a0a0a;   /* body ink */
--paper-link:         #551a8b;   /* Win98 violet — unvisited */
--paper-link-visited: #2f0a52;   /* darker violet — visited */
```

Override these in your own `:root` block to retint the whole site. The link-visited pair keeps the Win98-Netscape vibe — don't shift them more than ±20% on the L channel or hyperlinks stop reading as "clicked."

## Migration notes — replacing vs merging

If your `app/globals.css` is currently default-CRA / default-Next:

- **Replace wholesale.** The shipped file is comprehensive; replacing avoids merge conflicts on Tailwind directives, CSS reset rules, and Typography plugin tokens.

If you have custom globals you want to keep:

- **Merge the four blocks**: `@font-face` declarations, `:root` custom properties, `body` + `body::before` + `body::after`, and the `h1-h6` / `p` / `li` / `a` / `.font-mono` typography rules.
- **Keep your own** layout / animation / utility-class rules.
- **Don't merge** the `.prose` block unless you use `@tailwindcss/typography` — those `--tw-prose-*` variables are no-ops without the plugin.

## Non-Tailwind adaptation

If your host doesn't use Tailwind v4:

1. Delete the `@import "tailwindcss"` and `@plugin "@tailwindcss/typography"` lines.
2. Delete the `@theme inline { ... }` block (Tailwind v4-specific).
3. Delete the `.prose { --tw-prose-* }` block.
4. Keep everything else — `@font-face`, `:root`, `body::before/after`, typography rules, `.palace-cta` work in plain CSS.

The remaining ~180 lines are framework-agnostic.

## Why this is a separate skill from `memory-palace`

`memory-palace` stages the `/palace` route — vendoring two repos, wiring a build pipeline, fixing 13 production gotchas. This skill is about the *visual layer that surrounds* that route. They share fonts (literally — the same woff2 and TTFs ship in both bundles) and palette, but the work is orthogonal: you can ship one without the other.

If you want both, install `memory-palace` first to get `/palace` working, then layer this skill on top so the rest of your site doesn't feel like a different person made it.

## License & attribution

This skill is MIT. The bundled fonts carry their own licenses:

- **Alfa Slab One** — SIL Open Font License (OFL), bundled `OFL.txt` covers it.
- **Millennium, Millennium-Bold** — Win98-era font, included in the upstream `henryjeff/portfolio-inner-site` repo without a separate license file. Treat as shipped under the same permission you obtained for the inner site (if you don't have that permission, substitute Times New Roman or a similar period serif — the theme degrades gracefully).
- **MSSansSerif** — Microsoft proprietary. If your project is public-facing and you don't have a license, substitute a free Win98-aesthetic alternative like W95FA.

Keep `OFL.txt` next to the woff2 in your deployed `public/fonts/win98/`.
