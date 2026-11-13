import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { useAppStore } from '../../../store/useAppStore';

export default function EventKiosk({ position = [0, 0, 0] }) {
  const openProfile = useAppStore((state) => state.openProfile);
  const [hovered, setHovered] = useState(false);

  // This spring handles both the initial load pop-in AND a slight scaling up when hovered
  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: hovered ? 1.1 : 1 },
    config: { mass: 1.2, tension: 250, friction: 18 }
  });

  // Changes the browser cursor to a pointer so users know this 3D object is clickable
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => { document.body.style.cursor = 'auto'; };
  }, [hovered]);

  return (
    <animated.group 
      position={position} 
      scale={scale}
      onClick={(e) => {
        e.stopPropagation(); // Prevents the click from passing through to the floor
        // We reuse the existing Zustand modal logic to show the local event data
        openProfile({ 
          name: 'What\'s Today in Hyderabad?', 
          status: '🎸 Indie Music at Secunderabad Club \n 🍔 20% off Sri Vindhu (Code: PLAZA20)' 
        });
      }}
      onPointerOver={(e) => { 
        e.stopPropagation(); 
        setHovered(true); 
      }}
      onPointerOut={() => setHovered(false)}
    >
      {/* Heavy Base (6-sided cylinder for low-poly look) */}
      <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.8, 0.5, 6]} />
        <meshStandardMaterial color="#334155" flatShading />
      </mesh>

      {/* Floating Glowing Core (Using a chunky Octahedron as the "Screen") */}
      {/* We animate the emissive intensity so it glows brighter when hovered */}
      <mesh position={[0, 1.3, 0]} castShadow>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial 
          color="#2DD4BF" 
          emissive="#2DD4BF" 
          emissiveIntensity={hovered ? 0.9 : 0.4} 
          flatShading 
        />
      </mesh>
    </animated.group>
  );
}