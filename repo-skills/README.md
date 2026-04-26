# Repo Skills

This directory is the single source of truth for repo-local skills.

- Put custom skills here as `repo-skills/<skill-name>/SKILL.md`.
- Do not put source skills directly in `.claude/skills` or `.agents/skills`.
- Run `scripts/sync_skills.sh refresh` after changing the manifest or adding/removing a skill.

`repo-skills/manifest.txt` is the explicit list of skills exposed to Claude Code and Codex.
