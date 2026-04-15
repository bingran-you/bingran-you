use std::collections::{HashMap, HashSet, VecDeque};
use std::env;
use std::fs::OpenOptions;
use std::path::PathBuf;
use std::process::Command;
use std::sync::mpsc::{self, Receiver, Sender};
use std::thread;
use std::time::Duration;

use crate::broker::GhBroker;
use crate::config::{CommandKind, Config};
use crate::gh::{GhClient, should_ignore_latest_self_activity};
use crate::gh_executor::GhExecutor;
use crate::identity::{Identity, resolve_identity};
use crate::lock::{LockInfo, ServiceLock, find_lock, lock_is_live, remove_lock_dir, stop_process};
use crate::runner::{RunnerPool, RunnerRequest, RunnerSpec};
use crate::store::Store;
use crate::task::TaskCandidate;
use crate::util::{
    AppResult, app_error, current_epoch_secs, ensure_dir, read_text_if_exists, run_command, which,
    write_text,
};
use crate::workspace::WorkspaceManager;

#[derive(Debug)]
pub struct Service {
    config: Config,
    identity: Identity,
    store: Store,
    gh: GhClient,
    gh_broker: GhBroker,
    runners: RunnerPool,
    workspace_manager: WorkspaceManager,
    lock: Option<ServiceLock>,
    next_search_reconcile_epoch: u64,
    last_poll_warning: String,
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
    runner_name: String,
}

