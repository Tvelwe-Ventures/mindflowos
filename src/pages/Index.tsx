import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/hero/Hero';
import { WaitlistForm } from '@/components/WaitlistForm';
import { IntegrationsSection } from '@/components/landing/IntegrationsSection';
import EnhancedAIFeatures from '@/components/features/EnhancedAIFeatures';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <WaitlistForm />
        </div>
        <EnhancedAIFeatures />
        <IntegrationsSection />
      </main>
    </div>
  );
};

export default Index;