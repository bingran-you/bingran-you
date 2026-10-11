import { describe, expect, it } from "vitest";
import layout from "@/content/layout/home.json";
import sheets from "@/content/layout/sheets.json";
import { blocksById, homeArticle, isText } from "./article";
import { papers } from "./content";
import { inlineText, sliceInline } from "./inline";
import { articleHash, homeLayout } from "./layout";
import {
  FRONT_TOP,
  isTextPiece,
  LEADING,
  MIN_LINES,
  PAGE,
  type Layout,
  type Piece,
} from "./paginate";

const { pages } = layout as Layout;
const pieces = pages.flat();
const blocks = blocksById(homeArticle());

/** The paper a block is part of, if any: its id starts with the slug. */
const paperOf = ({ block }: Piece) =>
  papers.find(({ slug }) => block === slug || block.startsWith(`${slug}.`))
    ?.slug;

const lineCount = (column: Piece[]) =>
  column
    .filter(isTextPiece)
    .reduce((sum, piece) => sum + piece.lines.length, 0);

/** The last baseline of a piece of text, or the bottom of a box. */
function footOf(piece: Piece) {
  const block = blocks.get(piece.block);
  if (!isTextPiece(piece)) return piece.y + piece.h;
  if (!block || !isText(block)) throw new Error(piece.block);
  return piece.y + (piece.lines.length - 1) * LEADING[block.kind];
}

/** From the last baseline of the first page to that of its text, at the least. */
const FOOTNOTE_GAP = 16;

/** The lowest that anything stands on page `n`. */
const limitOf = (n: number) => PAGE.lastBaseline - (n === 0 ? FOOTNOTE_GAP : 0);