impl Service {
    pub fn bootstrap(config: Config) -> AppResult<Self> {
        let identity = resolve_identity(&config.host)?;
        let store = Store::new(config.home.clone())?;
        let runtime = store.read_runtime_status()?;
        let real_gh = which("gh").ok_or_else(|| app_error("gh is not available in PATH"))?;
        let executor = GhExecutor::new(real_gh, config.gh_write_cooldown_ms);
        let gh = GhClient::new(
            config.host.clone(),
            config.repo_filter.clone(),
            executor.clone(),
        );
        let gh_broker = GhBroker::new(store.broker_dir.clone(), executor)?;
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
            gh_broker,
            runners,
            workspace_manager,
            lock: None,
            next_search_reconcile_epoch: runtime
                .get("next_search_reconcile_epoch")
                .and_then(|value| value.parse::<u64>().ok())
                .unwrap_or_default(),
            last_poll_warning: runtime
                .get("last_poll_warning")
                .map(|value| crate::util::decode_multiline(value))
                .unwrap_or_default(),
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
        println!(
            "allowed repos: {}",
            if self.config.repo_filter.is_empty() {
                "all".to_string()
            } else {
                self.config.repo_filter.display_patterns()
            }
        );
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
        println!(
            "allowed repos: {}",
            if self.config.repo_filter.is_empty() {
                runtime
                    .get("allowed_repos")
                    .cloned()
                    .filter(|value| !value.is_empty())
                    .unwrap_or_else(|| "all".to_string())
            } else {
                self.config.repo_filter.display_patterns()
            }
        );
        if let Some(lock) = lock {
            if lock_is_live(&lock) {
                println!(
                    "lock: running pid={} heartbeat={} active_tasks={} note={}",
                    lock.pid, lock.heartbeat_epoch, lock.active_tasks, lock.note
                );
            } else {
                println!(
                    "lock: stale pid={} heartbeat={} active_tasks={} note={}",
                    lock.pid, lock.heartbeat_epoch, lock.active_tasks, lock.note
                );
            }
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
                "next_search_reconcile_epoch",
                "last_poll_warning",
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
        if cfg!(target_os = "macos") {
            let _ = self.stop_launchd_job();
        }
        let lock = find_lock(&self.store.locks_dir, &self.identity, &self.config.profile)?
            .ok_or_else(|| app_error("githuber is not running for the active identity"))?;
        if !lock_is_live(&lock) {
            remove_lock_dir(&self.store.locks_dir, &self.identity, &self.config.profile)?;
            println!("removed stale githuber lock for pid {}", lock.pid);
            return Ok(());
        }
        stop_process(&lock)?;
        println!("stopped githuber pid {}", lock.pid);
        Ok(())
    }

    fn prime_runtime_for_start(&self) -> AppResult<()> {
        let mut runtime = self.store.read_runtime_status()?;
        reset_search_reconcile_epoch(&mut runtime);
        let mut values = runtime.into_iter().collect::<Vec<_>>();
        values.sort_by(|left, right| left.0.cmp(&right.0));
        self.store.write_runtime_status(&values)
    }

    pub fn start_background(&mut self) -> AppResult<()> {
        ensure_dir(&self.store.logs_dir)?;
        self.prime_runtime_for_start()?;
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
        let repo_filter_value = if self.config.repo_filter.is_empty() {
            None
        } else {
            Some(self.config.repo_filter.cli_value())
        };

        if cfg!(target_os = "macos") && crate::util::which("launchctl").is_some() {
            return self.start_with_launchctl(
                &executable,
                &log_path,
                &runner_value,
                repo_filter_value.as_deref(),
            );
        }

        let stdout_file = OpenOptions::new()
            .create(true)
            .append(true)
            .open(&log_path)?;
        let stderr_file = stdout_file.try_clone()?;

        let mut command = Command::new("nohup");
        command
            .arg(&executable)
            .arg("run")
            .arg("--home")
            .arg(&self.config.home)
            .arg("--host")
            .arg(&self.config.host)
            .arg("--profile")
            .arg(&self.config.profile)
            .arg("--runner")
            .arg(&runner_value)
            .arg("--max-parallel")
            .arg(self.config.max_parallel.to_string())
            .arg("--poll-interval-secs")
            .arg(self.config.poll_interval_secs.to_string())
            .arg("--task-limit")
            .arg(self.config.task_limit.to_string())
            .arg("--search-reconcile-interval-secs")
            .arg(self.config.search_reconcile_interval_secs.to_string())
            .arg("--gh-write-cooldown-ms")
            .arg(self.config.gh_write_cooldown_ms.to_string())
            .arg("--workspace-ttl-secs")
            .arg(self.config.workspace_ttl_secs.to_string())
            .arg("--disclosure")
            .arg(&self.config.disclosure_text)
            .stdin(std::process::Stdio::null())
            .stdout(std::process::Stdio::from(stdout_file))
            .stderr(std::process::Stdio::from(stderr_file));
        if self.config.dry_run {
            command.arg("--dry-run");
        }
        if let Some(repo_filter_value) = &repo_filter_value {
            command.arg("--allow-repo").arg(repo_filter_value);
        }
        if let Some(model) = &self.config.codex_model {
            command.arg("--codex-model").arg(model);
        }
        if let Some(model) = &self.config.claude_model {
            command.arg("--claude-model").arg(model);
        }
        let mut child = command
            .spawn()
            .map_err(|error| app_error(format!("failed to spawn background githuber: {error}")))?;
        thread::sleep(Duration::from_millis(750));
        if let Some(status) = child.try_wait()? {
            let log = read_text_if_exists(&log_path)?.unwrap_or_default();
            return Err(app_error(format!(
                "background githuber exited immediately with status {:?}\nlog:\n{}",
                status.code(),
                log
            )));
        }
        println!("githuber started in background");
        println!("pid: {}", child.id());
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
            self.gh_broker.start()?;
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
                self.enqueue_recoverable_tasks(&mut pending, &mut queued_threads, &active)?;
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

    fn poll_candidates(&mut self) -> AppResult<Vec<TaskCandidate>> {
        let now = current_epoch_secs();
        let include_search = now >= self.next_search_reconcile_epoch;
        let poll = self.gh.collect_candidates(
            self.config.task_limit,
            include_search,
            now,
            self.config.notification_lookback_secs,
        );

        if include_search {
            let delay = if poll.search_rate_limited {
                60 * 15
            } else {
                self.config.search_reconcile_interval_secs
            };
            self.next_search_reconcile_epoch = now.saturating_add(delay);
        }

        if poll.warnings.is_empty() {
            self.last_poll_warning.clear();
        } else {
            self.last_poll_warning = poll.warnings.join(" | ");
            eprintln!("githuber poll warnings: {}", self.last_poll_warning);
        }

        Ok(poll.tasks)
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

    fn enqueue_recoverable_tasks(
        &self,
        pending: &mut VecDeque<TaskCandidate>,
        queued_threads: &mut HashSet<String>,
        active: &HashMap<String, ActiveTask>,
    ) -> AppResult<()> {
        let now = current_epoch_secs();
        let mut recovered = Vec::new();

        for (task_id, mut metadata) in self.store.list_task_metadata()? {
            let status = metadata
                .get("status")
                .map(String::as_str)
                .unwrap_or_default();
            if status != "running" {
                continue;
            }
            if metadata
                .get("finished_at")
                .map(|value| !value.trim().is_empty())
                .unwrap_or(false)
            {
                continue;
            }

            let Some(candidate) = TaskCandidate::from_task_metadata(&metadata, &self.config.host)
            else {
                continue;
            };

            if active
                .values()
                .any(|task| task.thread_key == candidate.thread_key)
            {
                continue;
            }
            if queued_threads.contains(&candidate.thread_key) {
                continue;
            }
            if !self.config.repo_filter.matches_repo(&candidate.repo) {
                continue;
            }

            metadata.insert("status".to_string(), "orphaned".to_string());
            metadata.insert("finished_at".to_string(), now.to_string());
            metadata.insert(
                "summary".to_string(),
                crate::util::encode_multiline(
                    "githuber recovered this unfinished running task and re-queued it",
                ),
            );
            self.store
                .write_task_metadata(&task_id, &metadata.clone().into_iter().collect::<Vec<_>>())?;

            recovered.push(candidate);
        }

        recovered.sort_by(|left, right| {
            right
                .priority
                .cmp(&left.priority)
                .then_with(|| right.updated_at.cmp(&left.updated_at))
                .then_with(|| left.thread_key.cmp(&right.thread_key))
        });

        for candidate in recovered.into_iter().rev() {
            queued_threads.insert(candidate.thread_key.clone());
            pending.push_front(candidate);
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
        let latest_activity = self.gh.latest_visible_activity(candidate).unwrap_or(None);
        if should_ignore_latest_self_activity(
            &self.identity.login,
            latest_activity.as_ref(),
            &candidate.updated_at,
        ) {
            record.last_handled_updated_at = candidate.updated_at.clone();
            record.last_result = "skipped".to_string();
            record.next_retry_epoch = 0;
            self.store.save_thread_record(&record)?;
            return Ok(false);
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
            let snapshot_dir = match self.gh.write_task_snapshot(&candidate, &task_dir) {
                Ok(snapshot_dir) => snapshot_dir,
                Err(error) => {
                    self.record_setup_failure(&task_id, &task_dir, &candidate, &error.to_string())?;
                    continue;
                }
            };
            let candidate = match self.route_workspace_candidate(&candidate, &snapshot_dir) {
                Ok(candidate) => candidate,
                Err(error) => {
                    self.record_setup_failure(&task_id, &task_dir, &candidate, &error.to_string())?;
                    continue;
                }
            };
            let workspace = match self.workspace_manager.prepare(&candidate) {
                Ok(workspace) => workspace,
                Err(error) => {
                    self.record_setup_failure(&task_id, &task_dir, &candidate, &error.to_string())?;
                    continue;
                }
            };
            let runner_order = self.runners.execution_order();
            let selected_runner = runner_order
                .first()
                .expect("runner execution order should not be empty")
                .kind
                .as_str()
                .to_string();

            self.store.write_task_metadata(
                &task_id,
                &[
                    ("task_id".to_string(), task_id.clone()),
                    ("status".to_string(), "running".to_string()),
                    ("repo".to_string(), candidate.repo.clone()),
                    ("workspace_repo".to_string(), candidate.workspace_repo().to_string()),
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
                    ("runner".to_string(), selected_runner.clone()),
                    (
                        "snapshot_dir".to_string(),
                        snapshot_dir.display().to_string(),
                    ),
                    (
                        "gh_shim_dir".to_string(),
                        self.gh_broker.shim_dir().display().to_string(),
                    ),
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
            let snapshot_dir_for_thread = snapshot_dir.clone();
            let gh_shim_dir = self.gh_broker.shim_dir().to_path_buf();
            let gh_broker_dir = self.gh_broker.broker_dir().to_path_buf();

            thread::spawn(move || {
                let completion = if dry_run {
                    Ok(TaskExecutionResult {
                        candidate: candidate_for_thread,
                        result_status: "simulated".to_string(),
                        summary: "dry-run scheduled task".to_string(),
                        runner_output_path: task_dir_for_thread.join("runner-output.txt"),
                        runner_name: selected_runner,
                    })
                } else {
                    execute_task(
                        runner_order,
                        RunnerRequest {
                            task: candidate_for_thread.clone(),
                            task_id: task_id_for_thread.clone(),
                            task_dir: task_dir_for_thread.clone(),
                            workspace_dir: workspace_for_thread.workspace_dir.clone(),
                            snapshot_dir: snapshot_dir_for_thread.clone(),
                            gh_shim_dir,
                            gh_broker_dir,
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

    fn record_setup_failure(
        &self,
        task_id: &str,
        task_dir: &std::path::Path,
        candidate: &TaskCandidate,
        error: &str,
    ) -> AppResult<()> {
        let now = current_epoch_secs();
        self.store.write_task_metadata(
            task_id,
            &[
                ("task_id".to_string(), task_id.to_string()),
                ("status".to_string(), "failed".to_string()),
                ("repo".to_string(), candidate.repo.clone()),
                ("workspace_repo".to_string(), candidate.workspace_repo().to_string()),
                ("thread_key".to_string(), candidate.thread_key.clone()),
                (
                    "title".to_string(),
                    crate::util::encode_multiline(&candidate.title),
                ),
                ("kind".to_string(), candidate.kind.as_str().to_string()),
                ("reason".to_string(), candidate.reason.clone()),
                ("started_at".to_string(), now.to_string()),
                ("finished_at".to_string(), now.to_string()),
                ("updated_at".to_string(), candidate.updated_at.clone()),
                ("source".to_string(), candidate.source.clone()),
                ("summary".to_string(), crate::util::encode_multiline(error)),
                (
                    "runner_output_path".to_string(),
                    task_dir.join("runner-output.txt").display().to_string(),
                ),
            ],
        )?;

        let mut record = self.store.load_thread_record(&candidate.thread_key)?;
        record.thread_key = candidate.thread_key.clone();
        record.repo = candidate.repo.clone();
        record.last_seen_updated_at = candidate.updated_at.clone();
        record.failure_count = record.failure_count.saturating_add(1);
        record.next_retry_epoch =
            current_epoch_secs() + self.failure_retry_delay(record.failure_count);
        record.last_result = "failed".to_string();
        record.last_task_id = task_id.to_string();
        self.store.save_thread_record(&record)
    }

    fn route_workspace_candidate(
        &self,
        candidate: &TaskCandidate,
        snapshot_dir: &std::path::Path,
    ) -> AppResult<TaskCandidate> {
        let mut candidate = candidate.clone();
        let operator_repo = operator_repo_for(&self.identity.login);
        if candidate.workspace_repo() == operator_repo {
            candidate.workspace_repo = operator_repo;
            return Ok(candidate);
        }

        let routing_text = read_routing_snapshot_text(snapshot_dir)?;
        if should_route_to_operator_repo(&routing_text, &self.identity.login) {
            candidate.workspace_repo = operator_repo;
        }

        Ok(candidate)
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
                metadata.insert("runner".to_string(), result.runner_name.clone());
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
                if matches!(result.result_status.as_str(), "handled" | "skipped") {
                    record.last_handled_updated_at = result.candidate.updated_at.clone();
                    record.failure_count = 0;
                    record.next_retry_epoch = 0;
                } else if result.result_status == "failed" {
                    record.failure_count = record.failure_count.saturating_add(1);
                    record.next_retry_epoch =
                        current_epoch_secs() + self.failure_retry_delay(record.failure_count);
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
                record.next_retry_epoch =
                    current_epoch_secs() + self.failure_retry_delay(record.failure_count);
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
            (
                "allowed_repos".to_string(),
                if self.config.repo_filter.is_empty() {
                    "all".to_string()
                } else {
                    self.config.repo_filter.display_patterns()
                },
            ),
            ("active_tasks".to_string(), active.len().to_string()),
            ("queued_tasks".to_string(), queued_tasks.to_string()),
            ("last_note".to_string(), crate::util::encode_multiline(note)),
            ("active_titles".to_string(), active_titles),
            (
                "next_search_reconcile_epoch".to_string(),
                self.next_search_reconcile_epoch.to_string(),
            ),
            (
                "last_poll_warning".to_string(),
                crate::util::encode_multiline(&self.last_poll_warning),
            ),
        ])
    }

    fn start_with_launchctl(
        &self,
        executable: &std::path::Path,
        log_path: &std::path::Path,
        runner_value: &str,
        repo_filter_value: Option<&str>,
    ) -> AppResult<()> {
        let plist_path = self.launchd_plist_path();
        if let Some(parent) = plist_path.parent() {
            ensure_dir(parent)?;
        }
        write_text(
            &plist_path,
            &self.launchd_plist_contents(executable, log_path, runner_value, repo_filter_value),
        )?;

        let domain = self.launchd_domain()?;
        let _ = self.stop_launchd_job();

        let mut bootstrap = Command::new("launchctl");
        bootstrap.arg("bootstrap").arg(&domain).arg(&plist_path);
        crate::util::run_command_checked(&mut bootstrap, "bootstrap launchd job")?;

        let mut kickstart = Command::new("launchctl");
        kickstart
            .arg("kickstart")
            .arg("-k")
            .arg(format!("{}/{}", domain, self.launchd_label()));
        let output = run_command(&mut kickstart)?;
        if output.status_code != 0 && output.status_code != 113 {
            return Err(app_error(format!(
                "kickstart launchd job failed with exit code {}: launchctl kickstart -k {}/{}\nstdout:\n{}\nstderr:\n{}",
                output.status_code,
                domain,
                self.launchd_label(),
                output.stdout,
                output.stderr
            )));
        }

        thread::sleep(Duration::from_millis(750));
        if let Some(lock) = find_lock(&self.store.locks_dir, &self.identity, &self.config.profile)?
            .filter(lock_is_live)
        {
            println!("githuber started in background via launchd");
            println!("pid: {}", lock.pid);
            println!("log: {}", log_path.display());
            println!("plist: {}", plist_path.display());
            return Ok(());
        }

        let mut print = Command::new("launchctl");
        print
            .arg("print")
            .arg(format!("{}/{}", domain, self.launchd_label()));
        let output = run_command(&mut print)?;
        let log = read_text_if_exists(log_path)?.unwrap_or_default();
        Err(app_error(format!(
            "launchd job did not produce a live githuber lock.\nlaunchctl:\n{}\n{}\nlog:\n{}",
            output.stdout, output.stderr, log
        )))
    }

    fn stop_launchd_job(&self) -> AppResult<()> {
        let plist_path = self.launchd_plist_path();
        if !plist_path.exists() {
            return Ok(());
        }
        let mut command = Command::new("launchctl");
        command
            .arg("bootout")
            .arg(self.launchd_domain()?)
            .arg(&plist_path);
        let _ = run_command(&mut command)?;
        Ok(())
    }

    fn launchd_label(&self) -> String {
        format!(
            "com.githuber.{}.{}",
            crate::util::sanitize_filename(&self.identity.login),
            crate::util::sanitize_filename(&self.config.profile)
        )
    }

    fn launchd_plist_path(&self) -> PathBuf {
        self.config
            .home
            .join("launchd")
            .join(format!("{}.plist", self.launchd_label()))
    }

    fn launchd_domain(&self) -> AppResult<String> {
        let mut command = Command::new("id");
        command.arg("-u");
        let stdout = crate::util::run_command_checked(&mut command, "resolve user id")?;
        let uid = stdout.lines().next().unwrap_or("").trim().to_string();
        if uid.is_empty() {
            return Err(app_error("could not resolve numeric user id for launchd"));
        }
        Ok(format!("gui/{uid}"))
    }

    fn launchd_plist_contents(
        &self,
        executable: &std::path::Path,
        log_path: &std::path::Path,
        runner_value: &str,
        repo_filter_value: Option<&str>,
    ) -> String {
        let mut arguments = vec![
            executable.display().to_string(),
            "run".to_string(),
            "--home".to_string(),
            self.config.home.display().to_string(),
            "--host".to_string(),
            self.config.host.clone(),
            "--profile".to_string(),
            self.config.profile.clone(),
            "--runner".to_string(),
            runner_value.to_string(),
            "--max-parallel".to_string(),
            self.config.max_parallel.to_string(),
            "--poll-interval-secs".to_string(),
            self.config.poll_interval_secs.to_string(),
            "--task-limit".to_string(),
            self.config.task_limit.to_string(),
            "--notification-lookback-secs".to_string(),
            self.config.notification_lookback_secs.to_string(),
            "--search-reconcile-interval-secs".to_string(),
            self.config.search_reconcile_interval_secs.to_string(),
            "--gh-write-cooldown-ms".to_string(),
            self.config.gh_write_cooldown_ms.to_string(),
            "--workspace-ttl-secs".to_string(),
            self.config.workspace_ttl_secs.to_string(),
            "--disclosure".to_string(),
            self.config.disclosure_text.clone(),
        ];
        if let Some(repo_filter_value) = repo_filter_value {
            arguments.push("--allow-repo".to_string());
            arguments.push(repo_filter_value.to_string());
        }
        if self.config.dry_run {
            arguments.push("--dry-run".to_string());
        }
        if let Some(model) = &self.config.codex_model {
            arguments.push("--codex-model".to_string());
            arguments.push(model.clone());
        }
        if let Some(model) = &self.config.claude_model {
            arguments.push("--claude-model".to_string());
            arguments.push(model.clone());
        }

        let arguments_xml = arguments
            .into_iter()
            .map(|argument| format!("    <string>{}</string>", escape_xml(&argument)))
            .collect::<Vec<_>>()
            .join("\n");
        let mut environment_entries = vec![
            ("PATH".to_string(), env::var("PATH").unwrap_or_default()),
            ("HOME".to_string(), env::var("HOME").unwrap_or_default()),
        ];
        for variable in passthrough_launchd_env_vars() {
            if let Some(value) = resolve_launchd_env_var(variable) {
                environment_entries.push((variable.to_string(), value));
            }
        }
        let environment_xml = environment_entries
            .into_iter()
            .map(|(key, value)| {
                format!(
                    "    <key>{}</key>\n    <string>{}</string>",
                    escape_xml(&key),
                    escape_xml(&value)
                )
            })
            .collect::<Vec<_>>()
            .join("\n");

        format!(
            r#"<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>{label}</string>
  <key>ProgramArguments</key>
  <array>
{arguments_xml}
  </array>
  <key>KeepAlive</key>
  <true/>
  <key>RunAtLoad</key>
  <true/>
  <key>EnvironmentVariables</key>
  <dict>
{environment_xml}
  </dict>
  <key>StandardOutPath</key>
  <string>{log_path}</string>
  <key>StandardErrorPath</key>
  <string>{log_path}</string>
</dict>
</plist>
"#,
            label = escape_xml(&self.launchd_label()),
            arguments_xml = arguments_xml,
            environment_xml = environment_xml,
            log_path = escape_xml(&log_path.display().to_string()),
        )
    }

    fn failure_retry_delay(&self, failure_count: u32) -> u64 {
        retry_delay(failure_count).min(self.config.poll_interval_secs)
    }
}

fn passthrough_launchd_env_vars() -> &'static [&'static str] {
    &[
        "AZURE_OPENAI_ENDPOINT",
        "AZURE_OPENAI_API_KEY",
        "AZURE_OPENAI_ENDPOINT_BACKUP",
        "AZURE_OPENAI_API_KEY_BACKUP",
        "OPENAI_API_KEY",
        "ANTHROPIC_API_KEY",
        "GH_TOKEN",
        "GITHUB_TOKEN",
        "CODEX_HOME",
        "CLAUDE_CODE_USE_BEDROCK",
        "CLAUDE_CODE_USE_VERTEX",
    ]
}

fn resolve_launchd_env_var(variable: &str) -> Option<String> {
    match env::var(variable) {
        Ok(value) if !value.trim().is_empty() => Some(value),
        _ => resolve_env_var_from_login_shell(variable),
    }
}

fn resolve_env_var_from_login_shell(variable: &str) -> Option<String> {
    let mut command = Command::new("/bin/zsh");
    command
        .arg("-lc")
        .arg(format!("printf '%s' \"${{{variable}:-}}\""));
    let output = run_command(&mut command).ok()?;
    if output.status_code != 0 {
        return None;
    }
    let value = output.stdout;
    if value.trim().is_empty() {
        None
    } else {
        Some(value)
    }
}

fn execute_task(
    runners: Vec<RunnerSpec>,
    request: RunnerRequest,
) -> AppResult<TaskExecutionResult> {
    let mut failures = Vec::new();
    for runner in runners {
        match runner.execute(&request) {
            Ok(outcome) => {
                return Ok(TaskExecutionResult {
                    candidate: request.task,
                    result_status: outcome.status,
                    summary: outcome.summary,
                    runner_output_path: outcome.output_path,
                    runner_name: runner.kind.as_str().to_string(),
                });
            }
            Err(error) => {
                failures.push(format!("{}: {error}", runner.kind.as_str()));
            }
        }
    }

    Err(app_error(format!(
        "all configured runners failed: {}",
        failures.join(" | ")
    )))
}

fn retry_delay(failure_count: u32) -> u64 {
    let shift = failure_count.min(6);
    60 * (1u64 << shift)
}

fn reset_search_reconcile_epoch(runtime: &mut HashMap<String, String>) {
    runtime.insert("next_search_reconcile_epoch".to_string(), "0".to_string());
}

fn operator_repo_for(login: &str) -> String {
    format!("{login}/{login}")
}

fn read_routing_snapshot_text(snapshot_dir: &std::path::Path) -> AppResult<String> {
    let mut combined = String::new();
    for filename in [
        "issue-view.json",
        "pr-view.json",
        "subject.json",
        "latest-comment.json",
        "issue-comments.json",
        "pr-reviews.json",
    ] {
        if let Some(contents) = read_text_if_exists(&snapshot_dir.join(filename))? {
            combined.push_str(&contents);
            combined.push('\n');
        }
    }
    Ok(combined.to_ascii_lowercase())
}

fn should_route_to_operator_repo(contents: &str, login: &str) -> bool {
    let login = login.to_ascii_lowercase();
    let asks_for_change = [
        "configure",
        "update",
        "change",
        "fix",
        "modify",
        "adjust",
        "tune",
        "restart",
    ]
    .iter()
    .any(|pattern| contents.contains(pattern));
    let mentions_githuber = contents.contains("githuber");
    let directs_to_operator = [
        format!("@{login}"),
        format!("{login}'s agent"),
        format!("{login}/{login}"),
        "your agent".to_string(),
        "scripts/githuber".to_string(),
        "githuber service".to_string(),
    ]
    .iter()
    .any(|pattern| contents.contains(pattern));

    mentions_githuber && asks_for_change && directs_to_operator
}

fn lock_status(lock: Option<&LockInfo>) -> &'static str {
    match lock {
        Some(lock) if lock_is_live(lock) => "present",
        Some(_) => "stale",
        None => "absent",
    }
}

fn escape_xml(value: &str) -> String {
    value
        .replace('&', "&amp;")
        .replace('<', "&lt;")
        .replace('>', "&gt;")
        .replace('"', "&quot;")
        .replace('\'', "&apos;")
}

#[cfg(test)]
mod tests {
    use std::collections::HashMap;

    use super::{reset_search_reconcile_epoch, should_route_to_operator_repo};

    #[test]
    fn reset_search_reconcile_epoch_forces_immediate_search_without_dropping_state() {
        let mut runtime = HashMap::from([
            (
                "next_search_reconcile_epoch".to_string(),
                "1776210590".to_string(),
            ),
            ("last_poll_epoch".to_string(), "1776189643".to_string()),
        ]);

        reset_search_reconcile_epoch(&mut runtime);

        assert_eq!(
            runtime
                .get("next_search_reconcile_epoch")
                .map(String::as_str),
            Some("0")
        );
        assert_eq!(
            runtime.get("last_poll_epoch").map(String::as_str),
            Some("1776189643")
        );
    }

    #[test]
    fn routes_operator_requests_to_home_repo_when_githuber_is_target() {
        let text = r#"
        @bingran-you could you configure the githuber agent to merge after approving first-tree:sync PRs?
        This is a request to update githuber logic.
        "#;

        assert!(should_route_to_operator_repo(text, "bingran-you"));
    }

    #[test]
    fn does_not_route_normal_mentions_without_self_maintenance_request() {
        let text = r#"
        @bingran-you please review this pull request.
        The runtime looks fine and githuber already commented.
        "#;

        assert!(!should_route_to_operator_repo(text, "bingran-you"));
    }
}
