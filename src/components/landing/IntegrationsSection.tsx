import React from 'react';

type Integration = {
  name: string;
  logo: string;
  color: string;
};

const integrations: Integration[] = [
  {
    name: 'Notion',
    logo: '/lovable-uploads/c8a2f903-f0c6-4873-b4d4-cccc9aca5f17.png',
    color: '#E6E6E6'
  },
  {
    name: 'Slack',
    logo: '/lovable-uploads/f8ef7c1e-bb8a-4afb-ab15-c5e776d91a1c.png',
    color: '#ECE5FF'
  },
  {
    name: 'Asana',
    logo: '/lovable-uploads/fa48a5b5-8f53-47c2-ad61-0fee223335f6.png',
    color: '#FFE5EC'
  },
  {
    name: 'GitHub',
    logo: '/lovable-uploads/913cf55d-7b38-42d7-80c3-e7c4b2e9f28b.png',
    color: '#E5F6FF'
  }
];

export const IntegrationsSection = () => {
  return (
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
          {integrations.map((tool) => (
            <div 
              key={tool.name}
              className="relative p-6 flex items-center justify-center transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative z-10">
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
  );
};