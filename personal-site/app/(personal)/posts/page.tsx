import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SocialPostCard } from "@/components/social-post-card";
import { getAllSocialPosts } from "@/lib/social-posts";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Things I've posted across YouTube, X, Xiaohongshu, Bilibili and elsewhere — all in one place, newest first.",
  alternates: { canonical: "/posts" },
};

export default async function PostsPage() {
  const posts = await getAllSocialPosts();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
      <PageHeader
        eyebrow="stream / posts"
        title="Posts"
        meta={`${posts.length} entries · live`}
        description="Videos and notes I've posted across YouTube, X, Xiaohongshu, Bilibili and elsewhere — newest first."
      />

      {posts.length === 0 ? (
        <p
          className="font-mono"
          style={{ fontSize: "13px", color: "var(--ink-3)" }}
        >
          Nothing here yet.
        </p>
      ) : (
        <div className="social-post-grid columns-1 gap-6 sm:columns-2 lg:columns-3">
          {posts.map((post) => (
            <SocialPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
