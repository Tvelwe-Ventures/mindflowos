import React from 'react';

type Integration = {
  name: string;
  logo: string;
  color: string;
};

const integrations: Integration[] = [
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
              className="p-6 rounded-lg border border-purple-500/20 flex items-center justify-center transform hover:scale-105 transition-all duration-300 group"
              style={{ 
                background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.15), rgba(88, 28, 135, 0.25))',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.15)'
              }}
            >
              <div className="bg-gray-900/90 p-3 rounded-lg group-hover:bg-gray-900 transition-colors">
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