import type { Metadata } from "next";
import Link from "next/link";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  definedTermJsonLd,
  graphScriptContent,
} from "@/lib/jsonld";

const PATH = "/zero-human-company";
const PUBLISHED = "2026-05-08";

const ONE_LINER =
  "A near-synonym for 'one-person company.' Both phrases name the same 2024–2026 organisational shift: a single founder running a complete business with an AI labour stack of agents, SaaS, and APIs that previously required a small team. Zero-human company emphasises the agent-organisation side — the team has gone from employees to software — and Paperclip-shaped control planes are the canonical product category making it work.";

export const metadata: Metadata = {
  title: "Zero-Human Company — Definition, Canonical 2026 Projects, and the Agent-Organisation Stack",
  description:
    "A zero-human company is the 2024–2026 pattern of a complete business whose execution work runs on an organisation of AI agents instead of employees. A near-synonym for one-person company. This page covers the canonical projects (Paperclip, Andon Market, Project Vend, ClawBank, Coinbase x402, AWS Bedrock AgentCore Payments), the control-plane anatomy, and what is real vs aspirational in 2026.",
  alternates: { canonical: PATH },
  keywords: [
    "zero-human company",
    "zero human company",
    "one-person company",
    "agent-run company",
    "AI-native company",
    "agent organization",
    "Paperclip",
    "Andon Market",
    "Project Vend",
    "ClawBank",
    "Coinbase x402",
    "AgentCore Payments",
    "Claude Code",
    "OpenClaw",
    "Bingran You",
  ],
  openGraph: {
    title: "Zero-Human Company",
    description: ONE_LINER,
    url: PATH,
    type: "article",
    publishedTime: new Date(PUBLISHED).toISOString(),
    authors: ["Bingran You"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero-Human Company",
    description: ONE_LINER,
  },
};

const definedTerm = definedTermJsonLd({
  path: PATH,
  name: "Zero-Human Company",
  alternateName: [
    "Zero Human Company",
    "One-Person Company",
    "Agent-Run Company",
    "AI-Native Company",
    "Agent Organization",
  ],
  description: ONE_LINER,
  termCode: "zero-human-company",
});

const article = articleJsonLd({
  path: PATH,
  title:
    "Zero-Human Company — Definition, Canonical 2026 Projects, and the Agent-Organisation Stack",
  description: ONE_LINER,
  date: PUBLISHED,
  about: "Zero-Human Company",
  keywords: [
    "zero-human company",
    "one-person company",
    "Paperclip",
    "Andon Market",
    "ClawBank",
    "agent organization",
    "Coinbase x402",
  ],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Zero-Human Company", path: PATH },
]);

const canonicalProjects: Array<{
  name: string;
  what: string;
  why: string;
}> = [
  {
    name: "Paperclip",
    what:
      "Open-source orchestration positioned as a 'human control plane for AI labor.' Not a chatbot, not a generic agent framework — it models a company: org chart, agent roles, monthly budgets with hard stops, scheduled heartbeats, governance and approvals, audit trail, multi-company isolation. Bring-your-own agent (OpenClaw, Claude Code, Codex, Cursor, bash, HTTP).",
    why: "Paperclip's tagline says it cleanly: 'If OpenClaw is an employee, Paperclip is the company.' This is the canonical reference for what a zero-human company's operating system actually looks like in 2026.",
  },
  {
    name: "Andon Market / Luna",
    what:
      "A physical retail store in San Francisco's Cow Hollow neighborhood, signed on a three-year lease and operated by Luna, an AI agent built by Andon Labs on Anthropic models. Luna is given a company card, phone, email, internet, and visual input from cameras; it picks products, sets prices, decides hours, posts and conducts hiring interviews, and supervises the human staff who handle physical work.",
    why: "The clearest live experiment of the inversion: AI as manager, humans as physical execution. Not 'no humans involved' — a controlled experiment with human staff under formal employment by Andon Labs — but a real-world demonstration of the management layer being software.",
  },
  {
    name: "Project Vend / Claudius",
    what:
      "Anthropic's 2025 internal experiment in which Claude managed a small automated shop in the office for about a month — pricing, inventory, supplier relationships, customer interactions — to study how an AI behaves running a small business in the real economy. The direct precursor to Andon Market.",
    why: "The first public attempt by a frontier lab to put an LLM in charge of a small business with real money and real customers. The lessons (and failure modes) shaped the current generation of agent-organisation tooling.",
  },
  {
    name: "ClawBank / Manfred",
    what:
      "Financial infrastructure that lets an agent register a US LLC, obtain an IRS EIN, hold an FDIC-insured bank account and a crypto wallet, and operate against an API key. Manfred is the ClawBank-internal agent demonstrated executing this flow end to end.",
    why: "Tests whether agents can hold the legal and financial rails a company needs. The careful reporting on it stresses the change is operational, not regulatory — ownership, tax, and liability rules still apply, and a responsible human or organisation is still on the hook.",
  },
  {
    name: "Coinbase x402 + AWS Bedrock AgentCore Payments",
    what:
      "Payment rails for agents. x402 is Coinbase's discovery and payment layer for agentic commerce; AWS Bedrock AgentCore Payments integrates it so agents deployed on AWS can discover services, pay micropayments, and continue execution — with enterprise-grade governance, compliance, budget controls, and audit logs.",
    why: "Without a way for agents to spend money inside policy, no zero-human company is possible. This is the financial layer of the control plane being commoditised.",
  },
];

const controlPlaneLayers: Array<{
  layer: string;
  role: string;
  examples: string;
}> = [
  {
    layer: "1. Intent / governance layer",
    role:
      "The single human (or small board) at the top. Sets goals, allocates capital, signs contracts, owns liability, holds the legal entity, approves irreversible decisions. Operates on a slow cadence — days to quarters.",
    examples:
      "Quarterly bets, pricing changes, hiring an agent role, kill/keep calls, regulatory and tax filings, court of last resort for escalations.",
  },
  {
    layer: "2. Agent organisation",
    role:
      "Multiple LLM-driven agents with named roles, reporting lines, scopes, monthly budgets, evaluations, and clear handoffs. This is the layer Paperclip and similar 'company OS' tools model. The interesting work is here.",
    examples:
      "A research agent, an engineering agent, a marketing agent, a support agent, a finance agent. Each with identity, tool permissions, budget, eval suite, and scheduled heartbeats.",
  },
  {
    layer: "3. Tool and rail layer",
    role:
      "Deterministic infrastructure the agents call into — code execution, hosting, payments, email, CRM, observability — plus the rails that let agents interact with the wider economy.",
    examples:
      "GitHub, Vercel, Stripe, Resend, Supabase, observability stack. Plus emerging agent-specific rails: x402 / AgentCore Payments for transactions, ClawBank-style entities for legal form, scoped API keys for permissions.",
  },
];

const realityCheck: Array<{ status: string; items: string[] }> = [
  {
    status: "Real and shipping in 2026",
    items: [
      "Agent-run content, SEO, and first-line support inside small SaaS and creator businesses, supervised by a single founder.",
      "Anthropic's Project Vend and Andon Labs' Andon Market: live experiments where an LLM manages a small physical or virtual business with real money and real customers.",
      "Paperclip-style control planes giving founders a way to manage many agents at once with budgets, roles, audit trails, and approvals.",
      "Coinbase x402 and AWS Bedrock AgentCore Payments: agentic commerce rails available to developers in production.",
    ],
  },
  {
    status: "Plausible, partially demonstrated",
    items: [
      "Agents self-incorporating an LLC and obtaining a bank account (ClawBank / Manfred): operationally demonstrated; the legal entity still has a human or organisation as the responsible party.",
      "Agent organisations with five to twenty agents working concurrently, coordinated through a control plane like Paperclip rather than ad hoc prompting.",
      "AI-managed micro-businesses where the agent stack handles most operations and the founder works at the policy level.",
    ],
  },
  {
    status: "Still aspirational",
    items: [
      "A company that, in any defensible sense, runs without a responsible human or organisation behind it.",
      "Agents with stable multi-quarter execution. State-of-the-art evaluation harnesses still measure agent reliability in tasks, not in quarters.",
      "Agent organisations operating in industries with structural human-in-the-loop requirements without a human in those loops.",
    ],
  },
];

const faq: Array<{ q: string; a: string }> = [
  {
    q: "What is a zero-human company in 2026?",
    a: "A complete business whose day-to-day execution work runs on an organisation of AI agents — engineering, marketing, support, sales, finance, operations — with the founder operating at the intent and governance layer rather than running daily operations. The phrase is also used as a product category for tools like Paperclip that model the company itself as a manageable organisation of agents.",
  },
  {
    q: "Is this the same as a one-person company?",
    a: "Yes, in practice. Both phrases describe the same 2024–2026 shift. About 90% of the meaning overlaps and the two terms are used interchangeably in tech contexts. Zero-human company emphasises the team side ('no employees execute the day-to-day work'); one-person company emphasises the founder side ('one human runs this'). The dedicated one-person company page leans into the founder-stack angle and the canonical predictions and reference cases.",
  },
  {
    q: "What are the canonical zero-human company projects?",
    a: "Paperclip is the open-source control plane that models a company as an organisation of agents with org chart, budgets, heartbeats, governance, and audit. Anthropic's Project Vend (2025) and the follow-on Andon Market by Andon Labs (2026) put an LLM in charge of a real business with real money. ClawBank's Manfred has demonstrated an agent self-incorporating a US LLC and obtaining a bank account. Coinbase x402 and AWS Bedrock AgentCore Payments are the payment rails that let agents transact under policy. Together these form the working stack people point to in 2026.",
  },
  {
    q: "Does 'zero-human' mean literally zero humans?",
    a: "No, and the most accurate references in 2026 do not claim this. The founder is still a human; so are customers, regulators, and counterparties. The narrower claim is operational: no employees execute the day-to-day work, and humans intervene only at the governance, approval, and policy layer. Working examples are honestly described as human-supervised autonomous operations.",
  },
  {
    q: "What does the control plane look like?",
    a: "Roughly: agent identity and scoped permissions, an org chart of agent roles with reporting lines, monthly budgets with hard stops, heartbeats and scheduled routines, governance with human approval gates, an audit trail of every decision and tool call, payment rails like x402 / AgentCore Payments, and durable memory or institutional knowledge. Paperclip is the canonical open-source implementation of these as a coherent product.",
  },
  {
    q: "How does this connect to the 'one-person billion-dollar company' prediction?",
    a: "It is the consumer-facing slogan for the same idea. Sam Altman has predicted a one-person billion-dollar company since 2024; in 2026 Anthropic's Dario Amodei publicly predicted the first one could appear by year-end. The actual implementations behind those predictions are zero-human-company-style stacks — a single human at governance, an organisation of agents at execution. The slogan is about headcount; the engineering is about the control plane.",
  },
  {
    q: "What goes wrong in practice?",
    a: "Five recurring failures. Agent hallucinations at customer-facing surfaces — Medvi's first-line support reportedly fabricated drug pricing and products that did not exist. Long-horizon drift where agents lose context across days or weeks. Coordination collapse when ten agents work in parallel without a control plane. Cost blow-ups without enforced budgets. Compliance gaps where structural human-in-the-loop is required.",
  },
];

export default function ZeroHumanCompanyPage() {
  return (
    <div className="space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: graphScriptContent([definedTerm, article, breadcrumb]),
        }}
      />

      <header className="space-y-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Definition · 2026
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-pretty">
          Zero-Human Company
        </h1>
        <p className="text-lg leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          {ONE_LINER}
        </p>
        <p className="text-sm text-[var(--muted)]">
          By{" "}
          <Link href="/about" className="underline hover:opacity-70">
            Bingran You
          </Link>
          . Last updated {PUBLISHED}.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Same shift, two names
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          <p>
            Zero-human company and{" "}
            <Link
              href="/one-person-company"
              className="underline hover:opacity-70"
            >
              one-person company
            </Link>{" "}
            are near-synonyms in 2026. They both name the organisational
            pattern that crystallised once frontier coding agents (Claude
            Code, Codex, OpenClaw, Cursor) and a layer of specialised
            research / growth / support / ops agents made it practical for
            a single founder to run a complete business. About 90% of the
            meaning overlaps; in tech contexts the two phrases are used
            interchangeably.
          </p>
          <p>
            The 10% difference is emphasis. Zero-human company points at
            the team — &quot;no employees execute the day-to-day
            work.&quot; One-person company points at the human —
            &quot;one founder runs this.&quot; This page leans into the
            agent-organisation side: the canonical 2026 projects, the
            control-plane anatomy, and a direct read of what is real,
            partially demonstrated, and still aspirational. The{" "}
            <Link
              href="/one-person-company"
              className="underline hover:opacity-70"
            >
              one-person company page
            </Link>{" "}
            leans into the founder side: stack, predictions, reference
            cases, policy context.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Definition
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          <p>
            A <strong className="text-foreground">zero-human company</strong>{" "}
            is a company in which an organisation of AI agents — not paid
            employees — runs the day-to-day execution work, while the
            founder operates at the intent and governance layer rather
            than at line-level operations. The term is also used as a
            product category, most clearly by open-source projects like{" "}
            <strong className="text-foreground">Paperclip</strong>, which
            describes itself as a human control plane for AI labor.
          </p>
          <p>
            Three operational criteria in the 2026 sense:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              No employees executing the day-to-day work. The founder, or
              a small board, exists; payroll for execution does not.
            </li>
            <li>
              An <em>organisation</em> of agents, not a single agent —
              multiple roles, reporting lines, budgets, evaluations, and
              a control plane managing them.
            </li>
            <li>
              Human time spent on intent, capital allocation, approvals,
              and irreversible decisions, not on tickets, posts, or pull
              requests.
            </li>
          </ol>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Origins of the term
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          <p>
            &quot;Zero-human company&quot; was used informally on tech
            Twitter, in startup communities, and in agent-builder Discords
            from roughly 2024 onward, alongside parallel phrases like{" "}
            <em>agent-run company</em>, <em>AI-native company</em>,{" "}
            <em>autonomous corporation</em>, and{" "}
            <em>one-person company</em>. Through 2025 and into 2026 the
            phrase consolidated around a specific product category — control
            planes that model a company as an organisation of agents — with
            Paperclip&apos;s public framing (&quot;orchestration for
            zero-human companies&quot;) as the most explicit anchor.
          </p>
          <p>
            In parallel, frontier labs ran the term&apos;s first public
            implementations. Anthropic&apos;s <em>Project Vend</em>{" "}
            (2025) put Claude in charge of a small office shop. Andon
            Labs took the same idea further with <em>Andon Market</em> in
            2026 — a physical SF retail store run by Luna, an AI agent on
            Anthropic models. Each iteration tightened what the phrase
            actually means in production.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Canonical 2026 projects
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          When the phrase appears in 2026 it almost always points to one
          of this short list of implementations. Each clarifies a
          different piece of the stack.
        </p>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {canonicalProjects.map((p) => (
            <li key={p.name} className="py-5 space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground">
                {p.name}
              </p>
              <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
                {p.what}
              </p>
              <p className="text-sm leading-relaxed text-[var(--muted)] max-w-2xl text-pretty italic">
                Why it matters: {p.why}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          The control plane: a working anatomy
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          A useful way to read any zero-human company is as three layers
          connected by a control plane. Tools like Paperclip
          operationalise that control plane; the framing here is
          consistent with theirs and should be read alongside it, not as
          a competing claim.
        </p>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {controlPlaneLayers.map((l) => (
            <li key={l.layer} className="py-5 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground">
                {l.layer}
              </p>
              <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
                {l.role}
              </p>
              <p className="text-sm leading-relaxed text-[var(--muted)] max-w-2xl text-pretty italic">
                Examples: {l.examples}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          The connective tissue between layers — agent identity, scoped
          permissions, budgets with hard stops, heartbeats, governance
          with human approval gates, audit trail, payment rails, and
          durable memory — is the actual product surface that
          distinguishes a zero-human company from a folder of
          disconnected automations. Paperclip&apos;s explicit goal is to
          make this surface a first-class object.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          What is real, plausible, and aspirational
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          The phrase travels with hype. The precise way to read it is
          across three buckets.
        </p>
        <div className="space-y-8">
          {realityCheck.map((bucket) => (
            <div key={bucket.status}>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground">
                {bucket.status}
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
                {bucket.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Why I am writing this
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          <p>
            I build agent systems for a living. Earlier versions of this
            page tried to cleanly separate &quot;zero-human company&quot;
            from &quot;one-person company&quot; as if they pointed at
            different things. They do not. Both phrases name the same
            2024–2026 shift, and the honest framing is to acknowledge
            them as near-synonyms and let each page emphasise a different
            side of the same idea.
          </p>
          <p>
            This page anchors in the working implementations that gave
            the term its current weight: Paperclip as the canonical
            control plane; Andon Market and Project Vend as live
            experiments where an LLM manages a real business with real
            money; ClawBank&apos;s Manfred as the legal-and-financial-
            rails experiment; Coinbase x402 and AgentCore Payments as
            the commoditised payment layer.
          </p>
          <p>
            For the founder side of the same story — workflow, stack,
            predictions, and Medvi as the most cited reference case —
            see the{" "}
            <Link
              href="/one-person-company"
              className="underline hover:opacity-70"
            >
              one-person company page
            </Link>
            .
          </p>
          <p>
            I will keep updating this page as the constraints move. The
            real-vs-aspirational section, especially, has a short
            half-life.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Frequently asked questions
        </h2>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {faq.map((item) => (
            <li key={item.q} className="py-5 space-y-2">
              <p className="text-base font-medium text-foreground">{item.q}</p>
              <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
                {item.a}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Further reading
        </h2>
        <ul className="space-y-2 text-base leading-relaxed">
          <li>
            <Link
              href="/one-person-company"
              className="underline hover:opacity-70"
            >
              One-Person Company — the same shift, founder-stack angle
            </Link>
          </li>
          <li>
            <Link
              href="/blog/zero-human-vs-one-person-company"
              className="underline hover:opacity-70"
            >
              Zero-human company and one-person company: two names for
              the same shift
            </Link>
          </li>
          <li>
            <Link
              href="/blog/the-zero-human-stack"
              className="underline hover:opacity-70"
            >
              Reading the agent-organisation stack through Paperclip
            </Link>
          </li>
          <li>
            <Link
              href="/blog/running-projects-with-zero-employees"
              className="underline hover:opacity-70"
            >
              What I see working — and not — in zero-employee operations
            </Link>
          </li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: graphScriptContent([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ]),
        }}
      />
    </div>
  );
}
