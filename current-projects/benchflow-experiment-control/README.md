# BenchFlow Experiment Control

BenchFlow Experiment Control is a local experiment console for launching and
monitoring BenchFlow batch runs. By default it connects to a GCP VM over SSH,
runs `bench eval create` with Docker sandboxing on the VM, then reads task
status, logs, and BenchFlow artifacts from the run output.

This project only manages experiment launch and monitoring. It does not modify
the BenchFlow repository or the SkillsBench task repository.

The architecture is CLI-first:

- `python3 -m app.cli ...` is the canonical management layer for starting,
  stopping, refreshing, and reading run artifacts.
- `python3 -m app.server` serves a local-only dashboard that calls the same
  manager logic.
- The web UI does not build BenchFlow commands directly. It submits config to
  the manager, which owns task selection, remote commands, state files, and
  artifact reads.

## Quick Start

```bash
git clone https://github.com/bingran-you/bingran-you.git
cd bingran-you/current-projects/benchflow-experiment-control
make run
```

Open:

```text
http://127.0.0.1:8765
```

Use a different port:

```bash
make run PORT=9000
```

Use the CLI directly:

```bash
python3 -m app.cli defaults --pretty
python3 -m app.cli start --config configs/example.gcp.json --pretty
python3 -m app.cli pool-start --config configs/example.gcp.json --pretty
python3 -m app.cli state --pretty
python3 -m app.cli stop <run-id> --pretty
```

## Requirements

Local machine:

- Python 3.11+.
- SSH access to the target GCP VM.
- A local `.env` file with model provider keys. The file is uploaded to the
  remote run directory when a run starts, but key contents are not written to
  `data/state.json`.
- A local experiment archive root. The default is
  `/Users/bingran_you/Downloads/GitHub/bingran-you/workspace/experiment`.

GCP VM:

- The BenchFlow repository is cloned on the VM.
- `uv run bench eval create --help` works from the remote BenchFlow root.
- Docker is installed and usable because the default harness is `docker`.
- The task directory exists on the VM, for example the SkillsBench `tasks`
  directory.

## Dashboard Flow

1. Start the local webapp.
2. Fill in the GCP VM SSH host, user, port, and key.
3. Fill in the local results root, remote BenchFlow root, remote tasks
   directory, and remote jobs root.
4. Choose agent, model, harness, concurrency, and skills label.
5. Optionally set include/exclude task lists. Commas and newlines are accepted.
6. Click "Start". The right side shows run status, task status, remote logs,
   and artifacts.
7. Click "Start Pool" when you want task-level continuous scheduling. Without
   a spreadsheet ID, the pool keeps up to `Concurrency` single-task runs active
   from the selected task list. With a spreadsheet ID, the pool treats the
   existing sheet rows as the shared queue: it claims empty run slots, starts
   one fresh sandbox run per claim, clears that run's remote Docker containers
   after artifact sync, audits and archives the artifacts, updates that same
   sheet slot, and only then claims the next slot.

The generated remote command has this shape:

```bash
cd <remote_benchflow_root>
uv run bench eval create \
  --tasks-dir <effective_tasks_dir> \
  --agent <agent> \
  --model <model> \
  --sandbox docker \
  --concurrency <n> \
  --jobs-dir <remote_jobs_dir>
```

BenchFlow currently does not expose `--include` or `--exclude` flags for this
batch path. This project creates a `.benchflow-selected-tasks/` directory inside
the run directory, symlinks only the selected tasks into it, and passes that
directory as `--tasks-dir`. CLI and dashboard task selection therefore share the
same behavior without requiring changes to the BenchFlow repo.

## Remote Execution

The default target is `gcp_ssh`, prefilled for the current experiment VM:

- Host: `34.58.166.203`
- SSH user: `bingran_you`
- Run user: `benchflow`
- BenchFlow root: `/opt/benchflow/benchflow`
- Tasks dir: `/opt/benchflow/skillsbench/tasks`
- Jobs root: `/mnt/benchflow/jobs/experiment-control`
- Local results root:
  `/Users/bingran_you/Downloads/GitHub/bingran-you/workspace/experiment`

Remote execution shape:

```bash
ssh <user>@<host> 'cd <remote_benchflow_root> && uv run bench eval create ... --sandbox docker'
```

The SSH user connects to the VM. The run user executes `uv run bench eval
create` and reads artifacts. On the default VM, the `benchflow` user is in the
`docker` group, so it can launch Docker sandboxes locally.

For another VM, make sure the SSH user can run this without an interactive
password prompt:

```bash
sudo -n -u <run-user> bash -lc 'docker ps >/dev/null'
```

Key paths:

- `env_file`: local `.env` path. It is uploaded to the remote run directory
  with `umask 077`.
- `jobs_root`: local root for complete BenchFlow artifact archives.
- `remote_run_user`: Linux user that actually runs BenchFlow and Docker on the
  VM. Leave it empty to use the SSH login user directly.
- `remote_benchflow_root`: remote BenchFlow repository root.
- `remote_tasks_dir`: remote task directory passed to `--tasks-dir`.
- `remote_jobs_root`: remote root for run output.

