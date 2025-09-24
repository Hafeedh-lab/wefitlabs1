import { create } from 'zustand';
import type { PersonaType } from '../types';

interface DemoState {
  currentPersona: PersonaType | null;
  currentScreen: number;
  startTime: number;
  screenTimes: Record<number, number>;
  totalInteractions: number;
  isCompleted: boolean;

  setPersona: (persona: PersonaType) => void;
  nextScreen: () => void;
  prevScreen: () => void;
  incrementInteractions: () => void;
  markCompleted: () => void;
  resetDemo: () => void;
  getTimeSpent: () => number;
  logScreenTime: (screen: number) => void;
}

export const useDemoStore = create<DemoState>((set, get) => ({
  currentPersona: null,
  currentScreen: 0,
  startTime: Date.now(),
  screenTimes: {},
  totalInteractions: 0,
  isCompleted: false,

  setPersona: (persona) => {
    const now = Date.now();
    return set({
      currentPersona: persona,
      currentScreen: 1,
      startTime: now,
      screenTimes: { 0: Math.floor((now - get().startTime) / 1000) }
    });
  },

  nextScreen: () => {
    const { currentScreen, screenTimes } = get();
    if (currentScreen < 3) {
      const elapsed = Math.floor((Date.now() - get().startTime) / 1000);
      set({
        currentScreen: currentScreen + 1,
        screenTimes: { ...screenTimes, [currentScreen]: elapsed }
      });
    }
  },

  prevScreen: () => {
    const { currentScreen } = get();
    if (currentScreen > 0) {
      set({ currentScreen: currentScreen - 1 });
    }
  },

  incrementInteractions: () => set((state) => ({
    totalInteractions: state.totalInteractions + 1
  })),

  markCompleted: () => set({ isCompleted: true }),

  resetDemo: () => set({
    currentPersona: null,
    currentScreen: 0,
    startTime: Date.now(),
    screenTimes: {},
    totalInteractions: 0,
    isCompleted: false
  }),

  getTimeSpent: () => Math.floor((Date.now() - get().startTime) / 1000),

  logScreenTime: (screen) => {
    const { screenTimes, startTime } = get();
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    set({ screenTimes: { ...screenTimes, [screen]: elapsed } });
  }
}));
