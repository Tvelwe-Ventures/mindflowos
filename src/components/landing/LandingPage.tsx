import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Globe, Users, ArrowRight } from 'lucide-react';
import { WaitlistForm } from '@/components/WaitlistForm';
import { IntegrationsSection } from './IntegrationsSection';
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-[#1a0b2e] to-gray-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/1932d00e-ca29-46e7-bf2f-59ae839a236a.png" 
              alt="MindflowOS Logo" 
              className="h-8 w-auto animate-float"
            />
            <span className="text-xl font-bold text-[#9b87f5] hover:text-[#8B5CF6] transition-colors">
              MindflowOS
            </span>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all text-sm animate-fade-up">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#8B5CF6] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#D946EF] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#6E59A5] rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
          
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <div className="space-y-6">
              <h1 
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#9b87f5] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent animate-fade-up"
                style={{ letterSpacing: '-0.04em' }}
              >
                Transform Your Business Strategy
                <span className="block mt-2 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                  Into a Living System
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
                Join innovative companies using MindflowOS to transform static business 
                plans into dynamic, AI-powered operating systems.
              </p>
              <div className="animate-fade-up" style={{ animationDelay: '400ms' }}>
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <ProductFeatures />

        {/* Integrations Section */}
        <IntegrationsSection />

        {/* Footer */}
        <footer className="mt-auto py-8 border-t border-gray-800">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/1932d00e-ca29-46e7-bf2f-59ae839a236a.png" 
                  alt="MindflowOS Logo" 
                  className="h-6 w-auto" 
                />
                <span className="text-[#9b87f5] hover:text-[#8B5CF6] transition-colors">
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
    </div>
  );
};

export default LandingPage;