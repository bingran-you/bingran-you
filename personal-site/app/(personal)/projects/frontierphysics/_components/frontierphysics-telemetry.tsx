"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  FrontierPhysicsSeries,
  FrontierPhysicsTelemetry as Telemetry,
} from "@/lib/frontierphysics";

const REFRESH_INTERVAL_MS = 60_000;

const METRIC_FORMATS: Record<
  string,
  { label: string; unit?: string; digits?: number }
> = {
  "service/dashboard_up": { label: "Dashboard up" },
  "service/model_proxy_up": { label: "Model proxy up" },
  "service/orchestrator_up": { label: "Orchestrator up" },
  "vm/cpu_percent": { label: "CPU", unit: "%", digits: 1 },
  "vm/disk_free_gib": { label: "Disk free", unit: " GiB", digits: 1 },
  "vm/disk_read_mib_s": { label: "Disk read", unit: " MiB/s", digits: 2 },
  "vm/disk_used_percent": { label: "Disk used", unit: "%", digits: 1 },
  "vm/disk_write_mib_s": {
    label: "Disk write",
    unit: " MiB/s",
    digits: 2,
  },
  "vm/load_15m": { label: "Load 15m", digits: 2 },
  "vm/load_1m": { label: "Load 1m", digits: 2 },
  "vm/load_1m_per_cpu": { label: "Load per CPU", digits: 2 },
  "vm/load_5m": { label: "Load 5m", digits: 2 },
  "vm/memory_available_gib": {
    label: "Memory available",
    unit: " GiB",
    digits: 1,
  },
  "vm/memory_percent": { label: "Memory used", unit: "%", digits: 1 },
  "vm/memory_used_gib": {
    label: "Memory used",
    unit: " GiB",
    digits: 1,
  },
  "vm/network_rx_mib_s": {
    label: "Network receive",
    unit: " MiB/s",
    digits: 2,
  },
  "vm/network_tx_mib_s": {
    label: "Network transmit",
    unit: " MiB/s",
    digits: 2,
  },
  "vm/process_count": { label: "Processes" },
  "vm/swap_percent": { label: "Swap used", unit: "%", digits: 1 },
  "vm/uptime_hours": { label: "Uptime", unit: " h", digits: 1 },
  "workload/bench_eval_processes": { label: "Bench eval processes" },
  "workload/codex_exec_sessions": { label: "Codex exec sessions" },
  "workload/codex_sessions": { label: "Codex sessions" },
  "workload/daytona_eval_processes": { label: "Daytona eval processes" },
  "workload/docker_containers": { label: "Docker containers" },
  "workload/docker_eval_processes": { label: "Docker eval processes" },
  "workload/frontierphysics_runners": { label: "FrontierPhysics runners" },
  "workload/tmux_panes": { label: "tmux panes" },
};

function formatValue(key: string, value: number) {
  if (key.startsWith("service/")) {
    return value >= 1 ? "up" : "down";
  }
  const format = METRIC_FORMATS[key];
  const digits =
    format?.digits ?? (Number.isInteger(value) ? 0 : Math.abs(value) < 10 ? 2 : 1);
  return `${value.toFixed(digits)}${format?.unit ?? ""}`;
}

function metricGroup(key: string) {
  return key.slice(0, key.indexOf("/"));
}

function latestPoint(series: FrontierPhysicsSeries) {
  return series.points.at(-1);
}

