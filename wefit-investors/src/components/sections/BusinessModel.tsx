import { motion } from 'framer-motion';
import { businessModel } from '@/utils/constants';
import { Card } from '@/components/ui/Card';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export const BusinessModel = () => {
  return (
    <section id="business-model" className="container mt-24">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <span className="text-sm uppercase tracking-[0.3em] text-primary-blue/80">Monetization</span>
        <h2 className="section-title">Three revenue streams powering scale</h2>
        <p className="section-subtitle max-w-3xl">
          Freemium communities graduate into premium accountability pods, corporate contracts, and creator revenue-sharing.
          Monetization is woven into the social loops rather than bolted on.
        </p>
      </div>
      <motion.div
        className="mt-10 grid gap-6 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        transition={{ staggerChildren: 0.18 }}
      >
        {businessModel.map((stream) => (
          <motion.div key={stream.title} variants={cardVariants}>
            <Card className="h-full bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent">
              <h3 className="text-xl font-semibold text-white">{stream.title}</h3>
              <p className="mt-3 text-sm text-white/70">{stream.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/75">
                {stream.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-blue" />
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
