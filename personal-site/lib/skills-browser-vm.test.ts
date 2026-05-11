import { describe, expect, it } from "vitest";
import type { Skill, SkillCategory } from "./skills";
import { buildSkillsViewModel } from "./skills-browser-vm";

function makeSkill(overrides: {
  slug: string;
  category: SkillCategory;
  name?: string;
  description?: string;
  triggers?: string[];
}): Skill {
  return {
    slug: overrides.slug,
    name: overrides.name ?? overrides.slug,
    description: overrides.description ?? "",
    triggers: overrides.triggers,
    updatedAt: "2024-01-01T00:00:00Z",
    bodyHtml: "",
    bodyChars: 0,
    source: { collection: "test", author: "test", repoPath: overrides.slug },
    downloadUrl: `/skill-files/${overrides.slug}.md`,
    category: overrides.category,
  };
}

const fixtures: Skill[] = [
  makeSkill({ slug: "html-ppt", category: "Slides & Decks", name: "HTML PPT" }),
  makeSkill({
    slug: "frontend-slides",
    category: "Slides & Decks",
    name: "Frontend Slides",
    description: "stunning animation rich slides",
  }),
  makeSkill({
    slug: "playwright",
    category: "Browser & Testing",
    name: "Playwright",
    triggers: ["browser", "automation"],
  }),
  makeSkill({
    slug: "deep-research",
    category: "Research & Analysis",
    name: "Deep Research",
    description: "research benchmark",
  }),
];

const allCategories: SkillCategory[] = [
  "Slides & Decks",
  "Browser & Testing",
  "Research & Analysis",
];

describe("buildSkillsViewModel", () => {
  it("returns all skills with empty query and All category", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "",
      activeCategory: "All",
    });
    expect(vm.totalCount).toBe(4);
    expect(vm.isEmpty).toBe(false);
    expect(vm.queryMatchesAcrossCategories).toBe(0);
    expect(vm.groups.map(([cat]) => cat)).toEqual([
      "Slides & Decks",
      "Browser & Testing",
      "Research & Analysis",
    ]);
    expect(vm.groups[0][1]).toHaveLength(2);
  });

  it("preserves categories ordering even when only some have results", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "playwright",
      activeCategory: "All",
    });
    expect(vm.groups).toHaveLength(1);
    expect(vm.groups[0][0]).toBe("Browser & Testing");
  });

  it("filters by name", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "Playwright",
      activeCategory: "All",
    });
    expect(vm.isEmpty).toBe(false);
    const flat = vm.groups.flatMap(([, list]) => list);
    expect(flat).toHaveLength(1);
    expect(flat[0].slug).toBe("playwright");
  });

  it("filters by slug", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "html-ppt",
      activeCategory: "All",
    });
    const flat = vm.groups.flatMap(([, list]) => list);
    expect(flat.map((s) => s.slug)).toEqual(["html-ppt"]);
  });

  it("filters by description", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "stunning",
      activeCategory: "All",
    });
    const flat = vm.groups.flatMap(([, list]) => list);
    expect(flat.map((s) => s.slug)).toEqual(["frontend-slides"]);
  });

  it("filters by trigger", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "automation",
      activeCategory: "All",
    });
    const flat = vm.groups.flatMap(([, list]) => list);
    expect(flat.map((s) => s.slug)).toEqual(["playwright"]);
  });

  it("trims and lowercases query", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "  PLAYWRIGHT  ",
      activeCategory: "All",
    });
    const flat = vm.groups.flatMap(([, list]) => list);
    expect(flat.map((s) => s.slug)).toEqual(["playwright"]);
  });

  it("splits the query on whitespace so users can type a hyphenated slug naturally", () => {
    // "memory palace" must find a skill slugged "memory-palace" — the literal
    // substring "memory palace" doesn't exist anywhere.
    const palaceFixtures: Skill[] = [
      ...fixtures,
      makeSkill({
        slug: "memory-palace",
        category: "Other",
        name: "memory-palace",
        description: "Apply Henry Heffernan's portfolio template.",
      }),
    ];
    const vm = buildSkillsViewModel(palaceFixtures, allCategories, {
      query: "memory palace",
      activeCategory: "All",
    });
    const flat = vm.groups.flatMap(([, list]) => list);
    expect(flat.map((s) => s.slug)).toEqual(["memory-palace"]);
  });

  it("AND-combines tokens across different fields", () => {
    // "henry frontend" matches frontend-slides by name AND a skill whose
    // description mentions Henry — only the skill that hits BOTH should win.
    const mixed: Skill[] = [
      makeSkill({
        slug: "frontend-slides",
        category: "Slides & Decks",
        name: "Frontend Slides",
        description: "stunning animation rich slides",
      }),
      makeSkill({
        slug: "henry-template",
        category: "Other",
        name: "henry-template",
        description: "frontend portfolio template",
      }),
      makeSkill({
        slug: "playwright",
        category: "Browser & Testing",
        name: "Playwright",
        description: "browser automation",
      }),
    ];
    const vm = buildSkillsViewModel(mixed, allCategories, {
      query: "henry frontend",
      activeCategory: "All",
    });
    const flat = vm.groups.flatMap(([, list]) => list);
    expect(flat.map((s) => s.slug)).toEqual(["henry-template"]);
  });

  it("collapses multiple internal whitespace runs", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "  deep    research  ",
      activeCategory: "All",
    });
    const flat = vm.groups.flatMap(([, list]) => list);
    expect(flat.map((s) => s.slug)).toEqual(["deep-research"]);
  });

  it("restricts to active category", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "",
      activeCategory: "Slides & Decks",
    });
    expect(vm.groups).toHaveLength(1);
    expect(vm.groups[0][1]).toHaveLength(2);
  });

  it("reports queryMatchesAcrossCategories when query has hits outside active category", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "playwright",
      activeCategory: "Slides & Decks",
    });
    expect(vm.isEmpty).toBe(true);
    expect(vm.queryMatchesAcrossCategories).toBe(1);
  });

  it("reports queryMatchesAcrossCategories=0 when active category is All", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "playwright",
      activeCategory: "All",
    });
    expect(vm.queryMatchesAcrossCategories).toBe(0);
  });

  it("returns isEmpty with no matches anywhere", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "no-such-thing",
      activeCategory: "All",
    });
    expect(vm.isEmpty).toBe(true);
    expect(vm.groups).toEqual([]);
    expect(vm.queryMatchesAcrossCategories).toBe(0);
  });

  it("computes categoryCounts from full skills list, not filtered", () => {
    const vm = buildSkillsViewModel(fixtures, allCategories, {
      query: "playwright",
      activeCategory: "Slides & Decks",
    });
    expect(vm.categoryCounts.get("Slides & Decks")).toBe(2);
    expect(vm.categoryCounts.get("Browser & Testing")).toBe(1);
    expect(vm.categoryCounts.get("Research & Analysis")).toBe(1);
  });

  it("appends groups for skills whose category is not in the categories param", () => {
    const extra = makeSkill({ slug: "stray", category: "Other", name: "Stray" });
    const vm = buildSkillsViewModel([...fixtures, extra], allCategories, {
      query: "",
      activeCategory: "All",
    });
    const cats = vm.groups.map(([cat]) => cat);
    expect(cats).toContain("Other");
    expect(cats[cats.length - 1]).toBe("Other");
  });
});
