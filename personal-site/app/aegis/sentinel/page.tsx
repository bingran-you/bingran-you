import type { Metadata } from "next";
import { PageHero } from "../_components/page-hero";
import { CTASection } from "../_components/cta";
import {
  BoltIcon,
  CheckIcon,
  CpuIcon,
  EyeIcon,
  LockIcon,
  TerminalIcon,
} from "../_components/icons";

export const metadata: Metadata = {
  title: "Aegis CLI · Audit and watch the AI agents on your laptop",
  description:
    "Aegis CLI is a single binary that audits the reachable surface before your AI agent starts and watches every tool call, file write, and network egress while it runs.",
  alternates: { canonical: "/aegis/sentinel" },
};

const VERBS = [
  {
    Icon: TerminalIcon,
    verb: "audit",
    cmd: "aegis audit .",
    title: "What can the agent reach?",
    body: "Run before the agent starts. ~30 seconds. Lists reachable filesystem, env vars and secrets, installed MCP servers and their attestation status, network egress reach, shell tools. Read-only — never mutates state.",
  },
  {
    Icon: EyeIcon,
    verb: "run",
    cmd: "aegis run --profile <p> -- <agent>",
    title: "What is the agent doing?",
    body: "Launches the agent inside a profile. Hooks tool calls, file writes, network requests, MCP traffic. Streams events to your terminal, your SIEM, or a file. The agent has no API to disable this.",
  },
  {
    Icon: LockIcon,
    verb: "quarantine",
    cmd: "aegis quarantine <session>",
    title: "Pull the cord, cleanly.",
    body: "Snapshot agent state, rotate exposed secrets, mark the agent for reset, emit an incident bundle. Pairs with attest verdicts: when an attest signal flips, quarantine fires automatically.",
  },
];

const PROFILES = [
  {
    name: "research-strict",
    body: "Filesystem clamped to ./, env scrubbed of cloud creds, network allowlist enforced, unknown MCP blocked. Default for first-time users running a coding agent on a new repo.",
  },
  {
    name: "ops-readonly",
    body: "Read-only filesystem, network blocked except to the operator’s API allowlist, no shell. For when you want the agent to look but not touch.",
  },
  {
    name: "research-permissive",
    body: "All reads allowed. All writes scoped to ./. Network unrestricted. For deep research sessions where you’ve accepted the surface.",
  },
  {
    name: "<your profile>",
    body: "YAML in your repo. Reviewed in PR. Versioned with your code. CI fails when it drifts.",
  },
];

const FEATURES = [
  {
    Icon: TerminalIcon,
    title: "Tool & MCP fingerprinting",
    body: "Every tool the agent loaded — local CLI, MCP server, browser plugin, custom function — is hashed, attested, and matched against the public Aegis registry of known-good and known-malicious tools.",
  },
  {
    Icon: LockIcon,
    title: "Credential sweep",
    body: "Scans the agent’s reachable credential surface — env, keychain, ~/.config, MCP secrets, browser cookies — and flags anything outside its declared scope.",
  },
  {
    Icon: CpuIcon,
    title: "Process isolation profiles",
    body: "Pre-built sandboxes per task class. Filesystem, network, syscall constraints baked in. No agent-side configuration; Aegis enforces from outside.",
  },
  {
    Icon: BoltIcon,
    title: "Diff-based memory sweep",
    body: "Between tasks, Aegis diffs the agent’s working memory against a baseline and removes drift, transient context, and any data classified as sensitive by your policy.",
  },
  {
    Icon: EyeIcon,
    title: "Continuous attestation stream",
    body: "Every tool call, file write, and network connection emits a signed attestation event. Pipe it to your SIEM. Replay it for an auditor. The agent doesn’t get to silently change its own behavior.",
  },
  {
    Icon: CheckIcon,
    title: "Single binary, no daemon",
    body: "~14 MB static binary. brew, npm, pip — pick one. Hooks at the OS process and network boundary. No agent SDK changes; no privileged service running on your machine.",
  },
];

const STAT_LINES: [string, string, string][] = [
  ["S/1", "Audit pass · time", "~30s on a 4k-file repo"],
  ["S/2", "Audit pass · side effects", "none — read-only"],
  ["S/3", "Run mode · overhead", "<2ms p95 per supervised event"],
  ["S/4", "Binary size", "~14 MB · static · cross-platform"],
  ["S/5", "Distribution", "brew · npm · pip · github releases"],
  ["S/6", "Day-one targets", "Claude Code · Codex CLI · OpenAI Agents SDK"],
];

