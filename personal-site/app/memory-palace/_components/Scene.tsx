"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, useTexture } from "@react-three/drei";
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
  // Screen plane size at MODEL_SCALE=0.15 — covers the CRT face of the Mac
  width: 0.24,
  height: 0.18,
  // Position of the screen plane in world space. The Mac face in the baked
  // computer_setup.glb sits centered around (0, 0.2, 0.25) at scale 0.15.
  position: new THREE.Vector3(0, 0.22, 0.27),
  rotation: new THREE.Euler(0, 0, 0),
};

function ScreenLayers(_: { visible: boolean }) {
  // v2 baked workflow: keep the screen layers minimal during this calibration
  // pass to keep GPU memory pressure low. The CRT iframe (drei <Html transform>)
  // and the smudge/scanline layers are added back in v2.1 once the camera +
  // model placement is locked in.
  return (
    <mesh position={SCREEN.position} rotation={SCREEN.rotation}>
      <planeGeometry args={[SCREEN.width, SCREEN.height]} />
      <meshBasicMaterial color="#0a1518" />
    </mesh>
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
    pos: new THREE.Vector3(0, 0.55, 1.6),
    look: new THREE.Vector3(0, 0.15, 0),
    fov: 36,
  },
  monitor: {
    pos: new THREE.Vector3(0, 0.22, 0.7),
    look: new THREE.Vector3(0, 0.22, 0.27),
    fov: 24,
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
        camera={{ position: [0, 0.55, 1.6], fov: 36 }}
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

          <ScreenLayers visible={view === "monitor"} />
        </Suspense>
        <MonitorHitbox onClick={handleMonitorClick} />

        <CameraRig view={view} />
      </Canvas>

      <HUD
        viewMode={view}
        onBack={() => setView("default")}
        onEnter={handleMonitorClick}
      />
    </div>
  );
}
