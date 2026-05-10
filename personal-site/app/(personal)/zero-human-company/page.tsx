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
  "A near-synonym for 'one-person company.' Both phrases name the same 2024–2026 organisational shift: a complete business whose execution work runs on an organisation of AI agents instead of employees, with one human at the top. This page is the comprehensive read — what the shift is, the canonical projects every reader keeps coming back to, the control-plane anatomy that makes it actually work, and an honest reality check on what is real versus narrative.";

export const metadata: Metadata = {
  title: "Zero-Human Company — A 2026 Definition with Canonical Projects and Control-Plane Anatomy",
  description:
    "A zero-human company is the 2024–2026 pattern of running a complete business with an organisation of AI agents instead of employees. A near-synonym for one-person company. This page covers the canonical projects (Paperclip, Andon Market, Project Vend, ClawBank, Coinbase x402, AWS Bedrock AgentCore Payments, Coinbase one-person teams, Shopify, Codex Symphony, Claude Code, Medvi), the control-plane anatomy, China policy programmes, predictions from Sam Altman and Dario Amodei, where the moat actually is, and what is real versus aspirational.",
  alternates: { canonical: PATH },
  keywords: [
    "zero-human company",
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
    "Coinbase one-person teams",
    "Codex Symphony",
    "Claude Code",
    "OpenClaw",
    "Medvi",
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
    "Zero-Human Company — A 2026 Definition with Canonical Projects and Control-Plane Anatomy",
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
    "Medvi",
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
      "Open-source orchestration positioned as a 'human control plane for AI labor.' Not a chatbot, not a generic agent framework — it models a company. Org chart with named roles and reporting lines. Monthly budgets with hard stops. Scheduled heartbeats so agents wake up, check work, and act. Governance with human approval gates. A full audit trail of every decision and tool call. Multi-company isolation. Bring-your-own agent: OpenClaw, Claude Code, Codex, Cursor, bash, HTTP. Roadmap items now in flight include a plugin system, a Skills Manager, scheduled routines, agent reviews and approvals, and multi-user collaboration.",
    why: "Paperclip's tagline says it cleanly: 'If OpenClaw is an employee, Paperclip is the company.' This is the project that crystallised what an operating system for the new style of company actually has to provide. Every other entry on this list is either a worker that plugs into a control plane like this, or a rail it calls out to.",
  },
  {
    name: "Andon Market / Luna",
    what:
      "A physical retail store in San Francisco's Cow Hollow neighborhood, signed on a three-year lease and operated by Luna, an AI agent built by Andon Labs on Anthropic models. Luna gets a company card, a phone number, an email account, the open internet, and visual input from cameras. It picks the products, sets the prices, decides the operating hours, posts and conducts hiring interviews, and supervises the human staff who do the physical work. Andon Labs has been transparent that the humans on the floor are formally employed by Andon Labs, with wages and legal protection — this is a controlled experiment, not a stunt.",
    why: "The clearest live experiment of the inversion. AI as manager, humans as physical execution. It does not prove a 'company without humans' — it proves something narrower and more interesting, which is that the management layer can be software while the physical layer stays human. That is the version of the idea that has any chance of being practical in 2026.",
  },
  {
    name: "Project Vend / Claudius",
    what:
      "Anthropic's 2025 internal experiment in which Claude managed a small automated shop in the office for about a month. It handled pricing, inventory, supplier relationships, and customer interactions — with real money and real co-workers. The lessons (and failure modes) shaped both Andon Labs' follow-on work and the way frontier labs talk about agent autonomy in production.",
    why: "The first public attempt by a frontier lab to put an LLM in charge of a small business. Project Vend's value was not the revenue; it was the catalogue of failure modes — confidently mispriced inventory, off-policy purchases, drift over the month — that everyone building in the space now has to design around.",
  },
  {
    name: "ClawBank / Manfred",
    what:
      "Financial infrastructure that lets an agent register a US LLC, obtain an IRS EIN, hold an FDIC-insured bank account and a crypto wallet, and operate against an API key. Manfred is the ClawBank-internal agent that has been demonstrated executing this flow end to end. The roadmap includes programmatic LLC formation, registered business addresses, ownership structures, scoped agent API keys, agent-to-agent transactions, and autonomous revenue routing.",
    why: "Tests whether agents can hold the legal and financial rails a company needs. The careful framing in the public reporting is important: the change is operational, not regulatory. Ownership and responsibility rules still apply, and a responsible human or organisation is still on the hook. What is genuinely new is that those rails are now reachable through an API rather than through a courthouse and a bank branch.",
  },
  {
    name: "Coinbase x402 + AWS Bedrock AgentCore Payments",
    what:
      "Payment rails for agentic commerce. x402 is Coinbase's discovery and payment layer for agents — it lets an agent find services, request a price, and pay micropayments for what it consumes. AWS Bedrock AgentCore Payments integrates x402 so agents deployed on AWS can do all of this with enterprise-grade governance, compliance, budget controls, and audit logs baked in.",
    why: "Without a way for agents to spend money inside policy, no zero-human company is possible — the agents would be locked out of every paid service the moment they tried to do anything useful. This is the financial layer of the control plane being commoditised. It is also the integration that makes the difference between 'agent script' and 'agent that can run a business.'",
  },
  {
    name: "Coinbase 'one-person teams' (May 2026 memo)",
    what:
      "Brian Armstrong's organisational memo announced Coinbase would become 'lean, fast, and AI-native,' reduce management layers, ask managers to be player-coaches, and explicitly experiment with one-person teams — combining engineering, design, and product responsibilities into a single AI-native role. The memo accompanied a roughly 14% workforce reduction.",
    why: "The first time a major public company put the same idea — one human directing a stack of AI agents to do the work of a small pod — into a formal organisational design and a capital-allocation decision. The implication for everyone working in this space is that the pattern is no longer just an indie-founder story; it is now staffing strategy at companies with public earnings calls.",
  },
  {
    name: "Shopify's 'justify why AI can't' memo (2025)",
    what:
      "Tobi Lütke's internal memo required teams to explain why AI cannot accomplish a goal before requesting new headcount or additional resources, and folded AI tool use into performance and peer reviews.",
    why: "The cultural prerequisite for the Coinbase memo to make any sense. Once 'use AI to do this' is the default and 'hire for this' is the exception that has to be argued for, every team starts converging on something that looks like a one-person team — even when the legal entity is a public company.",
  },
  {
    name: "OpenAI Codex App and the Symphony pattern",
    what:
      "Codex App is OpenAI's interface for managing multiple coding agents in parallel — long-running tasks, structured handoffs, and integration with around ninety third-party plugins. The Symphony pattern uses Linear as the orchestrator: agents pull issues from the task system, run autonomously in dedicated workspaces, and report back when done. Once you are managing a few Codex sessions at once, direct chat falls apart; you need a task system that the agents pull from.",
    why: "Symphony is the cleanest demonstration of the orchestration shift. The unit of management is no longer the agent session; it is the task. Every other 'company OS' product, including Paperclip, is essentially generalising that move.",
  },
  {
    name: "Anthropic Claude Code",
    what:
      "An agentic coding system that reads a codebase, edits across files, runs tests, and ships commits. Anthropic frames Claude Code as shifting the engineer toward architecture, product thinking, and continuous orchestration of multiple agents — not as a faster autocomplete.",
    why: "The frontier lab telling its users that the founder's role inside the new pattern is architect and orchestrator, not line coder. That framing matters; it is what makes the one-person-team or zero-human-company pattern legible to engineering managers who would otherwise reach for a headcount request.",
  },
  {
    name: "Medvi (Matthew Gallagher)",
    what:
      "A GLP-1 telehealth business, reportedly started with about a dozen AI tools and roughly $20K of capital. It hit roughly $401M of 2025 sales with a 2026 target near $1.8B. Gallagher later hired family and contractors, and Medvi depends on third-party medical and pharmacy partners. The business has also publicly surfaced real failure modes: chatbot fabrications about pricing and products that did not exist, FDA letters, and marketing-related complaints.",
    why: "The most cited real-world reference case — a strong signal that the new pattern can scale unusually fast in the right vertical, and an equally strong cautionary tale about how the failure modes show up. The honest read is not 'AI replaces everything'; it is 'distribution, demand-side advantage, and a founder who knows the market still do most of the work.'",
  },
  {
    name: "Predictions: Altman 2024, Amodei 2026",
    what:
      "Sam Altman has predicted the first one-person billion-dollar company since 2024. In 2026 Anthropic's Dario Amodei publicly predicted the first one might appear by year-end. Neither prediction has been validated as of mid-2026.",
    why: "Two of the most-listened-to voices in frontier AI publicly betting on the same operational claim. The predictions are not what makes the pattern real — Paperclip and Andon Market do that — but they shape capital, hiring, and policy decisions in a way that compounds the pattern's growth.",
  },
];

