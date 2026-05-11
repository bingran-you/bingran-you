"use client";

import { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { BakedGLB, preloadBakedAssets } from "./BakedGLB";
import { BingranOS } from "../ui/BingranOS";
import type { PalaceData } from "../palace-data";
import styles from "../styles.module.css";

// preload the three GLB + JPG pairs in module scope so they hit the cache
// before Canvas mounts. drei's useGLTF.preload is the r3f equivalent of
// Henry Heffernan's Resources manager.
if (typeof window !== "undefined") {
  preloadBakedAssets();
}

// World scale. The MIT-licensed GLBs from henryjeff/portfolio-website export
// with large native units (computer_setup ~2.24m wide as-is, environment
// ~80m × 80m). At MODEL_SCALE=0.15 the Mac sits at ~34cm (close to real
// Macintosh Classic dimensions) and the room is ~12m wide. The CameraRig
// uses the matching tight-frame poses (close to the desk, FOV ~36-42).
export const MODEL_SCALE = 0.15;

// Monitor face world position at MODEL_SCALE=0.15. Used by CameraRig for the
// "inside the monitor" pose and by the click hitbox below.
// Calibrated from monitor_base mesh in computer_setup.glb: CRT head (z>0.45 in
// model space) spans y=[0.35, 1.79], so screen mid-y ≈ 1.07 → 0.16 at scale.
// Bezel front sits at z=0.59 raw → 0.089 scaled, so place the screen plane at
// z=0.092 (a hair forward) to sit on the screen glass without z-fighting.
export const MONITOR_POSITION = new THREE.Vector3(0, 0.165, 0.092);
const MONITOR_WIDTH = 0.2;
const MONITOR_HEIGHT = 0.15;

// HTML container size (CSS px) for the projected BingranOS. 1024×768 is 4:3
// — matches the CRT screen face aspect exactly so the OS fills the monitor
// glass edge-to-edge with no letterbox bands.
const MONITOR_HTML_WIDTH = 1024;
const MONITOR_HTML_HEIGHT = 768;
// drei's <Html transform> internally divides the object matrix by 40
// (factor = 1 / ((distanceFactor||10) / 400) = 40 with default props), so
// the raw scale prop is in units of "world meters per CSS px / 40".
// We compensate by multiplying our intended world-meters-per-CSS-px ratio
// by 40 so the projected HTML matches the monitor screen size exactly.
//   intended scale (m/px) = MONITOR_WIDTH / MONITOR_HTML_WIDTH ≈ 0.000195
//   drei-compensated      = intended * 40                     ≈ 0.0078125
// Result: HTML container projects to 0.20m × 0.15m — the exact CRT face.
const DREI_HTML_TRANSFORM_FACTOR = 40;
const MONITOR_HTML_SCALE =
  (MONITOR_WIDTH / MONITOR_HTML_WIDTH) * DREI_HTML_TRANSFORM_FACTOR;

export type OsProps = {
  data: PalaceData;
  /** True when the OS owns focus (monitor mode). Drives pointer-events. */
  active: boolean;
  initialTab: string | null;
  onClose: () => void;
};

type Props = {
  onScreenClick: () => void;
  os: OsProps;
};

export function BakedScene({ onScreenClick, os }: Props) {
  return (
    <group>
      <BakedGLB
        url="/palace/models/environment.glb"
        textureUrl="/palace/models/baked_environment.jpg"
        scale={MODEL_SCALE}
      />
      <BakedGLB
        url="/palace/models/computer_setup.glb"
        textureUrl="/palace/models/baked_computer.jpg"
        scale={MODEL_SCALE}
      />
      <BakedGLB
        url="/palace/models/decor.glb"
        textureUrl="/palace/models/baked_decor.jpg"
        scale={MODEL_SCALE}
      />

      {/* The BingranOS UI is permanently projected onto the monitor screen
          plane via drei <Html transform>. In idle the room camera sees a
          tiny readable copy of the desktop on the CRT; the dolly-in is a
          pure camera zoom — no fade, no overlay swap. */}
      <Html
        transform
        position={MONITOR_POSITION}
        rotation={[0, 0, 0]}
        scale={MONITOR_HTML_SCALE}
        zIndexRange={[1, 0]}
        prepend
        // The CSS3D layer sits above the WebGL canvas; pointer-events on the
        // wrapper let clicks pass through to the monitor hitbox in idle.
        style={{ pointerEvents: os.active ? "auto" : "none" }}
      >
        <div
          className={styles.monitorScreen}
          style={{
            width: `${MONITOR_HTML_WIDTH}px`,
            height: `${MONITOR_HTML_HEIGHT}px`,
          }}
        >
          <BingranOS
            data={os.data}
            active={os.active}
            initialTab={os.initialTab}
            onClose={os.onClose}
          />
        </div>
      </Html>

      <MonitorHitbox onClick={onScreenClick} enabled={!os.active} />
    </group>
  );
}

// Invisible plane in front of the monitor that picks up clicks and routes
// them up to the parent (which transitions the camera into monitor mode).
// Disabled while OS is active so the HTML projection owns interaction.
function MonitorHitbox({
  onClick,
  enabled,
}: {
  onClick: () => void;
  enabled: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.cursor = hovered && enabled ? "pointer" : "default";
    return () => {
      document.body.style.cursor = "default";
    };
  }, [hovered, enabled]);

  if (!enabled) return null;

  return (
    <mesh
      position={MONITOR_POSITION}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      visible={false}
    >
      <planeGeometry args={[MONITOR_WIDTH * 1.05, MONITOR_HEIGHT * 1.05]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  );
}
