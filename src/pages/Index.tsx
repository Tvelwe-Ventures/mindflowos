import React from 'react';
import { Check } from 'lucide-react';
import LandingPage from "@/components/landing/LandingPage";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingPage />
      
      {/* Business Strategy Section */}
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
            {/* Transform Static Plans Card */}
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

            {/* AI-Enhanced Business Intelligence Card */}
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

            {/* Seamless Team Collaboration Card */}
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

          {/* Empower Every Department Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Empower Every Department</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Marketing Teams */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Marketing Teams</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">→</span>
                      <span>Visual campaign planning</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">→</span>
                      <span>ROI tracking and optimization</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">→</span>
                      <span>Integrated market analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Sales Operations */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Sales Operations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">→</span>
                      <span>Territory planning</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">→</span>
                      <span>Pipeline visualization</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">→</span>
                      <span>Performance tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Product Management */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Product Management</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">→</span>
                      <span>Roadmap visualization</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">→</span>
                      <span>Feature prioritization</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">→</span>
                      <span>Sprint planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Legal & Compliance */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Legal & Compliance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">→</span>
                      <span>Risk assessment mapping</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">→</span>
                      <span>Compliance tracking</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">→</span>
                      <span>Policy management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining sections */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionVisualizer />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <EquityManagement />
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <PerformanceTracker />
        </div>
      </section>
    </div>
  );
};

export default Index;
