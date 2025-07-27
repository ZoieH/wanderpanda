import React from 'react';
import { cn } from '../../utils/cn';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  size = 'md', 
  className,
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'logo-sm',
    md: 'logo',
    lg: 'logo-lg',
  };

  const textColor = variant === 'white' ? 'text-white' : 'text-gray-800';

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      {/* Replace with your actual logo image */}
      {/* <img 
        src={variant === 'white' ? '/images/logo-white.svg' : '/images/logo.svg'} 
        alt="Wander Panda" 
        className={sizeClasses[size]}
      /> */}
      
      {/* Fallback text logo - remove when you have your logo image */}
      {showText && (
        <div className={cn('logo-text text-2xl font-bold', textColor)}>
          <span className="font-secondary">wander</span><span className="text-primary-500 font-accent">panda</span>
        </div>
      )}
    </div>
  );
};

export default Logo;