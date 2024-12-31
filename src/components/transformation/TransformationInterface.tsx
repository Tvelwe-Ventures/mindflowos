import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FileText, Map, ArrowRight, CheckCircle } from 'lucide-react';
import { TransformationSection } from './TransformationSection';
import { TransformationProgress } from './TransformationProgress';
import { sections, transformationStatus } from './transformationData';

const TransformationInterface = () => {
  return (
    <div className="space-y-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Business Plan Transformation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TransformationProgress />
          <div className="space-y-4">
            {sections.map((section) => (
              <TransformationSection 
                key={section.id}
                section={section}
                status={transformationStatus[section.id]}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransformationInterface;