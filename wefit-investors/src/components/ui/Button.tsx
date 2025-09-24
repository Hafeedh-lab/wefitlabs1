import { Loader2 } from 'lucide-react'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, Ref } from 'react'

type ButtonVariants = 'primary' | 'secondary' | 'ghost'

type CommonProps = {
  variant?: ButtonVariants
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
  }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantClasses: Record<ButtonVariants, string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  ghost: 'btn border border-white/10 bg-transparent text-white hover:bg-white/10',
}

const MotionButton = motion.button
const MotionAnchor = motion.a

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({
    as = 'button',
    variant = 'primary',
    icon,
    iconPosition = 'left',
    loading = false,
    className = '',
    children,
    ...rest
  }, ref) => {
    const content = (
      <span className="flex items-center gap-2">
        {icon && iconPosition === 'left' && <span className="flex h-5 w-5 items-center justify-center">{icon}</span>}
        <span className="whitespace-nowrap">{children}</span>
        {(loading || (icon && iconPosition === 'right')) && (
          <span className="flex h-5 w-5 items-center justify-center">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
          </span>
        )}
      </span>
    )

    if (as === 'a') {
      return (
        <MotionAnchor
          ref={ref as Ref<HTMLAnchorElement>}
          className={`${variantClasses[variant]} ${className}`.trim()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </MotionAnchor>
      )
    }

    return (
      <MotionButton
        ref={ref as Ref<HTMLButtonElement>}
        className={`${variantClasses[variant]} ${className}`.trim()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading || rest.disabled}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </MotionButton>
    )
  },
)

Button.displayName = 'Button'
