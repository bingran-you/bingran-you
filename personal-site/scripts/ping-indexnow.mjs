#!/usr/bin/env node
// Ping IndexNow (Bing / Yandex / Naver / Seznam) about bingran.ai URLs.
// No args: submit every <loc> in the production sitemap.
// With args: submit only the URLs given on argv.

// Keep in sync with personal-site/lib/site.ts.
const SITE_URL = "https://bingran.ai";
const HOST = new URL(SITE_URL).host;
const KEY = "7f55dd09565a4e93989a1fe6248e1426";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS_PER_REQUEST = 10000;

async function fetchOk(url, label) {
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`${label} not reachable: ${url} (${resp.status})`);
  }
  return resp;
}

async function verifyKeyFile() {
  const resp = await fetchOk(KEY_LOCATION, "Key file");
  const body = (await resp.text()).trim();
  if (body !== KEY) {
    throw new Error(`Key file content mismatch at ${KEY_LOCATION} — expected ${KEY}, got ${body}`);
  }
  console.log(`✓ Key file verified at ${KEY_LOCATION}`);
}

async function readSitemapUrls() {
  const resp = await fetchOk(SITEMAP_URL, "Sitemap");
  const xml = await resp.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function submit(urls) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  const resp = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const text = await resp.text();
  console.log(`IndexNow → ${resp.status} ${resp.statusText}${text ? `\n${text}` : ""}`);
  if (resp.status !== 200 && resp.status !== 202) {
    throw new Error(`IndexNow rejected the submission`);
  }
}

const cliUrls = process.argv.slice(2);
const urls = cliUrls.length > 0 ? cliUrls : await readSitemapUrls();

if (urls.length === 0) {
  console.error("No URLs to submit.");
  process.exit(1);
}
if (urls.length > MAX_URLS_PER_REQUEST) {
  console.error(`Too many URLs (${urls.length}); IndexNow caps at ${MAX_URLS_PER_REQUEST} per request.`);
  process.exit(1);
}

await verifyKeyFile();
console.log(`Submitting ${urls.length} URL${urls.length === 1 ? "" : "s"} to IndexNow…`);
await submit(urls);
