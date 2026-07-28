import type { Metadata } from "next";
import Link from "next/link";
import { FrontierPhysicsTelemetry } from "./_components/frontierphysics-telemetry";
import { fetchFrontierPhysicsTelemetry } from "@/lib/frontierphysics";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "FrontierPhysics",
  description:
    "A live, read-only view of the infrastructure running FrontierPhysics task development and evaluation.",
  alternates: { canonical: "/projects/frontierphysics" },
};

export default async function FrontierPhysicsPage() {
  const initialTelemetry = await fetchFrontierPhysicsTelemetry().catch(
    () => null,
  );

  return (
    <div className="space-y-12">
      <header>
        <Link
          href="/projects"
          className="font-mono text-xs text-[var(--muted)] hover:text-foreground"
        >
          ← Projects
        </Link>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          AI systems × specialist physics
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          FrontierPhysics
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
          FrontierPhysics builds and reviews authentic specialist physics
          tasks for evaluating frontier agents. This page is the public,
          read-only health view for the infrastructure that supports the task
          pipeline.
        </p>
      </header>

      <section aria-labelledby="live-telemetry">
        <div className="mb-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
            Live monitor
          </p>
          <h2 id="live-telemetry" className="mt-2 text-2xl font-semibold">
            Server and workload telemetry
          </h2>
        </div>
        <FrontierPhysicsTelemetry initialTelemetry={initialTelemetry} />
      </section>
    </div>
  );
}
