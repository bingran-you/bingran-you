const form = document.querySelector("#runForm");
const state = {
  runs: [],
  pools: [],
  selectedRunId: null,
  busy: false,
};

const fields = [
  "name",
  "run_target",
  "benchflow_root",
  "tasks_dir",
  "env_file",
  "jobs_root",
  "remote_host",
  "remote_user",
  "remote_run_user",
  "remote_port",
  "remote_ssh_key",
  "remote_benchflow_root",
  "remote_tasks_dir",
  "remote_jobs_root",
  "agent",
  "model",
  "sandbox",
  "concurrency",
  "skills_profile",
  "skills_mode",
  "skills_dir",
  "include_tasks",
  "exclude_tasks",
  "extra_args",
  "sheet_id",
  "sheet_tab",
  "sheet_configuration",
  "sheet_owner",
  "sheet_lease_ttl_minutes",
];

function $(selector) {
  return document.querySelector(selector);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error || `HTTP ${response.status}`);
  }
  return payload;
}

function formPayload() {
  const data = new FormData(form);
  const payload = {};
  for (const name of fields) {
    payload[name] = data.get(name) ?? "";
  }
  payload.concurrency = Number(payload.concurrency || 1);
  payload.remote_port = Number(payload.remote_port || 22);
  payload.sheet_lease_ttl_minutes = Number(payload.sheet_lease_ttl_minutes || 240);
  return payload;
}

function setFormValues(values) {
  for (const [key, value] of Object.entries(values)) {
    const input = form.elements[key];
    if (input && value !== undefined && value !== null && value !== "") {
      input.value = value;
    }
  }
  updateMode();
}

function updateMode() {
  const target = form.elements.run_target.value;
  document.querySelector(".remote-fields").dataset.hidden = target === "local";
  document.querySelector(".local-fields").dataset.hidden = target !== "local";
  $("#connectionLine").textContent =
    target === "gcp_ssh" ? "GCP SSH · Docker · BenchFlow tasks" : "Local · BenchFlow tasks";
}

function setMessage(text, type = "") {
  const box = $("#formMessage");
  box.textContent = text;
  box.className = `message ${type}`.trim();
}

async function loadDefaults() {
  const defaults = await api("/api/defaults");
  setFormValues(defaults);
}

async function loadState({ silent = false } = {}) {
  if (state.busy) return;
  try {
    state.busy = true;
    const payload = await api("/api/state");
    state.runs = payload.runs || [];
    state.pools = payload.pools || [];
    if (!state.selectedRunId && state.runs.length) {
      state.selectedRunId = state.runs[0].run.id;
    }
    if (!state.runs.some((item) => item.run.id === state.selectedRunId)) {
      state.selectedRunId = state.runs[0]?.run.id || null;
    }
    render();
    $("#lastUpdated").textContent = `Synced at ${new Date().toLocaleTimeString()}`;
    if (!silent) setMessage("");
  } catch (error) {
    if (!silent) setMessage(error.message, "error");
  } finally {
    state.busy = false;
  }
}

async function startRun(event) {
  event.preventDefault();
  setMessage("Starting...");
  try {
    const payload = await api("/api/runs", {
      method: "POST",
      body: JSON.stringify(formPayload()),
    });
    state.selectedRunId = payload.run.run.id;
    setMessage(`Started ${payload.run.run.id}`, "ok");
    await loadState({ silent: true });
  } catch (error) {
    setMessage(error.message, "error");
  }
}

async function startPool() {
  setMessage("Starting pool...");
  try {
    const payload = await api("/api/pools", {
      method: "POST",
      body: JSON.stringify(formPayload()),
    });
    const activeRun = payload.pool?.active?.[0]?.run_id;
    if (activeRun) state.selectedRunId = activeRun;
    setMessage(`Started pool ${payload.pool.pool.id}`, "ok");
    await loadState({ silent: true });
  } catch (error) {
    setMessage(error.message, "error");
  }
}

async function stopActiveRun() {
  const run = activeRun();
  if (!run) return;
  setMessage(`Stopping ${run.run.id}...`);
  try {
    await api(`/api/runs/${encodeURIComponent(run.run.id)}/stop`, { method: "POST" });
    setMessage(`Stopped ${run.run.id}`, "ok");
    await loadState({ silent: true });
  } catch (error) {
    setMessage(error.message, "error");
  }
}

