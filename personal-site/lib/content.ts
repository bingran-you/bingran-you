import paperDetails from "@/content/papers/details.json";

export type Track = "ai" | "ion";

export const TRACK_LABEL: Record<Track, string> = {
  ai: "Agentic Builder",
  ion: "Ion Trapper",
};

// Site copy rule: nothing here is written for the site. Every description,
// abstract, caption and table is the project's or the paper's own wording.

export type Project = {
  name: string;
  href: string;
  repoHref?: string;
  /** Verbatim from the project's own site or repository. */
  description: string;
  emoji: string;
  track: Track;
};

export type PaperReference =
  | {
      kind: "journal";
      journal: string;
      volume: string;
      pages: string;
      year: number;
    }
  | { kind: "conference"; name: string; year: number }
  | { kind: "preprint"; year: number };

export type Paper = {
  /** Key into content/papers/details.json and public/papers/. */
  slug: PaperSlug;
  title: string;
  href: string;
  /** Short tag shown beside the title, e.g. "NeurIPS 2026". */
  venue: string;
  /** Reference-style author list. */
  authors: string;
  reference: PaperReference;
  arxiv: string;
  track: Track;
};

export type TableCell = {
  html: string;
  align?: "center" | "right";
  colSpan?: number;
  rowSpan?: number;
  header?: boolean;
};

export type TableRow = { rule: boolean; cells: TableCell[] };

/**
 * Text and figures copied verbatim from a paper's arXiv version by a script.
 * `abstract`, the captions and the table cells are inline HTML limited to
 * <i>, <b>, <sup>, <sub> and <code>.
 */
export type PaperDetail = {
  source: string;
  license: string | null;
  abstract: string[];
  figure: {
    src: string;
    width: number;
    height: number;
    /** Width of the figure on the published page, in points. */
    printWidth: number;
    sourceLabel: string;
    caption: string;
  };
  table?: {
    sourceLabel: string;
    /** Width of the table on the published page, in points. */
    printWidth: number;
    caption: string;
    head: TableRow[];
    body: TableRow[];
  };
};

export type PaperSlug = keyof typeof paperDetails;

export function getPaperDetail(slug: PaperSlug): PaperDetail {
  return paperDetails[slug] as PaperDetail;
}

export type Education = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  metrics?: string[];
};

export const projects: Project[] = [
  {
    name: "FrontierPhysics",
    href: "https://www.benchflow.ai/frontierphysics",
    description:
      "FrontierPhysics is an open benchmark measuring whether AI agents can carry out authentic, specialist-level physics research.",
    emoji: "⚛️",
    track: "ai",
  },
  {
    name: "BenchFlow",
    href: "https://www.benchflow.ai/",
    description:
      "BenchFlow is a frontier environment lab. We build the environments AI agents learn in. We ship SkillsBench, ClawsBench, PostTrain, and the runtime.",
    emoji: "🌊",
    track: "ai",
  },
  {
    name: "SkillsBench",
    href: "https://github.com/benchflow-ai/skillsbench",
    description:
      "SkillsBench evaluates how well skills work and how effective agents are at using them.",
    emoji: "📐",
    track: "ai",
  },
  {
    name: "first-tree",
    href: "https://first-tree.ai/",
    repoHref: "https://github.com/first-tree-ai/first-tree",
    description:
      "Open-source agent orchestration for engineers. Put Claude Code, Codex, Cursor and your own agents on one backlog — parallel runs on your keys, review before merge, everything lands as a pull request.",
    emoji: "🌲",
    track: "ai",
  },
  {
    name: "DeepTutor",
    href: "https://github.com/KnoWhiz/DeepTutorZotero",
    description:
      "DeepTutorZotero is a research sources manager based on Zotero, with amazing AI capability powered by DeepTutor.",
    emoji: "🧠",
    track: "ai",
  },
  {
    name: "mews",
    href: "https://github.com/bingran-you/mews",
    description: "Represent you to finish all the work, when you are sleeping.",
    emoji: "🐈",
    track: "ai",
  },
  {
    name: "smolclaw",
    href: "https://github.com/bingran-you/smolclaw",
    description:
      "High resolution mock environments for testing and improving claw like agents",
    emoji: "🦞",
    track: "ai",
  },
  {
    name: "SBTI CLI",
    href: "https://github.com/bingran-you/sbti-cli",
    description: "SBTI CLI - Test SBTI for your agents.",
    emoji: "😜",
    track: "ai",
  },
  {
    name: "bem",
    href: "https://github.com/HaeffnerLab/bem",
    description:
      "triangulation, boundary element method (BEM), fast multipole method (FMM) code for python",
    emoji: "💻",
    track: "ion",
  },
  {
    name: "artiq_photonics_integration",
    href: "https://github.com/HaeffnerLab/artiq_photonics_integration",
    description: "ARTIQ Control Framework (ACF) of Photonics Integration",
    emoji: "🦾",
    track: "ion",
  },
];

