"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, RoundedBox } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { HUD } from "./HUD";

// ============================================================================
//  Room — warm beige walls, dark wood floor with crimson carpet under the desk.
//  All surfaces are PBR (roughness >0.6 so the room doesn't feel like plastic).
// ============================================================================

function Room() {
  return (
    <group>
      {/* Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1108" roughness={0.95} metalness={0} />
      </mesh>

      {/* Crimson rug under the desk */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.005, 0.3]}
        receiveShadow
      >
        <planeGeometry args={[5, 4]} />
        <meshStandardMaterial color="#5a1818" roughness={0.92} metalness={0} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 3, -3]} receiveShadow>
        <planeGeometry args={[14, 6]} />
        <meshStandardMaterial color="#a8916c" roughness={0.96} metalness={0} />
      </mesh>

      {/* Left wall */}
      <mesh
        rotation={[0, Math.PI / 2, 0]}
        position={[-5, 3, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#947d5a" roughness={0.96} metalness={0} />
      </mesh>

      {/* Right wall */}
      <mesh
        rotation={[0, -Math.PI / 2, 0]}
        position={[5, 3, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#947d5a" roughness={0.96} metalness={0} />
      </mesh>

      {/* Ceiling — sits high, never seen directly but bounces light */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6, 0]}>
        <planeGeometry args={[14, 10]} />
        <meshStandardMaterial color="#b89d75" roughness={1} metalness={0} />
      </mesh>
    </group>
  );
}

// ============================================================================
//  Desk — black wood with subtle anisotropy. Top + 4 legs, slight bevel.
// ============================================================================

function Desk() {
  return (
    <group position={[0, 0, 0]}>
      {/* Top surface */}
      <RoundedBox
        args={[2.6, 0.05, 1.2]}
        radius={0.01}
        smoothness={4}
        position={[0, 0.78, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#1a1410" roughness={0.55} metalness={0.1} />
      </RoundedBox>

      {/* Skirt under top */}
      <RoundedBox
        args={[2.55, 0.08, 0.6]}
        radius={0.005}
        smoothness={3}
        position={[0, 0.72, -0.25]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#15100c" roughness={0.7} metalness={0.05} />
      </RoundedBox>

      {/* 4 legs */}
      {[
        [-1.25, -0.55],
        [1.25, -0.55],
        [-1.25, 0.55],
        [1.25, 0.55],
      ].map(([x, z], i) => (
        <RoundedBox
          key={i}
          args={[0.06, 0.78, 0.06]}
          radius={0.005}
          smoothness={3}
          position={[x, 0.39, z]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial color="#15100c" roughness={0.7} metalness={0.1} />
        </RoundedBox>
      ))}
    </group>
  );
}

// ============================================================================
//  Macintosh Classic — the 1990 all-in-one. Cream beige body, recessed CRT.
//  Real dimensions: 245mm × 343mm × 274mm. We scale to ~0.42m tall on the desk.
// ============================================================================

const MAC = {
  bodyColor: "#e6d9b8",        // beige plastic
  bodyColorWarm: "#e0d0a8",    // shaded tone
  bezelColor: "#0a0a0a",       // CRT bezel
  screenColor: "#0d2640",      // dim CRT phosphor blue when off
  monitorPosition: new THREE.Vector3(0, 0.805 + 0.22, -0.05),
  bodyWidth: 0.32,
  bodyHeight: 0.42,
  bodyDepth: 0.36,
};

function MacintoshClassic({
  onEnterScreen,
}: {
  onEnterScreen?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "default";
    return () => {
      document.body.style.cursor = "default";
    };
  }, [hovered]);

  // Body sits on the desk top (y=0.805 = desk top + tiny gap)
  const baseY = 0.805;

  return (
    <group position={[0, baseY, -0.1]}>
      {/* Main body — single rounded cube */}
      <RoundedBox
        args={[MAC.bodyWidth, MAC.bodyHeight, MAC.bodyDepth]}
        radius={0.015}
        smoothness={5}
        creaseAngle={0.4}
        position={[0, MAC.bodyHeight / 2, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={MAC.bodyColor}
          roughness={0.55}
          metalness={0.05}
        />
      </RoundedBox>

      {/* CRT bezel — recessed black frame around screen */}
      <RoundedBox
        args={[0.24, 0.2, 0.005]}
        radius={0.005}
        smoothness={3}
        position={[0, MAC.bodyHeight - 0.16, MAC.bodyDepth / 2 + 0.001]}
      >
        <meshStandardMaterial color={MAC.bezelColor} roughness={0.4} metalness={0.2} />
      </RoundedBox>

      {/* Screen surface — slightly recessed (z back from bezel) */}
      <mesh
        position={[0, MAC.bodyHeight - 0.16, MAC.bodyDepth / 2 - 0.003]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          onEnterScreen?.();
        }}
      >
        <planeGeometry args={[0.215, 0.175]} />
        <meshStandardMaterial
          color={MAC.screenColor}
          roughness={0.05}
          metalness={0.1}
          emissive="#0d2640"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Power LED — tiny green dot */}
      <mesh position={[-0.085, MAC.bodyHeight - 0.27, MAC.bodyDepth / 2 + 0.002]}>
        <circleGeometry args={[0.003, 16]} />
        <meshStandardMaterial
          color="#7ef5a8"
          emissive="#4ade80"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Apple logo dot — small accent above screen */}
      <mesh position={[0.085, MAC.bodyHeight - 0.05, MAC.bodyDepth / 2 + 0.002]}>
        <circleGeometry args={[0.004, 16]} />
        <meshStandardMaterial color="#c93030" roughness={0.4} />
      </mesh>

      {/* Floppy slot — horizontal black slit lower on body */}
      <mesh position={[0.05, MAC.bodyHeight - 0.34, MAC.bodyDepth / 2 + 0.002]}>
        <planeGeometry args={[0.13, 0.005]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
      </mesh>

      {/* Vent grille — bottom front, horizontal lines */}
      <mesh position={[0, MAC.bodyHeight - 0.27, MAC.bodyDepth / 2 + 0.001]}>
        <planeGeometry args={[0.22, 0.005]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>
    </group>
  );
}

// ============================================================================
//  Multi-layer screen content — when zoomed in, the iframe is rendered via
//  drei <Html transform> which is r3f's wrapper around CSS3DRenderer.
//  Layered with smudge + scanline + dimming planes for CRT authenticity.
// ============================================================================

function ScreenContent({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <group position={[0, 0.805 + MAC.bodyHeight - 0.16, -0.1 + MAC.bodyDepth / 2 + 0.001]}>
      {/* iframe via CSS3D — sits at z=0 relative to screen */}
      <Html
        transform
        distanceFactor={0.85}
        position={[0, 0, 0.001]}
        style={{
          width: "260px",
          height: "212px",
          background: "#08090B",
          overflow: "hidden",
          border: "1px solid #1B1F25",
        }}
      >
        <iframe
          src="/"
          title="bingran.you inside the CRT"
          style={{
            border: 0,
            display: "block",
            transform: "scale(0.42)",
            transformOrigin: "top left",
            width: "238%",
            height: "238%",
          }}
        />
      </Html>

      {/* Scanline overlay — additive blend, fixed-resolution noise */}
      <mesh position={[0, 0, 0.004]}>
        <planeGeometry args={[0.215, 0.175]} />
        <meshBasicMaterial
          color="#4ade80"
          transparent
          opacity={0.04}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

// ============================================================================
//  Desk lamp — black metal arm with white cone shade. Houses a real area light.
// ============================================================================

function DeskLamp() {
  return (
    <group position={[1.05, 0.805, -0.15]}>
      {/* Base disc */}
      <mesh position={[0, 0.01, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.07, 0.08, 0.02, 32]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Vertical pole */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.008, 0.008, 0.68, 16]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Pivot ball */}
      <mesh position={[0, 0.68, 0]} castShadow>
        <sphereGeometry args={[0.018, 16, 16]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Angled arm to shade */}
      <mesh position={[-0.06, 0.7, 0.04]} rotation={[0, 0.3, -0.4]} castShadow>
        <cylinderGeometry args={[0.006, 0.006, 0.14, 12]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Cone shade — tip toward arm, open end down/forward */}
      <mesh
        position={[-0.13, 0.73, 0.09]}
        rotation={[Math.PI * 0.32, 0.4, 0]}
        castShadow
        receiveShadow
      >
        <coneGeometry args={[0.075, 0.13, 24, 1, true]} />
        <meshStandardMaterial
          color="#f5f0e6"
          roughness={0.7}
          metalness={0.05}
          side={THREE.DoubleSide}
          emissive="#ffd9a8"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Bulb proxy — small emissive sphere inside the shade */}
      <mesh position={[-0.13, 0.72, 0.09]}>
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshBasicMaterial color="#ffd9a8" />
      </mesh>

      {/* The actual point light from inside the shade — warm, no shadow cast */}
      {/* (we rely on the directional shadow + ambient occlusion in post) */}
      <pointLight
        position={[-0.13, 0.72, 0.09]}
        intensity={1.5}
        distance={3}
        decay={2}
        color="#ffd1a0"
      />
    </group>
  );
}

// ============================================================================
//  Wall picture frame — empty beige canvas, thin dark border.
// ============================================================================

function PictureFrame({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Frame border */}
      <RoundedBox args={[0.46, 0.36, 0.02]} radius={0.003} smoothness={2} castShadow>
        <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.15} />
      </RoundedBox>
      {/* Canvas inset */}
      <mesh position={[0, 0, 0.011]}>
        <planeGeometry args={[0.42, 0.32]} />
        <meshStandardMaterial color="#9c8865" roughness={0.95} />
      </mesh>
    </group>
  );
}

// ============================================================================
//  Wall shelf with 4 books — staggered colors matching the screenshot
//  (maroon, navy, beige, dark chocolate).
// ============================================================================

function Shelf({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Shelf plank */}
      <RoundedBox args={[1.4, 0.025, 0.18]} radius={0.005} smoothness={3} castShadow receiveShadow>
        <meshStandardMaterial color="#0e0a07" roughness={0.55} metalness={0.1} />
      </RoundedBox>

      {/* Books */}
      {[
        { color: "#5a1a1a", w: 0.18, h: 0.16, x: -0.5 },
        { color: "#1c2a4a", w: 0.16, h: 0.2, x: -0.27 },
        { color: "#d8c8a4", w: 0.17, h: 0.18, x: -0.05 },
        { color: "#2a1810", w: 0.19, h: 0.17, x: 0.2 },
      ].map((b, i) => (
        <RoundedBox
          key={i}
          args={[b.w, b.h, 0.14]}
          radius={0.004}
          smoothness={2}
          position={[b.x, b.h / 2 + 0.013, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial color={b.color} roughness={0.85} metalness={0} />
        </RoundedBox>
      ))}
    </group>
  );
}

// ============================================================================
//  Books stack on the desk + a red cone on top.
// ============================================================================

function BookStack({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <RoundedBox args={[0.24, 0.03, 0.18]} radius={0.003} smoothness={2} position={[0, 0.015, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#5a1818" roughness={0.85} />
      </RoundedBox>
      <RoundedBox args={[0.23, 0.025, 0.17]} radius={0.003} smoothness={2} position={[0.005, 0.043, 0.005]} castShadow receiveShadow>
        <meshStandardMaterial color="#1c2a4a" roughness={0.85} />
      </RoundedBox>
      <RoundedBox args={[0.22, 0.02, 0.16]} radius={0.003} smoothness={2} position={[-0.005, 0.066, -0.005]} castShadow receiveShadow>
        <meshStandardMaterial color="#e8dcc0" roughness={0.85} />
      </RoundedBox>

      {/* Red cone on top */}
      <mesh position={[0, 0.105, 0]} castShadow>
        <coneGeometry args={[0.025, 0.06, 24]} />
        <meshStandardMaterial color="#c93030" roughness={0.4} metalness={0.1} />
      </mesh>
    </group>
  );
}

// ============================================================================
//  Coffee cup — small white ceramic.
// ============================================================================

function CoffeeCup({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.035, 0.03, 0.07, 32]} />
        <meshStandardMaterial color="#f8f4ec" roughness={0.35} metalness={0.05} />
      </mesh>
      {/* Inside dark — coffee */}
      <mesh position={[0, 0.025, 0]}>
        <cylinderGeometry args={[0.031, 0.026, 0.005, 32]} />
        <meshStandardMaterial color="#2a1208" roughness={0.2} metalness={0.3} />
      </mesh>
      {/* Handle — simple torus segment */}
      <mesh position={[0.04, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.015, 0.005, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#f8f4ec" roughness={0.35} metalness={0.05} />
      </mesh>
    </group>
  );
}

// ============================================================================
//  Plant — pot + 5 cone leaves.
// ============================================================================

function Plant({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Terracotta pot */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.08, 0.065, 0.12, 32]} />
        <meshStandardMaterial color="#a64938" roughness={0.85} metalness={0.05} />
      </mesh>
      {/* Soil */}
      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 0.005, 24]} />
        <meshStandardMaterial color="#2a1a10" roughness={1} />
      </mesh>
      {/* Leaves cluster */}
      {Array.from({ length: 7 }).map((_, i) => {
        const angle = (i / 7) * Math.PI * 2;
        const r = 0.04;
        const tilt = 0.3 + Math.random() * 0.15;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * r, 0.13, Math.sin(angle) * r]}
            rotation={[
              Math.cos(angle) * tilt,
              angle,
              Math.sin(angle) * tilt,
            ]}
            castShadow
          >
            <coneGeometry args={[0.05, 0.13, 12]} />
            <meshStandardMaterial color="#3a5c2a" roughness={0.85} metalness={0} />
          </mesh>
        );
      })}
    </group>
  );
}

