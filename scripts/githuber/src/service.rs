use std::collections::{HashMap, HashSet, VecDeque};
use std::path::PathBuf;
use std::process::Command;
use std::sync::mpsc::{self, Receiver, Sender};
use std::thread;
use std::time::Duration;

use crate::config::{CommandKind, Config};
use crate::gh::{GhClient, should_ignore_self_authored};
use crate::identity::{Identity, resolve_identity};
use crate::lock::{LockInfo, ServiceLock, find_lock, stop_process};
use crate::runner::{RunnerOutcome, RunnerPool, RunnerRequest, RunnerSpec};
use crate::store::Store;
use crate::task::TaskCandidate;
use crate::util::{
    AppResult, app_error, current_epoch_secs, ensure_dir, run_command_checked, shell_quote,
};
use crate::workspace::WorkspaceManager;

#[derive(Debug)]
pub struct Service {
    config: Config,
    identity: Identity,
    store: Store,
    gh: GhClient,
    runners: RunnerPool,
    workspace_manager: WorkspaceManager,
    lock: Option<ServiceLock>,
}

#[derive(Debug)]
struct ActiveTask {
    task_id: String,
    thread_key: String,
    title: String,
}

#[derive(Debug)]
struct TaskCompletion {
    task_id: String,
    thread_key: String,
    outcome: Result<TaskExecutionResult, String>,
}

#[derive(Debug)]
struct TaskExecutionResult {
    candidate: TaskCandidate,
    result_status: String,
    summary: String,
    runner_output_path: PathBuf,
}

impl Service {
    pub fn bootstrap(config: Config) -> AppResult<Self> {
        let identity = resolve_identity(&config.host)?;
        let store = Store::new(config.home.clone())?;
        let gh = GhClient::new(config.host.clone());
        let runners = RunnerPool::detect(&config)?;
        let workspace_manager = WorkspaceManager::new(
            store.repos_dir.clone(),
            store.workspaces_dir.clone(),
            &identity,
        );
        Ok(Self {
            config,
            identity,
            store,
            gh,
            runners,
            workspace_manager,
            lock: None,
        })
    }

    pub fn command(&self) -> CommandKind {
        self.config.command.clone()
    }

    pub fn doctor(&mut self) -> AppResult<()> {
        ensure_dir(&self.config.home)?;
        let lock = find_lock(&self.store.locks_dir, &self.identity, &self.config.profile)?;
        println!("githuber doctor");
        println!("home: {}", self.config.home.display());
        println!("host: {}", self.identity.host);
        println!("login: {}", self.identity.login);
        println!("git protocol: {}", self.identity.git_protocol);
        println!("scopes: {}", self.identity.scopes_string());
        println!("lock: {}", lock_status(lock.as_ref()));
        println!("runners: {}", self.runners.available_names().join(", "));
        println!(
            "required auth scope: {}",
            if self.identity.has_required_scope() {
                "ok"
            } else {
                "missing repo/notifications"
            }
        );
        println!(
            "runtime status file: {}",
            if self.store.runtime_path.exists() {
                "present"
            } else {
                "missing"
            }
        );
        Ok(())
    }

    pub fn status(&mut self) -> AppResult<()> {
        let lock = find_lock(&self.store.locks_dir, &self.identity, &self.config.profile)?;
        let runtime = self.store.read_runtime_status()?;
        println!("githuber status");
        println!("identity: {}@{}", self.identity.login, self.identity.host);
        if let Some(lock) = lock {
            println!(
                "lock: running pid={} heartbeat={} active_tasks={} note={}",
                lock.pid, lock.heartbeat_epoch, lock.active_tasks, lock.note
            );
        } else {
            println!("lock: not running");
        }
        if runtime.is_empty() {
            println!("runtime: no status recorded yet");
        } else {
            for key in [
                "last_poll_epoch",
                "active_tasks",
                "queued_tasks",
                "last_note",
                "last_identity",
            ] {
                if let Some(value) = runtime.get(key) {
                    println!("{key}: {value}");
                }
            }
        }
        Ok(())
    }

    pub fn cleanup(&mut self) -> AppResult<()> {
        let active_workspaces = Vec::new();
        let removed = self
            .store
            .cleanup_old_workspaces(self.config.workspace_ttl_secs, &active_workspaces)?;
        println!("removed {} stale workspaces", removed.len());
        for path in removed {
            println!("- {}", path.display());
        }
        Ok(())
    }

    pub fn stop(&mut self) -> AppResult<()> {
        let lock = find_lock(&self.store.locks_dir, &self.identity, &self.config.profile)?
            .ok_or_else(|| app_error("githuber is not running for the active identity"))?;
        stop_process(&lock)?;
        println!("stopped githuber pid {}", lock.pid);
        Ok(())
    }

