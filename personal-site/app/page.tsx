import Link from "next/link";
import { projects, papers } from "@/lib/content";

export default function Home() {
  const aiHighlights = projects.filter((p) => p.track === "ai").slice(0, 4);
  const ionHighlights = papers.filter((p) => p.track === "ion").slice(0, 3);

  return (
    <div className="space-y-20">
      <section>
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
          Berkeley · PhD Candidate
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
          Hi, I&apos;m Bingran.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] max-w-2xl">
          I build reliable AI systems and trapped-ion quantum experiments — two
          tracks that look different on the surface but share the same craft:
          turn complex, noisy systems into something dependable.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/projects"
            className="underline underline-offset-4 decoration-[var(--border)] hover:decoration-foreground transition"
          >
            Projects →
          </Link>
          <Link
            href="/papers"
            className="underline underline-offset-4 decoration-[var(--border)] hover:decoration-foreground transition"
          >
            Papers →
          </Link>
          <Link
            href="/blog"
            className="underline underline-offset-4 decoration-[var(--border)] hover:decoration-foreground transition"
          >
            Writing →
          </Link>
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--muted)]">
            🖥️ AI Builder
          </h2>
          <Link
            href="/projects"
            className="text-xs text-[var(--muted)] hover:text-foreground transition"
          >
            All projects →
          </Link>
        </div>
        <p className="text-base text-[var(--muted)] mb-8 max-w-2xl">
          Agent evaluation, deterministic testbeds, and applied AI systems that
          operate across existing tools.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {aiHighlights.map((p) => (
            <li
              key={p.href}
              className="rounded-lg border border-[var(--border)] p-5 hover:border-foreground transition"
            >
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="text-sm font-medium mb-1">
                  {p.emoji} {p.name}
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {p.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--muted)]">
            ⚛︎ Ion Trapper
          </h2>
          <Link
            href="/papers"
            className="text-xs text-[var(--muted)] hover:text-foreground transition"
          >
            All papers →
          </Link>
        </div>
        <p className="text-base text-[var(--muted)] mb-8 max-w-2xl">
          Integrated photonics for trapped-ion systems, ion-photon interfaces,
          multiplexed quantum networking, and 3D-printed microtrap architectures.
        </p>
        <ul className="space-y-4">
          {ionHighlights.map((p) => (
            <li key={p.href}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <p className="text-sm font-medium leading-snug group-hover:underline underline-offset-4">
                  📑 {p.title}
                </p>
                {p.blurb ? (
                  <p className="mt-1 text-sm text-[var(--muted)]">{p.blurb}</p>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
