import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonSize = 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-blue focus-visible:ring-offset-dark-charcoal disabled:opacity-60 disabled:cursor-not-allowed';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-blue text-white hover:bg-[#1a5ce6] shadow-card hover:shadow-card-hover',
  secondary:
    'bg-transparent border border-white/20 text-white hover:border-primary-blue/60 hover:text-primary-blue backdrop-blur-sm',
  ghost: 'bg-transparent text-white hover:text-primary-blue'
};

const sizeStyles: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm md:text-base min-h-[44px]',
  lg: 'px-6 py-3 text-base md:text-lg min-h-[48px]'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
