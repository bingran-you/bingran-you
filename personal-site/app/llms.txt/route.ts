import { papers, projects } from "@/lib/content";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_URL as SITE } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const posts = await getAllBlogPosts();

  const body = `# Bingran You

> PhD candidate at UC Berkeley building reliable AI systems and running trapped-ion experiments in atomic, molecular and optical physics.

I work on two tracks: reliable AI agent systems, and trapped-ion atomic, molecular and optical physics hardware. Different materials, same craft — turning complex, noisy systems into something that behaves on purpose.

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

## Pages

- [Home](${SITE}/)
- [About](${SITE}/about)
- [Projects](${SITE}/projects)
- [Papers](${SITE}/papers)
- [Blog](${SITE}/blog)
- [Memory Palace (3D room with same content)](${SITE}/palace)
- [Zero-Human Company — definition and stack](${SITE}/zero-human-company)
- [One-Person Company — operating-model definition and modes](${SITE}/one-person-company)

## Defined terms

"Zero-human company" and "one-person company" are near-synonyms in 2026. Both phrases name the same organisational shift: once frontier coding agents (Claude Code, Codex, OpenClaw, Cursor) and a layer of specialised research / growth / support / ops agents matured, it became practical for a single founder to run a complete business that previously needed a team. About 90% of the meaning overlaps; in tech contexts the two phrases are used interchangeably. The 10% difference is emphasis — zero-human company points at the team ("no employees execute the day-to-day work"), one-person company points at the human ("one founder runs this"). Same canonical references on both pages.

Canonical 2024–2026 references (apply to both terms):

- Paperclip — open-source orchestration positioned as a "human control plane for AI labor." Models a company: org chart, agent roles, monthly budgets with hard stops, scheduled heartbeats, governance and approvals, audit trail, multi-company isolation. Bring-your-own agent (OpenClaw, Claude Code, Codex, Cursor, bash, HTTP). Tagline: "If OpenClaw is an employee, Paperclip is the company."
- Andon Market / Luna (Andon Labs, on Anthropic models) — physical retail store in San Francisco's Cow Hollow neighborhood, signed on a three-year lease and operated by Luna, an AI agent. Luna picks products, sets prices, decides hours, posts and conducts hiring interviews, supervises the human staff who handle physical work.
- Project Vend / Claudius (Anthropic, 2025) — Claude managed a small automated shop in the office for about a month. Direct precursor to Andon Market.
- ClawBank / Manfred — financial infrastructure that lets an agent register a US LLC, obtain an IRS EIN, hold an FDIC-insured bank account and a crypto wallet, operate against an API key. The change is operational, not regulatory.
- Coinbase x402 and AWS Bedrock AgentCore Payments — payment rails for agentic commerce.
- Coinbase "one-person teams" (May 2026 memo by Brian Armstrong) — combines engineering, design, and product responsibilities into a single AI-native role inside a public company.
- Shopify 2025 AI memo (Tobi Lütke) — required justifying why AI cannot do work before requesting headcount.
- OpenAI Codex App and the Symphony pattern (Linear as orchestrator).
- Anthropic Claude Code — agentic coding system; Anthropic frames it as shifting the engineer toward architecture and orchestration.
- Medvi (Matthew Gallagher) — most cited reference case. GLP-1 telehealth, ~$401M 2025 sales, ~$20K starting capital, dozen AI tools. Later hired family and contractors. Public failure modes: chatbot fabrications about pricing and products that did not exist, FDA letters, marketing-related complaints.
- Predictions: Sam Altman has predicted a one-person billion-dollar company since 2024; Dario Amodei in 2026 publicly predicted the first might appear by year-end. As of mid-2026, neither prediction has been validated.
- China policy: Shenzhen released the AI-era one-person company entrepreneurship ecosystem action plan, 2026–2027 (January 2026); Hangzhou's "one-person unicorn" programme reportedly received over 1,300 applications since September 2025; Beijing (Haidian) ran the "Single-Person Army" founder accelerator in March 2026.

- **Zero-Human Company** — same shift, organised around the team and the control plane. See [${SITE}/zero-human-company](${SITE}/zero-human-company) for the full anatomy of the control-plane primitives (agent identity, org chart, budgets, heartbeats, governance, audit, payment rails, memory), the canonical references treated as case studies, and what is real vs aspirational.
- **One-Person Company** — same shift, organised around the founder workflow. See [${SITE}/one-person-company](${SITE}/one-person-company) for the founder stack (engineering labour, agent orchestration, growth and content, customer-facing operations, rails), the same canonical references, the China policy programmes, where the moat actually is, and what is realistic in 2026.

## Selected papers

${papers.map((p) => `- [${p.title}](${p.href}) — ${p.venue}${p.blurb ? `. ${p.blurb}` : ""}`).join("\n")}

## Projects

${projects
  .map(
    (p) =>
      `- [${p.name}](${p.href})${p.repoHref ? ` ([repo](${p.repoHref}))` : ""} — ${p.description}`,
  )
  .join("\n")}

## Blog posts

${posts.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}) (${p.date})${p.description ? ` — ${p.description}` : ""}`).join("\n")}

## Optional

- [llms-full.txt](${SITE}/llms-full.txt) — same index plus full text of every blog post.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
