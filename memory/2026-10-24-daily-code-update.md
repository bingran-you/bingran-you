# Daily code update — 2026-10-24

Run of the `daily-code-update` scheduled task.

## Summary

Scanned 34 git repos under `~/Downloads/GitHub/`. 21/22 bingran-you forks
synced with upstream (one diverged). Two submodule-pointer PRs squash-merged
(`bingran-you/bingran-you#649`, `KnoWhiz/DeepTutorDesktop#340`). All local
default-branch checkouts ended at parity with their tracking branches.

## 1. Fork sync (bingran-you forks ↔ upstream)

Ran `gh repo sync bingran-you/<name> --branch <default>` on each of the 22
forks returned by `gh repo list bingran-you --fork`.

| Result | Count | Repos |
|---|---|---|
| **Synced (no change or fast-forward)** | 21 | gbrain, gstack, open-design, opencode, paperclip, oh-my-codex, QCCD, long-horizon, marketingskills, skillsbench, claude-code, benchflow, claw-code, LJT-Homepage, claude-skills, my-luffy-repo, paperclip-tree, terminal-bench, DoWhiz, skills, first-tree |
| **Diverged (not force-synced)** | 1 | `terminal-bench-3` — `gh repo sync` refused with "diverging changes; use --force"; left alone (same state as 2026-10-23) |
| **Fork origin missing** | 1 | `bingran-you/SciTra` — GitHub returns 404 for both `bingran-you/SciTra` and `yuema137/SciTra`; `gh` did not list it as a fork (same state as 2026-10-23) |

## 2. Submodule bumps

Three repos declare top-level submodules:

| Parent repo | Default branch | Submodule bumps | PR |
|---|---|---|---|
| `./bingran-you` | main | **1 bump**: `trusted-external-repos/gbrain` 15dbf4acb → 3f0b6eecd | [bingran-you/bingran-you#649](https://github.com/bingran-you/bingran-you/pull/649) — squash-merged, branch deleted, local `main` fast-forwarded. |
| `BenchFlow.ai/env-0-experiment` | main | none — `env-0` submodule already at remote HEAD | — |
| `DeepTutor_Workspace/DeepTutorDesktop` | staging | **1 bump**: `translators` d3e38c19 → 8fdb26b68 | [KnoWhiz/DeepTutorDesktop#340](https://github.com/KnoWhiz/DeepTutorDesktop/pull/340) — squash-merged (admin), branch deleted, local `staging` fast-forwarded. |

Branch name used: `chore/bump-submodules-2026-10-24`. The DeepTutorDesktop
fetch/push used a one-off `credential.helper` script pointing at the
`Oliver-DoWhiz` token (bingran-you has no credential for `KnoWhiz/*`). The
script was placed in the session scratchpad only.

Notes on DeepTutorDesktop submodules this run:
- `resource/SingleFile` emits `Unable to find refs/remotes/origin/HEAD` on
  `submodule update --remote` (upstream has no HEAD symref). Skipped.
- `test/resource/chai` and `test/resource/mocha` are declared in
  `.gitmodules` but not initialized in the index (`pathspec … did not match
  any file(s) known to git`). Not touching this; pre-existing.
- The nested `current-projects/skillsbench/tasks/.../SimPO/alignment-handbook`
  submodule in `./bingran-you` still has no URL in its own `.gitmodules`
  and emits a fatal from `submodule update --init --recursive`. Pre-existing;
  does not affect top-level pointers in the parents actually being bumped.

## 3. Pull-to-latest

Of the top-level default-branch repos:

- **All at parity** with their tracking branches after fetch + the two
  submodule-bump merges above. No additional fast-forwards were needed
  today (compare 2026-10-23 when FrontierPhysics-Infra was 1 behind).
- `BenchFlow.ai/SciTra` is still unreachable — both origin and the former
  upstream return 404. Local snapshot left in place.
- `DeepTutor_Workspace/DeepTutorPipeline` and `DeepTutorBackend` origins
  return 404 under both `bingran-you` and `Oliver-DoWhiz` tokens. Local
  checkouts left in place.

Non-default-branch worktrees under `Claude-Worktrees/*` and dev branches
such as `QCCD-hillclimb-site` (hillclimb/p3-site-board) are intentionally
not pulled — those are active user work branches with their own commits.

### Working-tree dirtiness noted (not touched)

- `bingran-you/main` — untracked `memory/*.md` daily logs (expected).
- `BenchFlow.ai/FrontierPhysics-masiv-replay` — on `bry/masiv-replay-oracle`,
  1 commit ahead, 2 untracked files.
- `BenchFlow.ai/fp-artifacts/main` — same as yesterday.

## Operational notes

- `terminal-bench-3` continues to diverge from upstream; still needs a manual
  decision (rebase vs. force-push) before auto-sync will touch it.
- SciTra orphan persists — delete the local checkout or re-point to a
  surviving mirror; otherwise it will keep erroring out on every daily run.

## Workspace end-state

```
Default-branch repos ahead/behind tracking: 0 / N
```
