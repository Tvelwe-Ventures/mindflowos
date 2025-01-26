import React, { useState, useEffect } from 'react';
import { Brain, Globe, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Hero } from '@/components/hero/Hero';
import { IntegrationsSection } from './IntegrationsSection';
import EnhancedAIFeatures from '@/components/features/EnhancedAIFeatures';
import { FloatingFeedbackButton } from '@/components/feedback/FloatingFeedbackButton';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(25, 25, 25)"
      gradientBackgroundEnd="rgb(0, 0, 0)"
      firstColor="18, 113, 255"
      secondColor="221, 74, 255"
      thirdColor="100, 220, 255"
      fourthColor="47, 51, 234"
      fifthColor="79, 70, 229"
      pointerColor="140, 100, 255"
      size="100%"
      blendingValue="hard-light"
      containerClassName="min-h-screen"
    >
      <div className="min-h-screen flex flex-col">
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/80 backdrop-blur-lg' : 'bg-transparent'
        }`}>
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/de1f185a-ffc5-43ec-9b47-07e182ea0a82.png" 
                alt="Mappen Logo" 
                className="h-6 w-auto animate-float"
              />
            </div>
            <button className="px-4 py-2 bg-[#6E59A5] hover:bg-[#5D4B8C] text-white rounded-lg transition-all text-sm animate-fade-up">
              Join Waitlist
            </button>
          </div>
        </nav>
        
        <div className="flex-grow flex flex-col">
          <Hero />

          <section className="relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-3 gap-8">
                {[
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
                ].map((feature, index) => (
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

          <EnhancedAIFeatures />
          <IntegrationsSection />

          <footer className="mt-auto py-8 border-t border-gray-800">
            <div className="max-w-3xl mx-auto px-4">
              <div className="flex flex-col items-center justify-between space-y-4">
                <div className="flex items-center gap-2">
                  <img 
                    src="/lovable-uploads/de1f185a-ffc5-43ec-9b47-07e182ea0a82.png" 
                    alt="Mappen Logo" 
                    className="h-6 w-auto" 
                  />
                  <span className="text-[#6E59A5] hover:text-[#5D4B8C] transition-colors">
                    Mappen
                  </span>
                </div>
                <div className="text-gray-400 text-sm">
                  © 2024 Mappen. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </div>

        <FloatingFeedbackButton />
      </div>
    </BackgroundGradientAnimation>
  );
};

export default LandingPage;