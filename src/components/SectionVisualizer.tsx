import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FileText, ChevronRight, ChevronDown, Activity, AlertCircle, CheckCircle } from 'lucide-react';

export const SectionVisualizer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Section Visualizer</span>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronDown /> : <ChevronRight />}
          </button>
        </CardTitle>
      </CardHeader>
      {isOpen && (
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <FileText className="mr-2" />
              <span>Document 1</span>
            </div>
            <div className="flex items-center">
              <Activity className="mr-2" />
              <span>Activity Log</span>
            </div>
            <div className="flex items-center">
              <AlertCircle className="mr-2" />
              <span>Alerts</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2" />
              <span>Completed Tasks</span>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};
