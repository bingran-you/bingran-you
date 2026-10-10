import styles from "@/components/article/article.module.css";

// Every route in this group is one or more <Sheet>s lying on the desk.
export default function PersonalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={styles.desk}>{children}</main>;
}
