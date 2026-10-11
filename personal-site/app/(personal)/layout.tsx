import { FULL_WIDTH } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
import { PAGE } from "@/lib/paginate";

/** The size of a page, in points, and of a sheet at its largest. */
const size = {
  "--page-width": PAGE.width,
  "--page-length": PAGE.height,
  "--full": `${FULL_WIDTH}px`,
} as React.CSSProperties;

// Every route in this group is one or more <Sheet>s lying on the desk.
export default function PersonalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.desk} style={size}>
      {children}
    </main>
  );
}
