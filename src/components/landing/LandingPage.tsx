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
      logo: '/lovable-uploads/ab05ec08-abc2-4e78-8239-9da024d25ae3.png'
    },
    {
      name: 'Slack',
      logo: '/lovable-uploads/cae65443-27f9-4293-91c0-69d4c272e9a7.png'
    },
    {
      name: 'Asana',
      logo: '/lovable-uploads/18b98a39-0f31-4f71-8bac-b5e9d81b6373.png'
    },
    {
      name: 'GitHub',
      logo: '/lovable-uploads/6619ce1c-8ec2-4c6a-a229-c522d7ae4e55.png'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/7e2ff79e-0efe-46c2-9519-d1c4c00646cf.png" 
              alt="MindflowOS Logo" 
              className="h-8 w-auto animate-float"
            />
            <span className="text-xl font-bold text-gray-200">MindflowOS</span>
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
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
          
          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
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

        {/* Feature Highlights with Animations */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Strategy",
                  description: "Transform planning from periodic exercises into continuous optimization",
                  delay: 0
                },
                {
                  icon: Globe,
                  title: "Dynamic Execution",
                  description: "Adapt and evolve your strategy in real-time as market conditions change",
                  delay: 100
                },
                {
                  icon: Users,
                  title: "Team Alignment",
                  description: "Keep your entire organization synchronized with your strategic vision",
                  delay: 200
                }
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className="border-gray-800 bg-gray-900/50 backdrop-blur-xl hover:shadow-lg hover:shadow-blue-500/5 transition-all transform hover:scale-105 duration-300 animate-fade-up"
                  style={{ animationDelay: `${feature.delay}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                        <feature.icon className="h-6 w-6 text-blue-400" />
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

        {/* Integration Section with Logos */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
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
                  className="p-6 bg-gray-900/50 rounded-lg border border-gray-800 flex items-center justify-center transform hover:scale-105 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 animate-fade-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    className="h-8 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="max-w-3xl mx-auto px-4 text-center animate-fade-up">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Ready to Transform Your Business Planning?
            </h2>
            <p className="text-gray-400 mb-8">
              Join the exclusive waitlist and be among the first to experience the future 
              of business strategy.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:scale-105">
              Join Waitlist
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/7e2ff79e-0efe-46c2-9519-d1c4c00646cf.png" 
                alt="MindflowOS Logo" 
                className="h-6 w-auto" 
              />
              <span className="text-gray-200">MindflowOS</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 MindflowOS. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;