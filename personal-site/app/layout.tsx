import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { SocialLinks } from "@/components/social-links";
import {
  getPersonJsonLd,
  getWebsiteJsonLd,
} from "@/lib/structured-data";
import {
  ogImageUrl,
  siteAuthors,
  siteConfig,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  authors: siteAuthors,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [...siteConfig.keywords],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.openGraphDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.twitterHandle,
    title: siteConfig.name,
    description: siteConfig.openGraphDescription,
    images: [ogImageUrl],
  },
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/blog", label: "Blog" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={getPersonJsonLd()} />
        <JsonLd data={getWebsiteJsonLd()} />
        <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur">
          <div className="mx-auto max-w-4xl px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="font-mono text-sm tracking-tight text-foreground hover:opacity-70 transition"
            >
              bingran.you
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              {nav.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[var(--muted)] hover:text-foreground transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1 mx-auto w-full max-w-4xl px-6 py-14 sm:py-16">
          {children}
        </main>
        <footer className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-4xl px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} Bingran You · Berkeley, CA
            </p>
            <SocialLinks />
          </div>
        </footer>
      </body>
    </html>
  );
}
