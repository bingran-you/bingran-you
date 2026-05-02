import Image from "next/image";
import Link from "next/link";
import { education, projects, papers } from "@/lib/content";

export default function Home() {
  const aiHighlights = projects.filter((p) => p.track === "ai").slice(0, 4);
  const ionHighlights = papers.filter((p) => p.track === "ion").slice(0, 3);
  const fieldNotes = [
    {
      label: "AI Builder",
      value: "Agent systems",
      detail:
        "SkillsBench, first-tree, and dependable automation across real tools.",
    },
    {
      label: "Ion Trapper",
      value: "Integrated photonics",
      detail:
        "Ion-photon interfaces, multiplexed networks, and 3D-printed microtraps.",
    },
    {
      label: "Operating mode",
      value: "Reliability first",
      detail:
        "I like systems that stay calm under noise, drift, and real-world complexity.",
    },
  ];
  const portraitTags = ["Pacific light", "Berkeley-based", "Builder mode"];

  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white/70 px-6 py-8 shadow-[0_24px_80px_-48px_rgba(15,49,84,0.45)] backdrop-blur sm:px-8 sm:py-10 dark:bg-slate-950/70">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-400/15" />
        <div className="pointer-events-none absolute -right-12 top-20 h-56 w-56 rounded-full bg-amber-200/45 blur-3xl dark:bg-blue-500/10" />
        <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.38em] text-[var(--muted)]">
              Berkeley · PhD Candidate · AI × Quantum
            </p>
            <h1 className="mt-5 max-w-2xl font-display text-5xl leading-[0.94] tracking-[-0.05em] text-pretty sm:text-6xl md:text-[4.45rem]">
              Bingran <span className="text-[var(--accent)]">You</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] text-pretty">
              I build reliable AI systems and trapped-ion quantum experiments.
              Different materials, same craft: turning complex, noisy systems
              into something that behaves on purpose.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-white transition hover:bg-[var(--accent-strong)]"
              >
                View projects
              </Link>
              <Link
                href="/papers"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2.5 text-foreground transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                See papers
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2.5 text-[var(--muted)] transition hover:border-foreground hover:text-foreground"
              >
                Read notes
              </Link>
            </div>
            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              {fieldNotes.map((note) => (
                <div
                  key={note.label}
                  className="rounded-[1.5rem] border border-[var(--border)] bg-white/75 p-4 backdrop-blur dark:bg-white/[0.04]"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                    {note.label}
                  </dt>
                  <dd className="mt-3 text-base font-medium text-foreground">
                    {note.value}
                  </dd>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {note.detail}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:pb-8 lg:pl-3">
            <div className="absolute inset-x-4 inset-y-6 rounded-[2rem] bg-sky-900/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-slate-950 shadow-[0_28px_80px_-32px_rgba(15,49,84,0.55)]">
              <div className="relative aspect-[0.92]">
                <Image
                  src="/images/profile/bingran-you-portrait.jpg"
                  alt="Bingran You standing by the ocean in a black T-shirt."
                  fill
                  preload
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[50%_38%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/12 to-white/10" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-white/60">
                  Field Notes
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {portraitTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/80 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-3 right-3 hidden rounded-[1.5rem] border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur sm:block dark:border-white/10 dark:bg-slate-950/85">
              <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--muted)]">
                Currently building
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground text-pretty">
                first-tree skills, DoWhiz workflows, and quantum networking
                experiments that have to survive real-world noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[var(--border)] bg-white/70 p-6 shadow-[0_24px_80px_-54px_rgba(15,49,84,0.35)] backdrop-blur sm:p-8 dark:bg-slate-950/70">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-[var(--muted)]">
              Education
            </p>
            <h2 className="font-display text-4xl leading-none tracking-[-0.04em] sm:text-[3.2rem]">
              Formal training in physics, computation, and systems thinking.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-[var(--muted)] text-pretty">
              The academic path behind the builder: physics-first training,
              computing fluency, and a habit of treating rigor as a design
              constraint rather than a slogan.
            </p>
          </div>

          <div className="space-y-4">
            {education.map((item) => (
              <article
                key={`${item.institution}-${item.period}`}
                className="rounded-[1.6rem] border border-[var(--border)] bg-white/85 p-5 shadow-[0_18px_40px_-34px_rgba(15,49,84,0.28)] dark:bg-white/[0.04] sm:p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">
                      {item.period}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                      {item.institution}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {item.degree} · {item.location}
                    </p>
                  </div>
                  {item.metrics?.length ? (
                    <div className="flex flex-wrap gap-2 sm:max-w-[15rem] sm:justify-end">
                      {item.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-full border border-[var(--border)] bg-[var(--background)]/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--accent)] dark:bg-white/[0.03]"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--muted)] text-pretty sm:text-[15px]">
                  {item.summary}
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-[1.15rem] border border-[var(--border)] bg-white/70 px-4 py-3 text-sm leading-relaxed text-[var(--muted)] dark:bg-white/[0.03]"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[var(--border)] bg-white/70 p-6 shadow-[0_24px_80px_-54px_rgba(15,49,84,0.35)] backdrop-blur sm:p-8 dark:bg-slate-950/70">
        <div className="flex items-baseline justify-between gap-4 mb-6">
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
        <p className="text-base text-[var(--muted)] mb-8 max-w-2xl leading-relaxed text-pretty">
          Agent evaluation, deterministic testbeds, and applied AI systems that
          operate across existing tools.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {aiHighlights.map((p) => (
            <li
              key={p.href}
              className="rounded-[1.5rem] border border-[var(--border)] bg-white/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_18px_40px_-30px_rgba(15,49,84,0.45)] dark:bg-white/[0.04]"
            >
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="text-sm font-medium mb-1">
                  {p.emoji} {p.name}
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed text-pretty">
                  {p.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative overflow-hidden rounded-[2rem] border border-slate-900/80 bg-slate-950 p-6 shadow-[0_28px_90px_-46px_rgba(6,16,31,0.8)] sm:p-8">
        <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-950/30 to-transparent" />
        <div className="relative">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/65">
              ⚛︎ Ion Trapper
            </h2>
            <Link
              href="/papers"
              className="text-xs text-white/60 hover:text-white transition"
            >
              All papers →
            </Link>
          </div>
          <p className="text-base text-white/70 mb-8 max-w-2xl leading-relaxed text-pretty">
            Integrated photonics for trapped-ion systems, ion-photon
            interfaces, multiplexed quantum networking, and 3D-printed
            microtrap architectures.
          </p>
          <ul className="space-y-4">
            {ionHighlights.map((p) => (
              <li
                key={p.href}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <p className="text-base font-medium leading-snug text-white group-hover:underline underline-offset-4">
                    📑 {p.title}
                  </p>
                  {p.blurb ? (
                    <p className="mt-2 text-sm leading-relaxed text-white/65 text-pretty">
                      {p.blurb}
                    </p>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
