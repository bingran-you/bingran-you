export function Desk() {
  const legPositions: [number, number, number][] = [
    [-1.22, 0.48, -0.42 - 0.6],
    [1.22, 0.48, -0.42 - 0.6],
    [-1.22, 0.48, 0.42 - 0.6],
    [1.22, 0.48, 0.42 - 0.6],
  ];

  return (
    <group>
      {/* Desktop */}
      <mesh position={[0, 0.96, -0.6]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.06, 1.0]} />
        <meshStandardMaterial
          color="#3a2918"
          roughness={0.6}
          metalness={0.05}
        />
      </mesh>
      {/* Desk legs */}
      {legPositions.map((p, i) => (
        <mesh key={i} position={p} castShadow>
          <boxGeometry args={[0.07, 0.94, 0.07]} />
          <meshStandardMaterial color="#2a1d10" roughness={0.7} />
        </mesh>
      ))}
      {/* Modesty panel along the back of the desk */}
      <mesh position={[0, 0.6, -1.04]}>
        <boxGeometry args={[2.46, 0.55, 0.03]} />
        <meshStandardMaterial color="#332314" roughness={0.7} />
      </mesh>

      {/* Office chair, pushed to the side so it frames the desk without
          blocking the camera's view of the monitor. */}
      <group position={[-1.7, 0, 0.3]} rotation={[0, 0.6, 0]}>
        <mesh position={[0, 1.0, 0]} castShadow>
          <boxGeometry args={[0.78, 0.62, 0.06]} />
          <meshStandardMaterial color="#3b1605" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.58, 0.3]} castShadow>
          <boxGeometry args={[0.84, 0.08, 0.74]} />
          <meshStandardMaterial color="#7d2e10" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.3, 0.3]}>
          <cylinderGeometry args={[0.04, 0.05, 0.5, 12]} />
          <meshStandardMaterial color="#1a1208" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.06, 0.3]}>
          <cylinderGeometry args={[0.3, 0.32, 0.06, 16]} />
          <meshStandardMaterial color="#1a1208" metalness={0.5} roughness={0.4} />
        </mesh>
        {[0, 1, 2, 3, 4].map((i) => {
          const a = (i * Math.PI * 2) / 5;
          return (
            <mesh
              key={i}
              position={[Math.cos(a) * 0.28, 0.04, Math.sin(a) * 0.28 + 0.3]}
              rotation={[0, -a, 0]}
            >
              <boxGeometry args={[0.34, 0.04, 0.06]} />
              <meshStandardMaterial color="#15110b" metalness={0.5} roughness={0.4} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}
