import type { Metadata } from "next";
import Link from "next/link";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  definedTermJsonLd,
  graphScriptContent,
} from "@/lib/jsonld";

const PATH = "/one-person-company";
const PUBLISHED = "2026-05-08";

const ONE_LINER =
  "A near-synonym for 'zero-human company.' Both phrases name the same 2024–2026 organisational shift: a single founder running a complete business with an AI labour stack of agents, SaaS, and APIs that previously required a small team. This page is the comprehensive read — the workflow, the canonical references every reader keeps coming back to, the predictions, and an honest reality check on what is real versus narrative.";

export const metadata: Metadata = {
  title: "One-Person Company — A 2026 Definition with Founder Workflow and Canonical Examples",
  description:
    "A one-person company is the 2024–2026 pattern of a single founder orchestrating an AI labour stack to run a complete business solo. A near-synonym for zero-human company. This page covers the founder workflow, the canonical references (Paperclip, Andon Market, Project Vend, ClawBank, Coinbase x402, AWS Bedrock AgentCore Payments, Coinbase one-person teams, Shopify, Codex Symphony, Claude Code, Medvi), the Sam Altman and Dario Amodei predictions, the China policy programmes, where the moat actually is, and what is real versus aspirational.",
  alternates: { canonical: PATH },
  keywords: [
    "one person company",
    "one-person company",
    "zero-human company",
    "one-person team",
    "AI-native pod",
    "AI-native company",
    "solo founder",
    "one-person unicorn",
    "one-person billion dollar company",
    "Medvi",
    "Coinbase one-person teams",
    "Codex Symphony",
    "Claude Code",
    "OpenClaw",
    "Paperclip",
    "Bingran You",
  ],
  openGraph: {
    title: "One-Person Company",
    description: ONE_LINER,
    url: PATH,
    type: "article",
    publishedTime: new Date(PUBLISHED).toISOString(),
    authors: ["Bingran You"],
  },
  twitter: {
    card: "summary_large_image",
    title: "One-Person Company",
    description: ONE_LINER,
  },
};

const definedTerm = definedTermJsonLd({
  path: PATH,
  name: "One-Person Company",
  alternateName: [
    "One Person Company",
    "Zero-Human Company",
    "One-Person Team",
    "AI-Native Pod",
    "One-Person Unicorn",
    "Solo Founder Company",
  ],
  description: ONE_LINER,
  termCode: "one-person-company",
});

const article = articleJsonLd({
  path: PATH,
  title:
    "One-Person Company — A 2026 Definition with Founder Workflow and Canonical Examples",
  description: ONE_LINER,
  date: PUBLISHED,
  about: "One-Person Company",
  keywords: [
    "one person company",
    "zero-human company",
    "Coinbase one-person teams",
    "Medvi",
    "Codex Symphony",
    "Claude Code",
    "Paperclip",
  ],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "One-Person Company", path: PATH },
]);

const founderStack: Array<{ surface: string; tools: string }> = [
  {
    surface: "Engineering labour",
    tools:
      "Claude Code (Anthropic), Codex (OpenAI), OpenClaw, Cursor as agentic coding workers — they read the codebase, edit across files, run tests, and ship commits. The founder's role moves from line coder to architect, reviewer, and orchestrator. Anthropic's framing of Claude Code is explicit on this shift: the engineer is now the person doing architecture, product thinking, and continuous orchestration of multiple agents in flight.",
  },
  {
    surface: "Agent orchestration",
    tools:
      "OpenAI's Codex App for managing multiple coding agents in parallel — long-running tasks, structured handoffs, ~ninety third-party plugins. The Symphony pattern uses Linear as the orchestrator: agents pull issues, run autonomously in dedicated workspaces, report back when done. For multi-role companies (engineering plus marketing plus support plus ops), Paperclip-style control planes with org chart, budgets, governance, and audit. AGENTS.md and similar config files describing roles and policies.",
  },
  {
    surface: "Research, growth, content",
    tools:
      "Specialised agents for technical research, SEO and GEO, social drafting, ad creative, programmatic-SEO sites, niche directories. Founder edits and approves; agent ships. The cost structure does not look like a traditional business of comparable revenue.",
  },
  {
    surface: "Customer-facing operations",
    tools:
      "Support agents over a docs and ticket layer; CRM automation; lifecycle email; payments and billing automation. This surface needs care — Medvi's first-line support reportedly fabricated drug pricing and products that did not exist, which is the failure mode you cannot ship.",
  },
  {
    surface: "Rails",
    tools:
      "Stripe, Vercel, Supabase, Resend, GitHub Actions, observability. Increasingly, agent-specific rails: Coinbase x402 and AWS Bedrock AgentCore Payments for agentic commerce, scoped API keys for agent identity, ClawBank-style entities so an agent can hold an LLC and a bank account through an API key.",
  },
];