    pub fn start_background(&mut self) -> AppResult<()> {
        ensure_dir(&self.store.logs_dir)?;
        let log_path = self
            .store
            .logs_dir
            .join(format!("githuber-{}.log", current_epoch_secs()));
        let executable = std::env::current_exe()?;
        let runner_value = self
            .config
            .runners
            .iter()
            .map(|runner| runner.as_str())
            .collect::<Vec<_>>()
            .join(",");

        let mut command_line = vec![
            shell_quote(&executable.display().to_string()),
            "run".to_string(),
            "--home".to_string(),
            shell_quote(&self.config.home.display().to_string()),
            "--host".to_string(),
            shell_quote(&self.config.host),
            "--profile".to_string(),
            shell_quote(&self.config.profile),
            "--runner".to_string(),
            shell_quote(&runner_value),
            "--max-parallel".to_string(),
            self.config.max_parallel.to_string(),
            "--poll-interval-secs".to_string(),
            self.config.poll_interval_secs.to_string(),
            "--task-limit".to_string(),
            self.config.task_limit.to_string(),
            "--workspace-ttl-secs".to_string(),
            self.config.workspace_ttl_secs.to_string(),
        ];
        if self.config.dry_run {
            command_line.push("--dry-run".to_string());
        }
        if let Some(model) = &self.config.codex_model {
            command_line.push("--codex-model".to_string());
            command_line.push(shell_quote(model));
        }
        if let Some(model) = &self.config.claude_model {
            command_line.push("--claude-model".to_string());
            command_line.push(shell_quote(model));
        }
        command_line.push("--disclosure".to_string());
        command_line.push(shell_quote(&self.config.disclosure_text));

        let script = format!(
            "nohup {} >> {} 2>&1 & echo $!",
            command_line.join(" "),
            shell_quote(&log_path.display().to_string())
        );
        let mut command = Command::new("sh");
        command.arg("-lc").arg(script);
        let stdout = run_command_checked(&mut command, "start background githuber")?;
        let pid = stdout
            .lines()
            .find(|line| !line.trim().is_empty())
            .unwrap_or("");
        println!("githuber started in background");
        println!("pid: {}", pid.trim());
        println!("log: {}", log_path.display());
        Ok(())
    }

    pub fn run_once(&mut self) -> AppResult<()> {
        self.acquire_lock()?;
        self.run_loop(true)
    }

    pub fn run_forever(&mut self) -> AppResult<()> {
        self.acquire_lock()?;
        self.run_loop(false)
    }

    fn acquire_lock(&mut self) -> AppResult<()> {
        if self.lock.is_none() {
            self.lock = Some(ServiceLock::acquire(
                &self.store.locks_dir,
                &self.identity,
                &self.config.profile,
            )?);
        }
        Ok(())
    }

    fn run_loop(&mut self, once: bool) -> AppResult<()> {
        let (completion_sender, completion_receiver): (
            Sender<TaskCompletion>,
            Receiver<TaskCompletion>,
        ) = mpsc::channel();
        let mut pending = VecDeque::new();
        let mut queued_threads = HashSet::new();
        let mut active = HashMap::<String, ActiveTask>::new();
        let mut did_poll = false;

        loop {
            self.verify_identity()?;
            let note = format!("active={} queued={}", active.len(), pending.len());
            self.refresh_runtime(&active, pending.len(), &note)?;

            if !did_poll {
                let candidates = self.poll_candidates()?;
                self.enqueue_candidates(candidates, &mut pending, &mut queued_threads, &active)?;
                did_poll = true;
            }

            self.dispatch_pending(
                &mut pending,
                &mut queued_threads,
                &mut active,
                completion_sender.clone(),
            )?;

            let timeout = if once {
                if active.is_empty() && pending.is_empty() {
                    break;
                }
                Duration::from_secs(1)
            } else if active.is_empty() {
                Duration::from_secs(self.config.poll_interval_secs)
            } else {
                Duration::from_secs(2)
            };

            match completion_receiver.recv_timeout(timeout) {
                Ok(completion) => {
                    self.handle_completion(completion, &mut active)?;
                }
                Err(mpsc::RecvTimeoutError::Timeout) => {
                    if once {
                        continue;
                    }
                    did_poll = false;
                }
                Err(mpsc::RecvTimeoutError::Disconnected) => {
                    return Err(app_error("task completion channel disconnected"));
                }
            }
        }

        self.refresh_runtime(&active, pending.len(), "idle")?;
        Ok(())
    }

    fn verify_identity(&mut self) -> AppResult<()> {
        let latest = resolve_identity(&self.config.host)?;
        if latest.login != self.identity.login || latest.host != self.identity.host {
            return Err(app_error(format!(
                "active gh identity changed from {}@{} to {}@{}; refusing to continue",
                self.identity.login, self.identity.host, latest.login, latest.host
            )));
        }
        self.identity = latest;
        Ok(())
    }

