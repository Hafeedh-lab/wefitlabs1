import type { Challenge, PersonaType } from '../types';
import { challenges } from './dummyData';

const memberAdjustments = (challenge: Challenge): Challenge => challenge;

const adminAdjustments = (challenge: Challenge): Challenge => ({
  ...challenge,
  participants: Math.floor(challenge.participants * 0.3),
  title: challenge.title.replace('Challenge', 'Community Challenge')
});

const corporateAdjustments = (challenge: Challenge): Challenge => ({
  ...challenge,
  participants: Math.floor(challenge.participants * 2),
  title: challenge.title.replace('Challenge', 'Employee Wellness')
});

export const getPersonaChallenges = (persona: PersonaType | null): Challenge[] => {
  switch (persona) {
    case 'admin':
      return challenges.map(adminAdjustments);
    case 'corporate':
      return challenges.map(corporateAdjustments);
    case 'member':
    default:
      return challenges.map(memberAdjustments);
  }
};