const canonicalReferences: Array<{
  name: string;
  what: string;
  why: string;
}> = [
  {
    name: "Coinbase 'one-person teams' (May 2026 memo)",
    what:
      "Brian Armstrong's organisational memo announced Coinbase would become 'lean, fast, and AI-native,' reduce management layers, ask managers to be player-coaches, and explicitly experiment with one-person teams — combining engineering, design, and product responsibilities into a single AI-native role. The memo accompanied a roughly 14% workforce reduction.",
    why: "The first time a major public company put the same idea — one human directing a stack of AI agents to do the work of a small pod — into a formal organisational design and a capital-allocation decision. The implication is that the pattern is no longer just an indie-founder story; it is now staffing strategy at companies with public earnings calls.",
  },
  {
    name: "Shopify's 'justify why AI can't' memo (2025)",
    what:
      "Tobi Lütke's internal memo required teams to explain why AI cannot accomplish a goal before requesting new headcount or additional resources, and folded AI tool use into performance and peer reviews.",
    why: "The cultural prerequisite for the Coinbase memo. Once 'use AI to do this' is the default and 'hire for this' is the exception that has to be argued for, every team converges on something that looks like a one-person team — even when the legal entity is a public company.",
  },
  {
    name: "Medvi (Matthew Gallagher)",
    what:
      "A GLP-1 telehealth business, reportedly started with about a dozen AI tools and roughly $20K of capital. Hit roughly $401M of 2025 sales with a 2026 target near $1.8B. Gallagher later hired family and contractors, and the business depends on third-party medical and pharmacy partners. Public failure modes: chatbot fabrications about pricing and products that did not exist, FDA letters, and marketing-related complaints.",
    why: "The most cited real-world reference case. Strong signal that the pattern can scale unusually fast in the right vertical, and an equally strong cautionary tale about how the failure modes show up. The honest read is not 'AI replaces everything'; it is 'distribution, demand-side advantage, and a founder who knows the market still do most of the work.'",
  },
  {
    name: "Predictions: Altman 2024, Amodei 2026",
    what:
      "Sam Altman has predicted the first one-person billion-dollar company since 2024. In 2026 Anthropic's Dario Amodei publicly predicted the first one might appear by year-end. Neither prediction has been validated as of mid-2026.",
    why: "Two of the most-listened-to voices in frontier AI publicly betting on the same operational claim. The predictions are not what makes the pattern real — Paperclip, Medvi, and Andon Market do that — but they shape capital, hiring, and policy decisions in a way that compounds the pattern's growth.",
  },
  {
    name: "Paperclip",
    what:
      "Open-source orchestration positioned as a 'human control plane for AI labor.' Models a company: org chart with named roles and reporting lines, monthly budgets with hard stops, scheduled heartbeats, governance and approvals, full audit trail, multi-company isolation. Bring-your-own agent: OpenClaw, Claude Code, Codex, Cursor, bash, HTTP. Tagline: 'If OpenClaw is an employee, Paperclip is the company.'",
    why: "Once a founder is running more than two or three agents, direct chat-style management falls apart. Paperclip is the cleanest open-source articulation of what the next layer up looks like — the operating system for a company whose team is software.",
  },
  {
    name: "Andon Market / Luna",
    what:
      "A physical retail store in San Francisco's Cow Hollow neighborhood, signed on a three-year lease and operated by Luna, an AI agent built by Andon Labs on Anthropic models. Luna picks the products, sets prices, decides hours, posts and conducts hiring interviews, and supervises the human staff who do the physical work. Andon Labs has been transparent that the human staff are formally employed by Andon Labs — this is a controlled experiment, not a stunt.",
    why: "The clearest live experiment of the inversion. AI as manager, humans as physical execution. Not 'no humans involved' — the version of the idea that has any chance of being practical in 2026 is exactly this: software runs the management layer, humans handle the physical layer.",
  },
  {
    name: "Project Vend / Claudius",
    what:
      "Anthropic's 2025 internal experiment in which Claude managed a small automated shop in the office for about a month. Pricing, inventory, supplier relationships, customer interactions. The direct precursor to Andon Market.",
    why: "The first public attempt by a frontier lab to put an LLM in charge of a small business. Project Vend's value was not the revenue; it was the catalogue of failure modes — confidently mispriced inventory, off-policy purchases, drift over the month — that everyone now has to design around.",
  },
  {
    name: "ClawBank / Manfred",
    what:
      "Financial infrastructure that lets an agent register a US LLC, obtain an IRS EIN, hold an FDIC-insured bank account and a crypto wallet, and operate against an API key. Manfred is the ClawBank-internal agent demonstrated executing this flow end to end.",
    why: "Tests whether agents can hold the legal and financial rails a company needs. The careful framing is important: the change is operational, not regulatory. Ownership and responsibility rules still apply, and a responsible human or organisation is still on the hook. What is genuinely new is that those rails are reachable through an API rather than a courthouse and a bank branch.",
  },
  {
    name: "Coinbase x402 + AWS Bedrock AgentCore Payments",
    what:
      "Payment rails for agentic commerce. x402 lets an agent find services, request a price, and pay micropayments for what it consumes. AWS Bedrock AgentCore Payments integrates x402 for agents on AWS with enterprise-grade governance, compliance, budget controls, and audit logs.",
    why: "Without a way for agents to spend money inside policy, no founder running an AI labour stack can ship. This is the financial layer of the founder stack being commoditised — and the integration that makes the difference between 'agent script' and 'agent that can run a business.'",
  },
  {
    name: "OpenAI Codex App and the Symphony pattern",
    what:
      "Codex App is OpenAI's interface for managing multiple coding agents in parallel. The Symphony pattern uses Linear as the orchestrator: agents pull issues from the task system, run autonomously, report back. Once a founder is running a few Codex sessions at once, direct chat falls apart and the task system becomes the management surface.",
    why: "The cleanest demonstration of the orchestration shift. The unit of management is no longer the agent session; it is the task. This is the pattern most one-person founders end up adopting before they reach for a heavier control plane like Paperclip.",
  },
  {
    name: "Anthropic Claude Code",
    what:
      "An agentic coding system that reads a codebase, edits across files, runs tests, and ships commits. Anthropic frames Claude Code as shifting the engineer toward architecture, product thinking, and continuous orchestration — not as a faster autocomplete.",
    why: "The frontier lab telling its users that the founder's role inside the new pattern is architect and orchestrator, not line coder. That framing matters; it is what makes the one-person-company pattern legible to engineering managers who would otherwise reach for a headcount request.",
  },
];

