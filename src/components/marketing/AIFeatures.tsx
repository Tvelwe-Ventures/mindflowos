import React from 'react';
import { Brain, Sparkles, BarChart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Smart Analysis",
    description: "Automatically analyze documents and extract key insights"
  },
  {
    icon: Sparkles,
    title: "Intelligent Suggestions",
    description: "Get AI-powered recommendations for strategy optimization"
  },
  {
    icon: BarChart,
    title: "Predictive Analytics",
    description: "Forecast trends and anticipate market changes"
  }
];

export const AIFeatures = () => {
  return (
    <div className="bg-blue-50 rounded-2xl p-8 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">AI-Powered Intelligence</h2>
        <p className="text-gray-600">Let our AI assistant help you make better business decisions</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6">
              <Icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};