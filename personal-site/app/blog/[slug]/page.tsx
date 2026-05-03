import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { postSlugs, type PostSlug } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!postSlugs.includes(slug as PostSlug)) return {};
  const mod = await import(`@/content/posts/${slug}.mdx`);
  return {
    title: mod.metadata.title,
    description: mod.metadata.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  if (!postSlugs.includes(slug as PostSlug)) notFound();
  const { default: Post, metadata } = await import(
    `@/content/posts/${slug}.mdx`
  );

  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <Link
          href="/blog"
          className="inline-block font-mono text-xs uppercase tracking-widest text-[var(--muted)] hover:text-foreground transition"
        >
          ← Blog
        </Link>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
          {metadata.title}
        </h1>
        <time className="block font-mono text-sm text-[var(--muted)] tabular-nums">
          {metadata.date}
        </time>
      </header>
      <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:underline-offset-4 prose-a:decoration-[var(--border)] hover:prose-a:decoration-foreground">
        <Post />
      </div>
    </article>
  );
}