function Sparkline({ series }: { series: FrontierPhysicsSeries }) {
  const values = series.points.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const width = 240;
  const height = 56;
  const path = values
    .map((value, index) => {
      const x = values.length === 1 ? width / 2 : (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 8) - 4;
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={`${METRIC_FORMATS[series.key]?.label ?? series.key} history`}
      className="h-14 w-full overflow-visible"
      preserveAspectRatio="none"
    >
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function MetricCard({ series }: { series: FrontierPhysicsSeries }) {
  const latest = latestPoint(series);
  if (!latest) return null;

  const values = series.points.map((point) => point.value);
  const label = METRIC_FORMATS[series.key]?.label ?? series.key;
  const isHealthyService =
    series.key.startsWith("service/") && latest.value >= 1;

  return (
    <article className="border border-[var(--border)] bg-[var(--background)]/80 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            {metricGroup(series.key)}
          </p>
          <h3 className="mt-1 text-sm font-semibold">{label}</h3>
        </div>
        <p
          className={`font-mono text-sm ${
            series.key.startsWith("service/")
              ? isHealthyService
                ? "text-emerald-800"
                : "text-red-800"
              : ""
          }`}
        >
          {formatValue(series.key, latest.value)}
        </p>
      </div>
      <div className="mt-4 text-[var(--accent)]">
        <Sparkline series={series} />
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] text-[var(--muted)]">
        <span>min {formatValue(series.key, Math.min(...values))}</span>
        <span>{series.points.length} points</span>
        <span>max {formatValue(series.key, Math.max(...values))}</span>
      </div>
    </article>
  );
}

export function FrontierPhysicsTelemetry({
  initialTelemetry,
}: {
  initialTelemetry: Telemetry | null;
}) {
  const [telemetry, setTelemetry] = useState<Telemetry | null>(
    initialTelemetry,
  );
  const [error, setError] = useState(initialTelemetry === null);
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const response = await fetch("/api/frontierphysics", {
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("telemetry unavailable");
      setTelemetry((await response.json()) as Telemetry);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => void refresh(), REFRESH_INTERVAL_MS);
    return () => window.clearInterval(interval);
  }, [refresh]);

  const groups = useMemo(() => {
    if (!telemetry) return [];
    return ["service", "workload", "vm"].flatMap((group) => {
      const series = telemetry.series.filter((item) => metricGroup(item.key) === group);
      return series.length > 0 ? [{ group, series }] : [];
    });
  }, [telemetry]);

  if (loading && !telemetry) {
    return (
      <div className="border border-[var(--border)] p-6 text-sm text-[var(--muted)]">
        Loading the latest server telemetry…
      </div>
    );
  }

  if (error && !telemetry) {
    return (
      <div className="border border-[var(--border)] p-6">
        <p className="text-sm">Live telemetry is temporarily unavailable.</p>
        <button
          type="button"
          onClick={() => {
            setLoading(true);
            void refresh();
          }}
          className="mt-3 text-sm text-[var(--accent)] underline underline-offset-4"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!telemetry) return null;

  const sourceState = telemetry.run.state.toLowerCase();
  const observedAt = telemetry.observedAt
    .replace("T", " ")
    .replace(/\.\d{3}Z$/, " UTC");

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-3 border-y border-[var(--border)] py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span
            className={`inline-block h-2.5 w-2.5 rounded-full ${
              sourceState === "running" ? "bg-emerald-700" : "bg-amber-700"
            }`}
            aria-hidden="true"
          />
          <span>
            W&amp;B source: <strong>{sourceState}</strong>
          </span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[var(--muted)]">
          <span>{telemetry.series.length} metrics</span>
          <time dateTime={telemetry.observedAt}>
            refreshed {observedAt}
          </time>
          {error ? <span>refresh delayed</span> : null}
        </div>
      </div>

      {groups.map(({ group, series }) => (
        <section key={group}>
          <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
            {group}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {series.map((item) => (
              <MetricCard key={item.key} series={item} />
            ))}
          </div>
        </section>
      ))}

      <p className="text-xs leading-relaxed text-[var(--muted)]">
        The page refreshes once per minute. Only finite numeric infrastructure
        metrics are published; credentials, logs, prompts, and tmux pane
        contents stay private.{" "}
        <a
          href={telemetry.run.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] underline underline-offset-4"
        >
          Open the source run ↗
        </a>
      </p>
    </div>
  );
}
