import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../_components/page-hero";
import { CTASection } from "../_components/cta";
import {
  CheckIcon,
  CpuIcon,
  EyeIcon,
  GaugeIcon,
  GlobeIcon,
  LockIcon,
  MemoryIcon,
  ShieldIcon,
  TerminalIcon,
} from "../_components/icons";

export const metadata: Metadata = {
  title: "Platform overview",
  description:
    "Aegis is a four-layer security platform — runtime hygiene, web attestation, memory cleansing, and adversarial benchmarks — for AI agents.",
  alternates: { canonical: "/aegis/platform" },
};

const PILLAR_ROWS = [
  {
    href: "/aegis/sentinel",
    name: "Sentinel",
    domain: "Runtime",
    Icon: TerminalIcon,
    description:
      "Local CLI supervisor — fingerprints tools, isolates the agent process, sweeps credentials, kills compromised sessions.",
    primitives: ["Process attestor", "Credential sweep", "Tool fingerprinter"],
  },
  {
    href: "/aegis/attest",
    name: "Attest",
    domain: "The web",
    Icon: GlobeIcon,
    description:
      "Signed safety attestations for websites and tools — agents only consume content that&rsquo;s been classified, authored, and witnessed.",
    primitives: ["Adversarial classifier", "Authorship registry", "Browser plugin"],
  },
  {
    href: "/aegis/cleanse",
    name: "Cleanse",
    domain: "Memory",
    Icon: MemoryIcon,
    description:
      "Memory hygiene service — taint detection, differential rollback, retention policy enforcement across vector and SQL stores.",
    primitives: ["Taint detector", "Rollback ledger", "Retention engine"],
  },
  {
    href: "/aegis/securebench",
    name: "SecureBench",
    domain: "Evidence",
    Icon: GaugeIcon,
    description:
      "Adversarial benchmark — deterministic environments that score every agent against 200+ red-team scenarios.",
    primitives: ["Scenario library", "Score cards", "Regression tracker"],
  },
];

const STAGES = [
  {
    n: "01",
    title: "Observe",
    Icon: EyeIcon,
    body: "Agent traffic — tool calls, web reads, memory writes, model prompts, human messages — is mirrored to a tamper-evident log.",
    artifact: "log/agent.aegis-evt",
  },
  {
    n: "02",
    title: "Attest",
    Icon: ShieldIcon,
    body: "Each event is annotated with provenance: who authored the tool, what the URL classifies as, whether memory is fresh, whether the model is signed.",
    artifact: "evt.attestation",
  },
  {
    n: "03",
    title: "Verify",
    Icon: CpuIcon,
    body: "Aegis classifiers and policy engine evaluate the event against your policy & the public threat catalog in <2ms before the agent acts on it.",
    artifact: "policy.decision",
  },
  {
    n: "04",
    title: "Contain",
    Icon: LockIcon,
    body: "On signal: snapshot agent state, quarantine credentials, rewind memory to last clean checkpoint, surface a deterministic incident report.",
    artifact: "incident.bundle",
  },
];

const INTEGRATIONS = [
  {
    group: "Agent runtimes",
    items: [
      "OpenAI Agents SDK",
      "Anthropic Claude Code",
      "Codex CLI",
      "LangChain / LangGraph",
      "CrewAI",
      "AutoGen",
      "LlamaIndex",
      "Inkeep",
    ],
  },
  {
    group: "Tool surfaces",
    items: [
      "Model Context Protocol",
      "OpenAPI / REST",
      "GraphQL",
      "Browser-use / Computer-use",
      "Shell tool calls",
      "Custom function tools",
    ],
  },
  {
    group: "Memory backends",
    items: [
      "Postgres + pgvector",
      "LanceDB",
      "Mem0",
      "Weaviate",
      "Pinecone",
      "Filesystem JSONL",
      "SQLite",
      "Redis vector",
    ],
  },
  {
    group: "Identity & policy",
    items: [
      "OIDC / SSO",
      "Open Policy Agent",
      "Cedar",
      "AWS IAM",
      "GCP Workload Identity",
      "Vault",
    ],
  },
];

