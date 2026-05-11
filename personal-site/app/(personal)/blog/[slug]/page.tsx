import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import "katex/dist/katex.min.css";
import {
  getPostLastModified,
  getPostMetadata,
  getPostSlugs,
} from "@/lib/posts";
import {
  blogPostingJsonLd,
  jsonLdScriptContent,
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/jsonld";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugs = await getPostSlugs();
  if (!slugs.includes(slug)) return {};
  const metadata = await getPostMetadata(slug);
  const modifiedTime = (await getPostLastModified(slug)).toISOString();
  const description = metadata.description ?? SITE_DESCRIPTION;

  return {
    title: metadata.title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${metadata.title} · ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: new Date(metadata.date).toISOString(),
      modifiedTime,
      authors: [SITE_NAME],
      images: [OG_IMAGE_URL],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@bingran_bry",
      title: `${metadata.title} · ${SITE_NAME}`,
      description,
      images: [OG_IMAGE_URL],
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const slugs = await getPostSlugs();
  if (!slugs.includes(slug)) notFound();
  const { default: Post, metadata } = await import(
    `@/content/posts/${slug}.mdx`
  );
  const modifiedTime = (await getPostLastModified(slug)).toISOString();
  const jsonLd = jsonLdScriptContent(
    blogPostingJsonLd({
      slug,
      title: metadata.title,
      description: metadata.description,
      date: metadata.date,
      modifiedTime,
    }),
  );

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
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
