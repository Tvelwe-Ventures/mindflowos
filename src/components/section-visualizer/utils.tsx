import React from 'react';
import { CheckCircle, Activity, AlertCircle } from 'lucide-react';
import { SectionStatus } from './types';

export const renderSectionStatus = (status: SectionStatus) => {
  const statusConfig = {
    complete: { color: 'text-green-500', icon: CheckCircle },
    in_progress: { color: 'text-blue-500', icon: Activity },
    attention: { color: 'text-yellow-500', icon: AlertCircle }
  };

  const config = statusConfig[status] || statusConfig.in_progress;
  const Icon = config.icon;

  return (
    <span className={`${config.color} flex items-center gap-1`}>
      <Icon className="h-4 w-4" />
      <span className="text-sm">{status.replace('_', ' ').toUpperCase()}</span>
    </span>
  );
};