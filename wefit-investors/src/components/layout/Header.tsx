import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import { Button } from '../ui/Button'
import { heroContent } from '@/utils/constants'
import { trackCTAClick } from '@/utils/analytics'

const navLinks = [
  { label: 'Metrics', href: '#metrics' },
  { label: 'Product', href: '#solution' },
  { label: 'Traction', href: '#traction' },
  { label: 'Business Model', href: '#business-model' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const handleNavClick = () => setIsOpen(false)

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${isScrolled ? 'bg-black/70 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#hero" className="flex items-center gap-3" aria-label="weFit Labs home">
          <span className="h-10 w-10 rounded-xl bg-primary-blue/20" aria-hidden>
            <span className="gradient-text flex h-full w-full items-center justify-center text-xl font-semibold">w</span>
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">weFit Labs</span>
            <span className="text-xs uppercase tracking-[0.4em] text-white/40">Investor portal</span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white" onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
          <Button as="a" href="#contact" onClick={() => trackCTAClick('header_request_deck', heroContent.numbers.cta1)}>
            {heroContent.numbers.cta1}
          </Button>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden"
          >
            <div className="mx-6 mb-4 space-y-3 rounded-2xl border border-white/10 bg-black/80 p-6 text-white/80">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="block text-base" onClick={handleNavClick}>
                  {link.label}
                </a>
              ))}
              <Button
                as="a"
                href="#contact"
                className="w-full"
                onClick={() => {
                  trackCTAClick('mobile_header_request_deck', heroContent.numbers.cta1)
                  handleNavClick()
                }}
              >
                {heroContent.numbers.cta1}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
