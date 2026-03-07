import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function ModelViewer() {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}

export default ModelViewer;


{/*
import React from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"

function Model() {
  const obj = useLoader(OBJLoader, "3d_lawyer.obj")

  return <primitive object={obj} scale={1} />
}

export default function ModelViewer() {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      <Model />

      <OrbitControls />
    </Canvas>
  )
} */}