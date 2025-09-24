import { useRef } from 'react';
import type { FC } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { metricsData } from '@/utils/constants';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

type Trend = 'up' | 'down' | 'stable';

type IconComponent = LucideIcon | FC<{ className?: string }>;

const isIconComponent = (icon: unknown): icon is IconComponent =>
  typeof icon === 'function';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const trendLabel: Record<Trend, string> = {
  up: 'Up',
  down: 'Down',
  stable: 'Stable'
};

const getTrendClass = (trend: Trend) => {
  switch (trend) {
    case 'up':
      return 'badge badge-up';
    case 'down':
      return 'badge badge-down';
    default:
      return 'badge badge-stable';
  }
};

interface MetricCardProps {
  label: string;
  value: number;
  suffix: string;
  trend: Trend;
  description: string;
  icon: string;
  benchmark?: string;
  growth?: string;
  animate: boolean;
}

const MetricCard = ({ animate, ...metric }: MetricCardProps) => {
  const animatedValue = useCounterAnimation(animate ? metric.value : 0);
  const iconCandidate = (Icons as Record<string, unknown>)[metric.icon];
  const Icon = isIconComponent(iconCandidate) ? iconCandidate : Icons.Activity;

  return (
    <motion.div variants={cardVariants}>
      <Card className="h-full">
        <div className="flex items-center justify-between">
          <span className="text-sm uppercase tracking-[0.2em] text-white/40">{metric.label}</span>
          <span className={getTrendClass(metric.trend)}>
            <Icon className="h-4 w-4" />
            {trendLabel[metric.trend]}
          </span>
        </div>
        <div className="mt-6 flex items-end gap-2">
          <span className="text-4xl font-semibold text-white">
            {animatedValue}
            {metric.suffix}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">{metric.description}</span>
        </div>
        {metric.benchmark && <p className="mt-4 text-sm text-white/60">{metric.benchmark}</p>}
        {metric.growth && <p className="mt-4 text-sm text-energy-green">{metric.growth}</p>}
      </Card>
    </motion.div>
  );
};

export const Metrics = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="metrics" className="container pt-10">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <span className="text-sm uppercase tracking-[0.3em] text-primary-blue/80">Growth Proof</span>
        <h2 className="section-title">Metrics investors care about</h2>
        <p className="section-subtitle max-w-2xl">
          Sticky usage, viral acquisition, and monetization-ready cohorts outperforming industry benchmarks by 2-3x.
        </p>
      </div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="metrics-grid mt-10"
      >
        {metricsData.map((metric) => (
          <MetricCard key={metric.label} {...metric} animate={inView} />
        ))}
      </motion.div>
    </section>
  );
};
