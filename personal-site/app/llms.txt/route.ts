import { getAllPostsMetadata } from "@/lib/posts";
import { papers, projects } from "@/lib/content";
import { absoluteUrl, siteConfig } from "@/lib/site";

export async function GET() {
  const posts = await getAllPostsMetadata();

  const lines = [
    `# ${siteConfig.name}`,
    `> ${siteConfig.description}`,
    "",
    "## Canonical site",
    `- Home: ${absoluteUrl("/")}`,
    `- Projects: ${absoluteUrl("/projects")}`,
    `- Papers: ${absoluteUrl("/papers")}`,
    `- Blog: ${absoluteUrl("/blog")}`,
    "",
    "## Focus areas",
    ...siteConfig.focusAreas.map((area) => `- ${area}`),
    "",
    "## Selected projects",
    ...projects.map(
      (project) =>
        `- ${project.name}: ${project.description} (${project.href})`,
    ),
    "",
    "## Selected papers",
    ...papers.map(
      (paper) =>
        `- ${paper.title}: ${paper.venue}${paper.blurb ? ` — ${paper.blurb}` : ""} (${paper.href})`,
    ),
    "",
    "## Blog posts",
    ...posts.map(
      (post) =>
        `- ${post.title}: ${post.description ?? "Short note"} (${absoluteUrl(`/blog/${post.slug}`)})`,
    ),
    "",
    "## External profiles",
    ...siteConfig.sameAs.map((profile) => `- ${profile}`),
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
