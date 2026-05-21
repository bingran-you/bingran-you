export type FeedItem = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  lastModified: Date;
};

export type FeedChannel = {
  title: string;
  description: string;
  link: string;
  feedUrl: string;
  language?: string;
  creator?: string;
};

export function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function escapeCdata(value: string) {
  return value.replace(/\]\]>/g, "]]]]><![CDATA[>");
}

function pubDateOf(item: FeedItem) {
  return new Date(item.date).toUTCString();
}

export function renderRssFeed(
  items: ReadonlyArray<FeedItem>,
  channel: FeedChannel,
  itemUrl: (slug: string) => string,
): string {
  const language = channel.language ?? "en-us";
  const lastBuildDate =
    items.length > 0
      ? new Date(
          Math.max(...items.map((i) => i.lastModified.getTime())),
        ).toUTCString()
      : new Date(0).toUTCString();

  const renderedItems = items
    .map((item) => {
      const url = itemUrl(item.slug);
      const description = item.description ?? "";
      const creatorLine = channel.creator
        ? `\n      <dc:creator>${escapeXml(channel.creator)}</dc:creator>`
        : "";
      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${pubDateOf(item)}</pubDate>
      <atom:updated>${item.lastModified.toISOString()}</atom:updated>
      <description><![CDATA[${escapeCdata(description)}]]></description>${creatorLine}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(channel.title)}</title>
    <link>${escapeXml(channel.link)}</link>
    <description>${escapeXml(channel.description)}</description>
    <language>${escapeXml(language)}</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${escapeXml(channel.feedUrl)}" rel="self" type="application/rss+xml" />
${renderedItems}
  </channel>
</rss>
`;
}
