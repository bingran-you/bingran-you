import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPostMetadata = {
  title: string;
  description?: string;
  date: string;
};

export async function getBlogPostSlugs(): Promise<string[]> {
  const entries = await readdir(BLOG_DIR);
  return entries
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .sort();
}

export async function getBlogPostMetadata(
  slug: string,
): Promise<BlogPostMetadata> {
  const mod = await import(`@/content/blog/${slug}.mdx`);
  return mod.metadata as BlogPostMetadata;
}

export async function getAllBlogPosts(): Promise<
  Array<BlogPostMetadata & { slug: string }>
> {
  const slugs = await getBlogPostSlugs();
  const all = await Promise.all(
    slugs.map(async (slug) => ({
      slug,
      ...(await getBlogPostMetadata(slug)),
    })),
  );
  return all.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPostLastModified(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const { mtime } = await stat(filePath);
  return mtime;
}
