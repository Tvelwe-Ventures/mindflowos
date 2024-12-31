import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface Integration {
  category: string;
  tools: string[];
}

const integrations: Integration[] = [
  {
    category: "Project Management",
    tools: ["Jira", "Asana", "Trello"]
  },
  {
    category: "Documentation",
    tools: ["Notion", "Confluence", "Google Docs"]
  },
  {
    category: "Communication",
    tools: ["Slack", "Microsoft Teams", "Discord"]
  }
];

export const Integrations = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Works With Your Tools
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {integrations.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};