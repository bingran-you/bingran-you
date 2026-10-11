import { describe, expect, it } from "vitest";
import {
  FRONT_TOP,
  isTextPiece,
  LEADING,
  MIN_LINES,
  PAGE,
  paginate,
  STRETCH,
  type Line,
  type MeasuredBox,
  type MeasuredText,
  type Piece,
  type Proof,
  type TextKind,
} from "./paginate";

/** `count` lines of ten characters. */
const text = (id: string, kind: TextKind, count: number): MeasuredText => ({
  id,
  kind,
  lines: Array.from({ length: count }, (_, i): Line => [i * 10, i * 10 + 10]),
});

const box = (
  id: string,
  kind: MeasuredBox["kind"],
  height: number,
): MeasuredBox => ({ id, kind, height });

/**
 * A paper: title, authors and venue, an abstract of `lines` lines and, if
 * `more` is given, a second paragraph of that many.
 */
const paper = (id: string, lines: number, more = 0) => [
  text(id, "heading", 1),
  text(`${id}.citation`, "citation", 1),
  text(`${id}.abstract`, "paragraph", lines),
  ...(more ? [text(`${id}.more`, "paragraph", more)] : []),
];

/** The figure of a paper over a caption of `lines` lines. */
const figure = (id: string, height: number, lines = 4) => [
  box(`${id}.figure`, "wide", height),
  text(`${id}.caption`, "caption", lines),
];

const table = (id: string, height: number) =>
  box(`${id}.table`, "wide", height);

const references = (count: number) => [
  text("references", "section", 1),
  ...Array.from({ length: count }, (_, i) => text(`ref.${i}`, "reference", 2)),
];

const set = (blocks: Proof["blocks"], footnotes = 0) =>
  paginate({ hash: "", footnotes, blocks });

const layoutOf = (blocks: Proof["blocks"]) => set(blocks).layout.pages;

const [LEFT, RIGHT] = PAGE.columns;

/** From the last baseline of a first page to the first of its footnotes. */
const FOOTNOTE_GAP = 16;

/** The pieces of one block on a page, in one column if `x` is given. */
const find = (page: Piece[], block: string, x?: number) =>
  page.filter((p) => p.block === block && (x === undefined || p.x === x));

const lineCount = (pieces: Piece[]) =>
  pieces
    .filter(isTextPiece)
    .reduce((sum, piece) => sum + piece.lines.length, 0);

/** The pages a block is on. */
const pagesOf = (pages: Piece[][], block: string) =>
  pages.flatMap((page, n) => (find(page, block).length > 0 ? [n] : []));

/** What a page has of a paper's abstract, in one column if `x` is given. */
const abstractOf = (page: Piece[], id: string, x?: number) => [
  ...find(page, `${id}.abstract`, x),
  ...find(page, `${id}.more`, x),
];

/** From the top of a piece's first line, or of its box, to its foot. */
const extentOf = (piece: Piece, leading: number) =>
  isTextPiece(piece)
    ? [piece.y - leading, piece.y + (piece.lines.length - 1) * leading]
    : [piece.y, piece.y + piece.h];

const kindsOf = (blocks: Proof["blocks"]) =>
  Object.fromEntries(
    blocks.flatMap((block) =>
      "lines" in block ? [[block.id, block.kind]] : [],
    ),
  ) as Record<string, TextKind>;

/** The foot of a page: its lowest baseline, or the bottom of its lowest box. */
function footOf(page: Piece[], blocks: Proof["blocks"]) {
  const kinds = kindsOf(blocks);
  return Math.max(
    ...page.map((piece) => extentOf(piece, LEADING[kinds[piece.block]])[1]),
  );
}

/** Numbers from 0 to 1 that are the same on every run. */
function random(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1103515245 + 12345) % 2147483648;
    return state / 2147483648;
  };
}

/**
 * An article like the home page: a title page, then papers in tracks with
 * abstracts of 5 to 30 lines, every third in two paragraphs, and figures
 * of 80 to 400 pt, some with a table and one with a figure that fits a
 * column, and the reference list.
 */
