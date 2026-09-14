import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FxLevel = 'Low' | 'Mid' | 'High';
type HoverSfx = 'On' | 'Off';

interface ConfigState {
  accentColor: string;
  setAccentColor: (color: string) => void;
  fxLevel: FxLevel;
  setFxLevel: (level: FxLevel) => void;
  hoverSfx: HoverSfx;
  setHoverSfx: (sfx: HoverSfx) => void;
  resetToDefault: () => void;
}

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      accentColor: '#3b82f6', // default to blue
      setAccentColor: (color: string) => set({ accentColor: color }),
      fxLevel: 'Mid',
      setFxLevel: (level: FxLevel) => set({ fxLevel: level }),
      hoverSfx: 'Off',
      setHoverSfx: (sfx: HoverSfx) => set({ hoverSfx: sfx }),
      resetToDefault: () => set({
        accentColor: '#3b82f6',
        fxLevel: 'Mid',
        hoverSfx: 'Off'
      }),
    }),
    {
      name: 'portfolio-config-storage',
    }
  )
);
