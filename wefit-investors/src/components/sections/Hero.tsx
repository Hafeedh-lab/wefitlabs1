import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { heroContent } from '@/utils/constants';
import { handleCTAClick } from '@/utils/analytics';

export interface HeroProps {
  variant: 'numbers' | 'narrative' | 'distribution';
}

const nodeVariants = {
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 0.6, scale: 1 }
};

const heroVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 }
};

const gradientMap: Record<HeroProps['variant'], string> = {
  numbers: 'from-primary-blue/40 via-primary-blue/10 to-transparent',
  narrative: 'from-energy-green/40 via-primary-blue/10 to-transparent',
  distribution: 'from-primary-blue/30 via-energy-green/20 to-transparent'
};

const nodes = Array.from({ length: 16 }).map((_, index) => ({
  id: index,
  top: `${Math.random() * 80 + 10}%`,
  left: `${Math.random() * 80 + 10}%`,
  size: Math.random() * 12 + 6
}));

export const Hero = memo(({ variant }: HeroProps) => {
  const content = heroContent[variant];
  const gradient = gradientMap[variant];

  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-28">
      <motion.div
        className={`absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,var(--primary-blue)_0%,rgba(28,28,30,0.2)_35%,rgba(28,28,30,1)_70%)]`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <motion.span
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-blue/30 bg-primary-blue/10 px-4 py-1 text-xs uppercase tracking-[0.32em] text-primary-blue"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Investor Update • Q1 2025
          </motion.span>
          <motion.h1
            className="hero-text font-semibold leading-[1.05]"
            variants={heroVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="gradient-text block">{content.headline}</span>
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-white/70 md:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {content.subheadline}
          </motion.p>
          <motion.div
            className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              size="lg"
              onClick={() => {
                handleCTAClick('hero_primary', content.cta1);
                const contact = document.getElementById('contact');
                contact?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {content.cta1}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                handleCTAClick('hero_secondary', content.cta2);
                const calendarUrl = import.meta.env.VITE_CALENDAR_BOOKING_URL ?? 'https://calendly.com/wefit-investors';
                window.open(calendarUrl, '_blank', 'noopener');
              }}
            >
              <Play className="h-4 w-4" />
              {content.cta2}
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="relative mt-10 flex flex-col gap-6 rounded-3xl border border-white/5 bg-white/[0.04] p-6 shadow-[0_40px_120px_rgba(45,127,249,0.15)] backdrop-blur-lg md:flex-row"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative flex flex-1 flex-col gap-4">
            <span className="text-sm uppercase tracking-[0.24em] text-primary-blue/80">Why we\'re winning</span>
            <ul className="space-y-3 text-left text-sm text-white/70 md:text-base">
              <li className="flex items-start gap-3">
                <ArrowUpRight className="mt-1 h-4 w-4 text-energy-green" />
                Retention cohorts compounding across campus-led micro communities.
              </li>
              <li className="flex items-start gap-3">
                <ArrowUpRight className="mt-1 h-4 w-4 text-energy-green" />
                Viral loops triggered by shared challenges and auto-generated highlight reels.
              </li>
              <li className="flex items-start gap-3">
                <ArrowUpRight className="mt-1 h-4 w-4 text-energy-green" />
                Monetization ready via premium accountability pods and corporate pilots.
              </li>
            </ul>
          </div>
          <div className="flex flex-1 flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
            <span className="text-sm font-medium uppercase tracking-widest text-white/60">Network Effects Flywheel</span>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/80 md:text-base">
              <div className="rounded-xl bg-black/30 p-4">
                <span className="text-xs uppercase text-primary-blue/70">Spark</span>
                <p className="mt-2 font-semibold">Group forms challenge</p>
              </div>
              <div className="rounded-xl bg-black/30 p-4">
                <span className="text-xs uppercase text-primary-blue/70">Engage</span>
                <p className="mt-2 font-semibold">Daily social accountability</p>
              </div>
              <div className="rounded-xl bg-black/30 p-4">
                <span className="text-xs uppercase text-primary-blue/70">Share</span>
                <p className="mt-2 font-semibold">Highlights drive invites</p>
              </div>
              <div className="rounded-xl bg-black/30 p-4">
                <span className="text-xs uppercase text-primary-blue/70">Expand</span>
                <p className="mt-2 font-semibold">New cohorts spin up</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className={`pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b ${gradient} opacity-40`} />
      {nodes.map((node) => (
        <motion.span
          key={node.id}
          className="absolute -z-10 rounded-full bg-primary-blue/30"
          style={{ top: node.top, left: node.left, width: node.size, height: node.size }}
          variants={nodeVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.4,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: node.id * 0.05
          }}
        />
      ))}
    </section>
  );
});

Hero.displayName = 'Hero';
