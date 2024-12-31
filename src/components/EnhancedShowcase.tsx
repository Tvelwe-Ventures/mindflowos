import React, { useState } from 'react';
import { 
  Sparkles, 
  Brain,
  ArrowRight,
  Map,
  FileText, 
  Settings,
  ChevronRight,
  Plus,
  Minus,
  Check,
  Users,
  Star,
  Zap
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const EnhancedShowcase = () => {
  const [stage, setStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeNode, setActiveNode] = useState(null);
  const [expandedNode, setExpandedNode] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const mindMapNodes = [
    {
      id: 'strategy',
      label: 'Strategy',
      type: 'core',
      children: [
        { id: 'market', label: 'Market', metrics: ['$8.9B TAM', '12.4% Growth'] },
        { id: 'product', label: 'Product', metrics: ['4 Key Features', '2 Patents'] },
        { id: 'team', label: 'Team', metrics: ['25 Members', '3 Offices'] }
      ]
    },
    {
      id: 'operations',
      label: 'Operations',
      type: 'process',
      children: [
        { id: 'sales', label: 'Sales Process', metrics: ['85% Win Rate'] },
        { id: 'delivery', label: 'Delivery', metrics: ['99% On Time'] }
      ]
    },
    {
      id: 'finance',
      label: 'Finance',
      type: 'metrics',
      children: [
        { id: 'revenue', label: 'Revenue', metrics: ['$2.5M ARR'] },
        { id: 'growth', label: 'Growth', metrics: ['156% YoY'] }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechVision Inc",
      quote: "Transformed our quarterly planning process. What used to take weeks now happens in real-time.",
      rating: 5
    },
    {
      name: "Mark Rodriguez",
      role: "Strategy Director, Global Solutions",
      quote: "The AI assistance is like having a strategy consultant on demand. Game-changing for our team.",
      rating: 5
    }
  ];

  const renderMindMap = () => (
    <div className="relative h-[600px] bg-blue-50 rounded-xl shadow-xl overflow-hidden">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          transform: `scale(${zoomLevel})`,
          transformOrigin: 'center'
        }} 
      />

      {mindMapNodes.map((node, idx) => {
        const angle = (idx * 2 * Math.PI) / mindMapNodes.length;
        const radius = 200;
        const x = Math.cos(angle) * radius + 300;
        const y = Math.sin(angle) * radius + 300;

        return (
          <div
            key={node.id}
            className="absolute transition-all duration-500 cursor-pointer"
            style={{
              left: x,
              top: y,
              transform: `translate(-50%, -50%) scale(${zoomLevel})`
            }}
            onClick={() => setExpandedNode(node.id === expandedNode ? null : node.id)}
          >
            <div className="p-4 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-2">
                {node.type === 'core' && <Brain className="h-4 w-4" />}
                {node.type === 'process' && <Settings className="h-4 w-4" />}
                {node.type === 'metrics' && <ChevronRight className="h-4 w-4" />}
                {node.label}
              </div>
            </div>

            {expandedNode === node.id && (
              <div className="absolute top-full left-0 mt-2 space-y-2">
                {node.children.map((child) => (
                  <div
                    key={child.id}
                    className="bg-white rounded-lg shadow-lg p-3 text-sm"
                  >
                    <div className="font-medium">{child.label}</div>
                    {child.metrics.map((metric, i) => (
                      <div key={i} className="text-gray-600 text-xs">{metric}</div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-2 flex space-x-2">
        <button 
          onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 2))}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button 
          onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.5))}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <Minus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Strategy into a
            <span className="text-blue-600 block">Living System</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch your static business plan evolve into an interactive mind map and
            dynamic operating system, powered by AI.
          </p>
        </div>

        {/* Interactive Demo */}
        {renderMindMap()}

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
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
          ].map((feature, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business Planning?
          </h2>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedShowcase;
