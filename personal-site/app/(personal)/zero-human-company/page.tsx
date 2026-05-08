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
  "A company where every execution function — code, support, sales, marketing, ops — is run by software agents and automated infrastructure. The founder is the only human in the loop.";

export const metadata: Metadata = {
  title: "Zero-Human Company — Definition, Stack, and What's Achievable Today",
  description:
    "A zero-human company is a company where every execution function is run by software agents and automated infrastructure — not employees. Definition, comparison with one-person company and solopreneur, the 3-layer agent stack, and what is actually achievable today.",
  alternates: { canonical: PATH },
  keywords: [
    "zero-human company",
    "zero human company",
    "zero-employee company",
    "one person company",
    "one-person company",
    "AI-native company",
    "agent-run company",
    "solo AI startup",
    "autonomous company",
    "AI agents",
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
    "Zero-Employee Company",
    "Agent-Run Company",
    "AI-Native Company",
  ],
  description: ONE_LINER,
  termCode: "zero-human-company",
});

const article = articleJsonLd({
  path: PATH,
  title: "Zero-Human Company — Definition, Stack, and What's Achievable Today",
  description: ONE_LINER,
  date: PUBLISHED,
  about: "Zero-Human Company",
  keywords: [
    "zero-human company",
    "one person company",
    "AI agents",
    "autonomous company",
  ],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Zero-Human Company", path: PATH },
]);

const distinctions: Array<{ term: string; definition: string }> = [
  {
    term: "One-Person Company (OPC)",
    definition:
      "Used in two senses. (1) Legal: a corporate structure (notably under the Indian Companies Act, 2013) for a single shareholder. (2) Operating model: any company actually run by one human. A zero-human company is one mode of the operating-model sense — see /one-person-company for the full leverage spectrum.",
  },
  {
    term: "Solopreneur",
    definition:
      "A one-person business where the human does the execution work. The bottleneck is the founder's hours. A zero-human company removes that bottleneck by moving execution to agents.",
  },
  {
    term: "Agency / micro-team",
    definition:
      "A small group of paid humans executing for clients. Same operating model as a traditional company, smaller headcount.",
  },
  {
    term: "Lifestyle business",
    definition:
      "A description of intent (modest scale, owner-led) rather than execution model. Lifestyle businesses are usually solopreneur or micro-team. A zero-human company is closer to the opposite — leverage maximized.",
  },
  {
    term: "Traditional startup",
    definition:
      "Raises capital, hires employees, scales headcount in step with revenue. A zero-human company tries to break the headcount-revenue link entirely.",
  },
];

const stackLayers: Array<{
  layer: string;
  role: string;
  examples: string;
}> = [
  {
    layer: "1. Intent layer",
    role:
      "The single human in the loop — usually the founder. Sets strategy, picks markets, allocates capital, makes irreversible decisions, owns legal and fiduciary duty. Does not execute day-to-day work.",
    examples:
      "Quarterly bets, pricing changes, hiring (of agents and tools), kill/keep calls.",
  },
  {
    layer: "2. Agent layer",
    role:
      "LLM-driven agents and skills that do work historically done by employees. Each agent has a scope, a budget, an evaluation, and a clear handoff back to the intent layer when it gets stuck.",
    examples:
      "A marketing agent drafts and ships posts. A support agent answers tickets. An eng agent ships code behind tests. A finance agent reconciles invoices.",
  },
  {
    layer: "3. Infrastructure layer",
    role:
      "Deterministic plumbing the agents call into. Boring, automatable, well-documented. This is what makes the agent layer cheap and reliable instead of slow and fragile.",
    examples:
      "Stripe, Vercel, Resend, Supabase, GitHub Actions, observability, IaC, payments, email, queues.",
  },
];

const achievableToday: Array<{ status: string; items: string[] }> = [
  {
    status: "Achievable today",
    items: [
      "Single-product SaaS with agent-driven content marketing, support, and most engineering.",
      "Newsletter, course, or info-product business run end-to-end by agents with periodic founder review.",
      "Template / asset stores where agents handle production, listing, and customer service.",
      "Niche directory and aggregator sites where agents handle ingestion, ranking, and updates.",
    ],
  },
  {
    status: "Partially achievable, with friction",
    items: [
      "B2B SaaS with enterprise customers — procurement and contracting still want a human voice.",
      "Anything regulated (health, finance, legal) — the human-in-the-loop requirement is structural, not technical.",
      "High-touch sales — agents close small deals reliably; complex deals still need a human closer.",
    ],
  },
  {
    status: "Not yet",
    items: [
      "Companies that need physical operations — warehousing, logistics, manufacturing — at scale without humans.",
      "Long-horizon, multi-quarter agent execution without drift. State-of-the-art evaluation harnesses still measure agent reliability in tasks, not in quarters.",
      "Anything that requires the founder to be invisible. The intent layer is load-bearing; remove it and the company drifts.",
    ],
  },
];

