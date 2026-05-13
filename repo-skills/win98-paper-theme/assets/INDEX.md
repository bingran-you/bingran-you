# win98-paper-theme assets — what goes where

| Asset (this skill) | Action | Destination (host) |
|---|---|---|
| `globals.css` | Drop in (or merge) | host `app/globals.css` |
| `fonts/AlfaSlabOne-Regular.woff2` | Drop in (binary) | `public/fonts/win98/AlfaSlabOne-Regular.woff2` |
| `fonts/Millennium.ttf` | Drop in (binary) | `public/fonts/win98/Millennium.ttf` |
| `fonts/Millennium-Bold.ttf` | Drop in (binary) | `public/fonts/win98/Millennium-Bold.ttf` |
| `fonts/MSSansSerif.ttf` | Drop in (binary) | `public/fonts/win98/MSSansSerif.ttf` |
| `fonts/OFL.txt` | Drop in (license, alongside fonts) | `public/fonts/win98/OFL.txt` |
| `textures/paper-smudges.jpg` | Drop in (binary) | `public/textures/paper-smudges.jpg` |

## Apply order

1. `cp globals.css <host>/app/globals.css` (replace) — or hand-merge per
   the migration notes in the SKILL.md.
2. `mkdir -p <host>/public/fonts/win98 <host>/public/textures`.
3. `cp fonts/* <host>/public/fonts/win98/`.
4. `cp textures/paper-smudges.jpg <host>/public/textures/`.
5. Wire `next/font` for Noto Serif SC fallback in
   `<host>/app/layout.tsx` (see SKILL.md "5-minute quick start" step 4).
   Skip if you don't need CJK support.
6. Restart dev server. Every route is now wearing the paper.
7. If you have a "primary action" CTA (e.g. an "Enter" link on your
   homepage hero), add `className="palace-cta"` to it for the raised
   Win98-button styling.

## Verification

After applying, a few quick checks in DevTools at any route on your
site:

```js
// Body text should resolve to Millennium first
getComputedStyle(document.body).fontFamily
// → "Millennium", "Times New Roman", Times, "Noto Serif SC", "Songti SC", serif

// H1 should resolve to Alfa Slab One
const h1 = document.querySelector("h1");
h1 && getComputedStyle(h1).fontFamily
// → "Alfa Slab One", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif

// Body bg should be the mint paper
getComputedStyle(document.body).backgroundColor
// → rgb(219, 227, 207)

// The paper smudge overlay should exist
const a = getComputedStyle(document.body, "::after");
a.mixBlendMode  // → "plus-lighter"
a.opacity       // → "0.12"
```

If `fontFamily` shows the fallback (`Times New Roman` first), the
woff2/TTF files aren't loading — check the network tab for 404s and
verify the paths under `public/fonts/win98/`.
