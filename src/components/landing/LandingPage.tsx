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
    <div className="relative min-h-screen w-full overflow-auto">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(25, 25, 25)"
        gradientBackgroundEnd="rgb(0, 0, 0)"
        firstColor="18, 113, 255"
        secondColor="221, 74, 255"
        thirdColor="100, 220, 255"
        fourthColor="47, 51, 234"
        fifthColor="79, 70, 229"
        pointerColor="140, 100, 255"
        size="100%"
        blendingValue="hard-light"
        containerClassName="fixed inset-0 h-screen w-screen"
      >
        <div className="relative z-10">
          <Navigation />
        </div>
      </BackgroundGradientAnimation>

      <main className="relative z-10">
        <div className="min-h-screen flex flex-col">
          <Hero />

          <div className="h-[60rem] flex items-center justify-center relative p-2 md:p-20">
            <div className="py-10 md:py-40 w-full relative">
              <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-semibold text-center mb-10 text-white">
                  Transform Your <br />
                  <span className="text-6xl font-bold">Business Strategy</span>
                </h1>
              </div>
              
              <DeviceFrame />
            </div>
          </div>

          <FeatureSection />
          <EnhancedAIFeatures />
          <IntegrationsSection />
          <Footer />
        </div>

        <FloatingFeedbackButton />
      </main>
    </div>
  );
};

export default LandingPage;