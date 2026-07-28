import { describe, expect, it } from "vitest";
import {
  getAiPaperHighlights,
  getAiProjectHighlights,
  papers,
  projects,
} from "./content";

describe("getAiProjectHighlights", () => {
  it("leads with FrontierPhysics", () => {
    expect(projects[0]).toMatchObject({
      name: "FrontierPhysics",
      href: "https://www.benchflow.ai/frontierphysics",
    });
  });

  it("does not list the tasksminer monitor as a project", () => {
    expect(projects.some(({ href }) => href.includes("tasksminer"))).toBe(
      false,
    );
  });

  it("returns up to 5 ai-track projects by default", () => {
    const result = getAiProjectHighlights();
    expect(result.length).toBeLessThanOrEqual(5);
    expect(result.every((p) => p.track === "ai")).toBe(true);
  });

  it("respects a custom limit", () => {
    const result = getAiProjectHighlights(2);
    expect(result).toHaveLength(2);
    expect(result.every((p) => p.track === "ai")).toBe(true);
  });

  it("preserves source order", () => {
    const aiProjects = projects.filter((p) => p.track === "ai");
    const result = getAiProjectHighlights(3);
    expect(result.map((p) => p.name)).toEqual(
      aiProjects.slice(0, 3).map((p) => p.name),
    );
  });

  it("excludes ion-track projects", () => {
    const result = getAiProjectHighlights(99);
    expect(result.every((p) => p.track !== "ion")).toBe(true);
  });
});

describe("getAiPaperHighlights", () => {
  it("returns up to 2 ai-track papers by default", () => {
    const result = getAiPaperHighlights();
    expect(result.length).toBeLessThanOrEqual(2);
    expect(result.every((p) => p.track === "ai")).toBe(true);
  });

  it("respects a custom limit", () => {
    const result = getAiPaperHighlights(1);
    expect(result).toHaveLength(1);
  });

  it("excludes ion-track papers", () => {
    const result = getAiPaperHighlights(99);
    expect(result.every((p) => p.track !== "ion")).toBe(true);
  });

  it("matches the slice of source data", () => {
    const aiPapers = papers.filter((p) => p.track === "ai");
    expect(getAiPaperHighlights(aiPapers.length).map((p) => p.title)).toEqual(
      aiPapers.map((p) => p.title),
    );
  });
});
