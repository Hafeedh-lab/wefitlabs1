import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'font-poppins font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2';

  const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-primary-blue text-white hover:bg-blue-600 active:bg-blue-700',
    secondary: 'bg-energy-green text-white hover:bg-green-600 active:bg-green-700',
    outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
  };

  const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />}
      <span>{children}</span>
    </motion.button>
  );
};
