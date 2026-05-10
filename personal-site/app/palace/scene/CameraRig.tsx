"use client";

import type { RefObject } from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import type { PalaceMode } from "../PalaceClient";

type Vec3 = [number, number, number];

const CAM: Record<
  PalaceMode,
  { pos: Vec3; look: Vec3; fov: number; duration: number }
> = {
  intro: {
    pos: [3.0, 2.4, 4.6],
    look: [0, 1.3, -0.85],
    fov: 42,
    duration: 2.1,
  },
  idle: {
    pos: [0.4, 1.95, 2.9],
    look: [0, 1.55, -0.85],
    fov: 36,
    duration: 1.45,
  },
  monitor: {
    pos: [0, 1.86, 0.8],
    look: [0, 1.86, -0.85],
    fov: 22,
    duration: 1.2,
  },
};

function fovForAspect(baseFov: number, aspect: number) {
  const target = 16 / 9;
  if (aspect >= target) return baseFov;
  const halfH = Math.atan(Math.tan((baseFov * Math.PI) / 360) * target);
  const newVertical = Math.atan(Math.tan(halfH) / aspect) * 2 * (180 / Math.PI);
  return Math.min(80, newVertical);
}

// Cubic ease-in-out — the canonical "buttery" curve. Henry Heffernan's site
// uses a similar shape: slow start, accelerate, slow finish.
function cubicInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
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
      const eased = cubicInOut(linearT);
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
