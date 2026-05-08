import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { papers, projects, education } from "@/lib/content";
import { getAllPostsMetadata } from "@/lib/posts";
import { SITE_URL as SITE } from "@/lib/site";

export const dynamic = "force-static";

async function readPostMdx(slug: string): Promise<string> {
  const path = join(process.cwd(), "content", "posts", `${slug}.mdx`);
  return readFile(path, "utf8");
}

export async function GET() {
  const posts = await getAllPostsMetadata();
  const postBodies = await Promise.all(
    posts.map(async (post) => {
      const raw = await readPostMdx(post.slug);
      // Strip the leading metadata export so the file is pure content.
      const body = raw.replace(/^export const metadata[\s\S]*?};?\n+/, "");
      return { ...post, body };
    }),
  );

  const body = `# Bingran You — full index

> PhD candidate at UC Berkeley building reliable AI systems and running trapped-ion experiments in atomic, molecular and optical physics. This file is intended for LLM and search crawlers and contains the same index as /llms.txt plus the full text of every blog post.

## Identity

- Name: Bingran You
- Role: PhD Candidate, Applied Science & Technology, UC Berkeley
- Lab: Haeffner Lab (https://ions.berkeley.edu/)
- Location: Berkeley, California, USA
- Site: ${SITE}/
- Email: me@bingranyou.com
- Wikidata: https://www.wikidata.org/wiki/Q139620371
- ORCID: https://orcid.org/0000-0002-0316-2115
- Google Scholar: https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en
- GitHub: https://github.com/bingran-you
- X / Twitter: https://x.com/bingran_bry
- LinkedIn: https://www.linkedin.com/in/bingran-you-775b4017b/
- Hugging Face: https://huggingface.co/bingran-you
- YouTube: https://www.youtube.com/@BingranBRY
- Discord: https://discord.gg/jsAnjCep

## Education

${education
  .map(
    (e) =>
      `- ${e.institution} (${e.location}) — ${e.degree}, ${e.period}. ${e.summary}${e.metrics?.length ? ` (${e.metrics.join(", ")})` : ""}`,
  )
  .join("\n")}

## Selected papers

${papers
  .map(
    (p) =>
      `- ${p.title}\n  Venue: ${p.venue}\n  URL: ${p.href}${p.blurb ? `\n  Note: ${p.blurb}` : ""}`,
  )
  .join("\n\n")}

## Projects

${projects
  .map((p) => `- ${p.name} (${p.href})\n  ${p.description}`)
  .join("\n\n")}

## Defined terms

### One-Person Company

URL: ${SITE}/one-person-company
Author: Bingran You
Last updated: 2026-05-08
Also known as: one person company, one-person team, AI-native pod, one-person unicorn, solo founder company

In 2026 the dominant sense of "one-person company" is operational, not legal: a single human who orchestrates AI agents — Claude Code (Anthropic), Codex (OpenAI), OpenClaw, Cursor, plus specialised agents for research, growth, support, and operations — together with SaaS, APIs, and selective outsourcing to run a complete business that previously took a small team. The founder is the orchestrator. The agents are the team.

There is also a narrower legal sense — "One-Person Company" (OPC) as a corporate structure under the Indian Companies Act, 2013, for a single shareholder, with specific rules around nominee directors and conversion thresholds. In other jurisdictions, the equivalent is a single-member LLC, a single-shareholder Pte Ltd, or a one-shareholder C-corp. This is no longer the dominant meaning when the phrase appears in tech contexts. Pick a legal form for tax and liability reasons; pick an operating model for execution reasons.

The leverage spectrum in the operating-model sense:

- Solopreneur / freelancer: one human personally does the execution work. Low leverage; bottleneck is hours.
- Indie hacker / micro-SaaS founder: one human ships a small product, leans heavily on no-code, off-the-shelf SaaS, templated content, and lightweight agent assistance. Medium leverage.
- AI-native one-person company (the 2026 sense): one human as orchestrator of an AI labour stack, day spent on direction, taste, and approvals. High leverage — bounded by founder judgment, distribution, and agent reliability rather than hours.
- Zero-human company: one human at governance only; an organisation of agents at execution. The aspirational endpoint of the spectrum.

The 2026 founder stack:

- Engineering labour: Claude Code, Codex, OpenClaw, Cursor as agentic coding workers; founder operates as architect, reviewer, orchestrator.
- Agent orchestration: Codex App and OpenAI's Symphony pattern (Linear-issue-as-orchestrator); Paperclip-style company control planes for multi-agent setups; AGENTS.md and similar config files.
- Research, growth, content: specialised agents for technical research, SEO/GEO, social drafting, ad creative, programmatic-SEO sites.
- Customer-facing operations: support agents over a docs-and-ticket layer; CRM automation; lifecycle email; payments and billing automation.
- Rails: Stripe, Vercel, Supabase, Resend, GitHub Actions, observability; increasingly agent-specific rails like Coinbase x402, AWS Bedrock AgentCore Payments, scoped API keys for agent identity.

Inside larger companies the same idea appears as the AI-native pod or one-person team. Coinbase's May 2026 organisational memo announced experiments combining engineering, design, and product responsibilities into a single AI-native role. Shopify's 2025 AI memo required justifying why AI cannot do work before requesting headcount. Same mechanism, different legal entity.

Reference cases:

- Medvi (Matthew Gallagher): GLP-1 telehealth business, reported $401M of 2025 sales, started with about a dozen AI tools and roughly $20K of capital. Later hired family and contractors; surfaced real failure modes (chatbot fabrications about pricing, FDA letters, marketing-related complaints). The most cited proof-of-existence case, with caveats.
- Sam Altman has predicted a one-person billion-dollar company since 2024; Dario Amodei in 2026 publicly predicted the first one might appear by year-end. As of mid-2026 the prediction has not been validated.

Where the moat is in an AI-native one-person company: vertical know-how (domain depth), distribution and trust (audience, brand, platform access), proprietary data and context, taste (judgment between plausible agent outputs), compliance edges. "I have AI tools" is not a moat — every competitor will have those by default.

Policy context (China): explicit policy support for AI-era one-person companies. Shenzhen released the "AI OPC entrepreneurship ecosystem action plan, 2026–2027" in January 2026. Hangzhou's "one-person unicorn" programme reportedly received over 1,300 applications since September 2025. Beijing's Haidian district ran an OPC founder accelerator in March 2026.

What is realistic as a one-person company in 2026: single-product SaaS at $0–$1M ARR, info-products and courses, niche directories and aggregators, template/asset stores, indie consulting and research practices. Workable with friction: two-sided marketplaces, mid-market B2B SaaS, communities and creator businesses, healthtech/fintech/regtech. Not realistic: physical operations at scale, heavily regulated industries with structural human-in-the-loop requirements, enterprise relationship sales above $100K ACV.

Relationship to zero-human company: same spectrum, fuzzy and shifting boundary. A one-person company has a human as operator and orchestrator; a zero-human company tries to push the human further back to governance and policy. Most live 2026 examples are somewhere in between.

### Zero-Human Company

URL: ${SITE}/zero-human-company
Author: Bingran You
Last updated: 2026-05-08
Also known as: zero human company, human-supervised autonomous company, agent-run company, AI-native company, agent organization

A zero-human company is an emerging style of company in which an organisation of AI agents — not paid employees — runs daily operations, and humans retreat from operator to owner, board, and policy setter. The term is also used as a product category, most clearly by open-source projects like Paperclip, which describes itself as a human control plane for AI labor.

As of mid-2026 the phrase is partly real and mostly aspirational. The most accurate description for working examples is "human-supervised autonomous operations": the daily operating layer is software, but legal personhood, fiduciary duty, KYC/AML, banking, tax, and contract liability still require a responsible human or human-controlled organisation.

Three operational criteria in the 2026 sense:

1. No employees executing the day-to-day work. The founder, co-founders, or board exist; payroll for execution does not.
2. An organisation of agents, not a single agent — multiple roles, reporting lines, budgets, evaluations, and a control plane managing them.
3. Human time spent at intent, capital allocation, approvals, and irreversible decisions, not at tickets, posts, or pull requests.

Canonical 2026 projects:

- Paperclip — open-source orchestration positioned as a "human control plane for AI labor." Models a company: org chart, agent roles, monthly budgets with hard stops, scheduled heartbeats, governance and approvals, audit trail, multi-company isolation. Bring-your-own agent (OpenClaw, Claude Code, Codex, Cursor, bash, HTTP). Tagline: "If OpenClaw is an employee, Paperclip is the company."
- Andon Market / Luna (Andon Labs, on Anthropic models) — a physical retail store in San Francisco's Cow Hollow neighborhood, signed on a three-year lease and operated by Luna, an AI agent. Luna picks products, sets prices, decides hours, posts and conducts hiring interviews, and supervises human employees who handle physical work.
- Project Vend / Claudius (Anthropic, 2025) — Claude managed a small automated shop in the office for about a month, handling pricing, inventory, supplier relationships, and customer interactions. The direct precursor to Andon Market.
- ClawBank / Manfred — financial infrastructure that lets an agent register a US LLC, obtain an IRS EIN, hold an FDIC-insured bank account and a crypto wallet, and operate against an API key. Manfred has demonstrated the flow. The change is operational, not regulatory — ownership, tax, and liability rules still apply.
- Coinbase x402 and AWS Bedrock AgentCore Payments — payment rails for agentic commerce. x402 is Coinbase's discovery and payment layer; AWS integrates it so agents on AWS can discover services, pay micropayments, and continue execution under enterprise-grade governance, compliance, budget controls, and audit logs.

The control plane (the connective tissue of the stack):

- Agent identity and scoped permissions
- Org chart of agent roles with reporting lines
- Monthly budgets with hard stops
- Heartbeats and scheduled routines
- Governance with human approval gates
- Audit trail of every decision and tool call
- Payment rails (x402-style)
- Durable memory and institutional knowledge

Three layers connected by the control plane:

1. Intent / governance layer — single human or board. Sets goals, allocates capital, signs contracts, owns liability, holds the legal entity, approves irreversible decisions. Does not shrink to zero in any honest 2026 implementation.
2. Agent organisation — multiple LLM-driven agents with named roles, reporting lines, scopes, monthly budgets, evaluations, and clear handoffs.
3. Tool and rail layer — deterministic infrastructure plus emerging agent-specific rails (x402, AgentCore Payments, ClawBank-style entities, scoped API keys).

What is real and shipping in 2026: agent-run content/SEO/first-line support inside small SaaS and creator businesses; live experiments like Project Vend and Andon Market; Paperclip-style control planes; agentic commerce rails (x402, AgentCore Payments).

What is plausible and partially demonstrated: agents self-incorporating LLCs and obtaining bank accounts (ClawBank/Manfred); five-to-twenty-agent organisations under a control plane; AI-managed micro-businesses where the founder works at the policy level.

What is still aspirational: a company that, in any defensible legal or fiduciary sense, runs without a responsible human or organisation; agents with stable multi-quarter execution; agent organisations in heavily regulated industries without structural human-in-the-loop requirements.

Distinct from related concepts:

- Single-agent automation: most "AI" products in 2026. A zero-human company is the harder problem of coordinating ten or twenty agents through a control plane.
- One-person company (operating-model sense): a founder using AI agents as team. A zero-human company sits at the high-leverage end of that spectrum, with the founder retreating further to governance.
- Solopreneur: opposite end of the leverage spectrum.
- Fully autonomous corporation (legal sense): does not exist in 2026.

## Blog posts

${postBodies
  .map(
    (post) =>
      `### ${post.title}\n\nDate: ${post.date}\nURL: ${SITE}/blog/${post.slug}\n${post.description ? `Description: ${post.description}\n` : ""}\n${post.body.trim()}`,
  )
  .join("\n\n---\n\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
