# MEMORY.md — Curated Workspace Memory

Main-session only. Keep this file high-signal and durable.

## Workspace

- `current-projects/` holds active project submodules such as `DoWhiz`, `first-tree`, `mews`, and `skillsbench`.
- Repo-managed skills live in `repo-skills/` and `trusted-external-repos/open-design/skills/`.
- `scripts/sync_skills.sh` mirrors valid skill directories into `.agents/skills` and `.claude/skills`.
- Session-start hooks in `.claude/settings.json` and `.codex/config.toml` attempt to run `scripts/sync_skills.sh init` automatically.

## Maintenance

- Put ephemeral session detail in `memory/YYYY-MM-DD.md`.
- Prefer replacing stale bullets here over appending contradictions.
