import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMetadata = {
  title: string;
  description?: string;
  date: string;
};

export async function getPostSlugs(): Promise<string[]> {
  const entries = await readdir(POSTS_DIR);
  return entries
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .sort();
}

export async function getPostMetadata(slug: string): Promise<PostMetadata> {
  const mod = await import(`@/content/posts/${slug}.mdx`);
  return mod.metadata as PostMetadata;
}

export async function getAllPostsMetadata(): Promise<
  Array<PostMetadata & { slug: string }>
> {
  const slugs = await getPostSlugs();
  const all = await Promise.all(
    slugs.map(async (slug) => ({
      slug,
      ...(await getPostMetadata(slug)),
    })),
  );
  return all.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostLastModified(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const { mtime } = await stat(filePath);
  return mtime;
}