const controlPlaneLayers: Array<{
  layer: string;
  role: string;
  examples: string;
}> = [
  {
    layer: "1. Intent / governance",
    role:
      "The single human (or a small board) at the top. Sets goals, allocates capital, signs contracts, owns liability, holds the legal entity, approves irreversible decisions. Slow cadence — days to quarters. This layer does not shrink to zero in any honest 2026 implementation; legal personhood, fiduciary duty, KYC/AML, banking, and contract liability all still require a responsible human or organisation.",
    examples:
      "Quarterly bets, pricing changes, hiring an agent role, kill/keep calls, regulatory and tax filings, court of last resort for any escalated decision.",
  },
  {
    layer: "2. Agent organisation",
    role:
      "Multiple LLM-driven agents with named roles, reporting lines, scopes, monthly budgets with hard stops, evaluations, and clear handoffs back to the intent layer. This is the layer Paperclip and similar 'company OS' products model. The interesting work is here.",
    examples:
      "A research agent, an engineering agent, a marketing agent, a support agent, a finance agent. Each has identity, tool permissions, a budget, an eval suite, and a heartbeat. The handoffs between them are documented in shared state — a task tracker, a doc, a queue — not in chat.",
  },
  {
    layer: "3. Tool and rail layer",
    role:
      "Deterministic infrastructure the agents call into — code execution, hosting, payments, email, CRM, observability — plus the rails that let the agent layer interact with the wider economy.",
    examples:
      "GitHub, Vercel, Stripe, Resend, Supabase, observability stack. Plus emerging agent-specific rails: x402 / AgentCore Payments for transactions, ClawBank-style entities for legal form and bank accounts, scoped API keys for agent identity.",
  },
];

