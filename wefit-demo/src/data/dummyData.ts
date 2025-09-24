import type { User, Challenge, LeaderboardEntry, AnalyticsData } from '../types';

export const users: Record<string, User> = {
  alex: {
    id: 'alex',
    name: 'Alex Chen',
    avatar: 'https://i.pravatar.cc/150?img=12',
    xp: 2340,
    streak: 7,
    completedChallenges: 8,
    friends: 23
  },
  sarah: {
    id: 'sarah',
    name: 'Sarah Martinez',
    avatar: 'https://i.pravatar.cc/150?img=32',
    xp: 3450,
    streak: 12,
    completedChallenges: 15,
    friends: 45
  }
};

export const challenges: Challenge[] = [
  {
    id: 'morning-run',
    title: '30-Day Morning Run Challenge',
    description: 'Start your day with energy! Run for at least 20 minutes every morning.',
    participants: 847,
    duration: '30 days',
    category: 'running',
    difficulty: 'intermediate',
    completionRate: 0.73,
    progress: 7,
    reward: '"Early Bird" badge + 500 XP',
    status: 'available'
  },
  {
    id: 'team-strength',
    title: 'Team Strength September',
    description: 'Build strength together with your team! Full-body circuits and coaching tips.',
    participants: 156,
    duration: '4 weeks',
    category: 'strength',
    difficulty: 'intermediate',
    completionRate: 0.84,
    progress: 60,
    status: 'joined'
  },
  {
    id: 'mindful-meals',
    title: 'Mindful Meals Week',
    description: 'Log and track nutritious meals for better health.',
    participants: 234,
    duration: '1 week',
    category: 'nutrition',
    difficulty: 'beginner',
    completionRate: 0.89,
    progress: 57,
    status: 'joined'
  },
  {
    id: '5k-training',
    title: '5K Training Program',
    description: 'Structured 8-week program to run your first 5K.',
    participants: 92,
    duration: '8 weeks',
    category: 'running',
    difficulty: 'beginner',
    completionRate: 0.78,
    progress: 25,
    status: 'available'
  }
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, username: 'Mike_Runner23', progress: 143, streak: 6 },
  { rank: 2, username: 'Sarah_Climbs', progress: 127, streak: 5 },
  { rank: 3, username: 'Alex_Fit', progress: 119, streak: 7 },
  { rank: 4, username: 'Jenny_Steps', progress: 98, streak: 4 },
  { rank: 5, username: 'Tom_Tower', progress: 89, streak: 3 },
  { rank: 6, username: 'Lisa_Strong', progress: 82, streak: 2 },
  { rank: 7, username: 'David_Fast', progress: 76, streak: 5 },
  { rank: 8, username: 'YOU (Alex)', progress: 67, streak: 7 },
  { rank: 9, username: 'Emma_Power', progress: 54, streak: 3 },
  { rank: 10, username: 'Jake_Climb', progress: 48, streak: 2 }
];

export const analyticsData: AnalyticsData = {
  retention: {
    month1: 0.84,
    month3: 0.67,
    month6: 0.52,
    industryBenchmark: [0.23, 0.12, 0.08, 0.05, 0.03]
  },
  engagement: {
    weeklyActive: 0.67,
    avgSessionTime: 8.5,
    interactionsPerSession: 4.3
  },
  social: {
    viralCoefficient: 1.4,
    friendInviteRate: 0.45,
    cheerCommentsPerWeek: 89
  }
};