// ============================================================================
//  Paper + red square pad — desk left side.
// ============================================================================

function PaperPad({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0.06]}>
        <planeGeometry args={[0.22, 0.16]} />
        <meshStandardMaterial color="#f5efe2" roughness={0.95} />
      </mesh>
      <mesh receiveShadow position={[0, 0.0005, 0]} rotation={[-Math.PI / 2, 0, 0.06]}>
        <planeGeometry args={[0.09, 0.09]} />
        <meshStandardMaterial color="#9a2828" roughness={0.85} />
      </mesh>
    </group>
  );
}

// ============================================================================
//  Mouse — small ergonomic blob with a wire vanishing under the Mac.
// ============================================================================

function Mouse({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow rotation={[0, 0.3, 0]}>
        <boxGeometry args={[0.05, 0.018, 0.08]} />
        <meshStandardMaterial color="#e6d9b8" roughness={0.5} metalness={0.05} />
      </mesh>
    </group>
  );
}

// ============================================================================
//  Camera rig — subtle mouse-driven parallax around a base position +
//  click-to-zoom keyframe to the screen.
// ============================================================================

const VIEWS = {
  default: {
    pos: new THREE.Vector3(0, 1.55, 2.4),
    look: new THREE.Vector3(0, 1.0, -0.3),
    fov: 42,
  },
  monitor: {
    pos: new THREE.Vector3(0, 1.05, 0.6),
    look: new THREE.Vector3(0, 1.05, -0.1),
    fov: 22,
  },
};