const realityCheck: Array<{ status: string; items: string[] }> = [
  {
    status: "Real and shipping in 2026",
    items: [
      "Single-founder businesses running on an AI labour stack — small SaaS, content / SEO / GEO, info-products, niche directories, programmatic-SEO sites — at $0 to $1M ARR.",
      "Live experiments where an LLM manages a real business with real money: Anthropic's Project Vend, Andon Labs' Andon Market.",
      "Paperclip-style control planes giving founders a way to manage many agents at once with budgets, roles, audit trails, and approvals.",
      "Agentic commerce rails: Coinbase x402 and AWS Bedrock AgentCore Payments are available to developers in production.",
      "AI-native pods inside large companies: the pattern has formal organisational expression at Coinbase and the cultural prerequisites at Shopify.",
    ],
  },
  {
    status: "Plausible, partially demonstrated",
    items: [
      "Agents self-incorporating an LLC and obtaining a bank account (ClawBank / Manfred): operationally demonstrated end to end, while the legal entity still has a human or organisation as the responsible party.",
      "Agent organisations with five to twenty agents working concurrently, coordinated through a control plane like Paperclip rather than ad hoc prompting.",
      "AI-managed micro-businesses where the agent stack handles most operations and the founder works at the policy level.",
      "A genuine one-person billion-dollar company. Medvi's $401M of 2025 sales is the strongest signal but not a clean proof — it has hired humans and depends on third-party partners. Sam Altman's and Dario Amodei's predictions remain unvalidated as of mid-2026.",
    ],
  },
  {
    status: "Still aspirational",
    items: [
      "A company that, in any defensible sense, runs without a responsible human or organisation behind it. Banking, contracts, accountability, and tax all still assume an identifiable responsible party.",
      "Stable multi-quarter agent execution without a control plane. The frontier task horizon has grown; the failure mode is now drift over weeks, context loss across sessions, and inconsistent decisions as state accumulates.",
      "Agent organisations operating in industries with structural human-in-the-loop requirements (regulated finance, healthcare, legal) without a human in those loops.",
    ],
  },
];

