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
| `content/Home.tsx` | Drop in (rewrite copy) | `palace-inner/src/components/showcase/Home.tsx` | — |
| `content/About.tsx` | Drop in (rewrite copy) | `palace-inner/src/components/showcase/About.tsx` | — |
| `content/Projects.tsx` | Drop in (rewrite copy) | `palace-inner/src/components/showcase/Projects.tsx` | — |
| `content/Experience.tsx` | Drop in (rewrite copy) | `palace-inner/src/components/showcase/Experience.tsx` | — |
| `content/Contact.tsx` | Drop in (rewrite copy) | `palace-inner/src/components/showcase/Contact.tsx` | — |
| `content/ShutdownSequence.tsx` | Drop in (or delete the route) | `palace-inner/src/components/os/ShutdownSequence.tsx` | — |
| `notice/NOTICE.outer.template.md` | Drop in + edit | `palace-outer/NOTICE.md` | §A |
| `notice/NOTICE.inner.template.md` | Drop in + edit | `palace-inner/NOTICE.md` | §A |
| `verification/devtools.js` | Paste into DevTools | console at `/palace` after deploy | §H §I §J §K |

## Recommended order

1. `scripts/setup.sh` from host root — clones both upstreams, strips git,
   drops dead weight, adds `.gitignore` block.
2. `cp scripts/build-palace.mjs <host>/scripts/`.
3. Apply the two `patches/webpack.*.snippet.js` to
   `palace-outer/bundler/webpack.common.js`.
4. Replace `palace-inner/tsconfig.json` with `patches/palace-inner.tsconfig.json`.
5. Merge `patches/host.tsconfig.exclude.snippet.json` into host
   `tsconfig.json`.
6. Apply `patches/next.rewrites.snippet.ts` to host `next.config.ts`.
7. Merge `patches/vercel.headers.snippet.json` into host `vercel.json`.
   Also edit the existing global `/(.*)` rule per the `_globalAdjustments`
   note (set `X-Frame-Options: SAMEORIGIN`, CSP `frame-ancestors 'self'`).
8. Append `patches/font-and-li.snippet.css` to `palace-inner/src/index.css`,
   then download Alfa Slab One (OFL) woff2 + `OFL.txt` and drop both
   into `palace-inner/src/assets/fonts/`.
9. Apply `patches/monitor-iframe-src.snippet.ts` to `MonitorScreen.ts`.
10. Copy all `content/*.tsx` into `palace-inner/src/components/showcase/`
    (and `ShutdownSequence.tsx` into `palace-inner/src/components/os/`).
    Edit each with your own content.
11. Copy both `notice/*.template.md` to the respective vendor roots and
    fill in the placeholders.
12. Move `@babel/preset-typescript` and `@types/*` from `devDependencies`
    to `dependencies` in `palace-outer/package.json` (manual edit — varies
    per upstream version).
13. Wire host `package.json` scripts: `"palace:build": "node
    scripts/build-palace.mjs"` and prefix `"build"`.
14. `npm run build`, then visit `http://localhost:3000/palace`.
15. Deploy. Paste `verification/devtools.js` into DevTools at the deployed
    `/palace` URL.

If a check in step 15 fails, the matching gotcha in `../PLAYBOOK.md`
explains why.
