import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/de1f185a-ffc5-43ec-9b47-07e182ea0a82.png" 
            alt="Mappen Logo" 
            className="h-6 w-auto animate-float"
          />
        </div>
        <button className="px-4 py-2 bg-[#6E59A5] hover:bg-[#5D4B8C] text-white rounded-lg transition-all text-sm animate-fade-up">
          Join Waitlist
        </button>
      </div>
    </nav>
  );
};

export default Navigation;