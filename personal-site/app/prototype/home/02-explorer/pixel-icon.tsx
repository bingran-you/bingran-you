// PROTOTYPE 02 — renders a pixel-art map as a crisp inline SVG, one CSS pixel
// per character. Keep the element on whole-pixel offsets or the edges soften.

import type { PixelArt } from "./pixel-art";

export function PixelIcon({
  art,
  className,
}: {
  art: PixelArt;
  className?: string;
}) {
  const width = art.rows[0].length;
  const height = art.rows.length;

  // One path per colour: each horizontal run becomes a 1px-tall box.
  const paths = new Map<string, string>();
  art.rows.forEach((row, y) => {
    for (let x = 0; x < row.length; ) {
      let end = x + 1;
      while (end < row.length && row[end] === row[x]) end++;
      const fill = art.palette[row[x]];
      if (fill) {
        const run = `M${x} ${y}h${end - x}v1h${x - end}z`;
        paths.set(fill, (paths.get(fill) ?? "") + run);
      }
      x = end;
    }
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      shapeRendering="crispEdges"
      aria-hidden
      focusable="false"
      className={className}
    >
      {[...paths].map(([fill, d]) => (
        <path key={fill} fill={fill} d={d} />
      ))}
    </svg>
  );
}
