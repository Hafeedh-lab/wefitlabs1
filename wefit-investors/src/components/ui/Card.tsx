import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export const Card = ({ children, className, hover = true, ...props }: CardProps) => {
  return (
    <motion.div
      className={clsx('card-surface p-6 md:p-8 transition-shadow', className)}
      whileHover={hover ? { translateY: -4 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};