describe("the layout of the home article", () => {
  // Fails after a change of the content, the type, the faces or the page
  // until the typesetter has run again: `npm run typeset` against the
  // development server.
  it("is typeset from the present content (else run `npm run typeset`)", () => {
    expect(layout.hash).toBe(articleHash());
    expect(sheets.hash).toBe(articleHash());
    expect(() => homeLayout()).not.toThrow();
  });

  it("places every block of the article, and nothing else", () => {
    expect(new Set(pieces.map((piece) => piece.block))).toEqual(
      new Set(blocks.keys()),
    );
  });

  // The verbatim rule: a block's lines, read in order, are its text,
  // character for character, whatever markup a line break falls in.
  it("sets every text block whole and in order", () => {
    for (const block of blocks.values()) {
      if (!isText(block)) continue;
      const text = inlineText(block.content);
      const lines = pieces
        .filter(isTextPiece)
        .filter((piece) => piece.block === block.id)
        .flatMap((piece) => piece.lines);
      expect(lines[0][0], block.id).toBe(0);
      expect(lines.at(-1)?.[1], block.id).toBe(text.length);
      lines.forEach(([start, end], i) => {
        expect(start, block.id).toBe(i === 0 ? 0 : lines[i - 1][1]);
        const slice = inlineText(sliceInline(block.content, start, end));
        expect(slice, block.id).toBe(text.slice(start, end));
      });
      expect(lines.map(([start, end]) => text.slice(start, end)).join("")).toBe(
        text,
      );
    }
  });

  it("puts a hyphen only where a word is broken", () => {
    for (const piece of pieces.filter(isTextPiece)) {
      const block = blocks.get(piece.block);
      if (!block || !isText(block)) throw new Error(piece.block);
      const text = inlineText(block.content);
      for (const [, end, hyphen] of piece.lines) {
        if (!hyphen) continue;
        expect(block.kind, block.id).toBe("paragraph");
        expect(text.slice(end - 1, end + 1), block.id).toMatch(
          /^\p{Script=Latin}{2}$/u,
        );
      }
    }
  });

  it("ends no column on a hyphen, and no more than two lines in a row", () => {
    for (const piece of pieces.filter(isTextPiece)) {
      const hyphens = piece.lines.map(([, , hyphen]) => (hyphen ? "-" : " "));
      expect(hyphens.at(-1), piece.block).toBe(" ");
      expect(hyphens.join(""), piece.block).not.toContain("---");
    }
  });

  it("sets only lines of running text tighter or looser", () => {
    for (const piece of pieces.filter(isTextPiece)) {
      for (const [, , , track] of piece.lines) {
        if (track === undefined) continue;
        expect(blocks.get(piece.block)?.kind, piece.block).toBe("paragraph");
        expect(Number.isInteger(track) && track !== 0, piece.block).toBe(true);
      }
    }
  });

  it("places each box once", () => {
    const boxes = pieces.filter((piece) => !isTextPiece(piece));
    expect(new Set(boxes.map((piece) => piece.block)).size).toBe(boxes.length);
  });

  // Nothing stands above the title block, and nothing ends lower than the
  // last baseline, or on the first page than the footnotes leave: neither
  // a line nor a box.
  it("keeps every piece inside the text block of its page", () => {
    const [left] = PAGE.columns;
    pages.forEach((page, n) => {
      for (const piece of page) {
        expect(piece.x, piece.block).toBeGreaterThanOrEqual(left);
        expect(piece.x + piece.w, piece.block).toBeLessThanOrEqual(
          left + PAGE.textWidth + 0.01,
        );
        expect(piece.y, piece.block).toBeGreaterThanOrEqual(FRONT_TOP);
        expect(footOf(piece), piece.block).toBeLessThanOrEqual(
          limitOf(n) + 0.01,
        );
      }
    });
  });

  // But that a figure, with its caption, may stand before the abstract of
  // its paper.
  it("keeps the blocks in the order of the article", () => {
    const order = pieces.map((piece) => piece.block);
    const runs = order.filter((id, n) => id !== order[n - 1]);
    const expected = [...blocks.keys()];
    for (const { slug } of papers) {
      const figure = expected.indexOf(`${slug}.figure`);
      const abstract = expected.indexOf(`${slug}.abstract.0`);
      if (runs.indexOf(`${slug}.figure`) > runs.indexOf(`${slug}.abstract.0`)) {
        continue;
      }
      expected.splice(abstract, 0, ...expected.splice(figure, 2));
    }
    expect(runs).toEqual(expected);
  });

  // A paper may run on to the next page; nothing of another stands between
  // its parts.
  it("keeps the parts of a paper together", () => {
    const order = pieces.map(paperOf);
    const runs = order.filter((slug, n) => slug && slug !== order[n - 1]);
    expect(runs).toEqual(papers.map((paper) => paper.slug));
  });

  /** What a page has of a paper's abstract. */
  const abstractOn = (page: Piece[], slug: string) =>
    page.filter(
      (piece) =>
        paperOf(piece) === slug &&
        blocks.get(piece.block)?.kind === "paragraph",
    );

  // A title has its figure under it or its abstract: all of it, or
  // MIN_LINES lines or more in each column.
  it("ends no page on a heading", () => {
    const [, right] = PAGE.columns;
    for (const page of pages) {
      for (const piece of page) {
        const block = blocks.get(piece.block);
        if (block?.kind === "section" && block.id !== "references") {
          expect(blocks.get(page[page.indexOf(piece) + 1].block)?.kind).toBe(
            "heading",
          );
        }
        if (block?.kind !== "heading") continue;
        const abstract = abstractOn(page, block.id);
        if (page.some((other) => other.block === `${block.id}.figure`)) {
          continue;
        }
        expect(abstract.length, block.id).toBeGreaterThan(0);
        const whole = pages.every(
          (other) => other === page || abstractOn(other, block.id).length === 0,
        );
        if (whole) continue;
        for (const column of [
          abstract.filter((other) => other.x < right),
          abstract.filter((other) => other.x >= right),
        ]) {
          expect(lineCount(column), block.id).toBeGreaterThanOrEqual(MIN_LINES);
        }
      }
    }
  });

  // No white under the text of a paper that is not finished: a page ends
  // at its foot where the next one opens with an abstract, or with the
  // rest of one.
  it("leaves no text unfinished short of the foot of a page", () => {
    pages.slice(0, -1).forEach((page, n) => {
      const [next] = pages[n + 1];
      if (blocks.get(next.block)?.kind !== "paragraph") return;
      const foot = Math.max(...page.map(footOf));
      expect(foot, next.block).toBeCloseTo(limitOf(n), 1);
    });
  });

  it("sets a figure and its caption on one page", () => {
    for (const block of blocks.values()) {
      if (isText(block) || !block.caption) continue;
      const on = (id: string) =>
        pages.flatMap((page, n) =>
          page.some((piece) => piece.block === id) ? [n] : [],
        );
      expect(on(block.caption.id), block.id).toEqual(on(block.id));
    }
  });

  // An abstract, the caption of a wide figure and the reference list stand
  // in two columns: whatever of one a page has starts level in both and
  // ends a line apart at the most (the list, an entry apart).
  it("sets two columns level and even", () => {
    const [, right] = PAGE.columns;
    for (const page of pages) {
      const groups = new Map<string, Piece[]>();
      for (const piece of page.filter(isTextPiece)) {
        const kind = blocks.get(piece.block)?.kind;
        const group =
          kind === "paragraph"
            ? `${paperOf(piece)}.abstract`
            : kind === "reference"
              ? "the entries"
              : piece.block;
        groups.set(group, [...(groups.get(group) ?? []), piece]);
      }
      for (const [group, column] of groups) {
        const second = column.filter((piece) => piece.x >= right);
        const first = column.filter((piece) => piece.x < right);
        if (first.length === 0 || second.length === 0) continue;
        expect(second[0].y, group).toBe(first[0].y);
        const apart = Math.abs(lineCount(first) - lineCount(second));
        const most = group === "the entries" ? 3 : 1;
        expect(apart, group).toBeLessThanOrEqual(most);
      }
    }
  });

  it("ends with the reference list, under the last of the last paper", () => {
    const last = pages[pages.length - 1].map((piece) => piece.block);
    const heading = last.indexOf("references");
    expect(heading).toBeGreaterThan(0);
    expect(paperOf(pages[pages.length - 1][heading - 1])).toBe(
      papers[papers.length - 1].slug,
    );
    expect(last.slice(heading + 1)).toEqual(
      papers.map((paper) => `ref-${paper.slug}`),
    );
  });

  it("ends its last sheet under the reference list", () => {
    const foot = Math.max(...pages[pages.length - 1].map(footOf));
    expect(layout.length).toBeCloseTo(
      foot + PAGE.height - limitOf(pages.length - 1),
      1,
    );
    expect(layout.length).toBeLessThanOrEqual(PAGE.height);
  });
});
