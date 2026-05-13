# memory-palace assets — what goes where

Every asset in this folder is a drop-in for one specific location in a
host Next.js site that has vendored `palace-outer/` and `palace-inner/`
at its root.

Convention used in this table:

- **Drop in** = copy the file as-is to the listed path.
- **Apply at** = paste the snippet into the listed file at the location
  that matches the surrounding code; the snippet's header comment
  documents the exact replacement.
- **Merge into** = merge the snippet's array / object entries into your
  existing config.

| Asset (this skill) | Action | Destination (host) | Gotcha addressed |
|---|---|---|---|
| `scripts/build-palace.mjs` | Drop in | `host/scripts/build-palace.mjs` | §B (force `--include=dev`) |
| `scripts/setup.sh` | Run | from host root | §A reminder, §G dead asset |
| `patches/webpack.output.snippet.js` | Apply at | `palace-outer/bundler/webpack.common.js` → `output` block | — |
| `patches/webpack.tsloader.snippet.js` | Apply at | same file → ts-loader rule | §C |
| `patches/palace-inner.tsconfig.json` | Drop in (full replacement) | `palace-inner/tsconfig.json` | §E |
| `patches/host.tsconfig.exclude.snippet.json` | Merge into | host `tsconfig.json` → `exclude` | §D |
| `patches/next.rewrites.snippet.ts` | Apply at | host `next.config.ts` → `rewrites()` | — |
| `patches/vercel.headers.snippet.json` | Merge into | host `vercel.json` → `headers` (+ global edit notes) | §H §I §J |
| `patches/font-and-li.snippet.css` | Append to | `palace-inner/src/index.css` | §M §N |
| `patches/monitor-iframe-src.snippet.ts` | Apply at | `palace-outer/src/Application/World/MonitorScreen.ts` (~L207) | §I §J §K |
| `patches/sources.ts.template.ts` | Drop in (full replacement) | `palace-outer/src/Application/sources.ts` | — (runtime asset 404 fix) |
| `patches/palace-outer.package.json.example.md` | Reference + manual edit | `palace-outer/package.json` (move devDeps → deps) | §B |
| `content/Home.tsx` | Drop in (rewrite copy) | `palace-inner/src/components/showcase/Home.tsx` | — |
| `content/About.tsx` | Drop in (rewrite copy) | `palace-inner/src/components/showcase/About.tsx` | — |
| `content/Projects.tsx` | Drop in (rewrite copy) | `palace-inner/src/components/showcase/Projects.tsx` | — |
| `content/Experience.tsx` | Drop in (rewrite copy) | `palace-inner/src/components/showcase/Experience.tsx` | — |
| `content/Contact.tsx` | Drop in (rewrite copy) | `palace-inner/src/components/showcase/Contact.tsx` | — |
| `content/VerticalNavbar.tsx` | Drop in (rewrite copy) | `palace-inner/src/components/showcase/VerticalNavbar.tsx` | §L (`react-router-dom` import) |
| `content/ShutdownSequence.tsx` | Drop in (or delete the route) | `palace-inner/src/components/os/ShutdownSequence.tsx` | — |
| `content/branding/LoadingScreen.examples.md` | Reference + manual edit | `palace-outer/src/Application/UI/components/LoadingScreen.tsx` | — |
| `content/branding/InfoOverlay.examples.md` | Reference + manual edit | `palace-outer/src/Application/UI/components/InfoOverlay.tsx` (L10-11) | — |
| `content/branding/Toolbar.examples.md` | Reference + manual edit | `palace-inner/src/components/os/Toolbar.tsx` (~L99) | — |
| `content/branding/ShowcaseExplorer.examples.md` | Reference + manual edit | `palace-inner/src/components/applications/ShowcaseExplorer.tsx` | — |
| `content/branding/MonitorScreen.examples.md` | Reference + manual edit | `palace-outer/src/Application/World/MonitorScreen.ts` (~L207, after iframe.src) | — |
| `content/branding/Desktop.applications.md` | Reference + manual curation | `palace-inner/src/components/os/Desktop.tsx` (`APPLICATIONS` map + imports + delete apps) | — |
| `content/public/index.html.template.html` | Drop in + replace placeholders | `palace-inner/public/index.html` | — |
| `content/public/manifest.json.template.json` | Drop in + replace placeholders | `palace-inner/public/manifest.json` | — |
| `content/personal-assets-checklist.md` | Reference + manual asset swaps | photos, resume, favicon, audio | — (so you don't ship Henry's face / PDF) |
| `fonts/AlfaSlabOne-Regular.woff2` | Drop in (binary) | `palace-inner/src/assets/fonts/AlfaSlabOne-Regular.woff2` | §M |
| `fonts/AlfaSlabOne-OFL.txt` | Drop in (alongside woff2) | `palace-inner/src/assets/fonts/AlfaSlabOne-OFL.txt` | §M |
| `notice/NOTICE.outer.template.md` | Drop in + edit | `palace-outer/NOTICE.md` | §A |
| `notice/NOTICE.inner.template.md` | Drop in + edit | `palace-inner/NOTICE.md` | §A |
| `verification/devtools.js` | Paste into DevTools | console at `/palace` after deploy | §H §I §J §K |

