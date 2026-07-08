import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { papers, projects, education } from "@/lib/content";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_URL as SITE } from "@/lib/site";

export const dynamic = "force-static";

async function readPostMdx(slug: string): Promise<string> {
  const path = join(process.cwd(), "content", "blog", `${slug}.mdx`);
  return readFile(path, "utf8");
}

export async function GET() {
  const posts = await getAllBlogPosts();
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
- LinkedIn: https://www.linkedin.com/in/bingran-you/
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
  .map(
    (p) =>
      `- ${p.name} (${p.href})${p.repoHref ? `\n  Repo: ${p.repoHref}` : ""}\n  ${p.description}`,
  )
  .join("\n\n")}

## Defined terms

"Zero-human company" and "one-person company" are near-synonyms in 2026. Both name the same organisational shift that crystallised once frontier coding agents (Claude Code, Codex, OpenClaw, Cursor) and a layer of specialised research / growth / support / ops agents made it practical for a single founder to run a complete business with an AI labour stack. About 90% of the meaning overlaps; in tech contexts the two phrases are used interchangeably. The 10% difference is emphasis — zero-human company points at the team ("no employees execute the day-to-day work"), one-person company points at the human ("one founder runs this"). The two pages on this site cover the same shift from the two angles.

Both pages on this site cover the same shift with the same canonical references; they differ only in organisation. /one-person-company organises around the founder workflow; /zero-human-company organises around the team and the control plane.

Canonical 2024–2026 references (apply to both terms):

