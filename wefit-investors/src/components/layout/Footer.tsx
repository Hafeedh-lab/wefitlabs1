import { Mail, Twitter } from 'lucide-react'

import { CALENDAR_BOOKING_URL } from '@/utils/constants'

export const Footer = () => (
  <footer className="mt-24 bg-black/40 py-12">
    <div className="container-section flex flex-col gap-6 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-primary-blue/80">weFit Labs</p>
        <p className="mt-2 text-base text-white/60">Building the social layer for fitness communities.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-white/60 lg:flex-row lg:items-center lg:gap-8">
        <a className="flex items-center gap-2 hover:text-white" href="mailto:founders@wefitlabs.com">
          <Mail className="h-4 w-4" /> founders@wefitlabs.com
        </a>
        <a className="flex items-center gap-2 hover:text-white" href="https://twitter.com/wefitlabs" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-4 w-4" /> @wefitlabs
        </a>
        {CALENDAR_BOOKING_URL && (
          <a className="hover:text-white" href={CALENDAR_BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Calendly
          </a>
        )}
      </div>
      <p className="text-xs text-white/40">© {new Date().getFullYear()} weFit Labs. All rights reserved.</p>
    </div>
  </footer>
)
