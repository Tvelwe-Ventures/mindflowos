import React from 'react';
import { Metric } from './types';

export const renderMetrics = (metrics?: Metric[]) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-blue-50 p-3 rounded-lg">
          <div className="text-sm text-blue-600">{metric.label}</div>
          <div className="text-lg font-semibold">{metric.value}</div>
        </div>
      ))}
    </div>
  );
};

export const renderSubsections = (subsections: string[]) => (
  <div className="space-y-2 ml-8">
    {subsections.map((subsection, index) => (
      <div key={index} className="flex items-center gap-2 text-gray-600">
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <span>{subsection}</span>
      </div>
    ))}
  </div>
);