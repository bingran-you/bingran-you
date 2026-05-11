---
name: memory-palace
description: Apply Henry Heffernan's 3D-CRT-monitor portfolio template to your own personal site. Includes the full production playbook — vendoring layout, content swap, build pipeline, Vercel/Next.js wiring — and a battle-tested catalogue of the 13 ways this rollout breaks in production. Use when the user wants a /palace-style retro 3D portfolio mounted on their existing site, or when reviewing a similar vendor-and-customize integration.
author: Bingran You (@bingran-you)
license: MIT
---

# Memory Palace — vendor Henry's 3D portfolio + the production playbook

## What this skill is

A reproducible recipe for taking [henryjeff/portfolio-website](https://github.com/henryjeff/portfolio-website) (the outer 3D CRT-monitor room) and [henryjeff/portfolio-inner-site](https://github.com/henryjeff/portfolio-inner-site) (the inner Win98 desktop) and mounting them under `/palace` on your own site, with your own content.

The point is **not** "copy a template" — that part is mechanical. The point is the **13 production gotchas** documented below, every one of which we hit on the bingranyou.com rollout. Each one costs hours to debug if you don't know it's coming.

## When to use this skill

- A user says they want a 3D retro portfolio with a clickable CRT monitor (like henryheffernan.com)
- A user is integrating a vendored CRA app inside a Next.js host
- A user is debugging "same-origin iframe but Chrome treats it as cross-origin"
- A user is debugging vendored-app build failures on Vercel that work locally

## Prerequisites

1. **Licensing**. The outer site (`portfolio-website`) is MIT — vendor it with `LICENSE.md` and a `NOTICE.md` preserved. The inner site (`portfolio-inner-site`) has **no license file** in the upstream repo — you need explicit permission from Henry. Without that, build your own inner site from scratch.
2. **Stack**. You need a host site that can serve static files. Next.js is what this playbook assumes; any static host works with minor adaptation.
3. **Disk / bandwidth**. The vendored outer site ships ~50 MB of 3D models, textures, and audio. Vercel free tier handles it but be aware.

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
└── vercel.json                  ← header overrides (see Gotchas H + I + N below)
```

Outer (webpack) builds `→ public/palace/`. Inner (CRA) builds `→ palace-inner/build/` which then gets copied to `public/palace/os/`. Outer's `MonitorScreen.ts` iframes `/palace/os` to draw the inner site inside the 3D CRT.

## Setup playbook

### 1. Vendor the two repos

```bash
mkdir -p personal-site
cd personal-site
git clone --depth=1 https://github.com/henryjeff/portfolio-website.git palace-outer
git clone --depth=1 https://github.com/henryjeff/portfolio-inner-site.git palace-inner
# Strip git history so they become plain vendored copies, not nested clones
rm -rf palace-outer/.git palace-inner/.git
# Drop pieces you don't need
rm -rf palace-outer/server palace-outer/buildspec.yaml
```

Write `palace-outer/NOTICE.md` and `palace-inner/NOTICE.md` recording the upstream URLs, the license terms (MIT for outer, explicit-permission for inner), and the list of modifications you made.

### 2. Wire the build pipeline

Outer's `bundler/webpack.common.js` — change output:

```js
output: {
  filename: 'bundle.[contenthash].js',
  path: path.resolve(__dirname, '../../public/palace'),
  publicPath: '/palace/',
},
```

Inner's `package.json` — add:

```json
{ "homepage": "/palace/os" }
```

Outer's `src/Application/World/MonitorScreen.ts` — change iframe URL:

```ts
iframe.src = '/palace/os?cb=' + Date.now();   // cache-bust — see Gotcha I
```

In `palace-outer/src/Application/sources.ts`, prefix every asset path with `/palace/` so the 3D scene's runtime fetches resolve correctly (webpack's `publicPath` doesn't rewrite runtime fetches in source files — only webpack-resolved imports).

### 3. Create the build glue

`scripts/build-palace.mjs`:

```js
import { execSync } from 'node:child_process';
import { existsSync, rmSync, cpSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const outer = path.join(root, 'palace-outer');
const inner = path.join(root, 'palace-inner');
const merged = path.join(root, 'public/palace');

const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' });
const ensure = (dir) => existsSync(path.join(dir, 'node_modules')) ||
  run('npm install --no-audit --no-fund --include=dev', dir);

ensure(outer); ensure(inner);
run('npm run build', outer);   // writes to public/palace/  (clean + bundle + static)
run('npm run build', inner);   // writes to palace-inner/build/
if (existsSync(path.join(merged, 'os'))) rmSync(path.join(merged, 'os'), { recursive: true, force: true });
mkdirSync(path.join(merged, 'os'), { recursive: true });
cpSync(path.join(inner, 'build'), path.join(merged, 'os'), { recursive: true });
```

Add to host `package.json`:

```json
{
  "scripts": {
    "palace:build": "node scripts/build-palace.mjs",
    "build": "npm run palace:build && next build"
  }
}
```

### 4. Wire Next.js rewrites

`next.config.ts`:

```ts
async rewrites() {
  return [
    { source: '/palace', destination: '/palace/index.html' },
    { source: '/palace/os', destination: '/palace/os/index.html' },
  ];
}
```

### 5. Gitignore

```
/palace-outer/node_modules
/palace-inner/node_modules
/palace-inner/build
/public/palace
```

Force-add `palace-outer/package-lock.json` despite its upstream `.gitignore` (see Gotcha E).

### 6. Required content swaps

In order of visibility:

- `palace-inner/src/components/showcase/{Home,About,Projects,Contact,Experience,VerticalNavbar,ResumeDownload}.tsx` — rewrite with your own content. Don't paraphrase Henry's autobiographical prose; write fresh from your own bio.
- `palace-inner/src/components/applications/ShowcaseExplorer.tsx` — windowTitle, bottomLeftText
- `palace-inner/src/components/os/Toolbar.tsx` — `HeffernanOS` → your OS name in the start menu vertical text
- `palace-inner/src/components/os/Desktop.tsx` — APPLICATIONS map: drop the apps you don't want (Doom / OregonTrail / Scrabble / Henordle / Credits / ThisComputer)
- `palace-inner/public/index.html` — `<title>`, manifest link
- `palace-inner/public/manifest.json` — name/short_name
- `palace-outer/src/index.html` — `<title>`, OG/Twitter meta, Henry's GA tracking ID (`G-4FJBF6WF60` — remove or replace)
- `palace-outer/src/Application/UI/components/LoadingScreen.tsx` — BIOS branding (`HHBIOS`, `HSP S13`, `Heffernan, Henry Inc.`)
- `palace-outer/src/Application/UI/components/InfoOverlay.tsx` — NAME_TEXT / TITLE_TEXT (top-left HUD)
- `palace-outer/src/Application/World/MonitorScreen.ts:207` — `iframe.title`
- `palace-outer/src/Application/Audio/AudioSources.ts` — `AmbienceAudio` constructor: short-circuit if you don't want background music (it auto-plays `office.mp3` on `loadingScreenDone`)
- `palace-inner/src/components/os/ShutdownSequence.tsx` — Henry's shutdown messages are a multi-page narrative; rewrite as a minimal "Rebooting..." or drop entirely. Don't translate his prose with name-swaps.

### 7. Cosmetic limit

The CRT chassis 3D mesh embosses **"Heffernan henry inc"** into the monitor housing via the baked texture at `palace-outer/static/models/Computer/baked_computer.jpg`. This is baked geometry — you can't fix it with code. Options:

- Photoshop the texture (easiest)
- Re-bake in Blender from the upstream source files (if Henry shares them)
- Cover with a 3D plane decal layer (more work)

Flag this in your README so users know to expect it until the texture is replaced.

## The 13 gotchas (in failure order)

Each entry: **symptom → cause → fix**.

### A. License confusion (the inner site has no LICENSE)

- **Symptom**: GitHub auto-detection says inner repo has no license; you can't legally redistribute under default copyright.
- **Cause**: Upstream `portfolio-inner-site` was never published with a license file. `package.json` is silent too.
- **Fix**: Ask Henry directly for permission to vendor. Document the permission in your `NOTICE.md`. Or build your own inner site from scratch using only the architectural pattern.

### B. Vercel build-time devDeps stripped

- **Symptom**: Vercel build errors with `Cannot find package '@babel/preset-typescript' imported from /vercel/path1/palace-outer/babel-virtual-resolve-base.js`.
- **Cause**: Upstream put `@babel/preset-typescript` and `@types/*` in `devDependencies`. Vercel's nested `npm install` under `NODE_ENV=production` skipped them.
- **Fix**: Move build-time `@babel/preset-typescript` and `@types/*` into `dependencies`. Pass `--include=dev` defensively in `build-palace.mjs`'s nested install.

### C. framer-motion type drift on fresh install

- **Symptom**: Vercel build errors with 51 `TS2322` errors out of ts-loader: `Property 'children' does not exist on type '... MotionProps ...'`. Builds fine locally.
- **Cause**: Upstream `package.json` uses `"framer-motion": "^6.3.1"`. Local install resolved to 6.3.x; Vercel fresh install resolved to 6.5+ with stricter motion-component prop types.
- **Fix**: Add `transpileOnly: true` to the ts-loader rule in `webpack.common.js` — webpack stops doing type checks during build (JS output identical, type errors still surface in IDE / tsc). Also commit `palace-outer/package-lock.json` (force-add through upstream's `.gitignore` exclusion) to lock all transitive versions.

### D. csstype mismatch in Next.js TS check

- **Symptom**: `Type error: Type 'CSSProperties' is not assignable to type 'Properties<string | number, string & {}>'` in `palace-inner/src/components/general/Link.tsx`.
- **Cause**: Next.js's `next build` type-checked the vendor dirs. `palace-inner/node_modules/csstype` is older than host's csstype, so the two `React.CSSProperties` types diverged.
- **Fix**: In host `tsconfig.json`, add `palace-outer` and `palace-inner` to `exclude`. Vendor sub-apps have their own tsconfig and their own build pipeline; the Next.js root has no business type-checking them.

### E. CRA's TS walks up to host node_modules

- **Symptom**: CRA build fails with `TS1139: Type parameter declaration expected` in `node_modules/three/...ReferenceNode.d.ts` (`<const TNodeType>` syntax error).
- **Cause**: After host's `npm install` populated `personal-site/node_modules/@types/three`, palace-inner's TypeScript walked up via module resolution and tripped on newer three types using TS 5+ generics under CRA's TS 4.6.
- **Fix**: In `palace-inner/tsconfig.json` add `"typeRoots": ["./node_modules/@types"]` and `"types": []`. This pins TS lookup to palace-inner's own `@types` only.

### F. sitemap.ts references deleted files

- **Symptom**: Next.js prerender errors with `ENOENT: no such file or directory, stat '/vercel/path1/app/palace/page.tsx'`.
- **Cause**: If you had an old `/palace` route, deleting it leaves your `sitemap.ts` pointing at non-existent source files for `getLatestLastModified()`.
- **Fix**: Update `/palace`'s `lastModified` source list to the actual files that drive the route now: `next.config.ts`, `scripts/build-palace.mjs`, `palace-outer/src/Application/Application.ts`, `palace-inner/src/components/applications/ShowcaseExplorer.tsx`.

### G. Vercel single-file size & dead asset

- **Symptom**: Slow uploads, occasional Vercel deploy size warnings.
- **Cause**: `palace-outer/static/textures/monitor/video/real.mp4` is 37 MB and not referenced anywhere (only `base-static.mp4` and `static-texture-layer.mp4` are loaded from `index.html`).
- **Fix**: Delete it. Dead weight in upstream.

### H. X-Frame-Options DENY blocks own-iframe

- **Symptom**: In-monitor iframe shows "bingran.ai refused to connect" with a sad-face document icon.
- **Cause**: Host's global security headers set `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'` — these forbid all framing, including same-origin.
- **Fix**: In `vercel.json` global headers, change `X-Frame-Options` to `SAMEORIGIN` and CSP `frame-ancestors` to `'self'`. Same-origin can frame same-origin; cross-origin clickjacking surface unchanged.

### I. COOP same-origin breaks same-origin iframe access

- **Symptom**: Iframe loads (no more "refused to connect"), but `iframe.contentWindow.location.href` throws `Blocked a frame with origin "https://your-site" from accessing a cross-origin frame`. Parent and iframe are both your-site.
- **Cause**: Host's `Cross-Origin-Opener-Policy: same-origin` puts each document in its own agent cluster. Chrome then treats same-origin frames as cross-origin for window-object access.
- **Fix**: Add a per-path override in `vercel.json` that sets `Cross-Origin-Opener-Policy: unsafe-none` for `/palace(/.*)?`. Rest of the site keeps strict global COOP. The outer 3D scene needs to read iframe state and forward events, so the iframe can't operate under agent-cluster isolation.

### J. Stale HTTP cache survives header changes

- **Symptom**: After deploying a security-header fix, your own browser still sees the old broken behaviour. Incognito / other browsers work.
- **Cause**: Chrome's HTTP cache stores response headers along with bodies. `Cache-Control: max-age=0, must-revalidate` doesn't guarantee header refresh — Chrome reuses cached headers across loads.
- **Fix (two-pronged)**:
  - Append a timestamp query string to the iframe URL: `iframe.src = '/palace/os?cb=' + Date.now()`. Each parent load forces a fresh iframe response.
  - In `vercel.json`, serve the HTML entry points (exact `/palace` and `/palace/os`) with `Cache-Control: no-store, must-revalidate`. The HTML is ~1.7 KB — negligible re-download cost — but security-header changes now take effect on first reload.

### K. Vercel 308-redirect with text/plain breaks iframe

- **Symptom**: With iframe src `/palace/os/` (trailing slash), iframe stuck on broken-document placeholder. Network panel shows 308 then a `Content-Type: text/plain` intermediate.
- **Cause**: Vercel auto-redirects `/palace/os/` to `/palace/os` and the intermediate hop's `text/plain` confuses Chrome's iframe rendering.
- **Fix**: Always point iframe src at the canonical path without trailing slash.

### L. react-router context split

- **Symptom**: Inner OS shows white page. Console: `Error: useLocation() may be used only in the context of a <Router> component.` But `<BrowserRouter>` is clearly wrapping the consumer.
- **Cause**: VerticalNavbar imports `useLocation` from `react-router`, ShowcaseExplorer imports `BrowserRouter as Router` from `react-router-dom`. With non-aligned semver resolutions, those become **two separate React Context instances** — and the BrowserRouter only populates one of them.
- **Fix**: Unify imports. Always use `react-router-dom` for both router and hooks. One line:

```diff
- import { useLocation } from 'react-router';
+ import { useLocation } from 'react-router-dom';
```

### M. Typekit + Google Fonts are unreliable

- **Symptom**: H1 display font falls back to Arial / Georgia in production. Adobe Typekit kit (`use.typekit.net/llo2eru.css`) loads but registers no font face. Google Fonts edge intermittently 503's on your referer.
- **Cause**: Typekit kits are domain-locked to the publisher's domains. Google Fonts has occasional 503s under load or specific referer combinations.
- **Fix**: Self-host the woff2. Drop the font into `palace-inner/src/assets/fonts/` (NOT `public/fonts/` — CRA's css-loader tries to resolve absolute paths like `/palace/os/fonts/...` as modules and fails). Reference in `index.css` via relative path:

```css
@font-face {
  font-family: 'Alfa Slab One';     /* OFL — close to gastromond's chunky retro slab */
  src: url(./assets/fonts/AlfaSlabOne-Regular.woff2) format('woff2');
  font-display: swap;
}
```

Ship `OFL.txt` next to the woff2.

### N. Bullet text falls back to system sans

- **Symptom**: `<li>` content in an otherwise-Win98 page renders in Apple SF / Segoe UI.
- **Cause**: Upstream `index.css` styles `<p>` and `<h1-h6>` with Millennium / MillenniumBold, but never touches `<li>`. `<li>` inherits from body's system sans-serif.
- **Fix**: Add explicit list typography:

```css
li {
  font-family: Millennium, 'Times New Roman', Times, serif;
  font-size: 18px;
}
li b, li strong {
  font-family: MillenniumBold, 'Times New Roman', Times, serif;
}
```

## Quick verification after deploy

After every deploy, run this in DevTools on a fresh tab at `/palace`:

```js
// 1. Boot screen shows your branding
document.body.innerText.match(/Memory Palace · \d{4}/)

// 2. After clicking Start and "Click anywhere to begin":
const f = document.querySelector('#computer-screen');
({
  srcOK: /\/palace\/os\?cb=/.test(f.src),               // cache-bust applied
  sameOriginOK: !!f.contentDocument,                    // COOP doesn't isolate
  innerTitle: f.contentDocument?.title,                 // should be your OS name
  nav: Array.from(f.contentDocument.querySelectorAll('a'))
    .map(a => a.textContent.trim())
    .filter(t => /^(HOME|ABOUT|EXPERIENCE|PROJECTS|CONTACT)$/.test(t))
})

// 3. Live header check (use curl from terminal):
//   curl -sI https://your-site/palace/os | grep -iE 'x-frame|coop|cross-origin|cache-control'
//   Expected: x-frame-options: SAMEORIGIN, cross-origin-opener-policy: unsafe-none,
//             cache-control: no-store, must-revalidate
```

## License & attribution

This skill is MIT. The vendored apps it teaches you to use carry their own licenses — see the section "Prerequisites" above. Keep these visible in your own copy:

- `palace-outer/LICENSE.md` (Henry Heffernan, MIT)
- `palace-outer/NOTICE.md` (your modifications + upstream URL)
- `palace-inner/NOTICE.md` (your modifications + the permission you obtained + upstream URL)
- A visible "template by Henry Heffernan (MIT)" footer in your inner site's window chrome (we use `bottomLeftText` on `<Window>` in `ShowcaseExplorer.tsx`).

## Reference

Worked example: the rollout that produced this skill —

- Initial vendor + content swap: [bingran-you/bingran-you#187](https://github.com/bingran-you/bingran-you/pull/187)
- Font fix saga: [#189](https://github.com/bingran-you/bingran-you/pull/189) → [#191](https://github.com/bingran-you/bingran-you/pull/191)
- Iframe-on-prod saga: [#194](https://github.com/bingran-you/bingran-you/pull/194) → [#195](https://github.com/bingran-you/bingran-you/pull/195) → [#196](https://github.com/bingran-you/bingran-you/pull/196) → [#197](https://github.com/bingran-you/bingran-you/pull/197) → [#198](https://github.com/bingran-you/bingran-you/pull/198)

Walk those PRs in order to see each gotcha play out and how it was caught and fixed.
