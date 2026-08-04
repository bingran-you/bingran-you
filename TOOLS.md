# TOOLS.md — Local Setup Notes

Skills define **how** tools work. This file is for **Bingran's** specifics — the environment-bound facts a skill can't know.

Fill in as you learn. Delete sections that don't apply.

---

## Operating Mode

**Safe to do freely (internal):**

- Read, search, analyze anything in the workspace
- Organize files, update documentation, run tests
- Commit on your own worktree branch (don't push unless asked)
- Web search, read public docs
- Draft content for Bingran's review

## Skills that own a domain

Some skills are the single source of truth for a domain — invoke them *first* and let them tell you what to do. Don't re-derive their lessons.

- **`social-scraping-policy`** — anything touching X / Xiaohongshu / xhslink / YouTube / Bilibili / LinkedIn. Reading, scraping, metadata, "add this to /posts" / "把这条加到个人网站", `navigate`/`fetch` against those domains, heartbeats checking them. Owns scripts, fallbacks, account-safety budgets.
- **`xiaohongshu-knowledge`** — writing/planning XHS posts (creative side: copy, hashtags, cover design).

### Adding posts to /posts → `social-scraping-policy`

Any pasted social post URL ("add this to /posts" / "把这条加到个人网站" / X / Xiaohongshu / YouTube / Bilibili / LinkedIn) is owned by the `social-scraping-policy` skill — invoke it first; it documents `npm run post:add`, the XHS Chrome-MCP fallback, and the diff discipline. And if you find the workflow does not work or find better or safer solutions, update the content in the skill and send a PR and squash merge into main branch.

## Typical workflow

When you do code changes, always follow the skill `.agents/skills/karpathy-guidelines` for any coding tasks.

For challenging tasks, if the plan is detailed and coherent, you should always try to finish all the requirements instead of asking for permissions, unless your action could bring in-reversible damages.

By default, you should always send a PR and squash merge into main and delete the PR branch when you finish any coding changing stages. And then you can move on to the next stage and do the same process.

When I ask you to do reports / deep research / article review / display or explain any content or concept, if the content is worth sharing, by default you can create a blog post in the website in blog section. And that html page should be beautiful and professional: it should have nicely formatted text, structure, bullet points, mind-maps (if needed), figures (if needed), tables (if needed), statistics (if needed), or even animation or videos (if needed). The whole point is making the content easy to understand and view, since no one likes reading too many text. But do not sacrifice the content itself. The content should always be professional and informative. Please avoid unnecessary filler. I want reports that are high-density, information-rich, highly polished, and comprehensive.

## Worktree & disk hygiene

The `bingran-you` repo nests many submodules (`trusted-external-repos/*`, `current-projects/*`, `bingran-you-private`). Most of them are large reference repos that a typical task does **not** touch. Watch out for two failure modes that quietly eat tens of GB:

1. **Submodule init blows up the main repo's `.git/worktrees/`.** When a worktree runs `git submodule update --init --recursive`, each submodule's `.git` data lands in `<main-repo>/.git/worktrees/<branch>/modules/<submodule>/`, not in the worktree itself. 50+ worktrees × all-submodules ≈ 15–20G inside the main `.git/`.
2. **Removed worktree directories leave `prunable` metadata behind.** Deleting a worktree folder with `rm -rf` doesn't free the `.git/worktrees/<name>/` slot — only `git worktree remove` or `git worktree prune` does.

Rules:

- **Don't `--recursive` init by default.** Only `git submodule update --init <path>` for the submodules the current task actually needs (usually none, sometimes `personal-site/` deps live in `repo-skills/`, occasionally `trusted-external-repos/skills` for a skill edit). If you don't know, ask — don't preemptively pull 16G of submodule history.
- **Finish a worktree with `git worktree remove <path>`, not `rm -rf`.** That cleans the metadata and submodule `.git` data in one go. If a worktree was already `rm`'d, run `git worktree prune -v` in the main repo to reclaim it.
- **Periodic hygiene in `~/Downloads/GitHub/bingran-you`:** `git worktree prune -v && git gc --prune=now`. Safe to run anytime; reclaims dead worktree metadata and compacts packs.

Other disk traps to know about on this machine:

- **Docker `buildx` cache never expires.** One pass of `kywch/smolclaws-base` (Claude Code sandbox) left 21G of build cache sitting for 7 weeks. After any sandbox / dev-container work, run `docker builder prune -a -f`. If you genuinely don't use Docker, reset the disk image from Docker Desktop → Settings → Resources.
- **`~/Library/Application Support/Claude/vm_bundles/claudevm.bundle/` is ~10G.** That's the Claude **desktop app**'s sandbox VM, not the CLI. CLI does not depend on it — safe to delete if Bingran isn't using the desktop sandbox feature.
- **WeChat (`~/Library/Containers/com.tencent.xinWeChat`) grows ~10–20G/month** from group chat attachments. Cleaned only via the WeChat app's storage panel — never touch the container directly.

## Agent trajectory storage (Windows box)

All Claude Code / Codex session trajectories live on `H:\WorkTrees` via NTFS
junctions — the original `~` paths still work, writes land on H::

- `~/.claude/projects` → `H:\WorkTrees\claude\trajectories`
- `~/.codex/sessions` → `H:\WorkTrees\codex\trajectories`
- `~/.codex/worktrees` → `H:\WorkTrees\codex\worktrees`

All three verified end-to-end 2026-08-03: new Claude Code sessions (desktop +
`claude -p`), new Codex sessions (desktop + `codex exec`), and Codex desktop
worktrees all physically land on H: while apps keep showing the original `C:`
paths — that's how junctions look from the app side, it is not a bug.

**Claude worktrees are the exception — no junction.** Claude Code's
EnterWorktree refuses to run when `<repo>\.claude\worktrees` is a
link (symlink-redirect security check), so that junction was removed:

- Built-in worktrees (`EnterWorktree`, desktop) live on C: under
  `<repo>\.claude\worktrees\` — fine, they're transient.
- For a worktree on H: (big/long-lived), create it manually and enter by path:
  `git worktree add H:\WorkTrees\claude\worktrees\bingran-you\<name> -b <branch>`
  then `EnterWorktree path=...`. Finish with `git worktree remove`, never `rm`.

Retention: `~/.claude/settings.json` sets `"cleanupPeriodDays": 36500` so
Claude Code never auto-deletes transcripts (default is 30 days). Codex has no
session GC. **Don't remove these junctions or "clean up" H:\WorkTrees** —
`*.pre-H-migration` dirs under `~/.claude` / `~/.codex` are the one-time
migration backups, delete only with Bingran's confirmation.

CLI availability: `codex` is on PATH (npm shim). `claude` CLI 2.1.221 lives at
`%APPDATA%\npm\claude.cmd` (reinstalled 2026-08-03 — the old npm install had
lost its shims); it is not yet logged in (desktop auth is separate), run
`claude` + `/login` once before headless `claude -p` use.

## Task Delivery

You are end-to-end. When Bingran gives you a task:

1. **Understand intent** before touching anything. Read the files he's talking about.
2. **Plan in your head, act on the plan.** No ceremony for small work. For multi-step work, track via the harness todo / planning tool when available (`TodoWrite`, `update_plan`, or equivalent).
3. **Execute to completion.** "Drafted" is not done. "Tested and verified" is done.
4. **Report crisply.** What shipped, what's verified, what remains. No summary of every step.
5. **Anticipate the next ask.** If there's an obvious follow-up, name it or (if safe) do it.

---

_Skills are shared; this is yours. Update freely as the environment evolves._
