import {
  getPaperDetail,
  papers,
  TRACK_LABEL,
  type Paper,
  type Track,
} from "@/lib/content";
import { parseInline, type Inline } from "@/lib/inline";
import { PAGE, type MeasuredBox, type TextKind } from "@/lib/paginate";
import { PERSON } from "@/lib/site";

// The home page as one article: the blocks the typesetter measures and the
// pages are built from, in reading order.

/** A run of text, broken into lines by the typesetter. */
export type TextBlock = {
  id: string;
  kind: TextKind;
  content: Inline[];
  /** Set on a paragraph that follows another: its first line is indented. */
  indent?: boolean;
  /** The number of a reference, hung in front of its text. */
  label?: string;
  /** Set where the block can be linked to, by its id. */
  anchor?: boolean;
};

/**
 * A block that is placed whole: the title block, a figure or a table. A
 * figure's caption is text of its own.
 */
export type BoxBlock = {
  id: string;
  span: MeasuredBox["kind"];
  caption?: TextBlock;
} & (
  | { kind: "front" | "education" | "portrait" | "projects" }
  | { kind: "figure" | "table"; paper: Paper; number: number }
);

export type Block = TextBlock | BoxBlock;

export const isText = (block: Block): block is TextBlock => "content" in block;

type NumberedPaper = { paper: Paper; figure: number; table?: number };

/** Fig. 1 is the portrait and Tables 1–2 are on the title page. */
function numberPapers(): NumberedPaper[] {
  let figure = 1;
  let table = 2;
  return papers.map((paper) => ({
    paper,
    figure: ++figure,
    table: getPaperDetail(paper.slug).table ? ++table : undefined,
  }));
}

/** The author list, with Bingran's name in bold. */
function authors(list: string): Inline[] {
  const [before, after] = list.split("You, B.");
  return after === undefined
    ? [list]
    : [before, { tag: "b", children: ["You, B."] }, after];
}

function source(paper: Paper): Inline[] {
  const { reference, arxiv } = paper;
  switch (reference.kind) {
    case "journal":
      return [
        { tag: "i", children: [reference.journal] },
        " ",
        { tag: "b", children: [reference.volume] },
        `, ${reference.pages} (${reference.year})`,
      ];
    case "conference":
      return [
        "In ",
        { tag: "i", children: [reference.name] },
        ` (${reference.year}); preprint at arXiv:${arxiv}`,
      ];
    case "preprint":
      return [`Preprint at arXiv:${arxiv} (${reference.year})`];
  }
}

/** Authors and venue under a paper's title, and a journal paper's preprint. */
function citation(paper: Paper): Inline[] {
  const preprint: Inline[] =
    paper.reference.kind === "journal"
      ? [
          " ",
          {
            tag: "a",
            href: `https://arxiv.org/abs/${paper.arxiv}`,
            children: [`arXiv:${paper.arxiv}`],
          },
          ".",
        ]
      : [];
  return [...authors(paper.authors), " ", ...source(paper), ".", ...preprint];
}

/** One entry of a reference list, without its number. */
export function reference(paper: Paper): Inline[] {
  return [
    ...authors(paper.authors),
    " ",
    { tag: "a", href: paper.href, children: [paper.title] },
    ". ",
    ...source(paper),
    ".",
  ];
}

/** The deed of a licence, by the name a paper's detail gives it. */
const LICENSE_HREF: Record<string, string> = {
  "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
};

/**
 * "Figure 1 of arXiv:2602.12670 (CC BY 4.0).": where a paper's figure or
 * table is from. The name of the licence links to its deed.
 */
export function credit(paper: Paper, label: string): Inline[] {
  const { license } = getPaperDetail(paper.slug);
  const source = `${label} of arXiv:${paper.arxiv}`;
  if (!license) return [`${source}.`];
  const href = LICENSE_HREF[license];
  const name: Inline = href ? { tag: "a", href, children: [license] } : license;
  return [`${source} (`, name, ")."];
}

/** A paper's own caption under its figure, and where the figure comes from. */
function figureCaption(paper: Paper, number: number): Inline[] {
  const { figure } = getPaperDetail(paper.slug);
  return [
    { tag: "b", children: [`Fig. ${number} | `] },
    ...parseInline(figure.caption),
    " ",
    { tag: "cite", children: credit(paper, figure.sourceLabel) },
  ];
}

export const PORTRAIT_CAPTION: Inline[] = [
  { tag: "b", children: [`Fig. 1 | ${PERSON.name}.`] },
];

/** A box as wide as a text column stands in one; a wider one spans both. */
const spanOf = (printWidth: number) =>
  printWidth <= PAGE.columnWidth ? "column" : "wide";

/** A paper in its own words: title, citation, abstract, figure and table. */
function paperBlocks({ paper, figure, table }: NumberedPaper): Block[] {
  const { slug } = paper;
  const detail = getPaperDetail(slug);
  const blocks: Block[] = [
    {
      id: slug,
      kind: "heading",
      content: [{ tag: "a", href: paper.href, children: [paper.title] }],
      anchor: true,
    },
    { id: `${slug}.citation`, kind: "citation", content: citation(paper) },
    ...detail.abstract.map(
      (paragraph, i): TextBlock => ({
        id: `${slug}.abstract.${i}`,
        kind: "paragraph",
        content: parseInline(paragraph),
        indent: i > 0,
      }),
    ),
    {
      id: `${slug}.figure`,
      kind: "figure",
      span: spanOf(detail.figure.printWidth),
      paper,
      number: figure,
      caption: {
        id: `${slug}.caption`,
        kind: "caption",
        content: figureCaption(paper, figure),
      },
    },
  ];
  if (detail.table && table) {
    blocks.push({
      id: `${slug}.table`,
      kind: "table",
      span: spanOf(detail.table.printWidth),
      paper,
      number: table,
    });
  }
  return blocks;
}

/**
 * The home article: the title block, the education table beside the
 * portrait, the projects table, then every paper under the heading of its
 * track, and the reference list.
 */
export function homeArticle(): Block[] {
  const blocks: Block[] = [
    { id: "front", kind: "front", span: "front" },
    { id: "education", kind: "education", span: "column" },
    {
      id: "portrait",
      kind: "portrait",
      span: "column",
      caption: {
        id: "portrait.caption",
        kind: "caption",
        content: PORTRAIT_CAPTION,
      },
    },
    { id: "projects", kind: "projects", span: "wide" },
  ];
  let track: Track | undefined;
  for (const numbered of numberPapers()) {
    if (numbered.paper.track !== track) {
      track = numbered.paper.track;
      blocks.push({
        id: `section.${track}`,
        kind: "section",
        content: [TRACK_LABEL[track]],
      });
    }
    blocks.push(...paperBlocks(numbered));
  }
  blocks.push({
    id: "references",
    kind: "section",
    content: ["References"],
    anchor: true,
  });
  papers.forEach((paper, i) => {
    blocks.push({
      id: `ref-${paper.slug}`,
      kind: "reference",
      content: reference(paper),
      label: `${i + 1}.`,
      anchor: true,
    });
  });
  return blocks;
}

/** Every text block and box of an article, captions included, by id. */
export function blocksById(blocks: Block[]): Map<string, Block> {
  return new Map(
    blocks
      .flatMap((block) =>
        !isText(block) && block.caption ? [block, block.caption] : [block],
      )
      .map((block) => [block.id, block]),
  );
}
