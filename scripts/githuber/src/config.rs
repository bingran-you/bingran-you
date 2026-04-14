use std::env;
use std::path::PathBuf;

use crate::util::{AppResult, app_error, home_dir};

#[derive(Clone, Debug, PartialEq, Eq)]
pub enum CommandKind {
    Doctor,
    Run,
    RunOnce,
    Start,
    Status,
    Cleanup,
    Stop,
    Help,
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub enum RunnerKind {
    Codex,
    Claude,
}

impl RunnerKind {
    pub fn binary_name(&self) -> &'static str {
        match self {
            RunnerKind::Codex => "codex",
            RunnerKind::Claude => "claude",
        }
    }

    pub fn as_str(&self) -> &'static str {
        self.binary_name()
    }
}

#[derive(Clone, Debug)]
pub struct Config {
    pub command: CommandKind,
    pub home: PathBuf,
    pub host: String,
    pub profile: String,
    pub runners: Vec<RunnerKind>,
    pub max_parallel: usize,
    pub poll_interval_secs: u64,
    pub task_limit: usize,
    pub workspace_ttl_secs: u64,
    pub codex_model: Option<String>,
    pub claude_model: Option<String>,
    pub disclosure_text: String,
    pub dry_run: bool,
}

impl Config {
    pub fn parse(args: Vec<String>) -> AppResult<Self> {
        let mut iter = args.into_iter();
        let _program = iter.next();
        let first = iter.next();

        let (command, remainder) = match first.as_deref() {
            None => (CommandKind::Run, Vec::new()),
            Some("doctor") => (CommandKind::Doctor, iter.collect()),
            Some("run") => (CommandKind::Run, iter.collect()),
            Some("run-once") => (CommandKind::RunOnce, iter.collect()),
            Some("start") => (CommandKind::Start, iter.collect()),
            Some("status") => (CommandKind::Status, iter.collect()),
            Some("cleanup") => (CommandKind::Cleanup, iter.collect()),
            Some("stop") => (CommandKind::Stop, iter.collect()),
            Some("help") | Some("--help") | Some("-h") => (CommandKind::Help, iter.collect()),
            Some(other) if other.starts_with('-') => {
                let mut all = vec![other.to_string()];
                all.extend(iter);
                (CommandKind::Run, all)
            }
            Some(other) => return Err(app_error(format!("unknown githuber command `{other}`"))),
        };

        let mut home = env::var_os("GITHUBER_HOME")
            .map(PathBuf::from)
            .unwrap_or(home_dir()?.join(".githuber"));
        let mut host = env::var("GITHUBER_HOST").unwrap_or_else(|_| "github.com".to_string());
        let mut profile = env::var("GITHUBER_PROFILE").unwrap_or_else(|_| "default".to_string());
        let mut runners = parse_runners(
            env::var("GITHUBER_RUNNERS")
                .unwrap_or_else(|_| "codex,claude".to_string())
                .as_str(),
        )?;
        let mut max_parallel = parse_usize_env("GITHUBER_MAX_PARALLEL").unwrap_or(20);
        let mut poll_interval_secs = parse_u64_env("GITHUBER_POLL_INTERVAL_SECS").unwrap_or(600);
        let mut task_limit = parse_usize_env("GITHUBER_TASK_LIMIT").unwrap_or(100);
        let mut workspace_ttl_secs =
            parse_u64_env("GITHUBER_WORKSPACE_TTL_SECS").unwrap_or(60 * 60 * 24 * 3);
        let mut codex_model = env::var("GITHUBER_CODEX_MODEL").ok();
        let mut claude_model = env::var("GITHUBER_CLAUDE_MODEL").ok();
        let mut disclosure_text = env::var("GITHUBER_DISCLOSURE").unwrap_or_else(|_| {
            "Agent note: this reply was prepared and posted by githuber running locally for the active account."
                .to_string()
        });
        let mut dry_run = parse_bool_env("GITHUBER_DRY_RUN").unwrap_or(false);

        let mut index = 0usize;
        while index < remainder.len() {
            let current = &remainder[index];
            let next_value = |position: &mut usize| -> AppResult<String> {
                *position += 1;
                remainder
                    .get(*position)
                    .cloned()
                    .ok_or_else(|| app_error(format!("missing value for `{current}`")))
            };

            match current.as_str() {
                "--home" => home = PathBuf::from(next_value(&mut index)?),
                "--host" => host = next_value(&mut index)?,
                "--profile" => profile = next_value(&mut index)?,
                "--runner" | "--runners" => {
                    runners = parse_runners(&next_value(&mut index)?)?;
                }
                "--max-parallel" => max_parallel = parse_usize(&next_value(&mut index)?)?,
                "--poll-interval-secs" => poll_interval_secs = parse_u64(&next_value(&mut index)?)?,
                "--task-limit" => task_limit = parse_usize(&next_value(&mut index)?)?,
                "--workspace-ttl-secs" => workspace_ttl_secs = parse_u64(&next_value(&mut index)?)?,
                "--codex-model" => codex_model = Some(next_value(&mut index)?),
                "--claude-model" => claude_model = Some(next_value(&mut index)?),
                "--disclosure" => disclosure_text = next_value(&mut index)?,
                "--dry-run" => dry_run = true,
                "--no-dry-run" => dry_run = false,
                "--help" | "-h" => return Ok(Self::help()),
                unknown => return Err(app_error(format!("unknown githuber flag `{unknown}`"))),
            }
            index += 1;
        }

        if runners.is_empty() {
            return Err(app_error("at least one runner must be configured"));
        }
        if max_parallel == 0 {
            return Err(app_error("--max-parallel must be greater than zero"));
        }
        if task_limit == 0 {
            return Err(app_error("--task-limit must be greater than zero"));
        }
        if poll_interval_secs == 0 {
            return Err(app_error("--poll-interval-secs must be greater than zero"));
        }
        if workspace_ttl_secs == 0 {
            return Err(app_error("--workspace-ttl-secs must be greater than zero"));
        }

        Ok(Self {
            command,
            home,
            host,
            profile,
            runners,
            max_parallel,
            poll_interval_secs,
            task_limit,
            workspace_ttl_secs,
            codex_model,
            claude_model,
            disclosure_text,
            dry_run,
        })
    }

