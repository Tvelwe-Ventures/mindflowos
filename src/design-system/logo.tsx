import React from 'react';
import { Brain } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  letterSpacing?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  size = 'md',
  letterSpacing = '-0.02'
}) => {
  const sizes = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };

  const iconSizes = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  };

  const colors = {
    light: {
      icon: 'text-blue-600',
      text: 'text-gray-900',
      accent: 'text-blue-600'
    },
    dark: {
      icon: 'text-blue-400',
      text: 'text-white',
      accent: 'text-blue-400'
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Brain className={`${iconSizes[size]} ${colors[variant].icon}`} />
      <span 
        className={`${sizes[size]} font-semibold ${colors[variant].text}`}
        style={{ letterSpacing: `${letterSpacing}em` }}
      >
        Mind<span className={colors[variant].accent}>flow</span>OS
      </span>
    </div>
  );
};