function article(seed: number): Proof["blocks"] {
  const next = random(seed);
  const pick = (low: number, high: number) =>
    Math.round(low + next() * (high - low));
  const papers = Array.from({ length: pick(4, 9) }, (_, n) => {
    const id = `p${n}`;
    return [
      ...(n % 4 === 0 ? [text(`s${n}.section`, "section", 1)] : []),
      ...paper(id, pick(5, 30), n % 3 === 1 ? pick(2, 12) : 0),
      ...(n === 2
        ? [
            box(`${id}.figure`, "column", pick(200, 420)),
            text(`${id}.caption`, "caption", pick(2, 12)),
          ]
        : figure(id, pick(80, 400), pick(1, 20))),
      ...(next() < 0.4 ? [table(id, pick(60, 300))] : []),
    ];
  });
  return [
    box("front", "front", 160),
    box("education", "column", 100),
    box("portrait", "column", 130),
    text("portrait.caption", "caption", 1),
    box("projects", "wide", 220),
    ...papers.flat(),
    ...references(papers.length),
  ];
}

const SEEDS = Array.from({ length: 40 }, (_, n) => n + 1);

describe("a paper", () => {
  const blocks = [
    ...paper("a", 15),
    ...figure("a", 100, 5),
    table("a", 80),
    ...paper("b", 20),
    ...figure("b", 100),
  ];
  const [page] = layoutOf(blocks);

  it("opens a page with its title a line under the head rule", () => {
    expect(layoutOf(blocks)).toHaveLength(1);
    expect(find(page, "a")[0].y).toBeCloseTo(44.77 + PAGE.pitch, 2);
  });

  it("sets its title and its authors across the page", () => {
    const [title] = find(page, "a");
    const [citation] = find(page, "a.citation");
    expect(title).toMatchObject({ x: LEFT, w: PAGE.textWidth });
    expect(citation).toMatchObject({ x: LEFT, w: PAGE.textWidth });
    expect(citation.y).toBeGreaterThan(title.y);
  });

  it("sets its abstract in two columns that start level and end evenly", () => {
    const [left] = find(page, "a.abstract", LEFT);
    const [right] = find(page, "a.abstract", RIGHT);
    expect(left.w).toBe(PAGE.columnWidth);
    expect(left.y).toBe(right.y);
    expect(left.y).toBeGreaterThan(find(page, "a.citation")[0].y);
    expect([lineCount([left]), lineCount([right])]).toEqual([8, 7]);
  });

  it("keeps two lines of a paragraph together where a column ends", () => {
    // Seven lines to the left would leave the last of the first paragraph
    // at the top of the right column.
    const [two] = layoutOf(paper("c", 8, 5));
    expect(lineCount(find(two, "c.abstract", LEFT))).toBe(6);
    expect(lineCount(find(two, "c.abstract", RIGHT))).toBe(2);
    expect(lineCount(find(two, "c.more", RIGHT))).toBe(5);
    expect(find(two, "c.more", LEFT)).toEqual([]);
  });

  it("stands its figure under the abstract, over a caption in two columns", () => {
    const [image] = find(page, "a.figure");
    const [left, right] = find(page, "a.caption");
    expect(image).toMatchObject({ x: LEFT, w: PAGE.textWidth, h: 100 });
    const abstract = find(page, "a.abstract", LEFT)[0].y + 7 * PAGE.pitch;
    expect(image.y).toBeGreaterThan(abstract);
    expect([left.x, right.x]).toEqual([LEFT, RIGHT]);
    expect([lineCount([left]), lineCount([right])]).toEqual([3, 2]);
    // The first baseline of a caption is 14 pt under its figure.
    expect(left.y).toBeCloseTo(image.y + 100 + 14, 1);
    expect(right.y).toBe(left.y);
  });

  it("stands its table under the caption, and the next paper under that", () => {
    const order = [...new Set(page.map((piece) => piece.block))];
    expect(order).toEqual(blocks.map((block) => block.id));
    const tops = order.map((id) => find(page, id)[0].y);
    expect(tops).toEqual([...tops].sort((a, b) => a - b));
  });

  it("keeps its parts 22.58 pt apart and 38.52 pt from the next title", () => {
    const text = find(page, "a.abstract", LEFT)[0].y + 7 * PAGE.pitch;
    const caption = find(page, "a.caption", LEFT)[0].y + 2 * LEADING.caption;
    const [image] = find(page, "a.figure");
    const [rows] = find(page, "a.table");
    expect(image.y - text).toBeCloseTo(22.58, 1);
    expect(rows.y - caption).toBeCloseTo(22.58, 1);
    expect(find(page, "b")[0].y - (rows.y + 80)).toBeCloseTo(38.52, 1);
  });
});

