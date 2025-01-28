import React from 'react';
import { Brain, Globe, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Strategy",
    description: "Transform planning from periodic exercises into continuous optimization",
    color: "#8B5CF6",
    delay: 0
  },
  {
    icon: Globe,
    title: "Dynamic Execution",
    description: "Adapt and evolve your strategy in real-time as market conditions change",
    color: "#D946EF",
    delay: 100
  },
  {
    icon: Users,
    title: "Team Alignment",
    description: "Keep your entire organization synchronized with your strategic vision",
    color: "#0EA5E9",
    delay: 200
  }
];

const FeatureSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-gradient animated-border backdrop-blur-xl hover:shadow-lg transition-all transform hover:scale-105 duration-300 animate-fade-up"
              style={{ 
                animationDelay: `${feature.delay}ms`,
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl border transition-colors"
                       style={{ 
                         backgroundColor: `${feature.color}15`,
                         borderColor: `${feature.color}30`
                       }}>
                    <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-200">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;