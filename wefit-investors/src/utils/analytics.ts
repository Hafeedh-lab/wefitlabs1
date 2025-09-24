export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

type GtagCommand = 'config' | 'event';

type GtagParams = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (command: GtagCommand, targetId: string, params?: GtagParams) => void;
  }
}

export const initAnalytics = () => {
  if (!GA_MEASUREMENT_ID) {
    return;
  }

  const existingLayer = Array.isArray(window.dataLayer) ? window.dataLayer : [];
  window.dataLayer = existingLayer;

  const gtagInstance = typeof window.gtag === 'function' ? window.gtag : gtag;

  function gtag(command: GtagCommand, targetId: string, params?: GtagParams) {
    window.dataLayer.push({ command, targetId, ...params });
  }

  window.gtag = gtagInstance;
  gtagInstance('config', GA_MEASUREMENT_ID, { send_page_view: true });
};

export const gtag = (command: GtagCommand, action: string, params?: GtagParams) => {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) {
    return;
  }

  window.gtag(command, action, params);
};

export const handleCTAClick = (action: string, label: string) => {
  gtag('event', action, {
    event_category: 'CTA',
    event_label: label,
    value: 1
  });
};

export const handleFormSubmit = (formType: string) => {
  gtag('event', 'form_submit', {
    event_category: 'Lead',
    event_label: formType
  });
};
