import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-primary-blue/10 text-primary-blue border border-primary-blue/20',
  success: 'bg-energy-green/10 text-energy-green border border-energy-green/30',
  warning: 'bg-bold-red/10 text-bold-red border border-bold-red/30',
  info: 'bg-primary-blue/10 text-primary-blue border border-primary-blue/30'
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = ''
}) => (
  <span
    className={`inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full ${
      variantStyles[variant]
    } ${className}`}
  >
    {children}
  </span>
);
