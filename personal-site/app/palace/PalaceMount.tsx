"use client";

import dynamic from "next/dynamic";
import type { PalaceData } from "./palace-data";
import styles from "./styles.module.css";

const PalaceClient = dynamic(() => import("./PalaceClient"), {
  ssr: false,
  loading: () => <PalaceLoading />,
});

function PalaceLoading() {
  return (
    <div className={`palace-intro ${styles.intro}`} aria-hidden>
      <p className={styles.introCaption}>Booting palace…</p>
    </div>
  );
}

export function PalaceMount({ data }: { data: PalaceData }) {
  return <PalaceClient data={data} />;
}
