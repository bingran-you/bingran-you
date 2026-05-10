import Image from "next/image";
import Link from "next/link";
import {
  AtomIcon,
  ExternalIcon,
  GraduationCapIcon,
  LaptopIcon,
} from "@/components/bio-icons";
import { IonChain } from "@/components/ion-chain";
import { Hairline, SectionHead } from "@/components/page-header";
import {
  education,
  getAiPaperHighlights,
  getAiProjectHighlights,
} from "@/lib/content";
import { jsonLdScriptContent, profilePageJsonLd } from "@/lib/jsonld";

export default function Home() {
  const aiHighlights = getAiProjectHighlights();
  const paperHighlights = getAiPaperHighlights();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-9)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScriptContent(profilePageJsonLd("/")),
        }}
      />

      {/* Hero — paired EN+ZH display serif, ion-chain motif, dual-track tags. */}
      <section className="grid gap-10 sm:gap-12 sm:grid-cols-[1.2fr_1fr] sm:items-center">
        <div>
          <div className="eyebrow" style={{ marginBottom: "var(--space-5)" }}>
            ~/bingran · phd candidate · agent builder
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(56px, 8vw, 96px)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
              fontWeight: 600,
              color: "var(--ink)",
            }}
          >
            Bingran You
          </h1>
          <p
            lang="zh-Hans"
            className="font-display"
            style={{
              fontSize: "clamp(32px, 4.4vw, 56px)",
              lineHeight: 1.05,
              fontWeight: 500,
              color: "var(--ink)",
              marginTop: "var(--space-3)",
            }}
          >
            尤炳然
          </p>

          <div style={{ marginTop: "var(--space-7)" }}>
            <IonChain count={5} size={14} gap={32} excited={2} />
          </div>

          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-5)",
              marginTop: "var(--space-7)",
              listStyle: "none",
              fontFamily: "var(--font-sans)",
            }}
          >
            <li
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: "17px",
                color: "var(--ink)",
              }}
            >
              <span style={{ color: "var(--accent-rust)" }}>
                <LaptopIcon className="h-[18px] w-[18px]" />
              </span>
              Agentic Builder
            </li>
            <li
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: "17px",
                color: "var(--ink)",
              }}
            >
              <span style={{ color: "var(--accent-2)" }}>
                <AtomIcon className="h-[18px] w-[18px]" />
              </span>
              Ion Trapper
            </li>
          </ul>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              marginTop: "var(--space-4)",
              fontSize: "17px",
              color: "var(--ink-2)",
              fontFamily: "var(--font-sans)",
            }}
          >
            <span style={{ color: "var(--ink-3)", paddingTop: 3 }}>
              <GraduationCapIcon className="h-[16px] w-[16px]" />
            </span>
            <span>
              PhD Candidate in Applied Science &amp; Technology · UC Berkeley
            </span>
          </div>

          <p
            style={{
              marginTop: "var(--space-6)",
              fontSize: "19px",
              lineHeight: "var(--leading-normal)",
              color: "var(--ink-2)",
              maxWidth: "560px",
              fontFamily: "var(--font-sans)",
            }}
          >
            I build reliable AI systems and trapped-ion quantum experiments.
            The work runs on two clocks: long lab cycles measured in
            vacuum-pump hours, and product cycles measured in days between
            commits.
          </p>
        </div>

        <div
          className="relative"
          style={{
            aspectRatio: "1 / 1",
            width: "100%",
            maxWidth: 380,
            marginLeft: "auto",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow:
              "inset 0 0 0 1px rgba(232, 234, 236, 0.08), 0 0 60px rgba(74, 222, 128, 0.05)",
            border: "1px solid var(--rule-strong)",
          }}
        >
          <Image
            src="/images/profile/bingran-you-portrait.jpg"
            alt="Bingran You"
            fill
            priority
            sizes="(max-width: 640px) 60vw, 380px"
            className="object-cover object-[50%_28%]"
          />
        </div>
      </section>

      {/* Education — `›` eyebrow header + rule + 160px when col + serif title. */}
      <section>
        <SectionHead eyebrow="education" meta="2018 — present" />
        <ul style={{ listStyle: "none" }}>
          {education.map((item, i) => (
            <li
              key={`${item.institution}-${item.period}`}
              className="grid gap-3 sm:grid-cols-[160px_1fr] sm:gap-6"
              style={{
                padding: "var(--space-5) 0",
                borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              <span
                className="font-mono tabular-nums"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-3)",
                  paddingTop: 4,
                  letterSpacing: "var(--tracking-mono)",
                }}
              >
                {item.period}
              </span>
              <div>
                <p
                  className="font-display"
                  style={{
                    fontSize: "19px",
                    fontWeight: 600,
                    color: "var(--ink)",
                  }}
                >
                  {item.institution}
                </p>
                <p
                  className="font-mono"
                  style={{
                    fontSize: "13px",
                    color: "var(--ink-2)",
                    marginTop: 6,
                    letterSpacing: "var(--tracking-mono)",
                  }}
                >
                  {item.degree} · {item.location}
                </p>
                {item.metrics?.length ? (
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "13px",
                      color: "var(--ink-3)",
                      marginTop: 2,
                      letterSpacing: "var(--tracking-mono)",
                    }}
                  >
                    {item.metrics.join(" · ")}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Selected work — 2-col gradient project cards. */}
      <section>
        <SectionHead
          eyebrow="selected work"
          meta="ai · open source"
          link={{ href: "/projects", label: "All →" }}
        />
        <ul
          style={{
            listStyle: "none",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(420px, 100%), 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {aiHighlights.map((p, i) => (
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
                  <span style={{ color: "var(--accent-rust)" }}>track:agents</span>
                  <span style={{ color: "var(--rule-strong)" }}>·</span>
                  <span>
                    {String(i + 1).padStart(2, "0")} / {String(aiHighlights.length).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: "var(--accent)",
                      transition: "color var(--dur-fast) var(--ease)",
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

      {/* Selected papers — academic convention. Year col + Inter title white +
          author list with sup affiliations + venue line with italic name +
          phosphor DOI. */}
      <section>
        <SectionHead
          eyebrow="selected papers"
          meta="v2.5 · academic convention"
          link={{ href: "/papers", label: "All →" }}
        />
        <ul style={{ listStyle: "none" }}>
          {paperHighlights.map((p, i) => (
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
                className="row-hover group grid gap-4 sm:grid-cols-[60px_1fr_auto] sm:items-baseline"
                style={{
                  padding: "var(--space-5) var(--space-3)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: "13px",
                    color: "var(--ink-3)",
                    letterSpacing: "var(--tracking-mono)",
                  }}
                >
                  2026
                </span>
                <div>
                  <span
                    className="row-title block"
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      lineHeight: 1.35,
                      letterSpacing: "-0.01em",
                      color: "var(--ink)",
                      textWrap: "balance",
                      transition: "color var(--dur-fast) var(--ease)",
                    }}
                  >
                    {p.title}
                  </span>
                  <div
                    className="font-mono"
                    style={{
                      marginTop: 8,
                      fontSize: "12px",
                      color: "var(--ink-3)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    <span className="venue-name" style={{ fontStyle: "italic" }}>
                      {p.venue}
                    </span>{" "}
                    <span className="doi">
                      {p.href.replace(/^https?:\/\//, "")}
                    </span>
                  </div>
                </div>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    color: "var(--ink-3)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    transition: "color var(--dur-fast) var(--ease)",
                  }}
                >
                  Read →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Now — three-stat strip pulled from "How I Build" data. Mono labels,
          serif numbers, ink-2 description. Communicates live state. */}
      <section>
        <SectionHead eyebrow="now" meta="last 7 days · live" />
        <Hairline />
        <div
          className="grid gap-4 sm:grid-cols-3"
          style={{ marginTop: "var(--space-5)" }}
        >
          <NowCard
            label="Currently shipping"
            stat="first-tree"
            desc="Git-native context layer for AI agents. Pre-1.0; iterating with early teams."
          />
          <NowCard
            label="In the lab"
            stat="3D-printed traps"
            desc="Co-author on a Nature paper this year. Now: scaling and integration."
          />
          <NowCard
            label="On my desk"
            stat="2.61B tokens"
            statColor="var(--accent)"
            desc="Codex + GPT-5.4 last 7 days. Most of it is agent evaluation runs."
          />
        </div>
      </section>
    </div>
  );
}

function NowCard({
  label,
  stat,
  desc,
  statColor,
}: {
  label: string;
  stat: string;
  desc: string;
  statColor?: string;
}) {
  return (
    <div
      className="card"
      style={{
        padding: "var(--space-5)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        minHeight: 160,
      }}
    >
      <div className="mono-label">{label}</div>
      <div
        className="font-display"
        style={{
          fontSize: "32px",
          fontWeight: 600,
          letterSpacing: "-0.015em",
          lineHeight: 1.1,
          color: statColor ?? "var(--ink)",
        }}
      >
        {stat}
      </div>
      <p
        style={{
          marginTop: "auto",
          fontSize: "14px",
          lineHeight: 1.55,
          color: "var(--ink-2)",
          fontFamily: "var(--font-sans)",
        }}
      >
        {desc}
      </p>
    </div>
  );
}
