'use client';

import React, { useEffect, useState } from "react"
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ModelViewer: React.FC = () => {
  return (
    <div className=" h-[400px]">
        <Canvas style={{position: 'absolute', top: '0'}}>
        <EthereumModel />
      </Canvas>
    </div>
  );
};

export const EthereumModel: React.FC = () => {
  const Keyboard = useLoader(GLTFLoader, 'homepage/KeyboardMod.glb');
  const Monitor = useLoader(GLTFLoader, 'homepage/Monitor.glb');
  const groupRef = useRef<Mesh>(null);

  useFrame((state) => {
    const { x, y } = state.mouse; // Correctly access x and y directly
    if (groupRef.current) {

      const rotationY = Math.atan2(x, 1); // Assuming the mouse is always "in front" of the model on the Z-axis
      const rotationX = -Math.atan2(y, 1); // Inverting y to match the screen's vertical orientation

      groupRef.current.rotation.y = rotationY / 3 + Math.PI;
      groupRef.current.rotation.x = rotationX / 3;
    }
  });


  // useFrame((_state, delta) => {
  //     if (modelRef.current) {
  //         modelRef.current.rotation.y += delta / 2;
  //     }
  // });

  return (
    <>
      <pointLight position={[-10, -10, -10]} color="#f80288" intensity={5000} />
      <pointLight position={[10, 10, 10]} color="#ca81fd" intensity={2500} />

      <group ref={groupRef}>
        <primitive object={Monitor.scene} position={[0, 0, 0]} /> {/* Adjust 2 to the appropriate height */}
        <primitive object={Keyboard.scene} position={[0, -1.5, -1]} />
      </group>


    </>
  );
};

export default ModelViewer
