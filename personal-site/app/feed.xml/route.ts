import { getAllBlogPosts, getBlogPostLastModified } from "@/lib/blog";
import { renderRssFeed, type FeedItem } from "@/lib/feed";
import { SITE_NAME } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const BLOG_DESCRIPTION =
  "Short notes by Bingran You on AI agents, trapped-ion experiments, and the craft of making complex systems dependable.";

export async function GET() {
  const posts = await getAllBlogPosts();
  const mtimes = await Promise.all(
    posts.map((post) => getBlogPostLastModified(post.slug)),
  );
  const items: FeedItem[] = posts.map((post, index) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    lastModified: mtimes[index],
  }));

  const body = renderRssFeed(
    items,
    {
      title: `${SITE_NAME} — Blog`,
      description: BLOG_DESCRIPTION,
      link: `${SITE_URL}/blog`,
      feedUrl: `${SITE_URL}/feed.xml`,
      creator: SITE_NAME,
    },
    (slug) => `${SITE_URL}/blog/${slug}`,
  );

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
