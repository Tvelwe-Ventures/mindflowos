import React, { useState } from 'react';
import { Brain, Settings, ChevronRight, Plus, Minus } from 'lucide-react';
import { mindMapNodes } from './showcaseData';

const MindMapDemo = () => {
  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <div className="relative h-[600px] bg-blue-50 rounded-xl shadow-xl overflow-hidden">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          transform: `scale(${zoomLevel})`,
          transformOrigin: 'center'
        }} 
      />

      {mindMapNodes.map((node, idx) => {
        const angle = (idx * 2 * Math.PI) / mindMapNodes.length;
        const radius = 200;
        const x = Math.cos(angle) * radius + 300;
        const y = Math.sin(angle) * radius + 300;

        return (
          <div
            key={node.id}
            className="absolute transition-all duration-500 cursor-pointer"
            style={{
              left: x,
              top: y,
              transform: `translate(-50%, -50%) scale(${zoomLevel})`
            }}
            onClick={() => setExpandedNode(node.id === expandedNode ? null : node.id)}
          >
            <div className="p-4 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-2">
                {node.type === 'core' && <Brain className="h-4 w-4" />}
                {node.type === 'process' && <Settings className="h-4 w-4" />}
                {node.type === 'metrics' && <ChevronRight className="h-4 w-4" />}
                {node.label}
              </div>
            </div>

            {expandedNode === node.id && (
              <div className="absolute top-full left-0 mt-2 space-y-2">
                {node.children.map((child) => (
                  <div
                    key={child.id}
                    className="bg-white rounded-lg shadow-lg p-3 text-sm"
                  >
                    <div className="font-medium">{child.label}</div>
                    {child.metrics.map((metric, i) => (
                      <div key={i} className="text-gray-600 text-xs">{metric}</div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-2 flex space-x-2">
        <button 
          onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 2))}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button 
          onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.5))}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <Minus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MindMapDemo;