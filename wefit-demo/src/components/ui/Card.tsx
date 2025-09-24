import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  onClick
}) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4, boxShadow: '0 8px 25px rgba(0,0,0,0.15)' } : undefined}
      className={`bg-light-white rounded-lg p-6 shadow-md ${
        hoverable ? 'cursor-pointer' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