describe("a paper whose figure fits a column", () => {
  const [page] = layoutOf([
    ...paper("a", 12),
    box("a.figure", "column", 300),
    text("a.caption", "caption", 6),
    ...paper("b", 20),
  ]);
  const [abstract] = find(page, "a.abstract");
  const [image] = find(page, "a.figure");
  const [caption] = find(page, "a.caption");

  it("stands the figure in one column, beside the abstract in the other", () => {
    expect(find(page, "a.abstract")).toHaveLength(1);
    expect(abstract).toMatchObject({ x: LEFT, w: PAGE.columnWidth });
    expect(lineCount([abstract])).toBe(12);
    expect(image).toMatchObject({ x: RIGHT, w: PAGE.columnWidth, h: 300 });
    expect(image.y).toBeLessThan(abstract.y);
    expect(image.y).toBeGreaterThan(abstract.y - PAGE.pitch);
  });

  it("ends the caption, under the abstract, level with the figure", () => {
    expect(caption.x).toBe(LEFT);
    expect(caption.y).toBeGreaterThan(abstract.y + 11 * PAGE.pitch);
    expect(caption.y + 5 * LEADING.caption).toBeCloseTo(image.y + 300, 1);
  });

  it("starts the next paper under the whole of it", () => {
    expect(find(page, "b")[0].y).toBeGreaterThan(image.y + 300);
  });
});

describe("the first page", () => {
  const blocks = [
    box("front", "front", 160),
    box("education", "column", 100),
    box("portrait", "column", 130),
    text("portrait.caption", "caption", 1),
    box("projects", "wide", 220),
    ...paper("a", 40),
    ...figure("a", 500),
  ];
  const { layout, fills } = set(blocks, 9);
  const [first] = layout.pages;

  it("opens with the title block and the boxes that follow it", () => {
    const [front, education, portrait, caption, projects] = first;
    expect(front).toMatchObject({ block: "front", x: LEFT, y: FRONT_TOP });
    expect(education).toMatchObject({ x: LEFT, w: PAGE.columnWidth });
    expect(portrait).toMatchObject({ x: RIGHT, w: PAGE.columnWidth });
    expect(education.y).toBe(portrait.y);
    expect(education.y).toBeGreaterThan(FRONT_TOP + 160);
    expect(caption).toMatchObject({ block: "portrait.caption", x: RIGHT });
    expect(projects).toMatchObject({ x: LEFT, w: PAGE.textWidth });
    expect(projects.y).toBeGreaterThan(caption.y);
  });

  it("ends above its footnotes", () => {
    expect(pagesOf(layout.pages, "a")).toEqual([0]);
    expect(fills[0].left).toBeCloseTo(0, 1);
    expect(footOf(first, blocks)).toBeCloseTo(
      PAGE.lastBaseline - 9 - FOOTNOTE_GAP,
      1,
    );
  });
});

