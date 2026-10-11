import {
  Inter,
  Noto_Serif,
  Noto_Serif_SC,
  Roboto_Serif,
} from "next/font/google";

// The faces of the site. The lines of the home page are broken in them when
// it is typeset, so content/layout records this file (articleHash in
// lib/layout.ts).
//
// The styles name the families themselves ("Roboto Serif", "Noto Serif",
// "Inter", "Noto Serif SC"). The variable a face can hand them also names a
// local face scaled to its metrics, which would stand before Noto Serif and
// draw its Greek.
//
// `display: "block"`: a frozen line is as wide as its column in these faces
// only, so text waits for them rather than show in a fallback and overrun.
//
// Only the upright Latin of the two faces a first screen is set in is
// preloaded. `subsets` and `preload` decide no more than that: every subset
// is served by unicode-range once a character asks for it.

// Text face: a serif with an optical-size and a width axis.
export const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  style: ["normal"],
  axes: ["opsz", "wdth"],
  display: "block",
});
export const robotoSerifItalic = Roboto_Serif({
  subsets: ["latin"],
  style: ["italic"],
  axes: ["opsz", "wdth"],
  display: "block",
  preload: false,
});

// Greek for the text face, which has none.
export const notoSerif = Noto_Serif({
  subsets: ["greek"],
  style: ["normal", "italic"],
  axes: ["wdth"],
  display: "block",
  preload: false,
});

// Label face: fact rows, tables, references and the navigation.
export const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
  axes: ["opsz"],
  display: "block",
});
export const interItalic = Inter({
  subsets: ["latin"],
  style: ["italic"],
  axes: ["opsz"],
  display: "block",
  preload: false,
});

// Han glyphs for both.
export const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});
