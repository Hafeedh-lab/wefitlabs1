export const trackDemoEvent = (event: string, properties?: Record<string, unknown>) => {
  // Basic console logging for the demo environment
  // Replace with analytics vendor implementation when integrating for production
  console.log('Demo Event:', event, properties);

  if (typeof window !== 'undefined' && typeof (window as never as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
    const { gtag } = window as never as { gtag: (...args: unknown[]) => void };
    gtag('event', event, {
      event_category: 'Demo',
      ...properties
    });
  }
};
