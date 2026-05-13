# palace-inner — vendored from henryjeff/portfolio-inner-site

This directory is a near-verbatim vendor copy of:

  https://github.com/henryjeff/portfolio-inner-site

Original work © Henry Heffernan. **The upstream repository does not include
a license file.** This vendor copy is used here with explicit, direct
permission from Henry Heffernan, granted to YOUR_NAME on YYYY-MM-DD for use
in his/her [open-source / personal] site.

Without that explicit permission this copy would not be redistributable.
Anyone reading this who wants to do something similar should ask Henry
directly rather than re-vendor this directory.

Modifications in this vendor copy (YOUR_NAME, YEAR):

- `package.json` — set `"name": "palace-inner"` and `"homepage":
  "/palace/os"` so CRA writes asset URLs that work when the build is
  served under `/palace/os/` on the host Next.js site.
- `tsconfig.json` — added `"typeRoots": ["./node_modules/@types"]` and
  `"types": []` so CRA's TypeScript stops walking up into host
  `node_modules` and tripping on newer `@types/three` (memory-palace
  skill, PLAYBOOK §E).
- `src/index.css` — added self-hosted Alfa Slab One @font-face, explicit
  `h1` family with safe fallbacks, and `<li>` / `<span>` typography
  matching `<p>` (PLAYBOOK §M, §N). Replaces Adobe Typekit "gastromond"
  which is domain-locked to Henry's domains.
- `src/assets/fonts/AlfaSlabOne-Regular.woff2` + `OFL.txt` — added the
  self-hosted woff2 alongside its OFL license.
- `src/components/showcase/{Home,About,Projects,Contact,Experience,
  VerticalNavbar,ResumeDownload}.tsx` — rewrote with my own bio, projects,
  contact details. Build-system / OS-shell components stay as Henry built
  them.
- `src/components/applications/ShowcaseExplorer.tsx` — `windowTitle` and
  `bottomLeftText` set to my site / a visible "template by Henry
  Heffernan" attribution.
- `src/components/os/Toolbar.tsx` — start-menu vertical text changed from
  `HeffernanOS` to MY_OS_NAME.
- `src/components/os/Desktop.tsx` — `APPLICATIONS` map pruned to the apps
  I want; dropped [Doom / OregonTrail / Scrabble / Henordle / Credits /
  ThisComputer / etc.].
- `src/components/os/ShutdownSequence.tsx` — replaced Henry's
  multi-screen autobiographical shutdown narrative with a minimal
  "Shutting down…" sequence. Henry's prose was not translated or
  name-swapped.
- `public/index.html` — `<title>` and manifest link updated.
- `public/manifest.json` — `name` / `short_name` updated.
- Any other import alignment fixes (e.g. `useLocation` imported from
  `react-router-dom` everywhere) needed to make the bundle work under a
  fresh install (PLAYBOOK §L).

Please direct questions about the original implementation to Henry; any
questions about this vendor copy and my content to YOUR_NAME
(YOUR_CONTACT).