## Recommended order

1. `scripts/setup.sh` from host root — clones both upstreams, strips git,
   drops dead weight, adds `.gitignore` block.
2. `cp scripts/build-palace.mjs <host>/scripts/`.
3. Apply the two `patches/webpack.*.snippet.js` to
   `palace-outer/bundler/webpack.common.js`.
4. Replace `palace-outer/src/Application/sources.ts` with
   `patches/sources.ts.template.ts` (every asset path gets the `/palace/`
   prefix — without this, 3D models / textures / audio 404 at runtime).
5. Edit `palace-outer/package.json` per
   `patches/palace-outer.package.json.example.md` (move every
   `devDependencies` entry into `dependencies`, regenerate the lockfile,
   force-add it).
6. Replace `palace-inner/tsconfig.json` with `patches/palace-inner.tsconfig.json`.
7. Merge `patches/host.tsconfig.exclude.snippet.json` into host
   `tsconfig.json`.
8. Apply `patches/next.rewrites.snippet.ts` to host `next.config.ts`.
9. Merge `patches/vercel.headers.snippet.json` into host `vercel.json`.
   Also edit the existing global `/(.*)` rule per the `_globalAdjustments`
   note (set `X-Frame-Options: SAMEORIGIN`, CSP `frame-ancestors 'self'`).
10. Append `patches/font-and-li.snippet.css` to `palace-inner/src/index.css`,
    then `cp fonts/AlfaSlabOne-Regular.woff2 fonts/AlfaSlabOne-OFL.txt
    palace-inner/src/assets/fonts/` (both files are bundled in this
    skill — don't try `palace-inner/public/fonts/`, CRA's css-loader
    will fail on absolute font URLs).
11. Apply `patches/monitor-iframe-src.snippet.ts` to `MonitorScreen.ts`.
12. Copy all `content/*.tsx` into `palace-inner/src/components/showcase/`
    (and `ShutdownSequence.tsx` into `palace-inner/src/components/os/`).
    Edit each with your own content.
13. Copy both `notice/*.template.md` to the respective vendor roots and
    fill in the placeholders.
14. Walk every `content/branding/*.examples.md` and apply the matching
    edits — these are the 6 branding text swaps (LoadingScreen BIOS,
    InfoOverlay HUD, Toolbar OS name, ShowcaseExplorer window chrome,
    MonitorScreen iframe.title, Desktop APPLICATIONS map curation).
15. Drop `content/public/index.html.template.html` and
    `content/public/manifest.json.template.json` into
    `palace-inner/public/`, swap placeholders.
16. Walk `content/personal-assets-checklist.md` — replace Henry's
    photos, resume PDF, favicon / icons. Don't ship to prod with
    Henry's face on your About page.
17. Wire host `package.json` scripts: `"palace:build": "node
    scripts/build-palace.mjs"` and prefix `"build"`.
18. `npm run build`, then visit `http://localhost:3000/palace`.
19. Deploy. Paste `verification/devtools.js` into DevTools at the deployed
    `/palace` URL.

If a check in step 19 fails, the matching gotcha in `../PLAYBOOK.md`
explains why.