Remote paths may be absolute or relative to the SSH login home.

## Config Fields

- `Key / env file path`: local `.env` file path. The key file is uploaded to
  the remote run directory.
- `Local results root`: local archive root for complete run artifacts.
- `Agent`: passed to `--agent`.
- `Model`: passed to `--model`; omitted when the agent is `oracle`.
- `Harness`: passed to `--sandbox`; the default is `docker`.
- `Include tasks`: selected tasks. The manager creates
  `.benchflow-selected-tasks/` and passes it to `--tasks-dir`.
- `Exclude tasks`: tasks removed from the selected set. This does not pass a
  non-existent BenchFlow `--exclude` flag.
- `Skills label`: local and remote archive grouping label, for example
  `with-skills` or `without-skills`.
- `Skills dir`: passed to `--skills-dir`.
- `Skills mode`: passed to `--skill-mode` when not `default`.
- `Extra args`: appended to the `bench eval create` command.
- `Spreadsheet ID`: enables sheet-backed pool mode. The sheet's existing
  columns and run slots are used as-is; no new sheet structure is created.
- `Tab`: sheet tab to read and update.
- The shared status spreadsheet's `PR2_PR3_HF_VM_Clean5` tab is an imported
  view and is refused as a write target. Use the writable source spreadsheet
  for sheet-backed pooling.
- `Configuration`: optional explicit configuration key. When empty, the
  manager uses `<agent>__<model>__<skills-label>`.
- `Owner`: local operator label for pool state and claim ids.
- `Lease TTL min`: stale `running` sheet slots older than this can be claimed
  again.

## Result Archive Layout

Complete results sync to the local `jobs_root`. The default layout is:

```text
/Users/bingran_you/Downloads/GitHub/bingran-you/workspace/experiment/
  <skills-label>/
    <agent>/
      <model>/
        <run-name>/
          <run-id>/
            run.log
            exit-code.txt
            2026-.../
              <task>__<rollout-id>/
                result.json
                config.json
                timing.json
                rewards.jsonl
                agent/
                trajectory/
                trainer/
```

The VM uses the same `skills-label/agent/model/run-name/run-id` grouping. When
the remote run exits, the CLI/dashboard syncs BenchFlow-generated artifacts back
to the local archive. `.env` is excluded from the synced artifact tree.

## CLI Commands

```bash
python3 -m app.cli defaults --pretty
python3 -m app.cli tasks --tasks-dir /path/to/tasks --pretty
python3 -m app.cli start --config configs/example.gcp.json --pretty
python3 -m app.cli pool-start --config configs/example.gcp.json --pretty
python3 -m app.cli pool <pool-id> --pretty
python3 -m app.cli pool-step <pool-id> --pretty
python3 -m app.cli pool-stop <pool-id> --pretty
python3 -m app.cli state --pretty
python3 -m app.cli run <run-id> --pretty
python3 -m app.cli artifact <run-id> --path '2026-.../task__id/result.json' --pretty
python3 -m app.cli stop <run-id> --pretty
```

`pool-start` treats `concurrency` as pool capacity. Each slot is a normal
BenchFlow run with one selected task and `concurrency=1`, so existing artifact
sync, archive layout, run inspection, and stop semantics stay canonical. A
pool attempt becomes usable only after the synced run has a numeric reward,
complete ACP trajectory JSONL, complete LLM trajectory JSONL,
`partial_trajectory=false`, successful sandbox cleanup, and provider token
usage with positive `total_tokens`.

In sheet-backed mode, `pool-start` does not append rows or create new columns.
It claims the first available existing `run_N_*` slot for each task, preferring
empty slots before expired claims or invalid historical slots. It writes a
temporary running marker, runs the task in a fresh sandbox, cleans up the
sandbox, writes `benchflow-experiment-manifest.json` with artifact hashes beside
the trial, and then updates that same slot with the final reward, status,
trajectory, usage, cost, and artifact paths.

`start` accepts a JSON config. Use `--set key=value` to override top-level
fields:

```bash
python3 -m app.cli start \
  --config configs/example.gcp.json \
  --set name=skillsbench-smoke-2 \
  --set concurrency=2
```

## Local State

The webapp writes two kinds of local paths:

- `data/state.json`: run metadata and command records. It stores the `.env`
  file path, not key contents.
- `data/logs/`: local run logs. Remote run logs live in the GCP VM jobs
  directory.
- `jobs_root`: complete BenchFlow artifact archive, defaulting to
  `workspace/experiment`.

It does not modify the BenchFlow repository or the SkillsBench task repository.

## Troubleshooting

Verify VM access with the same SSH config:

```bash
ssh -i <key> -p <port> <user>@<host> 'cd <remote_benchflow_root> && uv run bench eval create --help'
```

If launch fails, check:

- The remote BenchFlow root is correct.
- The remote tasks directory is correct.
- Docker daemon access works for the run user.
- The local `.env` exists and uses key names expected by the selected agent.
- The SSH key works in BatchMode without interactive prompts.

## Tests

```bash
python3 -m py_compile app/*.py
python3 -m app.cli defaults >/dev/null
python3 -m unittest discover -s tests
```
