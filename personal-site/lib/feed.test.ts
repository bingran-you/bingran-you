import { describe, expect, it } from "vitest";
import {
  escapeCdata,
  escapeXml,
  renderRssFeed,
  type FeedChannel,
  type FeedItem,
} from "@/lib/feed";

const channel: FeedChannel = {
  title: "Example — Blog",
  description: "Notes on things.",
  link: "https://example.com/blog",
  feedUrl: "https://example.com/feed.xml",
  creator: "Test Author",
};

const itemUrl = (slug: string) => `https://example.com/blog/${slug}`;

const baseItems: FeedItem[] = [
  {
    slug: "first",
    title: "First Post",
    description: "Hello, world.",
    date: "2026-01-01",
    lastModified: new Date("2026-01-02T00:00:00Z"),
  },
  {
    slug: "second",
    title: "Second Post",
    date: "2026-02-01",
    lastModified: new Date("2026-02-02T00:00:00Z"),
  },
];

describe("escapeXml", () => {
  it("escapes the five XML entities", () => {
    expect(escapeXml(`& < > " '`)).toBe(
      "&amp; &lt; &gt; &quot; &apos;",
    );
  });

  it("does not double-escape already-escaped entities", () => {
    expect(escapeXml("&amp;")).toBe("&amp;amp;");
  });
});

describe("escapeCdata", () => {
  it("splits any CDATA terminators", () => {
    expect(escapeCdata("foo]]>bar")).toBe("foo]]]]><![CDATA[>bar");
  });

  it("leaves benign content alone", () => {
    expect(escapeCdata("regular text")).toBe("regular text");
  });
});

describe("renderRssFeed", () => {
  it("emits a well-formed RSS 2.0 envelope", () => {
    const xml = renderRssFeed(baseItems, channel, itemUrl);
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(xml).toContain('<rss version="2.0"');
    expect(xml).toContain("<channel>");
    expect(xml).toContain("</channel>");
    expect(xml).toContain("</rss>");
  });

  it("declares the atom + dc namespaces", () => {
    const xml = renderRssFeed(baseItems, channel, itemUrl);
    expect(xml).toContain('xmlns:atom="http://www.w3.org/2005/Atom"');
    expect(xml).toContain('xmlns:dc="http://purl.org/dc/elements/1.1/"');
  });

  it("includes an atom:link rel=self", () => {
    const xml = renderRssFeed(baseItems, channel, itemUrl);
    expect(xml).toContain(
      '<atom:link href="https://example.com/feed.xml" rel="self" type="application/rss+xml" />',
    );
  });

  it("renders one <item> per input item with required tags", () => {
    const xml = renderRssFeed(baseItems, channel, itemUrl);
    const items = [...xml.matchAll(/<item>/g)];
    expect(items.length).toBe(baseItems.length);
    expect(xml).toContain("<title>First Post</title>");
    expect(xml).toContain("<title>Second Post</title>");
    expect(xml).toContain(
      '<guid isPermaLink="true">https://example.com/blog/first</guid>',
    );
    expect(xml).toContain("<pubDate>Thu, 01 Jan 2026 00:00:00 GMT</pubDate>");
    expect(xml).toContain(
      "<atom:updated>Fri, 02 Jan 2026 00:00:00 GMT</atom:updated>",
    );
  });

  it("uses lastBuildDate = max(lastModified) when items present", () => {
    const xml = renderRssFeed(baseItems, channel, itemUrl);
    expect(xml).toContain(
      "<lastBuildDate>Mon, 02 Feb 2026 00:00:00 GMT</lastBuildDate>",
    );
  });

  it("falls back to epoch lastBuildDate when no items", () => {
    const xml = renderRssFeed([], channel, itemUrl);
    expect(xml).toContain(
      "<lastBuildDate>Thu, 01 Jan 1970 00:00:00 GMT</lastBuildDate>",
    );
    expect(xml).not.toContain("<item>");
  });

  it("escapes XML metacharacters in title/description", () => {
    const xml = renderRssFeed(
      [
        {
          slug: "x",
          title: "A & B <C>",
          description: "intentionally bad <script>",
          date: "2026-01-01",
          lastModified: new Date("2026-01-01T00:00:00Z"),
        },
      ],
      channel,
      itemUrl,
    );
    expect(xml).toContain("<title>A &amp; B &lt;C&gt;</title>");
    expect(xml).toContain(
      "<description><![CDATA[intentionally bad <script>]]></description>",
    );
  });

  it("neutralises ]]> inside description CDATA", () => {
    const xml = renderRssFeed(
      [
        {
          slug: "x",
          title: "T",
          description: "before ]]> after",
          date: "2026-01-01",
          lastModified: new Date("2026-01-01T00:00:00Z"),
        },
      ],
      channel,
      itemUrl,
    );
    expect(xml).toContain(
      "<description><![CDATA[before ]]]]><![CDATA[> after]]></description>",
    );
  });

  it("omits dc:creator when channel.creator is undefined", () => {
    const noCreator: FeedChannel = { ...channel, creator: undefined };
    const xml = renderRssFeed(baseItems, noCreator, itemUrl);
    expect(xml).not.toContain("<dc:creator>");
  });

  it("emits empty CDATA when item has no description", () => {
    const xml = renderRssFeed(baseItems, channel, itemUrl);
    expect(xml).toContain("<description><![CDATA[]]></description>");
  });
});
