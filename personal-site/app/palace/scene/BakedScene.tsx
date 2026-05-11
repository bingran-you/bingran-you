"use client";

import { useEffect, useState } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { BakedGLB, preloadBakedAssets } from "./BakedGLB";

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
export const MONITOR_POSITION = new THREE.Vector3(0, 0.22, 0.005);
const MONITOR_WIDTH = 0.27;
const MONITOR_HEIGHT = 0.2;

type Props = {
  onScreenClick: () => void;
};

export function BakedScene({ onScreenClick }: Props) {
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

      {/* Subtle CRT smudge sheen on the monitor face — gives the phosphor
          glass a soft physicality even when the screen is dark. */}
      <ScreenSheen />

      <MonitorHitbox onClick={onScreenClick} />
    </group>
  );
}

function ScreenSheen() {
  const smudge = useTexture("/palace/textures/monitor-smudge.jpg");
  return (
    <group position={MONITOR_POSITION}>
      <mesh position={[0, 0, 0.001]}>
        <planeGeometry args={[MONITOR_WIDTH, MONITOR_HEIGHT]} />
        <meshBasicMaterial color="#0d1a1d" />
      </mesh>
      <mesh position={[0, 0, 0.003]}>
        <planeGeometry args={[MONITOR_WIDTH, MONITOR_HEIGHT]} />
        <meshBasicMaterial
          map={smudge}
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

// Invisible plane in front of the monitor that picks up clicks and routes
// them up to the parent (which transitions camera + reveals BingranOS).
function MonitorHitbox({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.cursor = hovered ? "pointer" : "default";
    return () => {
      document.body.style.cursor = "default";
    };
  }, [hovered]);

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
