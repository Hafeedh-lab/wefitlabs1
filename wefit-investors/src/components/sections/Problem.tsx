import { motion } from 'framer-motion';
import { problemData } from '@/utils/constants';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export const Problem = () => {
  return (
    <section id="problem" className="container mt-24 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary-blue/20 via-primary-blue/5 to-transparent p-6 shadow-card hover:shadow-card-hover">
          <img
            src={problemData.visualization}
            alt="Retention comparison"
            className="h-full w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <div className="absolute left-6 top-6 rounded-2xl bg-black/60 p-4 text-center shadow-card backdrop-blur-md">
            <p className="text-5xl font-semibold text-energy-green">{problemData.stat}</p>
            <p className="max-w-[180px] text-sm text-white/70">{problemData.statLabel}</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.span variants={itemVariants} className="text-sm uppercase tracking-[0.3em] text-primary-blue/80">
          The gap
        </motion.span>
        <motion.h2 variants={itemVariants} className="section-title">
          Fitness apps lose 80% of users in 3 weeks
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-white/70">
          Most products treat workouts like solo tasks. Without social accountability, motivation plummets and churn spikes.
          weFit flips the script with tight-knit communities that reinforce consistency and make healthy habits contagious.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 shadow-inner"
        >
          <p className="font-medium text-white">Investor insight</p>
          <p className="mt-3 text-base text-white/80">{problemData.insight}</p>
        </motion.div>
      </motion.div>
    </section>
  );
};
