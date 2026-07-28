import { describe, expect, it, vi } from "vitest";
import {
  fetchFrontierPhysicsTelemetry,
  FrontierPhysicsTelemetryError,
  sanitizeFrontierPhysicsHistory,
} from "./frontierphysics";

describe("sanitizeFrontierPhysicsHistory", () => {
  it("keeps only allow-listed finite numeric telemetry", () => {
    const series = sanitizeFrontierPhysicsHistory([
      JSON.stringify({
        _timestamp: 1_700_000_000,
        "vm/cpu_percent": 42.5,
        "workload/tmux_panes": 12,
        secret: 99,
        "vm/memory_percent": "73",
      }),
      {
        _timestamp: 1_700_000_060,
        "vm/cpu_percent": Number.NaN,
        "workload/tmux_panes": 13,
      },
    ]);

    expect(series).toEqual([
      {
        key: "vm/cpu_percent",
        points: [{ at: "2023-11-14T22:13:20.000Z", value: 42.5 }],
      },
      {
        key: "workload/tmux_panes",
        points: [
          { at: "2023-11-14T22:13:20.000Z", value: 12 },
          { at: "2023-11-14T22:14:20.000Z", value: 13 },
        ],
      },
    ]);
  });

  it("returns no series for malformed history", () => {
    expect(sanitizeFrontierPhysicsHistory(null)).toEqual([]);
    expect(sanitizeFrontierPhysicsHistory(["not-json"])).toEqual([]);
  });
});

describe("fetchFrontierPhysicsTelemetry", () => {
  it("uses server credentials without returning them to the client", async () => {
    const fetchImpl = vi.fn(
      async (_input: RequestInfo | URL, _init?: RequestInit) => {
        void _input;
        void _init;
        return new Response(
          JSON.stringify({
            data: {
              project: {
                run: {
                  name: "frontierphysics-e128-01-live",
                  displayName: "FrontierPhysics live",
                  state: "running",
                  createdAt: "2026-07-25T00:00:00Z",
                  history: [
                    JSON.stringify({
                      _timestamp: 1_700_000_000,
                      "vm/cpu_percent": 20,
                    }),
                  ],
                },
              },
            },
          }),
          { status: 200 },
        );
      },
    );

    const result = await fetchFrontierPhysicsTelemetry({
      apiKey: "test-secret",
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });

    expect(fetchImpl).toHaveBeenCalledOnce();
    const request = fetchImpl.mock.calls[0]?.[1];
    expect(request?.headers).toMatchObject({
      Authorization: expect.stringMatching(/^Basic /),
    });
    expect(JSON.stringify(result)).not.toContain("test-secret");
    expect(result.run.state).toBe("running");
    expect(result.series[0]?.points[0]?.value).toBe(20);
  });

  it("uses a generic error for missing credentials and upstream failures", async () => {
    await expect(
      fetchFrontierPhysicsTelemetry({ apiKey: "" }),
    ).rejects.toBeInstanceOf(FrontierPhysicsTelemetryError);

    await expect(
      fetchFrontierPhysicsTelemetry({
        apiKey: "test-secret",
        fetchImpl: vi.fn(async () => new Response("denied", { status: 403 })),
      }),
    ).rejects.toThrow("temporarily unavailable");
  });
});
