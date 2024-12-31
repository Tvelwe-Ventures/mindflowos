import React from 'react';

export const CallToAction = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Transform Your Business Planning?
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        Join innovative companies already using MindflowOS to bring their strategies to life.
      </p>
      <div className="flex justify-center gap-4">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Start Free Trial
        </button>
        <button className="px-8 py-4 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          Schedule Demo
        </button>
      </div>
    </div>
  );
};