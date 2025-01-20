import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: string;
}

export const FeatureCard = ({ icon: Icon, title, description, colorClass }: FeatureCardProps) => {
  return (
    <Card className={`bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow border-${colorClass}-100`}>
      <CardContent className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className={`p-2 bg-${colorClass}-50 rounded-lg`}>
            <Icon className={`w-6 h-6 text-${colorClass}-600`} />
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};