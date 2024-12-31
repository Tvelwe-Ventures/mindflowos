import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Brain, ArrowRight, Sparkles, Map, Target, CheckCircle2 } from 'lucide-react';

const EnhancedWaitlist = () => {
  const [stage, setStage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);

  const stages = [
    {
      id: 'welcome',
      title: "Transform Your Business Strategy",
      description: "Complete our interactive assessment to join the exclusive MindflowOS waitlist",
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
      title: "Your Strategy Profile",
      type: 'results'
    }
  ];

  const renderStageContent = () => {
    const currentStage = stages[stage];

    switch (currentStage.type) {
      case 'intro':
        return (
          <div className="relative text-center">
            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                  <Brain className="h-10 w-10 text-white" />
                </div>
              </div>
              <button
                onClick={() => setStage(1)}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
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
                className="group p-8 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-transparent hover:border-blue-200 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                <div className="mb-4 p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg w-16 h-16 flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-all">
                  <option.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="font-medium text-lg">{option.label}</div>
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
                className="w-full p-6 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-transparent hover:border-blue-200 text-left transition-all hover:shadow-lg group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg group-hover:from-blue-200 group-hover:to-indigo-200 transition-all">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{option.label}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        );

      case 'results':
        return (
          <div className="text-center relative">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-purple-50 opacity-50 rounded-xl" />
            
            {!isComplete ? (
              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600">
                  <span className="text-3xl font-bold text-white">{score}%</span>
                </div>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsComplete(true);
                  }}
                  className="max-w-sm mx-auto space-y-4"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    Join Exclusive Waitlist
                  </button>
                </form>
              </div>
            ) : (
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Welcome to the Future
                </h3>
                <p className="text-gray-600">
                  You're now on our exclusive waitlist. We'll notify you soon about early access.
                </p>
                <button
                  className="px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-all"
                >
                  Share with Your Network
                </button>
              </div>
            )}
          </div>
        );
    }
  };

  const handleStageComplete = (answer) => {
    setAnswers(prev => ({ ...prev, [stages[stage].id]: answer }));
    if (stage < stages.length - 1) {
      setStage(prev => prev + 1);
      setScore(prev => prev + 25);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-8">
      <style jsx>{`
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto">
        <Card className="w-full backdrop-blur-sm bg-white/90">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-center">
              <h2 
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                style={{ letterSpacing: '-0.04em' }}
              >
                {stages[stage].title}
              </h2>
              <p className="text-gray-600 mt-2">{stages[stage].description}</p>
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
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600' 
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedWaitlist;
