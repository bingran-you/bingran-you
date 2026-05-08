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

function matchesQuery(skill: Skill, q: string): boolean {
  if (!q) return true;
  return (
    skill.name.toLowerCase().includes(q) ||
    skill.slug.toLowerCase().includes(q) ||
    skill.description.toLowerCase().includes(q) ||
    (skill.triggers?.some((t) => t.toLowerCase().includes(q)) ?? false)
  );
}

export function buildSkillsViewModel(
  skills: Skill[],
  categories: SkillCategory[],
  state: SkillsFilterState,
): SkillsViewModel {
  const q = state.query.trim().toLowerCase();
  const queryMatches = q ? skills.filter((s) => matchesQuery(s, q)) : skills;
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
      q && state.activeCategory !== "All" ? queryMatches.length : 0,
  };
}