export default function SentinelPage() {
  return (
    <>
      <PageHero
        eyebrow="Aegis CLI · v0.1 · the live product"
        title={
          <>
            Audit before. <span className="ag-text-amber italic">Watch during.</span>{" "}
            Walk away.
          </>
        }
        lead={
          <>
            One binary. Three verbs. Sits beside the agent process — not inside
            its loop. Audits the reachable surface before the agent starts and
            streams a signed event bundle while it runs. The agent has no API
            to disable it.
          </>
        }
        primary={{ href: "/aegis/waitlist", label: "Send us your incident" }}
        secondary={{ href: "/aegis/platform", label: "How it fits the roadmap" }}
      />

      <section className="ag-section">
        <div className="ag-container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="ag-eyebrow">In one command</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                Run it once before the agent starts. Most users stop there for
                week one.
              </h2>
              <p
                className="mt-6 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                The audit is the on-ramp. It’s read-only, takes 30 seconds,
                and produces a one-page report your security lead can read in
                a meeting. Most early-access partners run audit for a week
                before turning on <code className="ag-mono">aegis run</code>.
                That’s by design.
              </p>
              <ul
                className="mt-8 space-y-3 text-sm"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                {[
                  "Linux, macOS, Windows · ARM + x86_64",
                  "Single static binary, ~14 MB, no daemon",
                  "Hooks at the OS process and network boundary — no SDK changes",
                  "Detached evidence stream — the agent has no write access",
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
                __html: `<span class="c-prompt">$</span> <span class="c-cmd">aegis</span> <span class="c-arg">run</span> <span class="c-flag">--profile</span> research-strict <span class="c-flag">--</span> claude
<span class="c-comment">▸ aegis cli · v0.1.0</span>
<span class="c-comment">▸ profile: research-strict</span>

<span class="c-mute">[scan]</span>      <span class="c-ok">✓ runtime fingerprinted</span>          <span class="c-mute">328ms</span>
<span class="c-mute">[scan]</span>      <span class="c-ok">✓ 12 tools attested</span>              <span class="c-mute">141ms</span>
<span class="c-mute">[scan]</span>      <span class="c-warn">! 1 mcp server unknown</span>
<span class="c-mute">           </span>      → blocked: github.com/joe/yolo-mcp@HEAD
<span class="c-mute">[sweep]</span>     <span class="c-ok">✓ credentials in scope</span>           <span class="c-mute">63ms</span>
<span class="c-mute">[isolate]</span>   <span class="c-ok">✓ profile applied</span>                <span class="c-mute">17ms</span>
<span class="c-mute">           </span>      fs ⊂ ~/work · net ⊂ allowlist
<span class="c-mute">           </span>      syscall.deny=ptrace,setns,unshare

<span style="color: var(--ag-amber)">▸ aegis is now supervising claude.</span>
<span class="c-mute">           </span>      events → evt.aegis-ledger
<span class="c-mute">           </span>      pause  → ⌃C (snapshot + quarantine)
<span class="c-mute">           </span>      tail   → <span class="c-cmd">aegis</span> <span class="c-arg">tail</span> --pretty`,
              }}
            />
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
          <p className="ag-eyebrow">Three verbs</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              letterSpacing: "-0.022em",
            }}
          >
            What the CLI does, end to end.
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {VERBS.map(({ Icon, verb, cmd, title, body }) => (
              <article key={verb} className="ag-card ag-lift p-7">
                <div className="flex items-start justify-between">
                  <span className="ag-pillar-icon">
                    <Icon size={18} />
                  </span>
                  <span
                    className="ag-mono text-[11px] tracking-[0.32em]"
                    style={{ color: "var(--ag-fg-faint)" }}
                  >
                    {verb.toUpperCase()}
                  </span>
                </div>
                <h3
                  className="ag-display mt-6"
                  style={{ fontSize: "1.4rem", letterSpacing: "-0.015em" }}
                >
                  {title}
                </h3>
                <p
                  className="ag-mono mt-3 text-[12px]"
                  style={{ color: "var(--ag-amber)" }}
                >
                  {cmd}
                </p>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ag-section">
        <div className="ag-container">
          <p className="ag-eyebrow">Profiles</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              letterSpacing: "-0.022em",
            }}
          >
            Three baked-in profiles. Or write your own — versioned in your
            repo, reviewed in PR.
          </h2>
          <div
            className="mt-12 overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--ag-line)" }}
          >
            {PROFILES.map((p, idx) => (
              <div
                key={p.name}
                className="grid gap-4 px-6 py-5 sm:grid-cols-[14rem_1fr]"
                style={{
                  borderTop: idx > 0 ? "1px solid var(--ag-line)" : undefined,
                  background: idx % 2 === 0 ? "var(--ag-canvas)" : "var(--ag-canvas-2)",
                }}
              >
                <code
                  className="ag-mono text-sm"
                  style={{ color: "var(--ag-amber)" }}
                >
                  {p.name}
                </code>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {p.body}
                </p>
              </div>
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
          <p className="ag-eyebrow">Capabilities</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              letterSpacing: "-0.022em",
            }}
          >
            What the CLI watches, and what it does about it.
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {FEATURES.map(({ Icon, title, body }) => (
              <article key={title} className="ag-card ag-lift p-7">
                <span className="ag-pillar-icon">
                  <Icon size={18} />
                </span>
                <h3
                  className="ag-display mt-6"
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ag-section">
        <div className="ag-container">
          <p className="ag-eyebrow">Spec sheet · v0.1</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              letterSpacing: "-0.022em",
            }}
          >
            The numbers, where we have them. Honest about what we don’t.
          </h2>
          <div
            className="mt-10 grid divide-y rounded-2xl border"
            style={{
              borderColor: "var(--ag-line)",
              background: "rgba(7, 9, 15, 0.55)",
            }}
          >
            {STAT_LINES.map(([id, k, v]) => (
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
          <p
            className="ag-mono mt-6 text-[11px] tracking-[0.18em]"
            style={{ color: "var(--ag-fg-faint)" }}
          >
            We benchmark every release against SecureBench and publish the
            score. Numbers above are from internal runs against v0.1 reference
            workloads.
          </p>
        </div>
      </section>

      <CTASection
        title={
          <>
            One CLI between the agent and the operating system.{" "}
            <span className="ag-text-amber italic">Yours.</span>
          </>
        }
        body={
          <>
            Send us a redacted log of an agent run from your last week. We’ll
            send back a forensic report in 48 hours and a binary you can run
            against your stack.
          </>
        }
        primary={{ href: "/aegis/waitlist", label: "Send us your incident" }}
        secondary={{ href: "/aegis/cleanse", label: "Next: Aegis Cleanse →" }}
      />
    </>
  );
}
