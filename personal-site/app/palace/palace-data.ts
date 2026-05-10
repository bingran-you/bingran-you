import { education, papers, projects } from "@/lib/content";
import { getAllPostsMetadata } from "@/lib/posts";
import { getAllSocialPosts, PLATFORM_LABEL } from "@/lib/social-posts";

export const ABOUT_FACTS = [
  "I am Bingran You (Chinese: 尤炳然), a PhD candidate in Applied Science & Technology at UC Berkeley, advised in the Haeffner Lab.",
  "I build reliable AI systems — agent infrastructure, evaluation harnesses, and applied AI products that need to behave under noisy real-world conditions.",
  "I run trapped-ion experiments in atomic, molecular and optical physics — integrated photonics for individual ion addressing, ion-photon interfaces, and 3D-printed micro ion traps for scalable hardware.",
  "Both tracks share one craft: turning complex, noisy systems into something that behaves on purpose.",
] as const;

export const FOCUS_AREAS = [
  {
    label: "Agentic Builder",
    items: [
      "Agent skills and tool use, with an emphasis on evaluation that mirrors real workflows.",
      "Productivity agents that triage notifications, dispatch background work, and stay out of the way.",
      "Open-source benchmarks for measuring agent capability and safety in simulated workspaces.",
    ],
  },
  {
    label: "Ion Trapper",
    items: [
      "Adjoint-optimized integrated photonic circuits for individual trapped-ion addressing.",
      "Temporally multiplexed ion-photon interfaces via fast ion-chain transport.",
      "3D-printed micro ion trap technology for scalable atomic-physics platforms.",
      "Trapped-ion Ramsey interferometry probing fundamental physics of single-ion vibrational modes.",
    ],
  },
] as const;

export const CONTACT_LINKS = [
  { label: "Email", href: "mailto:me@bingranyou.com", display: "me@bingranyou.com" },
  { label: "Lab", href: "https://ions.berkeley.edu/", display: "Haeffner Lab, UC Berkeley" },
  { label: "GitHub", href: "https://github.com/bingran-you", display: "github.com/bingran-you" },
  { label: "X / Twitter", href: "https://x.com/bingran_bry", display: "@bingran_bry" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en", display: "Google Scholar" },
  { label: "ORCID", href: "https://orcid.org/0000-0002-0316-2115", display: "0000-0002-0316-2115" },
  { label: "Hugging Face", href: "https://huggingface.co/bingran-you", display: "huggingface.co/bingran-you" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bingran-you-775b4017b/", display: "LinkedIn" },
  { label: "YouTube", href: "https://www.youtube.com/@BingranBRY", display: "@BingranBRY" },
  { label: "Bilibili", href: "https://space.bilibili.com/85906410", display: "Bilibili" },
  { label: "Xiaohongshu", href: "https://xhslink.com/m/gFj0Vwr2Ak", display: "Xiaohongshu" },
  { label: "Discord", href: "https://discord.gg/jsAnjCep", display: "discord.gg/jsAnjCep" },
] as const;

export type BlogPostSummary = {
  slug: string;
  title: string;
  description?: string;
  date: string;
};

export type SocialPostSummary = {
  id: string;
  platform: string;
  platformLabel: string;
  url: string;
  title?: string;
  description?: string;
  date: string;
};

export async function getPalaceData() {
  const blogPosts = (await getAllPostsMetadata()).map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.date,
  })) satisfies BlogPostSummary[];

  const socialPosts = (await getAllSocialPosts()).slice(0, 24).map((p) => ({
    id: p.id,
    platform: p.platform,
    platformLabel: PLATFORM_LABEL[p.platform],
    url: p.url,
    title: p.title,
    description: p.description,
    date: p.date,
  })) satisfies SocialPostSummary[];

  return {
    projects,
    papers,
    education,
    about: { facts: [...ABOUT_FACTS], focus: FOCUS_AREAS.map((f) => ({ label: f.label, items: [...f.items] })) },
    contact: CONTACT_LINKS.map((c) => ({ ...c })),
    blogPosts,
    socialPosts,
  };
}

export type PalaceData = Awaited<ReturnType<typeof getPalaceData>>;
