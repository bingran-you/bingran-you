import type { Metadata } from "next";
import { papers } from "@/lib/content";
import { graphScriptContent, paperJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Papers",
  description: "Selected publications across AI agents and trapped-ion physics.",
  alternates: { canonical: "/papers" },
};

export default function PapersPage() {
  const ai = papers.filter((p) => p.track === "ai");
  const ion = papers.filter((p) => p.track === "ion");
  const jsonLd = graphScriptContent(papers.map(paperJsonLd));

  return (
    <div className="space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Papers</h1>
        <p className="mt-3 text-base text-[var(--muted)] max-w-2xl">
          Selected publications. See{" "}
          <a
            className="underline underline-offset-4"
            href="https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>{" "}
          for the full list.
        </p>
      </header>

      <Section title="AI Builder" items={ai} />
      <Section title="Ion Trapper" items={ion} />
    </div>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: typeof papers;
}) {
  return (
    <section>
      <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] mb-6">
        {title}
      </h2>
      <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {items.map((p) => (
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
  );
}
