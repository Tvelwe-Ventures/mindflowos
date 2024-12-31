import React from 'react';
import ShowcaseHeader from './ShowcaseHeader';
import MindMapDemo from './MindMapDemo';
import FeatureGrid from './FeatureGrid';
import TestimonialSection from './TestimonialSection';
import CallToAction from './CallToAction';

const EnhancedShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ShowcaseHeader />
        <MindMapDemo />
        <FeatureGrid />
        <TestimonialSection />
        <CallToAction />
      </div>
    </div>
  );
};

export default EnhancedShowcase;