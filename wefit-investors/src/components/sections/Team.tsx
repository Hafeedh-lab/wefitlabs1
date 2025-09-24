import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

import { founders } from '@/utils/constants'

export const Team = () => (
  <section id="team" className="container-section">
    <div className="mb-12 space-y-4 text-left">
      <p className="badge">Team</p>
      <h2 className="section-heading max-w-2xl">Founders obsessed with community, product, and retention</h2>
      <p className="section-subheading max-w-2xl">
        Ethan and Eric have shipped consumer products that scaled into millions of interactions. weFit Labs fuses their community growth and infrastructure DNA.
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-2">
      {founders.map((founder, idx) => (
        <motion.div
          key={founder.name}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.15, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="card-surface card-hoverable flex flex-col overflow-hidden p-6"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="h-40 w-40 overflow-hidden rounded-3xl border border-white/10">
              <img src={founder.image} alt={`${founder.name} headshot`} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-2xl font-semibold text-white">{founder.name}</h3>
                <p className="text-sm uppercase tracking-[0.3em] text-primary-blue/80">{founder.title}</p>
              </div>
              <p className="text-base text-white/70">{founder.bio}</p>
              <motion.a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-blue hover:text-energy-green"
                whileHover={{ x: 4 }}
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)
