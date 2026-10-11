import { describe, expect, it } from "vitest";
import {
  isTextPiece,
  PAGE,
  paginate,
  type Line,
  type MeasuredBox,
  type MeasuredText,
  type Piece,
  type Proof,
  type TextKind,
} from "./paginate";

/** `count` lines of ten characters; those listed in `hyphens` break a word. */
const text = (
  id: string,
  kind: TextKind,
  count: number,
  hyphens: number[] = [],
): MeasuredText => ({
  id,
  kind,
  lines: Array.from({ length: count }, (_, i): Line => {
    const [start, end] = [i * 10, i * 10 + 10];
    return hyphens.includes(i) ? [start, end, 1] : [start, end];
  }),
});

const box = (
  id: string,
  kind: MeasuredBox["kind"],
  height: number,
): MeasuredBox => ({ id, kind, height });

/** A paper: title, authors and venue, an abstract of `lines` lines. */
const paper = (id: string, lines: number) => [
  text(id, "heading", 1),
  text(`${id}.citation`, "citation", 1),
  text(`${id}.abstract`, "paragraph", lines),
];

const layoutOf = (blocks: Proof["blocks"]) =>
  paginate({ hash: "", footnotes: 0, blocks }).layout.pages;

const [LEFT, RIGHT] = PAGE.columns;

/** The pieces of one block on a page, in one column if `x` is given. */
const find = (page: Piece[], block: string, x?: number) =>
  page.filter((p) => p.block === block && (x === undefined || p.x === x));

const lineCount = (pieces: Piece[]) =>
  pieces
    .filter(isTextPiece)
    .reduce((sum, piece) => sum + piece.lines.length, 0);

/** The page a block is on, the first if it is on several. */
const pageOf = (pages: Piece[][], block: string) =>
  pages.findIndex((page) => find(page, block).length > 0);

/** Lines a column holds above the footnotes of a first page. */
const FIRST_PAGE = 63;
const grid = (line: number) => PAGE.firstBaseline + line * PAGE.pitch;

