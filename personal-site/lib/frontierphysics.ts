const WANDB_GRAPHQL_URL = "https://api.wandb.ai/graphql";

export const FRONTIERPHYSICS_WANDB = {
  entity: "benchflow-ai",
  project: "frontierphysics-infrastructure",
  run: "frontierphysics-e128-01-live",
  url: "https://wandb.ai/benchflow-ai/frontierphysics-infrastructure/runs/frontierphysics-e128-01-live",
} as const;

export const FRONTIERPHYSICS_METRICS = [
  "service/dashboard_up",
  "service/model_proxy_up",
  "service/orchestrator_up",
  "vm/cpu_percent",
  "vm/disk_free_gib",
  "vm/disk_read_mib_s",
  "vm/disk_used_percent",
  "vm/disk_write_mib_s",
  "vm/load_15m",
  "vm/load_1m",
  "vm/load_1m_per_cpu",
  "vm/load_5m",
  "vm/memory_available_gib",
  "vm/memory_percent",
  "vm/memory_used_gib",
  "vm/network_rx_mib_s",
  "vm/network_tx_mib_s",
  "vm/process_count",
  "vm/swap_percent",
  "vm/uptime_hours",
  "workload/bench_eval_processes",
  "workload/codex_exec_sessions",
  "workload/codex_sessions",
  "workload/daytona_eval_processes",
  "workload/docker_containers",
  "workload/docker_eval_processes",
  "workload/frontierphysics_runners",
  "workload/tmux_panes",
] as const;

const FRONTIERPHYSICS_METRIC_SET = new Set<string>(
  FRONTIERPHYSICS_METRICS,
);
const MAX_SAMPLES = 360;

type WandbHistoryRow = Record<string, unknown>;

type WandbGraphqlResponse = {
  data?: {
    project?: {
      run?: {
        name?: unknown;
        displayName?: unknown;
        state?: unknown;
        createdAt?: unknown;
        history?: unknown;
        summaryMetrics?: unknown;
      } | null;
    } | null;
  };
  errors?: unknown;
};

export type FrontierPhysicsPoint = {
  at: string | null;
  value: number;
};

export type FrontierPhysicsSeries = {
  key: string;
  points: FrontierPhysicsPoint[];
};

export type FrontierPhysicsTelemetry = {
  observedAt: string;
  latestAt: string | null;
  run: {
    name: string;
    displayName: string;
    state: string;
    createdAt: string | null;
    url: string;
  };
  series: FrontierPhysicsSeries[];
};

export class FrontierPhysicsTelemetryError extends Error {
  constructor() {
    super("FrontierPhysics telemetry is temporarily unavailable");
    this.name = "FrontierPhysicsTelemetryError";
  }
}

function parseHistoryRow(value: unknown): WandbHistoryRow | null {
  if (typeof value === "string") {
    try {
      const parsed: unknown = JSON.parse(value);
      return parsed !== null && typeof parsed === "object"
        ? (parsed as WandbHistoryRow)
        : null;
    } catch {
      return null;
    }
  }

  return value !== null && typeof value === "object"
    ? (value as WandbHistoryRow)
    : null;
}

function pointTimestamp(row: WandbHistoryRow): string | null {
  const raw = row._timestamp;
  if (typeof raw !== "number" || !Number.isFinite(raw)) {
    return null;
  }

  const milliseconds = raw > 10_000_000_000 ? raw : raw * 1000;
  const parsed = new Date(milliseconds);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
}

export function sanitizeFrontierPhysicsHistory(
  history: unknown,
): FrontierPhysicsSeries[] {
  if (!Array.isArray(history)) {
    return [];
  }

  const pointsByKey = new Map<string, FrontierPhysicsPoint[]>(
    FRONTIERPHYSICS_METRICS.map((key) => [key, []]),
  );

  for (const rawRow of history.slice(-MAX_SAMPLES)) {
    const row = parseHistoryRow(rawRow);
    if (!row) continue;

    const at = pointTimestamp(row);
    for (const [key, rawValue] of Object.entries(row)) {
      if (
        !FRONTIERPHYSICS_METRIC_SET.has(key) ||
        typeof rawValue !== "number" ||
        !Number.isFinite(rawValue)
      ) {
        continue;
      }
      pointsByKey.get(key)?.push({ at, value: rawValue });
    }
  }

  return FRONTIERPHYSICS_METRICS.flatMap((key) => {
    const points = pointsByKey.get(key) ?? [];
    return points.length > 0 ? [{ key, points }] : [];
  });
}

