import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function PersonalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <main
        className="flex-1 mx-auto w-full"
        style={{
          maxWidth: "var(--content-max)",
          padding: "var(--space-8) var(--gutter) var(--space-9)",
        }}
      >
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
