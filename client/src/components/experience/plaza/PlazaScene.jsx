export default function PlazaScene() {
  return (
    <>
      {/* 1. Basic Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.2} 
        castShadow 
      />

      {/* 2. The Ground Plane (Rotated to lay flat) */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.5, 0]} 
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#B768A2" />
      </mesh>
    </>
  );
}