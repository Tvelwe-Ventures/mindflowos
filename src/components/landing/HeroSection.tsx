import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Target, Zap, ChevronRight, Rocket } from 'lucide-react';
import { ImpactMetric } from '@/components/hero/ImpactMetric';
import { FeatureCard } from '@/components/landing/FeatureCard';

const HeroSection = () => {
  const impactMetrics = [
    { value: '3x', label: 'Faster Strategy Execution' },
    { value: '60%', label: 'Time Saved in Planning' },
    { value: '45%', label: 'Increase in Goal Achievement' }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Planning",
      description: "Transform rough ideas into actionable strategies in minutes, not weeks.",
      color: "indigo"
    },
    {
      icon: Target,
      title: "Real-time Execution",
      description: "Track progress and adapt strategy with live insights and recommendations.",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Scale Faster",
      description: "Built to grow with you, from first hire to market leadership.",
      color: "pink"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#6E59A5_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#6E59A5_0%,_transparent_50%)]" />
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
            <span className="bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] bg-clip-text text-transparent">
              Turn Your Vision into Reality
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Stop drowning in spreadsheets and start scaling your business. 
            Get AI-powered strategy execution that adapts to your growth.
          </p>

          <div className="flex justify-center space-x-4">
            <Button 
              className="bg-[#6E59A5] hover:bg-[#5D4B8C] text-lg px-8 py-6"
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
        <div className="flex justify-center space-x-8 mb-16">
          {impactMetrics.map((metric, index) => (
            <ImpactMetric
              key={index}
              value={metric.value}
              label={metric.label}
              isActive={false}
            />
          ))}
        </div>

        {/* Feature Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by ambitious founders</p>
          <div className="flex justify-center space-x-8 opacity-50">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-24 h-8 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;