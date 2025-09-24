import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users as UsersIcon, Target, Heart, Download, CalendarClock } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { RetentionChart } from '../charts/RetentionChart';
import { MetricsCard } from '../charts/MetricsCard';
import { useDemoStore } from '../../store/demoStore';
import { getAnalyticsData, personaInsightCopy } from '../../data/analytics';
import { trackDemoEvent } from '../../utils/analytics';

export const InsightsDashboard: React.FC = () => {
  const { currentPersona, markCompleted, getTimeSpent } = useDemoStore();
  const analytics = React.useMemo(() => getAnalyticsData(), []);

  React.useEffect(() => {
    markCompleted();
    trackDemoEvent('insights_loaded', { persona: currentPersona });
  }, [markCompleted, currentPersona]);

  const keyMetrics = [
    {
      title: 'Completion Rate',
      value: '78%',
      change: '+12%',
      benchmark: 'vs 45% industry avg',
      icon: Target,
      color: 'text-energy-green',
      bgColor: 'bg-energy-green/10'
    },
    {
      title: 'Weekly Active Rate',
      value: '67%',
      change: '+23%',
      benchmark: 'vs 23% solo fitness apps',
      icon: UsersIcon,
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10'
    },
    {
      title: 'Social Engagement',
      value: '4.3',
      change: '+31%',
      benchmark: 'interactions per session',
      icon: Heart,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10'
    },
    {
      title: 'Viral Coefficient',
      value: '1.4',
      change: '+18%',
      benchmark: 'friend invites per user',
      icon: TrendingUp,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const personaInsights = currentPersona ? personaInsightCopy[currentPersona] : null;

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Analytics Dashboard</h1>
        <p className="text-cool-gray">Key insights and performance metrics for investors</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {keyMetrics.map((metric, index) => (
          <motion.div key={metric.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
            <MetricsCard metric={metric} />
          </motion.div>
        ))}
      </div>

      <Card className="mb-8">
        <div className="text-dark-charcoal">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">User Retention Comparison</h2>
            <Badge variant="info">Social features vs industry</Badge>
          </div>
          <RetentionChart data={analytics.retention} />
          <div className="mt-4 p-4 bg-energy-green/10 rounded-lg">
            <p className="text-energy-green font-medium">🎯 Social features drive 3.4x higher retention vs solo fitness apps</p>
          </div>
        </div>
      </Card>

      {personaInsights && (
        <Card className="mb-8">
          <div className="text-dark-charcoal">
            <h2 className="text-xl font-semibold mb-6">{personaInsights.title}</h2>
            <div className="space-y-3">
              {personaInsights.insights.map((insight, index) => (
                <motion.div
                  key={insight}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{insight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>
      )}

      <Card className="mb-8">
        <div className="text-dark-charcoal">
          <h2 className="text-xl font-semibold mb-4">Investor Snapshot</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-cool-gray">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-dark-charcoal mb-1">Engagement moat</h3>
              <p>Community features deliver 4.3 interactions per session with 89 cheer comments weekly.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-dark-charcoal mb-1">Revenue signal</h3>
              <p>Corporate pilots average $18 per employee per month with 73% participation.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-dark-charcoal mb-1">Growth engine</h3>
              <p>Viral coefficient of 1.4 means every active user invites 1.4 new members.</p>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="text-center text-dark-charcoal">
          <h2 className="text-xl font-semibold mb-4">Demo complete! ⏱️ Time spent: {getTimeSpent()}s</h2>
          <p className="text-cool-gray mb-6">
            Ready to see the full platform and discuss partnership opportunities?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => trackDemoEvent('cta_request_demo', { persona: currentPersona })}>
              <CalendarClock size={20} />
              Request Full Product Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => trackDemoEvent('cta_schedule_meeting', { persona: currentPersona })}
            >
              <Download size={20} />
              Schedule Investor Meeting
            </Button>
          </div>
          <p className="text-sm text-cool-gray mt-4">Or email us directly: investors@wefitlabs.com</p>
        </div>
      </Card>
    </motion.div>
  );
};
