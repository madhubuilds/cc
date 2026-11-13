import { create } from 'zustand';

export const useAppStore = create((set) => ({
  activeProfile: null, // Holds the data of the user or kiosk you clicked on
  isModalOpen: false,

  openProfile: (userData) => set({ activeProfile: userData, isModalOpen: true }),
  closeProfile: () => set({ activeProfile: null, isModalOpen: false }),
}));