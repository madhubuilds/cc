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
          <Canvas shadows camera={{ position: [8, 10, 8], fov: 40 }}>
            <PlazaScene />
            {/* OrbitControls lets you pan and rotate the camera with your mouse/finger */}
            <OrbitControls
              makeDefault
              minPolarAngle={Math.PI / 4} // Prevents camera from going under the floor
              maxPolarAngle={Math.PI / 2.2} // Prevents camera from going completely flat
              maxDistance={15} // Prevents zooming out too far
              minDistance={5} // Prevents zooming in too close
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
