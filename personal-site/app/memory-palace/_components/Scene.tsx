"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { BakedGLB, preloadBakedAssets } from "./BakedGLB";
import { HUD } from "./HUD";

// preload the three GLB + JPG pairs in module scope so they hit the cache
// before Canvas mounts. Henry's repo does this through his Resources manager;
// drei's useGLTF.preload is the r3f equivalent.
if (typeof window !== "undefined") {
  preloadBakedAssets();
}

// ============================================================================
//  World scale. The MIT-licensed GLBs from henryjeff/portfolio-website export
//  with large native units (computer_setup is 2.24m wide as-is, environment
//  is 80m × 80m); Henry's runtime then multiplies by 900 in BakedModel and
//  works in mm-ish world coords (camera at y=1800, z=5500). We work in r3f's
//  standard meter scale, so we apply scale ≈ 0.15 on load so the Mac sits at
//  ~34cm (real Macintosh Classic dimensions) and the room is ~12m wide.
// ============================================================================

const MODEL_SCALE = 0.15;

// ============================================================================
//  Multi-layer CRT screen — sits in front of the Mac monitor mesh from the
//  computer_setup.glb. iframe (drei <Html transform>) is the live layer; the
//  smudge JPG, inner-shadow PNG, and scanline MP4 are all stacked at small
//  z-offsets to give the "physical glass" feel Henry's monitor has.
// ============================================================================

const SCREEN = {
  // Screen plane size at MODEL_SCALE=0.15 — covers the monitor face.
  width: 0.27,
  height: 0.2,
  // Position of the screen plane in world space. The monitor face in the baked
  // computer_setup.glb sits centered around y=0.22, z=0.0 at scale 0.15.
  position: new THREE.Vector3(0, 0.22, 0.005),
  rotation: new THREE.Euler(0, 0, 0),
};

