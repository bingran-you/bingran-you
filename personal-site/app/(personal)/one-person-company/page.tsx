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
  "A near-synonym for 'zero-human company.' Both phrases name the same 2024–2026 organisational shift: a single founder running a complete business — product, marketing, sales, support, ops — with an AI labour stack of agents, SaaS, and APIs that previously required a small team. One-person company emphasises the founder side; zero-human company emphasises the agent-organisation side. They describe the same thing from two angles.";

export const metadata: Metadata = {
  title: "One-Person Company — Definition, Founder Stack, and What's Actually Working in 2026",
  description:
    "A one-person company is the 2024–2026 pattern of a single founder orchestrating AI agents (Claude Code, Codex, OpenClaw, Cursor) plus specialised research/growth/support/ops agents to run a complete business solo. A near-synonym for zero-human company. This page covers the founder stack, the AI-native pod inside large companies (Coinbase one-person teams, Shopify), reference cases (Medvi, Sam Altman and Dario Amodei predictions), the China policy programmes, where the moat is, and what is realistic in 2026.",
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
    "One-Person Company — Definition, Founder Stack, and What's Actually Working in 2026",
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
      "Claude Code (Anthropic), Codex (OpenAI), OpenClaw, Cursor. Used as agentic coding workers; the founder operates as architect, reviewer, and orchestrator rather than line coder. Anthropic explicitly frames Claude Code as shifting the engineer toward architecture, product thinking, and continuous orchestration.",
  },
  {
    surface: "Agent orchestration",
    tools:
      "OpenAI's Codex App and the Symphony pattern (Linear issues as orchestrator — agents pull work, run autonomously, report back). Paperclip-style company control planes for multi-agent setups, with org chart, budgets, governance, and audit. Custom AGENTS.md / config files describing roles and policies.",
  },
  {
    surface: "Research, growth, content",
    tools:
      "Specialised agents for technical research, SEO and GEO, social drafting, ad creative, programmatic-SEO sites. Founder edits and approves; agent ships.",
  },
  {
    surface: "Customer-facing operations",
    tools:
      "Support agents over a docs and ticket layer; CRM automation; lifecycle email; payments and billing automation. Care needed — Medvi's first-line support reportedly fabricated drug pricing and products that did not exist; the failure modes at the customer surface are real.",
  },
  {
    surface: "Rails",
    tools:
      "Stripe, Vercel, Supabase, Resend, GitHub Actions, observability. Increasingly: agent-specific rails like Coinbase x402 and AWS Bedrock AgentCore Payments for agentic commerce, scoped API keys for agent identity, ClawBank-style entities for legal form and bank accounts.",
  },
];

const realityChecks: Array<{ status: string; items: string[] }> = [
  {
    status: "Realistic single-person operations in 2026",
    items: [
      "Single-product SaaS at $0–$1M ARR — founder + agents handling content, SEO, first-line support, billing, reporting.",
      "Newsletter, course, or info-product business — agents draft, founder edits, automated delivery and payments.",
      "Niche directories, aggregators, programmatic-SEO sites — agents ingest and refresh, founder picks the niche and the schema.",
      "Templates, prompts, and digital asset stores — agents handle marketplace operations, founder curates the catalogue.",
      "Indie consulting or research practice with agent-augmented deliverables.",
    ],
  },
  {
    status: "Workable but with friction",
    items: [
      "Two-sided marketplaces — agents handle most operations but trust events (disputes, fraud) need a human.",
      "Mid-market B2B SaaS — agents handle inbound, but enterprise procurement still wants a human voice.",
      "Communities and creator businesses — automation works for backend; the front of the house is the person, by design.",
      "Healthtech / fintech / regtech — Medvi's $401M run-rate proves scale is possible; FDA letters and chatbot hallucinations prove the failure modes are real.",
    ],
  },
  {
    status: "Not realistic as a one-person operation in 2026",
    items: [
      "Anything physical at scale — manufacturing, fulfilment, fleet, retail without significant operator support.",
      "Industries where the human-in-the-loop requirement is structural rather than technical.",
      "Anything dependent on enterprise relationship sales above $100K ACV.",
    ],
  },
];