describe("the pages of an article", () => {
  it.each(SEEDS)("keep the parts of a paper together (%i)", (seed) => {
    const papers = layoutOf(article(seed))
      .flat()
      .map((piece) => piece.block.split(".")[0]);
    const runs = papers.filter((id, n) => id !== papers[n - 1]);
    expect(new Set(runs).size).toBe(runs.length);
  });

  it.each(SEEDS)("never end on a heading (%i)", (seed) => {
    const pages = layoutOf(article(seed));
    for (const page of pages) {
      page.forEach((piece, n) => {
        // The heading of a track has the title of its first paper under it.
        if (piece.block.endsWith(".section")) {
          expect(page[n + 1].block).toMatch(/^p\d+$/);
        }
        if (!/^p\d+$/.test(piece.block)) return;
        // A title has its authors under it and its figure, or some of
        // its abstract: all of it, or four lines to a column.
        const id = piece.block;
        expect(find(page, `${id}.citation`)).toHaveLength(1);
        if (page[n + 2].block === `${id}.figure`) return;
        expect(lineCount(abstractOf(page, id))).toBeGreaterThan(0);
        const whole = pages.every(
          (other) => other === page || abstractOf(other, id).length === 0,
        );
        for (const x of whole ? [] : [LEFT, RIGHT]) {
          const lines = lineCount(abstractOf(page, id, x));
          expect(lines).toBeGreaterThanOrEqual(MIN_LINES);
        }
      });
    }
  });

  it.each(SEEDS)("set an abstract in even columns, whole or not (%i)", (seed) => {
    const blocks = article(seed);
    const pages = layoutOf(blocks);
    for (const { id } of blocks.filter((block) => block.kind === "heading")) {
      const on = pages.filter((page) => abstractOf(page, id).length > 0);
      const lines = blocks
        .filter((block) => [`${id}.abstract`, `${id}.more`].includes(block.id))
        .flatMap((block) => ("lines" in block ? block.lines : []));
      expect(lineCount(on.flatMap((page) => abstractOf(page, id)))).toBe(
        lines.length,
      );
      on.forEach((page, n) => {
        const [left, right] = [LEFT, RIGHT].map((x) => abstractOf(page, id, x));
        // Beside its figure an abstract stands in one column.
        if (right.length === 0) return;
        expect(left[0].y).toBe(right[0].y);
        const apart = Math.abs(lineCount(left) - lineCount(right));
        const paragraphs = new Set(abstractOf(page, id).map((p) => p.block));
        // Two lines of a paragraph stay together, which may keep the
        // columns of an abstract of two paragraphs from ending evenly.
        if (on.length > 1 || paragraphs.size === 1) {
          expect(apart).toBeLessThanOrEqual(1);
        }
        if (on.length === 1) return;
        // A page that ends inside the abstract ends its columns level,
        // with four lines or more in each; what runs on has seven.
        if (n < on.length - 1) {
          expect(apart).toBe(0);
          expect(lineCount(left)).toBeGreaterThanOrEqual(MIN_LINES);
        } else {
          expect(lineCount([...left, ...right])).toBeGreaterThanOrEqual(
            2 * MIN_LINES - 1,
          );
        }
      });
      // No line of a paragraph stands by itself at the head or the foot
      // of a column, or of a page.
      for (const piece of on.flatMap((page) => abstractOf(page, id))) {
        expect(lineCount([piece]), piece.block).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it.each(SEEDS)("leave every piece clear of the others (%i)", (seed) => {
    const blocks = article(seed);
    const kinds = kindsOf(blocks);
    for (const page of layoutOf(blocks)) {
      const placed = page.map((piece) => ({
        piece,
        extent: extentOf(piece, LEADING[kinds[piece.block]]),
      }));
      placed.forEach((a, n) => {
        for (const b of placed.slice(n + 1)) {
          const beside =
            a.piece.x + a.piece.w <= b.piece.x ||
            b.piece.x + b.piece.w <= a.piece.x;
          const clear =
            a.extent[1] <= b.extent[0] + 0.01 ||
            b.extent[1] <= a.extent[0] + 0.01;
          expect(beside || clear, `${a.piece.block} / ${b.piece.block}`).toBe(
            true,
          );
        }
      });
    }
  });

  it.each(SEEDS)("place every box whole, over its caption (%i)", (seed) => {
    const blocks = article(seed);
    const pages = layoutOf(blocks);
    for (const block of blocks) {
      if ("lines" in block) continue;
      const on = pagesOf(pages, block.id);
      expect(on).toHaveLength(1);
      const pieces = find(pages[on[0]], block.id);
      expect(pieces).toHaveLength(1);
      expect(pieces[0]).toMatchObject({ h: block.height });
      if (block.id.endsWith(".figure")) {
        const caption = block.id.replace(".figure", ".caption");
        expect(pagesOf(pages, caption)).toEqual(on);
      }
    }
  });

  it.each(SEEDS)("end with the reference list, not by itself (%i)", (seed) => {
    const pages = layoutOf(article(seed));
    const last = pages[pages.length - 1].map((piece) => piece.block);
    const heading = last.indexOf("references");
    expect(heading).toBeGreaterThan(0);
    const entries = pages[pages.length - 1].slice(heading + 1);
    expect(entries.every((piece) => piece.block.startsWith("ref."))).toBe(true);
    // No entry is broken: each is one piece.
    expect(new Set(entries.map((piece) => piece.block)).size).toBe(
      entries.length,
    );
    // Two columns that start level. Of entries as long as one another the
    // left one has no fewer.
    const right = entries.filter((piece) => piece.x > RIGHT);
    const left = entries.filter((piece) => piece.x < RIGHT);
    expect(right.length).toBeGreaterThan(0);
    expect(left.length).toBeGreaterThanOrEqual(right.length);
    expect(right[0].y).toBe(left[0].y);
  });

  it.each(SEEDS)("grow their gaps to the foot, or by the most (%i)", (seed) => {
    const blocks = article(seed);
    const { layout, fills } = set(blocks);
    layout.pages.forEach((page, n) => {
      const { unused, gaps, growth, left } = fills[n];
      const limit = PAGE.lastBaseline - (n === 0 ? FOOTNOTE_GAP : 0);
      // The sheet of the last page ends under it, and its gaps are as
      // they are at the least.
      if (n === layout.pages.length - 1) {
        expect({ unused, growth, left }).toEqual({ unused: 0, growth: 0, left: 0 });
        expect(layout.length).toBeCloseTo(
          footOf(page, blocks) + PAGE.height - limit,
          1,
        );
        return;
      }
      expect(growth).toBeLessThanOrEqual(STRETCH);
      if (gaps > 0 && growth < STRETCH) expect(left).toBe(0);
      // A gap above a paper or the reference list grows twice as far as
      // one between the parts of a paper.
      const above = page.filter(
        ({ block }, i) =>
          i > 0 &&
          (/\.section$|^references$/.test(block) ||
            (/^p\d+$/.test(block) && !page[i - 1].block.endsWith(".section"))),
      ).length;
      expect(left).toBeCloseTo(unused - growth * (gaps + above), 0);
      // The lowest piece stands that much above the foot of the page.
      expect(footOf(page, blocks)).toBeCloseTo(limit - left, 1);
    });
  });

  // Inside an abstract, or between a figure and the abstract after it.
  it.each(SEEDS)("leave no text unfinished short of the foot (%i)", (seed) => {
    const { layout, fills } = set(article(seed));
    layout.pages.slice(1).forEach(([first], n) => {
      if (/\.(abstract|more)$/.test(first.block)) expect(fills[n].left).toBe(0);
    });
  });
});

describe("where the pages end", () => {
  it("is chosen for the whole article, not page by page", () => {
    // Filled as far as it goes, the first page takes the second table,
    // and the third is left a page to itself, a third of it unused.
    const head = [
      ...paper("a", 8),
      box("a.figure", "wide", 200),
      box("a.one", "wide", 150),
    ];
    const two = box("a.two", "wide", 180);
    expect(layoutOf([...head, two])).toHaveLength(1);

    const pages = layoutOf([
      ...head,
      two,
      box("a.three", "wide", 450),
      box("a.four", "wide", 260),
    ]);
    expect(pagesOf(pages, "a.two")).toEqual([1]);
    expect(pagesOf(pages, "a.three")).toEqual([1]);
    expect(pagesOf(pages, "a.four")).toEqual([2]);
  });

  it("divides an abstract to bring a page down to its foot", () => {
    // Whole, "b" fits the second page with its figure and leaves the
    // first a hundred points short.
    const { layout, fills } = set([
      ...paper("a", 20),
      box("a.figure", "wide", 400),
      ...paper("b", 40),
      box("b.figure", "wide", 430),
    ]);
    expect(layout.pages).toHaveLength(2);
    expect(pagesOf(layout.pages, "b")).toEqual([0]);
    expect(pagesOf(layout.pages, "b.abstract")).toEqual([0, 1]);
    expect(fills[0].left).toBe(0);
    // What runs on opens the next page, before the figure.
    expect(layout.pages[1].map((piece) => piece.block)).toEqual([
      "b.abstract",
      "b.abstract",
      "b.figure",
    ]);
  });

  it("ends a page inside an abstract on level columns", () => {
    // Fifteen lines are eight and seven: four and four at the foot of a
    // page, four and three on the next.
    const pages = layoutOf([
      ...paper("a", 20),
      box("a.figure", "wide", 410),
      ...paper("b", 4 * MIN_LINES - 1),
      box("b.figure", "wide", 300),
    ]);
    const counts = pages.map((page) =>
      [LEFT, RIGHT].map((x) => lineCount(find(page, "b.abstract", x))),
    );
    expect(counts).toEqual([
      [MIN_LINES, MIN_LINES],
      [MIN_LINES, MIN_LINES - 1],
    ]);
  });

  it("leaves an abstract whole that is too short for that", () => {
    // There is room for six lines to a column under "a", not for seven.
    const pages = layoutOf([
      ...paper("a", 20),
      box("a.figure", "wide", 410),
      ...paper("b", 4 * MIN_LINES - 2),
      box("b.figure", "wide", 300),
    ]);
    expect(pagesOf(pages, "b")).toEqual([1]);
    expect(pagesOf(pages, "b.abstract")).toEqual([1]);
  });

  it("ends no page a line into a paragraph, or a line short of one", () => {
    // Under "a" there is room for five lines to a column, not for six.
    // Four are all but the last line of the first paragraph of "b", and
    // five all of it and the first line of the second.
    const pages = layoutOf([
      ...paper("a", 20),
      box("a.figure", "wide", 420),
      ...paper("b", 9, 12),
      box("b.figure", "wide", 300),
    ]);
    expect(pagesOf(pages, "b")).toEqual([1]);
    expect(abstractOf(pages[0], "b")).toEqual([]);
  });

  it("leaves an abstract whole where its page is as full without", () => {
    // The gaps of the first page bring it down to its foot. With the
    // first lines of "c" under them they would have less to take up.
    const { layout, fills } = set([
      ...paper("a", 8),
      box("a.figure", "wide", 120),
      ...paper("b", 18),
      box("b.figure", "wide", 210),
      ...paper("c", 18),
      box("c.figure", "wide", 340),
    ]);
    expect(fills[0].left).toBe(0);
    expect(pagesOf(layout.pages, "c")).toEqual([1]);
    expect(pagesOf(layout.pages, "c.abstract")).toEqual([1]);
  });

  it("ends no page inside an abstract short of its foot", () => {
    // With ten lines less of "b" the first page would end 45 pt short,
    // and the second be left half of what it is.
    const { layout, fills } = set([
      ...paper("a", 12),
      box("a.figure", "wide", 340),
      ...paper("b", 30),
      box("b.figure", "wide", 320),
      ...paper("c", 12),
      box("c.figure", "wide", 440),
    ]);
    expect(lineCount(find(layout.pages[0], "b.abstract"))).toBe(20);
    expect(fills[0].left).toBe(0);
    expect(fills[1].left).toBeGreaterThan(100);
  });

  it("sets a figure before its abstract to bring a page down to its foot", () => {
    // Under "a" the first page has room for the title of "b" and its
    // figure, not for its abstract and its figure.
    const { layout, fills } = set([
      ...paper("a", 8),
      ...figure("a", 200),
      ...paper("b", 18),
      ...figure("b", 220, 16),
      ...references(8),
    ]);
    const [first, second] = layout.pages;
    expect(layout.pages).toHaveLength(2);
    expect(fills[0].left).toBe(0);
    expect(first.slice(-5).map((piece) => piece.block)).toEqual([
      "b",
      "b.citation",
      "b.figure",
      "b.caption",
      "b.caption",
    ]);
    // The figure stands where the capitals of the abstract would.
    const [citation] = find(first, "b.citation");
    const [image] = find(first, "b.figure");
    expect(image.y).toBeCloseTo(citation.y + 12.25 - 6.1, 1);
    // The abstract opens the next page, over the reference list.
    const [left, right] = find(second, "b.abstract");
    expect(left.y).toBeCloseTo(44.77 + PAGE.pitch, 2);
    expect(right.y).toBe(left.y);
    expect(lineCount([left, right])).toBe(18);
    expect(second[2].block).toBe("references");
  });

  it("leaves a figure after its abstract where the page is as full", () => {
    // Under "a" there is room for the abstract of "b", or for its figure
    // under its title: the gaps take up what either leaves.
    const { layout, fills } = set([
      ...paper("a", 8),
      ...figure("a", 300),
      ...paper("b", 30),
      ...figure("b", 150),
    ]);
    expect(fills[0].left).toBe(0);
    expect(pagesOf(layout.pages, "b.abstract")).toEqual([0]);
    expect(pagesOf(layout.pages, "b.figure")).toEqual([1]);
  });

  it("leaves the least under the page that is left the most", () => {
    // With the second table the first page would be left 106 pt, and the
    // third table a page to itself and 394 pt.
    const { layout, fills } = set([
      ...paper("a", 8),
      box("a.one", "wide", 200),
      box("a.two", "wide", 210),
      box("a.three", "wide", 300),
      box("a.four", "wide", 300),
      ...references(4),
    ]);
    expect(pagesOf(layout.pages, "a.two")).toEqual([1]);
    expect(pagesOf(layout.pages, "a.three")).toEqual([1]);
    expect(Math.max(...fills.map((fill) => fill.left))).toBeLessThan(394);
  });

  it("then leaves the pages the least between them", () => {
    // The first page is left the most either way. Divided, "b" fills the
    // second, which its figure would otherwise have to itself.
    const { layout, fills } = set([
      box("projects", "wide", 300),
      ...paper("a", 8),
      box("a.figure", "wide", 590),
      ...paper("b", 16),
      box("b.figure", "wide", 440),
      ...references(4),
    ]);
    expect(pagesOf(layout.pages, "a.figure")).toEqual([1]);
    expect(pagesOf(layout.pages, "b.abstract")).toEqual([1, 2]);
    expect(fills.map((fill) => fill.left > 0)).toEqual([true, false, false]);
  });

  it("fills pages evenly where neither that nor a cut is at stake", () => {
    // The third page or the fourth takes the small table: the two are
    // left as much between them, and nearer one another with it on the
    // third.
    const pages = layoutOf([
      ...paper("a", 8),
      box("a.one", "wide", 200),
      box("a.two", "wide", 420),
      box("a.three", "wide", 350),
      box("a.small", "wide", 90),
      box("a.five", "wide", 420),
      box("a.six", "wide", 370),
      ...references(4),
    ]);
    expect(pagesOf(pages, "a.three")).toEqual([2]);
    expect(pagesOf(pages, "a.small")).toEqual([2]);
    expect(pagesOf(pages, "a.five")).toEqual([3]);
  });

  it("does not leave the reference list by itself to fill a page better", () => {
    // By itself the list would leave the first page less unused than
    // that is without the figure.
    const pages = layoutOf([
      ...paper("a", 8),
      box("a.figure", "wide", 550),
      ...references(12),
    ]);
    expect(pagesOf(pages, "a.figure")).toEqual([1]);
    expect(pagesOf(pages, "references")).toEqual([1]);
  });

  it("refuses a first page that does not hold what opens the article", () => {
    expect(() =>
      layoutOf([box("front", "front", 160), box("projects", "wide", 600)]),
    ).toThrow("first page");
  });

  it("refuses a block that is taller than a page", () => {
    expect(() => layoutOf([...paper("a", 30), table("a", 800)])).toThrow(
      "taller than a page",
    );
    // Nor is it passed over, where pages could end in the abstract
    // before it and in the abstract after it.
    expect(() =>
      layoutOf([box("x", "wide", 500), ...paper("a", 160), table("a", 800)]),
    ).toThrow("taller than a page");
  });

  it("refuses a block that belongs to nothing", () => {
    expect(() => layoutOf([text("stray", "paragraph", 3)])).toThrow("stray");
  });
});
