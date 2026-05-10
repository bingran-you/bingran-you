export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.22} color="#fff1d6" />
      <hemisphereLight args={["#fff1d6", "#1a1208", 0.18]} />
      <directionalLight
        position={[-3, 4.6, 3.2]}
        intensity={1.05}
        color="#fde2ba"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={14}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-bias={-0.0008}
      />
      {/* Desk-lamp glow (no shadow — cheaper, and we already have key light) */}
      <pointLight
        position={[1.05, 1.95, -0.93]}
        intensity={1.8}
        distance={3.6}
        decay={2.0}
        color="#f0b687"
      />
      {/* Monitor screen glow — cool counterweight to the warm lamp */}
      <pointLight
        position={[0, 1.65, -0.55]}
        intensity={0.55}
        distance={2.2}
        decay={2.0}
        color="#7faedf"
      />
      {/* Window key — soft directional fill from window opening */}
      <pointLight
        position={[2.6, 2.0, -0.6]}
        intensity={0.7}
        distance={4.5}
        decay={2.0}
        color="#f6e1be"
      />
    </>
  );
}
