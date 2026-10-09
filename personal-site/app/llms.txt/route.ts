import { papers, projects } from "@/lib/content";
import { SITE_DESCRIPTION } from "@/lib/jsonld";
import { PERSON, SITE_URL as SITE, SOCIALS } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const body = `# ${PERSON.name}

> ${SITE_DESCRIPTION}

## Identity

- Name: ${PERSON.name}
- Role: PhD Candidate, ${PERSON.field}, UC Berkeley
- Lab: ${PERSON.lab} (${PERSON.labHref})
- Location: Berkeley, California, USA
- Site: ${SITE}/
- Email: ${PERSON.email}
- Wikidata: https://www.wikidata.org/wiki/Q139620371
${SOCIALS.map((social) => `- ${social.label}: ${social.href}`).join("\n")}

## Pages

- [Home](${SITE}/)
- [About](${SITE}/about)
- [Projects](${SITE}/projects)
- [Papers](${SITE}/papers)
- [Skills](${SITE}/skills)
- [Posts](${SITE}/posts)
- [Memory Palace (3D room)](${SITE}/palace)

## Selected papers

${papers.map((p) => `- [${p.title}](${p.href}) — ${p.venue}`).join("\n")}

## Projects

${projects
  .map(
    (p) =>
      `- [${p.name}](${p.href})${p.repoHref ? ` ([repo](${p.repoHref}))` : ""} — ${p.description}`,
  )
  .join("\n")}

## Optional

- [llms-full.txt](${SITE}/llms-full.txt) — same index plus the abstract of every paper.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
