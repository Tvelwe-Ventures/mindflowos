import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { typography, colors } from '@/design-system';
import { Logo } from '@/design-system/logo';

const BrandSystem = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Typography System */}
      <Card>
        <CardHeader>
          <CardTitle>Typography System</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Brand Name */}
            <div className="mb-8">
              <Logo size="md" letterSpacing="-0.04" />
              <div className="text-sm text-gray-600 mt-2">
                Bricolage Grotesque / SemiBold 600 / Tracking -0.04em
              </div>
            </div>

            {/* Headings */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Headings</h3>
              <div className="space-y-6">
                <div>
                  <h1 className={`${typography.headings.h1} mb-2`}>
                    Transform Your Business Strategy
                  </h1>
                  <div className="text-sm text-gray-600">
                    H1 - Bricolage Grotesque Bold 600 / 36px / -0.02em tracking
                  </div>
                </div>
                <div>
                  <h2 className={`${typography.headings.h2} mb-2`}>
                    Visual Planning Made Simple
                  </h2>
                  <div className="text-sm text-gray-600">
                    H2 - Bricolage Grotesque SemiBold 500 / 30px / -0.02em tracking
                  </div>
                </div>
                <div>
                  <h3 className={`${typography.headings.h3} mb-2`}>
                    AI-Powered Insights
                  </h3>
                  <div className="text-sm text-gray-600">
                    H3 - Bricolage Grotesque Medium 400 / 24px / -0.01em tracking
                  </div>
                </div>
              </div>
            </div>

            {/* Body Text */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Body Text</h3>
              <div className="space-y-6">
                <div>
                  <p className={`${typography.body.large} mb-2 max-w-2xl`}>
                    Transform your static business plan into a dynamic operating system. 
                    Visualize, adapt, and execute your strategy in real-time.
                  </p>
                  <div className="text-sm text-gray-600">
                    Large - Bricolage Grotesque Regular 400 / 18px / 1.6 line-height
                  </div>
                </div>
                <div>
                  <p className={`${typography.body.base} mb-2 max-w-2xl`}>
                    MindflowOS helps teams collaborate on business strategy through 
                    interactive mind maps and AI-powered insights.
                  </p>
                  <div className="text-sm text-gray-600">
                    Base - Bricolage Grotesque Regular 400 / 16px / 1.6 line-height
                  </div>
                </div>
                <div>
                  <p className={`${typography.body.small} mb-2 max-w-2xl`}>
                    Get started with our free trial and transform how your team approaches 
                    business planning.
                  </p>
                  <div className="text-sm text-gray-600">
                    Small - Bricolage Grotesque Regular 400 / 14px / 1.6 line-height
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Component Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Button */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Buttons</h3>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                  Learn More
                </button>
              </div>
            </div>

            {/* Feature Card */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Feature Cards</h3>
              <div className="bg-white p-6 rounded-xl border max-w-sm">
                <Sparkles className="h-6 w-6 text-blue-600 mb-4" />
                <h3 className={`${typography.headings.h3} mb-2`}>
                  AI-Powered Insights
                </h3>
                <p className={`${typography.body.base} text-gray-600`}>
                  Get intelligent suggestions and analytics to optimize your strategy
                  in real-time.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BrandSystem;