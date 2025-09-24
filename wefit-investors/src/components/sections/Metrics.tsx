import { motion, useInView } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Gauge, Minus, TrendingUp } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

import type { MetricCard as MetricCardType } from '@/utils/constants'
import { metricsData } from '@/utils/constants'
import { Card } from '../ui/Card'

const trendIconMap = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  stable: Minus,
}

const metricIconMap = {
  TrendingUp,
  Gauge,
}

type UseCounterArgs = {
  end: number
  active: boolean
  duration?: number
  decimals?: number
}

const useCounterAnimation = ({ end, active, duration = 2, decimals = 0 }: UseCounterArgs) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    let animationFrame: number
    const start = performance.now()

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      const nextValue = parseFloat((end * progress).toFixed(decimals))
      setValue(nextValue)
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrame)
  }, [active, duration, end, decimals])

  return value
}

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const MetricCard = ({ metric, isInView }: { metric: MetricCardType; isInView: boolean }) => {
  const TrendIcon = trendIconMap[metric.trend]
  const MetricIcon = metric.icon && metricIconMap[metric.icon as keyof typeof metricIconMap]

  const numericValue = useMemo(() => parseFloat(metric.value.replace(/[^0-9.]/g, '')) || 0, [metric.value])
  const suffix = useMemo(() => metric.value.replace(/[0-9.]/g, ''), [metric.value])
  const decimals = metric.value.includes('.') ? metric.value.split('.')[1].replace(/[^0-9]/g, '').length : 0

  const animatedValue = useCounterAnimation({ end: numericValue, active: isInView, decimals })

  const displayValue = Number.isFinite(numericValue) && numericValue !== 0
    ? `${animatedValue.toFixed(decimals)}${suffix}`
    : metric.value

  return (
    <motion.div variants={cardVariants}>
      <Card className="flex h-full flex-col gap-6 border-white/5 bg-white/10 p-6">
        <div className="flex items-center justify-between text-white/70">
          <span className="text-sm font-medium uppercase tracking-[0.4em] text-white/40">{metric.label}</span>
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/60">
            {metric.description}
          </span>
        </div>
        <div className="flex items-baseline gap-4">
          <p className="text-4xl font-semibold text-white">{displayValue}</p>
          <span className="flex items-center gap-2 text-sm text-white/60">
            <TrendIcon className={`h-4 w-4 ${metric.trend === 'down' ? 'text-bold-red' : 'text-energy-green'}`} />
            {metric.trend === 'stable' ? 'Steady' : metric.trend === 'up' ? 'Upward momentum' : 'Monitoring'}
          </span>
        </div>
        {metric.benchmark && <p className="text-sm text-white/50">{metric.benchmark}</p>}
        {metric.growth && (
          <div className="flex items-center gap-2 text-sm text-energy-green">
            <Gauge className="h-4 w-4" />
            {metric.growth}
          </div>
        )}
        {MetricIcon && <MetricIcon className="h-10 w-10 text-primary-blue/70" aria-hidden />}
      </Card>
    </motion.div>
  )
}

export const Metrics = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section id="metrics" className="container-section">
      <div className="mb-12 flex flex-col gap-6 text-left lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="badge">Numbers-first narrative</p>
          <h2 className="section-heading">Proof that social fitness sticks</h2>
          <p className="section-subheading">
            Early cohorts show compounding engagement loops. High-frequency interactions, challenge completions, and referral growth validate the network mechanics.
          </p>
        </div>
        <div className="max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary-blue">Why this matters</p>
          <p className="mt-3 leading-relaxed">
            Investors tell us they want data. So Variant A leads with the health of our retention, virality, and engagement loops—before we dive into story or roadmap.
          </p>
        </div>
      </div>
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="metrics-grid"
      >
        {metricsData.map((metric) => (
          <MetricCard key={metric.label} metric={metric} isInView={isInView} />
        ))}
      </motion.div>
    </section>
  )
}
