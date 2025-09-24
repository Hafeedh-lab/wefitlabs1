import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useDemoStore } from '../../store/demoStore';
import { trackDemoEvent } from '../../utils/analytics';

interface DemoFooterProps {
  step: number;
  totalSteps: number;
}

export const DemoFooter: React.FC<DemoFooterProps> = ({ step, totalSteps }) => {
  const { nextScreen, currentPersona, isCompleted, getTimeSpent, resetDemo } = useDemoStore();
  const isFinalStep = step >= totalSteps - 1;

  const handlePrimaryCta = () => {
    trackDemoEvent('footer_request_demo', { persona: currentPersona, step });
  };

  const handleNext = () => {
    nextScreen();
    trackDemoEvent('footer_next', { step, persona: currentPersona });
  };

  return (
    <footer className="border-t border-gray-800 bg-dark-charcoal/95 py-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-cool-gray text-center sm:text-left">
            © 2024 weFit Labs • Interactive Demo
            {isCompleted && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-energy-green font-medium block sm:inline sm:ml-2"
              >
                ✨ Completed in {getTimeSpent()}s
              </motion.span>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {currentPersona && !isFinalStep && (
              <Button variant="secondary" className="w-full" onClick={handleNext}>
                Next Screen
              </Button>
            )}
            {isFinalStep && (
              <Button variant="outline" className="w-full" onClick={resetDemo}>
                Replay Demo
              </Button>
            )}
            <Button className="w-full" onClick={handlePrimaryCta}>
              Request Full Demo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
