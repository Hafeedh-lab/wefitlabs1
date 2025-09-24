import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = ({ label, error, className, id, required, ...props }: InputProps) => {
  const inputId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, '-');

  return (
    <label className="flex flex-col gap-2 text-sm font-medium" htmlFor={inputId}>
      <span className="text-white/80">{label}{required && <span className="text-bold-red">*</span>}</span>
      <input
        id={inputId}
        required={required}
        className={clsx(
          'rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/40',
          error && 'border-bold-red focus:border-bold-red focus:ring-bold-red/40',
          className
        )}
        {...props}
      />
      {error && <span className="text-xs font-normal text-bold-red">{error}</span>}
    </label>
  );
};
