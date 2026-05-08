import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png" as const;

export function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#f4ead7",
          color: "#1f1a14",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontFamily: "ui-monospace, Menlo, monospace",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#a8431c",
          }}
        >
          {eyebrow ?? "bingran.you"}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 500,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                fontSize: 32,
                lineHeight: 1.4,
                color: "#3d352b",
                maxWidth: 980,
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#6b6055",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          <span>Bingran You · Berkeley, CA</span>
          <span style={{ fontFamily: "ui-monospace, Menlo, monospace" }}>
            bingran.ai
          </span>
        </div>
      </div>
    ),
    ogSize,
  );
}
