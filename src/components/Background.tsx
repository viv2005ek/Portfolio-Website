import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f7ff"
        size={0.5}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

function GridLines() {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {Array.from({ length: 20 }, (_, i) => (
        <React.Fragment key={i}>
          <mesh position={[i * 2 - 20, 0, 0]}>
            <planeGeometry args={[0.02, 40]} />
            <meshBasicMaterial color="#00f7ff" transparent opacity={0.1} />
          </mesh>
          <mesh position={[0, 0, i * 2 - 20]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[0.02, 40]} />
            <meshBasicMaterial color="#ff00f7" transparent opacity={0.1} />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a12] via-[#0f0f1a] to-[#1a0a1a]" />
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} color="#00f7ff" intensity={0.5} />
        <pointLight position={[-10, -10, -10]} color="#ff00f7" intensity={0.3} />
        <ParticleField />
        <GridLines />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/80 via-transparent to-[#0a0a12]/60" />
    </div>
  );
}