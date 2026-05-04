import type { Metadata } from "next";
import { PageHero } from "../_components/page-hero";
import { CTASection } from "../_components/cta";
import {
  BoltIcon,
  CheckIcon,
  CpuIcon,
  EyeIcon,
  LinkIcon,
  LockIcon,
  ShieldIcon,
  TerminalIcon,
} from "../_components/icons";

export const metadata: Metadata = {
  title: "Aegis Sentinel · Runtime hygiene for local agents",
  description:
    "Aegis Sentinel is a 360° CLI guard for the agent process: tool fingerprinting, credential sweeps, isolation profiles, and quarantine.",
  alternates: { canonical: "/aegis/sentinel" },
};

const FEATURES = [
  {
    Icon: TerminalIcon,
    title: "Tool & MCP fingerprinting",
    body: "Every tool the agent loaded — local CLI, MCP server, browser plugin, custom function — is hashed, attested, and matched against the public Aegis registry of known-good and known-malicious tools.",
  },
  {
    Icon: LockIcon,
    title: "Credential sweep",
    body: "Scans the agent&rsquo;s reachable credential surface — env, keychain, ~/.config, MCP secrets, browser cookies — and flags anything the agent shouldn&rsquo;t see for its declared scope.",
  },
  {
    Icon: CpuIcon,
    title: "Process isolation profiles",
    body: "Pre-built sandboxes per task class (research, coding, ops). Filesystem, network, syscall constraints baked in. No agent-side configuration; Sentinel enforces from outside.",
  },
  {
    Icon: ShieldIcon,
    title: "Compromised-state quarantine",
    body: "When Sentinel signals a compromise, the agent is paused, state snapshotted, secrets rotated. The next session starts from a known-clean checkpoint, not yesterday&rsquo;s.",
  },
  {
    Icon: BoltIcon,
    title: "Diff-based memory sweep",
    body: "Between tasks, Sentinel diffs the agent&rsquo;s working memory against a baseline and removes drift, transient context, and any data classified as sensitive by your policy.",
  },
  {
    Icon: EyeIcon,
    title: "Continuous attestation",
    body: "Every tool call, file write, and network connection emits an attestation event. Pipe it to your SIEM. The agent doesn&rsquo;t get to silently change its own behavior.",
  },
];

const COMMANDS = [
  {
    cmd: "aegis sentinel scan",
    purpose: "Fingerprint the agent runtime — installed tools, MCP servers, environment, reachable credentials.",
  },
  {
    cmd: "aegis sentinel sweep --credentials",
    purpose: "Sweep the credential surface; emit a redacted manifest of what the agent could see.",
  },
  {
    cmd: "aegis sentinel run --profile research-strict",
    purpose: "Launch the agent inside an isolation profile.",
  },
  {
    cmd: "aegis sentinel cleanse --memory",
    purpose: "Delta-cleanse working memory between tasks; remove drift and PII.",
  },
  {
    cmd: "aegis sentinel quarantine <session>",
    purpose: "Snapshot session state, rotate exposed secrets, mark the agent for reset.",
  },
  {
    cmd: "aegis sentinel attest",
    purpose: "Emit an attestation bundle for the current runtime — replayable, signed.",
  },
];

const CHECKS = [
  "Unknown MCP server connected mid-session",
  "Tool call to a domain not in the attestation registry",
  "Credential read outside declared scope",
  "Memory write tagged as poisoned by classifier",
  "Spawned subprocess outside the isolation profile",
  "Attempted self-modification of the agent binary",
  "Unexpected egress to a non-allowlisted region",
  "Persistent file written outside the workspace",
];

