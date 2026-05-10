import { useMemo } from "react";
import * as THREE from "three";

export function Room() {
  const floorMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#4a3826",
        roughness: 0.85,
        metalness: 0.02,
      }),
    [],
  );
  const wallMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#d8c8a4",
        roughness: 1.0,
        metalness: 0,
      }),
    [],
  );
  const backWallMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#cab68f",
        roughness: 1.0,
        metalness: 0,
      }),
    [],
  );

  return (
    <group>
      {/* Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
        material={floorMat}
      >
        <planeGeometry args={[14, 14]} />
      </mesh>
      {/* Floorboards — repeating darker strips for texture without a texture file */}
      {Array.from({ length: 7 }, (_, i) => (
        <mesh
          key={`board-${i}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.001, -2.5 + i * 0.85]}
        >
          <planeGeometry args={[14, 0.006]} />
          <meshBasicMaterial color="#2c2014" transparent opacity={0.55} />
        </mesh>
      ))}

      {/* Back wall */}
      <mesh position={[0, 1.8, -2.6]} receiveShadow material={backWallMat}>
        <planeGeometry args={[14, 3.6]} />
      </mesh>
      {/* Left wall */}
      <mesh
        position={[-3, 1.8, 0]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
        material={wallMat}
      >
        <planeGeometry args={[5.2, 3.6]} />
      </mesh>
      {/* Right wall */}
      <mesh
        position={[3, 1.8, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        receiveShadow
        material={wallMat}
      >
        <planeGeometry args={[5.2, 3.6]} />
      </mesh>

      {/* Window opening on right wall (emissive sky behind glass) */}
      <mesh position={[2.985, 1.85, -0.6]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[1.6, 1.2]} />
        <meshStandardMaterial
          color="#f6e1be"
          emissive="#f6e1be"
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* Window mullion frame: vertical */}
      <mesh position={[2.978, 1.85, -0.6]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[0.02, 1.2, 0.02]} />
        <meshStandardMaterial color="#2c2014" />
      </mesh>
      {/* Window mullion frame: horizontal */}
      <mesh position={[2.978, 1.85, -0.6]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[1.6, 0.02, 0.02]} />
        <meshStandardMaterial color="#2c2014" />
      </mesh>
      {/* Window outer frame */}
      <mesh position={[2.97, 1.85, -0.6]} rotation={[0, -Math.PI / 2, 0]}>
        <ringGeometry args={[0.84, 0.92, 4, 1]} />
        <meshStandardMaterial color="#2c2014" side={THREE.DoubleSide} />
      </mesh>

      {/* Baseboard */}
      <mesh position={[0, 0.07, -2.59]}>
        <boxGeometry args={[14, 0.14, 0.03]} />
        <meshStandardMaterial color="#2c2014" />
      </mesh>
      <mesh position={[-2.99, 0.07, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[5.2, 0.14, 0.03]} />
        <meshStandardMaterial color="#2c2014" />
      </mesh>
      <mesh position={[2.99, 0.07, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[5.2, 0.14, 0.03]} />
        <meshStandardMaterial color="#2c2014" />
      </mesh>

      {/* Floor rug under desk */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.005, 0.1]}
        receiveShadow
      >
        <planeGeometry args={[3.4, 2.2]} />
        <meshStandardMaterial color="#7d2e10" roughness={0.95} />
      </mesh>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.006, 0.1]}
        receiveShadow
      >
        <planeGeometry args={[3.0, 1.85]} />
        <meshStandardMaterial color="#a8431c" roughness={0.95} />
      </mesh>
    </group>
  );
}
