/// <reference types="vite/client" />

declare global {
  interface ImportMetaEnv {
    readonly VITE_GA_MEASUREMENT_ID?: string;
    readonly VITE_FORMSPREE_ENDPOINT?: string;
    readonly VITE_CALENDAR_BOOKING_URL?: string;
  }
}

export {};
