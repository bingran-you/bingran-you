# palace-outer — vendored from henryjeff/portfolio-website

This directory is a vendor copy of:

  https://github.com/henryjeff/portfolio-website

Original work © Henry Heffernan, released under the MIT License. The
original `LICENSE.md` is preserved in this directory and applies to all
unmodified files.

Modifications in this vendor copy (YOUR_NAME, YEAR):

- `bundler/webpack.common.js` — redirected `output.path` to
  `../../public/palace` and set `output.publicPath` to `/palace/` so the
  webpack build lands under the host Next.js site's static dir.
- `bundler/webpack.common.js` — added `transpileOnly: true` to the
  ts-loader rule so Vercel's fresh `npm install` resolving framer-motion
  6.5+ doesn't fail the build on the upstream component types
  (memory-palace skill, PLAYBOOK §C).
- `package.json` — moved `@babel/preset-typescript` and `@types/*` from
  `devDependencies` to `dependencies` so Vercel doesn't strip them under
  `NODE_ENV=production` (PLAYBOOK §B). Force-committed `package-lock.json`.
- `src/Application/sources.ts` — prefixed every runtime asset URL with
  `/palace/` so the 3D scene's fetches resolve under the host path.
- `src/Application/World/MonitorScreen.ts` — iframe `src` set to
  `/palace/os?cb=' + Date.now()` (no trailing slash; cache-bust query
  string). PLAYBOOK §I, §J, §K.
- `src/Application/UI/components/LoadingScreen.tsx`,
  `src/Application/UI/components/InfoOverlay.tsx`, `src/index.html` —
  branding strings (BIOS text, HUD name/title, page `<title>`, OG/Twitter
  meta) swapped from Henry's to mine. Henry's GA tracking ID removed.
- `src/Application/Audio/AudioSources.ts` — [if applicable: shorted out
  the ambient `office.mp3` autoplay].
- `static/textures/monitor/video/real.mp4` deleted (37 MB, unreferenced).
- `server/`, `buildspec.yaml` removed (upstream AWS deploy harness, not
  relevant in this vendor copy).

The CRT chassis 3D mesh embosses "Heffernan henry inc" into the monitor
housing via the baked texture at `static/models/Computer/baked_computer.jpg`.
This is baked geometry; [either: it has been replaced — see commit
HASH; or: it remains as a visible attribution to Henry's original work].

Please direct questions about the original implementation to Henry; any
questions about this vendor copy to YOUR_NAME (YOUR_CONTACT).
