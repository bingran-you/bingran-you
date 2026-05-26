# BenchFlow Experiment Control

一个独立的 BenchFlow 实验控制台。它默认通过 SSH 在 GCP VM 上启动 `bench eval create`，在 VM 里使用 Docker sandbox 跑 tasks，然后从远端 jobs 目录读取 task 状态、日志和 `result.json` / `config.json`。

这个项目只管理实验启动和监控，不修改 BenchFlow 主 repo，也不修改 SkillsBench task repo。

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

## Requirements

本机：

- Python 3.11+。
- 可以 SSH 到目标 GCP VM。
- 一个本地 `.env` 文件，里面放模型 provider 的 key，例如 `GEMINI_API_KEY=...`。启动 run 时会上传到远端 run 目录下的 `.env`。

GCP VM：

- BenchFlow repo 已经 clone 到 VM 上。
- `uv run bench eval create --help` 可以在远端 BenchFlow root 里正常执行。
- Docker 已安装并可用，因为默认 harness 是 `docker`。
- tasks 目录已经在 VM 上，例如 SkillsBench tasks。

## Dashboard Flow

1. 启动本地 webapp。
2. 填写 GCP VM 的 SSH host、user、port 和 key。
3. 填写远端 BenchFlow root、远端 tasks dir、远端 jobs root。
4. 选择 agent、model、harness、concurrency。
5. 可选填写 include/exclude tasks，支持逗号或换行分隔。
6. 点击“启动”，右侧会显示 run、task 状态、远端日志和 artifacts。

默认生成的远端命令形态是：

```bash
cd <remote_benchflow_root>
uv run bench eval create \
  --tasks-dir <remote_tasks_dir> \
  --agent <agent> \
  --model <model> \
  --sandbox docker \
  --concurrency <n> \
  --jobs-dir <remote_jobs_dir>
```

## Remote Execution

默认运行目标是 `gcp_ssh`：

```bash
ssh <user>@<host> 'cd <remote_benchflow_root> && uv run bench eval create ... --sandbox docker'
```

关键路径：

- `env_file`: 本机 `.env` 路径。启动 run 时会上传到远端 run 目录下的 `.env`，远端权限使用 `umask 077`。
- `remote_benchflow_root`: 远端 VM 上 BenchFlow repo 的 `benchflow` 目录。
- `remote_tasks_dir`: 远端 VM 上的 task 目录，传给 `--tasks-dir`。
- `remote_jobs_root`: 远端保存 run 输出的根目录。

远端路径可以写绝对路径，也可以写相对 SSH 登录 home 的路径；默认值使用相对路径，避免 shell 引号影响 `~` 展开。

## Config Fields

- `Key / env 文件本地路径`: 本机 `.env` 文件路径，里面的 key 会被上传到远端 run 目录。
- `Agent`: 传给 `--agent`。
- `Model`: 传给 `--model`；如果 agent 是 `oracle`，后端不会传 model。
- `Harness`: 传给 `--sandbox`，默认是 `docker`。
- `Include tasks`: 传给重复的 `--include`。
- `Exclude tasks`: 传给重复的 `--exclude`。
- `Skills dir`: 传给 `--skills-dir`。
- `Skills mode`: 非 `default` 时传给 `--skill-mode`。
- `Extra args`: 追加到 `bench eval create` 的最后。

## Local State

本 webapp 只写当前项目目录下的 `data/`：

- `data/state.json`: run 元数据和命令记录。
- `data/logs/`: 本地 run 日志；远端 run 的真实日志在 GCP VM 的 jobs 目录。

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
python3 -m unittest discover -s tests
```
