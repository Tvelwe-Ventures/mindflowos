import React from 'react';
import { FileText, ArrowRight, Map } from 'lucide-react';

const TransformationProgress = () => {
  return (
    <div className="flex items-center justify-center mb-6 text-gray-500">
      <FileText className="h-8 w-8" />
      <ArrowRight className="h-6 w-6 mx-4" />
      <Map className="h-8 w-8" />
    </div>
  );
};

export default TransformationProgress;