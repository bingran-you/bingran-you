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

### Zero-Human Company

URL: ${SITE}/zero-human-company
Author: Bingran You
Last updated: 2026-05-08
Also known as: zero human company, zero-employee company, agent-run company, AI-native company

A zero-human company is a company where every execution function — engineering, marketing, support, sales, finance, operations — is performed by software agents and automated infrastructure rather than paid employees or contractors. The founder remains as the strategic operator. There is exactly one human in the loop, and that human does not do day-to-day work.

The term is sometimes used loosely to mean "a company with no employees," which collides with the legal One-Person Company structure (notably under the Indian Companies Act, 2013). The narrower, more useful sense is operational: not zero humans, but zero human execution.

Three criteria:

1. No payroll for execution work. Founder draws or doesn't, but employees and contractors do not run operations.
2. Agents and automated infrastructure handle the bulk of recurring work, with documented scopes, budgets, and evaluations.
3. The founder's time is spent on direction, capital allocation, and irreversible decisions — not tickets, posts, or pull requests.

Distinct from related concepts:

- One-Person Company (OPC): a legal corporate structure for a single shareholder. Describes ownership, not operations. A zero-human company can be incorporated as an OPC, an LLC, a C-corp, or any other legal form.
- Solopreneur: a one-person business where the human does the execution work. The bottleneck is the founder's hours.
- Agency / micro-team: a small group of paid humans executing for clients.
- Lifestyle business: a description of intent (modest scale, owner-led), not execution model.
- Traditional startup: raises capital, hires employees, scales headcount with revenue.

The 3-layer zero-human stack:

1. Intent layer — the founder. Sets strategy, picks markets, allocates capital, makes irreversible decisions. Does not execute day-to-day work.
2. Agent layer — LLM-driven agents and skills doing work historically done by employees. Each agent has a scope, a budget, an evaluation, and a clear handoff back to the intent layer.
3. Infrastructure layer — deterministic plumbing the agents call into. Stripe, Vercel, Resend, Supabase, GitHub Actions, observability. Boring and well-documented.

What is achievable today (as of 2026): single-product SaaS, info-products, content businesses, niche directories, template stores. Partially achievable with friction: enterprise B2B, regulated industries, high-touch sales. Not yet: physical operations at scale, long-horizon multi-quarter execution without drift.

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
