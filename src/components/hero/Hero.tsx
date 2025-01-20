import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FeatureCard } from './FeatureCard';
import { ImpactMetric } from './ImpactMetric';
import {
  Rocket,
  Brain,
  Target,
  Zap,
  ChevronRight
} from 'lucide-react';

export const Hero = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  
  const impactMetrics = [
    { value: '3x', label: 'Faster Strategy Execution' },
    { value: '60%', label: 'Time Saved in Planning' },
    { value: '45%', label: 'Increase in Goal Achievement' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetric((current) => (current + 1) % impactMetrics.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Planning",
      description: "Transform rough ideas into actionable strategies in minutes, not weeks.",
      colorClass: "indigo"
    },
    {
      icon: Target,
      title: "Real-time Execution",
      description: "Track progress and adapt strategy with live insights and recommendations.",
      colorClass: "purple"
    },
    {
      icon: Zap,
      title: "Scale Faster",
      description: "Built to grow with you, from first hire to market leadership.",
      colorClass: "pink"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#6E59A5_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#8B5CF6_0%,_transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-[#6E59A5]/10 px-4 py-1 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-[#6E59A5]" />
            <span className="text-sm font-medium text-[#6E59A5]">Built for Ambitious Founders</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-[#6E59A5] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
              Turn Your Vision into Reality
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Stop drowning in spreadsheets and start scaling your business. 
            Get AI-powered strategy execution that adapts to your growth.
          </p>

          <div className="flex justify-center space-x-4">
            <Button 
              className="bg-[#6E59A5] hover:bg-[#6E59A5]/90 text-lg px-8 py-6"
              size="lg"
            >
              Start Free Trial
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6"
              size="lg"
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center space-x-8 mb-16"
        >
          {impactMetrics.map((metric, index) => (
            <ImpactMetric
              key={index}
              value={metric.value}
              label={metric.label}
              isActive={activeMetric === index}
            />
          ))}
        </motion.div>

        {/* Feature Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              colorClass={feature.colorClass}
            />
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 mb-4">Trusted by ambitious founders</p>
          <div className="flex justify-center space-x-8 opacity-50">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-24 h-8 bg-gray-800 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;