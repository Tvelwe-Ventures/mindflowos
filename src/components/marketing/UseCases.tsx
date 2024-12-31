import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface UseCase {
  department: string;
  benefits: string[];
}

const useCases: UseCase[] = [
  {
    department: "Marketing Teams",
    benefits: [
      "Visual campaign planning",
      "ROI tracking and optimization",
      "Integrated market analysis"
    ]
  },
  {
    department: "Sales Operations",
    benefits: [
      "Territory planning",
      "Pipeline visualization",
      "Performance tracking"
    ]
  },
  {
    department: "Product Management",
    benefits: [
      "Roadmap visualization",
      "Feature prioritization",
      "Sprint planning integration"
    ]
  },
  {
    department: "Legal & Compliance",
    benefits: [
      "Risk assessment mapping",
      "Compliance tracking",
      "Policy management"
    ]
  }
];

export const UseCases = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Empower Every Department
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {useCases.map((useCase, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{useCase.department}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {useCase.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <ArrowRight className="h-4 w-4 text-blue-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};