import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import StageProgress from './StageProgress';
import QuizStageContent from './QuizStageContent';
import { stages } from './waitlistData';

const DarkWaitlist = () => {
  const [stage, setStage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);

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
            <QuizStageContent
              stage={stages[stage]}
              email={email}
              setEmail={setEmail}
              handleStageComplete={handleStageComplete}
              handleSubmit={handleSubmit}
              score={score}
              isComplete={isComplete}
            />
          </CardContent>
        </Card>

        {stage > 0 && stage < stages.length - 1 && (
          <StageProgress currentStage={stage} totalStages={stages.length} />
        )}
      </div>
    </div>
  );
};

export default DarkWaitlist;