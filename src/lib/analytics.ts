// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// Get the GA Measurement ID from environment variable or use default
const getMeasurementId = (): string => {
  return import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-8C3JQ79B6X';
};

// Initialize Google Analytics
export const initGA = (measurementId?: string) => {
  const id = measurementId || getMeasurementId();
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', id);
  }
};

// Track page views (for React Router)
export const trackPageView = (url: string) => {
  const measurementId = getMeasurementId();
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', measurementId, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

