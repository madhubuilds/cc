import { useSpring, animated } from '@react-spring/three';

export default function LowPolyBiolumBloom({ position = [0, 0, 0], baseScale = 1 }) {
  // Same spring animation so all trees share the bouncy "inventory pop" feel
  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: baseScale },
    config: { mass: 1.2, tension: 250, friction: 18 }
  });

  return (
    <animated.group position={position} scale={scale}>
      {/* Trunk (5-sided cylinder for a slightly more twisted, alien look) */}
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 0.15, 1.2, 5]} />
        {/* Dark slate grey for the trunk contrasts with the glow */}
        <meshStandardMaterial color="#2D3748" flatShading /> 
      </mesh>

      {/* Main Glowing Bloom (Icosahedron with detail set to 0 for max low-poly) */}
      <mesh position={[0, 1.4, 0]} castShadow>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial 
          color="#B768A2" 
          emissive="#B768A2" 
          emissiveIntensity={0.6} 
          flatShading 
        />
      </mesh>

      {/* Left Side Bloom */}
      <mesh position={[-0.5, 1.1, 0.2]} castShadow>
        <icosahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial 
          color="#B768A2" 
          emissive="#B768A2" 
          emissiveIntensity={0.4} 
          flatShading 
        />
      </mesh>

      {/* Right Side Bloom */}
      <mesh position={[0.4, 1.2, -0.3]} castShadow>
        <icosahedronGeometry args={[0.45, 0]} />
        <meshStandardMaterial 
          color="#B768A2" 
          emissive="#B768A2" 
          emissiveIntensity={0.5} 
          flatShading 
        />
      </mesh>
    </animated.group>
  );
}