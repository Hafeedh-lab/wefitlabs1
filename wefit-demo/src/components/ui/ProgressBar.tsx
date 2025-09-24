import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  color?: string;
  height?: number;
  showLabel?: boolean;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = '#2ECC71',
  height = 8,
  showLabel = true,
  animated = true
}) => {
  return (
    <div className="w-full">
      <div
        className="bg-gray-200 rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={animated ? { width: '0%' } : { width: `${progress}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      {showLabel && (
        <div className="text-sm text-cool-gray mt-1 text-right">
          {progress}%
        </div>
      )}
    </div>
  );
};
