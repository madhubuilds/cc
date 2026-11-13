import { useSpring, animated } from '@react-spring/three';

export default function LowPolyBlockyBanyan({ position = [0, 0, 0], baseScale = 1 }) {
  // Slightly heavier and slower spring physics to make the large tree feel massive
  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: baseScale },
    config: { mass: 1.5, tension: 200, friction: 20 }
  });

  return (
    <animated.group position={position} scale={scale}>
      {/* Thick Main Trunk */}
      <mesh position={[0, 0.8, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.25, 0.4, 1.6, 6]} />
        <meshStandardMaterial color="#3E2723" flatShading />
      </mesh>

      {/* Main Center Canopy (Using boxes for the blocky look) */}
      <mesh position={[0, 1.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 1.2, 1.8]} />
        <meshStandardMaterial color="#0F766E" flatShading />
      </mesh>

      {/* Left Canopy Extension */}
      <mesh position={[-0.8, 1.6, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 1.0, 1.2]} />
        <meshStandardMaterial color="#0D9488" flatShading />
      </mesh>

      {/* Right Canopy Extension */}
      <mesh position={[0.9, 1.5, -0.4]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 0.9, 1.4]} />
        <meshStandardMaterial color="#14B8A6" flatShading />
      </mesh>

      {/* Left Hanging Root */}
      <mesh position={[-0.8, 0.8, 0.2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.04, 0.04, 1.2, 4]} />
        <meshStandardMaterial color="#4E342E" flatShading />
      </mesh>
      
      {/* Right Hanging Root */}
      <mesh position={[0.9, 0.7, -0.4]} castShadow receiveShadow>
        <cylinderGeometry args={[0.03, 0.03, 1.0, 4]} />
        <meshStandardMaterial color="#4E342E" flatShading />
      </mesh>
    </animated.group>
  );
}