import React from 'react';
import { cn } from '../../utils/cn';

interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'primary' | 'secondary' | 'white' | 'muted';
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'md', 
  color, 
  className 
}) => {
  const sizeClasses = {
    xs: 'wp-icon-xs',
    sm: 'wp-icon-sm',
    md: 'wp-icon-md',
    lg: 'wp-icon-lg',
    xl: 'wp-icon-xl',
    '2xl': 'wp-icon-2xl',
  };

  const colorClasses = color ? {
    primary: 'wp-icon-primary',
    secondary: 'wp-icon-secondary',
    white: 'wp-icon-white',
    muted: 'wp-icon-muted',
  }[color] : '';

  return (
    <i className={cn(
      'wp-icon',
      `wp-icon-${name}`,
      sizeClasses[size],
      colorClasses,
      className
    )} />
  );
};

export default Icon;