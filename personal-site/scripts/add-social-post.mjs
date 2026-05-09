#!/usr/bin/env node
// Add a social-media post to content/social/posts.json by extracting
// metadata from the given URL. Usage:
//   node scripts/add-social-post.mjs <url>
//   node scripts/add-social-post.mjs <url> --title "Custom" --date 2026-05-01
//
// Detects platform from the URL, runs the platform extractor, falls back to
// generic OpenGraph parsing. Edits posts.json idempotently (skip duplicates by URL/id).
//
// Canonical docs (when this script returns a canary, when XHS login-walls,
// account-safety budgets, full /posts pipeline): see the social-scraping-policy
// skill at repo-skills/social-scraping-policy/SKILL.md.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const POSTS_FILE = path.join(
  process.cwd(),
  "content",
  "social",
  "posts.json",
);

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

// ---------- arg parsing ----------
function parseArgs(argv) {
  const args = { url: null, overrides: {} };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--title") args.overrides.title = argv[++i];
    else if (a === "--description") args.overrides.description = argv[++i];
    else if (a === "--date") args.overrides.date = argv[++i];
    else if (a === "--thumbnail") args.overrides.thumbnail = argv[++i];
    else if (a === "--platform") args.overrides.platform = argv[++i];
    else if (!args.url) args.url = a;
  }
  return args;
}

// ---------- helpers ----------
async function fetchText(url, init = {}) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent": UA,
      "accept-language": "en;q=0.9,zh;q=0.8",
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      ...(init.headers ?? {}),
    },
    ...init,
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
  return { text: await res.text(), finalUrl: res.url };
}

// Download a remote image into the personal-site public/ tree so the page
// doesn't depend on a signed/expiring CDN URL (Xiaohongshu specifically).
async function downloadImage(url, destAbsPath, refererOrigin) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent": UA,
      ...(refererOrigin ? { referer: refererOrigin } : {}),
      accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
  await mkdir(path.dirname(destAbsPath), { recursive: true });
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(destAbsPath, buf);
  return buf.length;
}

async function fetchJSON(url, init = {}) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "application/json", ...(init.headers ?? {}) },
    ...init,
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
  return res.json();
}

function parseMetaTags(html) {
  const tags = {};
  const re =
    /<meta\s+[^>]*?(?:property|name|itemprop)\s*=\s*["']([^"']+)["'][^>]*?content\s*=\s*["']([^"']*)["'][^>]*>/gi;
  for (const m of html.matchAll(re)) {
    tags[m[1].toLowerCase()] = decodeHTMLEntities(m[2]);
  }
  // also pick up the reverse order: content first, name/property second
  const re2 =
    /<meta\s+[^>]*?content\s*=\s*["']([^"']*)["'][^>]*?(?:property|name|itemprop)\s*=\s*["']([^"']+)["'][^>]*>/gi;
  for (const m of html.matchAll(re2)) {
    if (!tags[m[2].toLowerCase()]) {
      tags[m[2].toLowerCase()] = decodeHTMLEntities(m[1]);
    }
  }
  return tags;
}

function decodeHTMLEntities(s) {
  const named = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
    mdash: "—",
    ndash: "–",
    hellip: "…",
    laquo: "«",
    raquo: "»",
    copy: "©",
    reg: "®",
    trade: "™",
  };
  return s
    .replace(/&([a-zA-Z]+);/g, (m, name) =>
      Object.prototype.hasOwnProperty.call(named, name) ? named[name] : m,
    )
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) =>
      String.fromCharCode(parseInt(n, 16)),
    );
}

function isoDate(d) {
  const date = d instanceof Date ? d : new Date(d);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10); // YYYY-MM-DD
}

function detectPlatform(url) {
  const u = new URL(url);
  const h = u.hostname.toLowerCase();
  if (h.includes("youtube.com") || h.includes("youtu.be")) return "youtube";
  if (h === "x.com" || h === "twitter.com" || h.endsWith(".x.com")) return "x";
  if (h.includes("xiaohongshu.com") || h.includes("xhslink.com")) return "xiaohongshu";
  if (h.includes("bilibili.com") || h === "b23.tv") return "bilibili";
  if (h.includes("linkedin.com")) return "linkedin";
  return "other";
}

