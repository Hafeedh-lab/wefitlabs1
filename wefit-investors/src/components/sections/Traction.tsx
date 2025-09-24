import { motion } from 'framer-motion';
import { CheckCircle2, Circle, CircleDashed } from 'lucide-react';
import { milestones } from '@/utils/constants';

const statusIcon = {
  completed: CheckCircle2,
  'in-progress': Circle,
  planned: CircleDashed
};

const statusColor = {
  completed: 'text-energy-green',
  'in-progress': 'text-primary-blue',
  planned: 'text-white/30'
};

export const Traction = () => {
  return (
    <section id="traction" className="container mt-24">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <span className="text-sm uppercase tracking-[0.3em] text-primary-blue/80">Momentum</span>
        <h2 className="section-title">Milestones proving product-market pull</h2>
        <p className="section-subtitle max-w-3xl">
          We iterated within Discord communities, launched an iOS alpha, and are gearing up for a high-conviction App Store
          debut with &gt;1k users projected by summer.
        </p>
      </div>
      <div className="mt-12 overflow-x-auto">
        <div className="relative flex min-w-[720px] justify-between gap-10">
          <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-white/10" />
          {milestones.map((milestone, index) => {
            const Icon = statusIcon[milestone.status];
            return (
              <motion.div
                key={milestone.title}
                className="relative flex w-full max-w-xs flex-col items-center gap-4 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 ${statusColor[milestone.status]}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">{milestone.date}</p>
                  <h3 className="text-lg font-semibold text-white">{milestone.title}</h3>
                  <p className="text-sm text-white/70">{milestone.metric}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
