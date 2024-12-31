import React from 'react';

const CallToAction = () => {
  return (
    <div className="text-center py-16">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Transform Your Business Planning?
      </h2>
      <div className="flex justify-center gap-4">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Start Free Trial
        </button>
        <button className="px-8 py-4 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          Watch Demo
        </button>
      </div>
    </div>
  );
};

export default CallToAction;