import { motion } from 'framer-motion'
import { Coins, Rocket, Share2 } from 'lucide-react'

import { goToMarketPhases, revenueStreams } from '@/utils/constants'
import { Card } from '../ui/Card'

const iconPalette = [Coins, Share2, Rocket]

export const BusinessModel = () => (
  <section id="business-model" className="container-section">
    <div className="mb-12 space-y-4 text-left">
      <p className="badge">Monetization</p>
      <h2 className="section-heading max-w-3xl">Clear revenue levers layered on top of network effects</h2>
      <p className="section-subheading max-w-3xl">
        Monetization amplifies, not interrupts, the social loops. Premium tools for communities, unlocks for creators, and B2B deployments give us diversified, high-margin revenue.
      </p>
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      {revenueStreams.map((stream, idx) => {
        const Icon = iconPalette[idx] ?? Coins
        return (
          <motion.div
            key={stream.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Card className="h-full space-y-4 p-6">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-energy-green/20 p-3 text-energy-green">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{stream.title}</h3>
                  <p className="text-sm text-white/50">{stream.value}</p>
                </div>
              </div>
              <p className="text-base text-white/70">{stream.headline}</p>
              <ul className="space-y-2 text-sm text-white/60">
                {stream.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-energy-green" aria-hidden />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        )
      })}
    </div>
    <div className="mt-16 space-y-6">
      <p className="badge">Go-to-market engine</p>
      <div className="grid gap-6 lg:grid-cols-3">
        {goToMarketPhases.map((phase, idx) => (
          <motion.div
            key={phase.stage}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="card-surface card-hoverable h-full space-y-4 p-6">
              <div className="flex items-center justify-between text-white/70">
                <span className="text-sm uppercase tracking-[0.3em] text-white/40">{phase.stage}</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/60">{phase.audience}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{phase.focus}</h3>
              <ul className="space-y-2 text-sm text-white/60">
                {phase.mechanics.map((mechanic) => (
                  <li key={mechanic} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-blue" aria-hidden />
                    <span>{mechanic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
