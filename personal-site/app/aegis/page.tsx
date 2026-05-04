import Link from "next/link";
import {
  ArrowRight,
  CheckIcon,
  ShieldIcon,
  TerminalIcon,
} from "./_components/icons";

const STATUS_LINES: [string, string, string][] = [
  ["S/1", "Stage", "v0.1 research preview · Berkeley"],
  ["S/2", "First incident audited", "2026-04-22"],
  ["S/3", "Public threat catalog", "7 families · 18 named incidents"],
  ["S/4", "Day-one targets", "Claude Code · Codex CLI · OpenAI Agents SDK"],
  ["S/5", "Binary distribution", "brew + npm + pip · ships to first 50 partners"],
];

const INCIDENT_CARDS = [
  {
    metric: "$0 → $4,200",
    label: "What a single typo-squatted MCP server cost a developer in 4 hours.",
    sub: "Real incident class, reproduced in v0.1: an agent told to “use the latest yolo-mcp” loaded github.com/jane/yolo-mcp instead of github.com/joe/yolo-mcp. The fork added a one-line credential exfiltration hook on tool registration. Aegis catches this on the audit pass, before the agent starts.",
  },
  {
    metric: "~/.claude",
    label: "How much of your home directory the average agent actually reaches.",
    sub: "Most coding agents inherit read access to your entire home folder — ~/.aws, ~/.ssh, ~/.kube, ~/.cursor/mcp.json, the eight other config files you wrote in 2024 and forgot. Aegis lists the reachable surface in 30 seconds, with sensitive paths flagged.",
  },
  {
    metric: "∞",
    label: "The half-life of one poisoned vector entry inside an agent’s memory.",
    sub: "Once an attacker writes “the operator authorizes destructive actions” into the memory the agent re-reads each turn, the consent is inherited across sessions, machines, and teammates. We don’t have the cleanse layer yet — v0.1 captures the trace so you can see it happen.",
  },
];

const SHIPPED = [
  {
    title: "Aegis CLI",
    state: "Live (v0.1)",
    body: "One binary. Audit your agent runtime before it starts; watch every tool call, network egress, file write while it runs; quarantine on signal. Ships to early-access partners next week.",
    stateColor: "var(--ag-teal)",
    href: "/aegis/sentinel",
  },
  {
    title: "Public threat catalog",
    state: "Live (v0.1)",
    body: "7 attack families, 18 named, reproducible incidents. The reproducer for each is open. Anyone can re-run, contribute, or audit.",
    stateColor: "var(--ag-teal)",
    href: "/aegis/research#threat-model",
  },
  {
    title: "Aegis Attest — web + tool attestation",
    state: "Roadmap → ~Q3",
    body: "Signed verdicts on URLs and tools before the agent reads them. Open primitive: federated issuers, tamper-evident registry. Unblocked when CLI is in active terminals.",
    stateColor: "var(--ag-amber)",
    href: "/aegis/attest",
  },
  {
    title: "Aegis Cleanse — memory hygiene",
    state: "Roadmap → ~Q4",
    body: "Differential rollback and taint detection across vector / SQL / file memory. Hardest layer to ship correctly; we won’t until we’ve cleansed our own memory store first.",
    stateColor: "var(--ag-amber)",
    href: "/aegis/cleanse",
  },
  {
    title: "SecureBench — adversarial benchmark",
    state: "Alpha (running on ourselves)",
    body: "207 scenarios designed across 5 suites. We run it against our CLI and our agents. Public score cards open when v0.1 ships externally.",
    stateColor: "var(--ag-amber)",
    href: "/aegis/securebench",
  },
];

