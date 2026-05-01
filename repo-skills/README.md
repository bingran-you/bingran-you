# Repo Skills

This directory is the single source of truth for repo-local skills.

- Put repo-local skills here as `repo-skills/<skill-name>/SKILL.md`.
- Open-design skills live in `trusted-external-repos/open-design/skills/<skill-name>/SKILL.md`.
- Do not put source skills directly in `.claude/skills` or `.agents/skills`.
- `scripts/sync_skills.sh` auto-discovers both source roots and mirrors them into `.claude/skills` and `.agents/skills` as directory symlinks.
- Use slug-like skill directory names (`letters`, `numbers`, `.`, `_`, `:`, `-`). Temporary copy names with spaces are skipped on purpose.
- Because each exposed skill is a symlink to its source directory, edits inside a skill folder show up immediately in `.claude/skills` and `.agents/skills`.
- Re-run `scripts/sync_skills.sh refresh` only when you add/remove an entire skill directory or want to rebuild the generated link farm.
