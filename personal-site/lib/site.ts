export const SITE_URL = "https://bingran.ai";
export const SITE_HOST = "bingran.ai";

export const PERSON = {
  name: "Bingran You",
  position: "PhD Candidate at UC Berkeley",
  field: "Applied Science & Technology",
  location: "Berkeley, CA",
  email: "me@bingranyou.com",
  portrait: "/images/profile/bingran-you-portrait.jpg",
  /** Bingran's own opening line on GitHub (the repository-root README.md). */
  bio: "I build reliable AI systems and run trapped-ion experiments in atomic, molecular and optical physics.",
} as const;

/** Where Bingran works now. */
export const AFFILIATIONS = [
  { name: "Co-Founder of BenchFlow", href: "https://benchflow.ai/" },
  {
    name: "Ion Trapper in Haeffner Lab, UC Berkeley",
    href: "https://ions.berkeley.edu/",
  },
] as const;

/** One line for link previews: position and affiliations. */
export const PERSON_SUMMARY = [
  ...AFFILIATIONS.map((affiliation) => affiliation.name),
  PERSON.position,
].join(" · ");

export const SOCIALS = [
  { label: "X", href: "https://x.com/bingran_bry" },
  { label: "Xiaohongshu", href: "https://xhslink.com/m/gFj0Vwr2Ak" },
  { label: "Instagram", href: "https://www.instagram.com/bingran_you/" },
  { label: "YouTube", href: "https://www.youtube.com/@BingranBRY" },
  { label: "Bilibili", href: "https://space.bilibili.com/85906410" },
  { label: "Discord", href: "https://discord.gg/x2KYk4FVS" },
  { label: "GitHub", href: "https://github.com/bingran-you" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en",
  },
  { label: "ORCID", href: "https://orcid.org/0000-0002-0316-2115" },
  { label: "Hugging Face", href: "https://huggingface.co/bingran-you" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bingran-you/" },
] as const;
