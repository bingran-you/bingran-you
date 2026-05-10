import type { Metadata } from "next";
import { ExternalIcon } from "@/components/bio-icons";
import {
  Hairline,
  PageHeader,
  SubLabel,
} from "@/components/page-header";
import { projects } from "@/lib/content";
import { graphScriptContent, projectJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects across AI systems and trapped-ion experiments.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const ai = projects.filter((p) => p.track === "ai");
  const ion = projects.filter((p) => p.track === "ion");
  const jsonLd = graphScriptContent(projects.map(projectJsonLd));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <PageHeader
        eyebrow="index / projects"
        title="Selected work"
        meta="v2.6 · open source"
        description={
          <>
            A snapshot of the things I&apos;m lucky to work on. Most are open
            source; the rest will be when they&apos;re ready.
          </>
        }
      />

      <Section
        label="track: agents"
        accent="var(--accent-rust)"
        items={ai}
      />
      <Section
        label="track: ion-traps"
        accent="var(--accent-2)"
        items={ion}
      />
    </div>
  );
}

function Section({
  label,
  accent,
  items,
}: {
  label: string;
  accent: string;
  items: typeof projects;
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
      <ul
        style={{
          listStyle: "none",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(420px, 100%), 1fr))",
          gap: "var(--space-4)",
          marginTop: "var(--space-4)",
        }}
      >
        {items.map((p, i) => (
          <li key={p.href}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col gap-3"
              style={{
                padding: "var(--space-5)",
                minHeight: 168,
                fontFamily: "var(--font-sans)",
              }}
            >
              <div className="flex flex-col gap-1 min-w-0">
                <span
                  className="row-title"
                  style={{
                    fontSize: "19px",
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    color: "var(--ink)",
                    lineHeight: 1.2,
                    transition: "color var(--dur-fast) var(--ease)",
                    wordBreak: "break-word",
                  }}
                >
                  {p.name}
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    color: "var(--ink-3)",
                    letterSpacing: "0.04em",
                    wordBreak: "break-all",
                  }}
                >
                  {p.href.replace(/^https?:\/\//, "").replace(/^github\.com\//, "")}
                </span>
              </div>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.55,
                  color: "var(--ink-2)",
                }}
              >
                {p.description}
              </p>
              <div
                className="font-mono"
                style={{
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  fontSize: "11px",
                  color: "var(--ink-3)",
                  letterSpacing: "0.04em",
                }}
              >
                <span style={{ color: accent }}>{label}</span>
                <span style={{ color: "var(--rule-strong)" }}>·</span>
                <span>
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "var(--accent)",
                  }}
                >
                  <ExternalIcon className="h-[11px] w-[11px]" />
                  open
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
