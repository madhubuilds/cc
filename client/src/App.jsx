import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { useThemeStore } from "./store/useThemeStore";
import ThemeToggle from "./components/theme/ThemeToggle";
import TopNav from "./components/nav/TopNav";
import BottomNav from "./components/nav/BottomNav";
import PlazaScene from "./components/experience/plaza/PlazaScene";
import UIOverlay from "./components/ui/UIOverlay";

function App() {
  const initTheme = useThemeStore((state) => state.initTheme);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <>
      <div className="min-h-screen w-full transition-colors relative flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <TopNav />
        {/* 3D Canvas Layer */}
        <div className="absolute inset-0 z-0">
          <Canvas
            shadows
            orthographic // Instantly flattens the depth to create the isometric grid look
            camera={{
              position: [10, 10, 10], // This exact XYZ ratio creates the perfect isometric angle
              zoom: 80, // In orthographic mode, FOV is disabled. We use zoom instead to frame it.
            }}
          >
            <PlazaScene />
            {/* OrbitControls lets you pan and rotate the camera with your mouse/finger */}
            <OrbitControls
              makeDefault
              enableDamping
              // We lock the vertical angle so the user can't ruin the isometric illusion
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 4}
              // Allow panning and zooming, but limit how far they can scroll away
              maxZoom={120}
              minZoom={40}
            />
          </Canvas>
        </div>
        <UIOverlay />
        <BottomNav />
      </div>
    </>
  );
}

export default App;
