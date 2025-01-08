import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Star, GitBranch, Users } from 'lucide-react';
import { WaitlistForm } from '@/components/WaitlistForm';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-github-dark text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-github-dark/80 backdrop-blur supports-[backdrop-filter]:bg-github-dark/60' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <span className="text-xl font-semibold">
                Mapp<span className="text-github-accent">en</span>
              </span>
              <div className="hidden md:flex space-x-6">
                <button className="text-github-muted hover:text-white transition-colors">Business</button>
                <button className="text-github-muted hover:text-white transition-colors">Career</button>
                <button className="text-github-muted hover:text-white transition-colors">Features</button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm text-github-muted hover:text-white transition-colors">
                Sign in
              </button>
              <button className="px-4 py-2 bg-github-success text-white rounded-md hover:bg-opacity-90 transition-colors">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-github-accent to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Make it Mappen
          </motion.h1>
          <motion.p 
            className="text-xl text-github-muted mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Where AI-powered mind mapping meets intelligent execution. Transform your ideas into actionable strategies.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {['Business', 'Career'].map((path, index) => (
              <motion.div
                key={path}
                className="group relative p-6 bg-github-subtle rounded-lg border border-github-border hover:border-github-accent transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{path} Path</h3>
                <p className="text-github-muted mb-4">
                  {path === 'Business' 
                    ? 'Strategic planning and team alignment for organizations'
                    : 'Personal growth and career development for individuals'}
                </p>
                <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 text-github-muted group-hover:text-github-accent transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-github-darker">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "AI-Powered Insights",
                description: "Transform complexity into clarity with intelligent suggestions"
              },
              {
                icon: Users,
                title: "Real-time Collaboration",
                description: "Work together seamlessly with your team in real-time"
              },
              {
                icon: GitBranch,
                title: "Smart Templates",
                description: "Start faster with AI-optimized templates for any scenario"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-github-subtle rounded-lg border border-github-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="h-8 w-8 text-github-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-github-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-github-dark to-github-darker">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your ideas?</h2>
          <p className="text-github-muted mb-8">
            Join the waitlist to be among the first to experience the future of mind mapping.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </div>
  );
};

export default Index;