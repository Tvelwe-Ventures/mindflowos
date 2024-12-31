import React from 'react';
import { 
  Brain, 
  Sparkles, 
  ArrowRight, 
  Users, 
  BarChart, 
  FileText,
  Map,
  Zap,
  Check,
  Star
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const MarketingCopy = () => {
  const keyBenefits = [
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

  const useCases = [
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

  const integrations = [
    {
      category: "Project Management",
      tools: ["Jira", "Asana", "Trello"]
    },
    {
      category: "Documentation",
      tools: ["Notion", "Confluence", "Google Docs"]
    },
    {
      category: "Communication",
      tools: ["Slack", "Microsoft Teams", "Discord"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Your Business Strategy, <span className="text-blue-600">Alive</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your static business plan into a dynamic operating system. 
          Visualize, adapt, and execute your strategy in real-time with AI-powered insights.
        </p>
      </div>

      {/* Value Proposition */}
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

      {/* Use Cases */}
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

      {/* AI Features */}
      <div className="bg-blue-50 rounded-2xl p-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Intelligence</h2>
          <p className="text-gray-600">Let our AI assistant help you make better business decisions</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
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
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6">
              <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Works With Your Tools
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Business Planning?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join innovative companies already using MindflowOS to bring their strategies to life.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketingCopy;