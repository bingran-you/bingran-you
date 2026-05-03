import type { Paper, Project } from "@/lib/content";

const SITE_URL = "https://bingranyou.com";

const author = {
  "@type": "Person" as const,
  name: "Bingran You",
  url: SITE_URL,
};

export function paperJsonLd(paper: Paper) {
  return {
    "@type": "ScholarlyArticle",
    headline: paper.title,
    name: paper.title,
    url: paper.href,
    sameAs: paper.href,
    author,
    isPartOf: {
      "@type": "Periodical",
      name: paper.venue,
    },
    ...(paper.blurb ? { abstract: paper.blurb } : {}),
  } as const;
}

export function projectJsonLd(project: Project) {
  const isGitHub = project.href.startsWith("https://github.com/");
  return {
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.description,
    url: project.href,
    ...(isGitHub ? { codeRepository: project.href } : {}),
    author,
  } as const;
}

export function blogPostingJsonLd(args: {
  slug: string;
  title: string;
  description?: string;
  date: string;
}) {
  const url = `${SITE_URL}/blog/${args.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    ...(args.description ? { description: args.description } : {}),
    datePublished: args.date,
    dateModified: args.date,
    url,
    mainEntityOfPage: url,
    author,
    publisher: author,
  } as const;
}

export function graphScriptContent(items: ReadonlyArray<object>) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": items,
  };
  return JSON.stringify(graph).replace(/</g, "\\u003c");
}

export function jsonLdScriptContent(item: object) {
  return JSON.stringify(item).replace(/</g, "\\u003c");
}
