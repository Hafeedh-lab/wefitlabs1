import React from 'react';
import { motion } from 'framer-motion';
import { User as UserIcon, Building, Users } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useDemoStore } from '../../store/demoStore';
import type { PersonaType } from '../../types';
import { trackDemoEvent } from '../../utils/analytics';

const personas = [
  {
    type: 'member' as PersonaType,
    icon: UserIcon,
    title: 'Fitness Member',
    description: 'Join challenges, compete with friends, track progress',
    features: ['Personal Progress', 'Social Leaderboards', 'Achievement System'],
    color: 'from-blue-500 to-purple-600'
  },
  {
    type: 'admin' as PersonaType,
    icon: Users,
    title: 'Group Admin',
    description: 'Manage communities, create challenges, boost engagement',
    features: ['Community Management', 'Challenge Creation', 'Member Analytics'],
    color: 'from-green-500 to-teal-600'
  },
  {
    type: 'corporate' as PersonaType,
    icon: Building,
    title: 'Corporate Wellness',
    description: 'Monitor employee health, analyze participation, measure ROI',
    features: ['Employee Metrics', 'Wellness ROI', 'Department Analytics'],
    color: 'from-orange-500 to-red-600'
  }
];

export const PersonaSelection: React.FC = () => {
  const setPersona = useDemoStore((state) => state.setPersona);

  const handleSelect = (persona: PersonaType) => {
    setPersona(persona);
    trackDemoEvent('persona_selected', { persona });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
          Experience weFit from <span className="text-primary-blue">different perspectives</span>
        </h1>
        <p className="text-xl text-cool-gray max-w-2xl mx-auto">
          Choose your role to see how weFit creates lasting engagement across different user types
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {personas.map((persona, index) => (
          <motion.div
            key={persona.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hoverable onClick={() => handleSelect(persona.type)}>
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${persona.color} flex items-center justify-center`}>
                  <persona.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-dark-charcoal mb-2">
                  {persona.title}
                </h3>
                <p className="text-cool-gray mb-6">
                  {persona.description}
                </p>
                <ul className="text-sm text-cool-gray mb-6 space-y-2">
                  {persona.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-energy-green rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button onClick={() => handleSelect(persona.type)} className="w-full">
                  Experience as {persona.title.split(' ')[0]}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-cool-gray text-sm">
          Demo takes approximately 60 seconds • No signup required
        </p>
        <p className="text-cool-gray text-sm mt-2">
          Prefer to skip ahead? Use the controls above to jump screens anytime.
        </p>
      </div>
    </motion.div>
  );
};
