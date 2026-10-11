import { describe, expect, it } from "vitest";
import layout from "@/content/layout/home.json";
import { blocksById, homeArticle, isText } from "./article";
import { inlineText, sliceInline } from "./inline";
import { articleHash, homeLayout } from "./layout";
import {
  CAPTION_DESCENT,
  FRONT_TOP,
  isTextPiece,
  LEADING,
  PAGE,
  type Layout,
} from "./paginate";

const { pages } = layout as Layout;
const pieces = pages.flat();
const blocks = blocksById(homeArticle());

describe("the layout of the home article", () => {
  // Fails after a change of the content, the type, the faces or the page
  // until the typesetter has run again: `npm run typeset` against the
  // development server.
  it("is typeset from the present content (else run `npm run typeset`)", () => {
    expect(layout.hash).toBe(articleHash());
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

  // Nothing stands above the title block. Text ends on the last baseline
  // at the lowest, a box no lower than the descenders of a caption there.
  it("keeps every piece inside the text block of its page", () => {
    const [left] = PAGE.columns;
    for (const piece of pieces) {
      expect(piece.x, piece.block).toBeGreaterThanOrEqual(left);
      expect(piece.x + piece.w, piece.block).toBeLessThanOrEqual(
        left + PAGE.textWidth + 0.01,
      );
      expect(piece.y, piece.block).toBeGreaterThanOrEqual(FRONT_TOP);
      const block = blocks.get(piece.block);
      if (isTextPiece(piece) && block && isText(block)) {
        const last = piece.y + (piece.lines.length - 1) * LEADING[block.kind];
        expect(last, piece.block).toBeLessThanOrEqual(PAGE.lastBaseline + 0.01);
      } else if (!isTextPiece(piece)) {
        expect(piece.y + piece.h, piece.block).toBeLessThanOrEqual(
          PAGE.lastBaseline + CAPTION_DESCENT + 0.01,
        );
      }
    }
  });

  it("sets running text on the baseline grid", () => {
    for (const piece of pieces.filter(isTextPiece)) {
      const block = blocks.get(piece.block);
      if (block?.kind !== "paragraph") continue;
      const lines = (PAGE.lastBaseline - piece.y) / PAGE.pitch;
      expect(Math.abs(lines - Math.round(lines)), piece.block).toBeLessThan(
        0.001,
      );
    }
  });
});