- Paperclip — open-source orchestration positioned as a "human control plane for AI labor." Models a company: org chart with named roles and reporting lines, monthly budgets with hard stops, scheduled heartbeats, governance and approvals, full audit trail, multi-company isolation. Bring-your-own agent (OpenClaw, Claude Code, Codex, Cursor, bash, HTTP). Tagline: "If OpenClaw is an employee, Paperclip is the company." The cleanest open-source articulation of what the operating system for the new style of company has to provide.
- Andon Market / Luna (Andon Labs, on Anthropic models) — a physical retail store in San Francisco's Cow Hollow neighborhood, signed on a three-year lease and operated by Luna, an AI agent. Luna picks products, sets prices, decides hours, posts and conducts hiring interviews, and supervises the human staff who handle physical work. Andon Labs is transparent that the human staff are formally employed — controlled experiment, not stunt. The clearest live demonstration of moving the management layer to software while keeping the physical layer human.
- Project Vend / Claudius (Anthropic, 2025) — Claude managed a small automated shop in the office for about a month, handling pricing, inventory, supplier relationships, customer interactions. The first public attempt by a frontier lab to put an LLM in charge of a small business with real money. Direct precursor to Andon Market. Value was the catalogue of failure modes (confidently mispriced inventory, off-policy purchases, drift over the month) that the rest of the field now designs around.
- ClawBank / Manfred — financial infrastructure that lets an agent register a US LLC, obtain an IRS EIN, hold an FDIC-insured bank account and a crypto wallet, and operate against an API key. Manfred is the ClawBank-internal agent that has been demonstrated executing this flow end to end. Roadmap items include programmatic LLC formation, registered business addresses, ownership structures, scoped agent API keys, agent-to-agent transactions, and autonomous revenue routing. The change is operational, not regulatory — ownership and responsibility rules still apply, a responsible human or organisation is still on the hook.
- Coinbase x402 and AWS Bedrock AgentCore Payments — payment rails for agentic commerce. x402 lets an agent find services, request a price, and pay micropayments for what it consumes. AgentCore Payments integrates x402 so agents on AWS can do all of this with enterprise-grade governance, compliance, budget controls, and audit logs baked in. Without these rails no agent organisation can pay for the SaaS and APIs it needs to run.
- Coinbase "one-person teams" (May 2026 memo by Brian Armstrong) — announced Coinbase would become "lean, fast, and AI-native," reduce management layers, ask managers to be player-coaches, and explicitly experiment with one-person teams: combining engineering, design, and product responsibilities into a single AI-native role. The memo accompanied a roughly 14% workforce reduction. The first time a major public company put the same idea into formal organisational design and a capital-allocation decision.
- Shopify 2025 AI memo (Tobi Lütke) — required teams to explain why AI cannot accomplish a goal before requesting new headcount or resources, and folded AI tool use into performance and peer reviews. The cultural prerequisite that made the Coinbase move possible.
- OpenAI Codex App and the Symphony pattern — Codex App is OpenAI's interface for managing multiple coding agents in parallel, with around ninety third-party plugins. Symphony uses Linear as the orchestrator: agents pull issues from the task system, run autonomously in dedicated workspaces, report back when done. The unit of management is the task, not the agent session. The cleanest demonstration of the orchestration shift; most multi-agent setups use this pattern before reaching for a heavier control plane like Paperclip.
- Anthropic Claude Code — agentic coding system that reads a codebase, edits across files, runs tests, ships commits. Anthropic explicitly frames Claude Code as shifting the engineer toward architecture, product thinking, and continuous orchestration of multiple agents — not as a faster autocomplete. The frontier-lab framing that makes the founder's role inside the new pattern legible.
- Medvi (Matthew Gallagher) — GLP-1 telehealth business, reportedly started with about a dozen AI tools and roughly $20K of capital. Hit roughly $401M of 2025 sales with a 2026 target near $1.8B. Later hired family and contractors; depends on third-party medical and pharmacy partners. Public failure modes: chatbot fabrications about pricing and products that did not exist, FDA letters, marketing-related complaints. The most cited real-world reference case — strong signal that the pattern can scale unusually fast in the right vertical, and a clear cautionary tale about the failure modes.
- Predictions — Sam Altman has predicted the first one-person billion-dollar company since 2024; Dario Amodei in 2026 publicly predicted the first might appear by year-end. As of mid-2026, neither prediction has been validated.
- China policy programmes:
  - Shenzhen released the AI-era one-person company entrepreneurship ecosystem action plan, 2026–2027 in January 2026, integrating talent, industry support, compute, models, corpora, and capital around solo AI founders.
  - Hangzhou's "one-person unicorn" programme, started September 2025, reportedly received over 1,300 applications and selected around 32 one-person companies into a clustered community.
  - Beijing (Haidian) ran the "Single-Person Army" AI-era one-person company founder accelerator in March 2026, covering compliance, AI trends, monetisation, finance, personal IP, and customer acquisition.

### One-Person Company

URL: ${SITE}/one-person-company
Author: Bingran You
Last updated: 2026-05-08
Also known as: zero-human company, one-person team, AI-native pod, one-person unicorn, solo founder company

A single founder who orchestrates AI agents — Claude Code, Codex, OpenClaw, Cursor, plus specialised agents for research, growth, support, and operations — together with SaaS, APIs, and selective outsourcing to run a complete business that previously took a small team. The founder is the orchestrator. The agents are the team. The bottleneck shifts from founder hours to founder judgment and agent coordination.

The 2026 founder workflow has five surfaces:

- Engineering labour: Claude Code, Codex, OpenClaw, Cursor as agentic coding workers; founder operates as architect, reviewer, orchestrator.
- Agent orchestration: Codex App + Symphony for engineering; Paperclip-style control planes when multiple roles (engineering + marketing + support + ops) need to coordinate.
- Research, growth, content: specialised agents for technical research, SEO/GEO, social drafting, ad creative, programmatic-SEO sites.
- Customer-facing operations: support agents, CRM automation, lifecycle email, payments and billing automation. Care needed at this surface — Medvi's failure modes lived here.
- Rails: Stripe, Vercel, Supabase, Resend, GitHub Actions, observability, plus agent-specific rails (x402, AgentCore Payments, ClawBank-style entities, scoped API keys).

