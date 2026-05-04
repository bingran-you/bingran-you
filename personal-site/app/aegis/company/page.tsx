import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../_components/page-hero";
import { CTASection } from "../_components/cta";
import { ShieldIcon } from "../_components/icons";

export const metadata: Metadata = {
  title: "Company · solo founder · Berkeley",
  description:
    "Aegis is an independent security-infrastructure project for AI agents. Solo-founded by Bingran You at UC Berkeley.",
  alternates: { canonical: "/aegis/company" },
};

const PRIOR_WORK = [
  {
    name: "SkillsBench",
    href: "https://github.com/benchflow-ai/skillsbench",
    role: "Co-author · live",
    line: "A skill-based benchmark for AI agents. The point of measuring agents&rsquo; capability is to know when capability outruns containment. That&rsquo;s exactly the moment Aegis is built for.",
  },
  {
    name: "sbti-cli",
    href: "https://github.com/bingran-you/sbti-cli",
    role: "Author · live",
    line: "Offline behavior testing CLI for agents. Same instinct as Aegis: a single binary, deterministic environments, signed evidence. Aegis is the runtime supervision twin to this evaluation tool.",
  },
  {
    name: "smolclaw",
    href: "https://github.com/bingran-you/smolclaw",
    role: "Author · live",
    line: "Seeded mock environments for agent testing. Deterministic envs are the prerequisite for SecureBench &mdash; you can&rsquo;t replay an attack scenario without them.",
  },
  {
    name: "first-tree",
    href: "https://github.com/agent-team-foundation/first-tree",
    role: "Co-author · live",
    line: "Git-native context layer for agent teams. The cross-agent coordination problem feeds directly into Cleanse: cross-tenant memory leaks are the dual of cross-team context sharing.",
  },
  {
    name: "DeepTutor",
    href: "https://deeptutor.knowhiz.us/",
    role: "Co-builder · live",
    line: "AI research assistant on Zotero. Real users, real production traffic, real agents reading PDFs they didn&rsquo;t write. The kind of deployment Aegis is for.",
  },
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Evidence over assertion",
    body: "We say verifiable, we mean verifiable. Every claim Aegis ships with a reproducer. If we can&rsquo;t show our work, we don&rsquo;t ship the claim.",
  },
  {
    n: "02",
    title: "Open primitives, defensible products",
    body: "Attestation schemas, threat catalogs, scoring methodology &mdash; all open. Detection models, scaled infrastructure, support &mdash; that&rsquo;s the business. The trust layer is too important for a single vendor to gatekeep.",
  },
  {
    n: "03",
    title: "Builders, not auditors",
    body: "We come from the side that ships agents. We&rsquo;re building the security layer we wish existed last year. Our customers should feel the difference between a product and compliance theatre.",
  },
  {
    n: "04",
    title: "Research is a deliverable",
    body: "Our threat model, methodology, and benchmark catalog ship publicly. Discovering a new attack class earns the same internal credit as shipping a feature.",
  },
];

