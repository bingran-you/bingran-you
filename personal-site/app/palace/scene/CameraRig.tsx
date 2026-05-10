"use client";

import type { RefObject } from "react";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import type { PalaceMode } from "../PalaceClient";

type Vec3 = [number, number, number];

const CAM: Record<
  PalaceMode,
  { pos: Vec3; look: Vec3; fov: number }
> = {
  intro: { pos: [3.2, 2.4, 4.8], look: [0, 1.05, -0.9], fov: 38 },
  idle: { pos: [0, 1.65, 2.1], look: [0, 1.2, -1.0], fov: 34 },
  monitor: { pos: [0, 1.52, 0.55], look: [0, 1.52, -0.85], fov: 22 },
};

/**
 * Three.js cameras specify FOV vertically. On portrait viewports the
 * horizontal coverage shrinks to nothing and the room reads as a smear.
 * Boost FOV when aspect drops below 16:9 so phones still see the desk.
 */
function fovForAspect(baseFov: number, aspect: number) {
  const target = 16 / 9;
  if (aspect >= target) return baseFov;
  // Convert base vertical FOV to horizontal FOV at the target aspect, then back
  // out a new vertical FOV that preserves that horizontal coverage.
  const halfH = Math.atan(Math.tan((baseFov * Math.PI) / 360) * target);
  const newVertical = Math.atan(Math.tan(halfH) / aspect) * 2 * (180 / Math.PI);
  return Math.min(80, newVertical);
}

export function CameraRig({
  mode,
  mouseRef,
}: {
  mode: PalaceMode;
  mouseRef: RefObject<[number, number]>;
}) {
  const camRef = useRef<THREE.PerspectiveCamera>(null);
  const targetPos = useRef(new THREE.Vector3(...CAM.intro.pos));
  const lookAt = useRef(new THREE.Vector3(...CAM.intro.look));
  const size = useThree((s) => s.size);

  useFrame((_, delta) => {
    const cam = camRef.current;
    if (!cam) return;
    const cfg = CAM[mode];

    targetPos.current.set(...cfg.pos);
    lookAt.current.set(...cfg.look);

    if (mode === "idle") {
      const [mx, my] = mouseRef.current;
      targetPos.current.x += mx * 0.35;
      targetPos.current.y += -my * 0.12;
      lookAt.current.x += mx * 0.08;
    } else if (mode === "intro") {
      targetPos.current.x += Math.sin(performance.now() / 4000) * 0.18;
    }

    const lerpAmt = Math.min(
      1,
      delta * (mode === "intro" ? 1.4 : mode === "monitor" ? 3.0 : 2.4),
    );
    cam.position.lerp(targetPos.current, lerpAmt);

    const aspect = size.width / Math.max(1, size.height);
    const targetFov = fovForAspect(cfg.fov, aspect);
    const fovDiff = targetFov - cam.fov;
    if (Math.abs(fovDiff) > 0.01) {
      cam.fov += fovDiff * lerpAmt;
      cam.updateProjectionMatrix();
    }

    cam.lookAt(lookAt.current);
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
