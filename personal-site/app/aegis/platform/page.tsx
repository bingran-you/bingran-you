import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../_components/page-hero";
import { CTASection } from "../_components/cta";
import {
  CheckIcon,
  GaugeIcon,
  GlobeIcon,
  MemoryIcon,
  TerminalIcon,
} from "../_components/icons";

export const metadata: Metadata = {
  title: "Roadmap · what we ship today, what comes next, in what order",
  description:
    "Aegis is one CLI today. Three more layers on the roadmap. Here's the order, the reasoning, and what each layer unlocks.",
  alternates: { canonical: "/aegis/platform" },
};

const LAYERS = [
  {
    href: "/aegis/sentinel",
    name: "Aegis CLI",
    state: "Live (v0.1)",
    color: "var(--ag-teal)",
    Icon: TerminalIcon,
    when: "Today",
    body: "One binary. Audit before, watch during, quarantine on signal. Ships to early-access partners next week.",
    why: "Smallest valuable thing. Single binary, single install, single result your security lead can read. The wedge.",
    unlocks: "Real adoption telemetry. Real incident logs. Real attack classes for the catalog.",
  },
  {
    href: "/aegis/securebench",
    name: "SecureBench",
    state: "Alpha · running on ourselves",
    color: "var(--ag-teal)",
    Icon: GaugeIcon,
    when: "~Q2 2026 (external alpha)",
    body: "Adversarial benchmark for AI agents. 207 scenarios designed across 5 suites. Today: we run it against the CLI. Soon: we run it against your stack and ship a signed score card.",
    why: "Once the CLI is collecting events, the catalog becomes a benchmark. Score cards become the language of trust between agent vendors and operators.",
    unlocks: "Public regression tracking. Vendor accountability. The catalog stops being marketing and starts being measurement.",
  },
  {
    href: "/aegis/attest",
    name: "Aegis Attest",
    state: "Roadmap",
    color: "var(--ag-amber)",
    Icon: GlobeIcon,
    when: "~Q3 2026",
    body: "Signed safety verdicts on URLs and tools before agents read them. Federated issuers, tamper-evident registry, browser-level enforcement.",
    why: "The CLI shows what the agent reads. Attest stops the agent from reading what an attacker wants it to. Open primitive — needs adoption from publishers, not just operators.",
    unlocks: "Cross-tenant trust. Browser-level enforcement. The first piece of agent security with a network effect.",
  },
  {
    href: "/aegis/cleanse",
    name: "Aegis Cleanse",
    state: "Roadmap",
    color: "var(--ag-amber)",
    Icon: MemoryIcon,
    when: "~Q4 2026",
    body: "Memory hygiene as a service. Differential rollback, taint detection, retention policy across vector / SQL / file backends.",
    why: "Hardest layer to ship correctly. Silently rewriting memory is worse than the disease. We wait until the catalog is rich enough to know which entries to trust.",
    unlocks: "Long-running agents that survive a year. Cross-session security. Forensic replay when something goes wrong.",
  },
];

const FAQS = [
  {
    q: "Why ship the CLI first instead of the platform?",
    a: "The CLI is the smallest thing an engineer pays for this week. Platforms get built by founders attached to the architecture instead of the value. Once the CLI is in active terminals, the rest of the layers earn their order from real demand.",
  },
  {
    q: "Aren’t these four products doing different things?",
    a: "They’re four cuts of one problem: making agent action verifiable. Same evidence format, same control plane, same threat catalog. Each layer shipped solo would be a feature; together they’re a category. We ship them in adoption order.",
  },
  {
    q: "What does Aegis NOT do?",
    a: "We’re not an in-loop guardrails framework. We’re not a model-safety vendor (that’s pre-deployment). We’re not generic EDR. We’re not a web app firewall. We’re the layer between an agent process and the world it touches.",
  },
  {
    q: "How will you know when to ship the next layer?",
    a: "When the CLI hits 200 weekly active operators and the threat catalog has 100 reproduced incidents — Attest unlocks. When operators are running long-running agents (>72h sessions) at scale — Cleanse unlocks. We won’t guess.",
  },
  {
    q: "Will Aegis work with frameworks I’ve already shipped?",
    a: "That’s the design constraint. Aegis attaches at the OS process and network boundary — your existing agent code doesn’t change. We’re prioritizing OpenAI Agents SDK, Anthropic Claude Code, Codex CLI, and MCP for the first preview.",
  },
];

