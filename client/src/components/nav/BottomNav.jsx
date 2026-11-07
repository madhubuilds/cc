import { useState } from "react";
import { Home, Map, MessageSquare, Calendar } from "lucide-react";

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "explore", icon: Map, label: "Explore" },
    { id: "chat", icon: MessageSquare, label: "Chat" },
    { id: "events", icon: Calendar, label: "Events" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none pb-6">
      {/* max-w-md keeps it perfectly sized for mobile phones even if opened on a desktop */}
      <div className="mx-auto max-w-md pointer-events-auto flex items-center justify-around bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg rounded-2xl px-2 py-3 transition-colors">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 p-2 min-w-[64px] rounded-xl transition-all ${
                isActive
                  ? "text-teal-600 dark:text-cyan-400 bg-teal-50 dark:bg-slate-700/50"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              <Icon
                size={22}
                stroke="currentColor"
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="text-[10px] font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
