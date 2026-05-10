import type { Metadata } from "next";
import { Hairline, PageHeader } from "@/components/page-header";
import { papers } from "@/lib/content";
import { graphScriptContent, paperJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Papers",
  description: "Selected publications across AI agents and trapped-ion physics.",
  alternates: { canonical: "/papers" },
};

// Pull a year out of the venue string when no explicit year is set in data.
// Fallback to the venue itself for things like "arXiv".
function inferYearFromHref(href: string, fallback = "·") {
  const m = href.match(/(20\d{2})/);
  return m ? m[1] : fallback;
}

export default function PapersPage() {
  const ai = papers.filter((p) => p.track === "ai");
  const ion = papers.filter((p) => p.track === "ion");
  const jsonLd = graphScriptContent(papers.map(paperJsonLd));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <PageHeader
        eyebrow="components / section header · paper listing"
        title="Authors per house style"
        meta="v2.5 · academic convention"
        description={
          <>
            Selected publications. Italic venue, phosphor DOI, year on the
            left. See{" "}
            <a
              className="glow-link"
              href="https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>{" "}
            for the full list.
          </>
        }
      />

      <Section
        label="track: agents"
        accent="var(--accent-rust)"
        items={ai}
        inferYearFromHref={inferYearFromHref}
      />
      <Section
        label="track: ion-traps"
        accent="var(--accent-2)"
        items={ion}
        inferYearFromHref={inferYearFromHref}
      />
    </div>
  );
}

function Section({
  label,
  accent,
  items,
  inferYearFromHref: getYear,
}: {
  label: string;
  accent: string;
  items: typeof papers;
  inferYearFromHref: (href: string) => string;
}) {
  return (
    <section>
      <div
        className="mono-label"
        style={{
          marginBottom: "var(--space-4)",
          color: accent,
        }}
      >
        {label}
      </div>
      <Hairline />
      <ul style={{ listStyle: "none" }}>
        {items.map((p, i) => {
          const isArxiv = /arxiv/i.test(p.venue);
          const isPRL = /Phys\.\s*Rev\.\s*Lett/i.test(p.venue);
          const year = getYear(p.href);
          const doiPretty = p.href
            .replace(/^https?:\/\//, "")
            .replace(/^www\./, "");
          return (
            <li
              key={p.href}
              style={{
                borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="row-hover group grid gap-4 sm:grid-cols-[60px_1fr] sm:items-baseline"
                style={{
                  padding: "var(--space-5) var(--space-3)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                <span
                  className="font-mono tabular-nums"
                  style={{
                    fontSize: "13px",
                    color: "var(--ink-3)",
                    letterSpacing: "var(--tracking-mono)",
                  }}
                >
                  {year}
                </span>
                <div>
                  <h2
                    className="row-title"
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      lineHeight: 1.35,
                      letterSpacing: "-0.01em",
                      color: "var(--ink)",
                      textWrap: "balance",
                      transition: "color var(--dur-fast) var(--ease)",
                      margin: 0,
                    }}
                  >
                    {p.title}
                  </h2>
                  {p.blurb ? (
                    <p
                      style={{
                        marginTop: 8,
                        fontSize: "14px",
                        lineHeight: 1.55,
                        color: "var(--ink-2)",
                      }}
                    >
                      {p.blurb}
                    </p>
                  ) : null}
                  <div
                    className="font-mono"
                    style={{
                      marginTop: 10,
                      fontSize: "12px",
                      color: "var(--ink-3)",
                      letterSpacing: "0.02em",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      gap: "10px",
                    }}
                  >
                    <span
                      className="venue-name"
                      style={{ fontStyle: "italic", fontSize: "13px" }}
                    >
                      {p.venue}
                    </span>
                    {isArxiv ? (
                      <span style={{ color: "var(--ink-2)" }}>
                        [{p.track === "ai" ? "cs.AI" : "quant-ph"}]
                      </span>
                    ) : null}
                    {isPRL ? (
                      <span style={{ color: "var(--ink-2)" }}>
                        130, 200201
                      </span>
                    ) : null}
                    <span style={{ color: "var(--rule-strong)" }}>·</span>
                    <span className="doi">{doiPretty}</span>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
