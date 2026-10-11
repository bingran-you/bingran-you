// Inline content as a small tree, so that a run of text can be cut at any
// character and its markup closed and reopened on either side of the cut.

/** The markup a paper's own text may carry (see PaperDetail). */
const COPIED_TAGS = ["i", "b", "sup", "sub", "code"] as const;

type CopiedTag = (typeof COPIED_TAGS)[number];

export type Inline =
  | string
  /** `cite` marks where a figure comes from; it is never in copied text. */
  | { tag: CopiedTag | "cite"; children: Inline[] }
  /** `continued` on a slice of a link that starts after the link does. */
  | { tag: "a"; href: string; children: Inline[]; continued?: true };

const ENTITIES: Record<string, string> = { lt: "<", gt: ">", amp: "&" };

const isCopiedTag = (name: string): name is CopiedTag =>
  (COPIED_TAGS as readonly string[]).includes(name);

/** Parses inline HTML copied from a paper: <i> <b> <sup> <sub> <code>. */
export function parseInline(html: string): Inline[] {
  const root: Inline[] = [];
  const open = [{ tag: "", children: root }];
  for (const [token, closing, tag, text] of html.matchAll(
    /<(\/?)([^<>]*)>|([^<]+)|</g,
  )) {
    if (text !== undefined) {
      open[0].children.push(
        text.replace(/&(lt|gt|amp);/g, (_, name) => ENTITIES[name]),
      );
    } else if (closing && open.length > 1 && tag === open[0].tag) {
      open.shift();
    } else if (closing === "" && isCopiedTag(tag)) {
      const node = { tag, children: [] as Inline[] };
      open[0].children.push(node);
      open.unshift(node);
    } else {
      throw new Error(`Unexpected ${token} in copied text.`);
    }
  }
  if (open.length > 1) {
    throw new Error(`Unclosed <${open[0].tag}> in copied text.`);
  }
  return root;
}

/** The text of the content, without its markup. */
export function inlineText(nodes: Inline[]): string {
  return nodes
    .map((node) =>
      typeof node === "string" ? node : inlineText(node.children),
    )
    .join("");
}

/** Characters `start` to `end` of the content, inside the markup they had. */
export function sliceInline(
  nodes: Inline[],
  start: number,
  end: number,
): Inline[] {
  const slice: Inline[] = [];
  let offset = 0;
  for (const node of nodes) {
    const length = inlineText([node]).length;
    const from = Math.max(start - offset, 0);
    const to = Math.min(end - offset, length);
    if (from < to) slice.push(sliceNode(node, from, to));
    offset += length;
  }
  return slice;
}

/** Characters `from` to `to` of one node; a link cut after its start says so. */
function sliceNode(node: Inline, from: number, to: number): Inline {
  if (typeof node === "string") return node.slice(from, to);
  const part = { ...node, children: sliceInline(node.children, from, to) };
  return part.tag === "a" && from > 0 ? { ...part, continued: true } : part;
}
