import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { IntegrationsSection } from './IntegrationsSection';
import EnhancedAIFeatures from '@/components/features/EnhancedAIFeatures';
import { FloatingFeedbackButton } from '@/components/feedback/FloatingFeedbackButton';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import Navigation from './Navigation';
import DeviceFrame from './DeviceFrame';
import FeatureSection from './FeatureSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-3xl animate-first" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl animate-second" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <main className="relative">
          <div className="min-h-screen flex flex-col">
            <Hero />

            <div className="h-[60rem] flex items-center justify-center relative p-2 md:p-20">
              <div className="py-10 md:py-40 w-full relative">
                <div className="max-w-5xl mx-auto text-center">
                  <h1 className="text-4xl font-semibold text-center mb-10 text-white">
                    Transform Your <br />
                    <span className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Business Strategy
                    </span>
                  </h1>
                </div>
                
                <DeviceFrame />
              </div>
            </div>

            {/* Feature cards with new gradient styling */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-gray-900/50 backdrop-blur-xl" />
              <FeatureSection />
            </div>

            {/* AI Features section with enhanced styling */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-purple-900/50 backdrop-blur-xl" />
              <EnhancedAIFeatures />
            </div>

            <IntegrationsSection />
            <Footer />
          </div>

          <FloatingFeedbackButton />
        </main>
      </div>

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default LandingPage;