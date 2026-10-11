// Pagination of an article: where every line, figure and table stands on
// its page. Lengths are points from the top-left corner of a page, measured
// from a printed journal page.
//
// scripts/typeset.mjs runs this file under plain Node, as it is: keep it
// free of imports and of syntax that is more than type annotations.

export const PAGE = {
  /** A sheet of 210 × 279 mm. */
  width: 595.276,
  height: 790.866,
  /** Left edges of the two text columns: 90 mm wide, 4 mm apart. */
  columns: [39.69, 306.14],
  columnWidth: 255.12,
  /** Both columns and the gutter between them. */
  textWidth: 521.57,
  /** Leading of running text. Its baselines form a grid down the page. */
  pitch: 10.75,
  /** Baselines of the first and the last line of a full column of 65. */
  firstBaseline: 55.52,
  lastBaseline: 743.52,
} as const;

export type TextKind =
  | "section"
  | "heading"
  | "citation"
  | "paragraph"
  | "reference"
  | "caption";

export const LEADING: Record<TextKind, number> = {
  section: PAGE.pitch,
  heading: PAGE.pitch,
  citation: 8,
  paragraph: PAGE.pitch,
  reference: 8,
  caption: 10,
};

/** A reference hangs this far right of its number. */
export const REFERENCE_INDENT = 14.2;

/** Lengths are kept to a hundredth of a point. */
const round = (value: number) => Math.round(value * 100) / 100;

/** The width each kind of text is set in. */
export const MEASURE: Record<TextKind, number> = {
  section: PAGE.columnWidth,
  heading: PAGE.columnWidth,
  citation: PAGE.columnWidth,
  paragraph: PAGE.columnWidth,
  reference: round(PAGE.columnWidth - REFERENCE_INDENT),
  caption: PAGE.columnWidth,
};

/**
 * Lines are broken this much short of their measure. Justification takes
 * up the slack, which absorbs the rounding that differs between browsers.
 */
export const SLACK = 0.75;

/**
 * Characters `start` to `end` of a block. `hyphen` is 1 when the line
 * breaks a word. `track` is how much tighter or looser than the rest it is
 * set, in thousandths of an em (`.tracked` in the styles).
 */
export type Line = [start: number, end: number, hyphen?: 0 | 1, track?: number];

export type MeasuredText = { id: string; kind: TextKind; lines: Line[] };

/**
 * A block that is placed whole. `front` is the title block of the first
 * page; a `column` float is no wider than a text column and a `wide` one
 * spans both.
 */
export type MeasuredBox = {
  id: string;
  kind: "front" | "column" | "wide";
  height: number;
};

/** What the proof view reports, in the order of the article. */
export type Proof = {
  hash: string;
  /** From the first to the last baseline of the first page's footnotes. */
  footnotes: number;
  blocks: (MeasuredText | MeasuredBox)[];
};

/** Lines of a text block: `y` is the baseline of the first. */
export type TextPiece = {
  block: string;
  x: number;
  y: number;
  w: number;
  lines: Line[];
};

