import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

const Shapes = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { scrollYProgress } = useScroll();

  useFrame(() => {
    if (groupRef.current) {
      // scrollYProgress is 0 to 1 over the whole page
      const scroll = scrollYProgress.get();
      // Rotate the whole group based on scroll
      groupRef.current.rotation.y = scroll * Math.PI * 2;
      groupRef.current.rotation.x = scroll * Math.PI;
      // Move up slightly as we scroll down
      groupRef.current.position.y = scroll * 2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Single Large Torus Knot */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[3, 0.8, 150, 40]} />
          <meshStandardMaterial color="#6366f1" wireframe transparent opacity={0.6} />
        </mesh>
      </Float>
    </group>
  );
};

export function Background3D() {
  return (
    <div className="w-full h-full opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Shapes />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
