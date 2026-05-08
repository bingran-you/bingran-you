import skillsData from "./skills.generated.json";

export type SkillSource = {
  collection: string;
  author: string;
  repoPath: string;
  githubUrl?: string;
};

export type SkillLicense = {
  name: string;
  text: string;
};

type RawSkill = {
  slug: string;
  name: string;
  description: string;
  triggers?: string[];
  updatedAt: string;
  bodyHtml: string;
  bodyChars: number;
  license?: SkillLicense;
  source: SkillSource;
  downloadUrl: string;
};

export type Skill = RawSkill & { category: SkillCategory };

export const SKILL_CATEGORIES = [
  "Marketing & Growth",
  "Design Systems",
  "Slides & Decks",
  "Apps & Web",
  "Documents",
  "Browser & Testing",
  "Engineering",
  "Reviews & Plans",
  "Security",
  "Research & Analysis",
  "Media",
  "Other",
] as const;

export type SkillCategory = (typeof SKILL_CATEGORIES)[number];

export function inferCategory(slug: string): SkillCategory {
  if (
    slug.startsWith("html-ppt") ||
    /^(simple-deck|replit-deck|frontend-slides|weekly-update|guizang-ppt|magazine-poster|pptx-html-fidelity-audit|social-carousel)$/.test(
      slug,
    )
  ) {
    return "Slides & Decks";
  }

  if (
    /^(docx|pdf|pptx|xlsx|jupyter-notebook|blog-post|digital-eguide|finance-report|hr-onboarding|invoice|landing-report|make-pdf|meeting-notes|pm-spec|team-okrs|eng-runbook|document-release)$/.test(
      slug,
    )
  ) {
    return "Documents";
  }

  if (
    slug.startsWith("web-prototype") ||
    /^(dashboard|dating-web|gamified-app|mobile-app|mobile-onboarding|kanban-board|pricing-page|docs-page|saas-landing|web-artifacts-builder|email-marketing|sprite-animation|wireframe-sketch|tweaks)$/.test(
      slug,
    )
  ) {
    return "Apps & Web";
  }

  if (
    slug.startsWith("playwright") ||
    /^(browse|gstack|gstack-upgrade|webapp-testing|scrape|hackernews-frontpage|screenshot|setup-browser-cookies|connect-chrome|open-gstack-browser|canary|benchmark|benchmark-models|qa|qa-only|skillify)$/.test(
      slug,
    )
  ) {
    return "Browser & Testing";
  }

  if (
    /^(audio-jingle|video|video-shortform|image|image-poster|hyperframes|motion-frames)$/.test(
      slug,
    )
  ) {
    return "Media";
  }

  if (
    /^(critique|design-review|devex-review|plan-ceo-review|plan-design-review|plan-devex-review|plan-eng-review|plan-tune|review|autoplan|office-hours|gstack-openclaw-ceo-review|gstack-openclaw-office-hours|gstack-openclaw-investigate|gstack-openclaw-retro|retro|investigate|learn)$/.test(
      slug,
    )
  ) {
    return "Reviews & Plans";
  }

  if (
    /^(security-best-practices|security-ownership-map|security-threat-model|cso|skill-vetter)$/.test(
      slug,
    )
  ) {
    return "Security";
  }

  if (/^(deep-research|equity-investment-memo)$/.test(slug)) {
    return "Research & Analysis";
  }

  if (
    /^(design-brief|design-consultation|design-html|design-shotgun|frontend-design|theme-factory)$/.test(
      slug,
    )
  ) {
    return "Design Systems";
  }

  if (
    /^(ad-creative|ai-seo|analytics-tracking|aso-audit|churn-prevention|cold-email|community-marketing|competitor-alternatives|competitor-profiling|content-strategy|copy-editing|copywriting|customer-research|directory-submissions|email-sequence|free-tool-strategy|lead-magnets|launch-strategy|marketing-ideas|marketing-psychology|page-cro|paid-ads|paywall-upgrade-cro|popup-cro|programmatic-seo|referral-program|revops|sales-enablement|schema-markup|seo-audit|signup-flow-cro|social-content|ab-test-setup|form-cro|onboarding-cro|pricing-strategy|product-marketing-context|xiaohongshu-knowledge|site-architecture)$/.test(
      slug,
    )
  ) {
    return "Marketing & Growth";
  }

  if (
    /^(careful|freeze|unfreeze|guard|ship|land-and-deploy|vercel-deploy|setup-deploy|setup-gbrain|gh-address-comments|gh-fix-ci|cli-creator|codex|plugin-creator|skill-creator|skill-installer|mcp-builder|simplify|fewer-permission-prompts|update-config|keybindings-help|loop|schedule|context-save|context-restore|hatch-pet|health|pair-agent)$/.test(
      slug,
    )
  ) {
    return "Engineering";
  }

  return "Other";
}

let cached: Skill[] | null = null;

export function getAllSkills(): Skill[] {
  if (cached) return cached;
  const raw = skillsData as RawSkill[];
  const skills: Skill[] = raw.map((s) => ({
    ...s,
    category: inferCategory(s.slug),
  }));
  skills.sort((a, b) => a.name.localeCompare(b.name));
  cached = skills;
  return cached;
}

export function getSkill(slug: string): Skill | null {
  return getAllSkills().find((s) => s.slug === slug) ?? null;
}

export function getSkillsLastModified(): Date {
  const skills = getAllSkills();
  if (skills.length === 0) return new Date();
  const max = skills.reduce((acc, s) => {
    const t = new Date(s.updatedAt).getTime();
    return t > acc ? t : acc;
  }, 0);
  return new Date(max);
}

export function groupByCategory(skills: Skill[]): Map<SkillCategory, Skill[]> {
  const map = new Map<SkillCategory, Skill[]>();
  for (const cat of SKILL_CATEGORIES) map.set(cat, []);
  for (const skill of skills) {
    map.get(skill.category)?.push(skill);
  }
  for (const cat of SKILL_CATEGORIES) {
    if (map.get(cat)?.length === 0) map.delete(cat);
  }
  return map;
}
