import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Logo } from '@/design-system/logo';

const LogoSpacing = () => {
  const [selectedSpacing, setSelectedSpacing] = useState('-0.04');
  
  const spacingOptions = [
    { value: '-0.04', label: 'Tighter (-0.04em)' },
    { value: '-0.03', label: 'Tight (-0.03em)' },
    { value: '-0.02', label: 'Moderate (-0.02em)' },
    { value: '-0.01', label: 'Slight (-0.01em)' },
    { value: '0', label: 'Default (0)' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Logo Letter Spacing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Spacing Controls */}
            <div className="flex gap-4">
              {spacingOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedSpacing(option.value)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedSpacing === option.value
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Logo Preview - Light Background */}
            <div className="bg-white p-8 rounded-lg border">
              <Logo size="lg" letterSpacing={selectedSpacing} variant="light" />
            </div>

            {/* Logo Preview - Dark Background */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <Logo size="lg" letterSpacing={selectedSpacing} variant="dark" />
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-medium mb-4">Technical Specifications</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Font: Space Grotesk</p>
                <p>Weight: SemiBold (600)</p>
                <p>Letter Spacing: {selectedSpacing}em</p>
                <p>Primary Color: #2563EB</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogoSpacing;