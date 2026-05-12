<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Adding posts to /posts → `social-scraping-policy`

Any pasted social post URL ("add this to /posts" / "把这条加到个人网站" / X / Xiaohongshu / YouTube / Bilibili / LinkedIn) is owned by the `social-scraping-policy` skill — invoke it first; it documents `npm run post:add`, the XHS Chrome-MCP fallback, and the diff discipline.

## Refreshing the /skills catalog

`/skills` is built from `lib/skills.generated.json`, produced by `scripts/generate-skills-data.mjs` from the mirrored `.agents/skills/`. Vercel can't regenerate at build time (private submodules don't clone there) — so after adding, renaming, or editing any skill (in `repo-skills/` or any `trusted-external-repos/*` source root), the mirrored entrypoints and generator output must be committed in the same PR.

Prefer **`make sync` from the repo root**, which refreshes `.agents/skills` + `.claude/skills` and regenerates `lib/skills.generated.json` + `public/skill-files/` in one step. `npm run skills:generate` alone only refreshes the latter half and will leave the entrypoint mirrors stale if a submodule was bumped. The `skills-sync-check` GitHub Action enforces alignment on every PR.
