import Link from "next/link";
import {
  ArrowRight,
  BoltIcon,
  CheckIcon,
  EyeIcon,
  GaugeIcon,
  GlobeIcon,
  LockIcon,
  MemoryIcon,
  ShieldIcon,
  TerminalIcon,
} from "./_components/icons";

const PILLARS = [
  {
    href: "/aegis/sentinel",
    eyebrow: "01 / Runtime",
    title: "Aegis Sentinel",
    tagline: "A 360° guard for the agent process.",
    body: "Local CLI that audits an agent's runtime: scans installed tools, isolates compromised environments, scrubs leaked credentials and sweeps the agent's working memory between tasks.",
    capabilities: [
      "Tool & MCP server fingerprinting",
      "Credential & token leak sweep",
      "Process isolation profiles",
      "Compromised-state quarantine",
    ],
    Icon: TerminalIcon,
  },
  {
    href: "/aegis/attest",
    eyebrow: "02 / The web",
    title: "Aegis Attest",
    tagline: "TLS, but for whether a site is safe to feed to an agent.",
    body: "A signed attestation layer that classifies websites and tools by adversarial risk before your agent loads them. Block prompt-injection traps, typo-squatted tools, and content farms designed to hijack agents.",
    capabilities: [
      "Adversarial-content classifier",
      "Tool authorship & supply-chain checks",
      "Live attestation registry",
      "Browser-level enforcement plugin",
    ],
    Icon: GlobeIcon,
  },
  {
    href: "/aegis/cleanse",
    eyebrow: "03 / Memory",
    title: "Aegis Cleanse",
    tagline: "Hygiene for agent memory — long-term, episodic, vector.",
    body: "Detects and removes poisoned entries inside agent memory stores. Differential checkpoints, tainted-trace recovery, and policy-as-code rules for what may persist between sessions.",
    capabilities: [
      "Memory-poisoning detector",
      "Tainted-trace replay",
      "Differential rollback",
      "Retention policy enforcement",
    ],
    Icon: MemoryIcon,
  },
  {
    href: "/aegis/securebench",
    eyebrow: "04 / Evidence",
    title: "SecureBench",
    tagline: "An adversarial benchmark agents must pass before they ship.",
    body: "Versioned suites of red-team scenarios: tool-poisoning, indirect prompt injection, exfiltration via memory, social-engineered escalation. Get a verifiable score, not a vibes-based audit.",
    capabilities: [
      "200+ adversarial scenarios",
      "Deterministic test environments",
      "Per-framework score cards",
      "Continuous regression tracking",
    ],
    Icon: GaugeIcon,
  },
];

const STATUS_LINES = [
  ["S/1", "Status", "Research preview · v0.1"],
  ["S/2", "Modeled threat surfaces", "47 / agent-era"],
  ["S/3", "Frameworks covered", "OpenAI · Anthropic · LangChain · CrewAI · MCP"],
  ["S/4", "Memory backends mapped", "Postgres · pgvector · LanceDB · Mem0"],
];

const PROBLEM_FACTS = [
  {
    metric: "0 ms",
    label: "is the average latency between an agent reading malicious content and acting on it.",
    sub: "Indirect prompt injection bypasses every existing AppSec layer because the attack lives in data the agent was told to trust.",
  },
  {
    metric: "12+",
    label: "agent frameworks ship to production with no runtime sandbox.",
    sub: "Most agents inherit the operator's full shell, browser, mailbox and credentials. The blast radius of a compromise is the user's life.",
  },
  {
    metric: "∞",
    label: "is the half-life of a poisoned memory entry.",
    sub: "Once an attacker writes to a vector store an agent re-reads each turn, the compromise persists across sessions, machines and even teammates.",
  },
];

const TIMELINE = [
  {
    year: "2023",
    label: "Tool calling",
    body: "Agents could call APIs.",
  },
  {
    year: "2024",
    label: "Multi-step",
    body: "Agents could plan across calls.",
  },
  {
    year: "2025",
    label: "Persistent memory",
    body: "Agents remembered between sessions.",
  },
  {
    year: "2026",
    label: "Autonomous workdays",
    body: "Agents operate the user's machine for hours, unsupervised.",
  },
  {
    year: "next",
    label: "Aegis",
    body: "A security layer that operates beside them, not after them.",
  },
];

