import Link from "next/link";
import { SocialLinks } from "@/components/social-links";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function PersonalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