export function appendFrontierPhysicsSummary(
  series: FrontierPhysicsSeries[],
  summary: unknown,
): FrontierPhysicsSeries[] {
  const row = parseHistoryRow(summary);
  if (!row) return series;

  const at = pointTimestamp(row);
  if (!at) return series;

  const pointsByKey = new Map(
    series.map(({ key, points }) => [key, [...points]]),
  );

  for (const key of FRONTIERPHYSICS_METRICS) {
    const value = row[key];
    if (typeof value !== "number" || !Number.isFinite(value)) continue;

    const points = pointsByKey.get(key) ?? [];
    const existingIndex = points.findIndex((point) => point.at === at);
    if (existingIndex >= 0) {
      points[existingIndex] = { at, value };
    } else {
      const lastAt = points.at(-1)?.at;
      if (lastAt && Date.parse(lastAt) >= Date.parse(at)) continue;
      points.push({ at, value });
    }
    pointsByKey.set(key, points.slice(-MAX_SAMPLES));
  }

  return FRONTIERPHYSICS_METRICS.flatMap((key) => {
    const points = pointsByKey.get(key) ?? [];
    return points.length > 0 ? [{ key, points }] : [];
  });
}

function latestSeriesTimestamp(series: FrontierPhysicsSeries[]): string | null {
  let latest: string | null = null;
  for (const { points } of series) {
    for (const { at } of points) {
      if (at && (!latest || Date.parse(at) > Date.parse(latest))) {
        latest = at;
      }
    }
  }
  return latest;
}

function asString(value: unknown, fallback: string): string {
  return typeof value === "string" && value.length > 0 ? value : fallback;
}

function asOptionalString(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

export async function fetchFrontierPhysicsTelemetry({
  apiKey = process.env.WANDB_API_KEY,
  fetchImpl = fetch,
}: {
  apiKey?: string;
  fetchImpl?: typeof fetch;
} = {}): Promise<FrontierPhysicsTelemetry> {
  if (!apiKey) {
    throw new FrontierPhysicsTelemetryError();
  }

  const query = `
    query FrontierPhysicsRun(
      $entity: String!
      $project: String!
      $name: String!
      $samples: Int
    ) {
      project(name: $project, entityName: $entity) {
        run(name: $name) {
          name
          displayName
          state
          createdAt
          history(samples: $samples)
          summaryMetrics
        }
      }
    }
  `;

  try {
    const response = await fetchImpl(WANDB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          entity: FRONTIERPHYSICS_WANDB.entity,
          project: FRONTIERPHYSICS_WANDB.project,
          name: FRONTIERPHYSICS_WANDB.run,
          samples: MAX_SAMPLES,
        },
      }),
      signal: AbortSignal.timeout(15_000),
      next: { revalidate: 60 },
    } as RequestInit & { next: { revalidate: number } });

    if (!response.ok) {
      throw new FrontierPhysicsTelemetryError();
    }

    const payload = (await response.json()) as WandbGraphqlResponse;
    const run = payload.data?.project?.run;
    if (!run || payload.errors) {
      throw new FrontierPhysicsTelemetryError();
    }

    const series = appendFrontierPhysicsSummary(
      sanitizeFrontierPhysicsHistory(run.history),
      run.summaryMetrics,
    );
    if (series.length === 0) {
      throw new FrontierPhysicsTelemetryError();
    }

    return {
      observedAt: new Date().toISOString(),
      latestAt: latestSeriesTimestamp(series),
      run: {
        name: asString(run.name, FRONTIERPHYSICS_WANDB.run),
        displayName: asString(run.displayName, FRONTIERPHYSICS_WANDB.run),
        state: asString(run.state, "unknown"),
        createdAt: asOptionalString(run.createdAt),
        url: FRONTIERPHYSICS_WANDB.url,
      },
      series,
    };
  } catch {
    throw new FrontierPhysicsTelemetryError();
  }
}
