import React from 'react';
import { Navbar } from "@/components/Navbar";
import { DemoSection } from "@/components/DemoSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { SectionVisualizer } from "@/components/section-visualizer";
import { EquityManagement } from "@/components/equity/EquityManagement";
import { PerformanceTracker } from "@/components/performance/PerformanceTracker";
import { MarketingCopy } from "@/components/MarketingCopy";
import { EnhancedShowcase } from "@/components/EnhancedShowcase";
import { ThemeSystem } from "@/components/theme/ThemeSystem";
import { LandingPage } from "@/components/landing/LandingPage";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LandingPage />
      <MarketingCopy />
      <EnhancedShowcase />
      <DemoSection />
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionVisualizer />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <EquityManagement />
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <PerformanceTracker />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <ThemeSystem />
        </div>
      </section>
      <footer className="bg-secondary py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src="/lovable-uploads/2ed47fb1-e6cc-49dd-947c-6531a64de4f3.png" 
            alt="MindflowOS Logo" 
            className="h-12 w-auto mx-auto mb-8 animate-float"
          />
          <p className="text-gray-600 mb-8">
            Join us in revolutionizing business planning
          </p>
          <WaitlistForm />
        </div>
      </footer>
    </div>
  );
};

export default Index;