const FAQS = [
  {
    q: "Is Aegis another guardrails wrapper around the model?",
    a: "No. Guardrails sit inside the agent loop and can be argued out of by the agent itself. Aegis sits outside, between the agent process and the world. Every read and write passes through it. The agent doesn&rsquo;t get to choose whether to comply.",
  },
  {
    q: "What latency does this add per agent step?",
    a: "Aegis verification runs out-of-process and in parallel with model inference, with cached attestations. Expected <2ms p95 for the verify path on a warm cache. We instrument every release; see SecureBench for current numbers.",
  },
  {
    q: "What does &lsquo;verifiable&rsquo; mean here, exactly?",
    a: "Every Aegis decision emits a structured artifact — input hash, attested provenance, policy version, classifier scores. Audits replay the decision against the same artifacts and must reach the same conclusion. No screenshot of a dashboard counts.",
  },
  {
    q: "Will Aegis work with frameworks I&rsquo;ve already shipped?",
    a: "That&rsquo;s the design constraint. Aegis attaches at the OS process and network boundary — your existing agent code doesn&rsquo;t need to change. We&rsquo;re prioritizing OpenAI Agents SDK, Anthropic Claude Code, LangGraph, and MCP for the first preview.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={
          <>
            One control plane for{" "}
            <span className="ag-text-amber italic">every agent action</span>.
          </>
        }
        lead={
          <>
            Aegis is a four-layer platform that supervises an agent&rsquo;s
            runtime, the web it reads, the memory it writes, and the
            adversarial baseline it must clear. Each layer ships independently;
            together, they emit one evidence stream.
          </>
        }
        primary={{ href: "/aegis/waitlist", label: "Request early access" }}
        secondary={{ href: "/aegis/securebench", label: "See SecureBench" }}
      />

      <section
        className="ag-section"
        id="architecture"
        style={{
          background: "var(--ag-canvas-2)",
          borderTop: "1px solid var(--ag-line)",
          borderBottom: "1px solid var(--ag-line)",
        }}
      >
        <div className="ag-container">
          <p className="ag-eyebrow">Architecture</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              letterSpacing: "-0.022em",
            }}
          >
            Out-of-process, by design. The agent can&rsquo;t talk Aegis out of
            doing its job.
          </h2>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            Aegis runs as a privileged supervisor next to the agent process.
            Every system call, network request, memory access, and tool spawn
            traverses the Aegis hooks before it&rsquo;s admitted. The agent
            itself never sees the policy engine.
          </p>

          <ol className="mt-14 grid gap-5 lg:grid-cols-4">
            {STAGES.map(({ n, title, body, Icon, artifact }) => (
              <li key={n} className="ag-card ag-lift p-7">
                <div className="flex items-start justify-between">
                  <span className="ag-pillar-icon">
                    <Icon size={18} />
                  </span>
                  <span
                    className="ag-mono text-[11px] tracking-[0.32em]"
                    style={{ color: "var(--ag-fg-faint)" }}
                  >
                    {n}
                  </span>
                </div>
                <h3
                  className="ag-display mt-6"
                  style={{ fontSize: "1.5rem", letterSpacing: "-0.015em" }}
                >
                  {title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {body}
                </p>
                <p
                  className="ag-mono mt-5 text-[11px] tracking-[0.18em]"
                  style={{ color: "var(--ag-fg-faint)" }}
                >
                  ARTIFACT &nbsp;
                  <span style={{ color: "var(--ag-amber)" }}>{artifact}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ag-section">
        <div className="ag-container">
          <p className="ag-eyebrow">The four layers</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              letterSpacing: "-0.022em",
            }}
          >
            Each layer is shippable on its own — and only fully effective in
            combination.
          </h2>
          <div className="mt-12 overflow-hidden rounded-2xl border" style={{ borderColor: "var(--ag-line)" }}>
            <div
              className="grid grid-cols-[1.4fr_0.8fr_1.6fr_1fr] items-center gap-4 px-6 py-3 text-[11px] tracking-[0.3em]"
              style={{
                background: "var(--ag-canvas-2)",
                borderBottom: "1px solid var(--ag-line)",
                color: "var(--ag-fg-faint)",
                textTransform: "uppercase",
                fontFamily: "var(--font-aegis-mono), monospace",
              }}
            >
              <span>Layer</span>
              <span>Domain</span>
              <span>What it does</span>
              <span>&nbsp;</span>
            </div>
            {PILLAR_ROWS.map(({ href, name, domain, description, primitives, Icon }, idx) => (
              <Link
                key={href}
                href={href}
                className="group grid grid-cols-[1.4fr_0.8fr_1.6fr_1fr] items-center gap-4 px-6 py-6 transition hover:bg-white/[0.025]"
                style={{
                  borderTop: idx > 0 ? "1px solid var(--ag-line)" : undefined,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="ag-pillar-icon">
                    <Icon size={18} />
                  </span>
                  <span
                    className="ag-display"
                    style={{ fontSize: "1.4rem", letterSpacing: "-0.015em" }}
                  >
                    {name}
                  </span>
                </div>
                <span
                  className="ag-mono text-[11px] tracking-[0.28em]"
                  style={{
                    color: "var(--ag-fg-mute)",
                    textTransform: "uppercase",
                  }}
                >
                  {domain}
                </span>
                <div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--ag-fg)" }}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <p
                    className="ag-mono mt-2 text-[11px] tracking-[0.18em]"
                    style={{ color: "var(--ag-fg-faint)" }}
                  >
                    {primitives.join(" · ")}
                  </p>
                </div>
                <span
                  className="ag-mono justify-self-end text-[11px] tracking-[0.28em] transition group-hover:text-[var(--ag-amber)]"
                  style={{
                    color: "var(--ag-fg-mute)",
                    textTransform: "uppercase",
                  }}
                >
                  Read →
                </span>
              </Link>
            ))}
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
        id="evidence"
      >
        <div className="ag-container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="ag-eyebrow">Evidence-first</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                Every decision Aegis makes is replayable.
              </h2>
              <p
                className="mt-6 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                If a finding can&rsquo;t be reproduced by an auditor, it
                isn&rsquo;t a finding. Aegis emits structured evidence bundles
                — input hashes, attested provenance, policy version, classifier
                scores — for every supervised event.
              </p>
              <ul className="mt-8 space-y-3 text-sm" style={{ color: "var(--ag-fg-mute)" }}>
                {[
                  "Deterministic decisions: same inputs, same verdict, every replay.",
                  "Append-only Merkle log per agent — tampering is detectable.",
                  "SBOM-style export for compliance: SOC2, ISO 42001, EU AI Act.",
                  "Drag-and-drop bundle into your existing SIEM / lake.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <CheckIcon size={14} className="mt-[3px] shrink-0 ag-text-amber" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <pre
              className="ag-code"
              style={{ alignSelf: "start" }}
            >
{`{
  "evt": "tool.call",
  "agent": "claude-code/4.7.0",
  "ts": "2026-05-04T03:11:42.184Z",
  "tool": {
    "name": "browser.navigate",
    "args_hash": "sha256:8f1...c0a",
    "attestation": "attest:domain:medium-risk"
  },
  "policy": {
    "version": "v0.1.7",
    "decision": "allow_with_redaction",
    "rules_fired": ["web.untrusted", "memory.no_persist"]
  },
  "classifiers": {
    "indirect_injection": 0.07,
    "exfiltration_intent": 0.02,
    "social_engineering": 0.04
  },
  "evidence_bundle": "evt://01HKZ5...4KQ.aegis"
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="ag-section" id="integrations">
        <div className="ag-container">
          <p className="ag-eyebrow">Integrations</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              letterSpacing: "-0.022em",
            }}
          >
            We meet your stack at the boundary.
          </h2>
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            Aegis hooks attach at the OS process and network boundary — no
            framework rewrite, no privileged code in your agent.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INTEGRATIONS.map((g) => (
              <div key={g.group} className="ag-card p-6">
                <p
                  className="ag-mono text-[11px] tracking-[0.28em]"
                  style={{
                    color: "var(--ag-amber)",
                    textTransform: "uppercase",
                  }}
                >
                  {g.group}
                </p>
                <ul className="mt-5 space-y-2 text-sm" style={{ color: "var(--ag-fg)" }}>
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
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
          <p className="ag-eyebrow">Common questions</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="ag-card group p-7"
              >
                <summary
                  className="cursor-pointer list-none text-base"
                  style={{ color: "var(--ag-fg)" }}
                  dangerouslySetInnerHTML={{ __html: f.q }}
                />
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                  dangerouslySetInnerHTML={{ __html: f.a }}
                />
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Pick the layer that hurts most. <span className="ag-text-amber italic">Compose the rest.</span>
          </>
        }
        body={
          <>
            We&rsquo;re onboarding twelve early-access partners in 2026. One
            threat surface, verifiable evidence, in a week.
          </>
        }
        secondary={{ href: "/aegis/research", label: "Read the manifesto" }}
      />
    </>
  );
}
