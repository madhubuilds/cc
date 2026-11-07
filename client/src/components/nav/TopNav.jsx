import { Search, User } from "lucide-react";
import ThemeToggle from "../theme/ThemeToggle";

export default function TopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="mx-auto max-w-md pointer-events-auto flex items-center justify-between bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm rounded-2xl px-4 py-2 transition-colors">
        {/* Search Section */}
        <div className="flex flex-1 items-center gap-2 text-slate-500 dark:text-slate-400">
          <Search size={18} stroke="currentColor" />
          <input
            type="text"
            placeholder="Search events, places..."
            className="w-full bg-transparent outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm font-medium"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 ml-4 border-l border-slate-200 dark:border-slate-700 pl-3">
          <ThemeToggle />

          {/* Profile Avatar Button */}
          <button className="p-2 bg-teal-400 dark:bg-cyan-500 text-white rounded-full hover:opacity-90 transition-opacity">
            <User size={18} stroke="currentColor" />
          </button>
        </div>
      </div>
    </nav>
  );
}