const COVERAGE_LOGOS = [
  "OpenAI Agents",
  "Anthropic Claude Code",
  "Codex CLI",
  "LangChain",
  "LangGraph",
  "CrewAI",
  "AutoGen",
  "MCP",
  "LlamaIndex",
  "Inkeep",
  "Mem0",
  "pgvector",
];

export default function AegisHome() {
  return (
    <>
      <section
        className="ag-grid-bg ag-scanline relative overflow-hidden"
        style={{ paddingTop: "5rem", paddingBottom: "8rem" }}
      >
        <div className="ag-glow" />
        <div className="ag-container relative">
          <div className="flex items-center gap-3">
            <span className="ag-pill ag-pill-amber">
              <span className="ag-pill-dot" />
              v0.1 — research preview
            </span>
            <span className="ag-pill">A Bingran You preview</span>
          </div>

          <h1
            className="ag-display mt-10 max-w-5xl"
            style={{
              fontSize: "clamp(2.6rem, 6.4vw, 5.6rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
            }}
          >
            <span className="ag-text-grad">
              Security infrastructure
            </span>{" "}
            <br className="hidden sm:block" />
            <span style={{ color: "var(--ag-fg)" }}>for the </span>
            <span className="italic ag-text-amber">agent era</span>
            <span style={{ color: "var(--ag-fg)" }}>.</span>
          </h1>

          <p
            className="mt-8 max-w-2xl text-lg leading-relaxed"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            Your agents read the open web, install tools they discover at
            runtime, and write to memory you can&rsquo;t inspect. <span style={{ color: "var(--ag-fg)" }}>Aegis is the layer that watches them, verifies them, and contains them</span> &mdash; built so trust in agents can be proven, not assumed.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/aegis/waitlist" className="ag-btn ag-btn-primary">
              Join the early-access waitlist
              <ArrowRight className="ag-btn-arrow" />
            </Link>
            <Link href="/aegis/platform" className="ag-btn">
              See the platform
              <ArrowRight className="ag-btn-arrow" />
            </Link>
            <Link
              href="/aegis/research"
              className="text-sm transition hover:text-[var(--ag-amber)]"
              style={{ color: "var(--ag-fg-mute)", marginLeft: "0.5rem" }}
            >
              or read the manifesto →
            </Link>
          </div>

          <div
            className="mt-20 grid divide-y rounded-2xl border"
            style={{
              borderColor: "var(--ag-line)",
              background: "rgba(7, 9, 15, 0.55)",
            }}
          >
            {STATUS_LINES.map(([id, k, v]) => (
              <div
                key={id}
                className="grid items-center gap-4 px-5 py-3.5 text-sm sm:grid-cols-[64px_1fr_auto]"
                style={{ borderColor: "var(--ag-line)" }}
              >
                <span
                  className="ag-mono text-[11px] tracking-[0.24em]"
                  style={{ color: "var(--ag-fg-faint)" }}
                >
                  {id}
                </span>
                <span style={{ color: "var(--ag-fg-mute)" }}>{k}</span>
                <span
                  className="ag-mono text-[12px] tracking-[0.04em]"
                  style={{ color: "var(--ag-fg)" }}
                >
                  {v}
                </span>
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
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="ag-eyebrow">The premise</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                Agents are running in production with the security model of a
                browser tab — and the privileges of a CTO.
              </h2>
              <p
                className="mt-7 max-w-md text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Today&rsquo;s app-security stack was built for code that humans
                ship. Agents are <em style={{ color: "var(--ag-fg)" }}>code that ships itself</em>, recompiles itself, and is steered
                by whatever it reads on the open web in the last 200ms.
              </p>
              <p
                className="mt-4 max-w-md text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Aegis assumes the agent is the new endpoint, the new supply
                chain, and the new attack surface — all at once.
              </p>
            </div>
            <div className="space-y-5">
              {PROBLEM_FACTS.map((p) => (
                <article
                  key={p.metric}
                  className="ag-card ag-lift p-7"
                >
                  <p
                    className="ag-display"
                    style={{
                      fontSize: "clamp(2.2rem, 3.4vw, 3rem)",
                      color: "var(--ag-amber)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {p.metric}
                  </p>
                  <p
                    className="mt-3 text-base leading-relaxed"
                    style={{ color: "var(--ag-fg)" }}
                  >
                    {p.label}
                  </p>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "var(--ag-fg-mute)" }}
                  >
                    {p.sub}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ag-section">
        <div className="ag-container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="ag-eyebrow">The platform</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                Four layers. One contract: <span className="ag-text-amber italic">verifiable</span> trust in every agent action.
              </h2>
              <p
                className="mt-5 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Each Aegis layer ships independently and emits the same evidence
                format. Adopt the one that hurts most today; compose the rest as
                your agents earn more privilege.
              </p>
            </div>
            <Link href="/aegis/platform" className="ag-btn self-start">
              Platform overview
              <ArrowRight className="ag-btn-arrow" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {PILLARS.map(({ href, eyebrow, title, tagline, body, capabilities, Icon }) => (
              <Link
                key={href}
                href={href}
                className="ag-card ag-lift group flex flex-col p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="ag-pillar-icon">
                    <Icon size={18} />
                  </div>
                  <span
                    className="ag-mono text-[11px] tracking-[0.28em]"
                    style={{ color: "var(--ag-fg-faint)" }}
                  >
                    {eyebrow}
                  </span>
                </div>
                <h3
                  className="ag-display mt-7"
                  style={{
                    fontSize: "1.85rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {title}
                </h3>
                <p
                  className="mt-2 text-base leading-relaxed"
                  style={{ color: "var(--ag-fg)" }}
                >
                  {tagline}
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {body}
                </p>
                <ul
                  className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <CheckIcon
                        size={14}
                        className="mt-[3px] shrink-0"
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className="mt-7 flex items-center gap-2 text-sm transition group-hover:text-[var(--ag-amber)]"
                  style={{ color: "var(--ag-fg)" }}
                >
                  Read more
                  <ArrowRight className="transition group-hover:translate-x-0.5" />
                </div>
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
      >
        <div className="ag-container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="ag-eyebrow">Architecture</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                Beside the agent. Between the agent and the world.
              </h2>
              <p
                className="mt-6 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Aegis runs as an out-of-process supervisor — not as middleware
                inside the agent loop. The agent can&rsquo;t bypass it, prompt it,
                or talk it into stepping aside. Every read from the web, every
                write to memory, every tool spawn passes through a verified
                control plane.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  {
                    Icon: EyeIcon,
                    title: "Observe",
                    body: "All inputs, tool calls, memory reads/writes are mirrored to a tamper-evident log.",
                  },
                  {
                    Icon: BoltIcon,
                    title: "Verify",
                    body: "Each event is checked against attestation, policy, and adversarial classifiers in <2ms.",
                  },
                  {
                    Icon: LockIcon,
                    title: "Contain",
                    body: "On signal, Aegis quarantines the agent, snapshots state, and rolls memory to last clean checkpoint.",
                  },
                ].map(({ Icon, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="ag-pillar-icon shrink-0">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--ag-fg)" }}
                      >
                        {title}
                      </p>
                      <p
                        className="mt-1 text-sm leading-relaxed"
                        style={{ color: "var(--ag-fg-mute)" }}
                      >
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ArchitectureDiagram />
            </div>
          </div>
        </div>
      </section>

      <section className="ag-section">
        <div className="ag-container">
          <p className="ag-eyebrow">Coverage on day one</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              letterSpacing: "-0.022em",
            }}
          >
            We&rsquo;re building Aegis to drop into the agent stacks teams are
            already running.
          </h2>
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            No SDK rewrite, no proprietary runtime. Aegis attaches at the
            process and network boundary; existing frameworks light up
            immediately.
          </p>
          <div
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border sm:grid-cols-3 lg:grid-cols-4"
            style={{
              borderColor: "var(--ag-line)",
              background: "var(--ag-line)",
            }}
          >
            {COVERAGE_LOGOS.map((name) => (
              <div
                key={name}
                className="flex h-24 items-center justify-center px-6"
                style={{
                  background: "var(--ag-canvas)",
                }}
              >
                <span
                  className="ag-mono text-center text-[12px] tracking-[0.18em]"
                  style={{
                    color: "var(--ag-fg-mute)",
                    textTransform: "uppercase",
                  }}
                >
                  {name}
                </span>
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
          <p className="ag-eyebrow">A short history of why we&rsquo;re here</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              letterSpacing: "-0.022em",
            }}
          >
            Each capability we shipped to agents was a new attack surface we
            forgot to guard.
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {TIMELINE.map((t, idx) => (
              <li
                key={t.year}
                className="relative flex flex-col gap-2 pl-5"
                style={{
                  borderLeft:
                    idx === TIMELINE.length - 1
                      ? "1px solid var(--ag-amber)"
                      : "1px solid var(--ag-line)",
                }}
              >
                <span
                  className="ag-mono text-[11px] tracking-[0.28em]"
                  style={{
                    color:
                      idx === TIMELINE.length - 1
                        ? "var(--ag-amber)"
                        : "var(--ag-fg-faint)",
                  }}
                >
                  {t.year}
                </span>
                <p
                  className="text-base"
                  style={{ color: "var(--ag-fg)" }}
                >
                  {t.label}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ag-section">
        <div className="ag-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="ag-eyebrow">Manifesto, in five lines</p>
              <ol className="mt-8 space-y-6">
                {[
                  "An agent is a privileged user. Treat it like one.",
                  "If a finding can&rsquo;t be reproduced, it isn&rsquo;t a finding.",
                  "The web is hostile by default — agents must opt in to read it.",
                  "Memory is not infrastructure. It&rsquo;s an attack vector.",
                  "Security for agents must be invisible to the human and inevitable to the agent.",
                ].map((line, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[2.5rem_1fr] items-start gap-4 border-b pb-6"
                    style={{ borderColor: "var(--ag-line)" }}
                  >
                    <span
                      className="ag-mono text-[11px] tracking-[0.32em]"
                      style={{ color: "var(--ag-fg-faint)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p
                      className="ag-display"
                      style={{
                        fontSize: "1.4rem",
                        lineHeight: 1.3,
                        letterSpacing: "-0.015em",
                        color: "var(--ag-fg)",
                      }}
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  </li>
                ))}
              </ol>
              <Link
                href="/aegis/research"
                className="ag-btn mt-10"
              >
                Read the full manifesto
                <ArrowRight className="ag-btn-arrow" />
              </Link>
            </div>
            <aside
              className="ag-card ag-card-amber p-10"
              style={{
                alignSelf: "start",
                position: "sticky",
                top: "6rem",
              }}
            >
              <ShieldIcon size={28} className="ag-text-amber" />
              <p
                className="ag-display mt-6"
                style={{
                  fontSize: "1.5rem",
                  lineHeight: 1.35,
                  letterSpacing: "-0.012em",
                }}
              >
                When your agent acts on your behalf, who&rsquo;s watching?
              </p>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Aegis is in private research preview. Early-access partners help
                us calibrate threat models against real workloads — in exchange,
                they get the first deterministic security report they&rsquo;ve
                ever had for their agents.
              </p>
              <Link
                href="/aegis/waitlist"
                className="ag-btn ag-btn-primary mt-8 w-full justify-center"
              >
                Request early access
                <ArrowRight className="ag-btn-arrow" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="ag-grid-bg relative overflow-hidden"
        style={{
          paddingTop: "7rem",
          paddingBottom: "8rem",
          background: "var(--ag-canvas-2)",
          borderTop: "1px solid var(--ag-line)",
        }}
      >
        <div className="ag-glow" />
        <div className="ag-container relative text-center">
          <p className="ag-eyebrow">Next move</p>
          <h2
            className="ag-display mx-auto mt-6 max-w-4xl"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.022em",
            }}
          >
            Build the agent. <span className="ag-text-amber italic">Aegis watches its back.</span>
          </h2>
          <p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            Reserve a slot in the early-access program. We pair with twelve
            teams in 2026 — pick one threat model, ship verifiable evidence in
            a week.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/aegis/waitlist" className="ag-btn ag-btn-primary">
              Join the waitlist
              <ArrowRight className="ag-btn-arrow" />
            </Link>
            <Link href="/aegis/securebench" className="ag-btn">
              See SecureBench
              <ArrowRight className="ag-btn-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ArchitectureDiagram() {
  return (
    <div
      className="rounded-2xl border p-6 sm:p-8"
      style={{
        borderColor: "var(--ag-line)",
        background:
          "linear-gradient(180deg, rgba(240,185,11,0.04), rgba(255,255,255,0)) , var(--ag-canvas)",
      }}
    >
      <p className="ag-eyebrow">Diagram · 1.0</p>
      <svg
        viewBox="0 0 480 380"
        className="mt-4 h-auto w-full"
        role="img"
        aria-label="Aegis sits between the agent process and the open world."
      >
        <defs>
          <linearGradient id="ag-diagram-amber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4D055" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#F0B90B" stopOpacity="0.6" />
          </linearGradient>
          <pattern
            id="ag-diag-grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0H20"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
            <path
              d="M0 0V20"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="480" height="380" fill="url(#ag-diag-grid)" />

        {/* Agent process */}
        <g>
          <rect
            x="40"
            y="50"
            width="140"
            height="80"
            rx="10"
            fill="rgba(255,255,255,0.02)"
            stroke="rgba(255,255,255,0.18)"
          />
          <text
            x="110"
            y="78"
            textAnchor="middle"
            fontFamily="var(--font-aegis-mono), monospace"
            fontSize="11"
            letterSpacing="3"
            fill="#8A92A8"
          >
            AGENT
          </text>
          <text
            x="110"
            y="100"
            textAnchor="middle"
            fontFamily="var(--font-aegis-display), serif"
            fontSize="18"
            fill="#F2F1EC"
          >
            Planner
          </text>
          <text
            x="110"
            y="118"
            textAnchor="middle"
            fontFamily="var(--font-aegis-mono), monospace"
            fontSize="10"
            fill="#555C73"
          >
            tools • memory • plan
          </text>
        </g>

        {/* Aegis core */}
        <g>
          <rect
            x="200"
            y="40"
            width="120"
            height="280"
            rx="14"
            fill="url(#ag-diagram-amber)"
            opacity="0.18"
          />
          <rect
            x="200"
            y="40"
            width="120"
            height="280"
            rx="14"
            fill="none"
            stroke="#F0B90B"
            strokeOpacity="0.5"
            strokeDasharray="3 3"
          />
          <text
            x="260"
            y="68"
            textAnchor="middle"
            fontFamily="var(--font-aegis-mono), monospace"
            fontSize="11"
            letterSpacing="3"
            fill="#F0B90B"
          >
            AEGIS
          </text>

          {[
            { y: 96, label: "Sentinel", sub: "process & runtime" },
            { y: 152, label: "Attest", sub: "web & tools" },
            { y: 208, label: "Cleanse", sub: "memory" },
            { y: 264, label: "SecureBench", sub: "evidence" },
          ].map((b) => (
            <g key={b.label}>
              <rect
                x="216"
                y={b.y}
                width="88"
                height="40"
                rx="8"
                fill="#0A0E18"
                stroke="rgba(240,185,11,0.45)"
              />
              <text
                x="260"
                y={b.y + 18}
                textAnchor="middle"
                fontFamily="var(--font-aegis-display), serif"
                fontSize="13"
                fill="#F2F1EC"
              >
                {b.label}
              </text>
              <text
                x="260"
                y={b.y + 32}
                textAnchor="middle"
                fontFamily="var(--font-aegis-mono), monospace"
                fontSize="9"
                letterSpacing="1"
                fill="#8A92A8"
              >
                {b.sub}
              </text>
            </g>
          ))}
        </g>

        {/* World */}
        <g>
          <rect
            x="340"
            y="50"
            width="100"
            height="50"
            rx="8"
            fill="rgba(255,255,255,0.02)"
            stroke="rgba(255,255,255,0.14)"
          />
          <text
            x="390"
            y="72"
            textAnchor="middle"
            fontFamily="var(--font-aegis-mono), monospace"
            fontSize="10"
            letterSpacing="2"
            fill="#8A92A8"
          >
            WEB
          </text>
          <text
            x="390"
            y="88"
            textAnchor="middle"
            fontFamily="var(--font-aegis-mono), monospace"
            fontSize="9"
            fill="#555C73"
          >
            untrusted
          </text>

          <rect
            x="340"
            y="118"
            width="100"
            height="50"
            rx="8"
            fill="rgba(255,255,255,0.02)"
            stroke="rgba(255,255,255,0.14)"
          />
          <text
            x="390"
            y="140"
            textAnchor="middle"
            fontFamily="var(--font-aegis-mono), monospace"
            fontSize="10"
            letterSpacing="2"
            fill="#8A92A8"
          >
            TOOLS
          </text>
          <text
            x="390"
            y="156"
            textAnchor="middle"
            fontFamily="var(--font-aegis-mono), monospace"
            fontSize="9"
            fill="#555C73"
          >
            mcp · cli · api
          </text>

          <rect
            x="340"
            y="186"
            width="100"
            height="50"
            rx="8"
            fill="rgba(255,255,255,0.02)"
            stroke="rgba(255,255,255,0.14)"
          />
          <text
            x="390"
            y="208"
            textAnchor="middle"
            fontFamily="var(--font-aegis-mono), monospace"
            fontSize="10"
            letterSpacing="2"
            fill="#8A92A8"
          >
            MEMORY
          </text>
          <text
            x="390"
            y="224"
            textAnchor="middle"
            fontFamily="var(--font-aegis-mono), monospace"
            fontSize="9"
            fill="#555C73"
          >
            vector · sql · file
          </text>

          <rect
            x="340"
            y="254"
            width="100"
            height="50"
            rx="8"
            fill="rgba(255,255,255,0.02)"
            stroke="rgba(255,255,255,0.14)"
          />
          <text
            x="390"
            y="276"
            textAnchor="middle"
            fontFamily="var(--font-aegis-mono), monospace"
            fontSize="10"
            letterSpacing="2"
            fill="#8A92A8"
          >
            HUMAN
          </text>
          <text
            x="390"
            y="292"
            textAnchor="middle"
            fontFamily="var(--font-aegis-mono), monospace"
            fontSize="9"
            fill="#555C73"
          >
            chat · email · cmd
          </text>
        </g>

        {/* Connections */}
        <g
          stroke="rgba(240,185,11,0.55)"
          strokeWidth="1.4"
          fill="none"
          strokeDasharray="2 4"
        >
          <path d="M180 90 H200" />
          <path d="M180 90 V172 H200" />
          <path d="M180 90 V228 H200" />
          <path d="M180 90 V284 H200" />
        </g>
        <g
          stroke="rgba(240,185,11,0.55)"
          strokeWidth="1.4"
          fill="none"
          strokeDasharray="2 4"
        >
          <path d="M320 116 H340 V75" />
          <path d="M320 172 H340 V143" />
          <path d="M320 228 H340 V211" />
          <path d="M320 284 H340 V279" />
        </g>

        <text
          x="240"
          y="356"
          textAnchor="middle"
          fontFamily="var(--font-aegis-mono), monospace"
          fontSize="10"
          letterSpacing="3"
          fill="#555C73"
        >
          AGENT  ──  AEGIS  ──  WORLD
        </text>
      </svg>
    </div>
  );
}
