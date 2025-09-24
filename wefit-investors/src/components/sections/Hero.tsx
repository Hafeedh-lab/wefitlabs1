import { motion } from 'framer-motion'
import { ArrowDownRight, PlayCircle } from 'lucide-react'
import type { HeroVariant } from '@/utils/constants'
import { CALENDAR_BOOKING_URL, heroContent } from '@/utils/constants'
import { Button } from '../ui/Button'
import { trackCTAClick } from '@/utils/analytics'

interface HeroProps {
  variant?: HeroVariant
}

const backgroundNodes = Array.from({ length: 16 }, (_, idx) => ({
  delay: idx * 0.08,
  left: `${10 + (idx % 8) * 10}%`,
  top: `${20 + Math.floor(idx / 8) * 30}%`,
}))

const heroVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export const Hero = ({ variant = 'numbers' }: HeroProps) => {
  const content = heroContent[variant]

  const handlePrimary = () => trackCTAClick('hero_primary', content.cta1)
  const handleSecondary = () => trackCTAClick('hero_secondary', content.cta2)

  const secondaryHref = CALENDAR_BOOKING_URL || '#contact'

  return (
    <section id="hero" className="relative overflow-hidden bg-dark-charcoal">
      <div className="absolute inset-0 bg-hero-gradient opacity-80" aria-hidden />
      <div className="container-section relative z-10 flex flex-col gap-12 pt-24 pb-20 lg:flex-row lg:items-center">
        <motion.div
          className="flex-1 space-y-8"
          initial="initial"
          animate="animate"
          variants={heroVariants}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white/70 backdrop-blur">
            <span className="font-mono uppercase tracking-[0.4em] text-energy-green">Investor Preview</span>
            <span className="hidden text-white/60 sm:inline">Network-driven growth engine for social fitness</span>
          </div>
          <div className="space-y-6">
            <motion.h1 className="hero-text font-semibold leading-[1.05] text-white" variants={heroVariants}>
              <span className="gradient-text">weFit Labs</span> — {content.headline}
            </motion.h1>
            <p className="max-w-2xl text-lg text-white/70 md:text-xl">{content.subheadline}</p>
          </div>
          <div className="grid gap-4 sm:inline-flex sm:items-center">
            <Button onClick={handlePrimary} href="#contact" as="a" icon={<ArrowDownRight className="h-4 w-4" />}>
              {content.cta1}
            </Button>
            <Button
              onClick={handleSecondary}
              as="a"
              href={secondaryHref}
              target={CALENDAR_BOOKING_URL ? '_blank' : undefined}
              rel={CALENDAR_BOOKING_URL ? 'noopener noreferrer' : undefined}
              variant="secondary"
              icon={<PlayCircle className="h-5 w-5" />}
            >
              {content.cta2}
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                label: 'Cohort Retention',
                value: '67% at week 4',
              },
              {
                label: 'Communities Active',
                value: '18 creator-led groups',
              },
              {
                label: 'Viral Loop',
                value: '2.1 invites / user',
              },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">{item.label}</p>
                <p className="mt-2 text-lg font-medium text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative flex flex-1 items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.9, ease: 'easeOut' } }}
        >
          <div className="relative h-[420px] w-full max-w-[420px] rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="absolute inset-x-12 top-6 h-2 rounded-full bg-white/10" />
            <div className="absolute inset-x-8 top-16 h-[360px] rounded-[24px] bg-black/80">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-blue/40 via-transparent to-energy-green/40"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
              />
              <div className="relative h-full w-full p-8">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.5em] text-white/40">Active Challenges</p>
                  <div className="space-y-3">
                    {['Squad Sprint', 'Founder Focus', 'Campus Circuit'].map((challenge, idx) => (
                      <motion.div
                        key={challenge}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.15 }}
                      >
                        <div>
                          <p className="text-sm font-semibold text-white">{challenge}</p>
                          <p className="text-xs text-white/50">{idx * 8 + 32} participants</p>
                        </div>
                        <span className="rounded-full bg-energy-green/20 px-3 py-1 text-xs text-energy-green">Live</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {backgroundNodes.map((node, index) => (
            <motion.span
              key={index}
              className="absolute h-3 w-3 rounded-full bg-primary-blue/60 shadow-[0_0_12px_rgba(45,127,249,0.6)]"
              style={{ left: node.left, top: node.top }}
              animate={{ y: [0, -8, 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 4 + index * 0.1, repeat: Infinity, delay: node.delay, repeatType: 'reverse' }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
