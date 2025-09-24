import React, { Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DemoHeader } from './components/layout/DemoHeader';
import { DemoFooter } from './components/layout/DemoFooter';
import { useDemoStore } from './store/demoStore';

const PersonaSelection = React.lazy(() =>
  import('./components/screens/PersonaSelection').then((module) => ({ default: module.PersonaSelection }))
);
const ChallengesDashboard = React.lazy(() =>
  import('./components/screens/ChallengesDashboard').then((module) => ({ default: module.ChallengesDashboard }))
);
const GroupView = React.lazy(() =>
  import('./components/screens/GroupView').then((module) => ({ default: module.GroupView }))
);
const InsightsDashboard = React.lazy(() =>
  import('./components/screens/InsightsDashboard').then((module) => ({ default: module.InsightsDashboard }))
);

const screens = [PersonaSelection, ChallengesDashboard, GroupView, InsightsDashboard];
const screenTitles = [
  'Choose Your Perspective',
  'Challenges Dashboard',
  'Community & Team Engagement',
  'Analytics & Investor Insights'
];

function App() {
  const { currentScreen } = useDemoStore();
  const totalScreens = screens.length;
  const ScreenComponent = screens[currentScreen] ?? PersonaSelection;
  const title = screenTitles[currentScreen] ?? screenTitles[0];

  return (
    <div className="min-h-screen bg-dark-charcoal text-light-white">
      <DemoHeader screenTitle={title} step={currentScreen} totalSteps={totalScreens} />
      <main className="min-h-[calc(100vh-160px)]">
        <Suspense
          fallback={
            <div className="container mx-auto py-20 text-center text-cool-gray">
              Loading immersive demo experience...
            </div>
          }
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ScreenComponent />
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
      <DemoFooter step={currentScreen} totalSteps={totalScreens} />
    </div>
  );
}

export default App;
