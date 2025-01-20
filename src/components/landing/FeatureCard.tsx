import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => {
  const colorClasses = {
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    pink: 'bg-pink-50 text-pink-600 border-pink-100'
  };

  return (
    <Card className={`bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow border-${color}-100`}>
      <CardContent className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className={`p-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};