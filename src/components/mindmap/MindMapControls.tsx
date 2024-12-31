import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface MindMapControlsProps {
  zoomLevel: number;
  setZoomLevel: (value: number) => void;
}

export const MindMapControls: React.FC<MindMapControlsProps> = ({ zoomLevel, setZoomLevel }) => {
  return (
    <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-2 flex space-x-2">
      <button 
        onClick={() => setZoomLevel(Math.min(zoomLevel + 0.2, 2))}
        className="p-2 hover:bg-gray-100 rounded"
      >
        <Plus className="h-4 w-4" />
      </button>
      <button 
        onClick={() => setZoomLevel(Math.max(zoomLevel - 0.2, 0.5))}
        className="p-2 hover:bg-gray-100 rounded"
      >
        <Minus className="h-4 w-4" />
      </button>
    </div>
  );
};