import React from 'react';
import { motion } from 'framer-motion';

interface ImpactMetricProps {
  value: string;
  label: string;
  isActive: boolean;
}

export const ImpactMetric = ({ value, label, isActive }: ImpactMetricProps) => {
  return (
    <motion.div
      animate={{
        scale: isActive ? 1.1 : 1,
        opacity: isActive ? 1 : 0.7
      }}
      className="text-center"
    >
      <div className="text-4xl font-bold bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </motion.div>
  );
};