import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, MeshDistortMaterial } from '@react-three/drei';

function BearingModel() {
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const ballsRef = useRef();

  useFrame((state, delta) => {
    // Spin outer and inner rings opposite ways slightly
    if (outerRingRef.current) outerRingRef.current.rotation.z -= delta * 0.5;
    if (innerRingRef.current) innerRingRef.current.rotation.z -= delta * 1.5;
    if (ballsRef.current) ballsRef.current.rotation.z -= delta * 1.0;
  });

  return (
    <group rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      {/* Outer Ring */}
      <mesh ref={outerRingRef} castShadow receiveShadow>
        <torusGeometry args={[2.5, 0.4, 32, 64]} />
        <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Inner Ring */}
      <mesh ref={innerRingRef} castShadow receiveShadow>
        <torusGeometry args={[1.5, 0.3, 32, 64]} />
        <meshStandardMaterial color="#555555" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Accents (Balls) */}
      <group ref={ballsRef}>
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[
            Math.cos((i / 8) * Math.PI * 2) * 2,
            Math.sin((i / 8) * Math.PI * 2) * 2,
            0
          ]}>
            <sphereGeometry args={[0.35, 32, 32]} />
            <meshStandardMaterial color="#FFDE00" metalness={0.7} roughness={0.2} emissive="#443b00" />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 0.3 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} style={{ pointerEvents: 'auto' }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFDE00" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#ffffff" />
        <Environment preset="city" />
        <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
          <BearingModel />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
