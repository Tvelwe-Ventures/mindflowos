import React from 'react';
import { Navbar } from '@/components/Navbar';
import HeroSection from '@/components/landing/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-github-dark">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Index;