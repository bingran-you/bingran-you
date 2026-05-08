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

- **Zero-Human Company** — a company where every execution function (engineering, marketing, support, sales, finance, ops) is performed by software agents and automated infrastructure rather than paid employees or contractors. The founder remains as the strategic operator and is the only human in the loop. See [${SITE}/zero-human-company](${SITE}/zero-human-company) for the full definition, the 3-layer stack (intent / agent / infrastructure), distinctions from one-person company and solopreneur, and what is achievable today.
- **One-Person Company** — used in two senses. (1) Legal: a corporate structure for a single shareholder, notably under the Indian Companies Act, 2013. (2) Operating model: any company actually run by one human, regardless of legal form, spanning a leverage spectrum from solopreneur (human does the work) to indie hacker (product + tools) to zero-human company (agents do the work). See [${SITE}/one-person-company](${SITE}/one-person-company) for the operating-model sense, the leverage spectrum, what is realistic in 2026, and how it relates to zero-human company.

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
