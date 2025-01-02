import React from 'react';

const ShowcaseHeader = () => {
  return (
    <div className="text-center mb-16 animate-fade-up">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
        Transform Your Strategy into a
        <span className="text-blue-600 block animate-fade-up" style={{ animationDelay: '200ms' }}>
          Living System
        </span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '400ms' }}>
        Watch your static business plan evolve into an interactive mind map and
        dynamic operating system, powered by AI.
      </p>
    </div>
  );
};

export default ShowcaseHeader;