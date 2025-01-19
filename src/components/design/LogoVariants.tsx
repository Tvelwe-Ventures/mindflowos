import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LogoVariants = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-8 text-white">Logo Variants</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Variant 1: Gradient Text */}
        <Card className="bg-github-dark border-github-border">
          <CardHeader>
            <CardTitle className="text-white">Gradient Text</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-48">
            <span 
              className="text-5xl font-bold"
              style={{
                background: 'linear-gradient(90deg, #9b87f5 0%, #7E69AB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.04em'
              }}
            >
              Mappen
            </span>
          </CardContent>
        </Card>

        {/* Variant 2: Solid Purple */}
        <Card className="bg-github-dark border-github-border">
          <CardHeader>
            <CardTitle className="text-white">Solid Purple</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-48">
            <span 
              className="text-5xl font-bold"
              style={{
                color: '#6E59A5',
                letterSpacing: '-0.04em'
              }}
            >
              Mappen
            </span>
          </CardContent>
        </Card>

        {/* Variant 3: Gradient with Shape */}
        <Card className="bg-github-dark border-github-border">
          <CardHeader>
            <CardTitle className="text-white">Gradient with Shape</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-48">
            <div 
              className="p-8 rounded-lg"
              style={{
                background: 'linear-gradient(90deg, #9b87f5 0%, #F97316 100%)',
              }}
            >
              <span 
                className="text-5xl font-bold text-white"
                style={{ letterSpacing: '-0.04em' }}
              >
                Mappen
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Variant 4: Solid Color with Shape */}
        <Card className="bg-github-dark border-github-border">
          <CardHeader>
            <CardTitle className="text-white">Solid Color with Shape</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-48">
            <div 
              className="p-8 rounded-lg"
              style={{ backgroundColor: '#6E59A5' }}
            >
              <span 
                className="text-5xl font-bold text-white"
                style={{ letterSpacing: '-0.04em' }}
              >
                Mappen
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Logo Images */}
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <Card className="bg-github-dark border-github-border">
          <CardHeader>
            <CardTitle className="text-white">Original Logo</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-48">
            <img 
              src="/lovable-uploads/180a52ad-c43b-4b90-869e-ae077104f107.png"
              alt="Original Mappen Logo"
              className="h-16"
            />
          </CardContent>
        </Card>
        <Card className="bg-github-dark border-github-border">
          <CardHeader>
            <CardTitle className="text-white">Gradient Shape Logo</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-48">
            <img 
              src="/lovable-uploads/245db2ab-12e2-4271-aabc-9405bbe797fa.png"
              alt="Gradient Shape Mappen Logo"
              className="h-16"
            />
          </CardContent>
        </Card>
        <Card className="bg-github-dark border-github-border">
          <CardHeader>
            <CardTitle className="text-white">New Solid Purple Logo</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-48">
            <img 
              src="/lovable-uploads/de1f185a-ffc5-43ec-9b47-07e182ea0a82.png"
              alt="New Solid Purple Mappen Logo"
              className="h-16"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogoVariants;