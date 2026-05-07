import { stat } from "node:fs/promises";
import path from "node:path";

export const postSlugs = [
  "a-curated-vetted-skills-catalog",
  "seo-and-geo-for-a-personal-site",
  "trust-infrastructure-for-ai-in-expert-work",
  "welcome",
] as const;

export type PostSlug = (typeof postSlugs)[number];

export type PostMetadata = {
  title: string;
  description?: string;
  date: string;
};

export async function getPostMetadata(
  slug: PostSlug,
): Promise<PostMetadata> {
  const mod = await import(`@/content/posts/${slug}.mdx`);
  return mod.metadata as PostMetadata;
}

export async function getAllPostsMetadata(): Promise<
  Array<PostMetadata & { slug: PostSlug }>
> {
  const all = await Promise.all(
    postSlugs.map(async (slug) => ({
      slug,
      ...(await getPostMetadata(slug)),
    })),
  );
  return all.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostLastModified(slug: PostSlug) {
  const filePath = path.join(process.cwd(), "content", "posts", `${slug}.mdx`);
  const { mtime } = await stat(filePath);
  return mtime;
}