function CameraRig({ view }: { view: keyof typeof VIEWS }) {
  const { camera, mouse } = useThree();
  const target = useRef(VIEWS[view].pos.clone());
  const lookTarget = useRef(VIEWS[view].look.clone());
  const currentLook = useRef(VIEWS[view].look.clone());

  useEffect(() => {
    target.current.copy(VIEWS[view].pos);
    lookTarget.current.copy(VIEWS[view].look);
    (camera as THREE.PerspectiveCamera).fov = VIEWS[view].fov;
    (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
  }, [view, camera]);

  useFrame(() => {
    // Mouse parallax — gentle drift around the base position (max ±15cm)
    const parallaxX = mouse.x * 0.22;
    const parallaxY = mouse.y * 0.12;

    const desired = target.current
      .clone()
      .add(new THREE.Vector3(parallaxX, parallaxY, 0));

    camera.position.lerp(desired, 0.06);
    currentLook.current.lerp(lookTarget.current, 0.06);
    camera.lookAt(currentLook.current);
  });

  return null;
}

// ============================================================================
//  Lighting — HDRI environment for soft bounce + warm key from window + lamp's
//  own pointLight (defined inside DeskLamp) + small cool fill from front.
// ============================================================================

function Lighting() {
  return (
    <>
      {/* Hemisphere fill — warm sky / cool floor; cheap, no shadow cost */}
      <hemisphereLight args={["#f5d6a8", "#1a1408", 0.7]} />

      {/* Warm key from upper-right (lamp direction). Shadow-casting at 1024 — */}
      {/* big enough to look right, small enough to fit constrained GPUs. */}
      <directionalLight
        position={[2.2, 3.5, 1.5]}
        intensity={1.4}
        color="#ffd9a8"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-3}
        shadow-camera-right={3}
        shadow-camera-top={3}
        shadow-camera-bottom={-1}
        shadow-camera-near={0.5}
        shadow-camera-far={8}
        shadow-bias={-0.0005}
      />

      {/* Cool fill from the opposite side — adds depth to shadow side */}
      <directionalLight
        position={[-3, 2.5, 2]}
        intensity={0.35}
        color="#5e7a9c"
      />

      {/* Subtle ambient — Three's PBR materials look dead without it */}
      <ambientLight intensity={0.2} color="#3a2818" />
    </>
  );
}

