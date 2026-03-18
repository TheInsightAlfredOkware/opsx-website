import React from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'white'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: React.ReactNode
  href?: string
  to?: string
  external?: boolean
  fullWidth?: boolean
  icon?: React.ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-ops-teal hover:bg-ops-teal-dark text-white shadow-sm hover:shadow-teal-glow hover:-translate-y-0.5',
  secondary:
    'bg-transparent border-2 border-ops-teal text-ops-teal hover:bg-ops-teal hover:text-white hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-ops-teal hover:bg-ops-teal-light hover:-translate-y-0.5',
  white:
    'bg-white text-ops-text hover:bg-ops-surface-alt shadow-sm hover:shadow-card-hover hover:-translate-y-0.5',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  to,
  external,
  fullWidth = false,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ops-teal focus:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`

  if (to) {
    return (
      <Link to={to} className={base}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={base}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button className={base} {...props}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  )
}
