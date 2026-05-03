import type { Metadata } from "next";

export const siteConfig = {
  name: "Bingran You",
  domain: "bingranyou.com",
  url: "https://bingranyou.com",
  title: "Bingran You — AI Builder & Ion Trapper",
  description:
    "Bingran You — PhD candidate at UC Berkeley building reliable AI systems and trapped-ion quantum experiments.",
  openGraphDescription:
    "PhD candidate at UC Berkeley. Reliable AI systems × trapped-ion quantum experiments.",
  locale: "en_US",
  language: "en",
  location: "Berkeley, CA",
  ogImagePath: "/images/profile/bingran-you-portrait.jpg",
  ogImageAlt: "Portrait of Bingran You",
  ogImageWidth: 2702,
  ogImageHeight: 2702,
  twitterHandle: "@bingran_bry",
  email: "bingran.bry@gmail.com",
  orcid: "0000-0002-0316-2115",
  alternateNames: ["bingranyou.com", "bingran.you"],
  focusAreas: [
    "Reliable AI Systems",
    "AI Agents",
    "Trapped-Ion Quantum Computing",
    "Integrated Photonics",
    "Quantum Networking",
  ],
  keywords: [
    "Bingran You",
    "AI agents",
    "reliable AI systems",
    "agent evaluation",
    "SkillsBench",
    "first-tree",
    "DoWhiz",
    "trapped-ion quantum computing",
    "integrated photonics",
    "quantum networking",
    "UC Berkeley",
    "Haeffner Lab",
  ],
  sameAs: [
    "https://x.com/bingran_bry",
    "https://github.com/bingran-you",
    "https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en",
    "https://orcid.org/0000-0002-0316-2115",
    "https://huggingface.co/bingran-you",
    "https://www.linkedin.com/in/bingran-you-775b4017b/",
    "https://www.youtube.com/@BingranBRY",
  ],
} as const;

export const personId = `${siteConfig.url}#person`;
export const websiteId = `${siteConfig.url}#website`;
export const profilePageId = `${siteConfig.url}#profile`;
export const siteAuthors = [{ name: siteConfig.name, url: siteConfig.url }];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export const ogImageUrl = absoluteUrl(siteConfig.ogImagePath);

function getSharedOpenGraphFields(description: string) {
  return {
    description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: ogImageUrl,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: siteConfig.ogImageAlt,
      },
    ],
  };
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} · ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    authors: siteAuthors,
    creator: siteConfig.name,
    publisher: siteConfig.name,
    openGraph: {
      title: fullTitle,
      url,
      type: "website",
      ...getSharedOpenGraphFields(description),
    },
    twitter: {
      card: "summary_large_image",
      creator: siteConfig.twitterHandle,
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
  };
}

export function createArticleMetadata({
  title,
  description,
  path,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  modifiedTime: string;
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} · ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    authors: siteAuthors,
    creator: siteConfig.name,
    publisher: siteConfig.name,
    openGraph: {
      title: fullTitle,
      url,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [siteConfig.name],
      ...getSharedOpenGraphFields(description),
    },
    twitter: {
      card: "summary_large_image",
      creator: siteConfig.twitterHandle,
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
  };
}
