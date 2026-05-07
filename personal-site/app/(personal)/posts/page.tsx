import type { Metadata } from "next";
import { getAllSocialPosts } from "@/lib/social-posts";
import { SocialPostCard } from "@/components/social-post-card";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Things I've posted across YouTube, X, Xiaohongshu, Bilibili and elsewhere — all in one place, newest first.",
  alternates: { canonical: "/posts" },
};

export default async function PostsPage() {
  const posts = await getAllSocialPosts();

  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Posts</h1>
        <p className="mt-3 max-w-2xl text-base text-[var(--muted)]">
          Videos and notes I&apos;ve posted across YouTube, X, Xiaohongshu,
          Bilibili and elsewhere — newest first.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">Nothing here yet.</p>
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