async function loadTaskIndex() {
  const tasksDir = form.elements.tasks_dir.value;
  try {
    const payload = await api(`/api/tasks?tasks_dir=${encodeURIComponent(tasksDir)}`);
    renderTaskIndex(payload.tasks || []);
  } catch (error) {
    $("#taskIndex").textContent = error.message;
    $("#taskIndex").className = "task-index-list empty";
  }
}

function activeRun() {
  return state.runs.find((item) => item.run.id === state.selectedRunId) || null;
}

function render() {
  renderPools();
  renderRuns();
  renderActiveRun();
}

function renderPools() {
  $("#poolCount").textContent = String(state.pools.length);
  const list = $("#poolsList");
  if (!state.pools.length) {
    list.className = "runs-list empty";
    list.textContent = "No pools yet";
    return;
  }
  list.className = "runs-list";
  list.innerHTML = state.pools
    .map((item) => {
      const pool = item.pool;
      const summary = item.summary || {};
      return `
        <div class="run-item">
          <span class="run-title">${escapeHtml(pool.config.name || pool.id)}</span>
          <span class="status-pill status-${escapeHtml(pool.status)}">${escapeHtml(pool.status)}</span>
          <span class="run-meta">cap ${summary.capacity || 0} · active ${summary.active || 0} · queued ${summary.queued || 0} · usable ${summary.usable || 0} · invalid ${summary.invalid || 0}</span>
          <span class="run-command">${escapeHtml(pool.id)}</span>
        </div>
      `;
    })
    .join("");
}

function renderRuns() {
  $("#runCount").textContent = String(state.runs.length);
  const list = $("#runsList");
  if (!state.runs.length) {
    list.className = "runs-list empty";
    list.textContent = "No runs yet";
    return;
  }
  list.className = "runs-list";
  list.innerHTML = state.runs
    .map((item) => {
      const run = item.run;
      const summary = item.summary || {};
      const active = run.id === state.selectedRunId ? " active" : "";
      const command = (run.command || []).join(" ");
      return `
        <button class="run-item${active}" type="button" data-run-id="${escapeHtml(run.id)}">
          <span class="run-title">${escapeHtml(run.config.name || run.id)}</span>
          <span class="status-pill status-${escapeHtml(run.status)}">${escapeHtml(run.status)}</span>
          <span class="run-meta">${escapeHtml(run.started_at || run.created_at || "")} · ${summary.done || 0}/${summary.total || 0} done · reward ${formatReward(summary.mean_reward)}</span>
          <span class="run-command">${escapeHtml(command)}</span>
        </button>
      `;
    })
    .join("");
  list.querySelectorAll(".run-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedRunId = button.dataset.runId;
      render();
    });
  });
}

function renderActiveRun() {
  const item = activeRun();
  if (!item) {
    $("#activeRunTitle").textContent = "No run selected";
    $("#activeRunMeta").textContent = "Start an experiment to show the latest run";
    $("#stopRun").disabled = true;
    $("#summaryStrip").innerHTML = "";
    $("#tasksBody").innerHTML = '<tr><td colspan="7" class="empty-cell">No task results yet</td></tr>';
    $("#logOutput").textContent = "No logs yet";
    $("#artifactOutput").textContent = "Select result.json or config.json";
    $("#artifactPath").textContent = "";
    return;
  }

  const run = item.run;
  const summary = item.summary || {};
  $("#activeRunTitle").textContent = run.config.name || run.id;
  const syncText = run.synced_at ? ` · synced ${run.synced_at}` : run.sync_error ? " · sync error" : "";
  $("#activeRunMeta").textContent = `${run.id} · ${run.config.run_target} · ${run.jobs_dir}${syncText}`;
  $("#stopRun").disabled = run.status !== "running";
  $("#summaryStrip").innerHTML = metricHtml(summary);
  $("#logOutput").textContent = item.log_tail || "No logs yet";
  $("#logHint").textContent = run.remote_log_path || run.log_path || "";
  renderTasks(item.tasks || []);
}

