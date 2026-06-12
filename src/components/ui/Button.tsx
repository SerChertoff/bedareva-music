import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'outline-light';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-blue text-white border-brand-blue hover:bg-brand-blue-dark hover:border-brand-blue-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/20',
  outline:
    'bg-transparent text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white',
  'outline-light':
    'bg-transparent text-white border-white/60 hover:bg-white/10 hover:border-white',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-[10px] border-2 font-semibold transition-all duration-250 whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
