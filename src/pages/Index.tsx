import React from 'react';
import { Navbar } from "@/components/Navbar";
import { DemoSection } from "@/components/DemoSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { SectionVisualizer } from "@/components/section-visualizer";
import { EquityManagement } from "@/components/equity/EquityManagement";
import PerformanceTracker from "@/components/performance/PerformanceTracker";
import MarketingCopy from "@/components/MarketingCopy";
import EnhancedShowcase from "@/components/EnhancedShowcase";
import LandingPage from "@/components/landing/LandingPage";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingPage />
      <MarketingCopy />
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
    </div>
  );
};

export default Index;