const FAQS = [
  {
    q: "Is this a company yet?",
    a: "It&rsquo;s a solo-founded research preview. Aegis is being built openly out of UC Berkeley while we calibrate the threat catalog with early-access partners. Incorporation follows real customer pull, not the other way around.",
  },
  {
    q: "Why are you the right person to build this?",
    a: "Two years of agent evaluation research at Berkeley directly above this problem. SkillsBench, sbti-cli, smolclaw &mdash; the prerequisites for SecureBench were already on my GitHub before Aegis had a name. The next problem after measuring how agents do their job is keeping them inside the lines while doing it.",
  },
  {
    q: "Solo founder. Risk?",
    a: "Yes. Mitigation: hiring research-engineering partners (see below). The Berkeley advisor relationship gives me a research network to draw from. The deal with early-access partners is structurally co-development, not vendor-customer &mdash; the catalog grows by their contribution, not just mine.",
  },
  {
    q: "How is Aegis funded?",
    a: "Self-funded research preview. Open to investors and partners aligned with the open-primitives principle. Not optimizing for fundraising velocity; optimizing for the catalog and the wedge.",
  },
  {
    q: "How does Aegis make money?",
    a: "Hosted control plane for evidence storage and replay; managed detection models; enterprise support, SOC2 / ISO 42001 / EU AI Act evidence packaging; integrations with existing AppSec stacks. Anything that grows the open trust layer is free.",
  },
  {
    q: "Is Aegis a guardrails framework?",
    a: "No &mdash; see the manifesto. Guardrails sit inside the agent loop. Aegis sits outside. They&rsquo;re complementary; one doesn&rsquo;t replace the other.",
  },
  {
    q: "What&rsquo;s your relationship with Endor Labs / Snyk / similar?",
    a: "Lineage. The reachability-first, evidence-first, developer-first AppSec line is what we&rsquo;re extending into the agent era. They guard the codebase agents read; we guard the runtime where agents act.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title={
          <>
            Solo-founded. Built openly.{" "}
            <span className="ag-text-amber italic">From Berkeley.</span>
          </>
        }
        lead={
          <>
            Aegis is an independent security-infrastructure project for AI
            agents. Solo founder. Two years of agent evaluation research as
            the prerequisite. We&rsquo;re building the trust layer we&rsquo;d
            want running underneath our own agents &mdash; and shipping it
            before the window closes.
          </>
        }
        primary={{ href: "/aegis/waitlist", label: "Send us your incident" }}
        secondary={{ href: "/aegis/research", label: "Read the field notes" }}
      />

      <section className="ag-section">
        <div className="ag-container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="ag-eyebrow">Founder</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                  letterSpacing: "-0.022em",
                }}
              >
                Bingran You
              </h2>
              <p
                className="mt-3 ag-mono text-[11px] tracking-[0.28em]"
                style={{ color: "var(--ag-fg-faint)" }}
              >
                PHD CANDIDATE · UC BERKELEY · AGENT EVALUATION
              </p>
              <div
                className="mt-7 space-y-4 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                <p>
                  I build and benchmark AI agents at UC Berkeley. For the last
                  two years I&rsquo;ve been working at the intersection of
                  agent evaluation, deterministic test environments, and
                  applied AI systems &mdash; the exact prerequisites for
                  shipping a security layer that&rsquo;s
                  <em> verifiable, not aspirational</em>.
                </p>
                <p>
                  On any given day I have eight to twelve agents running on
                  this laptop in parallel worktrees. A month ago I gave Claude
                  Code shell access to fix a small bug. I went to the kitchen.
                  I came back to a process that had touched
                  <code className="ag-mono"> ~/.aws/credentials</code>,
                  installed an MCP server I didn&rsquo;t recognize, and had
                  three subprocesses I couldn&rsquo;t account for.
                </p>
                <p style={{ color: "var(--ag-fg)" }}>
                  Aegis grew out of that moment, and the realization that I
                  had no audit trail and no way to make one without
                  instrumenting the agent itself.
                </p>
              </div>
              <div
                className="mt-8 flex flex-wrap gap-3 text-sm"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                <Link href="/" className="ag-link">
                  bingranyou.com
                </Link>
                <span style={{ color: "var(--ag-fg-faint)" }}>·</span>
                <a
                  href="https://x.com/bingran_bry"
                  className="ag-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @bingran_bry
                </a>
                <span style={{ color: "var(--ag-fg-faint)" }}>·</span>
                <a
                  href="https://github.com/bingran-you"
                  className="ag-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/bingran-you
                </a>
                <span style={{ color: "var(--ag-fg-faint)" }}>·</span>
                <a
                  href="mailto:bingran.you@berkeley.edu"
                  className="ag-link"
                >
                  bingran.you@berkeley.edu
                </a>
              </div>
            </div>
            <aside
              className="ag-card ag-card-amber p-10"
              style={{ alignSelf: "start" }}
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
                Hiring research-engineering partner #1.
              </p>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                If you&rsquo;ve shipped agent runtimes, MCP servers, AppSec
                products, or red-team tooling &mdash; and you can hold a
                strong opinion about what
                &ldquo;verifiable&rdquo; means &mdash; we want to hear from
                you. Co-founder energy welcome.
              </p>
              <a
                href="mailto:bingran.you@berkeley.edu?subject=Aegis%20%E2%80%94%20research-engineering"
                className="ag-btn ag-btn-primary mt-7 w-full justify-center"
              >
                Reach out
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="ag-section"
        id="prior-work"
        style={{
          background: "var(--ag-canvas-2)",
          borderTop: "1px solid var(--ag-line)",
          borderBottom: "1px solid var(--ag-line)",
        }}
      >
        <div className="ag-container">
          <p className="ag-eyebrow">Founder-market fit · prior work</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              letterSpacing: "-0.022em",
            }}
          >
            Five projects I shipped before Aegis. Each one is a piece of the
            same problem.
          </h2>
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            I didn&rsquo;t pivot into agent security from a different field.
            Aegis is the natural follow-on to two years of agent evaluation
            research. The infrastructure for SecureBench (deterministic envs,
            reproducible scenarios, signed evidence) was already on my GitHub
            before Aegis had a name.
          </p>
          <ul className="mt-12 space-y-3">
            {PRIOR_WORK.map((p) => (
              <li
                key={p.name}
                className="grid gap-4 rounded-xl border p-7 sm:grid-cols-[12rem_1fr]"
                style={{
                  borderColor: "var(--ag-line)",
                  background: "var(--ag-canvas)",
                }}
              >
                <div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ag-display"
                    style={{
                      fontSize: "1.4rem",
                      letterSpacing: "-0.015em",
                      color: "var(--ag-fg)",
                    }}
                  >
                    {p.name} →
                  </a>
                  <p
                    className="ag-mono mt-2 text-[11px] tracking-[0.28em]"
                    style={{ color: "var(--ag-fg-faint)" }}
                  >
                    {p.role.toUpperCase()}
                  </p>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                  dangerouslySetInnerHTML={{ __html: p.line }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ag-section" id="principles">
        <div className="ag-container">
          <p className="ag-eyebrow">Operating principles</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              letterSpacing: "-0.022em",
            }}
          >
            How Aegis runs internally &mdash; and what that means for partners.
          </h2>
          <ol className="mt-12 grid gap-5 lg:grid-cols-2">
            {PRINCIPLES.map(({ n, title, body }) => (
              <li key={n} className="ag-card p-8">
                <span
                  className="ag-mono text-[12px] tracking-[0.32em]"
                  style={{ color: "var(--ag-amber)" }}
                >
                  {n}
                </span>
                <h3
                  className="ag-display mt-5"
                  style={{ fontSize: "1.4rem", letterSpacing: "-0.015em" }}
                >
                  {title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                  dangerouslySetInnerHTML={{ __html: body }}
                />
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
        eyebrow="Talk to us"
        title={
          <>
            Send us your agent log. We&rsquo;ll send back a forensic report.
          </>
        }
        body={
          <>
            That&rsquo;s the deal &mdash; the same one we&rsquo;re offering
            every early-access partner. Reciprocal. Specific. Worth your
            48 hours and ours.
          </>
        }
        secondary={{ href: "/", label: "← Back to bingran.you" }}
      />
    </>
  );
}
