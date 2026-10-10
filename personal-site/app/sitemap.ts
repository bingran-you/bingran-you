import { stat } from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

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
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: await getLatestLastModified([
        "app/layout.tsx",
        "app/(personal)/page.tsx",
        "lib/content.ts",
        "content/papers/details.json",
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
      url: `${SITE_URL}/posts`,
      lastModified: await getLatestLastModified([
        "app/(personal)/posts/page.tsx",
        "content/posts/posts.json",
      ]),
      changeFrequency: "weekly",
      priority: 0.7,
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
}
