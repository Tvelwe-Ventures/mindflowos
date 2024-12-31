import React from 'react';
import LandingPage from '@/components/landing/LandingPage';
import DarkWaitlist from '@/components/waitlist/DarkWaitlist';
import EnhancedAIFeatures from '@/components/marketing/AIFeatures';

const Index = () => {
  return (
    <div className="relative">
      <LandingPage />
      <DarkWaitlist />
      <EnhancedAIFeatures />
    </div>
  );
};

export default Index;