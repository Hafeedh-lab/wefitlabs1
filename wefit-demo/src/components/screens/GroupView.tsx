import React from 'react';
import { motion } from 'framer-motion';
import {
  Crown,
  Flame,
  MessageCircle,
  Heart,
  Share2,
  Users as UsersIcon,
  LineChart,
  BarChart3,
  Building2,
  PieChart,
  Sparkles,
  ArrowUpRight,
  ClipboardList,
  MailPlus
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProgressBar } from '../ui/ProgressBar';
import { Badge } from '../ui/Badge';
import { useDemoStore } from '../../store/demoStore';
import { leaderboard } from '../../data/dummyData';
import { trackDemoEvent } from '../../utils/analytics';
import { formatNumber } from '../../utils/helpers';

const memberActivity = [
  'Mike_Runner23 just climbed 18 flights! 💪',
  "Sarah_Climbs completed today's goal! 🎯",
  '3 friends are currently active',
  'Alex_Fit shared a progress photo'
];

const adminHighlights = [
  {
    icon: UsersIcon,
    label: 'Active members',
    value: '247',
    trend: '+12 this week'
  },
  {
    icon: Flame,
    label: 'Challenges live',
    value: '4',
    trend: '84% avg completion'
  },
  {
    icon: Sparkles,
    label: 'Member generated',
    value: '12',
    trend: 'New in last 30 days'
  },
  {
    icon: ArrowUpRight,
    label: 'Growth rate',
    value: '+15%',
    trend: 'MoM community joins'
  }
];

const corporateDepartments = [
  { name: 'Engineering', employees: 156, participation: 89, avgSteps: 8340 },
  { name: 'Sales', employees: 87, participation: 76, avgSteps: 7890 },
  { name: 'Marketing', employees: 45, participation: 82, avgSteps: 8120 },
  { name: 'Operations', employees: 78, participation: 68, avgSteps: 6450 }
];

