"use client";

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import type { PalaceData } from "./palace-data";
import styles from "./styles.module.css";
import { BakedScene } from "./scene/BakedScene";
import { CameraRig } from "./scene/CameraRig";
import { IntroOverlay } from "./ui/IntroOverlay";
import { HUD } from "./ui/HUD";
import { BingranOS } from "./ui/BingranOS";

export type PalaceMode = "intro" | "idle" | "monitor";

const HASH_TO_TAB: Record<string, string> = {
  "#about": "about",
  "#projects": "projects",
  "#papers": "papers",
  "#blog": "blog",
  "#posts": "posts",
  "#skills": "skills",
  "#tetris": "tetris",
  "#snake": "snake",
  "#contact": "contact",
};

export default function PalaceClient({ data }: { data: PalaceData }) {
  // Honour a hash like /palace#tetris by jumping straight to the OS with that tab.
  const initialTab = useMemo(() => {
    if (typeof window === "undefined") return null;
    return HASH_TO_TAB[window.location.hash] ?? null;
  }, []);
  const [mode, setMode] = useState<PalaceMode>(initialTab ? "monitor" : "intro");
  const [osTab, setOsTab] = useState<string | null>(initialTab);
  // OS overlay only appears AFTER the dolly-in completes — keeps the
  // entrance feeling like Henry's where you actually arrive at the screen
  // before any UI surfaces.
  const [osReady, setOsReady] = useState(false);
  const mouseRef = useRef<[number, number]>([0, 0]);

  const enterRoom = useCallback(() => setMode("idle"), []);
  const enterMonitor = useCallback(() => {
    setOsTab(null);
    setMode("monitor");
  }, []);
  const exitMonitor = useCallback(() => {
    setMode("idle");
    setOsTab(null);
    if (typeof window !== "undefined" && window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  // Auto-advance intro to idle after 5s if the user doesn't click "Enter"
  useEffect(() => {
    if (mode !== "intro") return;
    const t = setTimeout(() => setMode("idle"), 5000);
    return () => clearTimeout(t);
  }, [mode]);

  // Hold the OS overlay back until the camera has nearly arrived at the
  // monitor pose (camera dolly-in is 1.15s; we wait 0.95s so the OS fades
  // up over the final 200ms of camera travel + its own 0.45s opacity
  // transition). On exit, drop it immediately so the panel fades out
  // while the camera is still close to the screen.
  useEffect(() => {
    if (mode === "monitor") {
      const t = setTimeout(() => setOsReady(true), 950);
      return () => clearTimeout(t);
    }
    setOsReady(false);
  }, [mode]);

  // React to hash changes (allows linking between tabs without reload)
  useEffect(() => {
    const sync = () => {
      const tab = HASH_TO_TAB[window.location.hash];
      if (tab) {
        setOsTab(tab);
        setMode("monitor");
      }
    };
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  // ESC exits monitor mode
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mode === "monitor") exitMonitor();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, exitMonitor]);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseRef.current = [x, y];
  }, []);

  return (
    <>
      <div
        className={`palace-canvas ${styles.canvasWrap}`}
        onPointerMove={onPointerMove}
      >
        <Canvas
          dpr={[1, 1.8]}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: "high-performance",
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.05,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
          onCreated={({ gl, scene }) => {
            gl.setClearColor("#0a0805", 1);
            scene.background = new THREE.Color("#0a0805");
          }}
        >
          <color attach="background" args={["#0a0805"]} />
          <Suspense fallback={null}>
            <BakedScene onScreenClick={enterMonitor} />
          </Suspense>
          <CameraRig mode={mode} mouseRef={mouseRef} />
        </Canvas>
      </div>

      <IntroOverlay visible={mode === "intro"} onEnter={enterRoom} />
      <HUD mode={mode} onExitMonitor={exitMonitor} />
      <BingranOS
        data={data}
        visible={mode === "monitor" && osReady}
        initialTab={osTab}
        onClose={exitMonitor}
      />
    </>
  );
}
