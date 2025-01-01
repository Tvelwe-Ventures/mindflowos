import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  TrendingUp, 
  Users, 
  Globe,
  Sparkles 
} from 'lucide-react';

const EnhancedAIFeatures = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const aiCapabilities = [
    {
      id: 'strategic',
      icon: Brain,
      title: "Strategic Intelligence",
      description: "Transform strategic planning from periodic exercises into continuous optimization",
      insights: [
        "Dynamic scenario modeling adapts to market changes",
        "Competitive intelligence synthesized from multiple data sources",
        "Strategic opportunity identification through pattern recognition"
      ]
    },
    {
      id: 'financial',
      icon: TrendingUp,
      title: "Financial Orchestration",
      description: "Move beyond forecasting to dynamic financial orchestration",
      insights: [
        "Real-time cash flow optimization",
        "Investment opportunity identification",
        "Risk-adjusted scenario planning"
      ]
    },
    {
      id: 'market',
      icon: Globe,
      title: "Market Navigation",
      description: "Navigate market dynamics with predictive intelligence",
      insights: [
        "Market expansion opportunity analysis",
        "Channel strategy optimization",
        "Partnership ecosystem modeling"
      ]
    },
    {
      id: 'talent',
      icon: Users,
      title: "Talent Architecture",
      description: "Design your organization's future with AI-guided workforce planning",
      insights: [
        "Skill gap prediction and development planning",
        "Team composition optimization",
        "Succession planning intelligence"
      ]
    }
  ];

  const renderFeatureDetail = (feature: typeof aiCapabilities[0]) => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/20">
          <feature.icon className="h-6 w-6 text-blue-400" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-200">{feature.title}</h4>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      </div>
      <div className="pl-14 space-y-3">
        {feature.insights.map((insight, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 text-gray-300"
          >
            <div className="w-1 h-1 rounded-full bg-blue-400" />
            <span>{insight}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            AI-Powered Strategic Intelligence
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Transform your business planning from static documents into a dynamic 
            intelligence system that evolves with your business
          </p>
        </div>

        <div className="grid gap-6">
          {aiCapabilities.map((feature) => (
            <Card 
              key={feature.id}
              className="border-gray-800 bg-gray-900/50 backdrop-blur-xl hover:shadow-lg hover:shadow-blue-500/5 transition-all"
            >
              <CardContent className="p-6">
                {renderFeatureDetail(feature)}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 p-2 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg border border-gray-800 mb-6">
            <Sparkles className="h-5 w-5 text-blue-400" />
            <span className="text-gray-400">Powered by advanced language models</span>
          </div>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              Experience AI Features
            </button>
            <button className="px-6 py-3 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAIFeatures;