import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}