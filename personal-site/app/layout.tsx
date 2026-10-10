import type { Metadata, Viewport } from "next";
import {
  Hanken_Grotesk,
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
  SITE_URL,
  websiteJsonLd,
} from "@/lib/jsonld";

// Text face: an open serif with optical sizes, set like a journal's body.
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

// Label face: metadata rows, tables, references and the navigation.
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Noto Serif SC pairs with Source Serif for harmonious Han + Latin display.
// subsets: ["latin"] only controls preload hints; CJK glyphs are still
// served via unicode-range and lazy-loaded when Chinese characters render.
// preload: false — most pages have no Chinese, so don't waste a preload slot.
const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "500"],
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
    description: SITE_DESCRIPTION,
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
    description: SITE_DESCRIPTION,
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
  themeColor: "#e8e9eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${hanken.variable} ${notoSerifSC.variable} h-full antialiased`}
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
