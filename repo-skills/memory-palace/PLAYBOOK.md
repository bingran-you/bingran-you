# Memory Palace — production playbook (the 13 gotchas)

The mechanical part of mounting `/palace` is mechanical. **This document is why the skill exists.** Every gotcha below cost hours on the bingranyou.com rollout — each entry: **symptom → cause → fix**. Read it before deploying.

## A. License confusion (the inner site has no LICENSE)

- **Symptom**: GitHub auto-detection says inner repo has no license; you can't legally redistribute under default copyright.
- **Cause**: Upstream `portfolio-inner-site` was never published with a license file. `package.json` is silent too.
- **Fix**: Ask Henry directly for permission to vendor. Document the permission in your `NOTICE.md` (`assets/notice/NOTICE.inner.template.md` has the wording template). Or build your own inner site from scratch using only the architectural pattern.

## B. Vercel build-time devDeps stripped

- **Symptom**: Vercel build errors with `Cannot find package '@babel/preset-typescript' imported from /vercel/path1/palace-outer/babel-virtual-resolve-base.js`.
- **Cause**: Upstream put `@babel/preset-typescript` and `@types/*` in `devDependencies`. Vercel's nested `npm install` under `NODE_ENV=production` skipped them.
- **Fix**: Move build-time `@babel/preset-typescript` and `@types/*` into `dependencies` in `palace-outer/package.json`. Pass `--include=dev` defensively in `build-palace.mjs`'s nested install (already done in `assets/scripts/build-palace.mjs`).

## C. framer-motion type drift on fresh install

- **Symptom**: Vercel build errors with 51 `TS2322` errors out of ts-loader: `Property 'children' does not exist on type '... MotionProps ...'`. Builds fine locally.
- **Cause**: Upstream `package.json` uses `"framer-motion": "^6.3.1"`. Local install resolved to 6.3.x; Vercel fresh install resolved to 6.5+ with stricter motion-component prop types.
- **Fix (two-pronged)**:
  - Add `transpileOnly: true` to the ts-loader rule in `webpack.common.js` — see `assets/patches/webpack.tsloader.snippet.js`. Webpack stops doing type checks during build (JS output identical, type errors still surface in IDE / tsc).
  - Commit `palace-outer/package-lock.json` — **force-add** through upstream's `.gitignore` exclusion. Locks every transitive version including framer-motion.

## D. csstype mismatch in Next.js TS check

- **Symptom**: `Type error: Type 'CSSProperties' is not assignable to type 'Properties<string | number, string & {}>'` in `palace-inner/src/components/general/Link.tsx`.
- **Cause**: Next.js's `next build` type-checked the vendor dirs. `palace-inner/node_modules/csstype` is older than host's csstype, so the two `React.CSSProperties` types diverged.
- **Fix**: In host `tsconfig.json`, add `palace-outer` and `palace-inner` to `exclude`. Vendor sub-apps have their own tsconfig and their own build pipeline; the Next.js root has no business type-checking them. Snippet at `assets/patches/host.tsconfig.exclude.snippet.json`.

## E. CRA's TS walks up to host node_modules

- **Symptom**: CRA build fails with `TS1139: Type parameter declaration expected` in `node_modules/three/...ReferenceNode.d.ts` (`<const TNodeType>` syntax error).
- **Cause**: After host's `npm install` populated `personal-site/node_modules/@types/three`, palace-inner's TypeScript walked up via module resolution and tripped on newer three types using TS 5+ generics under CRA's TS 4.6.
- **Fix**: In `palace-inner/tsconfig.json` add `"typeRoots": ["./node_modules/@types"]` and `"types": []`. Pins TS lookup to palace-inner's own `@types` only. Full replacement file at `assets/patches/palace-inner.tsconfig.json`.

## F. sitemap.ts references deleted files

- **Symptom**: Next.js prerender errors with `ENOENT: no such file or directory, stat '/vercel/path1/app/palace/page.tsx'`.
- **Cause**: If you had an old `/palace` route, deleting it leaves your `sitemap.ts` pointing at non-existent source files for `getLatestLastModified()`.
- **Fix**: Update `/palace`'s `lastModified` source list to the actual files that drive the route now: `next.config.ts`, `scripts/build-palace.mjs`, `palace-outer/src/Application/Application.ts`, `palace-inner/src/components/applications/ShowcaseExplorer.tsx`.

## G. Vercel single-file size & dead asset

- **Symptom**: Slow uploads, occasional Vercel deploy size warnings.
- **Cause**: `palace-outer/static/textures/monitor/video/real.mp4` is 37 MB and not referenced anywhere (only `base-static.mp4` and `static-texture-layer.mp4` are loaded from `index.html`).
- **Fix**: Delete it. Dead weight in upstream. `assets/scripts/setup.sh` handles this automatically.

## H. X-Frame-Options DENY blocks own-iframe

