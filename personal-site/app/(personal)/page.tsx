import Image from "next/image";
import Link from "next/link";
import {
  education,
  getAiPaperHighlights,
  getAiProjectHighlights,
} from "@/lib/content";
import { jsonLdScriptContent, profilePageJsonLd } from "@/lib/jsonld";
import {
  AtomIcon,
  GraduationCapIcon,
  LaptopIcon,
} from "@/components/bio-icons";

export default function Home() {
  const aiHighlights = getAiProjectHighlights();
  const paperHighlights = getAiPaperHighlights();

  return (
    <div className="space-y-16 sm:space-y-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScriptContent(profilePageJsonLd("/")),
        }}
      />
      <section className="grid gap-8 sm:gap-10 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <h1 className="font-display text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl">
            Bingran You
          </h1>
          <p
            lang="zh-Hans"
            className="mt-3 font-display text-4xl leading-[1.1] text-foreground/85 sm:text-5xl"
          >
            尤炳然
          </p>
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

        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-1 ring-[var(--border)] sm:h-52 sm:w-52">
          <Image
            src="/images/profile/bingran-you-portrait.jpg"
            alt="Bingran You"
            fill
            priority
            sizes="(max-width: 640px) 8rem, 13rem"
            className="object-cover object-[50%_28%]"
          />
        </div>
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
