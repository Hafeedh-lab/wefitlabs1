import type { LucideIcon } from 'lucide-react'

import retentionCurve from '@/assets/images/retention-curve-comparison.svg'
import ethanHeadshot from '@/assets/images/ethan-headshot.jpg'
import ericHeadshot from '@/assets/images/eric-headshot.jpg'

export type HeroVariant = 'numbers' | 'narrative' | 'distribution'

export const heroContent: Record<HeroVariant, {
  headline: string
  subheadline: string
  cta1: string
  cta2: string
}> = {
  numbers: {
    headline: 'Building the social layer for fitness communities',
    subheadline: 'Active groups, sticky challenges, compounding referrals',
    cta1: 'Request Deck',
    cta2: 'Book 12-Min Call',
  },
  narrative: {
    headline: 'Fitness sticks when it\'s social',
    subheadline: 'Turning solo workouts into community adventures',
    cta1: 'See Cohort Data',
    cta2: 'Investor Call',
  },
  distribution: {
    headline: 'Communities that work out... keep working',
    subheadline: 'Self-perpetuating fitness networks with viral mechanics',
    cta1: 'Partnership Intro',
    cta2: 'Investor Deck',
  },
}

export interface MetricCard {
  label: string
  value: string
  trend: 'up' | 'stable' | 'down'
  description: string
  icon?: LucideIcon | string
  benchmark?: string
  growth?: string
}

export const metricsData: MetricCard[] = [
  {
    label: 'DAU/WAU Ratio',
    value: '28%',
    trend: 'up',
    description: 'Daily Active Users',
    icon: 'TrendingUp',
  },
  {
    label: '4-Week Retention',
    value: '67%',
    trend: 'up',
    description: 'Month-1 Retention',
    benchmark: 'vs 23% industry avg',
  },
  {
    label: 'Challenge Completion',
    value: '84%',
    trend: 'stable',
    description: 'Completion Rate',
    benchmark: 'vs 45% industry avg',
  },
  {
    label: 'Waitlist Growth',
    value: '100+',
    trend: 'up',
    description: 'Users signed up',
    growth: '15% monthly growth',
  },
]

export const problemData = {
  stat: '80%',
  statLabel: 'of fitness apps lose users within 3 weeks',
  insight: 'Solo fitness fails. Community fitness thrives.',
  visualization: retentionCurve,
}

export const solutionData = [
  {
    title: 'Group Challenges',
    description: 'Accountability + fun through shared goals',
    icon: 'Users',
  },
  {
    title: 'Social Dynamics',
    description: 'Peer motivation + healthy competition',
    icon: 'Zap',
  },
  {
    title: 'Micro-Rewards',
    description: 'Behavioral reinforcement loops',
    icon: 'Award',
  },
]

export const milestones = [
  {
    date: 'Oct 2024',
    title: 'Discord Beta Launch',
    metric: '50+ early adopters',
    status: 'completed' as const,
  },
  {
    date: 'Jan/Feb 2025',
    title: 'iOS Alpha Launch',
    metric: '100+ users, 67% retention',
    status: 'in-progress' as const,
  },
  {
    date: 'Summer 2025',
    title: 'App Store Launch',
    metric: '1,000+ projected users',
    status: 'planned' as const,
  },
]

export const revenueStreams = [
  {
    title: 'Premium Communities',
    headline: 'Freemium → Premium conversion engine',
    details: [
      'Advanced analytics and habit loops for power users',
      'Tiered access for elite groups and micro-communities',
      'Transaction fee on challenge prize pools and streak boosts',
    ],
    value: '$12/mo ARPU target',
  },
  {
    title: 'Creator Network',
    headline: 'Monetization rails for fitness leaders',
    details: [
      'Branded challenges with automated onboarding flows',
      'Audience analytics + revenue share marketplace',
      'Paid drops + digital goods built on top of community graphs',
    ],
    value: '35% take rate on creator tools',
  },
  {
    title: 'Corporate & Campus',
    headline: 'Enterprise recurring revenue',
    details: [
      'Team leaderboards + compliance-ready reporting',
      'Culture + wellness budgets shifting to social-first programs',
      'Campus ambassador loops feed corporate pipeline',
    ],
    value: '$4-6 / employee / month',
  },
]

export const goToMarketPhases = [
  {
    stage: 'Phase 1',
    audience: 'Campus Communities',
    focus: 'Embed weFit as the default health stack for Gen-Z connectors',
    mechanics: ['Ambassador-led activation sprints', 'Referral multipliers baked into challenge loops', 'Discord + iOS co-pilots'],
  },
  {
    stage: 'Phase 2',
    audience: 'Fitness Creators',
    focus: 'Give creators network-native tools that monetize engagement, not eyeballs',
    mechanics: ['Challenge template marketplace', 'Creator dashboards + cohort insights', 'Followers auto-join in under 30 seconds'],
  },
  {
    stage: 'Phase 3',
    audience: 'Corporate Groups',
    focus: 'Translate social accountability into measurable workforce ROI',
    mechanics: ['Plug-and-play HRIS integration', 'Quarterly wellness competitions', 'Data-rich reporting for exec buy-in'],
  },
]

export const founders = [
  {
    name: 'Ethan Noblesala',
    title: 'Co-Founder & CEO',
    bio: 'Former community growth lead at two venture-backed social apps. Built ambassador networks that scaled to 500k+ members.',
    image: ethanHeadshot,
    linkedin: 'https://linkedin.com/in/ethan-noblesala',
  },
  {
    name: 'Eric Chen',
    title: 'Co-Founder & CTO',
    bio: 'Ex-Stripe engineer + YC alum. Architected high-retention consumer products and social graph infrastructure.',
    image: ericHeadshot,
    linkedin: 'https://linkedin.com/in/eric-chen',
  },
]

export const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? ''
export const CALENDAR_BOOKING_URL = import.meta.env.VITE_CALENDAR_BOOKING_URL ?? ''