- **Symptom**: In-monitor iframe shows "your-site refused to connect" with a sad-face document icon.
- **Cause**: Host's global security headers set `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'` — these forbid all framing, including same-origin.
- **Fix**: In `vercel.json` global headers, change `X-Frame-Options` to `SAMEORIGIN` and CSP `frame-ancestors` to `'self'`. Same-origin can frame same-origin; cross-origin clickjacking surface unchanged. See `assets/patches/vercel.headers.snippet.json`.

## I. COOP same-origin breaks same-origin iframe access

- **Symptom**: Iframe loads (no more "refused to connect"), but `iframe.contentWindow.location.href` throws `Blocked a frame with origin "https://your-site" from accessing a cross-origin frame`. Parent and iframe are both your-site.
- **Cause**: Host's `Cross-Origin-Opener-Policy: same-origin` puts each document in its own agent cluster. Chrome then treats same-origin frames as cross-origin for window-object access.
- **Fix**: Add a per-path override in `vercel.json` that sets `Cross-Origin-Opener-Policy: unsafe-none` for `/palace(/.*)?`. Rest of the site keeps strict global COOP. The outer 3D scene needs to read iframe state and forward events, so the iframe can't operate under agent-cluster isolation. See `assets/patches/vercel.headers.snippet.json`.

## J. Stale HTTP cache survives header changes

- **Symptom**: After deploying a security-header fix, your own browser still sees the old broken behaviour. Incognito / other browsers work.
- **Cause**: Chrome's HTTP cache stores response headers along with bodies. `Cache-Control: max-age=0, must-revalidate` doesn't guarantee header refresh — Chrome reuses cached headers across loads.
- **Fix (two-pronged)**:
  - Append a timestamp query string to the iframe URL: `iframe.src = '/palace/os?cb=' + Date.now()`. Each parent load forces a fresh iframe response. See `assets/patches/monitor-iframe-src.snippet.ts`.
  - In `vercel.json`, serve the HTML entry points (exact `/palace` and `/palace/os`) with `Cache-Control: no-store, must-revalidate`. The HTML is ~1.7 KB — negligible re-download cost — but security-header changes now take effect on first reload.

## K. Vercel 308-redirect with text/plain breaks iframe

- **Symptom**: With iframe `src='/palace/os/'` (trailing slash), iframe stuck on broken-document placeholder. Network panel shows 308 then a `Content-Type: text/plain` intermediate.
- **Cause**: Vercel auto-redirects `/palace/os/` to `/palace/os` and the intermediate hop's `text/plain` confuses Chrome's iframe rendering.
- **Fix**: Always point iframe src at the canonical path without trailing slash. `MonitorScreen.ts` should use `/palace/os` not `/palace/os/`.

## L. react-router context split

- **Symptom**: Inner OS shows white page. Console: `Error: useLocation() may be used only in the context of a <Router> component.` But `<BrowserRouter>` is clearly wrapping the consumer.
- **Cause**: `VerticalNavbar` imports `useLocation` from `react-router`, `ShowcaseExplorer` imports `BrowserRouter as Router` from `react-router-dom`. With non-aligned semver resolutions, those become **two separate React Context instances** — and the `BrowserRouter` only populates one of them.
- **Fix**: Unify imports. Always use `react-router-dom` for both router and hooks. One line:

  ```diff
  - import { useLocation } from 'react-router';
  + import { useLocation } from 'react-router-dom';
  ```

## M. Typekit + Google Fonts are unreliable

- **Symptom**: H1 display font falls back to Arial / Georgia in production. Adobe Typekit kit (`use.typekit.net/llo2eru.css`) loads but registers no font face. Google Fonts edge intermittently 503's on your referer.
- **Cause**: Typekit kits are **domain-locked to the publisher's domains**. Google Fonts has occasional 503s under load or specific referer combinations.
- **Fix**: Self-host the woff2. Drop the font into `palace-inner/src/assets/fonts/` (**NOT `public/fonts/`** — CRA's css-loader tries to resolve absolute paths like `/palace/os/fonts/...` as modules and fails). Reference in `index.css` via relative path — see `assets/patches/font-and-li.snippet.css`. Ship `OFL.txt` next to the woff2.

## N. Bullet text falls back to system sans

- **Symptom**: `<li>` content in an otherwise-Win98 page renders in Apple SF / Segoe UI.
- **Cause**: Upstream `index.css` styles `<p>` and `<h1-h6>` with Millennium / MillenniumBold, but never touches `<li>`. `<li>` inherits from body's system sans-serif.
- **Fix**: Add explicit list typography (same snippet as §M, `assets/patches/font-and-li.snippet.css`).

## Quick verification after deploy

Run `assets/verification/devtools.js` in DevTools on a fresh tab at `/palace`. Or from a terminal:

```bash
curl -sI https://your-site/palace/os | grep -iE 'x-frame|coop|cross-origin|cache-control'
# Expected:
#   x-frame-options: SAMEORIGIN
#   cross-origin-opener-policy: unsafe-none
#   cache-control: no-store, must-revalidate
```

If any check fails, the matching gotcha above tells you why.