const intraCompany: Array<{ label: string; body: string }> = [
  {
    label: "Coinbase — 'one-person teams'",
    body:
      "Brian Armstrong's May 2026 organisational memo announced Coinbase would become 'lean, fast, and AI-native,' reduce management layers, and explicitly experiment with 'one-person teams' — combining engineering, design, and product responsibilities into a single AI-native role. Inside a public company, this is the same pattern: a single human directing a stack of AI agents to do the work of a small pod.",
  },
  {
    label: "Shopify — 'justify why AI can't'",
    body:
      "Tobi Lütke's 2025 internal AI memo required teams to explain why AI cannot accomplish a goal before requesting new headcount or resources, and folded AI use into performance and peer review. The cultural mechanism is the same: agentic capacity becomes the default substrate, headcount becomes the supplement.",
  },
  {
    label: "Symphony / Linear-as-orchestrator",
    body:
      "OpenAI's Symphony pattern uses Linear as the orchestrator: agents pull issues from a task system, run autonomously in dedicated workspaces, and report back when done. Once you can manage a small team of agents through a task tracker rather than a chat window, the 'one human + many agents' mode becomes legible to managers and easier to staff inside a company.",
  },
];

const moats: Array<{ label: string; body: string }> = [
  {
    label: "Vertical know-how",
    body:
      "Domain depth that lets the founder pick problems and judge agent output that generalist competitors cannot. The most defensible moat as AI tooling commoditises.",
  },
  {
    label: "Distribution and trust",
    body:
      "An audience, a brand, a relationship with regulators or platforms — anything that gives the founder access to demand the agents would not have on their own.",
  },
  {
    label: "Proprietary data and context",
    body:
      "Customer data, transaction history, internal evals, and curated examples that cannot be regenerated by a generic agent stack.",
  },
  {
    label: "Taste",
    body:
      "The ability to judge between equally plausible agent outputs. Cheap to write off; expensive to build; the thing that distinguishes Medvi from a hundred copycats running the same playbook.",
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
    body: "Released the 'AI OPC entrepreneurship ecosystem action plan, 2026–2027' in January 2026, integrating talent, industry support, compute, models, corpora, and capital around solo AI founders.",
  },
  {
    city: "Hangzhou",
    body: "The 'one-person unicorn' programme, started September 2025, reportedly received over 1,300 applications and selected 32 one-person companies into a clustered community.",
  },
  {
    city: "Beijing (Haidian)",
    body: "Ran the 'Single-Person Army: AI-era One-Person Company (OPC) Founder Accelerator' in March 2026 — covering compliance, AI trends, monetisation, finance, personal IP, and customer acquisition.",
  },
];