/** A block placed whole: `y` is its top. */
export type BoxPiece = {
  block: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type Piece = TextPiece | BoxPiece;

export const isTextPiece = (piece: Piece): piece is TextPiece =>
  "lines" in piece;

export type Layout = { hash: string; pages: Piece[][] };

/**
 * How full a page is: its floats and, per column, the grid lines left empty
 * under the text (null for a column without text).
 */
export type Fill = { floats: string[]; free: (number | null)[] };

// ── vertical rhythm ─────────────────────────────────────────────────────

/** Top of the title block: the title's first baseline less its leading. */
export const FRONT_TOP = 41.55;
/** Bottom of the head rule. */
const HEAD_RULE = 45;
/** From the bottom of a rule to the floats under it. */
const RULE_TO_FLOAT = 4.58;
/** From the bottom of the title block's rule to the first baseline under it. */
const RULE_TO_TEXT = 10.68;
/** Between one float and the next below it. */
const FLOAT_GAP = 20;
/** From the bottom of a float to the first baseline that may follow. */
const FLOAT_TO_TEXT = 30.5;
/** From the bottom of a figure to the first baseline of its caption. */
const CAPTION_DROP = 14;
/** From the last baseline of a caption to the bottom of its float. */
export const CAPTION_DESCENT = 2.5;
/** From the last baseline of the text to the first of the footnotes. */
const FOOTNOTE_GAP = 16;

/** Text that flows through the columns: every kind but a caption. */
type FlowKind = Exclude<TextKind, "caption">;

/**
 * Whether a kind stands on the baseline grid, where a column may end
 * between two of its lines. The others keep their own leading and are
 * never broken.
 */
const ON_GRID: Record<FlowKind, boolean> = {
  section: true,
  heading: true,
  citation: false,
  paragraph: true,
  reference: false,
};

/**
 * Where a first line stands relative to the grid line it takes: headings
 * a little above it, and the small type of citations and references so
 * that its capitals line up with those of running text.
 */
const RISE: Record<FlowKind, number> = {
  section: -2,
  heading: -1,
  citation: -1.5,
  paragraph: 0,
  reference: -1.65,
};

/** Lengths closer than this, in points, are the same. */
const EPSILON = 0.01;

/** The first grid baseline at or below `y`. */
function gridFrom(y: number): number {
  const up = Math.floor((PAGE.lastBaseline - y + EPSILON) / PAGE.pitch);
  return PAGE.lastBaseline - up * PAGE.pitch;
}

/** The last grid baseline at or above `y`. */
function gridUpTo(y: number): number {
  const up = Math.ceil((PAGE.lastBaseline - y - EPSILON) / PAGE.pitch);
  return PAGE.lastBaseline - up * PAGE.pitch;
}

// ── the flow ────────────────────────────────────────────────────────────

/**
 * Lines of a text block that stay together. A column may end after a row
 * unless `keep` ties it to the next one.
 */
type Row = {
  text: MeasuredText & { kind: FlowKind };
  from: number;
  to: number;
  keep: boolean;
};

/** `anchor` is the row of the heading the float belongs to, -1 for none. */
type Float = MeasuredBox & { anchor: number; caption?: MeasuredText };

/**
 * Splits the article into the rows that flow through the columns and the
 * floats. A heading is never the last thing in a column: it keeps its
 * citation and two lines of text. A paragraph leaves at least two lines on
 * either side of a break, and none of its words is broken across one. A
 * citation and a reference are never broken.
 */
function flow(blocks: Proof["blocks"]) {
  const rows: Row[] = [];
  const floats: Float[] = [];
  let front: MeasuredBox | undefined;
  let anchor = -1;
  for (const block of blocks) {
    if ("height" in block) {
      if (block.kind === "front") front = block;
      else floats.push({ ...block, anchor });
      continue;
    }
    const { kind, lines } = block;
    if (kind === "caption") {
      floats[floats.length - 1].caption = block;
      continue;
    }
    const text = { ...block, kind };
    if (!ON_GRID[kind]) {
      rows.push({ text, from: 0, to: lines.length, keep: kind === "citation" });
      continue;
    }
    if (kind === "heading") anchor = rows.length;
    const last = lines.length - 1;
    lines.forEach(([, , hyphen], i) => {
      const keep =
        kind !== "paragraph" ||
        (i === 0 && last > 0) ||
        i === last - 1 ||
        hyphen === 1;
      rows.push({ text, from: i, to: i + 1, keep });
    });
  }
  return { rows, floats, front };
}

type Placed = { row: Row; y: number; last: number };

type Column = { placed: Placed[]; next: number };

/** Empty grid lines above a heading: fewer where a column starts. */
function leadIn(row: Row, previous: Placed | undefined, underFloat: boolean) {
  if (row.from > 0) return 0;
  if (row.text.kind === "section") return previous ? 2 : underFloat ? 0 : 1;
  if (row.text.kind === "heading") return previous ? 1 : 0;
  return 0;
}

/**
 * Fills a column from `rows[start]`: running text and headings on the grid
 * from `top` down, citations and references at their own leading, nothing
 * below `limit`.
 */
function fillColumn(
  rows: Row[],
  start: number,
  top: number,
  underFloat: boolean,
  limit: number,
): Column {
  const placed: Placed[] = [];
  let grid = top;
  let breakable = 0;
  let i = start;
  for (; i < rows.length; i++) {
    const row = rows[i];
    const { kind } = row.text;
    const leading = LEADING[kind];
    const onGrid = ON_GRID[kind];
    const previous = placed.at(-1);
    const y = onGrid
      ? grid + leadIn(row, previous, underFloat) * PAGE.pitch + RISE[kind]
      : previous?.row.text.kind === kind
        ? previous.last + leading
        : grid + RISE[kind];
    const last = y + (row.to - row.from - 1) * leading;
    if (last > limit + EPSILON) break;
    placed.push({ row, y, last });
    grid = onGrid ? y - RISE[kind] + PAGE.pitch : gridFrom(last + PAGE.pitch);
    if (!row.keep) breakable = placed.length;
  }
  if (i < rows.length) placed.length = breakable;
  return { placed, next: start + placed.length };
}

// ── floats ──────────────────────────────────────────────────────────────

/** Floats side by side at the top of a page: a wide one, or one per column. */
type Band = Float[];

/**
 * The bands with one more float, or null where it may not follow them: a
 * wide float under a column float would leave the other column empty
 * beside it.
 */
function stack(bands: Band[], float: Float): Band[] | null {
  const last = bands.at(-1);
  const open = last?.length === 1 && last[0].kind === "column";
  if (float.kind === "column" && open) {
    return [...bands.slice(0, -1), [...last, float]];
  }
  return open && float.kind === "wide" ? null : [...bands, [float]];
}

/** Lines of caption under a figure: a wide one sets it in two columns. */
function captionRows(float: Float): number {
  const lines = float.caption?.lines.length ?? 0;
  return float.kind === "column" ? lines : Math.ceil(lines / 2);
}

function floatHeight(float: Float): number {
  const rows = captionRows(float);
  if (rows === 0) return float.height;
  const caption = CAPTION_DROP + (rows - 1) * LEADING.caption + CAPTION_DESCENT;
  return float.height + caption;
}

function floatPieces(float: Float, column: number, y: number): Piece[] {
  const wide = float.kind !== "column";
  const x = PAGE.columns[wide ? 0 : column];
  const w = wide ? PAGE.textWidth : PAGE.columnWidth;
  const pieces: Piece[] = [
    { block: float.id, x, y: round(y), w, h: float.height },
  ];
  if (float.caption) {
    const { id, lines } = float.caption;
    const rows = captionRows(float);
    const baseline = round(y + float.height + CAPTION_DROP);
    const piece = (x: number, lines: Line[]): TextPiece => ({
      block: id,
      x,
      y: baseline,
      w: MEASURE.caption,
      lines,
    });
    pieces.push(piece(x, lines.slice(0, rows)));
    if (rows < lines.length) {
      pieces.push(piece(PAGE.columns[1], lines.slice(rows)));
    }
  }
  return pieces;
}

/**
 * Stands the bands one under the other from `top`. `under` is, per column,
 * the bottom of the float the text starts under, or null for none.
 */
function placeBands(bands: Band[], top: number) {
  const pieces: Piece[] = [];
  let under: (number | null)[] = [null, null];
  let y = top;
  let bottom = top;
  for (const band of bands) {
    const bottoms = band.map((float, column) => {
      pieces.push(...floatPieces(float, column, y));
      return y + floatHeight(float);
    });
    under =
      band[0].kind === "column"
        ? [bottoms[0], bottoms[1] ?? under[1]]
        : [bottoms[0], bottoms[0]];
    bottom = Math.max(...bottoms);
    y = bottom + FLOAT_GAP;
  }
  return { pieces, under, bottom };
}

// ── pages ───────────────────────────────────────────────────────────────

/** Where floats and text may start on a page, and the last baseline allowed. */
type Frame = { floats: number; text: number; limit: number };

type Page = { floats: Piece[]; columns: Column[]; next: number };

/** One page from `rows[start]` under the bands, or null if they do not fit. */
function layoutPage(
  rows: Row[],
  start: number,
  bands: Band[],
  frame: Frame,
): Page | null {
  const { pieces, under, bottom } = placeBands(bands, frame.floats);
  if (bottom > frame.limit + CAPTION_DESCENT + EPSILON) return null;
  let next = start;
  const columns = under.map((floatBottom) => {
    const underFloat = floatBottom !== null;
    const top = underFloat ? gridFrom(floatBottom + FLOAT_TO_TEXT) : frame.text;
    const column = fillColumn(rows, next, top, underFloat, frame.limit);
    next = column.next;
    return column;
  });
  return { floats: pieces, columns, next };
}

/** How finely `balance` looks for the shortest columns, in points. */
const BALANCE_STEP = 0.5;

/** The same page with the shortest columns that hold as much. */
function balance(
  rows: Row[],
  start: number,
  bands: Band[],
  frame: Frame,
  page: Page,
): Page {
  for (let limit = frame.floats; limit < frame.limit; limit += BALANCE_STEP) {
    const shorter = layoutPage(rows, start, bands, { ...frame, limit });
    if (shorter?.next === page.next) return shorter;
  }
  return page;
}

function textPieces(column: Column, x: number): TextPiece[] {
  const pieces: TextPiece[] = [];
  for (const { row, y } of column.placed) {
    const { id, kind, lines } = row.text;
    const previous = pieces.at(-1);
    if (previous?.block === id) {
      previous.lines.push(...lines.slice(row.from, row.to));
    } else {
      pieces.push({
        block: id,
        x: kind === "reference" ? round(x + REFERENCE_INDENT) : x,
        y: round(y),
        w: MEASURE[kind],
        lines: lines.slice(row.from, row.to),
      });
    }
  }
  return pieces;
}

/** The first page opens with the title block and closes with footnotes. */
function frameOf(title: MeasuredBox | undefined, footnotes?: number): Frame {
  const rule = title ? FRONT_TOP + title.height : HEAD_RULE;
  return {
    floats: rule + RULE_TO_FLOAT,
    text: title ? gridFrom(rule + RULE_TO_TEXT) : PAGE.firstBaseline,
    limit:
      footnotes === undefined
        ? PAGE.lastBaseline
        : gridUpTo(PAGE.lastBaseline - footnotes - FOOTNOTE_GAP),
  };
}

/**
 * One page from `rows[start]` with the floats that may stand above it, in
 * order from `floats[0]`. A float goes above the page its heading is on if
 * the heading stays on that page with the float above it. One left over from
 * an earlier page must leave room for text, unless it opens the page or no
 * text remains. The two columns end as evenly as their text allows, except
 * where the text ends on a page that floats still follow: there it runs on
 * down its column as on any page.
 */
function compose(rows: Row[], start: number, floats: Float[], frame: Frame) {
  let bands: Band[] = [];
  let page = layoutPage(rows, start, bands, frame);
  for (const float of floats) {
    if (!page || float.anchor >= page.next) break;
    const stacked = stack(bands, float);
    const attempt = stacked && layoutPage(rows, start, stacked, frame);
    if (!attempt) break;
    const stays =
      float.anchor >= start
        ? float.anchor < attempt.next
        : float.anchor < 0 ||
          bands.length === 0 ||
          attempt.next > start ||
          start === rows.length;
    if (!stays) break;
    bands = stacked;
    page = attempt;
  }
  if (!page || (page.next === start && bands.length === 0)) {
    throw new Error("A block is taller than a page.");
  }
  const placed = bands.flat();
  if (page.next < rows.length || placed.length === floats.length) {
    page = balance(rows, start, bands, frame, page);
  }
  return { page, floats: placed };
}

/**
 * Lays the article out in pages. The text fills column after column;
 * floats stand at the top of a page or of a column and keep their order.
 */
export function paginate(proof: Proof): { layout: Layout; fills: Fill[] } {
  const { rows, floats, front } = flow(proof.blocks);
  const pages: Piece[][] = [];
  const fills: Fill[] = [];
  let start = 0;
  let placed = 0;

  while (start < rows.length || placed < floats.length) {
    const first = pages.length === 0;
    const title = first ? front : undefined;
    const frame = frameOf(title, first ? proof.footnotes : undefined);
    const composed = compose(rows, start, floats.slice(placed), frame);
    const { page } = composed;

    const pieces: Piece[] = [...page.floats];
    if (title) {
      const [x] = PAGE.columns;
      const box = { x, y: FRONT_TOP, w: PAGE.textWidth, h: title.height };
      pieces.unshift({ block: title.id, ...box });
    }
    page.columns.forEach((column, c) => {
      pieces.push(...textPieces(column, PAGE.columns[c]));
    });
    pages.push(pieces);
    fills.push({
      floats: composed.floats.map((float) => float.id),
      free: page.columns.map((column) => {
        const last = column.placed.at(-1)?.last;
        return last === undefined
          ? null
          : Math.floor((frame.limit - last + EPSILON) / PAGE.pitch);
      }),
    });
    start = page.next;
    placed += composed.floats.length;
  }

  return { layout: { hash: proof.hash, pages }, fills };
}
