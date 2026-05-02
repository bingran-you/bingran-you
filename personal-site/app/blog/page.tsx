import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMetadata } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Short notes by Bingran You on AI agents, trapped-ion quantum experiments, and the craft of making complex systems behave on purpose.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog · Bingran You",
    description:
      "Short notes on AI agents, quantum experiments, and the craft of dependable systems.",
    url: "/blog",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getAllPostsMetadata();

  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-3 text-base text-[var(--muted)] max-w-2xl">
          Short notes — on agents, ions, and the craft of making complex things
          dependable.
        </p>
      </header>

      <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-1 py-5 group"
            >
              <span className="flex items-baseline gap-3">
                <time className="font-mono text-xs text-[var(--muted)] tabular-nums">
                  {post.date}
                </time>
                <span className="text-base font-medium group-hover:underline underline-offset-4">
                  {post.title}
                </span>
              </span>
              {post.description ? (
                <span className="text-sm text-[var(--muted)] leading-relaxed">
                  {post.description}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
