import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SocialLinks } from "@/components/social-links";

export default function PersonalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm tracking-tight text-foreground hover:opacity-70 transition"
          >
            bingran.you
          </Link>
          <SiteNav />
        </div>
      </header>
      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
        {children}
      </main>
      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Bingran You · <span lang="zh-Hans">尤炳然</span> · Berkeley, CA
          </p>
          <SocialLinks />
        </div>
      </footer>
    </>
  );
}
