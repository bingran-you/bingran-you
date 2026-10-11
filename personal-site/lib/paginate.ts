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
  /** Leading of running text. */
  pitch: 10.75,
  /** The foot of the text: the last baseline of a page. */
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

/**
 * The width each kind of text is set in: headings and the line of authors
 * and venue across the page, the rest in a column.
 */
export const MEASURE: Record<TextKind, number> = {
  section: PAGE.textWidth,
  heading: PAGE.textWidth,
  citation: PAGE.textWidth,
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
 * page; a `column` box is no wider than a text column and a `wide` one
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

/** `length` is that of the last page: its sheet ends under its content. */
export type Layout = { hash: string; length: number; pages: Piece[][] };

/**
 * How full a page is: the height its parts leave `unused` at their least
 * distances, the `gaps` between them, the `growth` of one inside a paper
 * (one above a paper grows by twice as much), and what is `left` unused
 * under the last part. None of the last page is unused.
 */
export type Fill = {
  unused: number;
  gaps: number;
  growth: number;
  left: number;
};

// ── vertical rhythm ─────────────────────────────────────────────────────
//
// A page is a pile of parts: a paper's title over its abstract, a figure
// over its caption, a table, the reference list. Each hangs from a line,
// the bottom of a rule that may or may not be drawn: a box stands
// RULE_TO_BOX under it and a first baseline RULE_TO_TEXT. The foot of a
// part is its last baseline or the bottom of its box. The first part of a
// page hangs from the head rule, every other one a gap under the foot of
// the part above it.

/** Top of the title block: the title's first baseline less its leading. */
export const FRONT_TOP = 41.55;
/** Bottom of the head rule. */
const HEAD_RULE = 45;
/** From the bottom of a rule to the top of a box under it. */
const RULE_TO_BOX = 4.58;
/** From the bottom of a rule to the first baseline under it. */
const RULE_TO_TEXT = 10.52;
/** From the heading of a track to the rule of its first paper. */
const SECTION_DROP = 9;
/** From the last baseline of a title to the line of authors and venue. */
const CITATION_DROP = 10.25;
/** From that line to the first baseline of the abstract. */
const ABSTRACT_DROP = 12.25;
/** From the heading of the reference list to its first entry. */
const REFERENCE_DROP = 11.1;
/** From the bottom of a figure to the first baseline of its caption. */
const CAPTION_DROP = 14;
/** A figure under the head of its paper is level with the capitals of a first line. */
const CAP_HEIGHT = 6.1;
/** From the last baseline of the text to the first of the footnotes. */
const FOOTNOTE_GAP = 16;

/**
 * From the foot of a part to the line the next one hangs from: what that
 * is at the `least`, and how far it may `grow` to bring the foot of a page
 * down to its limit.
 */
type Gap = { least: number; grow: number };

/** The most a gap between the parts of a paper grows. */
export const STRETCH = 28;
/** Between the parts of a paper. */
const WITHIN: Gap = { least: 18, grow: STRETCH };
/** Above a paper and above the reference list: it grows twice as far. */
const ABOVE: Gap = { least: 28, grow: 2 * STRETCH };

/** The fewest lines in a column of an abstract that a page divides. */
export const MIN_LINES = 4;

/** Lengths closer than this, in points, are the same. */
const EPSILON = 0.01;

// ── lines in columns ────────────────────────────────────────────────────

/** A line of a text block. No column ends after one `tied` to the next. */
type Row = { text: MeasuredText; line: number; tied: boolean };

/**
 * The lines of text blocks that follow one another. A paragraph leaves at
 * least two lines on either side of a break and a reference is never
 * broken. (A word broken where a column ends is the typesetter's to mend.)
 */
function rowsOf(...texts: MeasuredText[]): Row[] {
  return texts.flatMap((text) => {
    const last = text.lines.length - 1;
    return text.lines.map((_, line) => ({
      text,
      line,
      tied:
        text.kind === "reference"
          ? line < last
          : text.kind === "paragraph" &&
            ((line === 0 && last > 0) || line === last - 1),
    }));
  });
}

/** Pieces where they stand, and the foot of the lowest of them. */
type Laid = { pieces: Piece[]; foot: number };

const together = (...laid: Laid[]): Laid => ({
  pieces: laid.flatMap(({ pieces }) => pieces),
  foot: Math.max(...laid.map(({ foot }) => foot)),
});

/** Rows one under the other from the baseline `y`: a piece to each block. */
function column(rows: Row[], x: number, y: number): Laid {
  const pieces: TextPiece[] = [];
  let foot = y;
  rows.forEach(({ text, line }, n) => {
    foot = y + n * LEADING[text.kind];
    const previous = pieces.at(-1);
    if (previous?.block === text.id) {
      previous.lines.push(text.lines[line]);
    } else {
      pieces.push({
        block: text.id,
        x: text.kind === "reference" ? round(x + REFERENCE_INDENT) : x,
        y: round(foot),
        w: MEASURE[text.kind],
        lines: [text.lines[line]],
      });
    }
  });
  return { pieces, foot };
}

/**
 * How many of the rows stand in the left of two columns: as nearly half
 * as their ties allow, and the larger of two counts that are as near.
 */
function leftOf(rows: Row[]): number {
  let left = rows.length;
  for (let n = 1; n < rows.length; n++) {
    if (rows[n - 1].tied) continue;
    const nearer =
      Math.abs(2 * n - rows.length) <= Math.abs(2 * left - rows.length);
    if (nearer) left = n;
  }
  return left;
}

/** Rows in two columns that start on the baseline `y` and end evenly. */
function columns(rows: Row[], y: number): Laid {
  const left = leftOf(rows);
  const [x, right] = PAGE.columns;
  return together(
    column(rows.slice(0, left), x, y),
    column(rows.slice(left), right, y),
  );
}

/** A text block across the page, a drop under the baseline above it. */
type Run = [text: MeasuredText, drop: number];

function under(top: number, runs: Run[]): Laid {
  return runs.reduce<Laid>(
    (above, [text, drop]) =>
      together(above, column(rowsOf(text), PAGE.columns[0], above.foot + drop)),
    { pieces: [], foot: top },
  );
}

// ── boxes ───────────────────────────────────────────────────────────────

type Captioned = { box: MeasuredBox; caption?: MeasuredText };

/** A box with its top at `y`: in column `c`, or across both if it is wide. */
function boxAt(box: MeasuredBox, c: number, y: number): Laid {
  const narrow = box.kind === "column";
  const piece = {
    block: box.id,
    x: PAGE.columns[narrow ? c : 0],
    y: round(y),
    w: narrow ? PAGE.columnWidth : PAGE.textWidth,
    h: box.height,
  };
  return { pieces: [piece], foot: y + box.height };
}

/** A box over its caption: in the box's column, or in two under a wide one. */
function captioned({ box, caption }: Captioned, c: number, y: number): Laid {
  const figure = boxAt(box, c, y);
  if (!caption) return figure;
  const rows = rowsOf(caption);
  const baseline = figure.foot + CAPTION_DROP;
  return together(
    figure,
    box.kind === "column"
      ? column(rows, PAGE.columns[c], baseline)
      : columns(rows, baseline),
  );
}

// ── parts and blocks ────────────────────────────────────────────────────

/**
 * What stands on a page in one piece: `lay` places it with the line it
 * hangs from at `top`, a `gap` under the foot of the part above. `cut` is
 * set where it leaves the text of its paper unfinished: a page that ends
 * with it ends at its foot.
 */
type Part = { gap: Gap; cut: boolean; lay: (top: number) => Laid };

/**
 * A stretch of the article that a page may end after, or at one of its
 * `stops`. `parts` is what a page has of it from one stop to another, 0
 * being its start and `stops + 1` its end: null where that cannot be.
 */
type Block = {
  stops: number;
  parts: (from: number, to: number) => Part[] | null;
};

const whole = (part: Part): Block => ({ stops: 0, parts: () => [part] });

/** Boxes side by side: one that spans the columns, or one to each column. */
const shelf = (boxes: Captioned[]): Part => ({
  gap: WITHIN,
  cut: false,
  lay: (top) =>
    together(...boxes.map((box, c) => captioned(box, c, top + RULE_TO_BOX))),
});

/**
 * A paper: its head over its abstract in two columns, then its figure. A
 * page may end between two lines of the abstract that are not tied: the
 * abstract runs on at the top of the next page, again in two columns. The
 * page it ends has MIN_LINES lines or more in each column and as many in
 * one as in the other, so that both end at its foot. What runs on has
 * columns a line apart at the most, of which the shorter may be a line
 * short of MIN_LINES. A page may also end with the figure under the head
 * and the abstract after it, or in an abstract that follows its figure.
 */
function paper(head: Run[], abstract: Row[], figure?: Captioned): Block {
  const all = abstract.length;
  const cuts = abstract
    .flatMap(({ tied }, n) => (tied ? [] : [n + 1]))
    .slice(0, -1);
  // Where a page may end, and before which line of the abstract: in the
  // abstract or after it, then, with the figure first, after that or in
  // the abstract.
  type Break = [first: boolean, line: number];
  const breaks = cuts.map((line): Break => [false, line]);
  if (figure) {
    const after = cuts.map((line): Break => [true, line]);
    breaks.push([false, all], [true, 0], ...after);
  }

  /** Lines `from` to `to` of the abstract: under the head, or after `first`. */
  const text = (from: number, to: number, first: boolean): Part | null => {
    const rows = abstract.slice(from, to);
    const left = leftOf(rows);
    const right = rows.length - left;
    const enough =
      to < all
        ? left === right && left >= MIN_LINES
        : Math.abs(left - right) <= 1 && rows.length >= 2 * MIN_LINES - 1;
    if (rows.length < all && !enough) return null;
    return {
      gap: first ? WITHIN : ABOVE,
      cut: to < all,
      lay(top) {
        if (from > 0 || first) return columns(rows, top + RULE_TO_TEXT);
        const opened = under(top, head);
        return together(opened, columns(rows, opened.foot + ABSTRACT_DROP));
      },
    };
  };
  /** The figure under the head: `cut` where the page ends with it. */
  const headed = (image: Captioned, cut: boolean): Part => ({
    gap: ABOVE,
    cut,
    lay(top) {
      const opened = under(top, head);
      const y = opened.foot + ABSTRACT_DROP - CAP_HEIGHT;
      return together(opened, captioned(image, 0, y));
    },
  });

  return {
    stops: breaks.length,
    parts(from, to) {
      const [order, start] = from > 0 ? breaks[from - 1] : [undefined, 0];
      const [first = order, end] =
        to <= breaks.length ? breaks[to - 1] : [undefined, all];
      // A page does not go on in one order from a stop of the other.
      if (order !== undefined && first !== order) return null;
      const lines = end > start ? text(start, end, first === true) : undefined;
      if (lines === null) return null;
      const rest = lines ? [lines] : [];
      if (!figure) return rest;
      if (first) return from > 0 ? rest : [headed(figure, !lines), ...rest];
      return to > breaks.length ? [...rest, shelf([figure])] : rest;
    },
  };
}

/**
 * A paper whose figure fits a column: the abstract and under it the
 * caption in one column, the figure in the other. The caption ends level
 * with the figure, or follows the abstract where that is lower.
 */
function paperBeside(head: Run[], abstract: Row[], figure: Captioned): Part {
  return {
    gap: ABOVE,
    cut: false,
    lay(top) {
      const opened = under(top, head);
      const [x] = PAGE.columns;
      const y = opened.foot + ABSTRACT_DROP;
      const text = column(abstract, x, y);
      const box = boxAt(figure.box, 1, y - CAP_HEIGHT);
      const laid = together(opened, text, box);
      if (!figure.caption) return laid;
      const rows = rowsOf(figure.caption);
      const depth = (rows.length - 1) * LEADING.caption;
      const baseline = Math.max(
        text.foot + WITHIN.least + RULE_TO_TEXT,
        box.foot - depth,
      );
      return together(laid, column(rows, x, baseline));
    },
  };
}

/** The reference list: its heading over the entries in two columns. */
const references = (heading: MeasuredText, entries: MeasuredText[]): Part => ({
  gap: ABOVE,
  cut: false,
  lay(top) {
    const opened = under(top, [[heading, RULE_TO_TEXT]]);
    return together(
      opened,
      columns(rowsOf(...entries), opened.foot + REFERENCE_DROP),
    );
  },
});

const isBox = (block: MeasuredText | MeasuredBox): block is MeasuredBox =>
  "height" in block;

/**
 * Reads the article as its title block, the boxes that open it, the blocks
 * its pages are made up of, and the reference list that closes it. A paper
 * is its title, the line of authors and venue, its abstract and its
 * figure, under the heading of its track if it is the first of one. Its
 * table is a block of its own. A heading that no paper follows is that of
 * the reference list.
 */
function read(measured: Proof["blocks"]) {
  const queue = [...measured];
  const text = (kind: TextKind) => {
    const [next] = queue;
    if (!next || isBox(next) || next.kind !== kind) return undefined;
    queue.shift();
    return next;
  };
  const texts = (kind: TextKind) => {
    const found: MeasuredText[] = [];
    for (let next = text(kind); next; next = text(kind)) found.push(next);
    return found;
  };
  const box = (kind: MeasuredBox["kind"]): Captioned | undefined => {
    const [next] = queue;
    if (!next || !isBox(next) || next.kind !== kind) return undefined;
    queue.shift();
    return { box: next, caption: text("caption") };
  };

  const front = box("front")?.box;
  const opening: Part[] = [];
  const blocks: Block[] = [];
  let closing: Part | undefined;
  while (queue.length > 0 && !closing) {
    const section = text("section");
    const title = text("heading");
    if (title) {
      const head: Run[] = section
        ? [
            [section, RULE_TO_TEXT],
            [title, SECTION_DROP + RULE_TO_TEXT],
          ]
        : [[title, RULE_TO_TEXT]];
      head.push(...texts("citation").map((line): Run => [line, CITATION_DROP]));
      const abstract = rowsOf(...texts("paragraph"));
      const beside = box("column");
      blocks.push(
        beside
          ? whole(paperBeside(head, abstract, beside))
          : paper(head, abstract, box("wide")),
      );
    } else if (section) {
      closing = references(section, texts("reference"));
    } else {
      const first = box("wide") ?? box("column");
      if (!first) break;
      const second = first.box.kind === "column" ? box("column") : undefined;
      const part = shelf(second ? [first, second] : [first]);
      if (blocks.length > 0) blocks.push(whole(part));
      else opening.push(part);
    }
  }
  if (queue.length > 0) throw new Error(`Nothing places "${queue[0].id}".`);
  return { front, opening, blocks, closing };
}

// ── pages ───────────────────────────────────────────────────────────────

/** The line the first part of a page hangs from, and the lowest foot. */
type Frame = { top: number; limit: number };

/**
 * Parts under one another from `top`, every gap grown by `share` of what
 * it may grow.
 */
function pile(parts: Part[], top: number, share = 0): Laid {
  return parts.reduce<Laid>(
    (above, { gap, lay }, n) =>
      together(above, lay(n ? above.foot + gap.least + share * gap.grow : top)),
    { pieces: [], foot: top },
  );
}

/** Where a page may end: `at` a stop of a block, 0 being its start. */
type Stop = { block: number; at: number };

/** The parts from one stop to another: null where a block has none. */
function between(blocks: Block[], from: Stop, to: Stop): Part[] | null {
  const parts: Part[] = [];
  const end = to.at > 0 ? to.block + 1 : to.block;
  for (let b = from.block; b < end; b++) {
    const some = blocks[b].parts(
      b === from.block ? from.at : 0,
      b === to.block ? to.at : blocks[b].stops + 1,
    );
    if (!some) return null;
    parts.push(...some);
  }
  return parts;
}

/**
 * A page the article could have, up to the stop `end`: its parts, the
 * height they leave `unused` at their least distances, the `share` of
 * their growth its gaps take up of it, and what is `left` under the last
 * part when they have grown all they may. `alone` is 1 where the page
 * holds the reference list by itself and `cut` where it leaves the text
 * of a paper unfinished.
 */
type Page = {
  end: number;
  parts: Part[];
  unused: number;
  share: number;
  left: number;
  alone: number;
  cut: number;
};

/** What a run of pages costs: the first entry weighs most. */
type Cost = number[];

/** What the pages after the last one cost. */
const NOTHING: Cost = [0, 0, 0, 0];

const cheaper = (a: Cost, b: Cost) => {
  const n = a.findIndex((value, i) => value !== b[i]);
  return n >= 0 && a[n] < b[n];
};

/** A page, and what it and the pages after it cost. */
type Plan = { page: Page; cost: Cost };

/**
 * The cheapest run of pages through the article: one of `firsts`, then one
 * of `laters[stop]` for the stop each page ends at, none of which leaves
 * more than `most` unused. `weigh` is the cost of a page and the pages
 * after it.
 */
function choose(
  firsts: Page[],
  laters: Page[][],
  weigh: (rest: Cost, page: Page) => Cost,
  most: number,
): Plan[] {
  const last = laters.length;
  // plans[n] is the best run of later pages from stop n to the end.
  const plans: (Plan | undefined)[] = [];
  const best = (pages: Page[]) => {
    let plan: Plan | undefined;
    for (const page of pages) {
      const rest = page.end === last ? NOTHING : plans[page.end]?.cost;
      if (!rest || page.left > most) continue;
      const cost = weigh(rest, page);
      if (!plan || cheaper(cost, plan.cost)) plan = { page, cost };
    }
    return plan;
  };
  for (let from = last - 1; from >= 0; from--) plans[from] = best(laters[from]);
  const run: Plan[] = [];
  for (let plan = best(firsts); ; plan = plans[plan.page.end]) {
    if (!plan) throw new Error("A block is taller than a page.");
    run.push(plan);
    if (plan.page.end === last) return run;
  }
}

/**
 * Lays the article out in pages. The title block and the boxes that open
 * the article stand on the first page; the blocks follow one another down
 * the pages, each page filled from the top, and the reference list closes
 * the last, whose sheet ends under it. The gaps of every other page grow,
 * each by what it may at the most, to bring its last part down to its
 * foot: the page is left what they cannot take up of its unused height.
 * Where the pages end is chosen for the whole article at once: so that
 * the page that is left the most is left the least; then, with no page
 * left more than that, so that the pages are left the least in all, the
 * fewest of them leave the text of a paper unfinished (an abstract
 * divided, or after its figure), and the unused heights are as even as
 * can be (the least sum of squares). Before any of that the reference
 * list is kept from a page by itself.
 */
export function paginate(proof: Proof): { layout: Layout; fills: Fill[] } {
  const { front, opening, blocks, closing } = read(proof.blocks);
  if (closing) blocks.push(whole(closing));
  const stops: Stop[] = blocks.flatMap((block, b) =>
    Array.from({ length: block.stops + 1 }, (_, at) => ({ block: b, at })),
  );
  const last = stops.push({ block: blocks.length, at: 0 }) - 1;

  const first: Frame = {
    top: front ? FRONT_TOP + front.height : HEAD_RULE,
    limit: PAGE.lastBaseline - proof.footnotes - FOOTNOTE_GAP,
  };
  const later: Frame = { top: HEAD_RULE, limit: PAGE.lastBaseline };

  /** The pages that may start at stop `from`, with `lead` at their top. */
  const pagesFrom = (from: number, lead: Part[], { top, limit }: Frame) => {
    const alone = closing && from === last - 1 && lead.length === 0 ? 1 : 0;
    const pages: Page[] = [];
    for (let to = from; to <= last; to++) {
      const more = between(blocks, stops[from], stops[to]);
      if (!more || lead.length + more.length === 0) continue;
      const parts = [...lead, ...more];
      const spare = round(limit - pile(parts, top).foot);
      // Too long up to the end of a block, the page takes nothing more.
      if (spare < -EPSILON && stops[to].at === 0) break;
      if (spare < -EPSILON) continue;
      // The sheet of the last page ends under it: none of it is unused.
      const unused = to === last ? 0 : Math.max(spare, 0);
      const room = parts.slice(1).reduce((sum, { gap }) => sum + gap.grow, 0);
      const share = room > 0 ? Math.min(unused / room, 1) : 0;
      const left = round(Math.max(unused - room, 0));
      const cut = parts[parts.length - 1].cut ? 1 : 0;
      // A page that leaves the text of a paper unfinished ends at its foot.
      if (cut && left > EPSILON) continue;
      pages.push({ end: to, parts, unused, share, left, alone, cut });
    }
    return pages;
  };
  const firsts = pagesFrom(0, opening, first);
  if (firsts.length === 0) {
    throw new Error("The first page does not hold what opens the article.");
  }
  const laters = stops
    .slice(0, last)
    .map((_, from) => pagesFrom(from, [], later));

  const [{ cost: least }] = choose(
    firsts,
    laters,
    ([alone, worst], page) => [alone + page.alone, Math.max(worst, page.left)],
    Infinity,
  );
  const run = choose(
    firsts,
    laters,
    ([alone, left, cuts, squares], page) => [
      alone + page.alone,
      round(left + page.left),
      cuts + page.cut,
      squares + page.unused ** 2,
    ],
    least[1],
  );

  const fills: Fill[] = [];
  const laid = run.map(({ page: { parts, unused, share, left } }, n) => {
    const growth = round(share * STRETCH);
    fills.push({ unused, gaps: parts.length - 1, growth, left });
    return pile(parts, n === 0 ? first.top : later.top, share);
  });
  const pages = laid.map(({ pieces }) => pieces);
  if (front) pages[0].unshift(...boxAt(front, 0, FRONT_TOP).pieces);
  const { limit } = pages.length > 1 ? later : first;
  const length = round(laid[laid.length - 1].foot + PAGE.height - limit);

  return { layout: { hash: proof.hash, length, pages }, fills };
}
