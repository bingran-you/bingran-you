import type { Metadata, Viewport } from "next";
import {
  Inter,
  JetBrains_Mono,
  Noto_Serif_SC,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import {
  jsonLdScriptContent,
  OG_IMAGE_URL,
  personJsonLd,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_URL,
  websiteJsonLd,
} from "@/lib/jsonld";

// Inter — workhorse for paper titles, author lists, body UI. Per the design
// system, body sans (NOT serif) — "Source Serif 4 only for italic venue names
// and display headings paired with Noto Serif SC."
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Source Serif 4 — display headings only (hero name, h1 / h2). Italic instances
// also serve as venue names (Nature Photonics, Phys. Rev. Lett.) in paper rows.
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// JetBrains Mono — every micro-label, metadata strip, wordmark, code chip.
// 400 + 500 covers the system. Subset "latin" only — Han glyphs come from
// Noto Serif SC via the per-glyph fallback in --font-mono / --font-cjk.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Noto Serif SC pairs with Source Serif 4 — both share the transitional-serif
// skeleton (open counters, modulated strokes), so mixed Latin + Han text in a
// single element renders as a coherent typeface family. preload: false because
// most pages have no Han glyphs; let the browser lazy-load on demand. Per the
// design system v2.2 cjk-re-paired note: never PingFang sans for display.
const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_OG_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [OG_IMAGE_URL],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@bingran_bry",
    title: SITE_NAME,
    description: SITE_OG_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
  alternates: {
    canonical: "/",
  },
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [...SITE_KEYWORDS],
  verification: {
    google: "xWQd6sxfEf5jfU4AtrNcPv0jg71Ia8gQvXAcQmWKpyo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090B" },
    { media: "(prefers-color-scheme: light)", color: "#08090B" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} ${notoSerifSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScriptContent(personJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScriptContent(websiteJsonLd()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