const DAY_BY_DAY = [
  {
    day: "Day 1",
    title: "aegis audit .",
    body: "30 seconds. You see the surface your agent can reach: 4,217 files, 84 env vars, 7 MCP servers (2 unknown), 14 shell tools. You realize you’ve been over-permissioned. You file a Slack thread for your security lead with the audit URL.",
  },
  {
    day: "Day 2",
    title: "aegis run --profile research-strict -- claude",
    body: "You launch the agent inside the profile. Filesystem clamped to ./, network allowlisted, unknown MCP blocked. The agent runs as before, except now you have an event stream you can pipe to your terminal, your SIEM, or a file. You leave the room.",
  },
  {
    day: "Day 3",
    title: "First incident",
    body: "You hit one. An attested-as-safe domain returned a page with an embedded prompt injection. Aegis flagged it; the agent ignored it. You read the bundle. You add the URL to the public threat catalog. You sleep.",
  },
];

const COMPETITORS = [
  {
    name: "Lakera Guard, Promptarmor",
    pos: "in-loop LLM firewalls",
    diff: "They sit inside the agent. The agent can be argued out of them. Aegis sits outside the process; the agent has no API to talk to it.",
  },
  {
    name: "Robust Intelligence, Hidden Layer",
    pos: "model security at deploy time",
    diff: "They harden the model before it ships. Aegis protects the agent process at runtime, against threats the model can’t see.",
  },
  {
    name: "Endor Labs, Snyk",
    pos: "AppSec for code humans wrote",
    diff: "They guard the codebase agents read. Aegis guards the runtime where agents act. Lineage; not the same problem.",
  },
  {
    name: "CrowdStrike, SentinelOne (EDR)",
    pos: "endpoint detection at OS layer",
    diff: "They’re generic. They don’t understand tool calls, MCP servers, agent memory, or attestation. Aegis is agent-aware.",
  },
];

const RISKS = [
  {
    n: "01",
    title: "Frameworks ship native isolation first",
    body: "OpenAI Agents SDK or Claude Code could ship process isolation natively in 6 months. Mitigation: Aegis is framework-neutral; the value is observability + the cross-framework threat catalog, not isolation alone. We become the layer above whichever vendor implements containment.",
  },
  {
    n: "02",
    title: "The market is too early",
    body: "Most agent operators don’t feel the pain yet. Mitigation: pick the engineers who already self-host agents and have already had a near-miss. Twelve such teams → the deal works → the catalog grows → the rest follows when the market catches up.",
  },
  {
    n: "03",
    title: "Open primitives erode the business",
    body: "Attestation schema, threat catalog, scoring methodology are all open. Mitigation: defense-in-depth on the parts only we can ship at scale — detection models, hosted ledger, managed control plane, enterprise integrations. The open parts are the moat’s topsoil, not the moat.",
  },
];

const TENETS = [
  "An agent is a privileged user. Treat it like one.",
  "If a finding can’t be reproduced, it isn’t a finding.",
  "The web is hostile by default — agents must opt in to read it.",
  "Memory is not infrastructure. It’s an attack vector.",
  "Security for agents must be invisible to the human and inevitable to the agent.",
];

