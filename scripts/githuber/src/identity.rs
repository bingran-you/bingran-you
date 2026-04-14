use std::process::Command;

use crate::util::{AppResult, app_error, parse_tsv_line, run_command_checked};

#[derive(Clone, Debug)]
pub struct Identity {
    pub host: String,
    pub login: String,
    pub git_protocol: String,
    pub scopes: Vec<String>,
}

impl Identity {
    pub fn lock_key(&self, profile: &str) -> String {
        format!("{}__{}__{}", self.host, self.login, profile)
    }

    pub fn scopes_string(&self) -> String {
        self.scopes.join(",")
    }

    pub fn has_required_scope(&self) -> bool {
        self.scopes
            .iter()
            .any(|scope| scope == "repo" || scope == "notifications")
    }
}

pub fn resolve_identity(host: &str) -> AppResult<Identity> {
    let jq = ".hosts | to_entries[] | .key as $host | .value[] | select(.active == true) | [$host, .login, .gitProtocol, (.scopes // \"\")] | @tsv";
    let mut command = Command::new("gh");
    command
        .arg("auth")
        .arg("status")
        .arg("--active")
        .arg("--hostname")
        .arg(host)
        .arg("--json")
        .arg("hosts")
        .arg("--jq")
        .arg(jq);

    let stdout = run_command_checked(&mut command, "resolve gh identity")?;
    let line = stdout
        .lines()
        .find(|line| !line.trim().is_empty())
        .ok_or_else(|| app_error(format!("no active gh identity found for host `{host}`")))?;
    let fields = parse_tsv_line(line);
    if fields.len() < 4 {
        return Err(app_error(format!(
            "unexpected gh auth status output while resolving identity: `{line}`"
        )));
    }

    Ok(Identity {
        host: fields[0].clone(),
        login: fields[1].clone(),
        git_protocol: fields[2].clone(),
        scopes: fields[3]
            .split(',')
            .map(str::trim)
            .filter(|scope| !scope.is_empty())
            .map(ToOwned::to_owned)
            .collect(),
    })
}

#[cfg(test)]
mod tests {
    use super::Identity;

    #[test]
    fn lock_key_is_stable() {
        let identity = Identity {
            host: "github.com".to_string(),
            login: "bingran-you".to_string(),
            git_protocol: "https".to_string(),
            scopes: vec!["repo".to_string()],
        };

        assert_eq!(
            identity.lock_key("default"),
            "github.com__bingran-you__default"
        );
    }
}