    pub fn help() -> Self {
        Self {
            command: CommandKind::Help,
            home: PathBuf::new(),
            host: "github.com".to_string(),
            profile: "default".to_string(),
            runners: vec![RunnerKind::Codex, RunnerKind::Claude],
            max_parallel: 20,
            poll_interval_secs: 600,
            task_limit: 100,
            workspace_ttl_secs: 60 * 60 * 24 * 3,
            codex_model: None,
            claude_model: None,
            disclosure_text:
                "Agent note: this reply was prepared and posted by githuber running locally for the active account."
                    .to_string(),
            dry_run: false,
        }
    }

    pub fn usage() -> &'static str {
        "githuber - local GitHub inbox automation service

USAGE
  githuber <command> [flags]

COMMANDS
  doctor     Validate local tools, gh auth, and state directories
  run        Run the long-lived poller in the foreground
  run-once   Poll once, process the current queue, and exit
  start      Launch the service in the background with nohup
  status     Show the current service lock and last runtime heartbeat
  cleanup    Remove stale task workspaces
  stop       Stop the background service for the active gh identity
  help       Show this help

FLAGS
  --home <path>                  Override state directory (default: ~/.githuber)
  --host <host>                  GitHub host to use (default: github.com)
  --profile <name>               Lock partition for this automation profile
  --runner <list>                Comma-separated runner order, e.g. codex,claude
  --max-parallel <n>             Max concurrent tasks (default: 20)
  --poll-interval-secs <n>       Poll cadence in seconds (default: 600)
  --task-limit <n>               Search result limit per source (default: 100)
  --workspace-ttl-secs <n>       Workspace retention after completion
  --codex-model <name>           Optional codex model override
  --claude-model <name>          Optional Claude model override
  --disclosure <text>            Disclosure appended to public replies
  --dry-run                      Poll and schedule tasks without launching agents

ENV
  GITHUBER_HOME
  GITHUBER_HOST
  GITHUBER_PROFILE
  GITHUBER_RUNNERS
  GITHUBER_MAX_PARALLEL
  GITHUBER_POLL_INTERVAL_SECS
  GITHUBER_TASK_LIMIT
  GITHUBER_WORKSPACE_TTL_SECS
  GITHUBER_CODEX_MODEL
  GITHUBER_CLAUDE_MODEL
  GITHUBER_DISCLOSURE
  GITHUBER_DRY_RUN"
    }
}

fn parse_runners(value: &str) -> AppResult<Vec<RunnerKind>> {
    let mut parsed = Vec::new();
    for raw in value.split(',') {
        let trimmed = raw.trim();
        if trimmed.is_empty() {
            continue;
        }
        let runner = match trimmed {
            "codex" => RunnerKind::Codex,
            "claude" => RunnerKind::Claude,
            other => return Err(app_error(format!("unsupported runner `{other}`"))),
        };
        if !parsed.contains(&runner) {
            parsed.push(runner);
        }
    }
    Ok(parsed)
}

fn parse_u64_env(name: &str) -> Option<u64> {
    env::var(name)
        .ok()
        .and_then(|value| value.parse::<u64>().ok())
}

fn parse_usize_env(name: &str) -> Option<usize> {
    env::var(name)
        .ok()
        .and_then(|value| value.parse::<usize>().ok())
}

fn parse_bool_env(name: &str) -> Option<bool> {
    env::var(name).ok().and_then(|value| match value.as_str() {
        "1" | "true" | "TRUE" | "yes" | "YES" => Some(true),
        "0" | "false" | "FALSE" | "no" | "NO" => Some(false),
        _ => None,
    })
}

fn parse_u64(value: &str) -> AppResult<u64> {
    value
        .parse::<u64>()
        .map_err(|error| app_error(format!("invalid integer `{value}`: {error}")))
}

fn parse_usize(value: &str) -> AppResult<usize> {
    value
        .parse::<usize>()
        .map_err(|error| app_error(format!("invalid integer `{value}`: {error}")))
}

#[cfg(test)]
mod tests {
    use super::{CommandKind, Config, RunnerKind};

    #[test]
    fn parses_custom_runner_flags() {
        let config = Config::parse(vec![
            "githuber".to_string(),
            "run-once".to_string(),
            "--runner".to_string(),
            "claude,codex".to_string(),
            "--max-parallel".to_string(),
            "4".to_string(),
            "--dry-run".to_string(),
        ])
        .expect("config should parse");

        assert_eq!(config.command, CommandKind::RunOnce);
        assert_eq!(config.runners, vec![RunnerKind::Claude, RunnerKind::Codex]);
        assert_eq!(config.max_parallel, 4);
        assert!(config.dry_run);
    }
}
