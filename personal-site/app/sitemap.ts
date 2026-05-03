import { stat } from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";
import {
  getAllPostsMetadata,
  getPostLastModified,
} from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

async function getFileLastModified(relativePath: string) {
  const { mtime } = await stat(
    path.join(/* turbopackIgnore: true */ process.cwd(), relativePath),
  );
  return mtime;
}

async function getLatestLastModified(relativePaths: string[]) {
  const lastModifiedValues = await Promise.all(
    relativePaths.map((relativePath) => getFileLastModified(relativePath)),
  );

  return new Date(
    Math.max(...lastModifiedValues.map((value) => value.getTime())),
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostsMetadata();
  const postEntries = await Promise.all(
    posts.map(async (post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
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
      url: absoluteUrl("/"),
      lastModified: await getLatestLastModified([
        "app/layout.tsx",
        "app/page.tsx",
        "lib/content.ts",
      ]),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified: await getLatestLastModified([
        "app/projects/page.tsx",
        "lib/content.ts",
      ]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/papers"),
      lastModified: await getLatestLastModified([
        "app/papers/page.tsx",
        "lib/content.ts",
      ]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: blogLastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  return [...staticEntries, ...postEntries];
}
