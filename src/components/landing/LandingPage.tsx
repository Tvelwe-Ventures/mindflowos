import React, { useState, useEffect } from 'react';
import { WaitlistForm } from '@/components/WaitlistForm';
import { ProductFeatures } from './ProductFeatures';

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
    <div className="min-h-screen bg-[#0D0118]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D0118]/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/1932d00e-ca29-46e7-bf2f-59ae839a236a.png" 
              alt="MindflowOS Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-[#B341F9]">
              MindflowOS
            </span>
          </div>
          <button className="px-6 py-2 bg-[#B341F9] text-white rounded-full hover:bg-[#9B20E3] transition-all text-sm">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#B341F9] rounded-full mix-blend-overlay filter blur-[128px] opacity-20 animate-blob" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#6E0AD6] rounded-full mix-blend-overlay filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
        </div>
        
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Transform Your Strategy
              <span className="block mt-2 bg-gradient-to-r from-[#B341F9] to-[#6E0AD6] bg-clip-text text-transparent">
                Into a Living System
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join innovative companies using MindflowOS to transform static business 
              plans into dynamic, AI-powered operating systems.
            </p>
            <div className="max-w-md mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#B341F9] mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-400">
              Everything you need to transform your business strategy into an automated system
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/6ae12239-169a-4f99-95c5-26843709573a.png"
              alt="MindflowOS Features"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0118] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/1932d00e-ca29-46e7-bf2f-59ae839a236a.png" 
                alt="MindflowOS Logo" 
                className="h-6 w-auto" 
              />
              <span className="text-[#B341F9]">
                MindflowOS
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 MindflowOS. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;