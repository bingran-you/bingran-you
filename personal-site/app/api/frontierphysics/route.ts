import { NextResponse } from "next/server";
import { fetchFrontierPhysicsTelemetry } from "@/lib/frontierphysics";

export const runtime = "nodejs";

export async function GET() {
  try {
    const telemetry = await fetchFrontierPhysicsTelemetry();
    return NextResponse.json(telemetry, {
      headers: {
        "Cache-Control":
          "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Telemetry temporarily unavailable" },
      {
        status: 503,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }
}
