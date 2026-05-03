import { stat } from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";
import {
  getAllPostsMetadata,
  getPostLastModified,
} from "@/lib/posts";

const SITE_URL = "https://bingranyou.com";

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
          "app/blog/page.tsx",
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
        "app/page.tsx",
      ]),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: await getLatestLastModified([
        "app/layout.tsx",
        "app/about/page.tsx",
      ]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: await getLatestLastModified([
        "app/projects/page.tsx",
        "lib/content.ts",
      ]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/papers`,
      lastModified: await getLatestLastModified([
        "app/papers/page.tsx",
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
  ];

  return [...staticEntries, ...postEntries];
}
