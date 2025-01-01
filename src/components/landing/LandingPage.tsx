import React, { useState, useEffect } from 'react';
import { Logo } from '@/design-system/logo';
import EnhancedAIFeatures from '@/components/marketing/EnhancedAIFeatures';
import DarkWaitlist from '@/components/waitlist/DarkWaitlist';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo variant="dark" size="md" />
          <button className="px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all text-sm animate-fade-up">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col pt-24">
        <DarkWaitlist />
        <EnhancedAIFeatures />
      </div>
    </div>
  );
};

export default LandingPage;