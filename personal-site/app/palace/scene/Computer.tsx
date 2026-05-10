"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Computer({
  onScreenClick,
  screenActive,
}: {
  onScreenClick: () => void;
  screenActive: boolean;
}) {
  const [hover, setHover] = useState(false);
  const screenMatRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (!screenMatRef.current) return;
    const t = state.clock.elapsedTime;
    const base = screenActive ? 0.95 : hover ? 0.78 : 0.55;
    const flicker =
      Math.sin(t * 5.3) * 0.02 + Math.sin(t * 11.2) * 0.012;
    screenMatRef.current.emissiveIntensity = base + flicker;
  });

  // Anchor everything to the desktop top at y=0.99, z=-0.85 (just inside back of desk)
  return (
    <group position={[0, 0.99, -0.85]}>
      {/* Monitor stand base — disc */}
      <mesh position={[0, 0.012, 0]} castShadow>
        <cylinderGeometry args={[0.18, 0.22, 0.025, 24]} />
        <meshStandardMaterial color="#15110b" roughness={0.4} metalness={0.6} />
      </mesh>
      {/* Stand pillar */}
      <mesh position={[0, 0.18, 0.04]} castShadow>
        <boxGeometry args={[0.08, 0.32, 0.05]} />
        <meshStandardMaterial color="#15110b" roughness={0.4} metalness={0.6} />
      </mesh>
      {/* Monitor bezel */}
      <mesh position={[0, 0.52, 0.05]} castShadow>
        <boxGeometry args={[1.45, 0.92, 0.07]} />
        <meshStandardMaterial color="#0d0a06" roughness={0.45} metalness={0.4} />
      </mesh>
      {/* Screen (clickable) */}
      <mesh
        position={[0, 0.52, 0.088]}
        onClick={(e) => {
          e.stopPropagation();
          onScreenClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
          if (typeof document !== "undefined")
            document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHover(false);
          if (typeof document !== "undefined")
            document.body.style.cursor = "auto";
        }}
      >
        <planeGeometry args={[1.36, 0.83]} />
        <meshStandardMaterial
          ref={screenMatRef}
          color="#0a1220"
          emissive={hover ? "#9ec5ed" : "#3a6080"}
          emissiveIntensity={0.6}
          roughness={0.35}
          metalness={0.0}
        />
      </mesh>
      {/* Faint screen text "bingranyou.com" rendered as emissive plane */}
      <mesh position={[0, 0.45, 0.0885]}>
        <planeGeometry args={[0.55, 0.05]} />
        <meshBasicMaterial
          color={hover || screenActive ? "#f0b687" : "#a8431c"}
          transparent
          opacity={hover || screenActive ? 0.85 : 0.55}
        />
      </mesh>
      <mesh position={[0, 0.62, 0.0885]}>
        <planeGeometry args={[0.85, 0.12]} />
        <meshBasicMaterial color="#fbeacc" transparent opacity={0.18} />
      </mesh>
      {/* Power LED */}
      <mesh position={[0.65, 0.07, 0.09]}>
        <sphereGeometry args={[0.008, 8, 8]} />
        <meshStandardMaterial
          emissive="#e89968"
          emissiveIntensity={1.2}
          color="#3a1a08"
        />
      </mesh>

      {/* Keyboard (forward toward the user) */}
      <group position={[0, 0.0, 0.62]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.95, 0.025, 0.34]} />
          <meshStandardMaterial color="#1f1a14" roughness={0.65} />
        </mesh>
        <mesh position={[0, 0.018, 0]}>
          <boxGeometry args={[0.9, 0.005, 0.3]} />
          <meshStandardMaterial color="#3a3026" roughness={0.7} />
        </mesh>
        {/* Subtle key-row hint lines via stretched boxes */}
        {[-0.1, -0.04, 0.02, 0.08].map((z, i) => (
          <mesh key={i} position={[0, 0.022, z]}>
            <boxGeometry args={[0.86, 0.001, 0.03]} />
            <meshBasicMaterial color="#0a0805" transparent opacity={0.4} />
          </mesh>
        ))}
      </group>
      {/* Mouse */}
      <mesh position={[0.62, 0.013, 0.62]} castShadow>
        <boxGeometry args={[0.1, 0.025, 0.16]} />
        <meshStandardMaterial color="#1f1a14" roughness={0.65} />
      </mesh>
      {/* Mouse cable hint */}
      <mesh position={[0.62, 0.018, 0.44]}>
        <boxGeometry args={[0.008, 0.008, 0.18]} />
        <meshStandardMaterial color="#0a0805" />
      </mesh>
    </group>
  );
}