const faq: Array<{ q: string; a: string }> = [
  {
    q: "Is a zero-human company the same as a one-person company?",
    a: "No. 'One-Person Company' is a legal corporate structure (most commonly under the Indian Companies Act, 2013) — it describes ownership, not operations. A zero-human company is an operating model: all execution is done by software, with the founder as the only human in the loop. A zero-human company can be incorporated as a one-person company, an LLC, a C-corp, or any other legal form.",
  },
  {
    q: "Does 'zero-human' mean literally zero humans?",
    a: "No. The founder is still a human, and so are customers, regulators, and counterparties. The claim is narrower: no paid employees or contractors execute the day-to-day operations. Execution is done by AI agents and automated infrastructure.",
  },
  {
    q: "Who coined the term zero-human company?",
    a: "The phrase has been used informally on tech Twitter and in startup communities since around 2024–2025. This page, by Bingran You, is an attempt to give it a precise operating definition and a reusable architecture (the 3-layer stack: intent, agent, infrastructure).",
  },
  {
    q: "What is the difference between a zero-human company and a solopreneur?",
    a: "A solopreneur does the work themselves — the bottleneck is the founder's hours. A zero-human company moves execution to agents and automated infrastructure, so the founder spends time on strategy and direction instead of operations.",
  },
  {
    q: "How does a zero-human company actually make money?",
    a: "Same way any company does — by selling something customers value. The novelty is on the cost side: payroll is replaced by API spend, tooling, and infrastructure. The unit economics shift from labor-bound (revenue per employee) to capital-and-compute-bound (revenue per dollar of agent and infra spend).",
  },
  {
    q: "Is this realistic in 2026?",
    a: "For some categories, yes — single-product SaaS, info-products, content businesses, niche directories. For others — regulated industries, complex enterprise sales, physical operations — the answer is 'partially' or 'not yet.' See the section on what's achievable today.",
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
          Definition · Field notes
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
            A <strong className="text-foreground">zero-human company</strong> is
            a company where every execution function — engineering, marketing,
            support, sales, finance, ops — is performed by software agents and
            automated infrastructure rather than paid employees or contractors.
            The founder remains as the strategic operator. There is exactly one
            human in the loop, and that human does not do day-to-day work.
          </p>
          <p>
            The term is sometimes used loosely to mean &quot;a company with no
            employees,&quot; which collides with the legal{" "}
            <em>One-Person Company</em> structure. The narrower, more useful
            sense is operational: not zero humans, but zero human{" "}
            <em>execution</em>.
          </p>
          <p>
            Three criteria, in plain language:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              No payroll for execution work. Founder draws or doesn&apos;t, but
              employees and contractors do not run operations.
            </li>
            <li>
              Agents and automated infrastructure handle the bulk of recurring
              work, with documented scopes, budgets, and evals.
            </li>
            <li>
              The founder&apos;s time is spent on direction, capital allocation,
              and irreversible decisions — not tickets, posts, or PRs.
            </li>
          </ol>
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
          The 3-layer zero-human stack
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          A working zero-human company has three clearly separated layers. Mixing
          them is the most common reason these companies fail to scale beyond a
          founder demo: when the agent layer leaks into the intent layer, the
          founder ends up doing operations again.
        </p>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {stackLayers.map((l) => (
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
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          What&apos;s actually achievable today
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          As of 2026, a useful filter for &quot;can this category be a
          zero-human company today?&quot; is whether the work is digital,
          repeatable, and tolerant of agent error rates in the low single
          digits.
        </p>
        <div className="space-y-8">
          {achievableToday.map((bucket) => (
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
            I build agent systems for a living. The companies I help and the
            ones I run myself sit somewhere on the spectrum from
            traditional-startup to zero-human. The phrase{" "}
            <em>zero-human company</em> kept showing up in conversation with
            no shared definition, which made every conversation start from
            scratch.
          </p>
          <p>
            This page is the working definition I use. It distinguishes the
            term from one-person company (legal structure), solopreneur
            (execution model with a human bottleneck), and traditional
            startup (headcount-bound scaling). It names a stack — intent,
            agent, infrastructure — that I find load-bearing across every
            real implementation I have seen.
          </p>
          <p>
            I will keep updating this page as the constraints move. The
            achievable-today section, in particular, has a short half-life.
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
              Zero-human vs one-person company: a definitional breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/blog/the-zero-human-stack"
              className="underline hover:opacity-70"
            >
              The 3-layer zero-human stack, in practice
            </Link>
          </li>
          <li>
            <Link
              href="/blog/running-projects-with-zero-employees"
              className="underline hover:opacity-70"
            >
              Running projects with zero employees: what worked, what didn&apos;t
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