// ============================================================================
//  Scene root
// ============================================================================

export function Scene() {
  const [view, setView] = useState<keyof typeof VIEWS>("default");

  // r3f under Next 16 + Turbopack sometimes misses its first paint until a
  // resize event nudges the ResizeObserver. Kick one ourselves on mount + on
  // a short delay (the second covers async font / iframe layout shifts that
  // can otherwise leave the canvas blank).
  useEffect(() => {
    const fire = () => window.dispatchEvent(new Event("resize"));
    fire();
    const t1 = setTimeout(fire, 100);
    const t2 = setTimeout(fire, 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#1a1208",
      }}
    >
      <Canvas
        shadows
        frameloop="always"
        camera={{ position: [0, 1.55, 2.4], fov: 42 }}
        gl={{
          antialias: true,
          alpha: false,
          preserveDrawingBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        dpr={[1, 1.5]}
        onCreated={({ gl, scene }) => {
          gl.setClearColor("#1a1208", 1);
          scene.background = new THREE.Color("#1a1208");
        }}
      >
        <color attach="background" args={["#1a1208"]} />

        <Lighting />

        <Room />
        <Desk />
        <MacintoshClassic onEnterScreen={() => setView("monitor")} />
        <ScreenContent visible={view === "monitor"} />
        <DeskLamp />
        <PictureFrame position={[-1.7, 1.6, -2.99]} />
        <Shelf position={[2.1, 1.8, -2.91]} />
        <BookStack position={[-0.85, 0.805, 0.1]} />
        <CoffeeCup position={[0.6, 0.805 + 0.035, 0.1]} />
        <Plant position={[1.55, 0.805, 0.18]} />
        <PaperPad position={[-0.55, 0.806, 0.32]} />
        <Mouse position={[0.35, 0.812, 0.28]} />

        <CameraRig view={view} />
      </Canvas>

      <HUD
        viewMode={view}
        onBack={() => setView("default")}
        onEnter={() => setView("monitor")}
      />
    </div>
  );
}