// ---------- platform extractors ----------

async function extractYouTube(url) {
  const oembed = await fetchJSON(
    `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(url)}`,
  );
  // oembed gives title, author_name, thumbnail_url — but no date.
  // Fetch the watch page for datePublished + description.
  let date = null;
  let description;
  try {
    const { text } = await fetchText(url);
    const meta = parseMetaTags(text);
    date =
      isoDate(meta["datepublished"]) ||
      isoDate(meta["uploaddate"]) ||
      isoDate(meta["og:video:release_date"]);
    description = meta["og:description"] || meta["description"];
    // Fallback: <meta itemprop="datePublished" content="...">
    if (!date) {
      const m = text.match(/"publishDate":"([^"]+)"/);
      if (m) date = isoDate(m[1]);
    }
    if (!date) {
      const m = text.match(/"uploadDate":"([^"]+)"/);
      if (m) date = isoDate(m[1]);
    }
  } catch {}
  // canonical id
  const u = new URL(url);
  const vid =
    u.searchParams.get("v") ||
    (u.hostname === "youtu.be" ? u.pathname.slice(1) : null);
  return {
    platform: "youtube",
    id: vid ? `youtube-${vid}` : null,
    url,
    title: oembed.title,
    description,
    thumbnail: oembed.thumbnail_url,
    date,
  };
}

async function extractBilibili(url) {
  // Resolve b23.tv shortlinks first
  let target = url;
  if (new URL(url).hostname === "b23.tv") {
    const { finalUrl } = await fetchText(url);
    target = finalUrl;
  }
  const u = new URL(target);
  const m = u.pathname.match(/\/video\/(BV[0-9A-Za-z]+)/);
  if (!m) {
    // fall back to OG scrape
    return extractGeneric(target, "bilibili");
  }
  const bvid = m[1];
  const data = await fetchJSON(
    `https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`,
  );
  if (data.code !== 0) {
    return extractGeneric(target, "bilibili");
  }
  const v = data.data;
  return {
    platform: "bilibili",
    id: `bilibili-${bvid}`,
    url: `https://www.bilibili.com/video/${bvid}/`,
    title: v.title,
    description: v.desc || undefined,
    thumbnail: v.pic, // already https
    date: isoDate(v.pubdate * 1000),
  };
}

async function extractXiaohongshu(url) {
  // Resolve xhslink.com shortlink
  let target = url;
  let html, finalUrl;
  try {
    ({ text: html, finalUrl } = await fetchText(target));
    target = finalUrl;
  } catch (e) {
    throw new Error(`Cannot fetch Xiaohongshu page: ${e.message}`);
  }
  const meta = parseMetaTags(html);
  const title =
    meta["og:title"] ||
    meta["twitter:title"] ||
    (html.match(/<title>([^<]+)<\/title>/) || [])[1];
  const thumb = meta["og:image"] || meta["twitter:image"];
  const description = meta["og:description"] || meta["description"];
  // Xiaohongshu doesn't expose date in OG; try inline script
  let date = null;
  const dm = html.match(/"time"\s*:\s*(\d{10,13})/);
  if (dm) {
    const ts = Number(dm[1]);
    date = isoDate(ts < 1e12 ? ts * 1000 : ts);
  }
  // Extract id from URL (/explore/<id> or /discovery/item/<id>)
  let id = null;
  const idm = target.match(/\/(?:explore|discovery\/item)\/([0-9a-f]{16,})/);
  if (idm) id = `xhs-${idm[1]}`;
  return {
    platform: "xiaohongshu",
    id,
    url: target,
    title: title?.replace(/\s+-\s+小红书.*$/, "").trim(),
    description,
    thumbnail: thumb,
    date,
  };
}

async function extractX(url) {
  // X cards on /posts render via react-tweet, which fetches everything
  // (text, author, avatar, media, date) from the syndication API at
  // request time. The only field we have to record locally is the
  // tweet id so the renderer can find it. Date defaults to today; pass
  // --date YYYY-MM-DD to override for back-dated entries.
  const m = url.match(/status\/(\d+)/);
  return {
    platform: "x",
    id: m ? `x-${m[1]}` : null,
    url,
    title: undefined,
    description: undefined,
    thumbnail: undefined,
    date: null,
  };
}

