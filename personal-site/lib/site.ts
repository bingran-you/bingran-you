export const SITE_URL = "https://bingran.ai";
export const SITE_HOST = "bingran.ai";

export const PERSON = {
  name: "Bingran You",
  position: "PhD Candidate in Applied Science & Technology at UC Berkeley",
  field: "Applied Science & Technology",
  location: "Berkeley, CA",
  email: "me@bingranyou.com",
  portrait: "/images/profile/bingran-you-portrait.jpg",
} as const;

/** Where Bingran works now. */
export const AFFILIATIONS = [
  { name: "Haeffner Lab, UC Berkeley", href: "https://ions.berkeley.edu/" },
  { name: "BenchFlow", href: "https://www.benchflow.ai/" },
] as const;

/** One line for link previews: position and affiliations. */
export const PERSON_SUMMARY = [
  PERSON.position,
  ...AFFILIATIONS.map((affiliation) => affiliation.name),
].join(" · ");

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/palace", label: "Palace" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
] as const;

export const SOCIALS = [
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
] as const;
