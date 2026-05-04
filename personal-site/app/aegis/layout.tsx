import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./aegis.css";
import { AegisNav } from "./_components/nav";
import { AegisFooter } from "./_components/footer";
import { jsonLdScriptContent, SITE_URL } from "@/lib/jsonld";

const aegisDisplay = Fraunces({
  variable: "--font-aegis-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const aegisSans = Inter({
  variable: "--font-aegis-sans",
  subsets: ["latin"],
  display: "swap",
});

const aegisMono = JetBrains_Mono({
  variable: "--font-aegis-mono",
  subsets: ["latin"],
  display: "swap",
});

const AEGIS_DESCRIPTION =
  "Aegis is observability for AI agents. One CLI: audit the agent's reachable surface before it starts, watch every tool call and file write while it runs. Walk away.";

export const metadata: Metadata = {
  title: {
    default: "Aegis · Observability for AI agents · audit before, watch during",
    template: "%s · Aegis",
  },
  description: AEGIS_DESCRIPTION,
  alternates: { canonical: "/aegis" },
  openGraph: {
    title: "Aegis · Observability for AI agents",
    description: AEGIS_DESCRIPTION,
    url: `${SITE_URL}/aegis`,
    siteName: "Aegis",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegis · Observability for AI agents",
    description: AEGIS_DESCRIPTION,
    creator: "@bingran_bry",
  },
  keywords: [
    "AI agent security",
    "AI agent runtime",
    "agent memory hygiene",
    "agent attestation",
    "agent benchmark",
    "prompt injection defense",
    "AI agent firewall",
    "Aegis",
    "Bingran You",
  ],
};

const AEGIS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/aegis#org`,
  name: "Aegis",
  url: `${SITE_URL}/aegis`,
  description: AEGIS_DESCRIPTION,
  founder: { "@id": `${SITE_URL}#person` },
  parentOrganization: { "@id": `${SITE_URL}#person` },
  sameAs: [`${SITE_URL}/aegis`],
} as const;

export default function AegisLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`aegis-root ${aegisDisplay.variable} ${aegisSans.variable} ${aegisMono.variable} flex flex-1 flex-col`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScriptContent(AEGIS_JSONLD) }}
      />
      <AegisNav />
      <main className="flex-1">{children}</main>
      <AegisFooter />
    </div>
  );
}