const STAGES = [
  {
    n: "01",
    title: "Observe",
    body: "Agent traffic — tool calls, web reads, memory writes, model prompts, human messages — is mirrored to a tamper-evident log.",
    artifact: "log/agent.aegis-evt",
  },
  {
    n: "02",
    title: "Attest",
    body: "Each event is annotated with provenance: who authored the tool, what the URL classifies as, whether memory is fresh, whether the model is signed.",
    artifact: "evt.attestation",
  },
  {
    n: "03",
    title: "Verify",
    body: "Aegis classifiers and policy engine evaluate the event against your policy and the public threat catalog in <2ms before the agent acts on it.",
    artifact: "policy.decision",
  },
  {
    n: "04",
    title: "Contain",
    body: "On signal: snapshot agent state, quarantine credentials, rewind memory to last clean checkpoint, surface a deterministic incident report.",
    artifact: "incident.bundle",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Roadmap"
        title={
          <>
            One CLI today.{" "}
            <span className="ag-text-amber italic">Three layers on the roadmap.</span>{" "}
            In that order.
          </>
        }
        lead={
          <>
            Aegis is a single product today: a CLI that audits and watches AI
            agents. The other three layers — SecureBench, Attest, Cleanse —
            ship after the CLI is in active terminals. We&rsquo;re not building a
            platform first and finding users second.
          </>
        }
        primary={{ href: "/aegis/waitlist", label: "Send us your incident" }}
        secondary={{ href: "/aegis/sentinel", label: "See the CLI" }}
      />

      <section
        className="ag-section"
        id="order"
        style={{
          background: "var(--ag-canvas-2)",
          borderTop: "1px solid var(--ag-line)",
          borderBottom: "1px solid var(--ag-line)",
        }}
      >
        <div className="ag-container">
          <p className="ag-eyebrow">The order, the reasoning</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              letterSpacing: "-0.022em",
            }}
          >
            Each layer earns the next.
          </h2>
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            We&rsquo;re shipping in the order a real customer adopts. The CLI
            you install today; the benchmark scores you publish later; the
            attestation network you participate in once you have something to
            attest about; the memory layer you trust last, after we&rsquo;ve
            cleansed our own.
          </p>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {LAYERS.map(({ href, name, state, color, Icon, when, body, why, unlocks }) => (
              <Link
                key={name}
                href={href}
                className="ag-card ag-lift group flex flex-col p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="ag-pillar-icon">
                      <Icon size={18} />
                    </span>
                    <h3
                      className="ag-display"
                      style={{ fontSize: "1.5rem", letterSpacing: "-0.015em" }}
                    >
                      {name}
                    </h3>
                  </div>
                  <span
                    className="ag-pill"
                    style={{
                      borderColor: color,
                      color: color,
                      background: "rgba(255,255,255,0.02)",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      className="ag-pill-dot"
                      style={{ background: color, boxShadow: `0 0 10px ${color}` }}
                    />
                    {state}
                  </span>
                </div>
                <p
                  className="ag-mono mt-3 text-[11px] tracking-[0.28em]"
                  style={{ color: "var(--ag-fg-faint)" }}
                >
                  {when.toUpperCase()}
                </p>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg)" }}
                >
                  {body}
                </p>
                <div
                  className="mt-5 grid gap-3 text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  <p>
                    <span
                      className="ag-mono text-[11px] tracking-[0.22em]"
                      style={{ color: "var(--ag-amber)" }}
                    >
                      WHY THIS, WHY NOW —
                    </span>{" "}
                    {why}
                  </p>
                  <p>
                    <span
                      className="ag-mono text-[11px] tracking-[0.22em]"
                      style={{ color: "var(--ag-amber)" }}
                    >
                      UNLOCKS —
                    </span>{" "}
                    {unlocks}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ag-section" id="architecture">
        <div className="ag-container">
          <p className="ag-eyebrow">Architecture · all four layers</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              letterSpacing: "-0.022em",
            }}
          >
            Out-of-process, by design. The agent has no API to talk Aegis out
            of doing its job.
          </h2>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            Each layer participates in the same evidence stream. An audit pass
            today writes the same event format the attestation registry will
            read tomorrow. You don&rsquo;t re-instrument when the next layer
            ships.
          </p>

          <ol className="mt-14 grid gap-5 lg:grid-cols-4">
            {STAGES.map(({ n, title, body, artifact }) => (
              <li key={n} className="ag-card p-7">
                <span
                  className="ag-mono text-[11px] tracking-[0.32em]"
                  style={{ color: "var(--ag-fg-faint)" }}
                >
                  {n}
                </span>
                <h3
                  className="ag-display mt-5"
                  style={{ fontSize: "1.3rem", letterSpacing: "-0.015em" }}
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

      <section
        className="ag-section ag-dot-bg"
        id="evidence"
        style={{
          background: "var(--ag-canvas-2)",
          borderTop: "1px solid var(--ag-line)",
          borderBottom: "1px solid var(--ag-line)",
        }}
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

      <section className="ag-section">
        <div className="ag-container">
          <p className="ag-eyebrow">Common questions</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {FAQS.map((f) => (
              <details key={f.q} className="ag-card p-7">
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
            Pick the layer that hurts most today.{" "}
            <span className="ag-text-amber italic">It&rsquo;s the CLI.</span>
          </>
        }
        body={
          <>
            Send us a redacted log of an agent run from your last week. Free
            forensic report in 48 hours. If it&rsquo;s a new attack class, the
            catalog gets smarter.
          </>
        }
        secondary={{ href: "/aegis/research", label: "Read the field notes" }}
      />
    </>
  );
}
