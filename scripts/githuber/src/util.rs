use std::env;
use std::error::Error;
use std::fmt::{Display, Formatter};
use std::fs;
use std::io;
use std::path::{Path, PathBuf};
use std::process::Command;
use std::time::{SystemTime, UNIX_EPOCH};

pub type AppResult<T> = Result<T, Box<dyn Error + Send + Sync>>;

#[derive(Debug)]
pub struct AppError(pub String);

impl Display for AppError {
    fn fmt(&self, formatter: &mut Formatter<'_>) -> std::fmt::Result {
        formatter.write_str(&self.0)
    }
}

impl Error for AppError {}

pub fn app_error(message: impl Into<String>) -> Box<dyn Error + Send + Sync> {
    Box::new(AppError(message.into()))
}

#[derive(Debug, Clone)]
pub struct ExecOutput {
    pub stdout: String,
    pub stderr: String,
    pub status_code: i32,
}

pub fn current_epoch_secs() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs()
}

pub fn current_epoch_millis() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis() as u64
}

pub fn home_dir() -> AppResult<PathBuf> {
    env::var_os("HOME")
        .map(PathBuf::from)
        .ok_or_else(|| app_error("HOME is not set"))
}

pub fn ensure_dir(path: &Path) -> AppResult<()> {
    fs::create_dir_all(path)?;
    Ok(())
}

pub fn read_text_if_exists(path: &Path) -> AppResult<Option<String>> {
    match fs::read_to_string(path) {
        Ok(contents) => Ok(Some(contents)),
        Err(error) if error.kind() == io::ErrorKind::NotFound => Ok(None),
        Err(error) => Err(Box::new(error)),
    }
}

pub fn write_text(path: &Path, contents: &str) -> AppResult<()> {
    if let Some(parent) = path.parent() {
        ensure_dir(parent)?;
    }
    fs::write(path, contents)?;
    Ok(())
}

pub fn render_command(command: &Command) -> String {
    let program = command.get_program().to_string_lossy().into_owned();
    let args = command
        .get_args()
        .map(|arg| shell_quote(&arg.to_string_lossy()))
        .collect::<Vec<_>>()
        .join(" ");
    if args.is_empty() {
        program
    } else {
        format!("{program} {args}")
    }
}

pub fn run_command(command: &mut Command) -> AppResult<ExecOutput> {
    let output = command.output().map_err(|error| {
        app_error(format!(
            "failed to start command `{}`: {error}",
            render_command(command)
        ))
    })?;

    Ok(ExecOutput {
        stdout: String::from_utf8_lossy(&output.stdout).into_owned(),
        stderr: String::from_utf8_lossy(&output.stderr).into_owned(),
        status_code: output.status.code().unwrap_or(-1),
    })
}

pub fn run_command_checked(command: &mut Command, context: &str) -> AppResult<String> {
    let rendered = render_command(command);
    let output = run_command(command)?;
    if output.status_code != 0 {
        return Err(app_error(format!(
            "{context} failed with exit code {}: {}\nstdout:\n{}\nstderr:\n{}",
            output.status_code, rendered, output.stdout, output.stderr
        )));
    }
    Ok(output.stdout)
}

pub fn which(binary: &str) -> Option<PathBuf> {
    let path = env::var_os("PATH")?;
    env::split_paths(&path)
        .map(|entry| entry.join(binary))
        .find(|candidate| candidate.is_file())
}

pub fn sanitize_filename(value: &str) -> String {
    let mut out = String::with_capacity(value.len());
    for character in value.chars() {
        if character.is_ascii_alphanumeric()
            || character == '-'
            || character == '_'
            || character == '.'
        {
            out.push(character);
        } else {
            out.push('_');
        }
    }
    if out.is_empty() {
        "empty".to_string()
    } else {
        out
    }
}

pub fn fnv1a64(value: &str) -> u64 {
    let mut hash = 0xcbf29ce484222325u64;
    for byte in value.as_bytes() {
        hash ^= u64::from(*byte);
        hash = hash.wrapping_mul(0x100000001b3);
    }
    hash
}

pub fn shell_quote(value: &str) -> String {
    if value.is_empty() {
        return "''".to_string();
    }
    if value
        .bytes()
        .all(|byte| byte.is_ascii_alphanumeric() || b"-_./:=,@".contains(&byte))
    {
        return value.to_string();
    }
    format!("'{}'", value.replace('\'', "'\"'\"'"))
}

pub fn parse_tsv_line(line: &str) -> Vec<String> {
    line.split('\t').map(unescape_jq_field).collect()
}

pub fn unescape_jq_field(value: &str) -> String {
    let mut output = String::with_capacity(value.len());
    let mut chars = value.chars().peekable();
    while let Some(character) = chars.next() {
        if character != '\\' {
            output.push(character);
            continue;
        }

        match chars.next() {
            Some('n') => output.push('\n'),
            Some('r') => output.push('\r'),
            Some('t') => output.push('\t'),
            Some('\\') => output.push('\\'),
            Some('b') => output.push('\u{0008}'),
            Some('f') => output.push('\u{000c}'),
            Some('u') => {
                let code = chars.by_ref().take(4).collect::<String>();
                if let Ok(number) = u32::from_str_radix(&code, 16)
                    && let Some(decoded) = char::from_u32(number)
                {
                    output.push(decoded);
                }
            }
            Some(other) => output.push(other),
            None => break,
        }
    }
    output
}

pub fn canonical_api_path(url: &str) -> String {
    url.trim()
        .strip_prefix("https://api.github.com")
        .or_else(|| url.trim().strip_prefix("https://github.com"))
        .unwrap_or(url.trim())
        .trim()
        .trim_end_matches('/')
        .to_string()
}

