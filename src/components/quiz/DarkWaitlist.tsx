import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Brain, ArrowRight, Sparkles, Map, Target, CheckCircle2 } from 'lucide-react';

const DarkWaitlist = () => {
  const [stage, setStage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);

  const stages = [
    {
      id: 'welcome',
      title: "Transform Your Business Strategy",
      description: "Join the exclusive waitlist and be first to experience the future",
      type: 'intro'
    },
    {
      id: 'vision',
      title: "Visualize Your Strategy",
      description: "How do you currently visualize your business strategy?",
      type: 'strategy-map',
      options: [
        { id: 'documents', label: 'Traditional Documents', icon: Map },
        { id: 'mindmaps', label: 'Mind Maps', icon: Brain },
        { id: 'presentations', label: 'Presentations', icon: Target }
      ]
    },
    {
      id: 'challenges',
      title: "Strategic Challenges",
      description: "Select your biggest strategic planning challenge:",
      type: 'challenge-select',
      options: [
        { id: 'alignment', label: 'Team Alignment' },
        { id: 'execution', label: 'Strategy Execution' },
        { id: 'adaptation', label: 'Market Adaptation' }
      ]
    },
    {
      id: 'completion',
      title: "Ready to Transform Your Strategy",
      description: "Join our exclusive waitlist to be among the first to experience MindflowOS",
      type: 'completion'
    }
  ];

  const handleStageComplete = (answer) => {
    setAnswers(prev => ({ ...prev, [stages[stage].id]: answer }));
    if (stage < stages.length - 1) {
      setStage(prev => prev + 1);
      setScore(prev => prev + 33);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsComplete(true);
  };

  const renderStageContent = () => {
    const currentStage = stages[stage];

    switch (currentStage.type) {
      case 'intro':
        return (
          <div className="relative text-center">
            {/* Animated Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-blob" />
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-blob animation-delay-2000" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                  <Brain className="h-12 w-12 text-blue-400" />
                </div>
              </div>
              <button
                onClick={() => setStage(1)}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:scale-105"
              >
                Begin Your Journey
              </button>
            </div>
          </div>
        );

      case 'strategy-map':
        return (
          <div className="grid grid-cols-3 gap-6">
            {currentStage.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleStageComplete(option.id)}
                className="group p-8 bg-gradient-to-b from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-4 p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg w-16 h-16 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all border border-blue-500/20">
                  <option.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div className="font-medium text-lg text-gray-200">{option.label}</div>
              </button>
            ))}
          </div>
        );

      case 'challenge-select':
        return (
          <div className="space-y-4">
            {currentStage.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleStageComplete(option.id)}
                className="w-full p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 text-left transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all border border-blue-500/20">
                    <Target className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="font-medium text-lg text-gray-200">{option.label}</div>
                </div>
              </button>
            ))}
          </div>
        );

      case 'completion':
        return (
          <div className="relative text-center">
            {!isComplete ? (
              <div className="space-y-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20">
                  <span className="text-3xl font-bold text-blue-400">{score}%</span>
                </div>
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-200"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:scale-105"
                  >
                    Join Exclusive Waitlist
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 border border-green-500/20">
                  <CheckCircle2 className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Welcome to the Future
                </h3>
                <p className="text-gray-400">
                  You're now on our exclusive waitlist. We'll notify you soon about early access.
                </p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-8">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `
      }} />
      
      <div className="max-w-4xl mx-auto">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none" />
        
        <Card className="w-full border-gray-800 bg-gray-900/50 backdrop-blur-xl">
          <CardHeader className="border-b border-gray-800">
            <CardTitle className="text-center">
              <h2 
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                style={{ letterSpacing: '-0.04em' }}
              >
                {stages[stage].title}
              </h2>
              <p className="text-gray-400 mt-2">{stages[stage].description}</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {renderStageContent()}
          </CardContent>
        </Card>

        {stage > 0 && stage < stages.length - 1 && (
          <div className="mt-8 flex justify-center gap-3">
            {stages.slice(1, -1).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index <= stage - 1 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                    : 'bg-gray-800'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DarkWaitlist;