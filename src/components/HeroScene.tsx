"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import "./Hero.css";

/* =========================================================
   MONITOR
========================================================= */

function Monitor() {
  const monitorRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!monitorRef.current) return;

    const time = state.clock.getElapsedTime();

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    /*
     * Very subtle cinematic movement.
     */
    monitorRef.current.rotation.y =
      Math.sin(time * 0.35) * 0.045 +
      mouseX * 0.035;

    monitorRef.current.rotation.x =
      mouseY * 0.025;

    /*
     * Subtle floating.
     */
    monitorRef.current.position.y =
      Math.sin(time * 0.55) * 0.035;
  });

  return (
    <group
      ref={monitorRef}
      position={[0, -0.15, 0]}
    >

      {/* =================================================
          MONITOR BODY
      ================================================= */}

      <mesh
        position={[0, 0.75, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry
          args={[5.1, 3.15, 0.18]}
        />

        <meshStandardMaterial
          color="#171b27"
          metalness={0.8}
          roughness={0.22}
        />
      </mesh>


      {/* =================================================
          OUTER SCREEN FRAME
      ================================================= */}

      <mesh
        position={[0, 0.75, 0.105]}
      >
        <boxGeometry
          args={[4.82, 2.87, 0.035]}
        />

        <meshStandardMaterial
          color="#070a13"
          metalness={0.25}
          roughness={0.3}
        />
      </mesh>


      {/* =================================================
          SCREEN
      ================================================= */}

      <mesh
        position={[0, 0.75, 0.14]}
      >
        <planeGeometry
          args={[4.58, 2.62]}
        />

        <meshBasicMaterial
          color="#071337"
        />
      </mesh>


      {/* =================================================
          SCREEN BLUE GLOW
      ================================================= */}

      <mesh
        position={[0, 0.75, 0.15]}
      >
        <planeGeometry
          args={[4.45, 2.5]}
        />

        <meshBasicMaterial
          color="#09246e"
          transparent
          opacity={0.32}
        />
      </mesh>


      {/* =================================================
          PORTFOLIO HEADER
      ================================================= */}

      <mesh
        position={[
          -1.65,
          1.72,
          0.18,
        ]}
      >
        <boxGeometry
          args={[
            0.16,
            0.06,
            0.02,
          ]}
        />

        <meshBasicMaterial
          color="#ffffff"
        />
      </mesh>


      {/* Navigation */}

      <ScreenLine
        position={[
          1.15,
          1.72,
          0.18,
        ]}
        width={0.38}
      />

      <ScreenLine
        position={[
          1.65,
          1.72,
          0.18,
        ]}
        width={0.38}
      />

      <ScreenLine
        position={[
          2.05,
          1.72,
          0.18,
        ]}
        width={0.38}
      />


      {/* =================================================
          SCREEN TITLE
      ================================================= */}

      <ScreenLine
        position={[
          -1.35,
          1.05,
          0.18,
        ]}
        width={1.25}
        height={0.15}
        color="#f5f7ff"
      />

      <ScreenLine
        position={[
          -1.05,
          0.78,
          0.18,
        ]}
        width={0.8}
        height={0.08}
        color="#7088ff"
      />


      {/* =================================================
          SCREEN PROJECT CARDS
      ================================================= */}

      <ScreenCard
        position={[
          -1.45,
          0.05,
          0.18,
        ]}
      />

      <ScreenCard
        position={[
          0,
          0.05,
          0.18,
        ]}
      />

      <ScreenCard
        position={[
          1.45,
          0.05,
          0.18,
        ]}
      />


      {/* =================================================
          SCREEN BOTTOM LINE
      ================================================= */}

      <ScreenLine
        position={[
          -1.3,
          -0.78,
          0.18,
        ]}
        width={1.5}
        height={0.045}
        color="#4f6dff"
      />

      <ScreenLine
        position={[
          0.75,
          -0.78,
          0.18,
        ]}
        width={0.75}
        height={0.045}
        color="#2e3d82"
      />


      {/* =================================================
          SCREEN GLOW SPOT
      ================================================= */}

      <mesh
        position={[
          1.25,
          0.55,
          0.2,
        ]}
      >
        <circleGeometry
          args={[0.32, 32]}
        />

        <meshBasicMaterial
          color="#617cff"
          transparent
          opacity={0.28}
        />
      </mesh>


      {/* =================================================
          MONITOR NECK
      ================================================= */}

      <mesh
        position={[
          0,
          -1.05,
          0,
        ]}
        castShadow
      >
        <boxGeometry
          args={[0.48, 0.95, 0.28]}
        />

        <meshStandardMaterial
          color="#3c4250"
          metalness={0.65}
          roughness={0.28}
        />
      </mesh>


      {/* =================================================
          MONITOR HINGE
      ================================================= */}

      <mesh
        position={[
          0,
          -0.55,
          0,
        ]}
        castShadow
      >
        <boxGeometry
          args={[0.9, 0.5, 0.42]}
        />

        <meshStandardMaterial
          color="#4b5260"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>


      {/* =================================================
          MONITOR BASE
      ================================================= */}

      <mesh
        position={[
          0,
          -1.58,
          0,
        ]}
        castShadow
      >
        <boxGeometry
          args={[2.25, 0.16, 0.85]}
        />

        <meshStandardMaterial
          color="#252a35"
          metalness={0.82}
          roughness={0.2}
        />
      </mesh>


      {/* Base top highlight */}

      <mesh
        position={[
          0,
          -1.49,
          0,
        ]}
      >
        <boxGeometry
          args={[1.9, 0.035, 0.62]}
        />

        <meshStandardMaterial
          color="#596172"
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

    </group>
  );
}


/* =========================================================
   SCREEN LINE
========================================================= */

function ScreenLine({
  position,
  width,
  height = 0.07,
  color = "#667cff",
}: {
  position: [number, number, number];
  width: number;
  height?: number;
  color?: string;
}) {
  return (
    <mesh position={position}>
      <boxGeometry
        args={[
          width,
          height,
          0.025,
        ]}
      />

      <meshBasicMaterial
        color={color}
      />
    </mesh>
  );
}


/* =========================================================
   SCREEN CARD
========================================================= */

function ScreenCard({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>

      <mesh>
        <boxGeometry
          args={[
            1.05,
            0.7,
            0.025,
          ]}
        />

        <meshBasicMaterial
          color="#101f5c"
        />
      </mesh>

      <mesh
        position={[
          0,
          0.17,
          0.02,
        ]}
      >
        <boxGeometry
          args={[
            0.55,
            0.07,
            0.02,
          ]}
        />

        <meshBasicMaterial
          color="#aeb9ff"
        />
      </mesh>

      <mesh
        position={[
          0,
          -0.03,
          0.02,
        ]}
      >
        <boxGeometry
          args={[
            0.7,
            0.045,
            0.02,
          ]}
        />

        <meshBasicMaterial
          color="#566dce"
        />
      </mesh>

      <mesh
        position={[
          0,
          -0.17,
          0.02,
        ]}
      >
        <boxGeometry
          args={[
            0.4,
            0.04,
            0.02,
          ]}
        />

        <meshBasicMaterial
          color="#344995"
        />
      </mesh>

    </group>
  );
}


/* =========================================================
   LIGHTING
========================================================= */

function Lighting() {
  return (
    <>
      <ambientLight
        intensity={0.65}
      />

      <directionalLight
        position={[
          4,
          6,
          6,
        ]}
        intensity={3.5}
        color="#ffffff"
      />

      <directionalLight
        position={[
          -5,
          2,
          4,
        ]}
        intensity={2.5}
        color="#526cff"
      />

      <pointLight
        position={[
          3,
          -1,
          3,
        ]}
        intensity={4}
        distance={10}
        color="#765cff"
      />

      <pointLight
        position={[
          -3,
          2,
          4,
        ]}
        intensity={3}
        distance={10}
        color="#496bff"
      />
    </>
  );
}


/* =========================================================
   SCENE
========================================================= */

function Scene() {
  return (
    <>
      <Lighting />

      <Monitor />
    </>
  );
}


/* =========================================================
   HERO SCENE
========================================================= */

export default function HeroScene() {
  return (
    <div className="hero-three">
      <Canvas
        camera={{
          position: [
            0,
            0,
            8.5,
          ],
          fov: 38,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference:
            "high-performance",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}