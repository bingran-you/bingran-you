import { readFile } from "node:fs/promises";
import path from "node:path";

export type SocialPlatform =
  | "youtube"
  | "x"
  | "xiaohongshu"
  | "bilibili"
  | "linkedin"
  | "other";

export type SocialPost = {
  id: string;
  platform: SocialPlatform;
  url: string;
  title: string;
  description?: string;
  thumbnail?: string;
  date: string;
  addedVia: "auto" | "manual";
};

const POSTS_FILE = path.join(
  process.cwd(),
  "content",
  "social",
  "posts.json",
);

export async function getAllSocialPosts(): Promise<SocialPost[]> {
  const raw = await readFile(POSTS_FILE, "utf8");
  const arr = JSON.parse(raw) as SocialPost[];
  return arr.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const PLATFORM_LABEL: Record<SocialPlatform, string> = {
  youtube: "YouTube",
  x: "X",
  xiaohongshu: "Xiaohongshu",
  bilibili: "Bilibili",
  linkedin: "LinkedIn",
  other: "Link",
};
