import { describe, expect, it } from "vitest";
import { inlineText, parseInline, sliceInline, type Inline } from "./inline";

const html =
  "A <sup>40</sup>Ca<sup>+</sup> ion, <i>x</i> &lt; 1 and <b>(a) <i>S</i></b>.";

describe("parseInline", () => {
  it("turns the markup of copied text into a tree", () => {
    expect(parseInline("4<sup>2</sup><i>S</i><sub>1/2</sub> &lt; 3")).toEqual([
      "4",
      { tag: "sup", children: ["2"] },
      { tag: "i", children: ["S"] },
      { tag: "sub", children: ["1/2"] },
      " < 3",
    ]);
  });

  it("keeps nesting", () => {
    expect(parseInline("<b>(a) <i>S</i></b>")).toEqual([
      { tag: "b", children: ["(a) ", { tag: "i", children: ["S"] }] },
    ]);
  });

  it("refuses markup a paper may not carry", () => {
    expect(() => parseInline('<a href="/">x</a>')).toThrow();
    expect(() => parseInline("<script>x</script>")).toThrow();
    expect(() => parseInline("<i>x</b>")).toThrow();
    expect(() => parseInline("<i>x")).toThrow();
    expect(() => parseInline("x < 1")).toThrow();
  });
});

describe("sliceInline", () => {
  const nodes = parseInline(html);
  const text = inlineText(nodes);

  it("reads the same text as the source", () => {
    expect(text).toBe("A 40Ca+ ion, x < 1 and (a) S.");
  });

  // Whatever the cuts, the slices read together are the text.
  it("cuts anywhere without losing or adding a character", () => {
    for (let a = 0; a <= text.length; a++) {
      for (let b = a; b <= text.length; b++) {
        const slices = [
          sliceInline(nodes, 0, a),
          sliceInline(nodes, a, b),
          sliceInline(nodes, b, text.length),
        ];
        expect(slices.map(inlineText)).toEqual([
          text.slice(0, a),
          text.slice(a, b),
          text.slice(b),
        ]);
      }
    }
  });

  it("closes the markup at a cut and reopens it after", () => {
    const href = "https://example.org";
    const italic = (text: string): Inline => ({ tag: "i", children: [text] });
    const link: Inline[] = [
      "See ",
      { tag: "a", href, children: ["the ", italic("long"), " title"] },
      ".",
    ];
    expect(sliceInline(link, 0, 10)).toEqual([
      "See ",
      { tag: "a", href, children: ["the ", italic("lo")] },
    ]);
    // The second slice of the link says that it is not where the link starts.
    expect(sliceInline(link, 10, 19)).toEqual([
      { tag: "a", href, continued: true, children: [italic("ng"), " title"] },
      ".",
    ]);
  });
});