describe("paginate", () => {
  it("fills column after column on the baseline grid", () => {
    const pages = layoutOf([text("p", "paragraph", 2 * FIRST_PAGE + 130 + 20)]);
    expect(pages).toHaveLength(3);
    const [first, second] = pages;
    expect(
      first.map((piece) => [piece.x, piece.y, lineCount([piece])]),
    ).toEqual([
      [LEFT, PAGE.firstBaseline, FIRST_PAGE],
      [RIGHT, PAGE.firstBaseline, FIRST_PAGE],
    ]);
    // A full column of 65 lines ends on the last baseline of the page.
    expect(second.map((piece) => lineCount([piece]))).toEqual([65, 65]);
    expect(grid(64)).toBeCloseTo(PAGE.lastBaseline, 5);
  });

  it("balances the two columns of the last page", () => {
    const pages = layoutOf([text("p", "paragraph", 2 * FIRST_PAGE + 21)]);
    expect(pages[1].map((piece) => lineCount([piece]))).toEqual([11, 10]);
  });

  it("runs the text on down its column where a figure still follows", () => {
    const pages = layoutOf([
      ...paper("a", 20),
      box("a.figure", "wide", 100),
      box("a.table", "wide", 650),
    ]);
    // The text ends on the first page, which is not the last: no balancing.
    expect(lineCount(find(pages[0], "a.abstract", LEFT))).toBe(20);
    expect(find(pages[0], "a.abstract", RIGHT)).toEqual([]);
    expect(pageOf(pages, "a.table")).toBe(1);
  });

  it("evens out the columns of a page a heading has to leave", () => {
    // Under "a" the second column has three lines left, too few for the
    // heading of "b" with its citation and two lines of text.
    const pages = layoutOf([
      text("a", "paragraph", 2 * FIRST_PAGE - 3),
      ...paper("b", 150),
    ]);
    expect(pageOf(pages, "b")).toBe(1);
    expect(pages[0].map((piece) => lineCount([piece]))).toEqual([62, 61]);
  });

  it("never ends a column on a hyphen", () => {
    const hyphen = FIRST_PAGE - 1;
    const [first] = layoutOf([
      text("p", "paragraph", 2 * FIRST_PAGE + 130, [hyphen]),
    ]);
    expect(lineCount(find(first, "p", LEFT))).toBe(FIRST_PAGE - 1);
  });

  it("leaves two lines of a paragraph on either side of a break", () => {
    const pages = layoutOf([
      text("a", "paragraph", FIRST_PAGE - 1),
      text("b", "paragraph", 40),
      text("c", "paragraph", FIRST_PAGE - 39),
      text("d", "paragraph", 100),
    ]);
    const [first] = pages;
    // One line of "b" would fit under "a": it goes to the next column whole.
    expect(lineCount(find(first, "a", LEFT))).toBe(FIRST_PAGE - 1);
    expect(find(first, "b", LEFT)).toEqual([]);
    // "c" would leave its last line for the next page: it leaves two.
    expect(lineCount(find(first, "c", RIGHT))).toBe(FIRST_PAGE - 39 - 2);
    expect(lineCount(find(pages[1], "c", LEFT))).toBe(2);
  });

  it("never ends a column with a heading", () => {
    // Under "a" there is room for the heading and its citation, not for two
    // lines of the abstract as well.
    const pages = layoutOf([
      text("a", "paragraph", FIRST_PAGE - 4),
      ...paper("b", 150),
    ]);
    const [heading] = find(pages[0], "b");
    expect([heading.x, heading.y]).toEqual([RIGHT, grid(0) - 1]);
  });

  it("stands a heading on the grid with empty lines above it", () => {
    const [page] = layoutOf([
      text("a", "paragraph", 3),
      text("s", "section", 1),
      ...paper("b", 150),
    ]);
    // Two empty lines above a section heading, one above a paper's; the
    // citation takes a line and the abstract follows on the grid.
    expect(find(page, "s")[0].y).toBeCloseTo(grid(5) - 2, 5);
    expect(find(page, "b")[0].y).toBeCloseTo(grid(7) - 1, 5);
    expect(find(page, "b.citation")[0].y).toBeCloseTo(grid(8) - 1.5, 5);
    expect(find(page, "b.abstract")[0].y).toBeCloseTo(grid(9), 5);
  });

  it("puts a figure above the page its heading is on", () => {
    const pages = layoutOf([
      ...paper("a", 20),
      box("a.figure", "wide", 200),
      text("a.caption", "caption", 5),
      ...paper("b", 200),
    ]);
    const [figure, left, right] = find(pages[0], "a.figure").concat(
      find(pages[0], "a.caption"),
    );
    expect(figure).toMatchObject({ x: LEFT, w: PAGE.textWidth, h: 200 });
    // The caption runs in both columns, 14 pt under the figure.
    expect([left.x, right.x]).toEqual([LEFT, RIGHT]);
    expect([lineCount([left]), lineCount([right])]).toEqual([3, 2]);
    expect(left.y).toBeCloseTo(figure.y + 200 + 14, 2);
    // The heading starts on the grid under the caption.
    const [heading] = find(pages[0], "a");
    expect(heading.y).toBeGreaterThan(left.y + 2 * 10 + 28 - 1);
    expect((PAGE.lastBaseline - heading.y - 1) % PAGE.pitch).toBeCloseTo(0, 5);
  });

  it("opens the next page with a figure that would push its heading", () => {
    const pages = layoutOf([
      text("a", "paragraph", FIRST_PAGE + 30),
      ...paper("b", 150),
      box("b.figure", "wide", 400),
    ]);
    expect(find(pages[0], "b")).toHaveLength(1);
    expect(find(pages[0], "b.figure")).toEqual([]);
    expect(find(pages[1], "b.figure")).toHaveLength(1);
  });

  it("keeps floats in their order", () => {
    const pages = layoutOf([
      text("lead", "paragraph", 30),
      ...paper("a", 20),
      box("a.figure", "wide", 600),
      ...paper("b", 300),
      box("b.figure", "wide", 50),
    ]);
    // "b.figure" would fit above its heading, but not before "a.figure".
    expect(pageOf(pages, "b")).toBe(0);
    expect(pageOf(pages, "a.figure")).toBe(1);
    expect(pageOf(pages, "b.figure")).toBe(2);
  });

  it("leaves room for text under a figure left over from an earlier page", () => {
    const pages = layoutOf([
      ...paper("a", 400),
      box("a.figure", "wide", 300),
      box("a.table", "wide", 330),
      box("a.extra", "wide", 330),
    ]);
    // "a.extra" would fit under "a.table", with no line of text below them.
    expect(pageOf(pages, "a.table")).toBe(1);
    expect(pageOf(pages, "a.extra")).toBe(2);
    expect(lineCount(pages[1])).toBeGreaterThan(0);
  });

  it("does not stand a wide figure under one that fills a column", () => {
    const pages = layoutOf([
      ...paper("a", 400),
      box("a.figure", "column", 200),
      box("a.table", "wide", 100),
    ]);
    // The second column would be empty beside the first figure.
    expect(pageOf(pages, "a.figure")).toBe(0);
    expect(pageOf(pages, "a.table")).toBe(1);
  });

  it("refuses a block that is taller than a page", () => {
    expect(() => layoutOf([box("figure", "wide", 800)])).toThrow(
      "taller than a page",
    );
  });

  it("stands a narrow figure in one column and runs text beside it", () => {
    const [page] = layoutOf([
      ...paper("a", 100),
      box("a.figure", "column", 300),
    ]);
    expect(find(page, "a.figure")[0]).toMatchObject({
      x: LEFT,
      w: PAGE.columnWidth,
    });
    const beside = find(page, "a.abstract", RIGHT)[0];
    expect(beside.y).toBeLessThan(find(page, "a.figure")[0].y + 300);
  });

  it("fits the first page between its title block and footnotes", () => {
    const { layout } = paginate({
      hash: "",
      footnotes: 27,
      blocks: [box("front", "front", 160), text("p", "paragraph", 300)],
    });
    const [front, column] = layout.pages[0];
    expect(front).toMatchObject({ block: "front", x: LEFT, h: 160 });
    expect(column.y).toBeGreaterThan(front.y + 160 + 10);
    const last = column.y + (lineCount([column]) - 1) * PAGE.pitch;
    expect(last).toBeLessThanOrEqual(PAGE.lastBaseline - 27 - 16);
    expect(last).toBeGreaterThan(PAGE.lastBaseline - 27 - 16 - PAGE.pitch);
  });
});
