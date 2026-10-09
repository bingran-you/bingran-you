// PROTOTYPE — home-page design directions for review. Throwaway: when one
// wins, fold it into app/(personal)/page.tsx and delete app/prototype.

import type { Metadata } from "next";
import { Suspense } from "react";
import { PrototypeSwitcher } from "./_shared/switcher";

export const metadata: Metadata = {
  title: "Home page prototypes",
  robots: { index: false, follow: false },
};

export default function PrototypeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <PrototypeSwitcher />
      </Suspense>
    </>
  );
}
