import type { HeroProps } from '@/components/sections/Hero';

type HeroVariant = HeroProps['variant'];

type MetricsTrend = 'up' | 'down' | 'stable';

type MilestoneStatus = 'completed' | 'in-progress' | 'planned';

export const heroContent: Record<HeroVariant, {
  headline: string;
  subheadline: string;
  cta1: string;
  cta2: string;
}> = {
  numbers: {
    headline: 'Building the social layer for fitness communities',
    subheadline: 'Active groups, sticky challenges, compounding referrals',
    cta1: 'Request Deck',
    cta2: 'Book 12-Min Call'
  },
  narrative: {
    headline: 'Fitness sticks when it\'s social',
    subheadline: 'Turning solo workouts into community adventures',
    cta1: 'See Cohort Data',
    cta2: 'Investor Call'
  },
  distribution: {
    headline: 'Communities that work out... keep working',
    subheadline: 'Self-perpetuating fitness networks with viral mechanics',
    cta1: 'Partnership Intro',
    cta2: 'Investor Deck'
  }
};

export const metricsData = [
  {
    label: 'DAU/WAU Ratio',
    value: 28,
    suffix: '%',
    trend: 'up' as MetricsTrend,
    description: 'Daily Active Users',
    icon: 'TrendingUp'
  },
  {
    label: '4-Week Retention',
    value: 67,
    suffix: '%',
    trend: 'up' as MetricsTrend,
    description: 'Month-1 Retention',
    benchmark: 'vs 23% industry avg'
  },
  {
    label: 'Challenge Completion',
    value: 84,
    suffix: '%',
    trend: 'stable' as MetricsTrend,
    description: 'Completion Rate',
    benchmark: 'vs 45% industry avg'
  },
  {
    label: 'Waitlist Growth',
    value: 100,
    suffix: '+',
    trend: 'up' as MetricsTrend,
    description: 'Users signed up',
    growth: '15% monthly growth'
  }
];

export const problemData = {
  stat: '80%',
  statLabel: 'of fitness apps lose users within 3 weeks',
  insight: 'Solo fitness fails. Community fitness thrives.',
  visualization: '/assets/icons/retention-curve-comparison.svg'
};

export const solutionData = [
  {
    title: 'Group Challenges',
    description: 'Accountability + fun through shared goals',
    icon: 'Users'
  },
  {
    title: 'Social Dynamics',
    description: 'Peer motivation + healthy competition',
    icon: 'Zap'
  },
  {
    title: 'Micro-Rewards',
    description: 'Behavioral reinforcement loops',
    icon: 'Award'
  }
];

export const milestones = [
  {
    date: 'Oct 2024',
    title: 'Discord Beta Launch',
    metric: '50+ early adopters',
    status: 'completed' as MilestoneStatus
  },
  {
    date: 'Jan/Feb 2025',
    title: 'iOS Alpha Launch',
    metric: '100+ users, 67% retention',
    status: 'in-progress' as MilestoneStatus
  },
  {
    date: 'Summer 2025',
    title: 'App Store Launch',
    metric: '1,000+ projected users',
    status: 'planned' as MilestoneStatus
  }
];

export const businessModel = [
  {
    title: 'Premium Communities',
    description:
      'Subscription access unlocks advanced accountability loops, analytics, and drop-in coaching for high-intent groups.',
    details: ['$12/mo per premium group', 'Campus & creator upsells', 'Recurring retention levers']
  },
  {
    title: 'Corporate Wellness',
    description:
      'Team-based challenges and health engagement dashboards sold to employers looking for sticky wellness perks.',
    details: ['$8-$12 per employee per month', 'Quarterly expansion targets', 'Pipeline of 6 pilot partners']
  },
  {
    title: 'Creator Partnerships',
    description:
      'Revenue share on paid challenges, branded drops, and audience insights for fitness creators.',
    details: ['10-20% rev share', 'Customizable reward engines', 'Upsell for data-rich insights']
  }
];

export const founders = [
  {
    name: 'Ethan Noblesala',
    title: 'Co-Founder & CEO',
    bio:
      'Former head of community at a top 10 wellness app, scaled ambassador programs across 40 campuses, and led partnerships with Nike Run Club communities.',
    image: '/assets/images/ethan-headshot.svg',
    linkedin: 'https://linkedin.com/in/ethan-noblesala'
  },
  {
    name: 'Eric Chen',
    title: 'Co-Founder & CTO',
    bio:
      'Full-stack engineer previously at Strava and Peloton, built social graph infrastructure and scalable analytics powering millions of activity logs.',
    image: '/assets/images/eric-headshot.svg',
    linkedin: 'https://linkedin.com/in/eric-chen'
  }
];

export const navLinks = [
  { label: 'Metrics', href: '#metrics' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Traction', href: '#traction' },
  { label: 'Model', href: '#business-model' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' }
];

export const waitlistProof = [
  'Active Discord communities spinning up 2-3 challenges weekly',
  'Campus launch ambassadors lined up across 12 universities',
  'Pipeline of corporate wellness pilots targeting Q3 2025'
];
