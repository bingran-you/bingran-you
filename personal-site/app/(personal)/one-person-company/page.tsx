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
  "A company with exactly one person at the helm — owner, operator, decision-maker. The operating-model question is how that one person scales: alone (solopreneur), with tools (indie hacker), or with agents doing the execution work (a zero-human company).";

export const metadata: Metadata = {
  title:
    "One-Person Company — Operating-Model Definition, Modes, and 2026 Reality",
  description:
    "A one-person company is a company with one human owner-operator. There is the legal sense (the India OPC) and the operating-model sense (solopreneur, indie hacker, zero-human company). This page is about the operating model — definition, modes along the leverage spectrum, what is realistic in 2026, and how it relates to a zero-human company.",
  alternates: { canonical: PATH },
  keywords: [
    "one person company",
    "one-person company",
    "OPC",
    "solopreneur",
    "indie hacker",
    "solo founder",
    "micro SaaS",
    "zero-human company",
    "AI-native company",
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
    "Solo Company",
    "OPC (Operating Model)",
  ],
  description: ONE_LINER,
  termCode: "one-person-company",
});

const article = articleJsonLd({
  path: PATH,
  title: "One-Person Company — Operating-Model Definition and Modes",
  description: ONE_LINER,
  date: PUBLISHED,
  about: "One-Person Company",
  keywords: [
    "one person company",
    "solopreneur",
    "indie hacker",
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
    label: "Solopreneur",
    description:
      "One human does all the execution work — code, design, content, support, sales, ops. The bottleneck is the founder's hours.",
    leverage: "Low. Revenue is bounded by working hours.",
  },
  {
    label: "Freelancer / consultant",
    description:
      "One human sells time to clients. Often dressed up as a company, but the operating model is selling labor, not a product.",
    leverage: "Low. Revenue is bounded by hours and rate.",
  },
  {
    label: "Indie hacker / micro-SaaS founder",
    description:
      "One human ships a small product, leans heavily on no-code, off-the-shelf SaaS, and templated content. Some agent assist for support and marketing.",
    leverage:
      "Medium. Decoupled from hours via product, but still hands-on for most operational work.",
  },
  {
    label: "Zero-human company",
    description: (
      <>
        One human at the intent layer. All execution — code, content,
        marketing, support, ops — runs through software agents and automated
        infrastructure. See the{" "}
        <Link
          href="/zero-human-company"
          className="underline hover:opacity-70"
        >
          full definition
        </Link>{" "}
        and the 3-layer stack.
      </>
    ),
    leverage:
      "High. Revenue is bounded by capital and compute, not hours.",
  },
];

const realityChecks: Array<{ status: string; items: string[] }> = [
  {
    status: "Realistic single-person operations in 2026",
    items: [
      "Single-product SaaS at $0–$1M ARR — one founder, agents handling content / SEO / first-line support, automated billing and reporting.",
      "Newsletter, course, or info-product business — agents draft, founder edits, automated delivery and payments.",
      "Niche directories, aggregators, programmatic-SEO sites — agents ingest and refresh, founder picks the niche and the schema.",
      "Templates, prompts, and digital asset stores — agents handle marketplace operations, founder curates the catalog.",
      "Indie consulting or research practice with agent-augmented deliverables.",
    ],
  },
  {
    status: "Workable but with friction",
    items: [
      "Two-sided marketplaces — agents handle most operations but trust events (disputes, fraud, legal) need a human.",
      "Mid-market B2B SaaS — agents handle inbound, but enterprise procurement still wants a human.",
      "Communities and creator businesses — automation works for backend; the front of the house is the person, by design.",
    ],
  },
  {
    status: "Not realistic as a one-person operation in 2026",
    items: [
      "Anything physical at scale — manufacturing, fulfillment, fleet, retail.",
      "Heavily regulated industries — finance, healthcare, legal — where the human-in-the-loop requirement is structural.",
      "Anything dependent on enterprise relationship sales above $100K ACV.",
    ],
  },
];

const faq: Array<{ q: string; a: string }> = [
  {
    q: "What is a one-person company?",
    a: "A company with exactly one human at the helm — owner, operator, decision-maker. The phrase is used in two distinct senses: a legal sense (the India One-Person Company corporate structure under the Companies Act, 2013) and an operating-model sense (any company actually run by one person, regardless of legal form). This page is about the operating-model sense.",
  },
  {
    q: "Is one-person company the same as solopreneur?",
    a: "Not quite. Solopreneur describes a specific operating mode where the human does the execution work directly. One-person company is a broader category — it includes solopreneurs, indie hackers, micro-SaaS founders, freelancers, and zero-human companies. They differ on how much leverage the one human has.",
  },
  {
    q: "Is one-person company the same as zero-human company?",
    a: "No. A zero-human company is a specific kind of one-person company — the one where software agents and automated infrastructure do the execution work, and the founder operates only at the intent layer. Every zero-human company is a one-person company; not every one-person company is zero-human.",
  },
  {
    q: "Can a one-person company actually scale?",
    a: "It depends on the operating mode. A solopreneur scales linearly with hours and rates, which means it scales poorly. An indie hacker scales with their product's ability to compound without their direct involvement. A zero-human company scales with capital and compute. The shape of the ceiling is set by the operating model, not by being one person.",
  },
  {
    q: "Should I incorporate as a One-Person Company (OPC)?",
    a: "That is a legal question, distinct from this page. The legal OPC structure exists primarily under the Indian Companies Act, 2013, and has specific rules about nominee directors and conversion thresholds. In other jurisdictions, the equivalent is usually a single-member LLC or a single-shareholder C-corp / Pte Ltd. Talk to a lawyer in your jurisdiction. Pick the legal form for tax and liability reasons. Pick the operating model for execution reasons.",
  },
  {
    q: "What is the difference between a one-person company and a small startup?",
    a: "A traditional startup raises capital and hires employees as it grows; headcount and revenue scale together. A one-person company tries to break that link — the one human stays one, while revenue, product surface, and customer count grow through tools and agents. Different game, different math.",
  },
  {
    q: "Who writes about one-person companies?",
    a: "The space is mostly indie founders writing on their own blogs and on platforms like Indie Hackers, Hacker News, X, and Substack. This page, by Bingran You, is an attempt to give the operating-model sense of the term a clear definition and a useful set of modes (solopreneur, indie hacker, zero-human company) so the conversation has shared vocabulary.",
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
          Definition · Field notes
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
          Two senses of the phrase
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          <p>
            <strong className="text-foreground">The legal sense.</strong>{" "}
            &quot;One-Person Company&quot; (OPC) is a corporate form
            introduced under the Indian Companies Act, 2013 for a single
            shareholder, with rules around nominee directors, paid-up
            capital, and conversion thresholds. In other jurisdictions, the
            equivalent is usually a single-member LLC, a single-shareholder
            Pte Ltd, or a one-shareholder C-corp.
          </p>
          <p>
            <strong className="text-foreground">
              The operating-model sense.
            </strong>{" "}
            Any company actually run by one human — regardless of how it is
            incorporated. This page is about the second sense. The first is
            a question for a lawyer in your jurisdiction. The second is a
            question about how the work gets done.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          The leverage spectrum
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          Every one-person company sits somewhere on a spectrum from
          &quot;the founder does everything&quot; to &quot;the founder does
          nothing operational.&quot; The phrase is too generic to be useful
          on its own; the operating mode is what matters.
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
          What is realistic in 2026
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          Whether a category is workable as a one-person company depends on
          how much of the work can be moved off the human, and how
          fault-tolerant the customer relationship is to single-digit error
          rates from agents.
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
          Why split the term this way
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          <p>
            Most posts I read about &quot;one-person companies&quot; quietly
            mean one of three different things — solopreneur, indie hacker,
            or zero-human company — and the advice that follows is good
            advice for one of them and bad advice for the other two.
          </p>
          <p>
            Splitting the term into legal sense vs. operating-model sense,
            and the operating-model sense into a leverage spectrum, gives
            us shared vocabulary. If you tell me you are running a
            one-person company, my first question is{" "}
            <em>which mode</em>. The answer changes everything else — what
            tools you need, what you should build next, what the ceiling
            looks like.
          </p>
          <p>
            For my own framing of the high-leverage end of the spectrum, see{" "}
            <Link
              href="/zero-human-company"
              className="underline hover:opacity-70"
            >
              the zero-human company definition
            </Link>{" "}
            and the 3-layer stack (intent / agent / infrastructure).
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
              Zero-Human Company — the high-leverage end of the spectrum
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
