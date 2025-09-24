import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';
import { useDemoStore } from '../../store/demoStore';
import { capitalize } from '../../utils/helpers';

interface DemoHeaderProps {
  screenTitle: string;
  step: number;
  totalSteps: number;
}

export const DemoHeader: React.FC<DemoHeaderProps> = ({ screenTitle, step, totalSteps }) => {
  const { currentPersona, prevScreen, resetDemo, getTimeSpent } = useDemoStore();

  return (
    <header className="border-b border-gray-800 bg-dark-charcoal/95 sticky top-0 z-50 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-white">
              weFit Labs <span className="text-primary-blue">Demo</span>
            </h1>
            {currentPersona && (
              <span className="text-sm text-cool-gray hidden md:inline">
                • {capitalize(currentPersona)} View
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {step > 0 && (
              <Button variant="outline" size="sm" onClick={prevScreen}>
                <ArrowLeft size={16} />
                Back
              </Button>
            )}
            <div className="flex items-center gap-2 text-sm text-cool-gray">
              <Clock size={16} />
              {getTimeSpent()}s
            </div>
            <Button variant="outline" size="sm" onClick={resetDemo}>
              <RotateCcw size={16} />
              Reset
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-cool-gray">{screenTitle}</span>
            <span className="text-sm text-cool-gray">
              {Math.min(step + 1, totalSteps)}/{totalSteps}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-primary-blue h-2 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${((Math.min(step + 1, totalSteps)) / totalSteps) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};
