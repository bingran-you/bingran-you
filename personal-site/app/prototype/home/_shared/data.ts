// PROTOTYPE — content shared by the home-page design variants.
//
// Everything here is copy the site already publishes (lib/content, /about, the
// palace About window, the profile README) plus bibliographic facts for the
// papers, so the variants differ in design and never in claims.

import {
  education,
  getAiPaperHighlights,
  getAiProjectHighlights,
  papers as catalogPapers,
  projects,
  type Paper,
} from "@/lib/content";

export const person = {
  name: "Bingran You",
  givenName: "Bingran",
  familyName: "You",
  roles: ["Agentic Builder", "Ion Trapper"],
  position: "PhD Candidate in Applied Science & Technology at UC Berkeley",
  degree: "PhD Candidate in Applied Science & Technology",
  school: "UC Berkeley",
  lab: "Haeffner Lab",
  location: "Berkeley, CA",
  email: "me@bingranyou.com",
  portrait: "/images/profile/bingran-you-portrait.jpg",
  summary:
    "I build reliable AI systems and run trapped-ion experiments in atomic, molecular and optical physics.",
  // Verbatim from the /about page.
  about: [
    "I build reliable AI systems — agent infrastructure, evaluation harnesses, and applied AI products that need to behave under noisy real-world conditions.",
    "I run trapped-ion experiments in atomic, molecular and optical physics — integrated photonics for individual ion addressing, ion-photon interfaces, and 3D-printed micro ion traps for scalable hardware.",
  ],
  tracks: {
    ai: {
      role: "Agentic Builder",
      blurb:
        "Agent evaluation, skills-based benchmarking, and deterministic test environments for long-horizon workflows.",
    },
    ion: {
      role: "Ion Trapper",
      blurb:
        "Trapped-ion experiments in atomic, molecular and optical physics: integrated photonics, ion-photon interfaces, and 3D-printed microtraps.",
    },
  },
} as const;

export const nav = [
  { href: "/palace", label: "Palace" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
] as const;

export const socials = [
  { label: "X", href: "https://x.com/bingran_bry" },
  { label: "Xiaohongshu", href: "https://xhslink.com/m/gFj0Vwr2Ak" },
  { label: "YouTube", href: "https://www.youtube.com/@BingranBRY" },
  { label: "Bilibili", href: "https://space.bilibili.com/85906410" },
  { label: "Discord", href: "https://discord.gg/jsAnjCep" },
  { label: "GitHub", href: "https://github.com/bingran-you" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en",
  },
  { label: "ORCID", href: "https://orcid.org/0000-0002-0316-2115" },
  { label: "Hugging Face", href: "https://huggingface.co/bingran-you" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bingran-you/" },
  { label: "Email", href: "mailto:me@bingranyou.com" },
] as const;

type PaperDetail = {
  year: number;
  /** Author list as it would appear in a reference, abbreviated. */
  authors: string;
  /** Journal reference or arXiv identifier, e.g. "Nature 645, 362 (2025)". */
  reference: string;
};

const paperDetails: Record<string, PaperDetail> = {
  "https://arxiv.org/abs/2602.12670": {
    year: 2026,
    authors: "X. Li, Y. Liu, W. Chen, B. You, et al.",
    reference: "NeurIPS (2026), arXiv:2602.12670",
  },
  "https://arxiv.org/abs/2604.05172": {
    year: 2026,
    authors: "X. Li, K. W. Choe, Y. Liu, X. Chen, C. Tao, B. You, et al.",
    reference: "COLM (2026), arXiv:2604.05172",
  },
  "https://arxiv.org/abs/2609.11028": {
    year: 2026,
    authors: "S. Zheng, Z. Di, Y. Liu, …, B. You, et al.",
    reference: "arXiv:2609.11028 (2026)",
  },
  "https://www.nature.com/articles/s41586-025-09474-1": {
    year: 2025,
    authors:
      "S. Xu, X. Xia, Q. Yu, A. Parakh, S. Khan, E. Megidish, B. You, et al.",
    reference: "Nature 645, 362 (2025)",
  },
  "https://doi.org/10.1103/PhysRevLett.130.200201": {
    year: 2023,
    authors:
      "J. Broz, B. You, S. Khan, H. Häffner, D. E. Kaplan, and S. Rajendran",
    reference: "Phys. Rev. Lett. 130, 200201 (2023)",
  },
  "https://doi.org/10.1103/ppm8-8kx5": {
    year: 2026,
    authors:
      "B. You, Q. Wu, D. Miron, W. Ke, I. Monga, E. Saglamyurek, and H. Haeffner",
    reference: "Phys. Rev. Applied 26, 014101 (2026)",
  },
  "https://www.nature.com/articles/s44310-025-00102-4": {
    year: 2026,
    authors:
      "M. Momenzadeh, K. Sun, Q. Wu, B. You, Y.-L. Tang, H. Häffner, and M. R. Shcherbakov",
    reference: "npj Nanophotonics 3, 3 (2026)",
  },
  "https://arxiv.org/abs/2607.25062": {
    year: 2026,
    authors: "D. Klawson, Y. Zhi, B. You, et al.",
    reference: "arXiv:2607.25062 (2026)",
  },
};

export type DetailedPaper = Paper & PaperDetail;

function withDetail(paper: Paper): DetailedPaper {
  return { ...paper, ...paperDetails[paper.href] };
}

/** All eight papers, agent track first, in catalog order. */
export const papers = catalogPapers.map(withDetail);
export const aiPapers = papers.filter((p) => p.track === "ai");
export const ionPapers = papers.filter((p) => p.track === "ion");

/** What the live home page shows today. */
export const currentProjects = getAiProjectHighlights();
export const selectedPapers = getAiPaperHighlights().map(withDetail);

export const aiProjects = projects.filter((p) => p.track === "ai");
export const ionProjects = projects.filter((p) => p.track === "ion");

export { education, projects };

/** "https://www.benchflow.ai/" → "benchflow.ai" */
export function displayUrl(href: string): string {
  return href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
