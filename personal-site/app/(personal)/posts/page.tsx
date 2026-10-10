import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { Sheet } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
import { PostCard } from "@/components/post-card";
import { PERSON } from "@/lib/site";

export const metadata: Metadata = {
  title: "Posts",
  description: `Posts by ${PERSON.name} on X, Xiaohongshu, YouTube and Bilibili.`,
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
