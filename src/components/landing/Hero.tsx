import React from 'react';
import { WaitlistForm } from './WaitlistForm';

export const Hero = () => {
  return (
    <div className="text-center mb-20">
      <h1 className="text-5xl font-bold mb-6">
        Transform Your <span className="text-blue-600">Business Plan</span><br />
        Into an Operating System
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Turn your static business plan into an interactive mind map and dynamic operating system. 
        Visualize, adapt, and execute your strategy in real-time.
      </p>
      <WaitlistForm />
    </div>
  );
};