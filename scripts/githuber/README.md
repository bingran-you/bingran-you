# githuber

`githuber` is a local Rust service that polls the active `gh` account, turns actionable GitHub inbox items into isolated task workspaces, and dispatches them to local `codex` and/or `claude` CLI agents.

## Commands

```bash
cargo run --manifest-path scripts/githuber/Cargo.toml -- doctor
cargo run --manifest-path scripts/githuber/Cargo.toml -- run-once
cargo run --manifest-path scripts/githuber/Cargo.toml -- start
cargo run --manifest-path scripts/githuber/Cargo.toml -- status
cargo run --manifest-path scripts/githuber/Cargo.toml -- stop
```

## Behavior

- Reuses the active `gh` identity for the configured host.
- Refuses to start if another `githuber` instance is already running for the same `host + login + profile`.
- Sweeps actionable notification threads from the last 24 hours on every poll, even if they are already marked read, and only uses GitHub search as a slower backfill path.
- Creates one isolated `git worktree` per scheduled task.
- Prepares a local snapshot for each task before the agent starts so the agent can inspect GitHub context without re-fetching it.
- Launches `codex` and/or `claude` in round-robin order with dangerous local permissions.
- Keeps local agent/worktree fan-out high while brokering all in-task `gh` commands through a single paced queue.
- Persists task state, lock state, logs, and workspaces under `~/.githuber` by default.

## Notes

- Public agent replies are instructed to include a disclosure sentence.
- Brokered `gh` commands are serialized and mutating operations are spaced out to reduce rate-limit pressure.
- `run-once` is the safest way to validate the whole loop before `start`.
- Workspaces are kept temporarily for inspection and are cleaned by `cleanup`.