const realityChecks: Array<{ status: string; items: string[] }> = [
  {
    status: "Realistic single-person operations in 2026",
    items: [
      "Single-product SaaS at $0–$1M ARR — founder plus agents handling content, SEO and GEO, first-line support, billing, reporting.",
      "Newsletter, course, info-product, programmatic-SEO, and niche-directory businesses — agents draft and refresh, founder picks the niche and keeps the voice.",
      "Templates, prompts, and digital asset stores — agents handle marketplace operations, founder curates the catalogue.",
      "Indie consulting or research practice with agent-augmented deliverables.",
      "AI-native pods inside large companies (Coinbase one-person teams, the cultural prerequisites at Shopify) — the same operating mode wrapped in a public-company legal entity.",
    ],
  },
  {
    status: "Workable but with friction",
    items: [
      "Two-sided marketplaces — agents handle most operations but trust events (disputes, fraud) need a human.",
      "Mid-market B2B SaaS — agents handle inbound, but enterprise procurement still wants a human voice.",
      "Communities and creator businesses — automation works for backend; the front of the house is the person, by design.",
      "Healthtech / fintech / regtech — Medvi proves scale is possible at this end of the spectrum; the FDA letters and chatbot hallucinations prove the failure modes are real.",
    ],
  },
  {
    status: "Not realistic as a one-person operation in 2026",
    items: [
      "Anything physical at scale — manufacturing, fulfilment, fleet, retail without significant operator support.",
      "Industries where the human-in-the-loop requirement is structural, not technical.",
      "Anything dependent on enterprise relationship sales above $100K ACV.",
    ],
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

const faq: Array<{ q: string; a: string }> = [
  {
    q: "What is a one-person company in 2026?",
    a: "A single founder who orchestrates AI agents — Claude Code, Codex, OpenClaw, Cursor, plus specialised agents for research, growth, support, and operations — together with SaaS, APIs, and selective outsourcing to run a complete business that previously took a small team. The founder is the orchestrator. The agents are the team. The bottleneck shifts from founder hours to founder judgment and agent coordination.",
  },
  {
    q: "Is this the same as a zero-human company?",
    a: "Yes. The two phrases are near-synonyms, used interchangeably in 2026 tech contexts. About 90% of the meaning overlaps; the 10% difference is which side of the same idea the speaker emphasises (one human runs this, versus the team has gone from employees to software). Same canonical examples, same stack, same predictions, same reality check. Both pages on this site cover the same thing.",
  },
  {
    q: "What are the canonical references?",
    a: "On the human side: the Coinbase May 2026 'one-person teams' memo; Shopify's 2025 AI memo; Sam Altman's and Dario Amodei's predictions of the first one-person billion-dollar company; Medvi as the most cited reference case with real numbers and real failure modes; the Chinese policy programmes in Shenzhen, Hangzhou, and Beijing. On the team side: Paperclip as the open-source control plane; Anthropic's Project Vend and Andon Labs' Andon Market as live experiments where an LLM manages a real business; ClawBank's Manfred for the legal and financial rails; Coinbase x402 and AWS Bedrock AgentCore Payments for agentic commerce; OpenAI's Codex App and the Symphony pattern for multi-agent orchestration; Claude Code as the agentic coding worker most often plugged into the stack. All of them belong on the same canonical reference list.",
  },
  {
    q: "What is a 'one-person team' inside a larger company?",
    a: "An AI-native pod: one human combining responsibilities that previously required several roles (engineer, designer, PM, marketer) by using AI agents to fill the gaps. Coinbase announced this experiment publicly in May 2026; Shopify's 2025 AI memo created the cultural conditions for it. Same mechanism as a one-person company; the legal entity is just the parent organisation.",
  },
  {
    q: "Has anyone actually built a billion-dollar one-person company?",
    a: "Not by mid-2026. Medvi's reported $401M of 2025 sales is the strongest signal — and the closest thing to a proof-of-existence — but it is not strictly a one-person operation, and its public failure modes are well documented. Sam Altman's and Dario Amodei's predictions remain unvalidated. The trajectory is real; the headline event has not arrived.",
  },
  {
    q: "Where is the moat?",
    a: "Once the AI labour stack is commoditised, the differentiators are vertical know-how (domain depth), distribution and trust (audience, brand, platform access), proprietary data and context, taste (the judgment between plausible agent outputs), and compliance edges. 'I have AI tools' is not a moat — every competitor will have those by default.",
  },
  {
    q: "What goes wrong in practice?",
    a: "Agent hallucinations at customer-facing surfaces — Medvi's first-line support reportedly fabricated pricing and products. Long-horizon drift across days and weeks. Coordination collapse when ten agents work in parallel without a control plane. Cost blow-ups without enforced budgets. Compliance gaps where structural human-in-the-loop is required.",
  },
];

export default function OnePersonCompanyPage() {
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
          <span className="eyebrow">definition / one-person-company</span>
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
          One-Person Company
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
            One-person company and{" "}
            <Link
              href="/zero-human-company"
              className="underline hover:opacity-70"
            >
              zero-human company
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
            organises the material around the human — the founder
            workflow and the predictions. The{" "}
            <Link
              href="/zero-human-company"
              className="underline hover:opacity-70"
            >
              zero-human company page
            </Link>{" "}
            organises the same material around the team — the agent
            organisation and the control plane that holds it together.
            Same canonical examples on both pages.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Origins of the term
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          <p>
            The phrase started showing up in tech discourse around 2024,
            when Sam Altman publicly predicted the first one-person
            billion-dollar company. Through 2025 and into 2026 it
            consolidated alongside parallel phrases —{" "}
            <em>solo founder</em>, <em>AI-native company</em>,{" "}
            <em>one-person unicorn</em>, <em>one-person team</em>,{" "}
            <em>AI-native pod</em>, and <em>zero-human company</em> — all
            pointing at the same pattern. In 2026, Anthropic&apos;s Dario
            Amodei publicly predicted the first one-person $1B company
            could appear by year-end.
          </p>
          <p>
            By mid-2026 the term carries weight in two specific places.
            In San Francisco, Coinbase has begun building &quot;one-person
            teams&quot; internally and agent-organisation tools like
            Paperclip have crystallised the product category. In Chinese
            tech policy, Shenzhen, Hangzhou, and Beijing have launched
            explicit support programmes for AI-era one-person companies.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          The 2026 founder workflow
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          A working one-person company in 2026 is not a founder with a
          chatbot. It is a founder running a stack of agentic surfaces,
          each with a specific job, glued together by orchestration and
          rails. Recognising that the workflow has multiple distinct
          surfaces — and that each one needs its own discipline — is
          most of the difference between &quot;solopreneur with AI
          tools&quot; and &quot;one-person company.&quot;
        </p>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {founderStack.map((s) => (
            <li key={s.surface} className="py-5 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground">
                {s.surface}
              </p>
              <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
                {s.tools}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          A subtle but important detail: the founder&apos;s day stops
          looking like a sequence of tasks and starts looking like a
          sequence of approvals, briefs, and kill/keep calls. That is the
          tell. If the founder is still doing line-level work, they are
          a solopreneur with extra steps. If they are operating on briefs
          and approvals, they are running a one-person company.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Canonical 2024–2026 references
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          Whenever the phrase appears in 2026, it is pointing at some
          subset of this list. These are the projects, products, and
          public statements that gave the idea its current weight. This
          list is the same on the{" "}
          <Link
            href="/zero-human-company"
            className="underline hover:opacity-70"
          >
            zero-human company page
          </Link>{" "}
          — they are the same thing. Each entry tells you something
          specific about what is real and what is not.
        </p>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {canonicalReferences.map((p) => (
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
          China policy context
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          Chinese cities have moved earlier and more explicitly than
          their US counterparts on policy support for AI-era one-person
          companies, and the framing in these programmes tracks the
          operating model rather than any incorporation status.
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
          Where the moat actually is
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          When the AI labour stack becomes commodity, every founder gets
          the same starter kit. The differentiators move elsewhere — and
          this is where the difference between a thought experiment and
          a real business shows up.
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
          What is realistic in 2026
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          Whether a category works as a one-person company depends on
          how much of the work can be moved off the human, and how
          fault-tolerant the customer relationship is to single-digit
          error rates from agents.
        </p>
        <div className="space-y-8">
          {realityChecks.map((bucket) => (
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
            page tried to draw a clean line between &quot;one-person
            company&quot; and &quot;zero-human company.&quot; That line
            does not exist in the way the terms are being used in 2026 —
            they are two names for the same shift, used interchangeably.
            This rewrite drops the artificial split and covers the
            canonical references in one place, organised around the
            founder workflow.
          </p>
          <p>
            The references the page anchors in are the ones that gave the
            idea its current weight: the Coinbase May 2026 memo and
            Shopify&apos;s 2025 memo as the inside-larger-companies
            expression of the pattern; Sam Altman&apos;s and Dario
            Amodei&apos;s public predictions; Medvi as the most cited
            real-world case with both its scale and its failure modes;
            Paperclip as the canonical control plane; Andon Market and
            Project Vend as live experiments where an LLM manages a real
            business; ClawBank&apos;s Manfred for the legal and financial
            rails; Coinbase x402 and AgentCore Payments as the
            commoditised payment layer; Symphony and Claude Code as the
            tools the agents are made of; the Chinese policy programmes
            in Shenzhen, Hangzhou, and Beijing.
          </p>
          <p>
            For the same shift organised around the team rather than the
            founder, see the{" "}
            <Link
              href="/zero-human-company"
              className="underline hover:opacity-70"
            >
              zero-human company page
            </Link>
            . It covers the same projects with the architecture in front
            and the workflow behind it.
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
              href="/zero-human-company"
              className="underline hover:opacity-70"
            >
              Zero-Human Company — same shift, organised around the team
              and the control plane
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
