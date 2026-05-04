import type { Metadata } from "next";
import { PageHero } from "../_components/page-hero";
import { CTASection } from "../_components/cta";
import { CheckIcon } from "../_components/icons";

export const metadata: Metadata = {
  title: "SecureBench · Adversarial benchmark for AI agents",
  description:
    "SecureBench is a versioned suite of red-team scenarios for AI agents — tool poisoning, indirect injection, exfiltration, escalation. Verifiable scores, not vibes.",
  alternates: { canonical: "/aegis/securebench" },
};

const SUITES = [
  {
    code: "INJ",
    title: "Indirect prompt injection",
    count: 64,
    description:
      "Adversarial content embedded in pages, READMEs, comments, code, browser DOM, transcripts, emails. Confirms the agent ignores instructions in untrusted data.",
  },
  {
    code: "TLP",
    title: "Tool poisoning",
    count: 38,
    description:
      "Typo-squatted MCP servers, malicious npm/pip packages, supply-chain swaps, mid-flight tool re-exports. Confirms attestation gates work end to end.",
  },
  {
    code: "MEM",
    title: "Memory exfiltration & poisoning",
    count: 42,
    description:
      "Long-horizon attacks where the adversary writes to the agent&rsquo;s memory and waits for retrieval. Confirms Cleanse detects and rolls back.",
  },
  {
    code: "ESC",
    title: "Privilege escalation",
    count: 28,
    description:
      "Social engineering of the operator, lateral access through tool chains, sandbox escape attempts. Confirms Sentinel contains.",
  },
  {
    code: "EXF",
    title: "Data exfiltration paths",
    count: 35,
    description:
      "Side channels — DNS, fetch markers, vector embeddings, log scraping. Confirms egress policy enforcement and evidence emission.",
  },
];

const SCORE_DIMENSIONS = [
  {
    label: "Detection",
    body: "Did Aegis flag the malicious event?",
    weight: "40%",
  },
  {
    label: "Containment",
    body: "Did the agent stop before user-visible harm?",
    weight: "30%",
  },
  {
    label: "Recovery",
    body: "Did Cleanse / Sentinel restore a clean state?",
    weight: "20%",
  },
  {
    label: "Latency",
    body: "Did supervision stay under the framework SLA?",
    weight: "10%",
  },
];

const FRAMEWORKS = [
  { name: "OpenAI Agents SDK", score: "—", note: "Pending v0.1 run" },
  { name: "Anthropic Claude Code", score: "—", note: "Pending v0.1 run" },
  { name: "Codex CLI", score: "—", note: "Pending v0.1 run" },
  { name: "LangGraph", score: "—", note: "Pending v0.1 run" },
  { name: "CrewAI", score: "—", note: "Pending v0.1 run" },
  { name: "AutoGen", score: "—", note: "Pending v0.1 run" },
];

