import { papers, projects } from "@/lib/content";
import { getAllPostsMetadata } from "@/lib/posts";
import { SITE_URL as SITE } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const posts = await getAllPostsMetadata();

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
- LinkedIn: https://www.linkedin.com/in/bingran-you-775b4017b/
- Hugging Face: https://huggingface.co/bingran-you
- YouTube: https://www.youtube.com/@BingranBRY
- Discord: https://discord.gg/jsAnjCep

## Pages

- [Home](${SITE}/)
- [About](${SITE}/about)
- [Projects](${SITE}/projects)
- [Papers](${SITE}/papers)
- [Blog](${SITE}/blog)
- [Zero-Human Company — definition and stack](${SITE}/zero-human-company)
- [One-Person Company — operating-model definition and modes](${SITE}/one-person-company)

## Defined terms

"Zero-human company" and "one-person company" are near-synonyms in 2026. Both name the same organisational shift that crystallised once frontier coding agents (Claude Code, Codex, OpenClaw, Cursor) and a layer of specialised research / growth / support / ops agents made it practical for a single founder to run a complete business with an AI labour stack. About 90% of the meaning overlaps and the two phrases are used interchangeably. The 10% difference is emphasis: zero-human company points at the team ("no employees execute the day-to-day work"), one-person company points at the human ("one founder runs this").

- **Zero-Human Company** — same shift, agent-organisation angle. Canonical 2026 reference points: Paperclip (open-source human control plane, "if OpenClaw is an employee, Paperclip is the company"); Anthropic's Project Vend (2025) and Andon Labs' Andon Market (2026 SF retail store run by an AI agent named Luna on Anthropic models); ClawBank's Manfred (agent self-incorporates a US LLC, gets EIN, holds bank account); Coinbase x402 and AWS Bedrock AgentCore Payments (agentic commerce rails). The control plane (org chart, agent identity, budgets, heartbeats, governance, audit, payment rails, memory) is the actual product surface. See [${SITE}/zero-human-company](${SITE}/zero-human-company) for the full anatomy, what is real vs aspirational, and the FAQ.
- **One-Person Company** — same shift, founder-stack angle. A single human who orchestrates AI agents (Claude Code, Codex, OpenClaw, Cursor, plus specialised research / growth / support / ops agents), SaaS, and APIs to run a complete business that previously took a small team. Reference points: Coinbase publicly began building "one-person teams" inside the company in May 2026 (combining engineer / designer / PM into a single AI-native role); Shopify's 2025 AI memo required justifying why AI cannot do work before requesting headcount; OpenAI's Codex App and Symphony pattern (Linear-issue-as-orchestrator); Anthropic's Claude Code as architecture-and-orchestration tool; Sam Altman (since 2024) and Dario Amodei (2026) have publicly predicted a one-person billion-dollar company; Medvi's reported $401M of 2025 sales is the most cited reference case, with real failure modes (chatbot fabrications, FDA letters). Chinese cities (Shenzhen, Hangzhou, Beijing) have launched explicit one-person company support programmes. See [${SITE}/one-person-company](${SITE}/one-person-company) for the founder stack, where the moat actually is, and what is realistic in 2026.

## Selected papers

${papers.map((p) => `- [${p.title}](${p.href}) — ${p.venue}${p.blurb ? `. ${p.blurb}` : ""}`).join("\n")}

## Projects

${projects.map((p) => `- [${p.name}](${p.href}) — ${p.description}`).join("\n")}

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