function ScreenLayers(_: { visible: boolean }) {
  // Idle state shows a dim phosphor backdrop where the CRT face sits. When
  // the user clicks the monitor we transition to a full-screen 2D overlay
  // (see MonitorOverlay below) — sidestepping the drei <Html transform>
  // distanceFactor calibration mess for a more reliable UX. The smudge layer
  // gives the CRT face a soft sheen even at idle.
  const smudge = useTexture("/memory-palace/textures/monitor-smudge.jpg");

  return (
    <group position={SCREEN.position} rotation={SCREEN.rotation}>
      <mesh position={[0, 0, 0.001]}>
        <planeGeometry args={[SCREEN.width, SCREEN.height]} />
        <meshBasicMaterial color="#0d1a1d" />
      </mesh>
      <mesh position={[0, 0, 0.003]}>
        <planeGeometry args={[SCREEN.width, SCREEN.height]} />
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

// 2D overlay shown when the user is "inside" the monitor — a CRT frame styled
// div wraps an iframe to bingran.you. This is the v2 escape hatch: instead of
// fighting Html transform pixel-to-world math, we just give the user the full
// text site within a phosphor-themed frame.
function MonitorOverlay({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "radial-gradient(ellipse at center, rgba(20,30,28,0.65) 0%, rgba(8,9,11,0.92) 75%)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        zIndex: 10,
        display: "grid",
        placeItems: "center",
        animation: "mpFadeIn 380ms cubic-bezier(0.2, 0, 0, 1)",
      }}
    >
      <style>{`
        @keyframes mpFadeIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <div
        style={{
          position: "relative",
          width: "min(86vw, 1200px)",
          height: "min(82vh, 800px)",
          background: "#0a0c10",
          border: "1px solid #2A3038",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow:
            "0 0 0 1px rgba(74, 222, 128, 0.08), 0 30px 80px rgba(0,0,0,0.55), inset 0 0 80px rgba(74, 222, 128, 0.04)",
        }}
      >
        <iframe
          src="/"
          title="bingran.you"
          style={{ width: "100%", height: "100%", border: 0, display: "block" }}
        />
      </div>
    </div>
  );
}

// ============================================================================
//  Audio — tiny on-demand sample player using the Web Audio API. Loaded lazily
//  so the page paint isn't blocked. Triggered by mouse / monitor interactions.
//  Samples are Henry's MIT-licensed mp3s.
// ============================================================================

function useDeskAudio() {
  const ctxRef = useRef<AudioContext | null>(null);
  const buffersRef = useRef<Record<string, AudioBuffer>>({});

  useEffect(() => {
    // Lazy-init on first user gesture (browsers block AudioContext otherwise)
    const init = async () => {
      if (ctxRef.current) return;
      const Ctx = window.AudioContext || (window as any).webkitAudioContext;
      if (!Ctx) return;
      ctxRef.current = new Ctx();

      const load = async (key: string, url: string) => {
        const r = await fetch(url);
        const buf = await r.arrayBuffer();
        buffersRef.current[key] = await ctxRef.current!.decodeAudioData(buf);
      };

      await Promise.all([
        load("mouseDown", "/memory-palace/audio/mouse/mouse_down.mp3"),
        load("mouseUp", "/memory-palace/audio/mouse/mouse_up.mp3"),
        load("startup", "/memory-palace/audio/startup.mp3"),
      ]);
    };

    const onFirst = () => {
      init();
      window.removeEventListener("pointerdown", onFirst);
    };
    window.addEventListener("pointerdown", onFirst, { once: true });
    return () => window.removeEventListener("pointerdown", onFirst);
  }, []);

  const play = (key: string, volume = 0.4) => {
    const ctx = ctxRef.current;
    const buf = buffersRef.current[key];
    if (!ctx || !buf) return;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    gain.gain.value = volume;
    src.connect(gain).connect(ctx.destination);
    src.start();
  };

  return play;
}

// ============================================================================
//  Camera rig. Default is a "desk view" 3/4 ish angle. Click on the monitor
//  hitbox → tween to "monitor view" centered on screen. Mouse parallax drifts
//  the camera around the keyframe (±15cm of lateral float).
// ============================================================================

const VIEWS = {
  default: {
    pos: new THREE.Vector3(0, 0.8, 2.4),
    look: new THREE.Vector3(0, 0.05, -0.15),
    fov: 42,
  },
  monitor: {
    pos: new THREE.Vector3(0, 0.22, 0.55),
    look: new THREE.Vector3(0, 0.22, 0.0),
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
    const px = mouse.x * 0.25;
    const py = mouse.y * 0.12;

    const desired = target.current
      .clone()
      .add(new THREE.Vector3(px, py, 0));

    camera.position.lerp(desired, 0.05);
    currentLook.current.lerp(lookTarget.current, 0.05);
    camera.lookAt(currentLook.current);
  });

  return null;
}

// ============================================================================
//  Invisible hitbox in front of the monitor — picks up clicks and dispatches
//  the camera transition. Sits at the screen plane.
// ============================================================================

function MonitorHitbox({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "default";
    return () => {
      document.body.style.cursor = "default";
    };
  }, [hovered]);

  return (
    <mesh
      position={SCREEN.position}
      rotation={SCREEN.rotation}
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
      <planeGeometry args={[SCREEN.width * 1.05, SCREEN.height * 1.05]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  );
}

// ============================================================================
//  Scene root
// ============================================================================

export function Scene() {
  const [view, setView] = useState<keyof typeof VIEWS>("default");
  const play = useDeskAudio();

  // r3f under Next 16 + Turbopack occasionally misses its first paint; nudge
  // the ResizeObserver to kick the frameloop.
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

  const handleMonitorClick = () => {
    play("mouseDown", 0.35);
    setTimeout(() => play("mouseUp", 0.35), 80);
    setView((v) => (v === "monitor" ? "default" : "monitor"));
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#1a1208",
      }}
    >
      <Canvas
        frameloop="always"
        camera={{ position: [0, 0.8, 2.4], fov: 42 }}
        gl={{
          antialias: true,
          alpha: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.05,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        dpr={[1, 1.5]}
        onCreated={({ gl, scene }) => {
          gl.setClearColor("#0a0805", 1);
          scene.background = new THREE.Color("#0a0805");
        }}
      >
        <color attach="background" args={["#0a0805"]} />

        {/* Baked scene — no lights; shading + GI + AO are painted into the JPGs.
            Wrap in Suspense so the GLB/JPG loads don't crash on first render. */}
        <Suspense fallback={null}>
          <BakedGLB
            url="/memory-palace/models/environment.glb"
            textureUrl="/memory-palace/models/baked_environment.jpg"
            scale={MODEL_SCALE}
          />
          <BakedGLB
            url="/memory-palace/models/computer_setup.glb"
            textureUrl="/memory-palace/models/baked_computer.jpg"
            scale={MODEL_SCALE}
          />
          <BakedGLB
            url="/memory-palace/models/decor.glb"
            textureUrl="/memory-palace/models/baked_decor.jpg"
            scale={MODEL_SCALE}
          />

          <ScreenLayers visible={false} />
        </Suspense>
        <MonitorHitbox onClick={handleMonitorClick} />

        <CameraRig view={view} />
      </Canvas>

      <HUD
        viewMode={view}
        onBack={() => setView("default")}
        onEnter={handleMonitorClick}
      />

      {view === "monitor" ? (
        <MonitorOverlay onClose={() => setView("default")} />
      ) : null}
    </div>
  );
}