export const GroupView: React.FC = () => {
  const { currentPersona, incrementInteractions, nextScreen } = useDemoStore();

  const handleInteraction = (label: string) => {
    incrementInteractions();
    trackDemoEvent('community_interaction', { label, persona: currentPersona });
  };

  if (currentPersona === 'member') {
    const content = {
      title: 'Stanford Stair Climb Challenge',
      goal: 'Climb 100 flights of stairs this week',
      userProgress: 67,
      userRank: 8,
      totalParticipants: 43,
      daysRemaining: 3
    };

    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="container mx-auto py-8">
        <Card className="mb-8">
          <div className="text-dark-charcoal">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl font-bold mb-2">{content.title}</h1>
                <p className="text-cool-gray">{content.goal}</p>
              </div>
              <Badge variant="success">🔥 Your 7-day streak is boosting your rank!</Badge>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue">{content.userProgress}/100</div>
                <div className="text-sm text-cool-gray">Flights Climbed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-energy-green">#{content.userRank}</div>
                <div className="text-sm text-cool-gray">Your Rank</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">{content.daysRemaining}</div>
                <div className="text-sm text-cool-gray">Days Left</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">{content.totalParticipants}</div>
                <div className="text-sm text-cool-gray">Participants</div>
              </div>
            </div>
            <ProgressBar progress={content.userProgress} />
          </div>
        </Card>

        <Card className="mb-8">
          <div className="text-dark-charcoal">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Crown className="text-yellow-500" />
              Leaderboard
            </h2>
            <div className="space-y-3">
              {leaderboard.slice(0, 8).map((entry, index) => (
                <motion.div
                  key={entry.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    entry.username.includes('YOU')
                      ? 'bg-primary-blue/10 border border-primary-blue'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        entry.rank <= 3 ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {entry.rank}
                    </div>
                    <div>
                      <div className="font-medium">{entry.username}</div>
                      <div className="text-sm text-cool-gray">{entry.progress} flights</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame size={16} className="text-orange-500" />
                    <span className="text-sm font-medium">{entry.streak} days</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <div className="text-dark-charcoal">
            <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {memberActivity.map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-sm">{activity}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleInteraction('activity-cheer')}>
                      <Heart size={14} />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleInteraction('activity-comment')}>
                      <MessageCircle size={14} />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex gap-3 flex-wrap">
              <Button onClick={() => handleInteraction('share-progress')}>Share Progress</Button>
              <Button variant="outline" onClick={() => handleInteraction('challenge-friend')}>
                <Share2 size={16} />
                Challenge Friend
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-10 flex justify-end">
          <Button variant="secondary" onClick={() => nextScreen()}>
            View Impact Analytics
          </Button>
        </div>
      </motion.div>
    );
  }

  if (currentPersona === 'admin') {
    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="container mx-auto py-8">
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {adminHighlights.map((item) => (
            <Card key={item.label} className="bg-light-white">
              <div className="flex items-start justify-between text-dark-charcoal">
                <div>
                  <div className="text-sm text-cool-gray mb-1">{item.label}</div>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="text-xs text-energy-green mt-2">{item.trend}</div>
                </div>
                <div className="p-2 rounded-lg bg-primary-blue/10">
                  <item.icon size={20} className="text-primary-blue" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <div className="text-dark-charcoal">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Community Pulse</h2>
                <Badge variant="info">Last 7 days</Badge>
              </div>
              <div className="space-y-4 text-sm text-cool-gray">
                <div className="flex justify-between">
                  <span>Daily active members</span>
                  <span className="text-white font-semibold">89 (36%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekly retention</span>
                  <span className="text-white font-semibold">84%</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg session time</span>
                  <span className="text-white font-semibold">8.5 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Referral joins</span>
                  <span className="text-white font-semibold">67%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="text-dark-charcoal">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Challenge Management</h2>
                <Button size="sm" onClick={() => handleInteraction('create-challenge')}>
                  <ClipboardList size={16} />
                  Create Challenge
                </Button>
              </div>
              <div className="space-y-4 text-sm text-cool-gray">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-dark-charcoal">Stanford Stair Climb</div>
                    <div>43 participants • 78% completion</div>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => handleInteraction('boost-stair-climb')}>
                    Boost
                  </Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-dark-charcoal">Dorm vs Dorm Olympics</div>
                    <div>8 teams • 124 participants</div>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => handleInteraction('view-leaderboard')}>
                    View Leaderboard
                  </Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-dark-charcoal">Mindful Meals Week</div>
                    <div>Ends in 3 days • 89% completion</div>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => handleInteraction('send-reminder')}>
                    Send Reminder
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-8">
          <div className="text-dark-charcoal">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <MailPlus size={20} className="text-primary-blue" />
                Growth Levers
              </h2>
              <Button variant="secondary" onClick={() => nextScreen()}>
                Review Analytics
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-cool-gray">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-dark-charcoal mb-2">Top acquisition source</h3>
                <p>Friend invitations drive 45% of new joins with a 1.4 viral coefficient.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-dark-charcoal mb-2">Retention insight</h3>
                <p>Members with 2+ social connections have 87% weekly retention.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-dark-charcoal mb-2">Engagement opportunities</h3>
                <p>Weekend participation at 45% suggests opportunity for pop-up events.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-dark-charcoal mb-2">Community sentiment</h3>
                <p>Satisfaction score 4.6/5.0 across in-app NPS surveys.</p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  if (currentPersona === 'corporate') {
    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="container mx-auto py-8">
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="text-dark-charcoal">
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Building2 className="text-primary-blue" />
                TechCorp Wellness Snapshot
              </h2>
              <div className="space-y-3 text-sm text-cool-gray">
                <div className="flex justify-between">
                  <span>Employees enrolled</span>
                  <span className="text-white font-semibold">892 / 1,247</span>
                </div>
                <div className="flex justify-between">
                  <span>Participation rate</span>
                  <span className="text-energy-green font-semibold">73%</span>
                </div>
                <div className="flex justify-between">
                  <span>Healthcare savings (est.)</span>
                  <span className="text-white font-semibold">$47k annually</span>
                </div>
                <div className="flex justify-between">
                  <span>Employee satisfaction</span>
                  <span className="text-white font-semibold">+18%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-2">
            <div className="text-dark-charcoal">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <LineChart className="text-energy-green" />
                Department Participation
              </h2>
              <div className="space-y-4">
                {corporateDepartments.map((dept) => (
                  <div key={dept.name} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <div className="font-semibold text-dark-charcoal">{dept.name}</div>
                        <div className="text-sm text-cool-gray">{dept.employees} employees</div>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-primary-blue font-semibold">{dept.participation}% participating</span>
                        <span className="text-energy-green font-semibold">{formatNumber(dept.avgSteps)} avg steps</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <div className="text-dark-charcoal">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="text-primary-blue" />
                ROI Drivers
              </h2>
              <ul className="space-y-3 text-sm text-cool-gray">
                <li>23% reduction in sick days vs baseline quarter</li>
                <li>Team collaboration score +31% in cross-department projects</li>
                <li>Productivity index up 12% in high-participation teams</li>
                <li>Preferred incentive: recognition over monetary rewards</li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="text-dark-charcoal">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <PieChart className="text-orange-500" />
                Upcoming Initiatives
              </h2>
              <div className="space-y-3 text-sm text-cool-gray">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-dark-charcoal">Q4 Step Challenge</div>
                  <div>2.3M total steps logged • 14 days remaining</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-dark-charcoal">Lunch &amp; Learn Fitness</div>
                  <div>Next session: Desk Yoga tomorrow at 12pm (87% avg attendance)</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-dark-charcoal">Dept vs Dept October</div>
                  <div>4 teams • prize: extra PTO day for winning group</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cool-gray max-w-xl">
            weFit gives HR leaders real-time visibility into wellbeing ROI. Executive-ready exports roll up participation,
            engagement, and cost savings without extra spreadsheets.
          </p>
          <Button variant="secondary" onClick={() => nextScreen()}>
            See Executive Analytics
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="container mx-auto py-8">
      <Card className="bg-dark-charcoal border border-gray-700 text-light-white">
        <h2 className="text-xl font-semibold mb-4">Select a persona to unlock community insights</h2>
        <p className="text-sm text-cool-gray">
          Use the persona cards to view how weFit powers social accountability for members, growth flywheels for admins,
          and ROI tracking for corporate partners.
        </p>
      </Card>
    </motion.div>
  );
};
