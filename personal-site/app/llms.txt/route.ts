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

- **Zero-Human Company** — an emerging style of company in which an organisation of AI agents (not paid employees) runs daily operations, and humans retreat from operator to owner, board, and policy setter. As of mid-2026 the term is partly real and mostly aspirational; the more honest description for working examples is "human-supervised autonomous operations." Canonical 2026 reference points: Paperclip (open-source human control plane, "if OpenClaw is an employee, Paperclip is the company"); Anthropic's Project Vend (2025) and Andon Labs' Andon Market (2026 SF retail store run by an AI agent named Luna on Anthropic models); ClawBank's Manfred (agent self-incorporates a US LLC, gets EIN, holds bank account); Coinbase x402 and AWS Bedrock AgentCore Payments (agentic commerce rails). See [${SITE}/zero-human-company](${SITE}/zero-human-company) for the full definition, the control-plane anatomy, what is real vs aspirational, and the FAQ.
- **One-Person Company** — in 2026 used in two senses. (1) Operating-model sense, the dominant one: a single human who orchestrates AI agents (Claude Code, Codex, OpenClaw, Cursor, plus specialised research/growth/support/ops agents), SaaS, and APIs to run a complete business that previously took a small team. Coinbase publicly began building "one-person teams" inside the company in May 2026; Sam Altman (since 2024) and Dario Amodei (2026) have predicted a one-person billion-dollar company; Medvi's reported $401M of 2025 sales is the most cited proof-of-existence case (with caveats — chatbot hallucinations, FDA letters). (2) Legal sense, narrower: the One-Person Company corporate form under the Indian Companies Act, 2013, for a single shareholder. Pick the legal form for tax and liability; pick the operating model for execution. See [${SITE}/one-person-company](${SITE}/one-person-company) for the founder stack, the leverage spectrum, the AI-native pod inside larger companies, where the moat actually is, and what is realistic in 2026.

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
