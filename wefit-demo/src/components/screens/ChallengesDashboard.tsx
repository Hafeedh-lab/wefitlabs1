import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Calendar, Users as UsersIcon, Trophy, Target, Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProgressBar } from '../ui/ProgressBar';
import { Badge } from '../ui/Badge';
import { useDemoStore } from '../../store/demoStore';
import { getPersonaChallenges } from '../../data/challenges';
import { trackDemoEvent } from '../../utils/analytics';

const headerCopy = {
  member: {
    headline: 'Welcome back, Alex! 🔥 7-day streak',
    subline: 'You are 160 XP away from your next milestone badge.',
    actionLabel: 'Find Your Next Challenge'
  },
  admin: {
    headline: 'Stanford Fitness Community | 247 active members',
    subline: 'Engagement up 12% this week. Two challenges need attention.',
    actionLabel: 'Create Challenge'
  },
  corporate: {
    headline: 'TechCorp Wellness Dashboard | 1,247 employees enrolled',
    subline: 'Participation up 8% vs last month. Highlight success in all-hands.',
    actionLabel: 'Launch Team Challenge'
  }
} as const;

export const ChallengesDashboard: React.FC = () => {
  const { currentPersona, incrementInteractions, nextScreen } = useDemoStore();

  const mockChallenges = React.useMemo(() => getPersonaChallenges(currentPersona), [currentPersona]);

  const handleInteraction = (label: string) => {
    incrementInteractions();
    trackDemoEvent('challenges_interaction', { label, persona: currentPersona });
  };

  const copy = currentPersona ? headerCopy[currentPersona] : null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="container mx-auto py-8"
    >
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {copy?.headline ?? 'Choose a persona to explore challenges built for them'}
            </h1>
            <p className="text-cool-gray">
              {copy?.subline ?? 'Select a persona to understand how weFit motivates participation.'}
            </p>
          </div>
          {currentPersona && (
            <Button onClick={() => handleInteraction(copy?.actionLabel ?? 'primary-action')}>
              <Sparkles size={18} />
              {copy?.actionLabel}
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center gap-2 bg-dark-charcoal border border-gray-700 p-2 rounded-lg flex-1 min-w-[240px]">
            <Search size={16} className="text-cool-gray" />
            <input
              type="text"
              placeholder="Search challenges..."
              className="bg-transparent text-white placeholder-cool-gray outline-none flex-1"
              onFocus={() => handleInteraction('search-focus')}
            />
          </div>
          <Button variant="outline" size="sm" onClick={() => handleInteraction('filter-click')}>
            <Filter size={16} />
            Filter
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleInteraction('duration-filter')}>
            <Calendar size={16} />
            Duration
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {mockChallenges.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hoverable onClick={() => handleInteraction(`challenge-${challenge.id}`)}>
              <div className="text-dark-charcoal">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{challenge.title}</h3>
                  <Badge variant={challenge.status === 'joined' ? 'success' : 'default'}>
                    {challenge.status === 'joined' ? 'Joined' : 'Available'}
                  </Badge>
                </div>

                <p className="text-cool-gray mb-4">{challenge.description}</p>

                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-cool-gray">
                  <div className="flex items-center gap-1">
                    <UsersIcon size={16} />
                    {challenge.participants} participants
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {challenge.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Target size={16} />
                    {Math.floor(challenge.completionRate * 100)}% completion
                  </div>
                </div>

                {typeof challenge.progress === 'number' && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-cool-gray">Progress</span>
                      <span className="text-sm font-semibold">{challenge.progress}%</span>
                    </div>
                    <ProgressBar progress={challenge.progress} />
                  </div>
                )}

                {challenge.reward && (
                  <div className="mb-4 p-3 bg-energy-green/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Trophy size={16} className="text-energy-green" />
                      <span className="text-sm text-energy-green">{challenge.reward}</span>
                    </div>
                  </div>
                )}

                <Button
                  className="w-full"
                  variant={challenge.status === 'joined' ? 'secondary' : 'primary'}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleInteraction(`cta-${challenge.id}`);
                  }}
                >
                  {challenge.status === 'joined' ? 'Continue Challenge' : 'Join Challenge'}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {currentPersona && (
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-cool-gray text-sm max-w-2xl">
            weFit personalizes discovery based on social data, streak momentum, and wellness goals. Challenges refresh
            weekly, and admins can promote programs in two clicks.
          </p>
          <Button variant="secondary" onClick={() => nextScreen()}>
            Continue to Community View
          </Button>
        </div>
      )}

      {!currentPersona && (
        <div className="mt-10">
          <Card className="bg-dark-charcoal border border-gray-700 text-light-white">
            <h3 className="text-lg font-semibold mb-2">Why challenges matter</h3>
            <p className="text-sm text-cool-gray">
              Investors see 3.4x higher retention when members participate with friends. Pick a persona to explore the
              tailored journey.
            </p>
          </Card>
        </div>
      )}
    </motion.div>
  );
};
