import { describe, expect, it } from "vitest";
import { CO_FIRST_MARK, getPaperDetail, papers, projects } from "./content";

describe("projects", () => {
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

  it("does not list DoWhiz as a project", () => {
    expect(
      projects.some(({ name, href }) => /dowhiz/i.test(`${name} ${href}`)),
    ).toBe(false);
  });
});

describe("papers", () => {
  it("lists each paper once", () => {
    expect(new Set(papers.map((p) => p.slug)).size).toBe(papers.length);
    expect(new Set(papers.map((p) => p.href)).size).toBe(papers.length);
  });

  it("lists each track newest first, by arXiv number", () => {
    for (const track of new Set(papers.map((p) => p.track))) {
      const ids = papers.filter((p) => p.track === track).map((p) => p.arxiv);
      expect(ids, track).toEqual([...ids].sort().reverse());
    }
  });

  it("has every paper's own abstract", () => {
    for (const paper of papers) {
      const detail = getPaperDetail(paper.slug);
      expect(detail.source, paper.slug).toContain(paper.arxiv);
      expect(detail.abstract.join(" ").length, paper.slug).toBeGreaterThan(400);
    }
  });

  // From each paper's own note on equal contribution. Agents’ Last Exam,
  // BenchShield, the Ramsey test and the adjoint paper name no co-first
  // authors; the stars of Agents’ Last Exam mark its core contributors.
  it("marks the co-first authors of each paper", () => {
    const marked = Object.fromEntries(
      papers.map((paper) => [
        paper.slug,
        paper.authors.split(CO_FIRST_MARK).length - 1,
      ]),
    );
    expect(marked).toEqual({
      skillsbench: 4,
      "agents-last-exam": 0,
      clawsbench: 2,
      benchshield: 0,
      frontierphysics: 4,
      "printed-trap": 2,
      ramsey: 0,
      multiplexed: 2,
      adjoint: 0,
      broadband: 5,
    });
  });

  // The copied text is HTML, so it may only carry inline markup.
  it("keeps the copied text to inline markup", () => {
    const allowed = new Set(["i", "b", "sup", "sub", "code"]);
    for (const paper of papers) {
      const html = getPaperDetail(paper.slug).abstract.join(" ");
      const tags = [...html.matchAll(/<\/?([a-z0-9]+)[^>]*>/gi)].map(
        (m) => m[1],
      );
      expect(
        tags.filter((tag) => !allowed.has(tag)),
        paper.slug,
      ).toEqual([]);
    }
  });
});
