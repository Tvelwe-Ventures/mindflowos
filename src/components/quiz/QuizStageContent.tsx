import React from 'react';
import { Brain, Target, CheckCircle2 } from 'lucide-react';

interface QuizStageContentProps {
  stage: {
    type: string;
    options?: Array<{
      id: string;
      label: string;
      icon?: any;
    }>;
  };
  email?: string;
  setEmail?: (email: string) => void;
  handleStageComplete: (answer: string) => void;
  handleSubmit?: (e: React.FormEvent) => void;
  score?: number;
  isComplete?: boolean;
}

const QuizStageContent = ({
  stage,
  email,
  setEmail,
  handleStageComplete,
  handleSubmit,
  score,
  isComplete
}: QuizStageContentProps) => {
  switch (stage.type) {
    case 'intro':
      return (
        <div className="relative text-center">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-blob" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-blob animation-delay-2000" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                <Brain className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <button
              onClick={() => handleStageComplete('start')}
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
          {stage.options?.map((option) => (
            <button
              key={option.id}
              onClick={() => handleStageComplete(option.id)}
              className="group p-8 bg-gradient-to-b from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-4 p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg w-16 h-16 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all border border-blue-500/20">
                {option.icon && <option.icon className="h-8 w-8 text-blue-400" />}
              </div>
              <div className="font-medium text-lg text-gray-200">{option.label}</div>
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
                  onChange={(e) => setEmail?.(e.target.value)}
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

export default QuizStageContent;