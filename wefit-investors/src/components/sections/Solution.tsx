import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { solutionData, waitlistProof } from '@/utils/constants';

const listVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.16
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Solution = () => {
  return (
    <section id="solution" className="container mt-24 grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:items-center">
      <motion.div
        className="flex flex-col gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        variants={listVariants}
      >
        <motion.span variants={itemVariants} className="text-sm uppercase tracking-[0.3em] text-primary-blue/80">
          The answer
        </motion.span>
        <motion.h2 variants={itemVariants} className="section-title">
          weFit turns workouts into social adventures
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-white/70">
          Purpose-built community loops keep members engaged: group accountability, daily touchpoints, and reward mechanics that
          feel like a game night instead of a treadmill chore.
        </motion.p>
        <motion.ul variants={listVariants} className="grid gap-5 md:grid-cols-3">
          {solutionData.map((solution) => {
            const Icon = (Icons as Record<string, React.FC<{ className?: string }>>)[solution.icon] ?? Icons.Sparkle;
            return (
              <motion.li
                key={solution.title}
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
              >
                <Icon className="h-6 w-6 text-primary-blue" />
                <h3 className="mt-4 text-lg font-semibold">{solution.title}</h3>
                <p className="mt-2 text-sm text-white/70">{solution.description}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
      <motion.div
        className="rounded-3xl border border-white/10 bg-black/40 p-8"
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-white">Compounding demand</h3>
        <p className="mt-2 text-sm text-white/70">
          The waitlist keeps growing without paid spend. Communities spin up organic challenges and invite their network.
        </p>
        <ul className="mt-6 space-y-4 text-sm text-white/75">
          {waitlistProof.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-energy-green" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
