import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/layout/SEOHead';
import { Hero } from '@/components/sections/Hero';
import { Metrics } from '@/components/sections/Metrics';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { Team } from '@/components/sections/Team';
import { Contact } from '@/components/sections/Contact';
import { initAnalytics } from '@/utils/analytics';
import type { HeroProps } from '@/components/sections/Hero';

const Traction = lazy(() => import('@/components/sections/Traction').then((module) => ({ default: module.Traction })));
const BusinessModel = lazy(() =>
  import('@/components/sections/BusinessModel').then((module) => ({ default: module.BusinessModel }))
);

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

type HeroVariant = HeroProps['variant'];

const heroVariants: HeroVariant[] = ['numbers', 'narrative', 'distribution'];

const variantLabels: Record<HeroVariant, string> = {
  numbers: 'Metrics-first',
  narrative: 'Narrative-first',
  distribution: 'Distribution-first'
};

function App() {
  const [variant, setVariant] = useState<HeroVariant>('numbers');

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <>
      <SEOHead />
      <Header />
      <motion.main
        className="relative"
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container flex flex-col gap-4 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm text-white/70">
            <span className="font-semibold text-white">Hero variant</span>
            <div className="flex flex-wrap gap-2">
              {heroVariants.map((option) => (
                <button
                  key={option}
                  onClick={() => setVariant(option)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    option === variant
                      ? 'border-primary-blue bg-primary-blue/20 text-primary-blue'
                      : 'border-white/10 bg-transparent text-white/70 hover:border-primary-blue/40'
                  }`}
                >
                  {variantLabels[option]}
                </button>
              ))}
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <Hero key={variant} variant={variant} />
        </AnimatePresence>
        <Metrics />
        <Problem />
        <Solution />
        <Suspense fallback={null}>
          <Traction />
        </Suspense>
        <Suspense fallback={null}>
          <BusinessModel />
        </Suspense>
        <Team />
        <Contact />
      </motion.main>
      <Footer />
    </>
  );
}

export default App;
