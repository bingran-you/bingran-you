"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

type BakedGLBProps = {
  url: string;
  textureUrl: string;
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  onLoad?: (root: THREE.Group) => void;
};

// BakedGLB — port of Henry Heffernan's BakedModel pattern (MIT). Loads a GLB,
// loads its companion baked JPG, then walks every mesh in the scene graph and
// swaps its material for a single shared MeshBasicMaterial keyed to the baked
// texture. The result needs no lights: shading, GI, AO, and shadows are all
// painted into the texture by Blender's Cycles bake. This is why Henry's
// scene looks photorealistic but runs at 60 FPS on a phone.
//
// Source: https://github.com/henryjeff/portfolio-website
//   src/Application/Utils/BakedModel.ts
export function BakedGLB({
  url,
  textureUrl,
  scale,
  position,
  rotation,
  onLoad,
}: BakedGLBProps) {
  const gltf = useGLTF(url);
  const texture = useTexture(textureUrl);

  const material = useMemo(() => {
    // GLB UVs assume flipY=false; baked colour data is sRGB.
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    return new THREE.MeshBasicMaterial({ map: texture });
  }, [texture]);

  useEffect(() => {
    gltf.scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.material = material;
        mesh.castShadow = false;
        mesh.receiveShadow = false;
      }
    });
    onLoad?.(gltf.scene);
  }, [gltf.scene, material, onLoad]);

  return (
    <primitive
      object={gltf.scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

// Preload all three baked models so the first paint inside the Canvas has
// them ready in the GLTFLoader cache. Call from the page component.
export function preloadBakedAssets() {
  useGLTF.preload("/memory-palace/models/environment.glb");
  useGLTF.preload("/memory-palace/models/computer_setup.glb");
  useGLTF.preload("/memory-palace/models/decor.glb");
}