    fn poll_candidates(&self) -> AppResult<Vec<TaskCandidate>> {
        self.gh.collect_candidates(self.config.task_limit)
    }

    fn enqueue_candidates(
        &self,
        candidates: Vec<TaskCandidate>,
        pending: &mut VecDeque<TaskCandidate>,
        queued_threads: &mut HashSet<String>,
        active: &HashMap<String, ActiveTask>,
    ) -> AppResult<()> {
        for candidate in candidates {
            if active
                .values()
                .any(|task| task.thread_key == candidate.thread_key)
            {
                continue;
            }
            if queued_threads.contains(&candidate.thread_key) {
                continue;
            }
            if !self.should_schedule(&candidate)? {
                continue;
            }
            queued_threads.insert(candidate.thread_key.clone());
            pending.push_back(candidate);
        }
        Ok(())
    }

    fn should_schedule(&self, candidate: &TaskCandidate) -> AppResult<bool> {
        let now = current_epoch_secs();
        let mut record = self.store.load_thread_record(&candidate.thread_key)?;
        record.thread_key = candidate.thread_key.clone();
        record.repo = candidate.repo.clone();
        record.last_seen_updated_at = candidate.updated_at.clone();
        self.store.save_thread_record(&record)?;

        if record.next_retry_epoch > now {
            return Ok(false);
        }
        if !record.last_handled_updated_at.is_empty()
            && candidate.updated_at <= record.last_handled_updated_at
        {
            return Ok(false);
        }
        if !candidate.latest_comment_api_url.is_empty() {
            let author = self
                .gh
                .latest_comment_author(&candidate.latest_comment_api_url)
                .unwrap_or(None);
            if should_ignore_self_authored(&self.identity.login, author.as_deref(), &candidate.kind)
            {
                return Ok(false);
            }
        }
        Ok(true)
    }

    fn dispatch_pending(
        &self,
        pending: &mut VecDeque<TaskCandidate>,
        queued_threads: &mut HashSet<String>,
        active: &mut HashMap<String, ActiveTask>,
        completion_sender: Sender<TaskCompletion>,
    ) -> AppResult<()> {
        while active.len() < self.config.max_parallel && !pending.is_empty() {
            let candidate = pending.pop_front().expect("pending not empty");
            queued_threads.remove(&candidate.thread_key);
            let task_id = format!("task-{}-{}", current_epoch_secs(), candidate.stable_id());
            let task_dir = self.store.task_dir(&task_id);
            ensure_dir(&task_dir)?;
            let workspace = self.workspace_manager.prepare(&candidate)?;
            let runner = self.runners.pick();

            self.store.write_task_metadata(
                &task_id,
                &[
                    ("task_id".to_string(), task_id.clone()),
                    ("status".to_string(), "running".to_string()),
                    ("repo".to_string(), candidate.repo.clone()),
                    ("thread_key".to_string(), candidate.thread_key.clone()),
                    (
                        "title".to_string(),
                        crate::util::encode_multiline(&candidate.title),
                    ),
                    ("kind".to_string(), candidate.kind.as_str().to_string()),
                    ("reason".to_string(), candidate.reason.clone()),
                    (
                        "workspace_path".to_string(),
                        workspace.workspace_dir.display().to_string(),
                    ),
                    (
                        "mirror_dir".to_string(),
                        workspace.mirror_dir.display().to_string(),
                    ),
                    ("repo_url".to_string(), workspace.repo_url.clone()),
                    ("started_at".to_string(), current_epoch_secs().to_string()),
                    ("updated_at".to_string(), candidate.updated_at.clone()),
                    ("source".to_string(), candidate.source.clone()),
                    ("runner".to_string(), runner.kind.as_str().to_string()),
                ],
            )?;

            let identity = self.identity.clone();
            let disclosure = self.config.disclosure_text.clone();
            let dry_run = self.config.dry_run;
            let sender = completion_sender.clone();
            let thread_key = candidate.thread_key.clone();
            let candidate_for_thread = candidate.clone();
            let task_id_for_thread = task_id.clone();
            let task_dir_for_thread = task_dir.clone();
            let workspace_for_thread = workspace.clone();

            thread::spawn(move || {
                let completion = if dry_run {
                    Ok(TaskExecutionResult {
                        candidate: candidate_for_thread,
                        result_status: "handled".to_string(),
                        summary: "dry-run scheduled task".to_string(),
                        runner_output_path: task_dir_for_thread.join("runner-output.txt"),
                    })
                } else {
                    execute_task(
                        runner,
                        RunnerRequest {
                            task: candidate_for_thread.clone(),
                            task_id: task_id_for_thread.clone(),
                            task_dir: task_dir_for_thread.clone(),
                            workspace_dir: workspace_for_thread.workspace_dir.clone(),
                            identity,
                            disclosure_text: disclosure,
                        },
                    )
                    .map_err(|error| error.to_string())
                };

                let _ = sender.send(TaskCompletion {
                    task_id: task_id_for_thread,
                    thread_key,
                    outcome: completion,
                });
            });

            active.insert(
                task_id.clone(),
                ActiveTask {
                    task_id,
                    thread_key: candidate.thread_key.clone(),
                    title: candidate.title.clone(),
                },
            );
        }
        Ok(())
    }