pub fn stable_file_id(value: &str) -> String {
    format!("{:016x}", fnv1a64(value))
}

pub fn parse_kv_lines(contents: &str) -> Vec<(String, String)> {
    contents
        .lines()
        .filter_map(|line| {
            let (key, value) = line.split_once('=')?;
            Some((key.trim().to_string(), value.trim().to_string()))
        })
        .collect()
}

pub fn encode_multiline(value: &str) -> String {
    value.replace('\n', "\\n")
}

pub fn decode_multiline(value: &str) -> String {
    value.replace("\\n", "\n")
}

pub fn remove_dir_if_exists(path: &Path) -> AppResult<()> {
    match fs::remove_dir_all(path) {
        Ok(_) => Ok(()),
        Err(error) if error.kind() == io::ErrorKind::NotFound => Ok(()),
        Err(error) => Err(Box::new(error)),
    }
}

pub fn file_mtime_epoch(path: &Path) -> AppResult<Option<u64>> {
    let metadata = match fs::metadata(path) {
        Ok(metadata) => metadata,
        Err(error) if error.kind() == io::ErrorKind::NotFound => return Ok(None),
        Err(error) => return Err(Box::new(error)),
    };
    let modified = metadata
        .modified()?
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default();
    Ok(Some(modified.as_secs()))
}

pub fn write_lines(path: &Path, lines: &[String]) -> AppResult<()> {
    write_text(path, &lines.join("\n"))
}

pub fn read_lines(path: &Path) -> AppResult<Vec<String>> {
    let Some(contents) = read_text_if_exists(path)? else {
        return Ok(Vec::new());
    };
    Ok(contents.lines().map(|line| line.to_string()).collect())
}

pub fn parse_github_timestamp_epoch(value: &str) -> Option<u64> {
    if value.len() != 20 {
        return None;
    }
    if !matches!(
        (
            value.as_bytes().get(4),
            value.as_bytes().get(7),
            value.as_bytes().get(10),
            value.as_bytes().get(13),
            value.as_bytes().get(16),
            value.as_bytes().get(19),
        ),
        (
            Some(b'-'),
            Some(b'-'),
            Some(b'T'),
            Some(b':'),
            Some(b':'),
            Some(b'Z')
        )
    ) {
        return None;
    }

    let year = parse_i32_slice(value, 0, 4)?;
    let month = parse_u32_slice(value, 5, 7)?;
    let day = parse_u32_slice(value, 8, 10)?;
    let hour = parse_u32_slice(value, 11, 13)?;
    let minute = parse_u32_slice(value, 14, 16)?;
    let second = parse_u32_slice(value, 17, 19)?;

    if !(1..=12).contains(&month) {
        return None;
    }
    if !(1..=days_in_month(year, month)).contains(&day) {
        return None;
    }
    if hour > 23 || minute > 59 || second > 59 {
        return None;
    }

    let days = days_from_civil(year, month, day);
    if days < 0 {
        return None;
    }

    Some(
        (days as u64)
            .saturating_mul(86_400)
            .saturating_add(u64::from(hour) * 3_600)
            .saturating_add(u64::from(minute) * 60)
            .saturating_add(u64::from(second)),
    )
}

pub fn is_recent_github_timestamp(value: &str, now_epoch: u64, lookback_secs: u64) -> bool {
    parse_github_timestamp_epoch(value)
        .map(|timestamp| timestamp >= now_epoch.saturating_sub(lookback_secs))
        .unwrap_or(false)
}

fn parse_i32_slice(value: &str, start: usize, end: usize) -> Option<i32> {
    value.get(start..end)?.parse::<i32>().ok()
}

fn parse_u32_slice(value: &str, start: usize, end: usize) -> Option<u32> {
    value.get(start..end)?.parse::<u32>().ok()
}

fn days_in_month(year: i32, month: u32) -> u32 {
    match month {
        1 | 3 | 5 | 7 | 8 | 10 | 12 => 31,
        4 | 6 | 9 | 11 => 30,
        2 if is_leap_year(year) => 29,
        2 => 28,
        _ => 0,
    }
}

fn is_leap_year(year: i32) -> bool {
    (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
}

fn days_from_civil(year: i32, month: u32, day: u32) -> i64 {
    let year = i64::from(year) - i64::from(month <= 2);
    let era = if year >= 0 { year } else { year - 399 } / 400;
    let year_of_era = year - era * 400;
    let month = i64::from(month);
    let day = i64::from(day);
    let day_of_year = (153 * (month + if month > 2 { -3 } else { 9 }) + 2) / 5 + day - 1;
    let day_of_era = year_of_era * 365 + year_of_era / 4 - year_of_era / 100 + day_of_year;
    era * 146_097 + day_of_era - 719_468
}

#[cfg(test)]
mod tests {
    use super::{is_recent_github_timestamp, parse_github_timestamp_epoch};

    #[test]
    fn parses_github_timestamps_to_epoch() {
        assert_eq!(
            parse_github_timestamp_epoch("1970-01-01T00:00:00Z"),
            Some(0)
        );
        assert_eq!(
            parse_github_timestamp_epoch("1970-01-01T00:15:50Z"),
            Some(950)
        );
    }

    #[test]
    fn rejects_invalid_github_timestamps() {
        assert_eq!(parse_github_timestamp_epoch("2026-13-01T00:00:00Z"), None);
        assert_eq!(parse_github_timestamp_epoch("not-a-timestamp"), None);
    }

    #[test]
    fn checks_recent_timestamp_window() {
        assert!(is_recent_github_timestamp(
            "1970-01-01T00:15:50Z",
            1_000,
            100
        ));
        assert!(!is_recent_github_timestamp(
            "1970-01-01T00:14:59Z",
            1_000,
            100
        ));
    }
}
