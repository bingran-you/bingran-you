# Daily code update — 2026-10-22

Run of the `daily-code-update` scheduled task.

## Summary

Scanned 34 git repos under `~/Downloads/GitHub/` (excluding git worktrees).
All 34 ended clean (0 ahead / 0 behind their tracking branch, no uncommitted
changes).

## 1. Fork sync (bingran-you forks ↔ upstream)

Two forks with an `upstream` remote:

| Fork | Upstream | main sync | Notes |
|---|---|---|---|
| `./QCCD` | `yezhuoyang/QCCD` | already in sync (0/0 vs upstream/main) | upstream has moved on feature branches `compiler` (+27), `website/invitations` (+261), `jaewon/wise-jones` (+223), and new branch `jaewon/jones-wise-mode` — not auto-mirrored to origin fork |
| `BenchFlow.ai/SciTra` | `yuema137/SciTra` | **cannot sync — upstream deleted (HTTP 404)** | even the fork origin `bingran-you/SciTra` now returns 404; local checkout is orphaned |

## 2. Submodule bumps

Three repos declare top-level submodules:

| Parent repo | Submodules | Any bump? | PR |
|---|---|---|---|
| `./bingran-you` | 6 (bingran-you-private, first-tree, mews, skillsbench, gbrain, multiplexed-ion-photon) | no — all already at remote HEAD | — |
| `BenchFlow.ai/env-0-experiment` | 1 (`env-0`) | no — already at latest | — |
| `DeepTutor_Workspace/DeepTutorDesktop` | 15 (Zotero + CSL + Mocha/Chai + …) | **yes — 2 pointer bumps**: `chrome/content/zotero/locale/csl`, `chrome/content/zotero/xpcom/translate` | [KnoWhiz/DeepTutorDesktop#339](https://github.com/KnoWhiz/DeepTutorDesktop/pull/339) — merged (squash), branch deleted |

Branch name used: `chore/bump-submodules-2026-10-22`. Base branch: `staging` (DeepTutorDesktop's default).

Pushed as `Oliver-DoWhiz` (the account with write access to `KnoWhiz/*`).
Only top-level pointer changes (`M` entries) were committed; nested
working-tree dirtiness from `submodule update --remote --recursive` was reset
after the merge with `git submodule update --init --recursive`.

As a side effect, `git fetch --prune` also removed stale remote-tracking entry
for `origin/chore/submodule-bump-20261016` (a previous day's run that was
already merged + deleted upstream).

## 3. Pull-to-latest

Of the 34 repos:
- **2 fast-forwarded**:
  - `BenchFlow.ai/FrontierPhysics-Infra` was 3 commits behind `origin/main`
  - `BenchFlow.ai/agents-work` was 18 commits behind `origin/main`
  - (Plus DeepTutorDesktop ff'd 1 commit — the squash from PR #339 above.)
- **31 already at parity** with their tracking branch.
- **1 unreachable**: `BenchFlow.ai/SciTra` — both the fork origin and the
  upstream repo now return 404. The local directory is a historical snapshot.

## Operational notes

- DeepTutorDesktop local git config overrides credential helper to
  `osxkeychain`, which has no entry for `bingran-you` → `KnoWhiz/*`. Fetch and
  push for that repo were done by switching the active `gh` account to
  `Oliver-DoWhiz`, writing a one-off `GH_TOKEN`-returning credential helper,
  and invoking `git -c credential.helper='!<script>'`. Temp script removed
  after. Active `gh` account restored to `bingran-you`.
- SciTra orphan: suggest removing the local checkout or re-pointing to a
  revived mirror if the project is still active; otherwise it will keep
  erroring out on every daily run.
- QCCD fork is in sync for `main`, but upstream feature branches (notably
  `website/invitations` +261, `jaewon/wise-jones` +223, `compiler` +27) are
  not mirrored to the fork origin. If daily mirroring of all upstream
  branches is desired, this task should be extended; current behavior
  mirrors only the default branch's effective state.

## Branches left on remote (non-default)

Branches present on origin for repos that aren't on their default locally — not
touched today, listed for awareness:
- `BenchFlow.ai/SkillsBench_NIPS-github`: local on `bry/fig1-html-pipeline`
- `BenchFlow.ai/tasks-sync`: local on `bry/import-frontierphysics-vlasov-bump-on-tail-robust-control`
- `BenchFlow.ai/www.benchflow.ai`: local on `bry/frontierphysics-rewrites-before-files`

These are the user's working branches; the task spec said to pull to latest,
which happened (they are all at parity with their respective tracking
branches).

## Workspace end-state

```
Total non-clean: 0 / 34
```
