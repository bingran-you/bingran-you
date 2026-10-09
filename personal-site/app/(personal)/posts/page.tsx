import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { Sheet } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
import { PostCard } from "@/components/post-card";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Things I've posted across YouTube, X, Xiaohongshu, Bilibili and elsewhere — all in one place, newest first.",
  alternates: { canonical: "/posts" },
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <Sheet current="/posts">
      <h1 className={styles.title}>Posts</h1>
      <div className={`${styles.body} font-sans`}>
        {posts.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">Nothing here yet.</p>
        ) : (
          <div className="post-grid columns-1 gap-6 sm:columns-2 lg:columns-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </Sheet>
  );
}
