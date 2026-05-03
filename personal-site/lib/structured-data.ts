import type { PostMetadata, PostSlug } from "@/lib/posts";
import {
  absoluteUrl,
  ogImageUrl,
  personId,
  profilePageId,
  siteConfig,
  websiteId,
} from "@/lib/site";

type CollectionEntry = {
  name: string;
  url: string;
  description?: string;
};

function toIsoDate(date: string) {
  return new Date(date).toISOString();
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    givenName: "Bingran",
    familyName: "You",
    url: siteConfig.url,
    image: ogImageUrl,
    jobTitle: "PhD Candidate",
    description: siteConfig.description,
    homeLocation: siteConfig.location,
    email: siteConfig.email,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ORCID",
      value: siteConfig.orcid,
      url: `https://orcid.org/${siteConfig.orcid}`,
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
      url: "https://haeffnerlab.berkeley.edu/",
    },
    knowsAbout: siteConfig.focusAreas,
    sameAs: siteConfig.sameAs,
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    alternateName: siteConfig.alternateNames,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    author: { "@id": personId },
    about: { "@id": personId },
  };
}

export function getProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": profilePageId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    mainEntity: { "@id": personId },
  };
}

export function getCollectionPageJsonLd({
  path,
  name,
  description,
  items,
}: {
  path: string;
  name: string;
  description: string;
  items: CollectionEntry[];
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: item.url,
        name: item.name,
        description: item.description,
      })),
    },
  };
}

export function getBlogJsonLd(
  posts: Array<PostMetadata & { slug: PostSlug }>,
) {
  const url = absoluteUrl("/blog");

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    url,
    name: `${siteConfig.name} Blog`,
    description: "Short notes on AI agents, quantum experiments, and craft.",
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId },
    author: { "@id": personId },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
      headline: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: toIsoDate(post.date),
      author: { "@id": personId },
      image: [ogImageUrl],
    })),
  };
}

export function getBlogPostingJsonLd({
  slug,
  metadata,
  modifiedTime,
}: {
  slug: PostSlug;
  metadata: PostMetadata;
  modifiedTime: string;
}) {
  const url = absoluteUrl(`/blog/${slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    url,
    headline: metadata.title,
    description: metadata.description,
    datePublished: toIsoDate(metadata.date),
    dateModified: modifiedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId },
    isAccessibleForFree: true,
    author: { "@id": personId },
    publisher: { "@id": personId },
    image: [ogImageUrl],
    about: siteConfig.focusAreas,
  };
}
