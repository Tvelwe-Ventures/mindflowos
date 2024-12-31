import React from 'react';
import LandingPage from '@/components/landing/LandingPage';
import DarkWaitlist from '@/components/waitlist/DarkWaitlist';
import AIFeatures from '@/components/marketing/AIFeatures';

const Index = () => {
  return (
    <div className="relative">
      <LandingPage />
      <DarkWaitlist />
      <AIFeatures />
    </div>
  );
};

export default Index;