const faq: Array<{ q: string; a: string }> = [
  {
    q: "What is a one-person company in 2026?",
    a: "A single founder running a complete business — product, marketing, sales, support, ops — with an AI labour stack: Claude Code, Codex, OpenClaw, Cursor as engineering workers; specialised research, growth, support, and operations agents on top; SaaS and APIs as rails. The founder is the orchestrator. The agents are the team. The bottleneck shifts from founder hours to founder judgment and agent coordination.",
  },
  {
    q: "Is this the same as a zero-human company?",
    a: "Yes, in practice. Both phrases describe the same 2024–2026 shift. One-person company emphasises the founder side ('one human runs this'); zero-human company emphasises the agent-organisation side ('the company runs without employees'). About 90% of the meaning overlaps and the terms are used interchangeably in tech contexts. See the dedicated zero-human company page for the agent-organisation control-plane angle.",
  },
  {
    q: "What is a 'one-person team' inside a larger company?",
    a: "An AI-native pod: one human combining responsibilities that previously required several roles (engineer, designer, PM, marketer) by using AI agents to fill the gaps. Coinbase announced this experiment publicly in May 2026; Shopify's 2025 AI memo created the cultural conditions for it. Same mechanism as a one-person company; the legal entity is just the parent organisation.",
  },
  {
    q: "Has anyone actually built a billion-dollar one-person company?",
    a: "Not yet, by mid-2026. The widely-cited reference case is Medvi, Matthew Gallagher's GLP-1 telehealth business: roughly $401M of 2025 sales, built with about a dozen AI tools and a budget reportedly around $20K to start. Medvi later hired family and contractors, depended on third-party medical and pharmacy partners, and surfaced real failure modes — chatbot fabrications, FDA warnings, marketing-related complaints — that the optimistic version of the story tends to omit. Sam Altman has predicted a one-person billion-dollar company since 2024; Dario Amodei in 2026 publicly predicted the first might appear by year-end. As of mid-2026 the prediction has not been validated.",
  },
  {
    q: "Where is the moat?",
    a: "Once the agent stack is commoditised, the differentiators are vertical know-how (domain depth), distribution and trust (audience, brand, platform access), proprietary data and context, taste (the judgment between plausible agent outputs), and compliance edges. 'I have AI tools' is not a moat — every competitor will have those by default.",
  },
  {
    q: "What does the policy context look like in China?",
    a: "China has the most explicit policy support for AI-era one-person companies. Shenzhen released its 'AI OPC entrepreneurship ecosystem action plan, 2026–2027' in January 2026. Hangzhou's 'one-person unicorn' programme reportedly received over 1,300 applications since September 2025. Beijing's Haidian district ran a one-person company founder accelerator in March 2026.",
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

      <header className="space-y-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Definition · 2026
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-pretty">
          One-Person Company
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
            One-person company and{" "}
            <Link
              href="/zero-human-company"
              className="underline hover:opacity-70"
            >
              zero-human company
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
            The 10% difference is emphasis. One-person company points at
            the human — &quot;one founder runs this.&quot; Zero-human
            company points at the team — &quot;no employees execute the
            day-to-day work.&quot; This page leans into the founder side:
            the workflow, the stack, the canonical references, and the
            policy and prediction context. The{" "}
            <Link
              href="/zero-human-company"
              className="underline hover:opacity-70"
            >
              zero-human company page
            </Link>{" "}
            leans into the agent-organisation side: control-plane anatomy
            and the Paperclip-shaped product category.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Origins of the term
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          <p>
            The phrase started showing up in tech discourse around 2024
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
            By mid-2026 the term carries weight in two specific places:
            in San Francisco, where companies like Coinbase have begun
            building &quot;one-person teams&quot; internally and
            agent-organisation tools like Paperclip have crystallised the
            product category; and in Chinese tech policy, where Shenzhen,
            Hangzhou, and Beijing have launched explicit support
            programmes for AI-era one-person companies.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          The 2026 founder stack
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          A working one-person company is not a single tool. It is a
          stack of agentic surfaces, each with a specific job, glued
          together by orchestration and rails.
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
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Inside larger companies — the AI-native pod
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          The one-person company pattern is also showing up inside large
          public companies as the AI-native pod or one-person team. Same
          mechanism, different legal entity.
        </p>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {intraCompany.map((c) => (
            <li key={c.label} className="py-5 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground">
                {c.label}
              </p>
              <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          Reference case — Medvi
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          <p>
            Matthew Gallagher&apos;s GLP-1 telehealth business is the
            most-cited reference case. Reported numbers: started with
            about a dozen AI tools and roughly $20K of capital, hit
            roughly $401M of 2025 sales, with a stated 2026 target near
            $1.8B.
          </p>
          <p>
            The honest reading: a strong signal that the AI-native
            one-person company pattern can scale unusually fast in the
            right vertical, and a clear cautionary tale about its failure
            modes. Medvi later hired family and contractors, depended on
            third-party medical and pharmacy partners, and surfaced
            chatbot fabrications about pricing and products, FDA letters,
            and marketing-related complaints. The lesson is not &quot;AI
            replaces everything&quot; — it is that distribution,
            demand-side advantage, and a founder who knows the market
            still do most of the work.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          China policy context
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          Chinese cities have moved earlier and more explicitly than
          their US counterparts on policy support for AI-era one-person
          companies.
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
          When AI tooling becomes commodity, every founder gets the same
          starter kit. The differentiators move elsewhere.
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
          Whether a category is workable as a one-person company depends
          on how much of the work can be moved off the human, and how
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
            does not exist in the way the terms are actually being used
            in 2026. Both phrases describe the same shift. The honest
            framing is to acknowledge them as near-synonyms and then
            pick which side of the same idea each page emphasises.
          </p>
          <p>
            This page is anchored in the references that gave the term
            weight in 2024–2026: Sam Altman&apos;s and Dario
            Amodei&apos;s public predictions of a one-person
            billion-dollar company; Anthropic&apos;s Claude Code as an
            architecture-and-orchestration tool rather than a coding
            assistant; OpenAI&apos;s Codex App and the Symphony pattern;
            the Coinbase one-person teams memo (May 2026); Shopify&apos;s
            2025 AI memo; Medvi as the most cited reference case (with
            its real failure modes); and the Chinese policy programmes
            in Shenzhen, Hangzhou, and Beijing.
          </p>
          <p>
            For the agent-organisation side of the same story — the
            Paperclip-shaped control plane and the live experiments
            (Andon Market, Project Vend, ClawBank) — see the{" "}
            <Link
              href="/zero-human-company"
              className="underline hover:opacity-70"
            >
              zero-human company page
            </Link>
            .
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
              Zero-Human Company — the same shift, agent-organisation
              angle
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
