import Image from "next/image";
import Link from "next/link";
import { education, projects, papers } from "@/lib/content";
import { jsonLdScriptContent, profilePageJsonLd } from "@/lib/jsonld";
import {
  AtomIcon,
  GraduationCapIcon,
  LaptopIcon,
} from "@/components/bio-icons";

export default function Home() {
  const aiHighlights = projects.filter((p) => p.track === "ai").slice(0, 5);
  const paperHighlights = papers.filter((p) => p.track === "ai").slice(0, 2);

  return (
    <div className="space-y-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScriptContent(profilePageJsonLd("/")),
        }}
      />
      <section className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <h1 className="font-display text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl">
            Bingran You
          </h1>
          <ul className="mt-7 space-y-3 text-base text-[var(--muted)]">
            <li className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="inline-flex items-center gap-2">
                <LaptopIcon className="h-[18px] w-[18px] shrink-0" />
                Agentic Builder
              </span>
              <span className="inline-flex items-center gap-2">
                <AtomIcon className="h-[18px] w-[18px] shrink-0" />
                Ion Trapper
              </span>
            </li>
            <li className="flex items-start gap-2">
              <GraduationCapIcon className="h-[18px] w-[18px] shrink-0 mt-[3px]" />
              <span>
                PhD Candidate in Applied Science &amp; Technology at UC
                Berkeley
              </span>
            </li>
          </ul>
        </div>

        <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full ring-1 ring-[var(--border)] sm:h-52 sm:w-52">
          <Image
            src="/images/profile/bingran-you-portrait.jpg"
            alt="Bingran You"
            fill
            priority
            sizes="(max-width: 640px) 11rem, 13rem"
            className="object-cover object-[50%_28%]"
          />
        </div>
      </section>

      <section>
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Now building
        </h2>
        <Link
          href="/aegis"
          className="group mt-6 block overflow-hidden rounded-2xl border border-[var(--border)] transition hover:border-foreground/30"
          aria-label="Aegis — security infrastructure for the agent era"
        >
          <div
            className="relative grid gap-6 p-7 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,185,11,0.08) 0%, rgba(240,185,11,0) 55%)",
            }}
          >
            <span
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border"
              style={{
                borderColor: "rgba(240,185,11,0.4)",
                background: "rgba(240,185,11,0.12)",
              }}
              aria-hidden
            >
              <svg viewBox="0 0 32 32" width={22} height={22} aria-hidden>
                <defs>
                  <linearGradient
                    id="home-aegis-grad"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#F4D055" />
                    <stop offset="100%" stopColor="#F0B90B" />
                  </linearGradient>
                </defs>
                <path
                  d="M16 2.5l11.5 4.4v8.6c0 6.7-4.7 12.7-11.5 14-6.8-1.3-11.5-7.3-11.5-14V6.9L16 2.5z"
                  fill="none"
                  stroke="url(#home-aegis-grad)"
                  strokeWidth="1.4"
                />
                <path
                  d="M16 9v14M9.4 12.6l13.2 6.8M22.6 12.6L9.4 19.4"
                  stroke="url(#home-aegis-grad)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.78"
                />
                <circle cx="16" cy="16" r="2.4" fill="url(#home-aegis-grad)" />
              </svg>
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
                Aegis · v0.1 · solo-founded
              </p>
              <p className="mt-2 text-lg font-medium leading-snug">
                Observability for AI agents. One CLI. Audit before, watch during.
              </p>
              <p className="mt-1.5 text-sm text-[var(--muted)] leading-relaxed">
                The deal: send us a redacted log of an agent run. We send back
                a forensic report in 48 hours.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 self-start text-sm text-[var(--muted)] transition group-hover:text-foreground sm:self-center">
              Explore
              <svg
                viewBox="0 0 14 14"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="transition group-hover:translate-x-0.5"
              >
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </span>
          </div>
        </Link>
      </section>

      <section>
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Education
        </h2>
        <ul className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {education.map((item) => (
            <li
              key={`${item.institution}-${item.period}`}
              className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <span className="font-mono text-xs text-[var(--muted)] tabular-nums">
                {item.period}
              </span>
              <div>
                <p className="text-base font-medium">{item.institution}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {item.degree} · {item.location}
                </p>
                {item.metrics?.length ? (
                  <p className="mt-1 font-mono text-xs text-[var(--muted)]">
                    {item.metrics.join(" · ")}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
            Current projects
          </h2>
          <Link
            href="/projects"
            className="text-xs text-[var(--muted)] hover:text-foreground transition"
          >
            All →
          </Link>
        </div>
        <ul className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {aiHighlights.map((p) => (
            <li key={p.href}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 py-5 group"
              >
                <span className="text-base font-medium group-hover:underline underline-offset-4">
                  {p.name}
                </span>
                <span className="text-sm text-[var(--muted)] leading-relaxed">
                  {p.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
            Selected papers
          </h2>
          <Link
            href="/papers"
            className="text-xs text-[var(--muted)] hover:text-foreground transition"
          >
            All →
          </Link>
        </div>
        <ul className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {paperHighlights.map((p) => (
            <li key={p.href}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 py-5 group"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                  {p.venue}
                </span>
                <span className="text-base font-medium leading-snug group-hover:underline underline-offset-4">
                  {p.title}
                </span>
                {p.blurb ? (
                  <span className="text-sm text-[var(--muted)] leading-relaxed">
                    {p.blurb}
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
