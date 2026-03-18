import React from 'react'

type BadgeVariant = 'teal' | 'gray' | 'dark'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  teal: 'bg-ops-teal-subtle text-ops-teal-dark border border-ops-teal/20',
  gray: 'bg-ops-surface-alt text-ops-text-secondary border border-ops-border',
  dark: 'bg-ops-dark text-ops-dark-text border border-ops-dark-border',
}

export default function Badge({ children, variant = 'teal', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
