import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SocialLinks } from "@/components/social-links";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bingranyou.com"),
  title: {
    default: "Bingran You — AI Builder & Ion Trapper",
    template: "%s · Bingran You",
  },
  description:
    "Bingran You — PhD candidate at UC Berkeley building reliable AI systems and trapped-ion quantum experiments.",
  openGraph: {
    title: "Bingran You",
    description:
      "PhD candidate at UC Berkeley. Reliable AI systems × trapped-ion quantum experiments.",
    url: "https://bingranyou.com",
    siteName: "Bingran You",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@bingran_bry",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-3xl px-6 py-6 flex items-center justify-between">
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
        <main className="flex-1 mx-auto w-full max-w-3xl px-6 py-16">
          {children}
        </main>
        <footer className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-3xl px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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
