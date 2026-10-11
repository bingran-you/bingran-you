import type { Inline } from "@/lib/inline";
import styles from "./article.module.css";

/** The bar between two labels, smaller than the type beside it. */
export function Bar() {
  return <span className={styles.bar}>|</span>;
}

/**
 * Inline content (see lib/inline.ts) as elements. A link that leaves the site
 * opens in a new tab. Of a link cut into slices the tab key stops at the
 * first.
 */
export function InlineContent({ nodes }: { nodes: Inline[] }) {
  return nodes.map((node, i) => {
    if (typeof node === "string") return node;
    const children = <InlineContent nodes={node.children} />;
    if (node.tag !== "a") {
      return <node.tag key={i}>{children}</node.tag>;
    }
    const external = /^https?:/.test(node.href);
    return (
      <a
        key={i}
        href={node.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        tabIndex={node.continued ? -1 : undefined}
        className={styles.link}
      >
        {children}
      </a>
    );
  });
}
