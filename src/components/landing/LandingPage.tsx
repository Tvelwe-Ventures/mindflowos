import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain,
  Globe,
  Users
} from 'lucide-react';
import { WaitlistForm } from '@/components/WaitlistForm';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const integrations = [
    {
      name: 'Notion',
      logo: '/lovable-uploads/ab05ec08-abc2-4e78-8239-9da024d25ae3.png',
      color: '#E6E6E6'
    },
    {
      name: 'Slack',
      logo: '/lovable-uploads/cae65443-27f9-4293-91c0-69d4c272e9a7.png',
      color: '#ECE5FF'
    },
    {
      name: 'Asana',
      logo: '/lovable-uploads/18b98a39-0f31-4f71-8bac-b5e9d81b6373.png',
      color: '#FFE5EC'
    },
    {
      name: 'GitHub',
      logo: '/lovable-uploads/6619ce1c-8ec2-4c6a-a229-c522d7ae4e55.png',
      color: '#E5F6FF'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/1932d00e-ca29-46e7-bf2f-59ae839a236a.png" 
              alt="MindflowOS Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-[#9b87f5]">
              MindflowOS
            </span>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all text-sm">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Animated Gradient Orbs with enhanced colors */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#8B5CF6] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#D946EF] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#0EA5E9] bg-clip-text text-transparent"
                  style={{ letterSpacing: '-0.04em' }}>
                Transform Your Business Strategy
                <span className="block mt-2">Into a Living System</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join innovative companies using MindflowOS to transform static business 
                plans into dynamic, AI-powered operating systems.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* Feature Highlights with enhanced visuals */}
        <section className="py-20 bg-gray-900/50 relative overflow-hidden">
          {/* Additional decorative elements */}
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

        {/* Enhanced Integration Section with colored cards */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent mb-4">
                Seamless Integration
              </h2>
              <p className="text-gray-400">
                Connect with your existing tools and workflows
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {integrations.map((tool, index) => (
                <div 
                  key={tool.name}
                  className="p-6 rounded-lg border border-[#8B5CF6]/20 flex items-center justify-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg group bg-[#8B5CF6]/10 backdrop-blur-sm hover:bg-[#8B5CF6]/15"
                  style={{ 
                    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.1)'
                  }}
                >
                  <div className="bg-white/90 p-3 rounded-lg">
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`}
                      className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer with proper positioning */}
        <footer className="mt-auto py-8 border-t border-gray-800">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/1932d00e-ca29-46e7-bf2f-59ae839a236a.png" 
                  alt="MindflowOS Logo" 
                  className="h-6 w-auto" 
                />
                <span className="text-[#9b87f5]">MindflowOS</span>
              </div>
              <div className="text-gray-400 text-sm">
                © 2024 MindflowOS. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
