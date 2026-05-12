# Workspace tasks.
# Run from the repo root.

.PHONY: sync sync-check help

help:
	@echo "Targets:"
	@echo "  sync         Refresh .agents/skills + .claude/skills mirrors and regenerate the personal-site skills catalog."
	@echo "  sync-check   Run sync, then fail if any tracked skills artifact has drifted (used by CI)."

# Bring the three skill layers into alignment:
#   sources -> mirrored entrypoints -> personal-site generator output.
# Run this after bumping any trusted-external-repos submodule, or after
# adding/renaming/editing a skill in repo-skills.
sync:
	@zsh scripts/sync_skills.sh refresh
	@cd personal-site && npm run skills:generate

# CI gate: re-run sync and fail if it produces any diff. Forces every PR
# to land with the three layers aligned.
sync-check: sync
	@git diff --exit-code -- \
	  .agents/skills \
	  .claude/skills \
	  personal-site/lib/skills.generated.json \
	  personal-site/public/skill-files \
	  || { echo ""; echo "Skills artifacts are out of sync. Run \`make sync\` and commit the result."; exit 1; }
