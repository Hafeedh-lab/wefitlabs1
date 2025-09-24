import { motion } from 'framer-motion'
import { CheckCircle2, CircleDashed, CircleDot } from 'lucide-react'

import { milestones } from '@/utils/constants'

const statusConfig = {
  completed: {
    label: 'Completed',
    color: 'text-energy-green',
    icon: CheckCircle2,
    border: 'border-energy-green/60 bg-energy-green/10',
  },
  'in-progress': {
    label: 'In progress',
    color: 'text-primary-blue',
    icon: CircleDot,
    border: 'border-primary-blue/60 bg-primary-blue/10',
  },
  planned: {
    label: 'Planned',
    color: 'text-white/50',
    icon: CircleDashed,
    border: 'border-white/20 bg-white/5',
  },
}

export const Traction = () => (
  <section id="traction" className="container-section">
    <div className="mb-12 space-y-4 text-left">
      <p className="badge">Traction timeline</p>
      <h2 className="section-heading max-w-2xl">Momentum across beta, alpha, and launch readiness</h2>
      <p className="section-subheading max-w-3xl">
        We intentionally staged traction: community beta in Discord, closed alpha on iOS, then public launch. Each milestone compounds learnings and increases referral velocity.
      </p>
    </div>
    <div className="relative">
      <div className="hidden h-1 w-full bg-white/10 lg:block" aria-hidden />
      <div className="grid gap-8 lg:grid-cols-3">
        {milestones.map((milestone, idx) => {
          const status = statusConfig[milestone.status]
          const Icon = status.icon
          return (
            <motion.div
              key={milestone.date}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className={`flex h-12 w-12 items-center justify-center rounded-full border ${status.border}`}>
                  <Icon className={`h-6 w-6 ${status.color}`} />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/40">{milestone.date}</p>
                  <p className={`text-sm font-medium ${status.color}`}>{status.label}</p>
                </div>
              </div>
              <div className="card-surface h-full space-y-3 p-6">
                <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                <p className="text-base text-white/70">{milestone.metric}</p>
                {idx === 0 && (
                  <p className="text-sm text-white/60">Organic ambassadors activated on 6 campuses. Weekly NPS averaging 54.</p>
                )}
                {idx === 1 && (
                  <p className="text-sm text-white/60">Retention 3x industry benchmark. Average of 6.4 group interactions per user/week.</p>
                )}
                {idx === 2 && (
                  <p className="text-sm text-white/60">Paid acquisition layered onto organic loops. Creator waitlist pre-loaded.</p>
                )}
              </div>
              {idx < milestones.length - 1 && (
                <div className="timeline-connector hidden lg:block" aria-hidden>
                  <div className="absolute left-[calc(50%-1px)] top-0 h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)