async function extractGeneric(url, platform = "other") {
  const { text, finalUrl } = await fetchText(url);
  const meta = parseMetaTags(text);
  const title =
    meta["og:title"] ||
    meta["twitter:title"] ||
    (text.match(/<title>([^<]+)<\/title>/) || [])[1];
  return {
    platform,
    id: null,
    url: finalUrl,
    title,
    description: meta["og:description"] || meta["description"],
    thumbnail: meta["og:image"] || meta["twitter:image"],
    date:
      isoDate(meta["article:published_time"]) ||
      isoDate(meta["og:updated_time"]) ||
      null,
  };
}

const EXTRACTORS = {
  youtube: extractYouTube,
  bilibili: extractBilibili,
  xiaohongshu: extractXiaohongshu,
  x: extractX,
  linkedin: (u) => extractGeneric(u, "linkedin"),
  other: (u) => extractGeneric(u, "other"),
};

// ---------- main ----------
async function main() {
  const argv = process.argv.slice(2);
  if (argv.length === 0 || argv[0] === "-h" || argv[0] === "--help") {
    console.error(
      "Usage: node scripts/add-social-post.mjs <url> [--title S] [--description S] [--date YYYY-MM-DD] [--thumbnail URL] [--platform NAME]",
    );
    process.exit(1);
  }
  const { url, overrides } = parseArgs(argv);
  if (!url) {
    console.error("missing url");
    process.exit(1);
  }

  const platform = overrides.platform || detectPlatform(url);
  const extractor = EXTRACTORS[platform] || EXTRACTORS.other;
  const extracted = await extractor(url);

  const post = {
    id:
      extracted.id ||
      `${platform}-${Buffer.from(url).toString("base64url").slice(0, 12)}`,
    platform,
    url: extracted.url || url,
    title: overrides.title || extracted.title || "(untitled)",
    description: overrides.description ?? extracted.description ?? undefined,
    thumbnail: overrides.thumbnail ?? extracted.thumbnail ?? undefined,
    date:
      overrides.date ||
      extracted.date ||
      new Date().toISOString().slice(0, 10),
    addedVia: "manual",
  };
  // normalize protocol-relative URLs (e.g. //cdn.example.com/foo.jpg)
  if (post.thumbnail && post.thumbnail.startsWith("//"))
    post.thumbnail = "https:" + post.thumbnail;

  // Cache Xiaohongshu thumbnails locally. Their CDN URLs are signed and
  // expire; without caching the /posts page rots into broken-image cells.
  if (
    post.platform === "xiaohongshu" &&
    post.thumbnail &&
    post.thumbnail.startsWith("http")
  ) {
    const noteId = post.id.replace(/^xhs-/, "");
    const destAbs = path.join(
      process.cwd(),
      "public",
      "posts-thumbs",
      "xiaohongshu",
      `${noteId}.jpg`,
    );
    try {
      const bytes = await downloadImage(
        post.thumbnail,
        destAbs,
        "https://www.xiaohongshu.com/",
      );
      post.thumbnail = `/posts-thumbs/xiaohongshu/${noteId}.jpg`;
      console.log(`[ok] cached thumbnail (${bytes}B) -> ${post.thumbnail}`);
    } catch (e) {
      console.warn(`[warn] failed to cache xhs thumbnail: ${e.message}`);
    }
  }

  // strip undefined fields
  for (const k of Object.keys(post)) {
    if (post[k] === undefined) delete post[k];
  }

  const raw = await readFile(POSTS_FILE, "utf8").catch(() => "[]");
  const arr = JSON.parse(raw);
  if (arr.some((p) => p.id === post.id || p.url === post.url)) {
    console.log(`[skip] duplicate: ${post.id}`);
    return;
  }
  arr.push(post);
  arr.sort((a, b) => (a.date < b.date ? 1 : -1));
  await writeFile(POSTS_FILE, JSON.stringify(arr, null, 2) + "\n");
  console.log(`[ok] added ${post.id}: ${post.title}`);
  console.log(JSON.stringify(post, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
