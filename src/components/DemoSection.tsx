import { useState, useEffect } from "react";
import { Brain, FileText, Sparkles } from "lucide-react";

const stages = [
  {
    title: "AI Analysis",
    icon: Brain,
    description: "Our AI analyzes your business plan and extracts key insights",
  },
  {
    title: "Visual Mapping",
    icon: Sparkles,
    description: "Transform your plan into an interactive mind map",
  },
  {
    title: "Operating System",
    icon: FileText,
    description: "Convert strategies into actionable tasks and metrics",
  },
];

export const DemoSection = () => {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="demo" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">See it in action</h2>
        
        <div className="relative">
          <div className="absolute top-0 left-1/2 h-1 w-full max-w-3xl -translate-x-1/2 bg-gray-200">
            <div
              className="h-full bg-accent transition-all duration-500"
              style={{ width: `${((currentStage + 1) / stages.length) * 100}%` }}
            />
          </div>

          <div className="relative max-w-3xl mx-auto mt-8 grid grid-cols-3 gap-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div
                  key={index}
                  className={`text-center transition-opacity duration-500 ${
                    index === currentStage ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                        index === currentStage
                          ? "bg-accent text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-semibold">{stage.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{stage.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 aspect-video">
            <div className="w-full h-full flex items-center justify-center">
              {currentStage === 0 && (
                <div className="animate-fade-up">
                  <Brain className="w-16 h-16 text-accent mb-4 mx-auto" />
                  <p className="text-center text-gray-600">Analyzing your business plan...</p>
                </div>
              )}
              {currentStage === 1 && (
                <div className="animate-fade-up">
                  <Sparkles className="w-16 h-16 text-accent mb-4 mx-auto" />
                  <p className="text-center text-gray-600">Creating visual mind map...</p>
                </div>
              )}
              {currentStage === 2 && (
                <div className="animate-fade-up">
                  <FileText className="w-16 h-16 text-accent mb-4 mx-auto" />
                  <p className="text-center text-gray-600">Building your operating system...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};