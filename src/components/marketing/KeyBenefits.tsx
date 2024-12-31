import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Benefit {
  title: string;
  description: string;
  features: string[];
}

const keyBenefits: Benefit[] = [
  {
    title: "Transform Static Plans into Living Systems",
    description: "Convert traditional business plans into interactive mind maps that evolve with your business. Keep your strategy alive and actionable.",
    features: [
      "AI-powered document analysis",
      "Real-time mind map generation",
      "Dynamic strategy visualization"
    ]
  },
  {
    title: "AI-Enhanced Business Intelligence",
    description: "Let AI help you uncover insights, identify opportunities, and make data-driven decisions with confidence.",
    features: [
      "Predictive analytics",
      "Market trend analysis",
      "Competitive intelligence"
    ]
  },
  {
    title: "Seamless Team Collaboration",
    description: "Bring your entire organization into alignment with real-time updates and collaborative planning tools.",
    features: [
      "Real-time collaboration",
      "Role-based access control",
      "Version control and history"
    ]
  }
];

export const KeyBenefits = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {keyBenefits.map((benefit, index) => (
        <Card key={index} className="bg-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
            <p className="text-gray-600 mb-6">{benefit.description}</p>
            <ul className="space-y-3">
              {benefit.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};