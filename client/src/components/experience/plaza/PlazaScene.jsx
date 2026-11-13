import EventKiosk from "../event/EventKiosk";
import LowPolyBiolumBloom from "../trees/LowPolyBiolumBloom";
import LowPolyBlockyBanyan from "../trees/LowPolyBlockyBanyan";
import LowPolyPineTree from "../trees/LowPolyPineTree";

export default function PlazaScene() {
  return (
    <>
      {/* 1. Basic Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 15, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
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
        position={[0, -0, 0]}
        receiveShadow
      >
        <planeGeometry args={[40, 40]} />
        {/* Using standard material so it reacts to the BiolumBloom glow */}
        <meshStandardMaterial color="var(--bg-canvas)" />
      </mesh>
    </>
  );
}
