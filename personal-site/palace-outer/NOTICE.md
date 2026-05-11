# palace-outer — vendored from henryjeff/portfolio-website

This directory is a near-verbatim vendor copy of:

  https://github.com/henryjeff/portfolio-website

Original work © 2024 Henry Heffernan, licensed under the MIT License.
The full upstream LICENSE.md is preserved alongside this NOTICE.

Modifications in this vendor copy (Bingran You, 2026):

- `bundler/webpack.common.js` — added `publicPath: '/palace/'` and changed
  output path to write into `personal-site/public/palace/`, so the bundle is
  served by the host Next.js site under `/palace`.
- `src/Application/World/MonitorScreen.ts` — repointed the in-monitor iframe
  from `https://os.henryheffernan.com/` to `/palace/os/` (built from the
  sibling `palace-inner/` directory).
- Removed the upstream `server/` (Express) and `buildspec.yaml` (AWS
  CodeBuild). Vercel serves the static webpack output directly.
- Personal content / 3D model textures may be swapped over time as Bingran's
  own site evolves.

Used here with explicit permission from Henry Heffernan beyond the MIT terms.
Please direct any questions about the original implementation to Henry; any
questions about this vendor copy and Bingran's content to Bingran.
