import type { Metadata } from "next";
import { jsonLdScriptContent, profilePageJsonLd, SITE_URL } from "@/lib/jsonld";
import { getPalaceData } from "./palace-data";
import { SsrLayer } from "./SsrLayer";
import { PalaceMount } from "./PalaceMount";
import styles from "./styles.module.css";

const PALACE_DESCRIPTION =
  "A 3D memory palace for bingran.ai — Bingran You's interactive room with a desk, a CRT monitor, and the projects, papers and writing of an AI agent builder and trapped-ion physicist at UC Berkeley.";

export const metadata: Metadata = {
  title: "Memory Palace",
  description: PALACE_DESCRIPTION,
  alternates: { canonical: "/palace" },
  openGraph: {
    title: "Bingran You — Memory Palace",
    description: PALACE_DESCRIPTION,
    url: `${SITE_URL}/palace`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bingran You — Memory Palace",
    description: PALACE_DESCRIPTION,
  },
};

export default async function PalacePage() {
  const data = await getPalaceData();
  return (
    <div className={styles.shell}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScriptContent(profilePageJsonLd("/")),
        }}
      />
      {/* Noscript / JS-disabled fallback: reveal the text index, hide canvas. */}
      <noscript>
        <style>{`
          .palace-fallback { position: static !important; width: auto !important; height: auto !important; padding: 2rem !important; margin: 0 auto !important; clip: auto !important; overflow: visible !important; white-space: normal !important; max-width: 56rem; color: #ece4d4; font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif; }
          .palace-canvas { display: none !important; }
          .palace-intro { display: none !important; }
          .palace-hud { display: none !important; }
        `}</style>
      </noscript>
      <SsrLayer data={data} />
      <PalaceMount data={data} />
    </div>
  );
}
