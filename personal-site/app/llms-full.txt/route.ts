import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { papers, projects, education } from "@/lib/content";
import { getAllPostsMetadata } from "@/lib/posts";

const SITE = "https://bingranyou.com";

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
