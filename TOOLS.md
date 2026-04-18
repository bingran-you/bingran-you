# TOOLS.md — Local Setup Notes

Skills define **how** tools work. This file is for **Bingran's** specifics — the environment-bound facts a skill can't know.

Fill in as you learn. Delete sections that don't apply.

---

## AI Harness

- **Primary stack:** Codex + GPT-5.4 (prompt-cache-heavy workflows)
- **Secondary:** Claude Code (this harness), Anthropic SDK for tooling
- **Skills library:** `trusted-external-repos/skills/` (submodule)
- **Harness configs:** `trusted-external-repos/oh-my-codex/`, `trusted-external-repos/gstack/`

## Repos & Workspaces

- **Main workspace root:** `~/Downloads/GitHub/bingran-you/`
- **Worktrees root:** `~/Downloads/GitHub/Claude-Worktrees/bingran-you/` — parallel sessions, per-branch.
- **Private submodule:** `bingran-you-private/` — confidential, never exfiltrate.

## Ion-Trap Environment

_(fill when needed)_

- ARTIQ host(s):
- Lab network / SSH aliases:
- Lab wiki / protocol docs:

## SSH / Machines

_(fill as you go)_

```
# host-alias → description
# e.g. lab-artiq → 10.0.x.x, user: haeffnerlab
```

## Accounts & Channels

- GitHub: `bingran-you`
- X / Twitter: `@bingran_bry`
- Email: `bingran.you@berkeley.edu` (academic), `bingran.bry@gmail.com` (personal)
- Hugging Face: `bingran-you`

## TTS / Voice (if configured)

- Preferred voice:
- Default output surface:

## Preferences

- Default commit voice: terse, imperative ("Add X", "Fix Y") — no emojis unless Bingran asks.
- Default PR voice: summary + test plan, no victory laps.
- Language: English in all artifacts.

---

_Skills are shared; this is yours. Update freely as the environment evolves._
