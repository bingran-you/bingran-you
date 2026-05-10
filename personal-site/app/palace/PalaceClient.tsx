"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import type { PalaceData } from "./palace-data";
import styles from "./styles.module.css";
import { Lighting } from "./scene/Lighting";
import { Room } from "./scene/Room";
import { Desk } from "./scene/Desk";
import { Computer } from "./scene/Computer";
import { Decor } from "./scene/Decor";
import { CameraRig } from "./scene/CameraRig";
import { IntroOverlay } from "./ui/IntroOverlay";
import { HUD } from "./ui/HUD";
import { BingranOS } from "./ui/BingranOS";

export type PalaceMode = "intro" | "idle" | "monitor";

export default function PalaceClient({ data }: { data: PalaceData }) {
  const [mode, setMode] = useState<PalaceMode>("intro");
  const mouseRef = useRef<[number, number]>([0, 0]);

  const enterRoom = useCallback(() => setMode("idle"), []);
  const enterMonitor = useCallback(() => setMode("monitor"), []);
  const exitMonitor = useCallback(() => setMode("idle"), []);

  // Auto-advance intro to idle after 5s if the user doesn't click "Enter"
  useEffect(() => {
    if (mode !== "intro") return;
    const t = setTimeout(() => setMode("idle"), 5000);
    return () => clearTimeout(t);
  }, [mode]);

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
          shadows
          dpr={[1, 1.8]}
          gl={{ antialias: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <color attach="background" args={["#15110b"]} />
            <fog attach="fog" args={["#15110b", 6, 18]} />
            <Lighting />
            <Room />
            <Desk />
            <Computer
              onScreenClick={enterMonitor}
              screenActive={mode === "monitor"}
            />
            <Decor />
            <CameraRig mode={mode} mouseRef={mouseRef} />
          </Suspense>
        </Canvas>
      </div>

      <IntroOverlay visible={mode === "intro"} onEnter={enterRoom} />
      <HUD mode={mode} onExitMonitor={exitMonitor} />
      <BingranOS data={data} visible={mode === "monitor"} onClose={exitMonitor} />
    </>
  );
}
