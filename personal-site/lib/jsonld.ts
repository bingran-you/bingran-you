import type { Paper, Project } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export { SITE_URL };
export const SITE_NAME = "Bingran You";
export const SITE_DESCRIPTION =
  "Bingran You — PhD candidate at UC Berkeley building reliable AI systems and running trapped-ion experiments in atomic, molecular and optical physics.";
export const SITE_OG_DESCRIPTION =
  "Bingran You — PhD candidate at UC Berkeley. Reliable AI systems × trapped-ion atomic, molecular and optical physics.";
export const OG_IMAGE_URL = `${SITE_URL}/images/profile/bingran-you-portrait.jpg`;
export const PERSON_ID = `${SITE_URL}#person`;
export const WEBSITE_ID = `${SITE_URL}#website`;
export const PROFILE_PAGE_ID = `${SITE_URL}#profile`;
export const SITE_KEYWORDS = [
  "Bingran You",
  "You Bingran",
  "AI agents",
  "reliable AI systems",
  "agent evaluation",
  "BenchFlow",
  "SkillsBench",
  "first-tree",
  "DoWhiz",
  "atomic, molecular and optical physics",
  "trapped ions",
  "integrated photonics",
  "ion-photon interfaces",
  "UC Berkeley",
  "Haeffner Lab",
] as const;

function isoDate(value: string) {
  return new Date(value).toISOString();
}

const author = {
  "@type": "Person" as const,
  "@id": PERSON_ID,
  name: SITE_NAME,
  url: SITE_URL,
};

function personEntity() {
  return {
    "@type": "Person" as const,
    "@id": PERSON_ID,
    name: SITE_NAME,
    alternateName: ["You Bingran"],
    givenName: "Bingran",
    familyName: "You",
    url: SITE_URL,
    image: OG_IMAGE_URL,
    jobTitle: "PhD Candidate",
    description: SITE_DESCRIPTION,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ORCID",
      value: "0000-0002-0316-2115",
      url: "https://orcid.org/0000-0002-0316-2115",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of California, Berkeley",
        sameAs: "https://www.berkeley.edu/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of Chinese Academy of Sciences",
        sameAs: "https://english.ucas.ac.cn/",
      },
    ],
    affiliation: {
      "@type": "Organization",
      name: "Haeffner Lab, University of California, Berkeley",
      url: "https://ions.berkeley.edu/",
    },
    worksFor: {
      "@type": "Organization",
      name: "Haeffner Lab, University of California, Berkeley",
      url: "https://ions.berkeley.edu/",
      parentOrganization: {
        "@type": "CollegeOrUniversity",
        name: "University of California, Berkeley",
        sameAs: "https://www.berkeley.edu/",
      },
    },
    knowsAbout: [
      "Reliable AI Systems",
      "AI Agents",
      "Atomic, Molecular and Optical Physics",
      "Trapped Ions",
      "Integrated Photonics",
      "Ion-Photon Interfaces",
    ],
    sameAs: [
      "https://www.wikidata.org/wiki/Q139620371",
      "https://x.com/bingran_bry",
      "https://github.com/bingran-you",
      "https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en",
      "https://orcid.org/0000-0002-0316-2115",
      "https://huggingface.co/bingran-you",
      "https://www.linkedin.com/in/bingran-you/",
      "https://www.youtube.com/@BingranBRY",
      "https://discord.gg/jsAnjCep",
    ],
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    ...personEntity(),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    alternateName: ["bingranyou.com"],
    url: SITE_URL,
    inLanguage: "en",
    author: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
  } as const;
}

export function profilePageJsonLd(path: "/" | "/about" = "/") {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": path === "/" ? PROFILE_PAGE_ID : `${url}#profile`,
    url,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    mainEntity: personEntity(),
  };
}

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
  const codeRepository =
    project.repoHref ??
    (project.href.startsWith("https://github.com/") ? project.href : undefined);
  return {
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.description,
    url: project.href,
    ...(codeRepository ? { codeRepository } : {}),
    author,
  } as const;
}

export function blogPostingJsonLd(args: {
  slug: string;
  title: string;
  description?: string;
  date: string;
  modifiedTime?: string;
}) {
  const url = `${SITE_URL}/blog/${args.slug}`;
  const publishedTime = isoDate(args.date);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: args.title,
    ...(args.description ? { description: args.description } : {}),
    datePublished: publishedTime,
    dateModified: args.modifiedTime ?? publishedTime,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    author,
    publisher: author,
    image: [OG_IMAGE_URL],
    isAccessibleForFree: true,
  } as const;
}

export function definedTermJsonLd(args: {
  path: string;
  name: string;
  alternateName?: ReadonlyArray<string>;
  description: string;
  termCode?: string;
}) {
  const url = `${SITE_URL}${args.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${url}#term`,
    name: args.name,
    ...(args.alternateName ? { alternateName: [...args.alternateName] } : {}),
    description: args.description,
    ...(args.termCode ? { termCode: args.termCode } : {}),
    url,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Bingran You — Glossary",
      url: `${SITE_URL}/`,
    },
  } as const;
}

export function articleJsonLd(args: {
  path: string;
  title: string;
  description: string;
  date: string;
  modifiedTime?: string;
  about?: string;
  keywords?: ReadonlyArray<string>;
}) {
  const url = `${SITE_URL}${args.path}`;
  const publishedTime = isoDate(args.date);
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: args.title,
    name: args.title,
    description: args.description,
    datePublished: publishedTime,
    dateModified: args.modifiedTime ?? publishedTime,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    author,
    publisher: author,
    image: [OG_IMAGE_URL],
    isAccessibleForFree: true,
    inLanguage: "en",
    ...(args.about ? { about: args.about } : {}),
    ...(args.keywords ? { keywords: [...args.keywords] } : {}),
  } as const;
}

export function breadcrumbJsonLd(
  trail: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: `${SITE_URL}${step.path}`,
    })),
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