export const papers: Paper[] = [
  {
    slug: "skillsbench",
    title:
      "SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks",
    href: "https://arxiv.org/abs/2602.12670",
    venue: "NeurIPS 2026",
    authors: "Li, X., Liu, Y., Chen, W., You, B. et al.",
    reference: { kind: "conference", name: "NeurIPS", year: 2026 },
    arxiv: "2602.12670",
    track: "ai",
  },
  {
    slug: "clawsbench",
    title:
      "ClawsBench: Evaluating Capability and Safety of LLM Productivity Agents in Simulated Workspaces",
    href: "https://arxiv.org/abs/2604.05172",
    venue: "COLM 2026",
    authors: "Li, X., Choe, K. W., Liu, Y., Chen, X., Tao, C., You, B. et al.",
    reference: { kind: "conference", name: "COLM", year: 2026 },
    arxiv: "2604.05172",
    track: "ai",
  },
  {
    slug: "benchshield",
    title:
      "BenchShield: Formal Model-Backed Instrumentation for Reward Integrity in LLM-Agent Evaluation Infrastructure",
    href: "https://arxiv.org/abs/2609.11028",
    venue: "arXiv",
    authors: "Zheng, S., Di, Z., Liu, Y., …, You, B. et al.",
    reference: { kind: "preprint", year: 2026 },
    arxiv: "2609.11028",
    track: "ai",
  },
  {
    slug: "printed-trap",
    title:
      "3D-printed micro ion trap technology for quantum information applications",
    href: "https://www.nature.com/articles/s41586-025-09474-1",
    venue: "Nature",
    authors:
      "Xu, S., Xia, X., Yu, Q., Parakh, A., Khan, S., Megidish, E., You, B. et al.",
    reference: {
      kind: "journal",
      journal: "Nature",
      volume: "645",
      pages: "362–368",
      year: 2025,
    },
    arxiv: "2310.00595",
    track: "ion",
  },
  {
    slug: "ramsey",
    title:
      "Test of Causal Nonlinear Quantum Mechanics by Ramsey Interferometry with a Trapped Ion",
    href: "https://doi.org/10.1103/PhysRevLett.130.200201",
    venue: "Phys. Rev. Lett.",
    authors:
      "Broz, J., You, B., Khan, S., Häffner, H., Kaplan, D. E. & Rajendran, S.",
    reference: {
      kind: "journal",
      journal: "Phys. Rev. Lett.",
      volume: "130",
      pages: "200201",
      year: 2023,
    },
    arxiv: "2206.12976",
    track: "ion",
  },
  {
    slug: "multiplexed",
    title:
      "Temporally multiplexed ion-photon quantum interface via fast ion-chain transport",
    href: "https://doi.org/10.1103/ppm8-8kx5",
    venue: "Phys. Rev. Applied",
    authors:
      "You, B., Wu, Q., Miron, D., Ke, W., Monga, I., Saglamyurek, E. & Haeffner, H.",
    reference: {
      kind: "journal",
      journal: "Phys. Rev. Appl.",
      volume: "26",
      pages: "014101",
      year: 2026,
    },
    arxiv: "2405.10501",
    track: "ion",
  },
  {
    slug: "adjoint",
    title:
      "Individual trapped-ion addressing with adjoint-optimized multimode photonic circuits",
    href: "https://www.nature.com/articles/s44310-025-00102-4",
    venue: "npj Nanophotonics",
    authors:
      "Momenzadeh, M., Sun, K., Wu, Q., You, B., Tang, Y.-L., Häffner, H. & Shcherbakov, M. R.",
    reference: {
      kind: "journal",
      journal: "npj Nanophotonics",
      volume: "3",
      pages: "3",
      year: 2026,
    },
    arxiv: "2505.08997",
    track: "ion",
  },
  {
    slug: "broadband",
    title:
      "A broadband, individually addressing two- and three-dimensional photonic integrated circuit for trapped-ion qubit control",
    href: "https://arxiv.org/abs/2607.25062",
    venue: "arXiv",
    authors: "Klawson, D., Zhi, Y., You, B. et al.",
    reference: { kind: "preprint", year: 2026 },
    arxiv: "2607.25062",
    track: "ion",
  },
];

export const education: Education[] = [
  {
    institution: "University of California, Berkeley",
    location: "Berkeley, California",
    degree: "PhD Candidate in Applied Science & Technology",
    period: "2022 — Present",
    metrics: ["Haeffner Lab"],
  },
  {
    institution: "University of Chinese Academy of Sciences",
    location: "Beijing, China",
    degree: "BS in Physics, Minor in Computer Science",
    period: "2018 — 2022",
    metrics: ["GPA 3.95 / 4.00", "Rank 1 / 54"],
  },
];
