use std::collections::HashMap;
use std::fs;
use std::path::{Path, PathBuf};

use crate::task::ThreadRecord;
use crate::util::{
    AppResult, ensure_dir, file_mtime_epoch, parse_kv_lines, read_text_if_exists,
    remove_dir_if_exists, write_lines,
};

#[derive(Clone, Debug)]
pub struct Store {
    pub threads_dir: PathBuf,
    pub tasks_dir: PathBuf,
    pub repos_dir: PathBuf,
    pub workspaces_dir: PathBuf,
    pub locks_dir: PathBuf,
    pub broker_dir: PathBuf,
    pub logs_dir: PathBuf,
    pub runtime_path: PathBuf,
}

impl Store {
    pub fn new(home: PathBuf) -> AppResult<Self> {
        let store = Self {
            threads_dir: home.join("threads"),
            tasks_dir: home.join("tasks"),
            repos_dir: home.join("repos"),
            workspaces_dir: home.join("workspaces"),
            locks_dir: home.join("locks"),
            broker_dir: home.join("broker"),
            logs_dir: home.join("logs"),
            runtime_path: home.join("runtime").join("status.env"),
        };
        ensure_dir(&store.threads_dir)?;
        ensure_dir(&store.tasks_dir)?;
        ensure_dir(&store.repos_dir)?;
        ensure_dir(&store.workspaces_dir)?;
        ensure_dir(&store.locks_dir)?;
        ensure_dir(&store.broker_dir)?;
        ensure_dir(&store.logs_dir)?;
        if let Some(parent) = store.runtime_path.parent() {
            ensure_dir(parent)?;
        }
        Ok(store)
    }

    pub fn thread_path(&self, thread_key: &str) -> PathBuf {
        self.threads_dir
            .join(format!("{}.env", crate::util::stable_file_id(thread_key)))
    }

    pub fn load_thread_record(&self, thread_key: &str) -> AppResult<ThreadRecord> {
        let path = self.thread_path(thread_key);
        let contents = match read_text_if_exists(&path)? {
            Some(contents) => contents,
            None => {
                return Ok(ThreadRecord {
                    thread_key: thread_key.to_string(),
                    ..ThreadRecord::default()
                });
            }
        };
        let entries = parse_kv_lines(&contents);
        let mut record = ThreadRecord::from_kv(&entries);
        if record.thread_key.is_empty() {
            record.thread_key = thread_key.to_string();
        }
        Ok(record)
    }

    pub fn save_thread_record(&self, record: &ThreadRecord) -> AppResult<()> {
        write_lines(&self.thread_path(&record.thread_key), &record.to_lines())
    }

    pub fn task_dir(&self, task_id: &str) -> PathBuf {
        self.tasks_dir.join(task_id)
    }

    pub fn write_task_metadata(
        &self,
        task_id: &str,
        values: &[(String, String)],
    ) -> AppResult<PathBuf> {
        let path = self.task_dir(task_id).join("task.env");
        let mut lines = Vec::with_capacity(values.len());
        for (key, value) in values {
            lines.push(format!("{key}={value}"));
        }
        write_lines(&path, &lines)?;
        Ok(path)
    }

    pub fn read_task_metadata(&self, task_id: &str) -> AppResult<HashMap<String, String>> {
        let path = self.task_dir(task_id).join("task.env");
        let contents = read_text_if_exists(&path)?.unwrap_or_default();
        Ok(parse_kv_lines(&contents).into_iter().collect())
    }

    pub fn list_task_metadata(&self) -> AppResult<Vec<(String, HashMap<String, String>)>> {
        let mut tasks = Vec::new();
        for entry in fs::read_dir(&self.tasks_dir)? {
            let entry = entry?;
            if !entry.file_type()?.is_dir() {
                continue;
            }
            let task_id = entry.file_name().to_string_lossy().into_owned();
            let metadata = self.read_task_metadata(&task_id)?;
            tasks.push((task_id, metadata));
        }
        tasks.sort_by(|left, right| left.0.cmp(&right.0));
        Ok(tasks)
    }

    pub fn write_runtime_status(&self, values: &[(String, String)]) -> AppResult<()> {
        let lines = values
            .iter()
            .map(|(key, value)| format!("{key}={value}"))
            .collect::<Vec<_>>();
        write_lines(&self.runtime_path, &lines)
    }

    pub fn read_runtime_status(&self) -> AppResult<HashMap<String, String>> {
        let contents = read_text_if_exists(&self.runtime_path)?.unwrap_or_default();
        Ok(parse_kv_lines(&contents).into_iter().collect())
    }
    pub fn cleanup_old_workspaces(
        &self,
        ttl_secs: u64,
        active_workspaces: &[PathBuf],
    ) -> AppResult<Vec<PathBuf>> {
        let mut removed = Vec::new();
        let active = active_workspaces
            .iter()
            .map(|path| path.to_string_lossy().into_owned())
            .collect::<Vec<_>>();
        for entry in fs::read_dir(&self.tasks_dir)? {
            let entry = entry?;
            if !entry.file_type()?.is_dir() {
                continue;
            }
            let task_id = entry.file_name().to_string_lossy().into_owned();
            let metadata = self.read_task_metadata(&task_id)?;
            let Some(workspace_path) = metadata.get("workspace_path") else {
                continue;
            };
            if active.iter().any(|path| path == workspace_path) {
                continue;
            }
            let Some(started_at) = metadata
                .get("finished_at")
                .and_then(|value| value.parse::<u64>().ok())
                .or_else(|| file_mtime_epoch(Path::new(workspace_path)).ok().flatten())
            else {
                continue;
            };
            if crate::util::current_epoch_secs().saturating_sub(started_at) < ttl_secs {
                continue;
            }
            let mirror_dir = metadata
                .get("mirror_dir")
                .map(PathBuf::from)
                .unwrap_or_else(|| self.repos_dir.clone());
            if mirror_dir.exists() {
                let mut command = std::process::Command::new("git");
                command
                    .arg("--git-dir")
                    .arg(&mirror_dir)
                    .arg("worktree")
                    .arg("remove")
                    .arg("--force")
                    .arg(workspace_path);
                let _ = crate::util::run_command(&mut command);
            }
            remove_dir_if_exists(Path::new(workspace_path))?;
            removed.push(PathBuf::from(workspace_path));
        }
        Ok(removed)
    }
}
