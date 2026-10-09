// PROTOTYPE — contact sheet for the home-page directions. Each card is a
// live, scaled-down frame of the variant; click through to see it full size.

import Link from "next/link";
import { PROTOTYPE_BASE, variants } from "./_shared/variants";
import styles from "./gallery.module.css";

export default function PrototypeGallery() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Prototype · not linked from the site</p>
        <h1 className={styles.title}>
          Home page — {variants.length} directions
        </h1>
        <p className={styles.lede}>
          Same content and the same unchanged “Enter the Memory Palace” button,
          in {variants.length} different ideas of what the front door should
          feel like. Open one, then use ← → to flip through.
        </p>
      </header>

      <ol className={styles.grid}>
        {variants.map((variant, index) => (
          <li key={variant.slug} className={styles.card}>
            <Link
              className={styles.cardLink}
              href={`${PROTOTYPE_BASE}/${variant.slug}`}
            >
              <span className={styles.frame}>
                <iframe
                  className={styles.preview}
                  src={`${PROTOTYPE_BASE}/${variant.slug}?embed`}
                  title={`${variant.name} preview`}
                  loading="lazy"
                  tabIndex={-1}
                  aria-hidden
                />
              </span>
              <span className={styles.meta}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.name}>{variant.name}</span>
                <span className={styles.concept}>{variant.concept}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
