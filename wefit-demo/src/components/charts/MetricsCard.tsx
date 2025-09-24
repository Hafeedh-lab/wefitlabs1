import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Card } from '../ui/Card';

interface MetricData {
  title: string;
  value: string;
  change: string;
  benchmark: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

interface MetricsCardProps {
  metric: MetricData;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({ metric }) => {
  const { title, value, change, benchmark, icon: Icon, color, bgColor } = metric;

  return (
    <Card>
      <div className="text-dark-charcoal">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-2 rounded-lg ${bgColor}`}>
            <Icon size={20} className={color} />
          </div>
          <span className="text-sm text-energy-green font-medium">{change}</span>
        </div>

        <div className="mb-2">
          <motion.div
            className="text-2xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {value}
          </motion.div>
          <div className="text-sm font-medium">{title}</div>
        </div>

        <div className="text-xs text-cool-gray">{benchmark}</div>
      </div>
    </Card>
  );
};
