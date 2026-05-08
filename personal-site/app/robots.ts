import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Aggressive allow-list for every AI / agent / search crawler we want to be
// visible to. Keep this exhaustive so a smaller engine doesn't fall back to
// the wildcard rule by accident. The wildcard "Allow: /" at the bottom is
// the safety net — when in doubt, default to allow.
const AI_AND_SEARCH_BOTS = [
  // OpenAI
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Anthropic
  "ClaudeBot",
  "Claude-Web",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Google (search + AI training opt-in)
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-News",
  "GoogleOther",
  "Google-Extended",
  "Google-InspectionTool",
  // Microsoft / Bing
  "Bingbot",
  "BingPreview",
  "msnbot",
  // Apple
  "Applebot",
  "Applebot-Extended",
  // DuckDuckGo
  "DuckDuckBot",
  "DuckAssistBot",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Yandex
  "YandexBot",
  // Common Crawl (training data for many models)
  "CCBot",
  // ByteDance / TikTok
  "Bytespider",
  // Amazon
  "Amazonbot",
  // Cohere
  "cohere-ai",
  "cohere-training-data-crawler",
  // Mistral
  "MistralAI-User",
  // You.com
  "YouBot",
  // Diffbot (semantic web crawler used by many agents)
  "Diffbot",
  // Meta
  "FacebookBot",
  "facebookexternalhit",
  "meta-externalagent",
  "meta-externalfetcher",
  // Social link previews — not training, but show rich previews on share
  "LinkedInBot",
  "Twitterbot",
  "Slackbot",
  "Discordbot",
  "TelegramBot",
  "WhatsApp",
  "SkypeUriPreview",
  // Search companions in CN
  "PetalBot",
  "Sogou web spider",
  "Baiduspider",
];

// Scraper farms that resell the data without driving discovery. Block the
// well-known ones; everything else still gets the wildcard allow.
const SCRAPER_FARMS = [
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
  "DotBot",
  "DataForSeoBot",
  "BLEXBot",
  "SeekportBot",
  "serpstatbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_AND_SEARCH_BOTS, allow: "/" },
      { userAgent: SCRAPER_FARMS, disallow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
