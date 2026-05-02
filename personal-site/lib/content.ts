export type Project = {
  name: string;
  href: string;
  description: string;
  emoji: string;
  track: "ai" | "ion";
};

export type Paper = {
  title: string;
  href: string;
  blurb?: string;
  track: "ai" | "ion";
};

export type Education = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  summary: string;
  metrics?: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    name: "SkillsBench",
    href: "https://github.com/benchflow-ai/skillsbench",
    description: "A benchmark for evaluating how well AI agents use skills.",
    emoji: "📐",
    track: "ai",
  },
  {
    name: "first-tree",
    href: "https://github.com/agent-team-foundation/first-tree",
    description:
      "A Git-native context layer for decisions, ownership, and shared team knowledge.",
    emoji: "🌲",
    track: "ai",
  },
  {
    name: "DoWhiz",
    href: "https://github.com/KnoWhiz/DoWhiz",
    description:
      "Agent-native product for getting work done across email, chat, documents, and related tools.",
    emoji: "🥷",
    track: "ai",
  },
  {
    name: "DeepTutor",
    href: "https://deeptutor.knowhiz.us/",
    description:
      "An AI research assistant built on Zotero for cited answers, figure and formula understanding, and multi-paper comparison.",
    emoji: "🧠",
    track: "ai",
  },
  {
    name: "smolclaw",
    href: "https://github.com/bingran-you/smolclaw",
    description:
      "Seeded mock environments for testing agent behavior in realistic workflows.",
    emoji: "🦞",
    track: "ai",
  },
  {
    name: "SBTI CLI",
    href: "https://github.com/bingran-you/sbti-cli",
    description:
      "An offline CLI for testing agent behavior with bundled logic and exportable results.",
    emoji: "😜",
    track: "ai",
  },
  {
    name: "bem",
    href: "https://github.com/HaeffnerLab/bem",
    description:
      "Scientific computing code for boundary element and fast multipole methods in Python.",
    emoji: "💻",
    track: "ion",
  },
  {
    name: "artiq_photonics_integration",
    href: "https://github.com/HaeffnerLab/artiq_photonics_integration",
    description:
      "An ARTIQ control framework for photonics integration experiments.",
    emoji: "🦾",
    track: "ion",
  },
];

export const papers: Paper[] = [
  {
    title:
      "ClawsBench: Evaluating Capability and Safety of LLM Productivity Agents in Simulated Workspaces",
    href: "https://arxiv.org/abs/2604.05172",
    track: "ai",
  },
  {
    title: "SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks",
    href: "https://arxiv.org/abs/2602.12670",
    track: "ai",
  },
  {
    title:
      "Individual trapped-ion addressing with adjoint-optimized multimode photonic circuits",
    href: "https://www.nature.com/articles/s44310-025-00102-4",
    blurb: "Integrated photonic circuits for scalable trapped-ion addressing.",
    track: "ion",
  },
  {
    title:
      "Temporally multiplexed ion-photon quantum interface via fast ion-chain transport",
    href: "https://arxiv.org/abs/2405.10501",
    blurb:
      "Multiplexed ion-photon interface based on fast ion-chain transport.",
    track: "ion",
  },
  {
    title:
      "3D-Printed Micro Ion Trap Technology for Scalable Quantum Information Processing",
    href: "https://www.nature.com/articles/s41586-025-09474-1",
    blurb:
      "3D-printed micro ion trap technology for scalable quantum information processing.",
    track: "ion",
  },
  {
    title:
      "Test of Causal Non-Linear Quantum Mechanics by Ramsey Interferometry on the Vibrational Mode of a Trapped Ion",
    href: "https://doi.org/10.1103/PhysRevLett.130.200201",
    blurb:
      "Trapped-ion Ramsey interferometry probing causal non-linear quantum mechanics.",
    track: "ion",
  },
];

export const education: Education[] = [
  {
    institution: "University of California, Berkeley",
    location: "Berkeley, California",
    degree: "PhD Candidate in Applied Science & Technology",
    period: "2022 — Present",
    summary:
      "Graduate research spanning trapped-ion quantum systems, integrated photonics, ion-photon interfaces, and quantum networking.",
    metrics: ["Haeffner Lab"],
    highlights: [
      "Research focus on scalable trapped-ion hardware and photonic integration.",
      "Builds experimental systems that connect precision physics with dependable engineering.",
    ],
  },
  {
    institution: "University of Chinese Academy of Sciences",
    location: "Beijing, China",
    degree: "BS in Physics, Minor in Computer Science",
    period: "2018 — 2022",
    summary:
      "Undergraduate training in physics with a strong computational foundation across mathematics, programming, and scientific problem solving.",
    metrics: ["GPA 3.95 / 4.00", "Rank 1 / 54"],
    highlights: [
      "Graduated at the top of the cohort in physics.",
      "Built an early bridge between physical systems work and software-driven experimentation.",
    ],
  },
];