const moats: Array<{ label: string; body: string }> = [
  {
    label: "Vertical know-how",
    body:
      "Domain depth that lets the founder pick problems and judge agent output that generalist competitors cannot. The most defensible moat as the AI tooling itself commoditises.",
  },
  {
    label: "Distribution and trust",
    body:
      "An audience, a brand, a relationship with regulators or platforms — anything that gives the founder access to demand the agents would not have on their own. Medvi's GLP-1 demand wave is a distribution story before it is an AI story.",
  },
  {
    label: "Proprietary data and context",
    body:
      "Customer data, transaction history, internal evals, and curated examples that cannot be regenerated by a generic agent stack. The thing the agent reads but cannot reproduce.",
  },
  {
    label: "Taste",
    body:
      "The ability to judge between equally plausible agent outputs. Cheap to write off; expensive to build; the difference between Medvi and a hundred copycats running the same playbook.",
  },
  {
    label: "Compliance edges",
    body:
      "Where rules are unsettled, the founder who reads and operates within them well has an advantage. Where rules are settled, the founder who knows where the lines are has an advantage. Same skill, different game.",
  },
];

const policyProgrammes: Array<{ city: string; body: string }> = [
  {
    city: "Shenzhen",
    body: "Released the AI-era one-person company entrepreneurship ecosystem action plan, 2026–2027 in January 2026, integrating talent, industry support, compute, models, corpora, and capital around solo AI founders.",
  },
  {
    city: "Hangzhou",
    body: "The 'one-person unicorn' programme, started September 2025, reportedly received over 1,300 applications and selected around 32 one-person companies into a clustered community.",
  },
  {
    city: "Beijing (Haidian)",
    body: "Ran the 'Single-Person Army' AI-era one-person company founder accelerator in March 2026, covering compliance, AI trends, monetisation, finance, personal IP, and customer acquisition.",
  },
];