export default function SecureBenchPage() {
  return (
    <>
      <PageHero
        eyebrow="Aegis · SecureBench"
        title={
          <>
            An <span className="ag-text-amber italic">adversarial benchmark</span> agents must pass before they ship.
          </>
        }
        lead={
          <>
            SecureBench is a versioned, deterministic suite of red-team
            scenarios for AI agents. Run it against your stack and receive a
            verifiable score — not a screenshot, not a vibes audit.
          </>
        }
        primary={{ href: "/aegis/waitlist", label: "Apply to run SecureBench" }}
        secondary={{ href: "/aegis/research", label: "Read the methodology" }}
      />

      <section className="ag-section">
        <div className="ag-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="ag-eyebrow">Premise</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                If a finding can&rsquo;t be reproduced, it isn&rsquo;t a finding.
              </h2>
              <p
                className="mt-6 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Existing &ldquo;agent safety&rdquo; reports are screenshots
                from one-off runs of a moving target. SecureBench fixes this:
                deterministic environments, versioned scenarios, signed
                results. Re-run it on day 90 and you should get the same score
                — or know exactly what changed.
              </p>
              <ul
                className="mt-8 space-y-3 text-sm"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                {[
                  "Deterministic test envs (smolclaw-style sandboxes)",
                  "Sealed scenario inputs, replayable outputs",
                  "Signed score cards per framework version",
                  "Public regression tracker — drift is detectable",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <CheckIcon size={14} className="mt-[3px] shrink-0 ag-text-amber" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ag-card p-8">
              <p className="ag-eyebrow">Score formula</p>
              <ol className="mt-6 space-y-3">
                {SCORE_DIMENSIONS.map((d) => (
                  <li
                    key={d.label}
                    className="grid grid-cols-[5rem_1fr_3.5rem] items-baseline gap-3 border-b pb-3"
                    style={{ borderColor: "var(--ag-line)" }}
                  >
                    <span
                      className="ag-mono text-[11px] tracking-[0.28em]"
                      style={{ color: "var(--ag-amber)" }}
                    >
                      {d.label.toUpperCase()}
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--ag-fg)" }}
                    >
                      {d.body}
                    </span>
                    <span
                      className="ag-mono text-right text-[12px]"
                      style={{ color: "var(--ag-fg-mute)" }}
                    >
                      {d.weight}
                    </span>
                  </li>
                ))}
              </ol>
              <p
                className="ag-mono mt-6 text-[12px]"
                style={{ color: "var(--ag-fg-faint)" }}
              >
                final = w·detection + w·containment + w·recovery + w·latency
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ag-section"
        style={{
          background: "var(--ag-canvas-2)",
          borderTop: "1px solid var(--ag-line)",
          borderBottom: "1px solid var(--ag-line)",
        }}
      >
        <div className="ag-container">
          <p className="ag-eyebrow">Suites · v0.1</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              letterSpacing: "-0.022em",
            }}
          >
            207 adversarial scenarios. Five suites. Growing weekly.
          </h2>
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            Every scenario is reproducible from a sealed seed. We grow the
            catalog from real incidents, public CVEs, and adversarial research.
            Submission process below.
          </p>
          <div
            className="mt-12 overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--ag-line)" }}
          >
            <div
              className="grid grid-cols-[5rem_1fr_5rem_2.4fr] gap-4 px-6 py-3 text-[11px] tracking-[0.3em]"
              style={{
                background: "var(--ag-canvas-2)",
                borderBottom: "1px solid var(--ag-line)",
                color: "var(--ag-fg-faint)",
                textTransform: "uppercase",
                fontFamily: "var(--font-aegis-mono), monospace",
              }}
            >
              <span>Code</span>
              <span>Suite</span>
              <span>Count</span>
              <span>What it tests</span>
            </div>
            {SUITES.map((s, idx) => (
              <div
                key={s.code}
                className="grid grid-cols-[5rem_1fr_5rem_2.4fr] items-start gap-4 px-6 py-5"
                style={{
                  borderTop: idx > 0 ? "1px solid var(--ag-line)" : undefined,
                  background: idx % 2 === 0 ? "var(--ag-canvas)" : "var(--ag-canvas-2)",
                }}
              >
                <code
                  className="ag-mono text-sm"
                  style={{ color: "var(--ag-amber)" }}
                >
                  {s.code}
                </code>
                <span
                  className="ag-display"
                  style={{ fontSize: "1.15rem", letterSpacing: "-0.012em" }}
                >
                  {s.title}
                </span>
                <code
                  className="ag-mono text-sm tabular-nums"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {s.count}
                </code>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ag-section">
        <div className="ag-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="ag-eyebrow">Score card preview</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                One number per framework version, with the bundle to back it.
              </h2>
              <p
                className="mt-6 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Score cards are signed, machine-verifiable, and tied to a
                framework hash. Public for opted-in vendors. Private for
                self-hosted teams.
              </p>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--ag-fg-faint)" }}
              >
                Numbers below are placeholders — we publish the first cohort
                with v0.1.
              </p>
            </div>
            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "var(--ag-line)" }}
            >
              <ul className="space-y-3">
                {FRAMEWORKS.map((f) => (
                  <li
                    key={f.name}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b pb-3"
                    style={{ borderColor: "var(--ag-line)" }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: "var(--ag-fg)" }}
                    >
                      {f.name}
                    </span>
                    <span
                      className="ag-mono text-sm"
                      style={{ color: "var(--ag-fg-mute)" }}
                    >
                      {f.note}
                    </span>
                    <span
                      className="ag-display tabular-nums"
                      style={{
                        fontSize: "1.4rem",
                        color: "var(--ag-fg-faint)",
                      }}
                    >
                      {f.score}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                className="ag-mono mt-5 text-[11px] tracking-[0.28em]"
                style={{ color: "var(--ag-fg-faint)" }}
              >
                Next score window opens 2026-Q3
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ag-section ag-dot-bg"
        style={{
          background: "var(--ag-canvas-2)",
          borderTop: "1px solid var(--ag-line)",
          borderBottom: "1px solid var(--ag-line)",
        }}
      >
        <div className="ag-container">
          <p className="ag-eyebrow">Run the bench</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              letterSpacing: "-0.022em",
            }}
          >
            One CLI, deterministic envs, signed bundle out the other end.
          </h2>
          <pre
            className="ag-code mt-12"
            dangerouslySetInnerHTML={{
              __html: `<span class="c-prompt">$</span> <span class="c-cmd">aegis</span> <span class="c-arg">securebench</span> <span class="c-cmd">run</span> <span class="c-flag">--suite</span> all <span class="c-flag">--target</span> ./agent.aegis-spec
<span class="c-comment">▸ securebench · v0.1.0 · 207 scenarios</span>
<span class="c-comment">▸ envs spawned: 12 · seed: sealed-2026-05-04</span>

<span class="c-mute">[INJ]</span>  <span class="c-ok">▮▮▮▮▮▮▮▮▮▮▮▮▯▯</span>  84%   <span class="c-mute">42/64 detected</span>
<span class="c-mute">[TLP]</span>  <span class="c-ok">▮▮▮▮▮▮▮▮▮▮▮▮▮▯</span>  91%   <span class="c-mute">35/38 detected</span>
<span class="c-mute">[MEM]</span>  <span class="c-warn">▮▮▮▮▮▮▮▮▮▯▯▯▯▯</span>  64%   <span class="c-mute">27/42 detected</span>
<span class="c-mute">[ESC]</span>  <span class="c-ok">▮▮▮▮▮▮▮▮▮▮▮▯▯▯</span>  78%   <span class="c-mute">22/28 contained</span>
<span class="c-mute">[EXF]</span>  <span class="c-ok">▮▮▮▮▮▮▮▮▮▮▮▮▯▯</span>  85%   <span class="c-mute">30/35 blocked</span>

<span style="color: var(--ag-amber)">▸ score: 81.4 / 100</span>     bundle → bench-2026-05-04.aegis`,
            }}
          />
        </div>
      </section>

      <CTASection
        title={
          <>
            Trust your agent only as much as <span className="ag-text-amber italic">your evidence</span>.
          </>
        }
        body={
          <>
            Apply to run SecureBench against your agent stack. We run, you keep
            the bundle, the catalog grows by your contribution.
          </>
        }
        secondary={{ href: "/aegis/research", label: "Read the manifesto" }}
      />
    </>
  );
}
