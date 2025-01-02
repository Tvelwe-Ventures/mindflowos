import React from 'react';

interface StageProgressProps {
  currentStage: number;
  totalStages: number;
}

const StageProgress = ({ currentStage, totalStages }: StageProgressProps) => {
  return (
    <div className="mt-8 flex justify-center gap-3">
      {[...Array(totalStages - 2)].map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full transition-all ${
            index <= currentStage - 1 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
              : 'bg-gray-800'
          }`}
        />
      ))}
    </div>
  );
};

export default StageProgress;