    fn handle_completion(
        &self,
        completion: TaskCompletion,
        active: &mut HashMap<String, ActiveTask>,
    ) -> AppResult<()> {
        active.remove(&completion.task_id);
        let mut metadata = self.store.read_task_metadata(&completion.task_id)?;
        metadata.insert("finished_at".to_string(), current_epoch_secs().to_string());

        match completion.outcome {
            Ok(result) => {
                metadata.insert("status".to_string(), result.result_status.clone());
                metadata.insert(
                    "summary".to_string(),
                    crate::util::encode_multiline(&result.summary),
                );
                metadata.insert(
                    "runner_output_path".to_string(),
                    result.runner_output_path.display().to_string(),
                );
                self.store.write_task_metadata(
                    &completion.task_id,
                    &metadata.clone().into_iter().collect::<Vec<_>>(),
                )?;

                let mut record = self
                    .store
                    .load_thread_record(&result.candidate.thread_key)?;
                record.thread_key = result.candidate.thread_key.clone();
                record.repo = result.candidate.repo.clone();
                record.last_seen_updated_at = result.candidate.updated_at.clone();
                if result.result_status != "failed" {
                    record.last_handled_updated_at = result.candidate.updated_at.clone();
                    record.failure_count = 0;
                    record.next_retry_epoch = 0;
                } else {
                    record.failure_count = record.failure_count.saturating_add(1);
                    record.next_retry_epoch =
                        current_epoch_secs() + retry_delay(record.failure_count);
                }
                record.last_task_id = completion.task_id.clone();
                record.last_result = result.result_status.clone();
                self.store.save_thread_record(&record)?;
            }
            Err(error) => {
                metadata.insert("status".to_string(), "failed".to_string());
                metadata.insert("summary".to_string(), crate::util::encode_multiline(&error));
                self.store.write_task_metadata(
                    &completion.task_id,
                    &metadata.clone().into_iter().collect::<Vec<_>>(),
                )?;
                let mut record = self.store.load_thread_record(&completion.thread_key)?;
                record.thread_key = completion.thread_key.clone();
                record.failure_count = record.failure_count.saturating_add(1);
                record.next_retry_epoch = current_epoch_secs() + retry_delay(record.failure_count);
                record.last_result = "failed".to_string();
                record.last_task_id = completion.task_id.clone();
                self.store.save_thread_record(&record)?;
            }
        }
        Ok(())
    }

    fn refresh_runtime(
        &self,
        active: &HashMap<String, ActiveTask>,
        queued_tasks: usize,
        note: &str,
    ) -> AppResult<()> {
        if let Some(lock) = &self.lock {
            lock.refresh(active.len(), note)?;
        }
        let active_titles = active
            .values()
            .map(|task| {
                format!(
                    "{}:{}",
                    task.task_id,
                    crate::util::encode_multiline(&task.title)
                )
            })
            .collect::<Vec<_>>()
            .join(";");
        self.store.write_runtime_status(&[
            (
                "last_poll_epoch".to_string(),
                current_epoch_secs().to_string(),
            ),
            (
                "last_identity".to_string(),
                format!("{}@{}", self.identity.login, self.identity.host),
            ),
            ("active_tasks".to_string(), active.len().to_string()),
            ("queued_tasks".to_string(), queued_tasks.to_string()),
            ("last_note".to_string(), crate::util::encode_multiline(note)),
            ("active_titles".to_string(), active_titles),
        ])
    }
}

fn execute_task(runner: RunnerSpec, request: RunnerRequest) -> AppResult<TaskExecutionResult> {
    let outcome: RunnerOutcome = runner.execute(&request)?;
    Ok(TaskExecutionResult {
        candidate: request.task,
        result_status: outcome.status,
        summary: outcome.summary,
        runner_output_path: outcome.output_path,
    })
}

fn retry_delay(failure_count: u32) -> u64 {
    let shift = failure_count.min(6);
    60 * (1u64 << shift)
}

fn lock_status(lock: Option<&LockInfo>) -> &'static str {
    if lock.is_some() { "present" } else { "absent" }
}
