import type { Metadata } from "next";
import type { ReactNode } from "react";
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
  "In 2026 the dominant sense of 'one-person company' is operational, not legal: a single human who orchestrates AI agents, SaaS, APIs, and selective outsourcing to run a complete business that previously took a small team. Sam Altman and Dario Amodei have publicly predicted the first one-person billion-dollar company. Coinbase has begun explicitly building 'one-person teams' inside the company. The legal Indian OPC is a separate, much narrower meaning.";

export const metadata: Metadata = {
  title:
    "One-Person Company — A 2026 Definition, Founder Stack, and What's Actually Working",
  description:
    "A one-person company in 2026 is a founder who orchestrates AI agents (Claude Code, Codex, OpenClaw, Cursor), SaaS, and APIs to run a complete business — product, marketing, sales, ops — solo. This page tracks the current Bay Area and China usage, canonical cases like Medvi, the Coinbase 'one-person teams' memo, and how the term sits next to 'zero-human company.'",
  alternates: { canonical: PATH },
  keywords: [
    "one person company",
    "one-person company",
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
    "zero-human company",
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
    "One-Person Company — A 2026 Definition, Founder Stack, and What's Actually Working",
  description: ONE_LINER,
  date: PUBLISHED,
  about: "One-Person Company",
  keywords: [
    "one person company",
    "Coinbase one-person teams",
    "Medvi",
    "Codex Symphony",
    "Claude Code",
    "zero-human company",
  ],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "One-Person Company", path: PATH },
]);

const modes: Array<{
  label: string;
  description: ReactNode;
  leverage: string;
}> = [
  {
    label: "Solopreneur / freelancer",
    description:
      "One human personally does the execution work — code, design, content, support, sales, ops. May resell time to clients. The bottleneck is the founder's hours.",
    leverage: "Low. Revenue is bounded by working hours.",
  },
  {
    label: "Indie hacker / micro-SaaS founder",
    description:
      "One human ships a small product, leans heavily on no-code, off-the-shelf SaaS, templated content, and lightweight agent assistance. Most public 'solo founder' stories belong here.",
    leverage:
      "Medium. Decoupled from hours via product, but still hands-on for most operational work.",
  },
  {
    label: "AI-native one-person company (the 2026 sense)",
    description: (
      <>
        One human as orchestrator of an AI labour stack: Claude Code,
        Codex, OpenClaw, Cursor and similar tools as engineering labour;
        research, growth, support, and ops agents on top; SaaS and APIs as
        rails. The founder spends the day on direction, taste, and
        approvals. Medvi&apos;s 2025 trajectory and the &quot;one-person
        billion-dollar company&quot; predictions from Sam Altman and Dario
        Amodei point at this mode.
      </>
    ),
    leverage:
      "High. Revenue is bounded by founder judgment, distribution, and agent reliability — not hours.",
  },
  {
    label: "Zero-human company (aspirational endpoint)",
    description: (
      <>
        One human at the governance layer; an organisation of agents
        running daily operations. The high-leverage endpoint of the
        spectrum. See the dedicated{" "}
        <Link
          href="/zero-human-company"
          className="underline hover:opacity-70"
        >
          zero-human company definition
        </Link>{" "}
        for the control-plane anatomy and the canonical 2026 projects.
      </>
    ),
    leverage:
      "Maximal — but largely aspirational in 2026; the working examples are human-supervised autonomous operations, not legally autonomous companies.",
  },
];

const founderStack: Array<{ surface: string; tools: string }> = [
  {
    surface: "Engineering labour",
    tools:
      "Claude Code (Anthropic), Codex (OpenAI), OpenClaw, Cursor. Used as agentic coding workers; the founder operates as architect, reviewer, and orchestrator rather than line coder.",
  },
  {
    surface: "Agent orchestration",
    tools:
      "OpenAI's Codex App and Symphony (Linear-issue-as-orchestrator pattern), Paperclip-style company control planes for multi-agent setups, custom AGENTS.md / config files.",
  },
  {
    surface: "Research, growth, content",
    tools:
      "Specialised agents for technical research, SEO and GEO, social drafting, ad creative, programmatic-SEO sites. Founder edits and approves; agent ships.",
  },
  {
    surface: "Customer-facing operations",
    tools:
      "Support agents over a docs and ticket layer; CRM automation; lifecycle email; payments and billing automation. Care needed — see Medvi's well-publicised support-bot failures.",
  },
  {
    surface: "Rails",
    tools:
      "Stripe, Vercel, Supabase, Resend, GitHub Actions, observability. Increasingly: agent-specific rails like Coinbase x402, AWS Bedrock AgentCore Payments, scoped API keys for agent identity.",
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
      "Two-sided marketplaces — agents handle most operations but trust events (disputes, fraud, legal) need a human.",
      "Mid-market B2B SaaS — agents handle inbound, but enterprise procurement still wants a human voice.",
      "Communities and creator businesses — automation works for backend; the front of the house is the person, by design.",
      "Healthtech / fintech / regtech — Medvi's $401M run-rate proves scale is possible; FDA letters and chatbot hallucinations prove the compliance failure modes are real.",
    ],
  },
  {
    status: "Not realistic as a one-person operation in 2026",
    items: [
      "Anything physical at scale — manufacturing, fulfilment, fleet, retail.",
      "Heavily regulated industries where the human-in-the-loop requirement is structural, not technical.",
      "Anything dependent on enterprise relationship sales above $100K ACV.",
    ],
  },
];

