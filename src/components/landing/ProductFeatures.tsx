import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, ArrowRight } from 'lucide-react';

const features = [
  {
    title: "AI-Native Tools",
    description: "Leverage advanced AI to automate and optimize your business processes",
    image: "/lovable-uploads/7837e594-60fe-4d72-ae44-466a53c29b96.png"
  },
  {
    title: "Workflow Templates",
    description: "Start with pre-built templates or create custom workflows for your needs",
    image: "/lovable-uploads/7837e594-60fe-4d72-ae44-466a53c29b96.png"
  },
  {
    title: "Multi-Agent Systems",
    description: "Create complex systems with multiple AI agents working together",
    image: "/lovable-uploads/7837e594-60fe-4d72-ae44-466a53c29b96.png"
  }
];

export const ProductFeatures = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to transform your business strategy into an automated system
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`flex items-center gap-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <button className="group flex items-center gap-2 text-[#9b87f5] hover:text-[#8B5CF6] transition-colors">
                  Learn more 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-[#D946EF]/20 rounded-xl" />
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="rounded-xl shadow-2xl shadow-purple-500/10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};