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
- Polls unread notifications plus review requests and assigned items.
- Creates one isolated `git worktree` per scheduled task.
- Launches `codex` and/or `claude` in round-robin order with dangerous local permissions.
- Persists task state, lock state, logs, and workspaces under `~/.githuber` by default.

## Notes

- Public agent replies are instructed to include a disclosure sentence.
- `run-once` is the safest way to validate the whole loop before `start`.
- Workspaces are kept temporarily for inspection and are cleaned by `cleanup`.
