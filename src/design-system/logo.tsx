import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  letterSpacing?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  size = 'md',
  letterSpacing = '-0.04'
}) => {
  const sizes = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };

  const iconSizes = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10'
  };

  const colors = {
    light: {
      text: 'text-gray-900',
      accent: 'text-[#2563EB]'
    },
    dark: {
      text: 'text-white',
      accent: 'text-[#2563EB]'
    }
  };

  return (
    <div className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/354294ba-c547-4789-ba94-b7c69f3c10d1.png" 
        alt="MindflowOS Logo" 
        className={`${iconSizes[size]} w-auto`}
      />
      <span 
        className={`${sizes[size]} font-semibold ${colors[variant].text} font-space-grotesk`}
        style={{ letterSpacing: `${letterSpacing}em` }}
      >
        Mind<span className={colors[variant].accent}>flow</span>OS
      </span>
    </div>
  );
};