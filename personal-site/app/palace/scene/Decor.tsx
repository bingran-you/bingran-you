"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Decor() {
  const bulbMat = useRef<THREE.MeshStandardMaterial>(null);
  useFrame((state) => {
    if (!bulbMat.current) return;
    const t = state.clock.elapsedTime;
    bulbMat.current.emissiveIntensity = 1.4 + Math.sin(t * 3.3) * 0.05;
  });

  return (
    <>
      {/* Desk lamp — right side of desk */}
      <group position={[1.0, 0.99, -0.95]}>
        <mesh position={[0, 0.04, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.1, 0.04, 16]} />
          <meshStandardMaterial color="#2c2014" roughness={0.6} metalness={0.3} />
        </mesh>
        <mesh position={[0, 0.38, 0]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.68, 8]} />
          <meshStandardMaterial color="#2c2014" roughness={0.6} metalness={0.3} />
        </mesh>
        {/* Arm */}
        <mesh position={[-0.13, 0.72, 0.06]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[0.013, 0.013, 0.3, 8]} />
          <meshStandardMaterial color="#2c2014" roughness={0.6} metalness={0.3} />
        </mesh>
        {/* Shade */}
        <mesh position={[-0.22, 0.8, 0.12]} rotation={[0.15, 0, Math.PI / 5]} castShadow>
          <coneGeometry args={[0.15, 0.22, 18, 1, true]} />
          <meshStandardMaterial
            color="#f4ead7"
            roughness={0.85}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Bulb */}
        <mesh position={[-0.22, 0.74, 0.12]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            ref={bulbMat}
            color="#f0b687"
            emissive="#f0b687"
            emissiveIntensity={1.4}
          />
        </mesh>
      </group>

      {/* Stack of books on left of desk + figurine */}
      <group position={[-1.05, 0.99, -1.05]}>
        <mesh position={[0, 0.025, 0]} castShadow>
          <boxGeometry args={[0.42, 0.05, 0.3]} />
          <meshStandardMaterial color="#7d2e10" roughness={0.85} />
        </mesh>
        <mesh position={[0.01, 0.072, 0]} castShadow>
          <boxGeometry args={[0.4, 0.045, 0.29]} />
          <meshStandardMaterial color="#2a3a5c" roughness={0.85} />
        </mesh>
        <mesh position={[-0.01, 0.115, 0.005]} rotation={[0, 0.05, 0]} castShadow>
          <boxGeometry args={[0.42, 0.04, 0.3]} />
          <meshStandardMaterial color="#e8d6b0" roughness={0.85} />
        </mesh>
        {/* Pyramid bookmark */}
        <mesh position={[0.06, 0.18, 0]} castShadow>
          <coneGeometry args={[0.05, 0.1, 16]} />
          <meshStandardMaterial color="#a8431c" roughness={0.6} />
        </mesh>
      </group>

      {/* Coffee cup right of monitor */}
      <group position={[0.95, 1.0, -0.35]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.055, 0.045, 0.1, 24]} />
          <meshStandardMaterial color="#f4ead7" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.052, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.002, 24]} />
          <meshStandardMaterial color="#3a1f0a" roughness={0.5} />
        </mesh>
        {/* Handle */}
        <mesh position={[0.06, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.035, 0.008, 8, 14, Math.PI]} />
          <meshStandardMaterial color="#f4ead7" roughness={0.8} />
        </mesh>
      </group>

      {/* Notebook + papers to the left of the keyboard */}
      <group position={[-0.7, 0.99, -0.05]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.28, 0.015, 0.36]} />
          <meshStandardMaterial color="#ece1c3" roughness={0.95} />
        </mesh>
        <mesh position={[0, 0.009, 0.1]}>
          <boxGeometry args={[0.22, 0.001, 0.18]} />
          <meshStandardMaterial color="#a8431c" roughness={0.95} />
        </mesh>
        {/* Pen */}
        <mesh position={[0.12, 0.012, -0.08]} rotation={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.005, 0.005, 0.18, 8]} />
          <meshStandardMaterial color="#1a1208" roughness={0.5} metalness={0.3} />
        </mesh>
      </group>

      {/* Picture frame on back wall — left */}
      <group position={[-1.4, 1.95, -2.57]}>
        <mesh>
          <boxGeometry args={[0.62, 0.46, 0.02]} />
          <meshStandardMaterial color="#2c2014" roughness={0.55} />
        </mesh>
        <mesh position={[0, 0, 0.012]}>
          <planeGeometry args={[0.56, 0.4]} />
          <meshStandardMaterial
            color="#e8d6b0"
            emissive="#a8431c"
            emissiveIntensity={0.05}
            roughness={0.8}
          />
        </mesh>
      </group>

      {/* Wall shelf with folders */}
      <group position={[1.3, 2.1, -2.57]}>
        <mesh castShadow>
          <boxGeometry args={[1.4, 0.03, 0.22]} />
          <meshStandardMaterial color="#3a2918" roughness={0.6} />
        </mesh>
        <mesh position={[-0.45, 0.13, 0]} castShadow>
          <boxGeometry args={[0.22, 0.22, 0.18]} />
          <meshStandardMaterial color="#7d2e10" roughness={0.85} />
        </mesh>
        <mesh position={[-0.2, 0.13, 0]} castShadow>
          <boxGeometry args={[0.22, 0.22, 0.18]} />
          <meshStandardMaterial color="#2a3a5c" roughness={0.85} />
        </mesh>
        <mesh position={[0.05, 0.13, 0]} castShadow>
          <boxGeometry args={[0.22, 0.22, 0.18]} />
          <meshStandardMaterial color="#ece1c3" roughness={0.85} />
        </mesh>
        <mesh position={[0.4, 0.13, 0]} castShadow>
          <boxGeometry args={[0.22, 0.22, 0.18]} />
          <meshStandardMaterial color="#3a2918" roughness={0.85} />
        </mesh>
      </group>

      {/* Small plant in pot (right back corner of desk) */}
      <group position={[1.25, 0.99, -1.0]}>
        <mesh position={[0, 0.07, 0]} castShadow>
          <cylinderGeometry args={[0.085, 0.07, 0.14, 16]} />
          <meshStandardMaterial color="#7d2e10" roughness={0.85} />
        </mesh>
        <mesh position={[0, 0.22, 0]} castShadow>
          <sphereGeometry args={[0.13, 14, 14]} />
          <meshStandardMaterial color="#3a6b3a" roughness={0.95} />
        </mesh>
        <mesh position={[-0.05, 0.3, 0.02]} castShadow>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color="#4a7b4a" roughness={0.95} />
        </mesh>
      </group>
    </>
  );
}
