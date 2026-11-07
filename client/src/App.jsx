import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { useThemeStore } from "./store/useThemeStore";
import ThemeToggle from "./components/theme/ThemeToggle";
import TopNav from "./components/nav/TopNav";
import BottomNav from "./components/nav/BottomNav";
import PlazaScene from "./components/experience/plaza/PlazaScene";

function App() {
  const initTheme = useThemeStore((state) => state.initTheme);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <>
      <div className="min-h-screen w-full transition-colors relative">
        <TopNav />
        {/* 3D Canvas Layer */}
        <div className="absolute inset-0 z-0">
          <Canvas shadows camera={{ position: [10, 12, 10], fov: 35 }}>
            <PlazaScene />
            {/* OrbitControls lets you pan and rotate the camera with your mouse/finger */}
            <OrbitControls makeDefault />
          </Canvas>
        </div>
        <BottomNav />
      </div>
    </>
  );
}

export default App;
