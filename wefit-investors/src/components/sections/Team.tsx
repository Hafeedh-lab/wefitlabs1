import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { founders } from '@/utils/constants';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export const Team = () => {
  return (
    <section id="team" className="container mt-24">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <span className="text-sm uppercase tracking-[0.3em] text-primary-blue/80">Team</span>
        <h2 className="section-title">Operators obsessed with social fitness</h2>
        <p className="section-subtitle max-w-2xl">
          Ethan and Eric blend community design, growth experimentation, and social graph engineering to make wellness contagious.
        </p>
      </div>
      <motion.div
        className="mt-12 grid gap-8 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        transition={{ staggerChildren: 0.18 }}
      >
        {founders.map((founder) => (
          <motion.article
            key={founder.name}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
          >
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-white/10 shadow-card">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <a
                  href={founder.linkedin}
                  className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-blue text-white opacity-0 transition group-hover:opacity-100"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${founder.name}'s LinkedIn`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{founder.name}</h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary-blue/80">{founder.title}</p>
                </div>
                <p className="text-sm text-white/70">{founder.bio}</p>
                <a
                  href={founder.linkedin}
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary-blue hover:text-energy-green"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};
