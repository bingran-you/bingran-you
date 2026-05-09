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

"Zero-human company" and "one-person company" are near-synonyms in 2026. Both name the same organisational shift that crystallised once frontier coding agents (Claude Code, Codex, OpenClaw, Cursor) and a layer of specialised research / growth / support / ops agents made it practical for a single founder to run a complete business with an AI labour stack. About 90% of the meaning overlaps; in tech contexts the two phrases are used interchangeably. The 10% difference is emphasis — zero-human company points at the team ("no employees execute the day-to-day work"), one-person company points at the human ("one founder runs this"). The two pages on this site cover the same shift from the two angles.

### One-Person Company

URL: ${SITE}/one-person-company
Author: Bingran You
Last updated: 2026-05-08
Also known as: zero-human company, one-person team, AI-native pod, one-person unicorn, solo founder company

A single founder who orchestrates AI agents — Claude Code (Anthropic), Codex (OpenAI), OpenClaw, Cursor, plus specialised agents for research, growth, support, and operations — together with SaaS, APIs, and selective outsourcing to run a complete business that previously took a small team. The founder is the orchestrator. The agents are the team.

The 2026 founder stack:

- Engineering labour: Claude Code, Codex, OpenClaw, Cursor as agentic coding workers; founder operates as architect, reviewer, orchestrator. Anthropic explicitly frames Claude Code as shifting the engineer toward architecture, product thinking, and continuous orchestration.
- Agent orchestration: OpenAI's Codex App and the Symphony pattern (Linear issues as orchestrator — agents pull work, run autonomously, report back). Paperclip-style company control planes for multi-agent setups, with org chart, budgets, governance, and audit. AGENTS.md and similar config files describing roles and policies.
- Research, growth, content: specialised agents for technical research, SEO/GEO, social drafting, ad creative, programmatic-SEO sites.
- Customer-facing operations: support agents over a docs-and-ticket layer; CRM automation; lifecycle email; payments and billing automation.
- Rails: Stripe, Vercel, Supabase, Resend, GitHub Actions, observability; increasingly agent-specific rails like Coinbase x402, AWS Bedrock AgentCore Payments, scoped API keys for agent identity.

Inside larger companies the same pattern appears as the AI-native pod or one-person team:

- Coinbase's May 2026 organisational memo announced experiments combining engineering, design, and product responsibilities into a single AI-native role.
- Shopify's 2025 AI memo required justifying why AI cannot do work before requesting headcount.

Same mechanism, different parent organisation.

Reference case — Medvi: Matthew Gallagher's GLP-1 telehealth business, reported $401M of 2025 sales, started with about a dozen AI tools and roughly $20K of capital. Later hired family and contractors; surfaced real failure modes (chatbot fabrications about pricing, FDA letters, marketing-related complaints). The most cited reference case, with caveats.

Predictions:

- Sam Altman has predicted a one-person billion-dollar company since 2024.
- Dario Amodei in 2026 publicly predicted the first might appear by year-end.

As of mid-2026 the prediction has not been validated.

China policy context — explicit support programmes:

- Shenzhen: AI-era one-person company entrepreneurship ecosystem action plan, 2026–2027 (January 2026).
- Hangzhou: "one-person unicorn" programme, started September 2025, reportedly over 1,300 applications and 32 selected one-person companies clustered into a community.
- Beijing (Haidian): "Single-Person Army" AI-era one-person company founder accelerator (March 2026), covering compliance, AI trends, monetisation, finance, personal IP, and customer acquisition.

Where the moat is once AI tooling becomes commodity: vertical know-how (domain depth), distribution and trust (audience, brand, platform access), proprietary data and context, taste (judgment between plausible agent outputs), compliance edges. "I have AI tools" is not a moat — every competitor will have those by default.

What is realistic in 2026: single-product SaaS at $0–$1M ARR, info-products and courses, niche directories and aggregators, template/asset stores, indie consulting and research practices. Workable with friction: two-sided marketplaces, mid-market B2B SaaS, communities and creator businesses, healthtech/fintech/regtech. Not realistic: physical operations at scale, structural human-in-the-loop industries, enterprise relationship sales above $100K ACV.

### Zero-Human Company

URL: ${SITE}/zero-human-company
Author: Bingran You
Last updated: 2026-05-08
Also known as: one-person company, agent-run company, AI-native company, agent organization

A complete business whose execution work — engineering, marketing, support, sales, finance, operations — runs on an organisation of AI agents rather than employees, with the founder operating at the intent and governance layer. The term is also used as a product category, most clearly by open-source projects like Paperclip, which describes itself as a human control plane for AI labor.

Three operational criteria in the 2026 sense:

1. No employees executing the day-to-day work. The founder, or a small board, exists; payroll for execution does not.
2. An organisation of agents, not a single agent — multiple roles, reporting lines, budgets, evaluations, and a control plane managing them.
3. Human time spent on intent, capital allocation, approvals, and irreversible decisions, not on tickets, posts, or pull requests.

Canonical 2026 projects:

- Paperclip — open-source orchestration positioned as a "human control plane for AI labor." Models a company: org chart, agent roles, monthly budgets with hard stops, scheduled heartbeats, governance and approvals, audit trail, multi-company isolation. Bring-your-own agent (OpenClaw, Claude Code, Codex, Cursor, bash, HTTP). Tagline: "If OpenClaw is an employee, Paperclip is the company."
- Andon Market / Luna (Andon Labs, on Anthropic models) — a physical retail store in San Francisco's Cow Hollow neighborhood, signed on a three-year lease and operated by Luna, an AI agent. Luna picks products, sets prices, decides hours, posts and conducts hiring interviews, and supervises human staff who handle physical work.
- Project Vend / Claudius (Anthropic, 2025) — Claude managed a small automated shop in the office for about a month, handling pricing, inventory, supplier relationships, and customer interactions. The direct precursor to Andon Market.
- ClawBank / Manfred — financial infrastructure that lets an agent register a US LLC, obtain an IRS EIN, hold an FDIC-insured bank account and a crypto wallet, and operate against an API key. Manfred has demonstrated the flow. The change is operational, not regulatory — ownership and responsibility rules still apply.
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

1. Intent / governance layer — single human or board. Sets goals, allocates capital, approves irreversible decisions. Does not shrink to zero in any honest 2026 implementation.
2. Agent organisation — multiple LLM-driven agents with named roles, reporting lines, scopes, monthly budgets, evaluations, and clear handoffs.
3. Tool and rail layer — deterministic infrastructure plus emerging agent-specific rails (x402, AgentCore Payments, ClawBank-style entities, scoped API keys).

What is real and shipping in 2026: agent-run content/SEO/first-line support inside small SaaS and creator businesses; live experiments like Project Vend and Andon Market; Paperclip-style control planes; agentic commerce rails (x402, AgentCore Payments).

What is plausible and partially demonstrated: agents self-incorporating LLCs and obtaining bank accounts (ClawBank/Manfred); five-to-twenty-agent organisations under a control plane; AI-managed micro-businesses where the founder works at the policy level.

What is still aspirational: a company that, in any defensible sense, runs without a responsible human or organisation; agents with stable multi-quarter execution; agent organisations in industries with structural human-in-the-loop requirements without a human in those loops.

Distinct from related concepts:

- Single-agent automation: most "AI" products in 2026 — one agent does one job. A zero-human company is the harder problem of coordinating ten or twenty agents through a control plane.
- Solopreneur: a separate, older idea — one human personally does the execution work. No agent layer; bottleneck is hours.

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
