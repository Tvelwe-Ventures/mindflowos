import React from 'react';
import { KeyBenefits } from '@/components/marketing/KeyBenefits';
import { UseCases } from '@/components/marketing/UseCases';
import { AIFeatures } from '@/components/marketing/AIFeatures';
import { Integrations } from '@/components/marketing/Integrations';
import { CallToAction } from '@/components/marketing/CallToAction';

const MarketingCopy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Your Business Strategy, <span className="text-blue-600">Alive</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your static business plan into a dynamic operating system. 
          Visualize, adapt, and execute your strategy in real-time with AI-powered insights.
        </p>
      </div>

      <KeyBenefits />
      <UseCases />
      <AIFeatures />
      <Integrations />
      <CallToAction />
    </div>
  );
};

export default MarketingCopy;