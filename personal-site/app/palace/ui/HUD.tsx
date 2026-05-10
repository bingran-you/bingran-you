"use client";

import Link from "next/link";
import styles from "../styles.module.css";
import type { PalaceMode } from "../PalaceClient";

export function HUD({
  mode,
  onExitMonitor,
}: {
  mode: PalaceMode;
  onExitMonitor: () => void;
}) {
  return (
    <div className={`palace-hud ${styles.hud}`}>
      <div className={styles.hudTop}>
        <Link href="/" className={styles.hudBrand}>
          ← bingran.you
        </Link>
        <span className={styles.hudHint}>
          <span className={styles.dot} />
          Memory Palace · v1
        </span>
      </div>
      <div className={styles.hudBottom}>
        <span className={styles.hudHint}>
          {mode === "idle" ? (
            <>Move mouse to look · Click the monitor to enter</>
          ) : mode === "monitor" ? (
            <>
              Press <kbd>ESC</kbd> to step back
            </>
          ) : (
            <>Booting…</>
          )}
        </span>
        {mode === "monitor" ? (
          <button
            type="button"
            className={styles.hudExit}
            onClick={onExitMonitor}
          >
            Exit screen
          </button>
        ) : (
          <Link href="/" className={styles.hudExit}>
            Plain text site →
          </Link>
        )}
      </div>
    </div>
  );
}