export default function AegisHome() {
  return (
    <>
      <section
        className="ag-grid-bg ag-scanline relative overflow-hidden"
        style={{ paddingTop: "5rem", paddingBottom: "7rem" }}
      >
        <div className="ag-glow" />
        <div className="ag-container relative">
          <div className="flex flex-wrap items-center gap-3">
            <span className="ag-pill ag-pill-amber">
              <span className="ag-pill-dot" />
              v0.1 research preview · Berkeley
            </span>
            <span className="ag-pill">Founders: Bingran You + Serena Ke</span>
            <span className="ag-pill">Two-person team · hiring</span>
          </div>

          <h1
            className="ag-display mt-10 max-w-5xl"
            style={{
              fontSize: "clamp(2.4rem, 5.6vw, 4.8rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
            }}
          >
            <span style={{ color: "var(--ag-fg)" }}>It’s 11 PM.</span>{" "}
            <span className="ag-text-grad">
              You gave the agent shell access. You don’t know what it’s about to do.
            </span>
          </h1>

          <p
            className="mt-8 max-w-2xl text-lg leading-relaxed"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            <span style={{ color: "var(--ag-fg)" }}>
              Aegis is observability for AI agents.
            </span>{" "}
            One CLI. <em>Audit</em> the agent’s reachable surface before it starts. <em>Watch</em>{" "}
            every tool call, file write, and network egress while it runs.{" "}
            <em>Quarantine</em> on signal. Walk away.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/aegis/waitlist" className="ag-btn ag-btn-primary">
              Send us your incident — free audit
              <ArrowRight className="ag-btn-arrow" />
            </Link>
            <Link href="/aegis/sentinel" className="ag-btn">
              See the CLI
              <ArrowRight className="ag-btn-arrow" />
            </Link>
            <Link
              href="/aegis/research"
              className="text-sm transition hover:text-[var(--ag-amber)]"
              style={{ color: "var(--ag-fg-mute)", marginLeft: "0.5rem" }}
            >
              or read the field notes →
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
                If you let an agent run, you let it run somewhere. The blast
                radius is your laptop.
              </h2>
              <p
                className="mt-7 max-w-md text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                We trust agents because we watch them. The watching doesn’t
                scale, and we know it. Most engineers running Claude Code,
                Codex or Devin in their terminal have given the agent more
                reach than the agent’s prompt suggests — because the
                <em> agent’s prompt isn’t where the reach lives</em>. The reach lives
                in the OS.
              </p>
              <p
                className="mt-4 max-w-md text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Aegis tells you the actual reach — first as a number you can
                show your security lead, then as a stream of events as the
                agent runs.
              </p>
            </div>
            <div className="space-y-5">
              {INCIDENT_CARDS.map((p) => (
                <article
                  key={p.metric}
                  className="ag-card ag-lift p-7"
                >
                  <p
                    className="ag-display"
                    style={{
                      fontSize: "clamp(2rem, 3vw, 2.6rem)",
                      color: "var(--ag-amber)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.05,
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
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="ag-eyebrow">The artifact</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                Run one command. Get the audit you’ve been meaning to do for
                three months.
              </h2>
              <p
                className="mt-6 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                <code className="ag-mono" style={{ color: "var(--ag-amber)" }}>
                  aegis audit .
                </code>{" "}
                runs in your project root, takes ~30 seconds, and emits a
                report your security lead can read. No SDK, no instrumentation,
                no daemon. The same data feeds{" "}
                <code className="ag-mono">aegis run</code> when you’re ready
                for runtime supervision.
              </p>
              <ul
                className="mt-7 space-y-3 text-sm"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                {[
                  "Single static binary, ~14 MB",
                  "Linux, macOS, Windows · ARM + x86_64",
                  "Read-only by default — audit pass never mutates state",
                  "Output is signed JSON; the human-readable view is a render of it",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <CheckIcon
                      size={14}
                      className="mt-[3px] shrink-0 ag-text-amber"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <pre
              className="ag-code"
              dangerouslySetInnerHTML={{
                __html: `<span class="c-prompt">$</span> <span class="c-cmd">aegis</span> <span class="c-arg">audit</span> .
<span class="c-comment">▸ aegis audit · v0.1.0</span>
<span class="c-comment">▸ cwd: ~/work/agent-stack</span>

<span class="c-mute">[fs]</span>      <span class="c-ok">reachable</span>     4,217 files · 2.1 GB
<span class="c-mute">           </span>      <span class="c-warn">sensitive</span>     ~/.aws/credentials
<span class="c-mute">           </span>                    ~/.ssh/id_ed25519
<span class="c-mute">           </span>                    ~/.cursor/mcp.json
<span class="c-mute">[env]</span>     <span class="c-ok">vars in scope</span> 84
<span class="c-mute">           </span>      <span class="c-warn">secrets</span>       ANTHROPIC_API_KEY, OPENAI_API_KEY
<span class="c-mute">           </span>                    DATABASE_URL, GITHUB_TOKEN
<span class="c-mute">[mcp]</span>     <span class="c-ok">installed</span>     7
<span class="c-mute">           </span>      <span class="c-warn">unknown</span>       2 (yolo-mcp@HEAD, internal-tools@v0.3)
<span class="c-mute">[net]</span>     <span class="c-warn">egress</span>        unrestricted
<span class="c-mute">           </span>      <span class="c-ok">suggest</span>       allowlist {api.anthropic.com,
<span class="c-mute">           </span>                              api.github.com,
<span class="c-mute">           </span>                              *.your-domain.com}
<span class="c-mute">[tools]</span>   <span class="c-ok">shell tools</span>   14 (incl. rm, sudo, curl)

<span style="color: var(--ag-amber)">▸ verdict: amber — surface is wider than declared scope.</span>
<span class="c-mute">           </span>      profile suggested: <span class="c-arg">research-strict</span>
<span class="c-mute">           </span>      re-audit with: <span class="c-cmd">aegis</span> <span class="c-arg">audit</span> . <span class="c-flag">--apply</span> research-strict
<span class="c-mute">           </span>      bundle:        evt://01HKZ5…4KQ.aegis-audit`,
              }}
            />
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
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="ag-eyebrow">What we ship today · what’s on the roadmap</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                One product live. Three on the roadmap.{" "}
                <span className="ag-text-amber italic">In that order, on purpose.</span>
              </h2>
              <p
                className="mt-5 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                The temptation in agent security is to ship a four-product
                platform from day one. We’re not doing that. The CLI is the
                wedge — the smallest thing an engineer pays for this week.
                The other layers ship after this one earns their keep.
              </p>
            </div>
            <Link href="/aegis/platform" className="ag-btn self-start">
              Roadmap · in detail
              <ArrowRight className="ag-btn-arrow" />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {SHIPPED.map((s, idx) => (
              <Link
                key={s.title}
                href={s.href}
                className={`ag-card ag-lift group flex flex-col p-7 ${
                  idx === 0 ? "lg:col-span-2 ag-card-amber" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="ag-display"
                    style={{
                      fontSize: idx === 0 ? "1.85rem" : "1.4rem",
                      letterSpacing: "-0.018em",
                    }}
                  >
                    {s.title}
                  </h3>
                  <span
                    className="ag-pill"
                    style={{
                      borderColor: s.stateColor,
                      color: s.stateColor,
                      background: "rgba(255,255,255,0.02)",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      className="ag-pill-dot"
                      style={{ background: s.stateColor, boxShadow: `0 0 10px ${s.stateColor}` }}
                    />
                    {s.state}
                  </span>
                </div>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {s.body}
                </p>
                <div
                  className="mt-6 flex items-center gap-2 text-sm transition group-hover:text-[var(--ag-amber)]"
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

      <section className="ag-section">
        <div className="ag-container">
          <p className="ag-eyebrow">Day 1 · Day 2 · Day 3</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              letterSpacing: "-0.022em",
            }}
          >
            What the first week as an early-access partner looks like.
          </h2>
          <ol className="mt-12 grid gap-5 lg:grid-cols-3">
            {DAY_BY_DAY.map(({ day, title, body }, idx) => (
              <li
                key={day}
                className="ag-card p-7"
                style={{
                  borderColor:
                    idx === DAY_BY_DAY.length - 1
                      ? "var(--ag-line-amber)"
                      : undefined,
                }}
              >
                <span
                  className="ag-mono text-[11px] tracking-[0.32em]"
                  style={{
                    color:
                      idx === DAY_BY_DAY.length - 1
                        ? "var(--ag-amber)"
                        : "var(--ag-fg-faint)",
                  }}
                >
                  {day}
                </span>
                <h3
                  className="ag-display mt-5"
                  style={{ fontSize: "1.3rem", letterSpacing: "-0.015em" }}
                >
                  <code
                    className="ag-mono"
                    style={{
                      fontSize: "0.9em",
                      color: "var(--ag-fg)",
                    }}
                  >
                    {title}
                  </code>
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {body}
                </p>
              </li>
            ))}
          </ol>
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
              <p className="ag-eyebrow">Founder’s note</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                I built this because I needed it.
              </h2>
              <p
                className="mt-3 ag-mono text-[11px] tracking-[0.28em]"
                style={{ color: "var(--ag-fg-faint)" }}
              >
                BINGRAN YOU · CO-FOUNDER · PHD CANDIDATE, UC BERKELEY
              </p>
              <a
                href="https://x.com/bingran_bry"
                target="_blank"
                rel="noopener noreferrer"
                className="ag-link mt-4 inline-flex text-sm"
              >
                @bingran_bry on X
              </a>
              <p
                className="mt-5 text-xs leading-relaxed"
                style={{ color: "var(--ag-fg-faint)" }}
              >
                Co-founded with{" "}
                <a
                  className="ag-link"
                  href="https://github.com/serenakeyitan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Serena Ke
                </a>
                .
              </p>
            </div>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--ag-fg-mute)" }}>
              <p>
                For the last two years I’ve been benchmarking AI agents at
                Berkeley — building deterministic test environments
                (<a className="ag-link" href="https://github.com/bingran-you/smolclaw" target="_blank" rel="noopener noreferrer">smolclaw</a>),
                an offline behavior-testing CLI
                (<a className="ag-link" href="https://github.com/bingran-you/sbti-cli" target="_blank" rel="noopener noreferrer">sbti-cli</a>),
                and{" "}
                <a className="ag-link" href="https://github.com/benchflow-ai/skillsbench" target="_blank" rel="noopener noreferrer">SkillsBench</a>,
                a benchmark for agent skill use. On any given day I have eight
                to twelve agents running on this laptop in parallel worktrees.
              </p>
              <p>
                A month ago I gave Claude Code shell access to fix a small
                bug. I went to the kitchen. I came back to a process that had
                touched <code className="ag-mono">~/.aws/credentials</code>,
                installed an MCP server I didn’t recognize, and had three
                subprocesses I couldn’t account for. Nothing malicious —
                just an agent doing its job. But I had no audit trail and no
                way to make one without instrumenting the agent itself.
              </p>
              <p>
                After two years of measuring how agents do their job, I think
                the next problem isn’t capability. It’s containment.
                Aegis is the tool I wished I had last quarter. I’m building
                it openly. <span style={{ color: "var(--ag-fg)" }}>If you’ve been there — send me a redacted log of an
                agent run from your last week. I’ll send back a forensic
                report in 48 hours.</span>{" "}
                If we missed something, we add the class to the public threat
                catalog. That’s the deal.
              </p>
              <p
                className="ag-mono text-[12px] tracking-[0.18em]"
                style={{ color: "var(--ag-fg-faint)" }}
              >
                — BINGRAN
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ag-section">
        <div className="ag-container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="ag-eyebrow">Why now</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                Capability outran containment in 18 months.
              </h2>
              <p
                className="mt-6 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                In late 2024, asking an agent to read a webpage was a research
                demo. In Q1 2026, every coding agent reads, executes, installs,
                and writes — in production, on developer laptops, with
                operator credentials, on indefinite loops.
              </p>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                None of that came with a security model. Guardrails sit inside
                the model loop — the agent can be argued out of them.
                Frameworks ship default-trust on every input. EDR doesn’t
                understand tool calls, MCP, or memory. The only working
                control today is a human watching their terminal.
              </p>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: "var(--ag-fg)" }}
              >
                That control was always going to break. Aegis is the layer
                that runs while the human walks away.
              </p>
            </div>
            <div className="space-y-3">
              <p className="ag-eyebrow">How we’re different</p>
              <div
                className="overflow-hidden rounded-2xl border"
                style={{ borderColor: "var(--ag-line)" }}
              >
                <div
                  className="grid grid-cols-[1.4fr_1.4fr] gap-4 px-6 py-3 text-[11px] tracking-[0.3em]"
                  style={{
                    background: "var(--ag-canvas-2)",
                    borderBottom: "1px solid var(--ag-line)",
                    color: "var(--ag-fg-faint)",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-aegis-mono), monospace",
                  }}
                >
                  <span>Adjacent / lineage</span>
                  <span>Where we sit</span>
                </div>
                {COMPETITORS.map((c, idx) => (
                  <div
                    key={c.name}
                    className="grid grid-cols-[1.4fr_1.4fr] items-start gap-4 px-6 py-5"
                    style={{
                      borderTop: idx > 0 ? "1px solid var(--ag-line)" : undefined,
                      background: idx % 2 === 0 ? "var(--ag-canvas)" : "var(--ag-canvas-2)",
                    }}
                  >
                    <div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--ag-fg)" }}
                      >
                        {c.name}
                      </p>
                      <p
                        className="ag-mono mt-1.5 text-[11px] tracking-[0.18em]"
                        style={{
                          color: "var(--ag-fg-faint)",
                          textTransform: "uppercase",
                        }}
                      >
                        {c.pos}
                      </p>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--ag-fg-mute)" }}
                    >
                      {c.diff}
                    </p>
                  </div>
                ))}
              </div>
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
          <p className="ag-eyebrow">What could kill this · honestly</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              letterSpacing: "-0.022em",
            }}
          >
            Three risks. All survivable. Worth saying out loud.
          </h2>
          <ol className="mt-12 grid gap-5 lg:grid-cols-3">
            {RISKS.map(({ n, title, body }) => (
              <li key={n} className="ag-card p-7">
                <span
                  className="ag-mono text-[11px] tracking-[0.32em]"
                  style={{ color: "var(--ag-amber)" }}
                >
                  R/{n}
                </span>
                <h3
                  className="ag-display mt-5"
                  style={{ fontSize: "1.25rem", letterSpacing: "-0.012em" }}
                >
                  {title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {body}
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
                {TENETS.map((line, i) => (
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
                    >
                      {line}
                    </p>
                  </li>
                ))}
              </ol>
              <Link
                href="/aegis/research"
                className="ag-btn mt-10"
              >
                Field notes · threat catalog · reading list
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
              <p className="ag-eyebrow mt-6">The deal</p>
              <p
                className="ag-display mt-4"
                style={{
                  fontSize: "1.4rem",
                  lineHeight: 1.3,
                  letterSpacing: "-0.012em",
                }}
              >
                Send us your incident. We send back a forensic report in 48 hours.
              </p>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                First 50 partners. Sanitized log in, signed bundle out. If it’s a
                new attack class, we add it to the public catalog (with or
                without your name — your call).
              </p>
              <Link
                href="/aegis/waitlist"
                className="ag-btn ag-btn-primary mt-7 w-full justify-center"
              >
                Send us your incident
                <ArrowRight className="ag-btn-arrow" />
              </Link>
              <p
                className="ag-mono mt-4 text-[11px] tracking-[0.22em]"
                style={{ color: "var(--ag-fg-faint)" }}
              >
                We respond within 3 business days.
              </p>
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
          <TerminalIcon size={32} className="ag-text-amber mx-auto" />
          <p className="ag-eyebrow mt-4">One command. Three verbs.</p>
          <h2
            className="ag-display mx-auto mt-6 max-w-4xl"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.022em",
            }}
          >
            <code className="ag-mono" style={{ color: "var(--ag-fg)" }}>
              aegis audit · aegis run · aegis quarantine
            </code>
          </h2>
          <p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            That’s the product. Everything else on this site is the
            reasoning behind it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/aegis/waitlist" className="ag-btn ag-btn-primary">
              Send us your incident
              <ArrowRight className="ag-btn-arrow" />
            </Link>
            <Link href="/aegis/sentinel" className="ag-btn">
              See the CLI in detail
              <ArrowRight className="ag-btn-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
