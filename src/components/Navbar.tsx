import React, { useState, useEffect } from 'react';
import { AuthModal } from './AuthModal';
import { ThemeToggle } from './theme/ThemeToggle';
import { ThemeProvider } from 'next-themes';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/57b181b3-d8a0-49b7-b7be-89e917d3918b.png" 
                alt="Mappen Logo" 
                className="h-6 w-auto" // Reduced from h-8 to h-6
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button className="text-foreground/80 hover:text-foreground">Features</button>
              <button className="text-foreground/80 hover:text-foreground">Solutions</button>
              <button className="text-foreground/80 hover:text-foreground">Pricing</button>
              <ThemeToggle />
              <button 
                onClick={() => setShowAuthModal(true)}
                className="px-4 py-2 bg-[#6E59A5] text-white rounded-lg hover:bg-[#5D4B8C] transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
        />
      </nav>
    </ThemeProvider>
  );
};