import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
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

  it("has every paper's own abstract and first figure", () => {
    for (const paper of papers) {
      const detail = getPaperDetail(paper.slug);
      expect(detail.source, paper.slug).toContain(paper.arxiv);
      expect(detail.abstract.join(" ").length, paper.slug).toBeGreaterThan(400);
      expect(detail.figure.caption.length, paper.slug).toBeGreaterThan(40);
      const file = fileURLToPath(
        new URL(`../public${detail.figure.src}`, import.meta.url),
      );
      expect(existsSync(file), detail.figure.src).toBe(true);
    }
  });

  // From each paper's own note on equal contribution. BenchShield, the Ramsey
  // test and the adjoint paper name no co-first authors.
  it("marks the co-first authors of each paper", () => {
    const marked = Object.fromEntries(
      papers.map((paper) => [
        paper.slug,
        paper.authors.split(CO_FIRST_MARK).length - 1,
      ]),
    );
    expect(marked).toEqual({
      skillsbench: 4,
      clawsbench: 2,
      benchshield: 0,
      "printed-trap": 2,
      ramsey: 0,
      multiplexed: 2,
      adjoint: 0,
      broadband: 5,
    });
  });

  // Figures and tables are set at their printed width, in points. The text
  // block of a sheet is 521.5 pt wide, so nothing in print is wider.
  it("records the printed width of every figure and table", () => {
    for (const paper of papers) {
      const { figure, table } = getPaperDetail(paper.slug);
      for (const width of [figure.printWidth, table?.printWidth ?? 1]) {
        expect(width, paper.slug).toBeGreaterThan(0);
        expect(width, paper.slug).toBeLessThanOrEqual(521.5);
      }
    }
  });

  // The copied text is rendered as HTML, so it may only carry inline markup.
  it("keeps the copied text to inline markup", () => {
    const allowed = new Set(["i", "b", "sup", "sub", "code"]);
    for (const paper of papers) {
      const { abstract, figure, table } = getPaperDetail(paper.slug);
      const rows = table ? [...table.head, ...table.body] : [];
      const html = [
        ...abstract,
        figure.caption,
        table?.caption ?? "",
        ...rows.flatMap((row) => row.cells.map((cell) => cell.html)),
      ].join(" ");
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
