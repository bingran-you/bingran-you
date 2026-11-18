# MEMORY.md — Curated Workspace Memory

Main-session only. Keep this file high-signal and durable.

## Workspace

- `current-projects/` holds the active project submodules `first-tree`, `mews`, and `skillsbench`.
- `personal-site/` hosts `bingran.ai` (Next.js 16, deployed on Vercel from this repo with Root Directory `personal-site`). Pushes to `main` trigger production builds; the `personal-site/vercel.json` `ignoreCommand` skips builds when nothing inside `personal-site/` changes.
- The personal site is one page of plain HTML in the browser's default styles (after noahshinn.com, since 2026-11-17), plus `/palace`, `/llms.txt` and `/llms-full.txt`; `/about`, `/projects` and `/papers` redirect to its sections. It carries only each paper's and project's own wording; see `personal-site/README.md`.
- This repo holds no skills. `repo-skills/`, the `.agents/skills` and `.claude/skills` mirrors, `scripts/sync_skills.sh`, `make sync`, the `skills-sync-check` workflow, the site's `/skills` catalog and the skill-library submodules were removed on 2026-10-09. Skills are installed at user level (`~/.claude/skills/`, `~/.codex/skills/`).

## Maintenance

- Put ephemeral session detail in `memory/YYYY-MM-DD.md`.
- Prefer replacing stale bullets here over appending contradictions.
