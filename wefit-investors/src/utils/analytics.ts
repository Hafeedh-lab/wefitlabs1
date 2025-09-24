type GtagArguments = [string, ...unknown[]]

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: GtagArguments) => void
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export const initializeAnalytics = () => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return

  if (!window.dataLayer) {
    window.dataLayer = []
  }

  if (!document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)
  }

  window.gtag = function gtag(...args: GtagArguments) {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true })
}

export const gtag = (...args: GtagArguments) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return
  if (typeof window.gtag === 'function') {
    window.gtag(...args)
  } else {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(args)
  }
}

export const trackCTAClick = (action: string, label: string) => {
  gtag('event', action, {
    event_category: 'CTA',
    event_label: label,
    value: 1,
  })
}

export const trackFormSubmit = (formType: string) => {
  gtag('event', 'form_submit', {
    event_category: 'Lead',
    event_label: formType,
  })
}
