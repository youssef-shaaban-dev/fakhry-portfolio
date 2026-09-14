import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ConfigState {
  accentColor: string;
  setAccentColor: (color: string) => void;
}

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      accentColor: '#3b82f6', // default to blue
      setAccentColor: (color: string) => {
        set({ accentColor: color });
        // We will inject the color directly into document.documentElement in a provider/effect
      },
    }),
    {
      name: 'portfolio-config-storage',
    }
  )
);
