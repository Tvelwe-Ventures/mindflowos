import React from 'react';
import LandingPage from "@/components/landing/LandingPage";
import { BusinessStrategy } from "@/components/home/BusinessStrategy";
import { DepartmentSection } from "@/components/home/DepartmentSection";
import { SectionVisualizer } from "@/components/section-visualizer/SectionVisualizer";
import { EquityManagement } from "@/components/equity/EquityManagement";
import PerformanceTracker from "@/components/performance/PerformanceTracker";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingPage />
      <BusinessStrategy />
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