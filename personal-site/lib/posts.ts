import { readFile } from "node:fs/promises";
import path from "node:path";

export type Platform =
  | "youtube"
  | "x"
  | "xiaohongshu"
  | "bilibili"
  | "linkedin"
  | "other";

export type Post = {
  id: string;
  platform: Platform;
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
  "posts",
  "posts.json",
);

export async function getAllPosts(): Promise<Post[]> {
  const raw = await readFile(POSTS_FILE, "utf8");
  const arr = JSON.parse(raw) as Post[];
  return arr.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const PLATFORM_LABEL: Record<Platform, string> = {
  youtube: "YouTube",
  x: "X",
  xiaohongshu: "Xiaohongshu",
  bilibili: "Bilibili",
  linkedin: "LinkedIn",
  other: "Link",
};
