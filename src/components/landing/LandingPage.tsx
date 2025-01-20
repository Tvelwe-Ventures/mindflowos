import React, { useState, useEffect } from 'react';
import { Hero } from '@/components/hero/Hero';
import { IntegrationsSection } from './IntegrationsSection';
import EnhancedAIFeatures from '@/components/features/EnhancedAIFeatures';
import { WaitlistForm } from '@/components/WaitlistForm';
import { FloatingFeedbackButton } from '@/components/feedback/FloatingFeedbackButton';
import FeedbackForm from '@/components/FeedbackForm';

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/de1f185a-ffc5-43ec-9b47-07e182ea0a82.png" 
              alt="Mappen Logo" 
              className="h-8 w-auto animate-float"
            />
            <span 
              className="text-xl font-bold font-space-grotesk tracking-tight"
              style={{ color: '#6E59A5' }}
            >
              Mappen
            </span>
          </div>
          <button className="px-4 py-2 bg-[#6E59A5] hover:bg-[#5D4B8C] text-white rounded-lg transition-all text-sm animate-fade-up">
            Join Waitlist
          </button>
        </div>
      </nav>
      
      {/* Main Content Container */}
      <div className="flex-grow flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Feature Highlights */}
        <section className="bg-gray-900/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] opacity-5 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95" />
          
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
                  className="border-gray-800 bg-gray-900/50 backdrop-blur-xl hover:shadow-lg transition-all transform hover:scale-105 duration-300 animate-fade-up"
                  style={{ 
                    animationDelay: `${feature.delay}ms`,
                    boxShadow: `0 4px 20px ${feature.color}10`
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
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <EnhancedAIFeatures />

        {/* Integrations Section */}
        <IntegrationsSection />

        {/* Feedback Section */}
        <section className="py-20 relative">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Share Your Feedback
              </h2>
              <p className="text-gray-400">
                Help us improve MindflowOS by sharing your thoughts and suggestions
              </p>
            </div>
            <FeedbackForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto py-8 border-t border-gray-800">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex flex-col items-center justify-between space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/de1f185a-ffc5-43ec-9b47-07e182ea0a82.png" 
                  alt="Mappen Logo" 
                  className="h-6 w-auto" 
                />
                <span style={{ color: '#6E59A5' }} className="hover:text-[#5D4B8C] transition-colors">
                  Mappen
                </span>
              </div>
              <a href="https://app.netlify.com/sites/mindflowos/deploys" target="_blank" rel="noopener noreferrer">
                <img src="https://api.netlify.com/api/v1/badges/64731aab-7a37-4b5c-b566-d947cd110276/deploy-status" alt="Netlify Status" />
              </a>
              <div className="text-gray-400 text-sm">
                © 2024 Mappen. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>

      <FloatingFeedbackButton />
    </div>
  );
};

export default LandingPage;
