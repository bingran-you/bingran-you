import type { Skill, SkillCategory } from "./skills";

export type SkillsFilterState = {
  query: string;
  activeCategory: SkillCategory | "All";
};

export type SkillsViewModel = {
  totalCount: number;
  categoryCounts: Map<SkillCategory, number>;
  groups: Array<[SkillCategory, Skill[]]>;
  isEmpty: boolean;
  queryMatchesAcrossCategories: number;
};

function matchesToken(skill: Skill, token: string): boolean {
  return (
    skill.name.toLowerCase().includes(token) ||
    skill.slug.toLowerCase().includes(token) ||
    skill.description.toLowerCase().includes(token) ||
    (skill.triggers?.some((t) => t.toLowerCase().includes(token)) ?? false)
  );
}

function matchesQuery(skill: Skill, tokens: string[]): boolean {
  // AND semantics: every whitespace-separated token must hit some field on the
  // card. This makes "memory palace" find a skill with slug "memory-palace"
  // (token "memory" hits the slug, token "palace" hits the slug too) instead
  // of trying to match the literal substring "memory palace" which doesn't
  // exist anywhere.
  return tokens.every((t) => matchesToken(skill, t));
}

export function buildSkillsViewModel(
  skills: Skill[],
  categories: SkillCategory[],
  state: SkillsFilterState,
): SkillsViewModel {
  const tokens = state.query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 0);
  const queryMatches = tokens.length
    ? skills.filter((s) => matchesQuery(s, tokens))
    : skills;
  const filtered =
    state.activeCategory === "All"
      ? queryMatches
      : queryMatches.filter((s) => s.category === state.activeCategory);

  const buckets = new Map<SkillCategory, Skill[]>();
  for (const cat of categories) buckets.set(cat, []);
  for (const s of filtered) {
    if (!buckets.has(s.category)) buckets.set(s.category, []);
    buckets.get(s.category)!.push(s);
  }
  const groups = Array.from(buckets.entries()).filter(
    ([, list]) => list.length > 0,
  );

  const categoryCounts = new Map<SkillCategory, number>();
  for (const cat of categories) categoryCounts.set(cat, 0);
  for (const s of skills) {
    categoryCounts.set(s.category, (categoryCounts.get(s.category) ?? 0) + 1);
  }

  return {
    totalCount: skills.length,
    categoryCounts,
    groups,
    isEmpty: filtered.length === 0,
    queryMatchesAcrossCategories:
      tokens.length && state.activeCategory !== "All"
        ? queryMatches.length
        : 0,
  };
}
