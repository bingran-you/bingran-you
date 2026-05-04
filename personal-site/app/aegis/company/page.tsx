import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../_components/page-hero";
import { CTASection } from "../_components/cta";
import { ShieldIcon } from "../_components/icons";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Aegis is an independent security-infrastructure project for AI agents. Founded by Bingran You at UC Berkeley.",
  alternates: { canonical: "/aegis/company" },
};

const PRINCIPLES = [
  {
    n: "01",
    title: "Evidence over assertion",
    body: "We say verifiable, we mean verifiable. Every claim Aegis ships with a reproducer. If we can&rsquo;t show our work, we don&rsquo;t ship the claim.",
  },
  {
    n: "02",
    title: "Open primitives, defensible products",
    body: "Attestation schemas, threat catalogs, scoring methodology — all open. Detection models, scaled infrastructure, support — that&rsquo;s the business. The trust layer is too important for a single vendor to gatekeep.",
  },
  {
    n: "03",
    title: "Builders, not auditors",
    body: "We come from the side that ships agents. We&rsquo;re building the security layer we wish existed last year. Our customers should feel the difference between a product and a compliance theater.",
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
    a: "It&rsquo;s a research preview. Aegis is being built openly out of UC Berkeley while we calibrate the threat model with early-access partners. Incorporation follows real customer pull, not the other way around.",
  },
  {
    q: "Who&rsquo;s on the team?",
    a: "Day-one work is led by Bingran You — PhD candidate at UC Berkeley, agent evaluation researcher, builder of <a class=\"ag-link\" href=\"https://github.com/benchflow-ai/skillsbench\">SkillsBench</a> and <a class=\"ag-link\" href=\"https://github.com/bingran-you/sbti-cli\">SBTI CLI</a>. We&rsquo;re hiring research-engineering partners who&rsquo;ve shipped agent infra in the wild.",
  },
  {
    q: "How is Aegis funded?",
    a: "Self-funded research preview. We&rsquo;re open to investors and partners aligned with the open-primitives principle. We&rsquo;re not optimizing for fundraising velocity.",
  },
  {
    q: "How does Aegis make money?",
    a: "Hosted control plane for evidence storage and replay; managed detection models; enterprise support, SOC2 / ISO 42001 evidence packaging; integrations with existing AppSec stacks. Anything that grows the open trust layer is free.",
  },
  {
    q: "Is Aegis a guardrails framework?",
    a: "No — see the manifesto. Guardrails sit inside the agent loop. Aegis sits outside. They&rsquo;re complementary; one doesn&rsquo;t replace the other.",
  },
  {
    q: "What is Aegis&rsquo; relationship with Endor Labs / Snyk / similar?",
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
            We&rsquo;re building Aegis the way it should run:
            <br />
            <span className="ag-text-amber italic">openly, evidence-first, in public.</span>
          </>
        }
        lead={
          <>
            Aegis is an independent security-infrastructure project for AI
            agents. We&rsquo;re building the trust layer we&rsquo;d want
            running underneath our own agents — and shipping it before the
            window closes.
          </>
        }
        primary={{ href: "/aegis/waitlist", label: "Become a partner" }}
        secondary={{ href: "/aegis/research", label: "Read the manifesto" }}
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
                PhD CANDIDATE · UC BERKELEY · AGENT EVALUATION RESEARCH
              </p>
              <p
                className="mt-7 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Bingran builds and benchmarks AI agents at UC Berkeley. He
                works at the intersection of agent evaluation, deterministic
                test environments, and applied AI systems. Previous work
                includes{" "}
                <a
                  href="https://github.com/benchflow-ai/skillsbench"
                  className="ag-link"
                  style={{ color: "var(--ag-fg)" }}
                >
                  SkillsBench
                </a>{" "}
                (skill-based agent benchmark),{" "}
                <a
                  href="https://github.com/bingran-you/sbti-cli"
                  className="ag-link"
                  style={{ color: "var(--ag-fg)" }}
                >
                  SBTI CLI
                </a>{" "}
                (offline behavior testing for agents),{" "}
                <a
                  href="https://github.com/bingran-you/smolclaw"
                  className="ag-link"
                  style={{ color: "var(--ag-fg)" }}
                >
                  smolclaw
                </a>{" "}
                (seeded mock environments) and{" "}
                <a
                  href="https://github.com/agent-team-foundation/first-tree"
                  className="ag-link"
                  style={{ color: "var(--ag-fg)" }}
                >
                  first-tree
                </a>{" "}
                (Git-native context layer for agent teams).
              </p>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Aegis grew out of asking the question: &ldquo;If I&rsquo;m
                going to let an agent operate my computer for hours, what would
                I want supervising it?&rdquo;
              </p>
              <div
                className="mt-8 flex flex-wrap gap-3 text-sm"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                <Link href="/" className="ag-link">bingranyou.com</Link>
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
                We&rsquo;re hiring research-engineering partners.
              </p>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                If you&rsquo;ve shipped agent runtimes, MCP servers, AppSec
                products, or red-team tooling — and you can hold a strong
                opinion about what &ldquo;verifiable&rdquo; means — we want to
                hear from you.
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
        id="principles"
        style={{
          background: "var(--ag-canvas-2)",
          borderTop: "1px solid var(--ag-line)",
          borderBottom: "1px solid var(--ag-line)",
        }}
      >
        <div className="ag-container">
          <p className="ag-eyebrow">Operating principles</p>
          <h2
            className="ag-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              letterSpacing: "-0.022em",
            }}
          >
            How Aegis runs internally — and what that means for partners.
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
            We pick up the phone for security teams running real agents.
          </>
        }
        body={
          <>
            Send a note. Tell us what your agents touch, what keeps you up,
            what evidence your auditor wants. We&rsquo;ll respond with a
            proposed first integration in a week.
          </>
        }
        secondary={{ href: "/", label: "← Back to bingran.you" }}
      />
    </>
  );
}
