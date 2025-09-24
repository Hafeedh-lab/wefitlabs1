import { motion } from 'framer-motion'
import { Award, Users, Zap } from 'lucide-react'

import { solutionData } from '@/utils/constants'

const iconMap = {
  Users,
  Zap,
  Award,
}

export const Solution = () => (
  <section id="solution" className="container-section">
    <div className="mb-12 space-y-4 text-left">
      <p className="badge">Solution</p>
      <h2 className="section-heading max-w-2xl">Community-first mechanics that keep people showing up</h2>
      <p className="section-subheading max-w-2xl">
        weFit Labs turns workouts into social rituals. We intentionally designed loops that reward participation, make commitment fun,
        and make sharing progress effortless.
      </p>
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      {solutionData.map((item, idx) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap]
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.12, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="card-surface card-hoverable h-full space-y-4 p-6">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary-blue/20 p-3 text-primary-blue">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-base text-white/70">{item.description}</p>
              <ul className="space-y-2 text-sm text-white/50">
                {idx === 0 && (
                  <>
                    <li>Weekly squads with built-in accountability prompts</li>
                    <li>Challenge templates tuned to different personas</li>
                  </>
                )}
                {idx === 1 && (
                  <>
                    <li>Peer reactions and shout-outs fuel intrinsic motivation</li>
                    <li>Leaderboards spotlight healthy momentum, not vanity metrics</li>
                  </>
                )}
                {idx === 2 && (
                  <>
                    <li>Micro-celebrations for streaks, new PRs, and group milestones</li>
                    <li>Reward wallet that powers referrals and sponsor drops</li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        )
      })}
    </div>
  </section>
)
