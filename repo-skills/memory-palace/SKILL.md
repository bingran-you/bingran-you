---
name: memory-palace
description: Reproducible kit for mounting Henry Heffernan's 3D-CRT-monitor + Win98-desktop portfolio template (`/palace`) on top of an existing Next.js site. Ships drop-in build scripts, config snippets (webpack / Next / Vercel / tsconfig), placeholder showcase pages, NOTICE templates, a post-deploy DevTools verification snippet, and the 13-gotcha PLAYBOOK that catalogues every way this rollout breaks in production. Use when the user wants a /palace-style 3D portfolio with a clickable retro monitor mounted on their own site, when integrating a vendored CRA app inside a Next.js host, or when debugging "same-origin iframe but Chrome treats it as cross-origin", iframe stuck on broken-document, framer-motion type drift on Vercel, COOP/X-Frame-Options blocking own-iframe, or font fallback inside the inner OS.
author: Bingran You (@bingran-you)
license: MIT
---

# Memory Palace — copy-paste kit + production playbook

## What this skill ships

A complete, copy-paste-ready kit for cloning [henryjeff/portfolio-website](https://github.com/henryjeff/portfolio-website) (the outer 3D CRT room) + [henryjeff/portfolio-inner-site](https://github.com/henryjeff/portfolio-inner-site) (the inner Win98 desktop) and mounting them under `/palace` on your own Next.js site, with your own content.

Two layers:

1. **Mechanical scaffolding** — drop-in build script, config snippets, placeholder content, NOTICE templates. Live under `assets/`. See `assets/INDEX.md` for the full map.
2. **Production knowledge** — 13 gotchas that each cost hours to debug if you don't know them coming. Live in `PLAYBOOK.md`.

The mechanical part is mechanical. The reason this skill exists is the 13 gotchas. **Read `PLAYBOOK.md` before deploying.** Skipping it means you'll find them yourself.

## When to use

- A user wants a 3D retro portfolio with a clickable CRT monitor (like henryheffernan.com)
- A user is mounting any vendored CRA / webpack app inside a Next.js host
- A user is debugging `iframe.contentWindow.location` throwing cross-origin on same-origin frames
- A user is debugging Vercel build failures in a vendored sub-app that build fine locally
- A user wants to swap content in this template without paraphrasing Henry's autobiographical prose

## Prerequisites — read before you start

1. **Licensing**.
   - Outer (`portfolio-website`): MIT. Vendor it with `LICENSE.md` + `NOTICE.md` preserved. Templates at `assets/notice/NOTICE.outer.template.md`.
   - Inner (`portfolio-inner-site`): **no license file upstream**. You need explicit permission from Henry. Without it, build your own inner site from scratch using only the architectural pattern. Template at `assets/notice/NOTICE.inner.template.md`.
2. **Host**. Next.js (this kit assumes Next.js + Vercel). Any static host works with minor adaptation to the rewrites + headers.
3. **Disk / bandwidth**. The vendored outer ships ~50 MB of 3D models, textures, audio. Vercel free tier handles it.
4. **Cosmetic limit**. The CRT chassis 3D mesh has "Heffernan henry inc" baked into the texture at `palace-outer/static/models/Computer/baked_computer.jpg`. You can't fix it with code — re-bake in Blender, Photoshop the texture, or live with it. Document this in your README.

## Architecture in one diagram

```
host/                            ← your existing Next.js / static site
├── app/                         ← your existing pages
├── public/palace/               ← generated, gitignored
│   ├── index.html               (outer entry — webpack build)
│   ├── bundle.<hash>.js
│   ├── models/  textures/  audio/
│   └── os/                      ← inner CRA build
│       ├── index.html
│       └── static/js  static/css  static/media
├── palace-outer/                ← vendored from portfolio-website (MIT)
│   ├── LICENSE.md  NOTICE.md
│   ├── src/Application/         (Three.js + GLSL + UI)
│   ├── bundler/                 (webpack config)
│   └── static/                  (3D assets)
├── palace-inner/                ← vendored from portfolio-inner-site (w/ permission)
│   ├── NOTICE.md
│   ├── src/components/{os,applications,showcase,general}
│   └── public/
├── scripts/build-palace.mjs     ← stitches the two builds into public/palace/
├── next.config.ts               ← rewrites /palace, /palace/os to index.html
└── vercel.json                  ← header overrides (see PLAYBOOK §H + §I + §J)
```

Outer (webpack) builds `→ public/palace/`. Inner (CRA) builds `→ palace-inner/build/` which then gets copied to `public/palace/os/`. Outer's `MonitorScreen.ts` iframes `/palace/os` to draw the inner site inside the 3D CRT.

## 30-minute quick start

From the **root of your existing Next.js site**:

```bash
# 1. Bootstrap: clone the two upstreams, strip git history, drop dead weight
bash <(curl -L https://raw.githubusercontent.com/<this-skill-host>/assets/scripts/setup.sh)
# (or, if you have this skill checked out locally, run the file directly:
#  bash <path-to>/repo-skills/memory-palace/assets/scripts/setup.sh)

# 2. Drop the build script into scripts/
cp <skill>/assets/scripts/build-palace.mjs scripts/

# 3. Apply config snippets — see assets/INDEX.md for exact targets
#    (webpack output, ts-loader transpileOnly, palace-inner tsconfig replace,
#     host tsconfig exclude, next rewrites, vercel headers, font + li CSS,
#     iframe cache-bust)

# 4. Swap content
cp <skill>/assets/content/*.tsx palace-inner/src/components/showcase/
cp <skill>/assets/content/ShutdownSequence.tsx palace-inner/src/components/os/

# 5. Copy NOTICEs and edit author / permission lines
cp <skill>/assets/notice/NOTICE.outer.template.md palace-outer/NOTICE.md
cp <skill>/assets/notice/NOTICE.inner.template.md palace-inner/NOTICE.md

# 6. Wire host package.json
#    "scripts": { "palace:build": "node scripts/build-palace.mjs",
#                 "build": "npm run palace:build && next build" }

# 7. Build + run
npm run build && npm start
# Visit http://localhost:3000/palace
```

After deploy, run `assets/verification/devtools.js` in DevTools at `/palace`. If any check fails, the matching gotcha in `PLAYBOOK.md` tells you why.

## Required content swaps (don't skip these)

In order of visibility — all paths relative to your vendored copy:

- `palace-inner/src/components/showcase/{Home,About,Projects,Contact,Experience,VerticalNavbar,ResumeDownload}.tsx` — rewrite with your own content. Placeholders in `assets/content/`.
- `palace-inner/src/components/applications/ShowcaseExplorer.tsx` — `windowTitle`, `bottomLeftText`
- `palace-inner/src/components/os/Toolbar.tsx` — `HeffernanOS` → your OS name (the start-menu vertical text)
- `palace-inner/src/components/os/Desktop.tsx` — `APPLICATIONS` map: drop the apps you don't want (Doom / OregonTrail / Scrabble / Henordle / Credits / ThisComputer)
- `palace-inner/public/index.html` — `<title>`, manifest link
- `palace-inner/public/manifest.json` — `name`, `short_name`
- `palace-outer/src/index.html` — `<title>`, OG/Twitter meta, **remove or replace Henry's GA tracking ID `G-4FJBF6WF60`**
- `palace-outer/src/Application/UI/components/LoadingScreen.tsx` — BIOS branding (`HHBIOS`, `HSP S13`, `Heffernan, Henry Inc.`)
- `palace-outer/src/Application/UI/components/InfoOverlay.tsx` — `NAME_TEXT` / `TITLE_TEXT` (top-left HUD)
- `palace-outer/src/Application/World/MonitorScreen.ts` line ~207 — `iframe.title`
- `palace-outer/src/Application/Audio/AudioSources.ts` — `AmbienceAudio`: short-circuit if you don't want background music (auto-plays `office.mp3` on `loadingScreenDone`)
- `palace-outer/src/Application/sources.ts` — prefix every asset URL with `/palace/` (runtime fetches in source files are not rewritten by webpack's `publicPath`)
- `palace-inner/src/components/os/ShutdownSequence.tsx` — Henry's shutdown sequence is a multi-page autobiographical narrative. **Don't translate it with name-swaps.** Use the minimal `assets/content/ShutdownSequence.tsx` or drop the route.

## Asset map

| Path | What it is | Where it goes in host |
|---|---|---|
| `assets/scripts/build-palace.mjs` | Build orchestrator | `host/scripts/build-palace.mjs` |
| `assets/scripts/setup.sh` | Clone + strip + dead-weight cleanup | run from host root, no install |
| `assets/patches/webpack.output.snippet.js` | Replace `output{}` block | `palace-outer/bundler/webpack.common.js` |
| `assets/patches/webpack.tsloader.snippet.js` | `transpileOnly: true` on ts-loader (PLAYBOOK §C) | same file |
| `assets/patches/palace-inner.tsconfig.json` | Full replacement (PLAYBOOK §E) | `palace-inner/tsconfig.json` |
| `assets/patches/host.tsconfig.exclude.snippet.json` | `exclude` palace-outer + palace-inner (PLAYBOOK §D) | host `tsconfig.json` |
| `assets/patches/next.rewrites.snippet.ts` | `/palace` + `/palace/os` rewrites | host `next.config.ts` |
| `assets/patches/vercel.headers.snippet.json` | Per-path COOP + cache headers (PLAYBOOK §H §I §J) | host `vercel.json` |
| `assets/patches/font-and-li.snippet.css` | Self-hosted Alfa Slab One + `<li>` typography (PLAYBOOK §M §N) | `palace-inner/src/index.css` |
| `assets/patches/monitor-iframe-src.snippet.ts` | Iframe `src = '/palace/os?cb=' + Date.now()` (PLAYBOOK §I §J §K) | `palace-outer/src/Application/World/MonitorScreen.ts` |
| `assets/content/Home.tsx` etc. | Placeholder showcase pages | `palace-inner/src/components/showcase/` |
| `assets/content/ShutdownSequence.tsx` | Minimal "Rebooting…" replacement | `palace-inner/src/components/os/ShutdownSequence.tsx` |
| `assets/notice/NOTICE.outer.template.md` | MIT vendor notice | `palace-outer/NOTICE.md` |
| `assets/notice/NOTICE.inner.template.md` | Permission notice | `palace-inner/NOTICE.md` |
| `assets/verification/devtools.js` | Post-deploy verification | paste into DevTools at `/palace` |

The full per-file rationale lives in `assets/INDEX.md`.

## Gitignore

```
/palace-outer/node_modules
/palace-inner/node_modules
/palace-inner/build
/public/palace
```

Force-add `palace-outer/package-lock.json` despite upstream's `.gitignore` exclusion (PLAYBOOK §C — lockfile pins framer-motion subversions and is the single biggest preventer of Vercel-only build failures).

## The 13 gotchas — read PLAYBOOK.md

Every one of these cost hours on the bingranyou.com rollout:

A. License confusion (inner site has no LICENSE) · B. Vercel build-time devDeps stripped · C. framer-motion type drift on fresh install · D. csstype mismatch in Next.js TS check · E. CRA's TS walks up to host node_modules · F. sitemap.ts references deleted files · G. Vercel single-file size & dead asset · H. `X-Frame-Options: DENY` blocks own-iframe · I. COOP `same-origin` breaks same-origin iframe access · J. Stale HTTP cache survives header changes · K. Vercel 308-redirect with `text/plain` breaks iframe · L. react-router context split · M. Typekit + Google Fonts unreliable · N. Bullet text falls back to system sans

Read `PLAYBOOK.md` for symptom → cause → fix on each.

## License & attribution

This skill is MIT. The vendored apps carry their own licenses — see "Prerequisites" above. Keep these visible in your own copy:

- `palace-outer/LICENSE.md` (Henry Heffernan, MIT)
- `palace-outer/NOTICE.md` (your modifications + upstream URL)
- `palace-inner/NOTICE.md` (your modifications + the permission you obtained + upstream URL)
- A visible "template by Henry Heffernan (MIT)" footer in your inner site's window chrome (we use `bottomLeftText` on `<Window>` in `ShowcaseExplorer.tsx`).

## Worked example

The rollout that produced this skill — bingranyou.com:

- Initial vendor + content swap: [bingran-you/bingran-you#187](https://github.com/bingran-you/bingran-you/pull/187)
- Font fix saga: [#189](https://github.com/bingran-you/bingran-you/pull/189) → [#191](https://github.com/bingran-you/bingran-you/pull/191)
- Iframe-on-prod saga: [#194](https://github.com/bingran-you/bingran-you/pull/194) → [#195](https://github.com/bingran-you/bingran-you/pull/195) → [#196](https://github.com/bingran-you/bingran-you/pull/196) → [#197](https://github.com/bingran-you/bingran-you/pull/197) → [#198](https://github.com/bingran-you/bingran-you/pull/198)

Walk those PRs in order to watch each gotcha play out and how it was caught and fixed.
