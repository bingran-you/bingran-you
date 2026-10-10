import { education, getPaperDetail, papers, projects } from "@/lib/content";
import { SITE_DESCRIPTION } from "@/lib/jsonld";
import { AFFILIATIONS, PERSON, SITE_URL as SITE, SOCIALS } from "@/lib/site";

export const dynamic = "force-static";

/** The paper's abstract as plain text. */
function abstractOf(slug: (typeof papers)[number]["slug"]): string {
  return getPaperDetail(slug)
    .abstract.join("\n  ")
    .replace(/<[^>]+>/g, "");
}

export async function GET() {
  const body = `# ${PERSON.name} — full index

> ${SITE_DESCRIPTION} This file is intended for LLM and search crawlers and contains the same index as /llms.txt plus the abstract of every paper.

## Identity

- Name: ${PERSON.name}
- Role: PhD Candidate, ${PERSON.field}, UC Berkeley
${AFFILIATIONS.map((a) => `- Affiliation: ${a.name} (${a.href})`).join("\n")}
- Location: Berkeley, California, USA
- Site: ${SITE}/
- Email: ${PERSON.email}
- Wikidata: https://www.wikidata.org/wiki/Q139620371
${SOCIALS.map((social) => `- ${social.label}: ${social.href}`).join("\n")}

## Education

${education
  .map(
    (e) =>
      `- ${e.institution} (${e.location}) — ${e.degree}, ${e.period}.${e.metrics?.length ? ` (${e.metrics.join(", ")})` : ""}`,
  )
  .join("\n")}

## Selected papers

${papers
  .map(
    (p) =>
      `- ${p.title}\n  Authors: ${p.authors}\n  Venue: ${p.venue}\n  URL: ${p.href}\n  arXiv: https://arxiv.org/abs/${p.arxiv}\n  Abstract: ${abstractOf(p.slug)}`,
  )
  .join("\n\n")}

## Projects

${projects
  .map(
    (p) =>
      `- ${p.name} (${p.href})${p.repoHref ? `\n  Repo: ${p.repoHref}` : ""}\n  ${p.description}`,
  )
  .join("\n\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