function metricHtml(summary) {
  const metrics = [
    ["Total", summary.total ?? 0],
    ["Done", summary.done ?? 0],
    ["Running", summary.running ?? 0],
    ["Pass", summary.passed ?? 0],
    ["Fail", summary.failed ?? 0],
    ["Error", summary.errored ?? 0],
    ["Mean", formatReward(summary.mean_reward)],
  ];
  return metrics
    .map(([label, value]) => `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
}

function renderTasks(tasks) {
  const body = $("#tasksBody");
  const status = $("#statusFilter").value;
  const needle = $("#taskFilter").value.trim().toLowerCase();
  const filtered = tasks.filter((task) => {
    const matchesStatus = !status || task.status === status;
    const haystack = `${task.task_name} ${task.trial_name}`.toLowerCase();
    return matchesStatus && (!needle || haystack.includes(needle));
  });

  if (!filtered.length) {
    body.innerHTML = '<tr><td colspan="7" class="empty-cell">No matching tasks</td></tr>';
    return;
  }

  body.innerHTML = filtered
    .map((task) => {
      const artifactButtons = [
        artifactButton(task.result_path, "result"),
        artifactButton(task.config_path, "config"),
      ].join("");
      return `
        <tr>
          <td><span class="status-pill status-${escapeHtml(task.status)}">${escapeHtml(task.status)}</span></td>
          <td class="task-name" title="${escapeHtml(task.task_name)}">${escapeHtml(task.task_name)}</td>
          <td class="trial-name" title="${escapeHtml(task.trial_name)}">${escapeHtml(task.trial_name)}</td>
          <td>${formatReward(task.reward)}</td>
          <td>${formatSeconds(task.duration_sec)}</td>
          <td>${escapeHtml(task.updated_at || "")}</td>
          <td><div class="artifact-buttons">${artifactButtons || ""}</div></td>
        </tr>
      `;
    })
    .join("");

  body.querySelectorAll("[data-artifact]").forEach((button) => {
    button.addEventListener("click", () => viewArtifact(button.dataset.artifact));
  });
}

function artifactButton(path, label) {
  if (!path) return "";
  return `<button type="button" data-artifact="${escapeHtml(path)}">${label}</button>`;
}

async function viewArtifact(path) {
  const run = activeRun();
  if (!run || !path) return;
  $("#artifactPath").textContent = path;
  $("#artifactOutput").textContent = "Loading...";
  try {
    const payload = await api(
      `/api/runs/${encodeURIComponent(run.run.id)}/artifact?path=${encodeURIComponent(path)}`,
    );
    if (payload.error) {
      $("#artifactOutput").textContent = payload.error;
    } else if (payload.too_large) {
      $("#artifactOutput").textContent = "File is larger than 2 MB and was not loaded";
    } else {
      $("#artifactOutput").textContent = payload.content || "";
    }
  } catch (error) {
    $("#artifactOutput").textContent = error.message;
  }
}

function renderTaskIndex(tasks) {
  const box = $("#taskIndex");
  if (!tasks.length) {
    box.className = "task-index-list empty";
    box.textContent = "No task.toml files found";
    return;
  }
  box.className = "task-index-list";
  box.innerHTML = tasks.map((task) => `<span class="task-chip">${escapeHtml(task)}</span>`).join("");
}

function formatReward(value) {
  if (value === null || value === undefined || value === "") return "—";
  const number = Number(value);
  return Number.isFinite(number) ? number.toFixed(3).replace(/\.?0+$/, "") : String(value);
}

function formatSeconds(value) {
  if (value === null || value === undefined || value === "") return "—";
  const number = Number(value);
  if (!Number.isFinite(number)) return String(value);
  if (number < 60) return `${number.toFixed(1)}s`;
  return `${Math.floor(number / 60)}m ${Math.round(number % 60)}s`;
}

form.addEventListener("submit", startRun);
$("#startPool").addEventListener("click", startPool);
$("#stopRun").addEventListener("click", stopActiveRun);
$("#refreshState").addEventListener("click", () => loadState());
$("#loadTasks").addEventListener("click", loadTaskIndex);
$("#runTarget").addEventListener("change", updateMode);
$("#statusFilter").addEventListener("change", renderActiveRun);
$("#taskFilter").addEventListener("input", renderActiveRun);

await loadDefaults();
await loadState({ silent: true });
setInterval(() => loadState({ silent: true }), 5000);
