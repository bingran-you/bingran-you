"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Classic 1984/SE-era Macintosh: beige boxy body, small CRT recessed into a
// black bezel, "Macintosh" plate underneath, single floppy slot on the lower
// right, small Apple-logo dot up top, and a green power LED. Sits on a flat
// base on the desk.
export function Computer({
  onScreenClick,
  screenActive,
}: {
  onScreenClick: () => void;
  screenActive: boolean;
}) {
  const [hover, setHover] = useState(false);
  const screenMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const cursorMatRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (screenMatRef.current) {
      const base = screenActive ? 0.95 : hover ? 0.78 : 0.55;
      const flicker = Math.sin(t * 5.3) * 0.018 + Math.sin(t * 11.2) * 0.012;
      screenMatRef.current.emissiveIntensity = base + flicker;
    }
    if (cursorMatRef.current) {
      // Classic blink: 1 Hz with hard step
      cursorMatRef.current.opacity = Math.floor(t * 2) % 2 === 0 ? 0.9 : 0.0;
    }
  });

  const setCursor = (on: boolean) => {
    if (typeof document !== "undefined") {
      document.body.style.cursor = on ? "pointer" : "auto";
    }
  };

  // Anchor group on the desktop, lined up with the back of the desk
  return (
    <group position={[0, 0.99, -0.85]}>
      {/* Pedestal base */}
      <mesh position={[0, 0.008, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.016, 0.98]} />
        <meshStandardMaterial color="#9c8a68" roughness={0.7} />
      </mesh>

      {/* Main body (beige plastic) */}
      <mesh position={[0, 0.64, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.86, 1.22, 0.92]} />
        <meshStandardMaterial color="#d4c4a0" roughness={0.78} />
      </mesh>

      {/* Body side highlights to fake a slight chamfer */}
      <mesh position={[0, 1.245, 0]} castShadow>
        <boxGeometry args={[0.78, 0.025, 0.84]} />
        <meshStandardMaterial color="#c0ae87" roughness={0.78} />
      </mesh>
      {/* Subtle back-tilt strip near the top so the silhouette reads as "boxy
          with a small slope," not a flat slab */}
      <mesh position={[0, 1.18, -0.43]} rotation={[0.18, 0, 0]} castShadow>
        <boxGeometry args={[0.82, 0.16, 0.04]} />
        <meshStandardMaterial color="#c8b893" roughness={0.78} />
      </mesh>

      {/* Apple-logo placeholder (a small terracotta dot on the body top-front) */}
      <mesh position={[-0.32, 1.155, 0.461]}>
        <circleGeometry args={[0.024, 16]} />
        <meshStandardMaterial
          color="#a8431c"
          emissive="#a8431c"
          emissiveIntensity={0.25}
          roughness={0.6}
        />
      </mesh>

      {/* Recessed black screen bezel */}
      <mesh position={[0, 0.86, 0.461]}>
        <planeGeometry args={[0.66, 0.52]} />
        <meshStandardMaterial color="#15110b" roughness={0.5} />
      </mesh>
      {/* Inner black border (illusion of CRT bezel) */}
      <mesh position={[0, 0.86, 0.4615]}>
        <planeGeometry args={[0.58, 0.44]} />
        <meshStandardMaterial color="#0a0805" roughness={0.45} />
      </mesh>

      {/* Screen — clickable mesh */}
      <mesh
        position={[0, 0.86, 0.462]}
        onClick={(e) => {
          e.stopPropagation();
          onScreenClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
          setCursor(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHover(false);
          setCursor(false);
        }}
      >
        <planeGeometry args={[0.52, 0.4]} />
        <meshStandardMaterial
          ref={screenMatRef}
          color="#0a1220"
          emissive={hover ? "#a4c8ed" : "#3a6080"}
          emissiveIntensity={0.6}
          roughness={0.35}
          metalness={0.0}
        />
      </mesh>

      {/* Faux Mac menu bar at the top of the screen */}
      <mesh position={[0, 1.038, 0.4625]}>
        <planeGeometry args={[0.51, 0.022]} />
        <meshBasicMaterial color="#e8d6b0" />
      </mesh>
      {/* Apple emoji slot in the menu bar (left) */}
      <mesh position={[-0.232, 1.038, 0.463]}>
        <circleGeometry args={[0.006, 12]} />
        <meshBasicMaterial color="#1f1a14" />
      </mesh>

      {/* "Welcome to Bingranyou" text stand-in — single bar */}
      <mesh position={[0, 0.91, 0.4625]}>
        <planeGeometry args={[0.32, 0.018]} />
        <meshBasicMaterial color="#e8d6b0" transparent opacity={0.85} />
      </mesh>
      {/* Blinking cursor */}
      <mesh position={[0.135, 0.91, 0.463]}>
        <planeGeometry args={[0.008, 0.018]} />
        <meshBasicMaterial ref={cursorMatRef} color="#e8d6b0" transparent opacity={0.9} />
      </mesh>
      {/* "Click to enter" hint */}
      <mesh position={[0, 0.7, 0.4625]}>
        <planeGeometry args={[0.22, 0.018]} />
        <meshBasicMaterial color={hover ? "#f0b687" : "#a8431c"} transparent opacity={hover || screenActive ? 0.95 : 0.7} />
      </mesh>

      {/* "Macintosh" name plate under the screen */}
      <mesh position={[0, 0.55, 0.4612]}>
        <planeGeometry args={[0.34, 0.03]} />
        <meshStandardMaterial
          color="#1f1a14"
          emissive="#1f1a14"
          emissiveIntensity={0.05}
          roughness={0.55}
        />
      </mesh>

      {/* Floppy disk slot — thin dark line on the lower right */}
      <mesh position={[0.16, 0.28, 0.4615]}>
        <boxGeometry args={[0.34, 0.018, 0.006]} />
        <meshStandardMaterial color="#0a0805" roughness={0.6} />
      </mesh>
      {/* Tiny disk eject indicator dot to the right of the slot */}
      <mesh position={[0.355, 0.28, 0.4615]}>
        <circleGeometry args={[0.005, 12]} />
        <meshStandardMaterial color="#1f1a14" roughness={0.6} />
      </mesh>

      {/* Power LED (green pinhole on the lower left of the front) */}
      <mesh position={[-0.32, 0.36, 0.462]}>
        <sphereGeometry args={[0.008, 8, 8]} />
        <meshStandardMaterial
          emissive="#6a8d4a"
          emissiveIntensity={1.4}
          color="#1a1208"
        />
      </mesh>

      {/* Keyboard (slim wedge in front, smaller than before to match the
          smaller monitor footprint) */}
      <group position={[0, 0.0, 0.62]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.78, 0.025, 0.28]} />
          <meshStandardMaterial color="#d4c4a0" roughness={0.75} />
        </mesh>
        <mesh position={[0, 0.018, 0]}>
          <boxGeometry args={[0.74, 0.005, 0.24]} />
          <meshStandardMaterial color="#a89878" roughness={0.7} />
        </mesh>
        {[-0.08, -0.02, 0.04, 0.1].map((z, i) => (
          <mesh key={i} position={[0, 0.022, z]}>
            <boxGeometry args={[0.7, 0.001, 0.02]} />
            <meshBasicMaterial color="#1f1a14" transparent opacity={0.32} />
          </mesh>
        ))}
      </group>

      {/* "Lisa-style" boxy mouse */}
      <mesh position={[0.48, 0.013, 0.62]} castShadow>
        <boxGeometry args={[0.1, 0.025, 0.13]} />
        <meshStandardMaterial color="#d4c4a0" roughness={0.75} />
      </mesh>
      <mesh position={[0.48, 0.018, 0.45]}>
        <boxGeometry args={[0.006, 0.006, 0.17]} />
        <meshStandardMaterial color="#9c8a68" />
      </mesh>
    </group>
  );
}
