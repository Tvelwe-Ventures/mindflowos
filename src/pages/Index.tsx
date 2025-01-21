import React from 'react';
import { Navbar } from '@/components/Navbar';
import LandingPage from '@/components/landing/LandingPage';

const Index = () => {
  return (
    <div className="min-h-screen bg-github-dark">
      <Navbar />
      <main>
        <LandingPage />
      </main>
    </div>
  );
};

export default Index;