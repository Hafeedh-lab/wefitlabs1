import type { ChangeEventHandler, HTMLInputTypeAttribute, TextareaHTMLAttributes } from 'react'
import { useState } from 'react'

interface InputProps {
  id: string
  label: string
  type?: HTMLInputTypeAttribute
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  placeholder?: string
  required?: boolean
  error?: string
  multiline?: boolean
}

export const Input = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  error,
  multiline = false,
}: InputProps) => {
  const [touched, setTouched] = useState(false)

  const handleBlur = () => setTouched(true)

  const hasError = Boolean(error && (touched || value))

  const inputClasses = `w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white shadow-inner shadow-black/10 transition focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/40`

  const sharedProps = {
    id,
    onBlur: handleBlur,
    onChange,
    placeholder,
    required,
    value,
  }

  return (
    <label className="flex w-full flex-col gap-2 text-sm text-white/80">
      <span className="flex items-center justify-between">
        <span>{label}</span>
        {required && <span className="text-xs uppercase tracking-widest text-primary-blue/80">Required</span>}
      </span>
      {multiline ? (
        <textarea className={`${inputClasses} min-h-[120px] resize-none`} {...(sharedProps as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input className={inputClasses} type={type} {...sharedProps} />
      )}
      {hasError && <span className="text-xs font-medium text-bold-red">{error}</span>}
    </label>
  )
}