A working tell: the founder's day looks like a sequence of approvals, briefs, and kill/keep calls, not a sequence of tasks. If the founder is still doing line-level work, they are a solopreneur with extra steps. If they are operating on briefs and approvals, they are running a one-person company.

Where the moat actually is once AI tooling commoditises: vertical know-how (domain depth), distribution and trust (audience, brand, platform access), proprietary data and context, taste (judgment between plausible agent outputs), compliance edges. "I have AI tools" is not a moat — every competitor will have those by default.

What is realistic in 2026: single-product SaaS at $0–$1M ARR, info-products and courses, niche directories and aggregators, template/asset stores, indie consulting and research practices, AI-native pods inside large companies. Workable with friction: two-sided marketplaces, mid-market B2B SaaS, communities and creator businesses, healthtech/fintech/regtech. Not realistic: physical operations at scale, structural human-in-the-loop industries, enterprise relationship sales above $100K ACV.

### Zero-Human Company

URL: ${SITE}/zero-human-company
Author: Bingran You
Last updated: 2026-05-08
Also known as: one-person company, agent-run company, AI-native company, agent organization

A complete business whose execution work — engineering, marketing, support, sales, finance, operations — runs on an organisation of AI agents rather than employees, with the founder operating at intent and governance rather than at line level. The term is also used as a product category, most clearly by open-source projects like Paperclip, which describes itself as a human control plane for AI labor.

Three operational criteria:

1. No employees executing the day-to-day work. The founder, or a small board, exists; payroll for execution does not.
2. An organisation of agents, not a single agent — multiple roles, reporting lines, budgets, evaluations, and a control plane managing them.
3. Human time spent on intent, capital allocation, approvals, and irreversible decisions, not on tickets, posts, or pull requests.

Three layers connected by a control plane:

1. Intent / governance — single human or small board. Sets goals, allocates capital, signs contracts, owns liability, holds the legal entity, approves irreversible decisions. Slow cadence — days to quarters. Does not shrink to zero in any honest 2026 implementation.
2. Agent organisation — multiple LLM-driven agents with named roles, reporting lines, scopes, monthly budgets, evaluations, and clear handoffs.
3. Tool and rail layer — deterministic infrastructure plus emerging agent-specific rails (x402, AgentCore Payments, ClawBank-style entities, scoped API keys).

The control-plane primitives (the connective tissue):

- Agent identity and scoped permissions — each agent has a name, a role, tool permissions, and an API key with scope.
- Org chart — reporting lines between agents.
- Scheduled heartbeats — agents wake up on a schedule, check work, take action, report status.
- Budgets with hard stops — each agent has a monthly budget; system enforces it.
- Governance and approvals — irreversible or customer-facing actions route through human approval.
- Audit trail — every decision and tool call recorded, attributable to the agent that took it.
- Payment rails — x402 / AgentCore Payments for transactions.
- Memory and institutional knowledge — durable state across agent sessions.

Paperclip's public roadmap touches every one of these. Reading the roadmap is the cleanest way to see where the field is going next.

What is real and shipping in 2026: single-founder businesses running on an AI labour stack at $0–$1M ARR; live experiments like Project Vend and Andon Market; Paperclip-style control planes; agentic commerce rails (x402, AgentCore Payments); AI-native pods inside large companies (Coinbase, Shopify cultural prerequisites).

What is plausible and partially demonstrated: agents self-incorporating LLCs and obtaining bank accounts (ClawBank / Manfred); five-to-twenty-agent organisations under a control plane; AI-managed micro-businesses where the founder works at the policy level; a genuine one-person billion-dollar company (Medvi as strongest signal but not clean proof).

What is still aspirational: a company that, in any defensible sense, runs without a responsible human or organisation; stable multi-quarter agent execution without a control plane; agent organisations in industries with structural human-in-the-loop requirements without a human in those loops.

Distinct from related concepts:

- Single-agent automation: most "AI" products in 2026 — one agent does one job. A zero-human / one-person company is the harder problem of coordinating ten or twenty agents through a control plane.
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
