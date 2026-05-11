"use client";

import type { RefObject } from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import type { PalaceMode } from "../PalaceClient";

type Vec3 = [number, number, number];

// Poses calibrated to the baked GLB world (MODEL_SCALE = 0.15 in BakedScene).
// Monitor screen plane sits at z=0.092 with width 0.20m / height 0.15m (4:3).
// The BingranOS HTML container (1024×768, 4:3) projects to exactly that —
// no letterbox/pillarbox inside the CRT bezel. Monitor-mode framing fits
// the screen HEIGHT in viewport so 16:9 viewports show the screen with a
// small pillarbox of CRT bezel + room around the sides (which sells the
// "looking at a real monitor" feel rather than a fullscreen-app illusion):
//   d = 0.32 - 0.092 = 0.228
//   visible_height = 2 * d * tan(fov/2) = 0.15 → fov ≈ 36.4°
const CAM: Record<
  PalaceMode,
  { pos: Vec3; look: Vec3; fov: number; duration: number }
> = {
  intro: {
    pos: [1.4, 0.85, 2.3],
    look: [0, 0.15, -0.1],
    fov: 44,
    duration: 2.1,
  },
  idle: {
    pos: [0.22, 0.45, 1.4],
    look: [0, 0.12, -0.05],
    fov: 36,
    duration: 1.6,
  },
  monitor: {
    pos: [0, 0.165, 0.32],
    look: [0, 0.165, 0.092],
    fov: 36,
    duration: 1.6,
  },
};

function fovForAspect(baseFov: number, aspect: number) {
  const target = 16 / 9;
  if (aspect >= target) return baseFov;
  const halfH = Math.atan(Math.tan((baseFov * Math.PI) / 360) * target);
  const newVertical = Math.atan(Math.tan(halfH) / aspect) * 2 * (180 / Math.PI);
  return Math.min(80, newVertical);
}

// Quintic ease-in-out — flatter tails than cubic. The flat start and finish
// matter most for the monitor dolly: the camera "lifts off" and "lands"
// almost imperceptibly so the zoom reads as one continuous motion rather
// than a snap-zoom.
function quintInOut(t: number) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
}

export function CameraRig({
  mode,
  mouseRef,
}: {
  mode: PalaceMode;
  mouseRef: RefObject<[number, number]>;
}) {
  const camRef = useRef<THREE.PerspectiveCamera>(null);
  // Current "logical" lookAt point so we can interpolate orientation alongside
  // the camera position.
  const currentLook = useRef(new THREE.Vector3(...CAM.intro.look));
  // Snapshots captured at the moment a mode change is detected.
  const fromPos = useRef(new THREE.Vector3(...CAM.intro.pos));
  const fromLook = useRef(new THREE.Vector3(...CAM.intro.look));
  const fromFov = useRef(CAM.intro.fov);
  const transStart = useRef(0);
  const prevMode = useRef<PalaceMode | null>(null);
  const initialized = useRef(false);

  useFrame((state, delta) => {
    const cam = camRef.current;
    if (!cam) return;
    const tNow = state.clock.elapsedTime;
    const cfg = CAM[mode];
    const aspect = state.size.width / Math.max(1, state.size.height);
    const targetFovAdj = fovForAspect(cfg.fov, aspect);

    // First frame: snap to the configured pose and call it baseline.
    if (!initialized.current) {
      cam.position.set(...cfg.pos);
      currentLook.current.set(...cfg.look);
      cam.fov = targetFovAdj;
      cam.updateProjectionMatrix();
      cam.lookAt(currentLook.current);
      fromPos.current.copy(cam.position);
      fromLook.current.copy(currentLook.current);
      fromFov.current = cam.fov;
      transStart.current = tNow;
      prevMode.current = mode;
      initialized.current = true;
      return;
    }

    // Mode changed → start a brand-new transition from wherever the camera is.
    if (prevMode.current !== mode) {
      fromPos.current.copy(cam.position);
      fromLook.current.copy(currentLook.current);
      fromFov.current = cam.fov;
      transStart.current = tNow;
      prevMode.current = mode;
    }

    const elapsed = tNow - transStart.current;
    const linearT = Math.min(1, elapsed / cfg.duration);

    const baseTargetPos = new THREE.Vector3(...cfg.pos);
    const baseTargetLook = new THREE.Vector3(...cfg.look);

    if (linearT < 1) {
      // Mid-transition: pure time-based ease, no parallax interference.
      const eased = quintInOut(linearT);
      cam.position.lerpVectors(fromPos.current, baseTargetPos, eased);
      currentLook.current.lerpVectors(fromLook.current, baseTargetLook, eased);
      cam.fov = THREE.MathUtils.lerp(fromFov.current, targetFovAdj, eased);
      cam.updateProjectionMatrix();
    } else {
      // Settled. Layer mouse parallax (idle only) or gentle intro drift, then
      // chase smoothly so parallax never snaps.
      if (mode === "idle") {
        const [mx, my] = mouseRef.current;
        baseTargetPos.x += mx * 0.35;
        baseTargetPos.y += -my * 0.12;
        baseTargetLook.x += mx * 0.08;
      } else if (mode === "intro") {
        baseTargetPos.x += Math.sin(tNow / 4) * 0.18;
      }
      const chase = Math.min(1, delta * 3.5);
      cam.position.lerp(baseTargetPos, chase);
      currentLook.current.lerp(baseTargetLook, chase);
      if (Math.abs(targetFovAdj - cam.fov) > 0.01) {
        cam.fov += (targetFovAdj - cam.fov) * chase;
        cam.updateProjectionMatrix();
      }
    }

    cam.lookAt(currentLook.current);
  });

  return (
    <PerspectiveCamera
      ref={camRef}
      makeDefault
      position={CAM.intro.pos}
      fov={CAM.intro.fov}
      near={0.05}
      far={60}
    />
  );
}
