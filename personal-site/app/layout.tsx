import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
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

const newsreader = Newsreader({
  variable: "--font-newsreader",
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
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "xWQd6sxfEf5jfU4AtrNcPv0jg71Ia8gQvXAcQmWKpyo",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bingran You",
  givenName: "Bingran",
  familyName: "You",
  url: "https://bingranyou.com",
  image: "https://bingranyou.com/images/profile/bingran-you-portrait.jpg",
  jobTitle: "PhD Candidate",
  description:
    "PhD candidate at UC Berkeley building reliable AI systems and trapped-ion quantum experiments.",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of California, Berkeley",
      sameAs: "https://www.berkeley.edu/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Chinese Academy of Sciences",
      sameAs: "https://english.ucas.ac.cn/",
    },
  ],
  affiliation: {
    "@type": "Organization",
    name: "Haeffner Lab, University of California, Berkeley",
    url: "https://haeffnerlab.berkeley.edu/",
  },
  knowsAbout: [
    "Reliable AI Systems",
    "AI Agents",
    "Trapped-Ion Quantum Computing",
    "Integrated Photonics",
    "Quantum Networking",
  ],
  sameAs: [
    "https://x.com/bingran_bry",
    "https://github.com/bingran-you",
    "https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en",
    "https://orcid.org/0000-0002-0316-2115",
    "https://huggingface.co/bingran-you",
    "https://www.linkedin.com/in/bingran-you-775b4017b/",
    "https://www.youtube.com/@BingranBRY",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bingran You",
  url: "https://bingranyou.com",
  inLanguage: "en",
  author: { "@type": "Person", name: "Bingran You" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
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
