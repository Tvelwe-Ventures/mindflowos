import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export const BusinessStrategy = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Your Business Strategy, <span className="text-purple-600">Alive</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your static business plan into a dynamic operating system. Visualize, adapt,
            and execute your strategy in real-time with AI-powered insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Transform Static Plans into Living Systems</h3>
              <p className="text-gray-600 mb-6">
                Convert traditional business plans into interactive mind maps that evolve with your business. 
                Keep your strategy alive and actionable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>AI-powered document analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Real-time mind map generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Dynamic strategy visualization</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">AI-Enhanced Business Intelligence</h3>
              <p className="text-gray-600 mb-6">
                Let AI help you uncover insights, identify opportunities, and make data-driven 
                decisions with confidence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Predictive analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Market trend analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Competitive intelligence</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Seamless Team Collaboration</h3>
              <p className="text-gray-600 mb-6">
                Bring your entire organization into alignment with real-time updates and collaborative 
                planning tools.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Real-time collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Role-based access control</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Version control and history</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};