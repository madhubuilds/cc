import { Environment, ContactShadows } from "@react-three/drei";
import EventKiosk from "../event/EventKiosk";
import LowPolyBiolumBloom from "../trees/LowPolyBiolumBloom";
import LowPolyBlockyBanyan from "../trees/LowPolyBlockyBanyan";
import LowPolyPineTree from "../trees/LowPolyPineTree";
import { useThemeStore } from "../../../store/useThemeStore";

export default function PlazaScene() {
  // Pull the dark mode state directly from your store
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  // Assign the exact hex codes we used in your CSS file earlier
  const floorColor = isDarkMode ? "#0F172A" : "#F0F4F8";
  return (
    <>
      <Environment preset="city" />
      {/* 1. Basic Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 15, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        // Tuning the shadow camera constraints makes the shadows much sharper
        shadow-camera-near={1}
        shadow-camera-far={30}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        // Bias removes "shadow acne" (those ugly black stripes on objects)
        shadow-bias={-0.0005}
      />

      <ContactShadows
        position={[0, -0.49, 0]}
        opacity={0.5}
        scale={25}
        blur={2.5}
        far={2}
        color="#0f172a"
      />
      {/* The Central Interactive Kiosk */}
      <EventKiosk position={[0, 0, 0]} />
      <LowPolyBlockyBanyan position={[-5, 0, 4]} baseScale={1.3} />
      <LowPolyBlockyBanyan position={[2, 0, -6]} baseScale={1.5} />

      <LowPolyBiolumBloom position={[4, 0, -2]} baseScale={1.1} />
      <LowPolyBiolumBloom position={[5, 0, 2]} baseScale={0.7} />

      <LowPolyPineTree position={[-4, 0, -3]} baseScale={1} />
      <LowPolyPineTree position={[-2, 0, -5]} baseScale={0.8} />
      {/* The Ground Plane */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color={floorColor} />
      </mesh>
    </>
  );
}
