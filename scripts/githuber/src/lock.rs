use std::path::{Path, PathBuf};
use std::process::Command;

use crate::identity::Identity;
use crate::util::{
    AppResult, app_error, current_epoch_secs, ensure_dir, parse_kv_lines, read_text_if_exists,
    remove_dir_if_exists, write_lines,
};

#[derive(Clone, Debug)]
pub struct LockInfo {
    pub pid: u32,
    pub host: String,
    pub login: String,
    pub profile: String,
    pub heartbeat_epoch: u64,
    pub started_epoch: u64,
    pub active_tasks: usize,
    pub note: String,
}

impl LockInfo {
    pub fn to_lines(&self) -> Vec<String> {
        vec![
            format!("pid={}", self.pid),
            format!("host={}", self.host),
            format!("login={}", self.login),
            format!("profile={}", self.profile),
            format!("heartbeat_epoch={}", self.heartbeat_epoch),
            format!("started_epoch={}", self.started_epoch),
            format!("active_tasks={}", self.active_tasks),
            format!("note={}", crate::util::encode_multiline(&self.note)),
        ]
    }

    pub fn from_contents(contents: &str) -> Option<Self> {
        let entries = parse_kv_lines(contents);
        let get = |name: &str| -> Option<String> {
            entries
                .iter()
                .find(|(key, _)| key == name)
                .map(|(_, value)| value.to_string())
        };
        Some(Self {
            pid: get("pid")?.parse().ok()?,
            host: get("host")?,
            login: get("login")?,
            profile: get("profile")?,
            heartbeat_epoch: get("heartbeat_epoch")?.parse().ok()?,
            started_epoch: get("started_epoch")?.parse().ok()?,
            active_tasks: get("active_tasks")
                .and_then(|value| value.parse::<usize>().ok())
                .unwrap_or_default(),
            note: crate::util::decode_multiline(&get("note").unwrap_or_default()),
        })
    }
}

#[derive(Clone, Debug)]
pub struct ServiceLock {
    dir: PathBuf,
    info_path: PathBuf,
    info: LockInfo,
}

impl ServiceLock {
    pub fn acquire(base_dir: &Path, identity: &Identity, profile: &str) -> AppResult<Self> {
        ensure_dir(base_dir)?;
        let dir = base_dir.join(crate::util::sanitize_filename(&identity.lock_key(profile)));
        let info_path = dir.join("lock.env");

        let mut tries = 0usize;
        loop {
            tries += 1;
            match std::fs::create_dir(&dir) {
                Ok(_) => break,
                Err(error) if error.kind() == std::io::ErrorKind::AlreadyExists => {
                    let existing = read_lock_info(&info_path)?;
                    if let Some(existing) = existing {
                        if is_lock_stale(&existing) {
                            remove_dir_if_exists(&dir)?;
                            if tries < 3 {
                                continue;
                            }
                        }
                        return Err(app_error(format!(
                            "githuber is already running for {} on {} (pid {}, profile `{}`)",
                            existing.login, existing.host, existing.pid, existing.profile
                        )));
                    }
                    remove_dir_if_exists(&dir)?;
                    if tries < 3 {
                        continue;
                    }
                }
                Err(error) => {
                    return Err(app_error(format!(
                        "failed to create lock directory `{}`: {error}",
                        dir.display()
                    )));
                }
            }
        }

        let info = LockInfo {
            pid: std::process::id(),
            host: identity.host.clone(),
            login: identity.login.clone(),
            profile: profile.to_string(),
            heartbeat_epoch: current_epoch_secs(),
            started_epoch: current_epoch_secs(),
            active_tasks: 0,
            note: "starting".to_string(),
        };
        let lock = Self {
            dir,
            info_path,
            info,
        };
        lock.refresh(0, "started")?;
        Ok(lock)
    }

    pub fn refresh(&self, active_tasks: usize, note: &str) -> AppResult<()> {
        let mut info = self.info.clone();
        info.active_tasks = active_tasks;
        info.heartbeat_epoch = current_epoch_secs();
        info.note = note.to_string();
        write_lines(&self.info_path, &info.to_lines())
    }
}

impl Drop for ServiceLock {
    fn drop(&mut self) {
        let _ = remove_dir_if_exists(&self.dir);
    }
}

pub fn read_lock_info(path: &Path) -> AppResult<Option<LockInfo>> {
    let Some(contents) = read_text_if_exists(path)? else {
        return Ok(None);
    };
    Ok(LockInfo::from_contents(&contents))
}

pub fn find_lock(
    base_dir: &Path,
    identity: &Identity,
    profile: &str,
) -> AppResult<Option<LockInfo>> {
    let dir = lock_dir(base_dir, identity, profile);
    read_lock_info(&dir.join("lock.env"))
}

pub fn lock_dir(base_dir: &Path, identity: &Identity, profile: &str) -> PathBuf {
    base_dir.join(crate::util::sanitize_filename(&identity.lock_key(profile)))
}

pub fn lock_is_live(lock: &LockInfo) -> bool {
    !is_lock_stale(lock)
}

pub fn remove_lock_dir(base_dir: &Path, identity: &Identity, profile: &str) -> AppResult<()> {
    remove_dir_if_exists(&lock_dir(base_dir, identity, profile))
}

pub fn stop_process(lock: &LockInfo) -> AppResult<()> {
    let mut command = Command::new("kill");
    command.arg(lock.pid.to_string());
    crate::util::run_command_checked(&mut command, "stop githuber process")?;
    Ok(())
}

fn is_lock_stale(info: &LockInfo) -> bool {
    let expired = current_epoch_secs().saturating_sub(info.heartbeat_epoch) > 60 * 20;
    expired || !process_alive(info.pid)
}

fn process_alive(pid: u32) -> bool {
    let mut command = Command::new("kill");
    command.arg("-0").arg(pid.to_string());
    crate::util::run_command(&mut command)
        .map(|output| output.status_code == 0)
        .unwrap_or(false)
}

#[cfg(test)]
mod tests {
    use super::LockInfo;

    #[test]
    fn lock_info_round_trips() {
        let info = LockInfo {
            pid: 42,
            host: "github.com".to_string(),
            login: "bingran-you".to_string(),
            profile: "default".to_string(),
            heartbeat_epoch: 100,
            started_epoch: 50,
            active_tasks: 3,
            note: "working".to_string(),
        };

        let contents = info.to_lines().join("\n");
        let restored = LockInfo::from_contents(&contents).expect("should parse");
        assert_eq!(restored.pid, 42);
        assert_eq!(restored.note, "working");
    }
}
