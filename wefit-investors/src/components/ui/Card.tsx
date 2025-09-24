import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  interactive?: boolean
}

export const Card = ({ children, className = '', interactive = true }: CardProps) => (
  <div
    className={`card-surface ${interactive ? 'card-hoverable' : ''} ${className}`.trim()}
  >
    {children}
  </div>
)
