import { create } from "zustand";

export const useThemeStore = create((set) => ({
  isDarkMode: true,
  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.isDarkMode;
      if (newTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return { isDarkMode: newTheme };
    }),
  initTheme: () => {
    // Run this once on mount to ensure the HTML tag matches the default state
    document.documentElement.classList.add("dark");
  },
}));
