import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'outline-dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center text-decoration-none cursor-pointer transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg border-none',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900 border-none',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-50 border-none',
    outline: 'bg-transparent border border-white text-white hover:bg-white hover:text-gray-800',
    'outline-dark': 'bg-transparent border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
        'rounded-md' // Consistent 6px border radius - applied last to prevent override
      )}
      style={{ borderRadius: '6px' }} // Force 6px border radius with inline style
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;