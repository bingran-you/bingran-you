# BenchFlow Experiment Control

一个独立的 BenchFlow 实验控制台。它默认通过 SSH 在 GCP VM 上启动 `bench eval create`，在 VM 里使用 Docker sandbox 跑 tasks，然后从远端 jobs 目录读取 task 状态、日志和 `result.json` / `config.json`。

这个项目只管理实验启动和监控，不修改 BenchFlow 主 repo，也不修改 SkillsBench task repo。

架构上它是 **CLI-first**：

- `python3 -m app.cli ...` 是实验启动、停止、状态刷新、artifact 读取的 canonical 管理层。
- `python3 -m app.server` 只提供一个 local-only dashboard，调用同一套 manager 逻辑。
- Web UI 不直接拼 BenchFlow 命令；它提交配置给 manager，manager 负责生成 task selection、远端命令、状态文件和 artifact 读取。

## Quick Start

```bash
git clone https://github.com/bingran-you/bingran-you.git
cd bingran-you/current-projects/benchflow-experiment-control
make run
```

然后打开：

```text
http://127.0.0.1:8765
```

也可以换端口：

```bash
make run PORT=9000
```

CLI 也可以直接用：

```bash
python3 -m app.cli defaults --pretty
python3 -m app.cli start --config configs/example.gcp.json --pretty
python3 -m app.cli state --pretty
python3 -m app.cli stop <run-id> --pretty
```

## Requirements

本机：

- Python 3.11+。
- 可以 SSH 到目标 GCP VM。
- 一个本地 `.env` 文件，里面放模型 provider 的 key。启动 run 时会上传到远端 run 目录下的 `.env`，不会写入 `data/state.json`。
- 本地实验结果根目录，默认是 `/Users/bingran_you/Downloads/GitHub/bingran-you/workspace/experiment`。

GCP VM：

- BenchFlow repo 已经 clone 到 VM 上。
- `uv run bench eval create --help` 可以在远端 BenchFlow root 里正常执行。
- Docker 已安装并可用，因为默认 harness 是 `docker`。
- tasks 目录已经在 VM 上，例如 SkillsBench tasks。

## Dashboard Flow

1. 启动本地 webapp。
2. 填写 GCP VM 的 SSH host、user、port 和 key。
3. 填写本地结果 root、远端 BenchFlow root、远端 tasks dir、远端 jobs root。
4. 选择 agent、model、harness、concurrency、skills label。
5. 可选填写 include/exclude tasks，支持逗号或换行分隔。
6. 点击“启动”，右侧会显示 run、task 状态、远端日志和 artifacts。

默认生成的远端命令形态是：

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

注意：当前 BenchFlow CLI 没有 `--include/--exclude`。本项目会在 run 目录里生成 `.benchflow-selected-tasks/`，用 symlink 指向被选择的 task，然后把这个目录作为 `--tasks-dir` 传给 BenchFlow。这样 CLI 和 dashboard 的 include/exclude 行为一致，而且不需要修改 BenchFlow 主 repo。

## Remote Execution

默认运行目标是 `gcp_ssh`，并预填当前实验 VM：

- Host: `34.58.166.203`
- SSH user: `bingran_you`
- Run user: `benchflow`
- BenchFlow root: `/opt/benchflow/benchflow`
- Tasks dir: `/opt/benchflow/skillsbench/tasks`
- Jobs root: `/mnt/benchflow/jobs/experiment-control`
- Local results root: `/Users/bingran_you/Downloads/GitHub/bingran-you/workspace/experiment`

远端执行形态是：

```bash
ssh <user>@<host> 'cd <remote_benchflow_root> && uv run bench eval create ... --sandbox docker'
```

SSH user 负责连接 VM；Run user 负责实际执行 `uv run bench eval create` 和读取 artifacts。默认 VM 上 `benchflow` 用户在 `docker` group 里，因此可以本地启动 Docker sandbox。

如果你换成自己的 VM，需要确保 SSH user 可以免密码执行：

```bash
sudo -n -u <run-user> bash -lc 'docker ps >/dev/null'
```

