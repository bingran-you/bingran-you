# Daily code update — 2026-10-23

Run of the `daily-code-update` scheduled task.

## Summary

Scanned 34 git repos under `~/Downloads/GitHub/`. Of 22 forks owned by
`bingran-you` on GitHub, 21 synced cleanly with their upstream default
branches, 1 diverged. One submodule-pointer PR landed in `bingran-you/bingran-you`.
All 34 local checkouts ended clean (0 ahead / 0 behind their tracking branch).

## 1. Fork sync (bingran-you forks ↔ upstream)

Pulled the full fork list via `gh repo list bingran-you --fork` (22 forks) and
ran `gh repo sync bingran-you/<name> --branch <default>` on each. Also ran
`gh repo sync` for `bingran-you/SciTra`.

| Result | Count | Repos |
|---|---|---|
| **Synced (no change or fast-forward)** | 21 | QCCD, oh-my-codex, long-horizon, paperclip, opencode, open-design, gstack, gbrain, marketingskills, skillsbench, claude-code, benchflow, claw-code, LJT-Homepage, claude-skills, my-luffy-repo, paperclip-tree, terminal-bench, DoWhiz, skills, first-tree |
| **Diverged (not force-synced)** | 1 | `terminal-bench-3` — `gh repo sync` refused with "diverging changes; use --force"; left alone |
| **Fork origin missing** | 1 | `bingran-you/SciTra` — GitHub returns 404 for both `bingran-you/SciTra` and `yuema137/SciTra`. Gh did not list it as a fork. Same state as 2026-10-22. |

## 2. Submodule bumps

Three repos declare top-level submodules:

| Parent repo | Default branch | Submodule bumps | PR |
|---|---|---|---|
| `./bingran-you` | main | **1 bump**: `trusted-external-repos/gbrain` 6e190ae6e → 15dbf4acb | [bingran-you/bingran-you#648](https://github.com/bingran-you/bingran-you/pull/648) — squash-merged, branch deleted, local `main` fast-forwarded. |
| `BenchFlow.ai/env-0-experiment` | main | none — `env-0` already at remote HEAD | — |
| `DeepTutor_Workspace/DeepTutorDesktop` | staging | none — only nested `*-dirty` noise from `--recursive`; no top-level pointer movement | — |

Branch name used: `chore/bump-submodules-2026-10-23`. Only top-level `M`
entries were committed; nested `-dirty` working-tree state from
`--remote --recursive` was reset with `submodule update --init --recursive`
after the merge/compare.

DeepTutorDesktop fetch/push would need the `Oliver-DoWhiz` account (bingran-you
has no credential for `KnoWhiz/*`). The one-off `GH_TOKEN`-returning credential
helper script was created in the session scratchpad and removed after use.

The `env-0-experiment` nested submodule `current-projects/skillsbench/tasks/.../SimPO/alignment-handbook` has no URL in `.gitmodules`, which emits a fatal from `submodule update --init --recursive`. Pre-existing; does not affect top-level pointers in the parents actually being bumped.

## 3. Pull-to-latest

Of the 34 repos:

- **1 fast-forwarded**:
  - `BenchFlow.ai/FrontierPhysics-Infra` was 1 commit behind `origin/main`.
  - (Plus `bingran-you` ff'd 1 commit — the squash from PR #648 above.)
- **32 already at parity** with their tracking branch.
- **1 unreachable**: `BenchFlow.ai/SciTra` — both the fork origin and the upstream repo return 404. Still an orphaned local snapshot.

### Working-tree dirtiness noted (not touched)

- `BenchFlow.ai/fp-artifacts/main` — 1 uncommitted entry.
- `bingran-you/main` — 10 untracked `memory/*.md` files (daily logs, intentional).

## Branches present on origin for non-default local branches

Same three as yesterday; still the user's active working branches:

- `BenchFlow.ai/SkillsBench_NIPS-github`: `bry/fig1-html-pipeline`
- `BenchFlow.ai/tasks-sync`: `bry/import-frontierphysics-vlasov-bump-on-tail-robust-control`
- `BenchFlow.ai/www.benchflow.ai`: `bry/frontierphysics-rewrites-before-files`

## Operational notes

- `terminal-bench-3` keeps failing `gh repo sync` because fork and upstream have diverged. Needs a manual decision (rebase/replace vs. force-push) before daily auto-sync will touch it.
- SciTra orphan persists — same recommendation as yesterday: delete the local checkout or re-point to a surviving mirror; otherwise it will keep erroring out on every daily run.
- QCCD fork `main` is in sync; upstream feature branches still not mirrored to the fork origin (unchanged behavior — only default-branch mirroring is in scope today).

## Workspace end-state

```
Total non-clean (ahead/behind tracking): 0 / 34
```