export default function SentinelPage() {
  return (
    <>
      <PageHero
        eyebrow="Aegis · Sentinel"
        title={
          <>
            A <span className="ag-text-amber italic">360° guard</span> for the agent process.
          </>
        }
        lead={
          <>
            Sentinel is the local-first CLI that audits, isolates and repairs
            an agent&rsquo;s runtime. Think of it as the antivirus and process
            warden the agent never had — running outside the agent so the agent
            can&rsquo;t turn it off.
          </>
        }
        primary={{ href: "/aegis/waitlist", label: "Request early access" }}
        secondary={{ href: "/aegis/platform", label: "How it fits the platform" }}
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
                Sentinel ships as a single binary. Run it once, before the
                agent starts.
              </h2>
              <p
                className="mt-6 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                It launches the agent inside a verified isolation profile,
                hooks its tool surface, and starts streaming attestation
                events to your evidence sink — your SIEM, an Aegis ledger, or
                a local file.
              </p>
              <ul
                className="mt-8 space-y-3 text-sm"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                {[
                  "Linux, macOS, Windows · ARM + x86_64",
                  "Single binary, ~14 MB, no daemon required",
                  "Hooks at the OS process and network boundary — no agent SDK changes",
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
                __html: `<span class="c-prompt">$</span> <span class="c-cmd">aegis</span> <span class="c-arg">sentinel</span> <span class="c-cmd">run</span> <span class="c-flag">--profile</span> research-strict <span class="c-flag">--</span> claude
<span class="c-comment">▸ aegis sentinel · v0.1.0</span>
<span class="c-comment">▸ Profile: research-strict</span>

<span class="c-mute">[scan]</span>      <span class="c-ok">✓ runtime fingerprinted</span>          <span class="c-mute">328ms</span>
<span class="c-mute">[scan]</span>      <span class="c-ok">✓ 12 tools attested</span>              <span class="c-mute">141ms</span>
<span class="c-mute">[scan]</span>      <span class="c-warn">! 1 mcp server unknown</span>
<span class="c-mute">           </span>      → blocked: github.com/joe/yolo-mcp@HEAD
<span class="c-mute">[sweep]</span>     <span class="c-ok">✓ credentials in scope</span>           <span class="c-mute">63ms</span>
<span class="c-mute">[isolate]</span>   <span class="c-ok">✓ profile applied</span>                <span class="c-mute">17ms</span>
<span class="c-mute">           </span>      fs ⊂ ~/work · net ⊂ allowlist · syscall.deny=ptrace,setns

<span style="color: var(--ag-amber)">▸ Aegis is now supervising claude.</span>
<span class="c-mute">           </span>      events → evt.aegis-ledger
<span class="c-mute">           </span>      pause → ⌃C (snapshot + quarantine)`,
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
          <p className="ag-eyebrow">Capabilities</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              letterSpacing: "-0.022em",
            }}
          >
            What Sentinel watches, and what it does about it.
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {FEATURES.map(({ Icon, title, body }) => (
              <article key={title} className="ag-card ag-lift p-7">
                <span className="ag-pillar-icon">
                  <Icon size={18} />
                </span>
                <h3
                  className="ag-display mt-6"
                  style={{ fontSize: "1.4rem", letterSpacing: "-0.015em" }}
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
          <p className="ag-eyebrow">Command reference · v0.1</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              letterSpacing: "-0.022em",
            }}
          >
            Six verbs to keep your agent from going feral.
          </h2>
          <div
            className="mt-12 overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--ag-line)" }}
          >
            {COMMANDS.map((c, idx) => (
              <div
                key={c.cmd}
                className="grid gap-4 px-6 py-5 sm:grid-cols-[18rem_1fr]"
                style={{
                  borderTop: idx > 0 ? "1px solid var(--ag-line)" : undefined,
                  background: idx % 2 === 0 ? "var(--ag-canvas)" : "var(--ag-canvas-2)",
                }}
              >
                <code
                  className="ag-mono text-sm"
                  style={{ color: "var(--ag-amber)" }}
                >
                  {c.cmd}
                </code>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {c.purpose}
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
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="ag-eyebrow">Detection catalog</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                A short list of things Sentinel will not let you sleep through.
              </h2>
              <p
                className="mt-6 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Catalog grows from real incidents, not press releases. Every
                entry has a reproducer in SecureBench.
              </p>
              <a
                href="/aegis/securebench"
                className="ag-link mt-8 inline-flex items-center gap-2 text-sm"
              >
                Browse the SecureBench catalog
                <LinkIcon size={14} />
              </a>
            </div>
            <ul className="grid gap-2 sm:grid-cols-1">
              {CHECKS.map((c, idx) => (
                <li
                  key={c}
                  className="flex items-start gap-4 rounded-xl border p-4"
                  style={{
                    borderColor: "var(--ag-line)",
                    background: "var(--ag-canvas)",
                  }}
                >
                  <span
                    className="ag-mono text-[11px] tracking-[0.32em]"
                    style={{ color: "var(--ag-fg-faint)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--ag-fg)" }}
                  >
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            One CLI between the agent and the operating system. <span className="ag-text-amber italic">Yours.</span>
          </>
        }
        body={
          <>
            Early-access partners get the Sentinel binary, a hardening review of
            their current agent stack, and a deterministic incident report
            within their first week.
          </>
        }
        secondary={{ href: "/aegis/cleanse", label: "Next: Aegis Cleanse" }}
      />
    </>
  );
}
