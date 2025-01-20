import React from 'react';
import HeroSection from './HeroSection';
import EnhancedAIFeatures from '@/components/features/EnhancedAIFeatures';
import { FloatingFeedbackButton } from '@/components/feedback/FloatingFeedbackButton';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <HeroSection />
      <EnhancedAIFeatures />
      <FloatingFeedbackButton />
    </div>
  );
};

export default LandingPage;