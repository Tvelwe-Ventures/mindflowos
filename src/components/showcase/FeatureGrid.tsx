import React from 'react';
import { Brain, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get intelligent suggestions and analytics in real-time"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time updates"
  },
  {
    icon: Zap,
    title: "Instant Transformation",
    description: "Convert documents to interactive mind maps instantly"
  }
];

const FeatureGrid = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-16">
      {features.map((feature, idx) => (
        <Card 
          key={idx} 
          className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-up"
          style={{ animationDelay: `${idx * 200}ms` }}
        >
          <CardContent className="p-6">
            <feature.icon className="h-8 w-8 text-blue-600 mb-4 animate-float" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeatureGrid;