import { useSpring, animated } from "@react-spring/three";

export default function LowPolyPineTree({
  position = [0, 0, 0],
  baseScale = 1,
}) {
  // Spring animation for the "inventory pop" effect
  // It starts at size 0 and springs up to the baseScale with a slight bounce
  const { scale } = useSpring({
    from: { scale: 0, baseScale },
    to: { scale: baseScale },
    config: { mass: 1.2, tension: 250, friction: 18 },
  });
  return (
    <animated.group position={position} scale={scale}>
      {/* Trunk (6-sided cylinder for low-poly look) */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.25, 1, 6]} />
        <meshStandardMaterial color="#4A3728" flatShading />
      </mesh>
      {/* Bottom Leaf Layer */}
      <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
        <coneGeometry args={[1.2, 1.5, 6]} />
        <meshStandardMaterial color="#2DD4BF" flatShading />
      </mesh>

      {/* Middle Leaf Layer */}
      <mesh position={[0, 1.9, 0]} castShadow receiveShadow>
        <coneGeometry args={[0.9, 1.2, 6]} />
        <meshStandardMaterial color="#2DD4BF" flatShading />
      </mesh>

      {/* Top Leaf Layer */}
      <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
        <coneGeometry args={[0.6, 1, 6]} />
        <meshStandardMaterial color="#2DD4BF" flatShading />
      </mesh>
    </animated.group>
  );
}