const faq: Array<{ q: string; a: string }> = [
  {
    q: "What is a zero-human company in 2026?",
    a: "A complete business whose execution work — engineering, marketing, support, sales, finance, operations — runs on an organisation of AI agents instead of employees, with one human at the top doing intent, governance, and approvals rather than line-level work. The phrase is also used as a product category for tools like Paperclip that model the company itself as a manageable organisation of agents.",
  },
  {
    q: "Is this the same as a one-person company?",
    a: "Yes. The two phrases are near-synonyms, used interchangeably in 2026 tech contexts. About 90% of the meaning overlaps; the 10% difference is which side of the same idea the speaker emphasises (the team has gone from employees to software, versus one human runs this). Same canonical examples, same stack, same predictions, same reality check. Both pages on this site cover the same thing.",
  },
  {
    q: "What are the canonical zero-human company projects?",
    a: "Paperclip is the open-source control plane that models a company as an organisation of agents. Anthropic's Project Vend (2025) and the follow-on Andon Market by Andon Labs (2026) put an LLM in charge of a real business. ClawBank's Manfred has demonstrated an agent self-incorporating a US LLC. Coinbase x402 and AWS Bedrock AgentCore Payments are the payment rails. Coinbase's May 2026 memo introduced 'one-person teams' inside a public company; Shopify's 2025 memo created the cultural prerequisites. Codex App and the Symphony pattern showed how to manage multiple agents through a task tracker. Claude Code is the agentic coding worker most often plugged into the stack. Medvi is the most cited reference case with real numbers and real failure modes.",
  },
  {
    q: "Does 'zero-human' mean literally zero humans?",
    a: "No, and the most accurate references in 2026 do not claim it. The founder is still a human; so are customers, regulators, and counterparties. The narrower claim is operational: no employees execute the day-to-day work, and humans intervene only at intent, governance, and approvals. The honest description of working examples is 'human-supervised autonomous operations.'",
  },
  {
    q: "What does the control plane look like?",
    a: "Agent identity and scoped permissions, an org chart of agent roles with reporting lines, monthly budgets with hard stops, heartbeats and scheduled routines, governance with human approval gates, an audit trail of every decision and tool call, payment rails (x402 / AgentCore Payments), and durable memory or institutional knowledge. Paperclip is the canonical open-source implementation of these as one coherent product.",
  },
  {
    q: "Has anyone built a one-person billion-dollar company yet?",
    a: "Not by mid-2026. Sam Altman has predicted it since 2024; Dario Amodei in 2026 said the first might appear by year-end. Medvi is the most cited reference case with $401M of reported 2025 sales but it is not strictly a one-person operation, and its public failure modes are well documented. The prediction is unvalidated; the trajectory is real.",
  },
  {
    q: "What goes wrong in practice?",
    a: "Agent hallucinations at customer-facing surfaces (Medvi's first-line support reportedly fabricated drug pricing and products that did not exist). Long-horizon drift where agents lose context across days or weeks. Coordination collapse when ten agents work in parallel without a control plane. Cost blow-ups without enforced budgets. Compliance gaps in industries where the human-in-the-loop requirement is structural rather than technical.",
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

      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-4)",
          borderBottom: "1px solid var(--rule)",
          paddingBottom: "var(--space-5)",
          marginBottom: "var(--space-5)",
        }}
      >
        <div className="flex items-baseline justify-between gap-4">
          <span className="eyebrow">definition / zero-human-company</span>
          <span className="mono-meta">v2.6 · 2026</span>
        </div>
        <h1
          className="font-display text-pretty"
          style={{
            fontSize: "clamp(36px, 5.6vw, 56px)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-display)",
            fontWeight: 600,
            color: "var(--ink)",
            textWrap: "balance",
          }}
        >
          Zero-Human Company
        </h1>
        <p
          className="text-pretty"
          style={{
            fontSize: "17px",
            lineHeight: "var(--leading-normal)",
            color: "var(--ink-2)",
            maxWidth: "640px",
            fontFamily: "var(--font-sans)",
          }}
        >
          {ONE_LINER}
        </p>
        <p
          className="font-mono"
          style={{
            fontSize: "12px",
            color: "var(--ink-3)",
            letterSpacing: "var(--tracking-mono)",
          }}
        >
          By{" "}
          <Link href="/about" className="glow-link">
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
            are near-synonyms in 2026. Both phrases name the same shift:
            once frontier coding agents (Claude Code, Codex, OpenClaw,
            Cursor) and a layer of specialised research, growth, support,
            and operations agents matured, it became practical for a
            single human to run a complete business that previously
            needed a team. About 90% of the meaning overlaps; in tech
            contexts the two phrases are used interchangeably.
          </p>
          <p>
            The two pages on this site cover the same shift. This one
            organises the material around the team — the agent
            organisation and the control plane that makes it work. The{" "}
            <Link
              href="/one-person-company"
              className="underline hover:opacity-70"
            >
              one-person company page
            </Link>{" "}
            organises the same material around the human — the founder
            workflow and the predictions. Same canonical examples on both
            pages.
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
            founder operates at intent and governance rather than at line
            level. The term is also used as a product category, most
            clearly by open-source projects like{" "}
            <strong className="text-foreground">Paperclip</strong>, which
            describes itself as a human control plane for AI labor.
          </p>
          <p>
            Three operational criteria:
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
            <em>autonomous corporation</em>, and <em>one-person company</em>.
            Through 2025 and into 2026 the phrase consolidated around a
            specific product category — control planes that model a company
            as an organisation of agents — with Paperclip&apos;s public
            framing (&quot;orchestration for zero-human companies&quot;)
            as the most explicit anchor.
          </p>
          <p>
            In parallel, frontier labs ran the term&apos;s first public
            implementations. Anthropic&apos;s Project Vend (2025) put
            Claude in charge of a small office shop. Andon Labs took the
            same idea further with Andon Market in 2026 — a physical SF
            retail store run by Luna, an AI agent on Anthropic models.
            Each iteration tightened what the phrase actually means in
            production.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Canonical 2024–2026 references
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          Whenever the phrase appears in 2026, it is pointing at some
          subset of this list. These are the projects, products, and
          public statements that gave the idea its current weight. Each
          tells you something specific about what is real and what is not.
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
                What it tells us: {p.why}
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
          that control plane; the framing here is consistent with theirs
          and should be read alongside it, not as a competing claim.
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
          The connective tissue between layers is the actual product
          surface. Agent identity and scoped permissions. Org chart with
          reporting lines. Monthly budgets with hard stops. Heartbeats and
          scheduled routines. Governance with human approval gates. Audit
          trail of every decision and tool call. Payment rails like x402.
          Durable memory. Building one more agent is no longer the
          bottleneck; the bottleneck is making ten or twenty agents work
          together without burning the company down. Paperclip&apos;s
          explicit goal is to make the connective tissue a first-class
          object, and the rest of the field is converging on the same
          idea.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          China policy context
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          Chinese cities have moved earlier and more explicitly than their
          US counterparts on policy support for the new pattern, and the
          framing tracks the AI-era operating model.
        </p>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {policyProgrammes.map((p) => (
            <li key={p.city} className="py-5 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground">
                {p.city}
              </p>
              <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
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
          Where the moat actually is
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          When the AI labour stack becomes commodity, every founder gets
          the same starter kit. The differentiators move elsewhere — and
          this is where the difference between a thought experiment and a
          real business shows up.
        </p>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {moats.map((m) => (
            <li key={m.label} className="py-5 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground">
                {m.label}
              </p>
              <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
                {m.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Why I am writing this
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          <p>
            I build agent systems for a living. Earlier versions of this
            page tried to draw a clean line between &quot;zero-human
            company&quot; and &quot;one-person company.&quot; That line
            does not exist in the way the terms are actually being used in
            2026 — they are two names for the same shift, used
            interchangeably. This rewrite drops the artificial split and
            covers the canonical references in one place.
          </p>
          <p>
            The page is anchored in shipping projects rather than
            speculation: Paperclip as the canonical control plane; Andon
            Market and Project Vend as live experiments; ClawBank&apos;s
            Manfred as the legal-and-financial-rails experiment; Coinbase
            x402 and AgentCore Payments as the commoditised payment layer;
            Coinbase&apos;s May 2026 memo and Shopify&apos;s 2025 memo as
            the inside-larger-companies expression of the same pattern;
            Symphony and Claude Code as the tools the agents are made of;
            Medvi as the most cited real-world reference case with both
            its scale and its failure modes; the public predictions from
            Sam Altman and Dario Amodei.
          </p>
          <p>
            For the same shift organised around the founder rather than
            the team, see the{" "}
            <Link
              href="/one-person-company"
              className="underline hover:opacity-70"
            >
              one-person company page
            </Link>
            . It covers the same projects with the workflow in front and
            the architecture behind it.
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
              One-Person Company — same shift, organised around the
              founder workflow
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
