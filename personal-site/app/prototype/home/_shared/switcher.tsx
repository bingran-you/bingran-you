"use client";

// PROTOTYPE — floating bar for flipping between the home-page variants.
// ← / → cycle (wrapping), the label opens the gallery. Not part of any design.

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { PROTOTYPE_BASE, variants } from "./variants";
import styles from "./switcher.module.css";

export function PrototypeSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  // The gallery embeds each variant with ?embed so its thumbnails stay clean.
  const embedded = useSearchParams().has("embed");

  const index = variants.findIndex(
    (v) => pathname === `${PROTOTYPE_BASE}/${v.slug}`,
  );
  const onGallery = index === -1;
  const count = variants.length;
  const prev = variants[onGallery ? count - 1 : (index - 1 + count) % count];
  const next = variants[onGallery ? 0 : (index + 1) % count];
  const prevHref = `${PROTOTYPE_BASE}/${prev.slug}`;
  const nextHref = `${PROTOTYPE_BASE}/${next.slug}`;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable]")) return;
      if (event.key === "ArrowLeft") router.push(prevHref);
      if (event.key === "ArrowRight") router.push(nextHref);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router, prevHref, nextHref]);

  // A stray merge must never ship the bar to visitors.
  if (embedded || process.env.NODE_ENV === "production") return null;

  return (
    <div className={styles.bar} role="navigation" aria-label="Prototype variants">
      <Link className={styles.arrow} href={prevHref} aria-label="Previous variant">
        ←
      </Link>
      <Link className={styles.label} href={PROTOTYPE_BASE} title="All variants">
        {onGallery ? (
          <span>All variants</span>
        ) : (
          <>
            <span className={styles.count}>
              {String(index + 1).padStart(2, "0")} / {count}
            </span>
            <span>{variants[index].name}</span>
          </>
        )}
      </Link>
      <Link className={styles.arrow} href={nextHref} aria-label="Next variant">
        →
      </Link>
    </div>
  );
}
