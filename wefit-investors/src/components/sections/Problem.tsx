import { motion } from 'framer-motion'

import { problemData } from '@/utils/constants'

export const Problem = () => (
  <section id="problem" className="container-section">
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card">
          <div className="mb-6 flex items-center justify-between">
            <span className="badge">The retention cliff</span>
            <span className="text-sm text-white/50">Market reality</span>
          </div>
          <img
            src={problemData.visualization}
            alt="Retention curve comparison"
            className="w-full rounded-2xl border border-white/5"
            loading="lazy"
          />
          <p className="mt-4 text-sm text-white/60">
            Legacy fitness apps shed users fast. Without community accountability, week 4 retention collapses to industry norms.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="badge">Problem</p>
        <h2 className="section-heading max-w-xl">
          {problemData.stat} <span className="text-primary-blue">{problemData.statLabel}</span>
        </h2>
        <p className="section-subheading max-w-xl text-white/80">
          {problemData.insight} People crave belonging, recognition, and the ability to move together.
        </p>
        <div className="space-y-5">
          {[
            {
              title: 'Solo apps plateau',
              description: 'Notifications and streaks create short-term compliance, not durable connection.',
            },
            {
              title: 'Communities win retention',
              description: 'Shared progress updates and peer challenges keep the dopamine loop healthy.',
            },
            {
              title: 'Network effects missing',
              description: 'Most incumbents are tracking tools, not network-native communities.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-blue/80">{item.title}</p>
              <p className="mt-2 text-base text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)
