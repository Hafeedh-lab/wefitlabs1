export type PersonaType = 'member' | 'admin' | 'corporate';

export interface User {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  streak: number;
  completedChallenges: number;
  friends: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  participants: number;
  duration: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completionRate: number;
  progress?: number;
  reward?: string;
  status: 'available' | 'joined' | 'completed';
}

export interface LeaderboardEntry {
  rank: number;
  username: string;
  progress: number;
  streak: number;
  avatar?: string;
}

export interface AnalyticsData {
  retention: {
    month1: number;
    month3: number;
    month6: number;
    industryBenchmark: number[];
  };
  engagement: {
    weeklyActive: number;
    avgSessionTime: number;
    interactionsPerSession: number;
  };
  social: {
    viralCoefficient: number;
    friendInviteRate: number;
    cheerCommentsPerWeek: number;
  };
}
