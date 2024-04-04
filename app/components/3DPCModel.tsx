'use client';

import React, { useEffect, useState } from "react"
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { log } from "console";


export interface MousePosition {
  x: number
  y: number
}

export const ModelViewer: React.FC<{ mousePosition: MousePosition}> = ( {mousePosition} ) => {
  return (
    <div className=" h-[400px]">
        <Canvas style={{position: 'absolute', top: '0'}}>
        <EthereumModel mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export const EthereumModel: React.FC<{mousePosition: MousePosition}> = ( {mousePosition}  ) => {
  const Keyboard = useLoader(GLTFLoader, 'homepage/KeyboardMod.glb');
  const Monitor = useLoader(GLTFLoader, 'homepage/Monitor.glb');
  const groupRef = useRef<Group>(null);

  useFrame((state ) => {
    if (groupRef.current && mousePosition) {
      const x = (mousePosition.x / state.size.width) * 2 - 3;
      const y = -(mousePosition.y / state.size.height) * 2 + 1;

      const rotationY = Math.atan2(x, 1); // Assuming the mouse is always "in front" of the model on the Z-axis
      const rotationX = -Math.atan2(y, 1); // Inverting y to match the screen's vertical orientation

      groupRef.current.rotation.y = rotationY / 3 + Math.PI;
      groupRef.current.rotation.x = rotationX / 3;
    }
  });

  return (
    <>
      <pointLight position={[-10, -10, -10]} color="#f80288" intensity={5000} />
      <pointLight position={[10, 10, 10]} color="#ca81fd" intensity={2500} />

      {/* eslint-disable-next-line */}
      <group ref={groupRef}>
        <primitive object={Monitor.scene} position={[0, 0, 0]} /> {/* Adjust 2 to the appropriate height */}
        <primitive object={Keyboard.scene} position={[0, -1.5, -1]} />
      </group>


    </>
  );
};

export default ModelViewer
