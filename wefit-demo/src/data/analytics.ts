import { analyticsData } from './dummyData';
import type { PersonaType } from '../types';

export const personaInsightCopy: Record<PersonaType, { title: string; insights: string[] }> = {
  member: {
    title: 'Your Fitness Journey Insights',
    insights: [
      'Your most active days: Mon, Wed, Fri (87% completion)',
      'Preferred challenge types: Step (67%), Strength (23%)',
      'Social multiplier: 2.3x more likely to complete with friends',
      'Streak impact: +45% completion rate during active streaks'
    ]
  },
  admin: {
    title: 'Community Health Analytics',
    insights: [
      'Member satisfaction: 4.6/5.0 (based on in-app surveys)',
      'Organic growth: 67% of new members join via referrals',
      'Challenge creation: 12 member-generated challenges this month',
      'Viral coefficient: 1.4 (each user brings 1.4 new users)'
    ]
  },
  corporate: {
    title: 'Employee Wellness ROI',
    insights: [
      'Healthcare cost reduction: $47,000/year estimated',
      'Sick days reduction: 23% vs pre-weFit baseline',
      'Employee satisfaction: +18% in wellness surveys',
      'Cross-department connections: +31% collaboration score'
    ]
  }
};

export const getRetentionData = () => analyticsData.retention;
export const getAnalyticsData = () => analyticsData;
