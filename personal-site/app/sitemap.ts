import { stat } from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";
import {
  getAllPostsMetadata,
  getPostLastModified,
} from "@/lib/posts";
import { SITE_URL } from "@/lib/site";
import { getAllSkills, getSkillsLastModified } from "@/lib/skills";

async function getFileLastModified(relativePath: string) {
  const { mtime } = await stat(
    path.join(/* turbopackIgnore: true */ process.cwd(), relativePath),
  );
  return mtime;
}

async function getLatestLastModified(relativePaths: string[]) {
  const values = await Promise.all(
    relativePaths.map((relativePath) => getFileLastModified(relativePath)),
  );

  return new Date(Math.max(...values.map((value) => value.getTime())));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostsMetadata();
  const postEntries = await Promise.all(
    posts.map(async (post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: await getPostLastModified(post.slug),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  );
  const blogLastModified = new Date(
    Math.max(
      (
        await getLatestLastModified([
          "app/(personal)/blog/page.tsx",
          "lib/posts.ts",
        ])
      ).getTime(),
      ...postEntries.map((entry) => entry.lastModified.getTime()),
    ),
  );

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: await getLatestLastModified([
        "app/layout.tsx",
        "app/(personal)/page.tsx",
      ]),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: await getLatestLastModified([
        "app/layout.tsx",
        "app/(personal)/about/page.tsx",
      ]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: await getLatestLastModified([
        "app/(personal)/projects/page.tsx",
        "lib/content.ts",
      ]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/papers`,
      lastModified: await getLatestLastModified([
        "app/(personal)/papers/page.tsx",
        "lib/content.ts",
      ]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: blogLastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/posts`,
      lastModified: await getLatestLastModified([
        "app/(personal)/posts/page.tsx",
        "content/social/posts.json",
      ]),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/skills`,
      lastModified: getSkillsLastModified(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/zero-human-company`,
      lastModified: await getLatestLastModified([
        "app/(personal)/zero-human-company/page.tsx",
      ]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/one-person-company`,
      lastModified: await getLatestLastModified([
        "app/(personal)/one-person-company/page.tsx",
      ]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/palace`,
      lastModified: await getLatestLastModified([
        // /palace is served as a static webpack/CRA bundle from the vendored
        // palace-outer + palace-inner sub-apps, stitched together by
        // scripts/build-palace.mjs and exposed via the rewrites in
        // next.config.ts. Use those as the source-of-truth files.
        "next.config.ts",
        "scripts/build-palace.mjs",
        "palace-outer/src/Application/Application.ts",
        "palace-inner/src/components/applications/ShowcaseExplorer.tsx",
      ]),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const skillEntries: MetadataRoute.Sitemap = getAllSkills().map((skill) => ({
    url: `${SITE_URL}/skills/${skill.slug}`,
    lastModified: new Date(skill.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...postEntries, ...skillEntries];
}