关键路径：

- `env_file`: 本机 `.env` 路径。启动 run 时会上传到远端 run 目录下的 `.env`，远端权限使用 `umask 077`。
- `jobs_root`: 本机保存完整 BenchFlow artifacts 的根目录。
- `remote_run_user`: 远端实际执行 BenchFlow/Docker 的 Linux 用户；留空则直接使用 SSH 登录用户。
- `remote_benchflow_root`: 远端 VM 上 BenchFlow repo 的 `benchflow` 目录。
- `remote_tasks_dir`: 远端 VM 上的 task 目录，传给 `--tasks-dir`。
- `remote_jobs_root`: 远端保存 run 输出的根目录。

远端路径可以写绝对路径，也可以写相对 SSH 登录 home 的路径；默认值使用相对路径，避免 shell 引号影响 `~` 展开。

## Config Fields

- `Key / env 文件本地路径`: 本机 `.env` 文件路径，里面的 key 会被上传到远端 run 目录。
- `本地结果 root`: 完整 run artifacts 的本地 archive 根目录。
- `Agent`: 传给 `--agent`。
- `Model`: 传给 `--model`；如果 agent 是 `oracle`，后端不会传 model。
- `Harness`: 传给 `--sandbox`，默认是 `docker`。
- `Include tasks`: 选择要运行的 task；manager 会生成 `.benchflow-selected-tasks/` 后传给 `--tasks-dir`。
- `Exclude tasks`: 从选择集中排除 task；不会传不存在的 BenchFlow `--exclude` 参数。
- `Skills label`: 本地/远端 archive 分组标签，例如 `with-skills` 或 `without-skills`。
- `Skills dir`: 传给 `--skills-dir`。
- `Skills mode`: 非 `default` 时传给 `--skill-mode`。
- `Extra args`: 追加到 `bench eval create` 的最后。

## Result Archive Layout

所有完整结果都会同步到本机 `jobs_root` 下，默认结构是：

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

远端 VM 上也使用同样的 `skills-label/agent/model/run-name/run-id` 分层。远端 run 结束后，CLI/dashboard 会把 BenchFlow 生成的 artifacts 同步回本机 archive；`.env` 会被排除，不进入本地结果包。

## CLI Commands

```bash
python3 -m app.cli defaults --pretty
python3 -m app.cli tasks --tasks-dir /path/to/tasks --pretty
python3 -m app.cli start --config configs/example.gcp.json --pretty
python3 -m app.cli state --pretty
python3 -m app.cli run <run-id> --pretty
python3 -m app.cli artifact <run-id> --path '2026-.../task__id/result.json' --pretty
python3 -m app.cli stop <run-id> --pretty
```

`start` 接受 JSON config。可以用 `--set key=value` 临时覆盖顶层字段：

```bash
python3 -m app.cli start \
  --config configs/example.gcp.json \
  --set name=skillsbench-smoke-2 \
  --set concurrency=2
```

## Local State

本 webapp 写两类本地路径：

- `data/state.json`: run 元数据和命令记录。只保存 `.env` 文件路径，不保存 key 内容。
- `data/logs/`: 本地 run 日志；远端 run 的真实日志在 GCP VM 的 jobs 目录。
- `jobs_root`: 完整 BenchFlow artifacts archive，默认在 `workspace/experiment`。

它不会修改 BenchFlow 主 repo 或 SkillsBench task repo。

## Troubleshooting

先用同一组 SSH 配置验证 VM：

```bash
ssh -i <key> -p <port> <user>@<host> 'cd <remote_benchflow_root> && uv run bench eval create --help'
```

如果启动失败，优先检查：

- VM 上的 BenchFlow root 是否正确。
- VM 上的 tasks dir 是否正确。
- Docker daemon 是否可用。
- 本地 `.env` 是否存在且 key 名称符合当前 agent 需要。
- SSH key 是否能在 BatchMode 下免交互登录。

## Tests

```bash
python3 -m py_compile app/*.py
python3 -m app.cli defaults >/dev/null
python3 -m unittest discover -s tests
```
