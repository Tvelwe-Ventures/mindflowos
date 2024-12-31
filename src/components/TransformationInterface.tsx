import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { TransformationSection, TransformationProgress, sections, initialTransformationStatus } from './transformation';

const TransformationInterface = () => {
  const [transformationStatus, setTransformationStatus] = useState(initialTransformationStatus);

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