const intraCompany: Array<{ label: string; body: string }> = [
  {
    label: "Coinbase — 'one-person teams'",
    body:
      "Brian Armstrong's May 2026 organisational memo announced Coinbase would become 'lean, fast, and AI-native,' reduce management layers, and explicitly experiment with 'one-person teams' — combining engineering, design, and product responsibilities into a single AI-native role. Inside a public company, this is the same idea as a one-person company: a single human directing a stack of AI agents to do the work of a small pod.",
  },
  {
    label: "Shopify — 'justify why AI can't'",
    body:
      "Tobi Lütke's 2025 internal memo required teams to explain why AI cannot accomplish a goal before requesting new headcount or resources, and folded AI use into performance and peer review. The cultural mechanism is the same: agentic capacity is the default substrate, headcount is a supplement.",
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
      "Domain depth that lets the founder pick problems and judge agent output that generalist competitors cannot. This is the most defensible moat as AI tooling commoditises.",
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
      "Where regulation is unsettled, the founder who reads and operates within the rules well has an advantage. Where regulation is settled, the founder who knows where the lines are has an advantage. Same skill, different game.",
  },
];

const faq: Array<{ q: string; a: string }> = [
  {
    q: "What is a one-person company in 2026?",
    a: "In the dominant 2026 sense, a one-person company is a single human who orchestrates AI agents, SaaS, and APIs to run a complete business — product, marketing, sales, support, ops. The founder is the operator and orchestrator; the execution work has shifted to software. Tools like Claude Code, Codex, OpenClaw, and Cursor handle engineering; specialised agents handle growth, content, support, and operations. There is also a narrower legal sense — see the next question — but it is no longer the dominant meaning.",
  },
  {
    q: "What about the legal 'One-Person Company' under Indian Companies Act, 2013?",
    a: "It is a corporate form for a single shareholder, with rules around nominee directors and conversion thresholds. In other jurisdictions the equivalent is a single-member LLC, a single-shareholder Pte Ltd, or a one-shareholder C-corp. Pick a legal form for tax and liability reasons. Pick an operating model for execution reasons. The two questions are independent.",
  },
  {
    q: "What is a 'one-person team' inside a larger company?",
    a: "An AI-native pod: one human combining responsibilities that previously required several roles (engineer, designer, PM, marketer) by using AI agents to fill the gaps. Coinbase announced this experiment publicly in May 2026; Shopify's 2025 AI memo created the cultural conditions for it. The mechanism is the same as a one-person company; the legal entity is just the parent organisation.",
  },
  {
    q: "Has anyone actually built a billion-dollar one-person company?",
    a: "Not yet, by mid-2026. The widely-cited reference case is Medvi (Matthew Gallagher's GLP-1 telehealth business): roughly $401M of 2025 sales, built with about a dozen AI tools and a budget reportedly around $20K to start. But Medvi later hired family and contractors, depended on third-party medical and pharmacy partners, and surfaced the failure modes — chatbot hallucinations, FDA warnings, marketing complaints — that the optimistic version of the story tends to omit. Sam Altman and Dario Amodei have publicly predicted a true one-person billion-dollar company; as of mid-2026 the prediction has not been validated.",
  },
  {
    q: "How does a one-person company differ from a zero-human company?",
    a: "They sit on the same spectrum, with the boundary fuzzy and shifting. A one-person company has a human as operator and orchestrator; a zero-human company tries to push the human further back, to governance and policy, with an organisation of agents running daily operations. Most live examples in 2026 are somewhere on the spectrum rather than at either end. The dedicated zero-human company page covers the control-plane anatomy and the canonical projects (Paperclip, Andon Market, ClawBank, x402).",
  },
  {
    q: "Where is the moat for an AI-native one-person company?",
    a: "Once the agent stack is commoditised, the differentiators are vertical know-how (domain depth), distribution and trust (audience, brand, platform access), proprietary data and context, taste (the judgment between plausible agent outputs), and compliance edges. The 'I have AI tools' part is not a moat — every competitor will have those by default.",
  },
  {
    q: "What is the policy context — China, Shenzhen, Beijing, Hangzhou?",
    a: "China has explicitly begun policy support for AI-era one-person companies. Shenzhen released the 'AI OPC entrepreneurship ecosystem action plan, 2026–2027' in January 2026. Hangzhou's 'one-person unicorn' programme reportedly received over 1,300 applications since September 2025. Beijing's Haidian district ran an OPC founder accelerator in March 2026 covering compliance, AI trends, monetisation, finance, personal IP, and customer acquisition. The phrase carries policy weight in China that it does not yet carry elsewhere.",
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
          Two senses of the phrase, in order of current usage
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          <p>
            <strong className="text-foreground">
              The operating-model sense (dominant, 2026).
            </strong>{" "}
            A founder who uses AI agents — Claude Code, Codex, OpenClaw,
            Cursor and the specialised agents on top of them — together
            with SaaS and APIs and selective outsourcing to run a complete
            business. The founder is the orchestrator. The agents are the
            team. This is the sense that travels with phrases like{" "}
            <em>one-person team</em>, <em>AI-native pod</em>,{" "}
            <em>one-person unicorn</em>, and <em>solo founder</em> in 2026
            Bay Area and Chinese policy discourse.
          </p>
          <p>
            <strong className="text-foreground">
              The legal sense (background).
            </strong>{" "}
            &quot;One-Person Company&quot; (OPC) is a corporate structure
            under the Indian Companies Act, 2013, for a single shareholder,
            with specific rules around nominee directors and conversion
            thresholds. In other jurisdictions the equivalent is a
            single-member LLC, a single-shareholder Pte Ltd, or a
            one-shareholder C-corp. This is a question for a lawyer in
            your jurisdiction; it is no longer the dominant meaning of the
            phrase in tech contexts.
          </p>
          <p>
            The rest of this page is about the operating-model sense.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          The leverage spectrum
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          Every one-person company sits somewhere on a spectrum from
          &quot;the founder personally does everything&quot; to &quot;an
          organisation of agents runs daily operations and the founder
          governs.&quot; The phrase is too generic to be useful on its own;
          the operating mode is what matters, and in 2026 the centre of
          gravity has moved firmly toward the AI-native end.
        </p>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {modes.map((mode) => (
            <li key={mode.label} className="py-5 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground">
                {mode.label}
              </p>
              <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
                {mode.description}
              </p>
              <p className="text-sm leading-relaxed text-[var(--muted)] max-w-2xl text-pretty italic">
                Leverage: {mode.leverage}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          The 2026 founder stack
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          A working AI-native one-person company is not a single tool. It
          is a stack of agentic surfaces, each with a specific job, glued
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
          The one-person company idea is also showing up inside large
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
            I build agent systems for a living. An earlier version of this
            page led with the legal-vs-operating split as if those two
            senses had equal weight. They do not, in 2026 — the
            operating-model sense has the centre of gravity, and the
            legal sense has receded to a footnote about Indian corporate
            forms. This rewrite reflects that.
          </p>
          <p>
            The reference points I now anchor to: the Coinbase one-person
            teams memo (May 2026); OpenAI&apos;s Codex App and Symphony
            pattern; Anthropic&apos;s Claude Code as an architecture-and-
            orchestration tool rather than a coding assistant; Medvi as
            the proof-of-existence case (with its real and well-publicised
            failure modes); Sam Altman&apos;s and Dario Amodei&apos;s
            public predictions of a one-person billion-dollar company; and
            the policy programmes in Shenzhen, Hangzhou, and Beijing.
          </p>
          <p>
            For the high-leverage endpoint of the spectrum — the
            organisation-of-agents mode — see the{" "}
            <Link
              href="/zero-human-company"
              className="underline hover:opacity-70"
            >
              zero-human company definition
            </Link>{" "}
            for the control-plane anatomy and the canonical 2026
            implementations.
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
              Zero-Human Company — the high-leverage endpoint of the
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
