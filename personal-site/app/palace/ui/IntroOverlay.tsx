"use client";

import styles from "../styles.module.css";

export function IntroOverlay({
  visible,
  onEnter,
}: {
  visible: boolean;
  onEnter: () => void;
}) {
  return (
    <div
      className={`palace-intro ${styles.intro} ${visible ? "" : styles.hidden}`}
      aria-hidden={!visible}
    >
      <p className={styles.introCaption}>bingranyou.com · memory palace · v1</p>
      <h2 className={styles.introTitle}>Bingran You</h2>
      <p className={styles.introSubtitle} lang="zh-Hans">
        尤炳然
      </p>
      <button type="button" className={styles.introCta} onClick={onEnter}>
        Enter the room →
      </button>
    </div>
  );
}
