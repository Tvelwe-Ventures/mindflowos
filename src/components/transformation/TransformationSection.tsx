import React from 'react';
import { CheckCircle } from 'lucide-react';

interface TransformationSectionProps {
  section: {
    id: string;
    title: string;
    elements: string[];
  };
  status: string;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({ section, status }) => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'complete': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">{section.title}</h3>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
          {status === 'complete' && <CheckCircle className="h-4 w-4 mr-1" />}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {section.elements.map((element, idx) => (
          <div key={idx} className="text-sm text-gray-600 bg-gray-50 rounded p-2">
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};