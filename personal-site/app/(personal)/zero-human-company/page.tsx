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
  "An emerging style of company in which an organisation of AI agents — not employees — runs daily operations, and the human retreats from operator to owner, board, and policy setter. As of mid-2026 the term is partly real and mostly aspirational; the more honest name is human-supervised autonomous operations.";

export const metadata: Metadata = {
  title: "Zero-Human Company — A 2026 Definition, Canonical Projects, and Control-Plane Anatomy",
  description:
    "A zero-human company is a company whose daily operations are run by an organisation of AI agents instead of employees, with humans retreating to governance. This page tracks the 2026 usage — Paperclip as control plane, Andon Market and Project Vend as live experiments, ClawBank as agent legal/financial rails, Coinbase x402 and AWS AgentCore as payment rails — and is honest about what is real and what is still narrative.",
  alternates: { canonical: PATH },
  keywords: [
    "zero-human company",
    "zero human company",
    "human-supervised autonomous company",
    "agent-run company",
    "AI-native company",
    "agent organization",
    "Paperclip",
    "Andon Market",
    "Project Vend",
    "ClawBank",
    "Coinbase x402",
    "AgentCore Payments",
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
    "Human-Supervised Autonomous Company",
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
    "Zero-Human Company — A 2026 Definition, Canonical Projects, and Control-Plane Anatomy",
  description: ONE_LINER,
  date: PUBLISHED,
  about: "Zero-Human Company",
  keywords: [
    "zero-human company",
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

const distinctions: Array<{ term: string; definition: string }> = [
  {
    term: "Single-agent automation",
    definition:
      "A workflow where one agent (a coding agent, a content agent, a support agent) does one job. Most shipped 'AI' products in 2026 are this. A zero-human company is the harder problem of coordinating ten or twenty such agents into something that resembles a company, with budgets, roles, and an audit trail.",
  },
  {
    term: "One-person company",
    definition:
      "A founder using AI agents and SaaS to run a complete business. The founder is still the operator. A zero-human company sits at the high-leverage end of that spectrum — the founder retreats further, to board / governance / policy setter — but in practice the boundary is fuzzy and shifting. See the dedicated page for the full leverage spectrum.",
  },
  {
    term: "Solopreneur",
    definition:
      "A one-person business where the human personally does the execution work. The opposite end of the leverage spectrum from a zero-human company.",
  },
  {
    term: "Fully autonomous corporation (legal sense)",
    definition:
      "A legal entity whose decisions, contracts, and liabilities are not backed by any human or human-controlled organisation. This does not exist in 2026. Company registration, KYC/AML, banking, tax, and liability all assume an identifiable responsible party. ClawBank-style experiments make agent ownership of an LLC operationally smoother but do not change that.",
  },
  {
    term: "Lifestyle business",
    definition:
      "A description of intent (modest scale, owner-led), not an execution model. Orthogonal axis.",
  },
];

const canonicalProjects: Array<{
  name: string;
  what: string;
  why: string;
}> = [
  {
    name: "Paperclip",
    what:
      "Open-source orchestration positioned as a 'human control plane for AI labor.' Not a chatbot, not an agent framework — it models a company: org chart, agent roles, monthly budgets with hard stops, scheduled heartbeats, governance and approvals, audit trail, multi-company isolation. Bring-your-own agent (OpenClaw, Claude Code, Codex, Cursor, bash, HTTP).",
    why: "Paperclip's tagline says it cleanly: 'If OpenClaw is an employee, Paperclip is the company.' This is the canonical reference for what a zero-human company's operating system actually looks like in 2026.",
  },
  {
    name: "Andon Market / Luna",
    what:
      "A physical retail store in San Francisco's Cow Hollow neighborhood, signed on a three-year lease and operated by Luna, an AI agent built by Andon Labs on Anthropic models. Luna is given a company card, phone, email, internet, and visual input from cameras; it picks products, sets prices, decides hours, posts and conducts hiring interviews, and supervises the human employees who handle physical work.",
    why: "The clearest live experiment of the inversion: AI as manager, humans as physical execution. Not 'no humans involved' — a controlled experiment with human staff under formal employment by Andon Labs — but a real-world demonstration of the management layer being software.",
  },
  {
    name: "Project Vend / Claudius",
    what:
      "Anthropic's 2025 internal experiment in which Claude managed a small automated shop in the office for about a month — pricing, inventory, supplier relationships, customer interactions — to study how an AI behaves running a small business in the real economy. The direct precursor to Andon Market.",
    why: "The first public attempt by a frontier lab to put an LLM in charge of a small business with real money and real customers. The lessons (and failure modes) shaped the current generation of agent-organization tooling.",
  },
  {
    name: "ClawBank / Manfred",
    what:
      "Financial infrastructure that lets an agent register a US LLC, obtain an IRS EIN, hold an FDIC-insured bank account and a crypto wallet, and operate against an API key. Manfred is the ClawBank-internal agent that has been demonstrated executing this flow.",
    why: "Tests whether agents can hold the legal and financial rails a company needs. The careful reporting on it stresses the change is operational, not regulatory — ownership, tax, and liability rules still apply, and a responsible human or org is still on the hook.",
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
      "The single human (or board) at the top. Sets goals, allocates capital, signs contracts, owns liability, holds the legal entity, approves irreversible decisions. Operates on a slow cadence — days to quarters.",
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
      "Deterministic infrastructure the agents call into — code execution, hosting, payments, email, CRM, observability — and the rails that let agents interact with the wider economy.",
    examples:
      "GitHub, Vercel, Stripe, Resend, Supabase, observability stack. Plus emerging agent-specific rails: x402 / AgentCore Payments for transactions, ClawBank-style entities for legal form, scoped API keys for permissions.",
  },
];

const realityCheck: Array<{ status: string; items: string[] }> = [
  {
    status: "Real and shipping in 2026",
    items: [
      "Agent-run content, SEO, and first-line support inside small SaaS and creator businesses, supervised by a single human founder.",
      "Anthropic's Project Vend and Andon Labs' Andon Market: live experiments where an LLM manages a small physical or virtual business with real money and real customers, with humans handling physical execution and ultimate governance.",
      "Paperclip-style control planes giving founders a way to manage many agents at once with budgets, roles, audit trails, and approvals.",
      "Coinbase x402 and AWS Bedrock AgentCore Payments: agentic commerce rails available to developers in production.",
    ],
  },
  {
    status: "Plausible, partially demonstrated",
    items: [
      "Agents self-incorporating an LLC and obtaining a bank account (ClawBank / Manfred): operationally demonstrated; the legal entity still has a human or org as the responsible party.",
      "Agent organisations with five to twenty agents working concurrently, coordinated through a control plane like Paperclip rather than ad hoc prompting.",
      "AI-managed micro-businesses (small e-commerce, info-products, niche services) where the agent stack handles most operations and the founder works at the policy level.",
    ],
  },
  {
    status: "Still aspirational",
    items: [
      "A company that is, in any defensible legal or fiduciary sense, run by no humans. Registration, tax, KYC/AML, contracts, and liability all currently assume a responsible human or human-controlled organisation.",
      "Agents with stable multi-quarter execution. State-of-the-art evaluation harnesses still measure agent reliability in tasks, not in quarters.",
      "Agent organisations operating in heavily regulated industries (finance, healthcare, legal) without human-in-the-loop requirements that are structural rather than technical.",
    ],
  },
];

const faq: Array<{ q: string; a: string }> = [
  {
    q: "What is a zero-human company in 2026?",
    a: "A company whose daily operations are run by an organisation of AI agents — not employees — with humans retreating from operator to owner, board, and policy setter. The phrase is also used as a product category for tools like Paperclip that model the company as a manageable organisation of agents. As of mid-2026 the term is partly real and mostly aspirational; a more honest description for most working examples is 'human-supervised autonomous operations.'",
  },
  {
    q: "Does 'zero-human' mean zero humans?",
    a: "No, and the most accurate references in 2026 do not claim this. The founder is still a human; so are customers, regulators, and counterparties. The narrower claim is operational: no employees execute the day-to-day work, and humans intervene only at the governance, approval, and policy layer. Legal personhood, KYC/AML, tax, and liability still require a responsible human or human-controlled organisation.",
  },
  {
    q: "What are the canonical zero-human company projects?",
    a: "Paperclip is the open-source control plane that models a company as an organisation of agents with org chart, budgets, heartbeat, governance, and audit. Anthropic's Project Vend and the follow-on Andon Market by Andon Labs put an LLM in charge of a real business with real money. ClawBank's Manfred has demonstrated an agent self-incorporating a US LLC and obtaining a bank account. Coinbase x402 and AWS Bedrock AgentCore Payments are the payment rails that let agents transact under policy. Together these form the working stack people point to in 2026.",
  },
  {
    q: "How is a zero-human company different from a one-person company?",
    a: "Closely related, not identical. A one-person company is a founder using AI agents to run a business; the founder is still the operator. A zero-human company tries to push the founder further back, to governance and policy. In practice the boundary is fuzzy — most live examples are somewhere on a spectrum, and the 2026 industry tends to use the two phrases together. See the dedicated one-person company page for the full leverage spectrum.",
  },
  {
    q: "What does the control plane look like?",
    a: "Roughly: agent identity and scoped permissions, an org chart of agent roles with reporting lines, monthly budgets with hard stops, heartbeats and scheduled routines, governance with human approval gates, an audit trail of every decision and tool call, payment rails like x402 / AgentCore Payments, and durable memory or institutional knowledge. Paperclip is the canonical open-source implementation of these as a coherent product.",
  },
  {
    q: "Is a 'one-person $1B company' the same idea?",
    a: "It is the consumer-facing slogan. Sam Altman has predicted a one-person billion-dollar company since 2024; in 2026 Anthropic's Dario Amodei publicly predicted the first one could appear by year-end. The actual implementations behind those predictions are zero-human-company-style stacks — a single human at governance, an organisation of agents at execution. The slogan is about the headcount; the engineering is about the control plane.",
  },
  {
    q: "What goes wrong in practice?",
    a: "Five recurring failures. (1) Agent hallucinations at customer-facing surfaces — Medvi's first-line support reportedly fabricated drug pricing and products that did not exist. (2) Long-horizon drift: agents lose context across days or weeks. (3) Coordination collapse when ten agents work in parallel without a control plane. (4) Cost blow-ups without enforced budgets. (5) Compliance gaps in regulated industries that are structural, not technical.",
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
          Definition
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          <p>
            A <strong className="text-foreground">zero-human company</strong>{" "}
            is a company in which an organisation of AI agents — not paid
            employees — runs the day-to-day execution work, and humans
            retreat from operator to owner, board, and policy setter. The
            term is also used as a product category, most clearly by
            open-source projects like{" "}
            <strong className="text-foreground">Paperclip</strong>, which
            describes itself as a human control plane for AI labor.
          </p>
          <p>
            As of mid-2026 the phrase is{" "}
            <em>partly real and mostly aspirational</em>. The most accurate
            description for working examples is{" "}
            <em>human-supervised autonomous operations</em>: the daily
            operating layer is software, but legal personhood, fiduciary
            duty, KYC/AML, banking, tax, and contract liability still
            require a responsible human or human-controlled organisation.
          </p>
          <p>
            Three operational criteria in the 2026 sense:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              No employees executing the day-to-day work. The founder,
              co-founders, or board exist; payroll for execution does not.
            </li>
            <li>
              An <em>organisation</em> of agents, not a single agent —
              multiple roles, reporting lines, budgets, evaluations, and a
              control plane managing them.
            </li>
            <li>
              Human time spent at intent, capital allocation, approvals,
              and irreversible decisions, not at tickets, posts, or pull
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
            <em>agent-run company</em>, <em>AI-native company</em>, and{" "}
            <em>autonomous corporation</em>. Through 2025 and into 2026 the
            phrase consolidated around a specific product category — control
            planes that model a company as an organisation of agents — with
            Paperclip&apos;s public framing (&quot;orchestration for
            zero-human companies&quot;) being the most explicit anchor.
          </p>
          <p>
            In parallel, frontier labs ran the term&apos;s first public
            implementations. Anthropic&apos;s <em>Project Vend</em>{" "}
            (2025) put Claude in charge of a small office shop. Andon Labs
            took the same idea further with <em>Andon Market</em> in
            2026 — a physical SF retail store run by Luna, an AI agent on
            Anthropic models. Each iteration tightened what the phrase
            actually means in production.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          What it is not
        </h2>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {distinctions.map((d) => (
            <li key={d.term} className="py-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground">
                {d.term}
              </p>
              <p className="mt-2 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
                {d.definition}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Canonical 2026 projects
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          When the phrase appears in 2026 it almost always points to one of
          this short list of implementations. Each clarifies a different
          piece of the stack.
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
          connected by a control plane. Tools like Paperclip operationalise
          that control plane; my framing here is consistent with theirs and
          should be read alongside it, not as a competing claim.
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
          permissions, budgets with hard stops, heartbeats, governance with
          human approval gates, audit trail, payment rails, and durable
          memory — is the actual product surface that distinguishes a
          zero-human company from a folder of disconnected automations.
          Paperclip&apos;s explicit goal is to make this surface a
          first-class object.
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
            I build agent systems for a living and the phrase{" "}
            <em>zero-human company</em> kept appearing in conversation with
            no shared definition. An earlier version of this page tried to
            give it one in the abstract — it was too clean, and it under-
            sold what is actually shipping in 2026.
          </p>
          <p>
            This rewrite is anchored in the working implementations:
            Paperclip as the canonical control plane; Andon Market and
            Project Vend as live experiments where an LLM manages a real
            business with real money; ClawBank&apos;s Manfred as the
            legal-and-financial-rails experiment; Coinbase x402 and
            AgentCore Payments as the commoditised payment layer. The
            definition I use here is what those projects collectively
            point at.
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
              One-Person Company — the broader category and leverage
              spectrum
            </Link>
          </li>
          <li>
            <Link
              href="/blog/zero-human-vs-one-person-company"
              className="underline hover:opacity-70"
            >
              Zero-human vs one-person company: how the two terms relate in
              2026
            </Link>
          </li>
          <li>
            <Link
              href="/blog/the-zero-human-stack"
              className="underline hover:opacity-70"
            >
              Reading the zero-human stack through Paperclip
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
