// lib/gtag.ts

// Type declaration for gtag
declare global {
    interface Window {
      gtag: (
        command: 'config' | 'event',
        targetId: string,
        config?: Record<string, any>
      ) => void;
    }
  }
  
  export const GA_TRACKING_ID = 'G-NJK213RBNQ'; // thay bằng mã thật của bạn
  
  // Gửi page view
  export const pageview = (url: string) => {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  };
  
  // Gửi custom event (nếu cần sau này)
  export const event = ({ action, category, label, value }: {
    action: string
    category: string
    label: string
    value: number
  }) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  };
  