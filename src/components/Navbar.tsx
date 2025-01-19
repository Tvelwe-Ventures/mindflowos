import React, { useState, useEffect } from 'react';
import { AuthModal } from './AuthModal';

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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span 
              className="font-butler font-semibold text-xl uppercase"
              style={{ 
                letterSpacing: '-0.04em',
                color: '#6E59A5'  // New solid purple color
              }}
            >
              mappen
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-600 hover:text-gray-900">Features</button>
            <button className="text-gray-600 hover:text-gray-900">Solutions</button>
            <button className="text-gray-600 hover:text-gray-900">Pricing</button>
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
  );
};