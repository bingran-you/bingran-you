import type { Metadata } from "next";
import {
  Hairline,
  PageHeader,
  SubLabel,
} from "@/components/page-header";
import { education } from "@/lib/content";
import { jsonLdScriptContent, profilePageJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bingran You (尤炳然) — PhD candidate at UC Berkeley working on reliable AI systems and trapped-ion experiments in atomic, molecular and optical physics.",
  alternates: { canonical: "/about" },
};

const facts = [
  "I am Bingran You (Chinese: 尤炳然), a PhD candidate in Applied Science & Technology at UC Berkeley, advised in the Haeffner Lab.",
  "I build reliable AI systems — agent infrastructure, evaluation harnesses, and applied AI products that need to behave under noisy real-world conditions.",
  "I run trapped-ion experiments in atomic, molecular and optical physics — integrated photonics for individual ion addressing, ion-photon interfaces, and 3D-printed micro ion traps for scalable hardware.",
  "Both tracks share one craft: turning complex, noisy systems into something that behaves on purpose.",
];

const focusAreas = [
  {
    label: "track: agents",
    accent: "var(--accent-rust)",
    items: [
      "Agent skills and tool use, with an emphasis on evaluation that mirrors real workflows.",
      "Productivity agents that triage notifications, dispatch background work, and stay out of the way.",
      "Open-source benchmarks for measuring agent capability and safety in simulated workspaces.",
    ],
  },
  {
    label: "track: ion-traps",
    accent: "var(--accent-2)",
    items: [
      "Adjoint-optimized integrated photonic circuits for individual trapped-ion addressing.",
      "Temporally multiplexed ion-photon interfaces via fast ion-chain transport.",
      "3D-printed micro ion trap technology for scalable atomic-physics platforms.",
      "Trapped-ion Ramsey interferometry probing fundamental physics of single-ion vibrational modes.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-9)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScriptContent(profilePageJsonLd("/about")),
        }}
      />

      <PageHeader
        eyebrow="profile / about"
        title="About"
        titleZh="关于我"
        meta="v2.6 · 2026"
        description={
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {facts.map((fact) => (
              <p key={fact}>{fact}</p>
            ))}
          </div>
        }
      />

      {/* Focus — numbered phosphor-bordered rows per design system. */}
      <section>
        <div className="eyebrow" style={{ marginBottom: "var(--space-4)" }}>
          focus
        </div>
        <Hairline />
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)", marginTop: "var(--space-5)" }}>
          {focusAreas.map((area) => (
            <div key={area.label}>
              <div
                className="mono-label"
                style={{ marginBottom: "var(--space-3)", color: area.accent }}
              >
                {area.label}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {area.items.map((item, i) => (
                  <li
                    key={item}
                    className="card"
                    style={{
                      padding: "var(--space-5) var(--space-5)",
                      display: "grid",
                      gridTemplateColumns: "44px 1fr",
                      gap: "var(--space-4)",
                      alignItems: "flex-start",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    <div
                      className="num-badge"
                      style={{
                        borderColor: area.accent,
                        color: area.accent,
                        background: `color-mix(in srgb, ${area.accent} 8%, transparent)`,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span
                      style={{
                        fontSize: "16px",
                        lineHeight: 1.55,
                        color: "var(--ink)",
                        paddingTop: 6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education — same pattern as home page. */}
      <section>
        <div className="eyebrow" style={{ marginBottom: "var(--space-4)" }}>
          education
        </div>
        <Hairline />
        <ul style={{ listStyle: "none" }}>
          {education.map((item) => (
            <li
              key={`${item.institution}-${item.period}`}
              className="grid gap-3 sm:grid-cols-[160px_1fr] sm:gap-6"
              style={{
                padding: "var(--space-5) 0",
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
                <p
                  style={{
                    marginTop: 8,
                    fontSize: "15px",
                    lineHeight: 1.55,
                    color: "var(--ink-2)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact — terminal-style key/value list. */}
      <section>
        <div className="eyebrow" style={{ marginBottom: "var(--space-4)" }}>
          contact
        </div>
        <Hairline />
        <ul
          className="font-mono"
          style={{
            listStyle: "none",
            marginTop: "var(--space-4)",
            fontSize: "14px",
            color: "var(--ink)",
            lineHeight: 1.9,
          }}
        >
          <ContactRow keyLabel="email" value={
            <a href="mailto:me@bingranyou.com" className="glow-link">me@bingranyou.com</a>
          } />
          <ContactRow keyLabel="lab" value={
            <a
              href="https://ions.berkeley.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-link"
            >
              ions.berkeley.edu
            </a>
          } meta="Haeffner Lab · UC Berkeley" />
          <ContactRow keyLabel="elsewhere" value={
            <span style={{ color: "var(--ink-2)" }}>see footer</span>
          } />
        </ul>
      </section>
    </div>
  );
}

function ContactRow({
  keyLabel,
  value,
  meta,
}: {
  keyLabel: string;
  value: React.ReactNode;
  meta?: string;
}) {
  return (
    <li
      className="grid gap-3 sm:grid-cols-[140px_1fr]"
      style={{
        padding: "var(--space-3) 0",
        borderBottom: "1px solid var(--rule)",
        alignItems: "baseline",
      }}
    >
      <span style={{ color: "var(--accent)" }}>{keyLabel}</span>
      <div>
        {value}
        {meta ? (
          <span style={{ color: "var(--ink-3)", marginLeft: "var(--space-3)", fontSize: "12px" }}>
            {meta}
          </span>
        ) : null}
      </div>
    </li>
  );
}
