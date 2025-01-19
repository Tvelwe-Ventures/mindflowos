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

  return (
    <div className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/de1f185a-ffc5-43ec-9b47-07e182ea0a82.png" 
        alt="Mappen Logo" 
        className={`${iconSizes[size]} w-auto`}
      />
      <span 
        className={`${sizes[size]} font-semibold font-space-grotesk`}
        style={{ 
          letterSpacing: `${letterSpacing}em`,
          color: '#6E59A5'
        }}
      >
        Mappen
      </span>
    </div>
  );
};