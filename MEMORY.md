# MEMORY.md — Curated Workspace Memory

Main-session only. Keep this file high-signal and durable.

## Workspace

- `current-projects/` holds active project submodules such as `DoWhiz`, `first-tree`, `mews`, and `skillsbench`.
- `personal-site/` hosts `bingranyou.com` (Next.js 16 + MDX, deployed on Vercel from this repo with Root Directory `personal-site`). Pushes to `main` trigger production builds; the `personal-site/vercel.json` `ignoreCommand` skips builds when nothing inside `personal-site/` changes.
- The personal site now includes `/about`, `/projects`, `/papers`, `/skills`, `/blog`, `/llms.txt`, and `/llms-full.txt`.
- `personal-site/scripts/generate-skills-data.mjs` generates the `/skills` catalog payload (`lib/skills.generated.json`) and downloadable copies under `public/skill-files/` from mirrored `.agents/skills/`. The generator derives `updatedAt` per skill from `git log -1 --format=%cI SKILL.md` in the file's directory — always `git fetch --unshallow` (main repo _and_ each managed submodule) before running `make sync`, or the catalog silently drifts with placeholder timestamps. CI's `actions/checkout@v4` sets `fetch-depth: 0` so its regeneration is authoritative; a shallow local clone produces different `updatedAt` values.
- Repo-managed skills live in `repo-skills/`, `trusted-external-repos/open-design/skills/`, `trusted-external-repos/marketingskills/skills/`, `trusted-external-repos/mattpocock-skills/skills/`, and `trusted-external-repos/gstack/` (including `browser-skills/` and `openclaw/skills/`).
- `scripts/sync_skills.sh` mirrors valid skill directories into `.agents/skills` and `.claude/skills`.
- Session-start hooks in `.claude/settings.json` and `.codex/config.toml` attempt to run `scripts/sync_skills.sh init` automatically.

## Maintenance

- Put ephemeral session detail in `memory/YYYY-MM-DD.md`.
- Prefer replacing stale bullets here over appending contradictions.
