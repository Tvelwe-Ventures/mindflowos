import React from 'react';
import { Hero } from './Hero';
import { WaitlistForm } from '@/components/WaitlistForm';

export const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Hero />
      <div className="mt-12">
        <WaitlistForm />
      </div>
    </div>
  );
};

export default LandingPage;