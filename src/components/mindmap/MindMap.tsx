import React, { useState } from 'react';
import { MindMapNode } from './MindMapNode';
import { MindMapControls } from './MindMapControls';

export const MindMap = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [expandedNode, setExpandedNode] = useState(null);

  const mindMapNodes = [
    {
      id: 'strategy',
      label: 'Strategy',
      type: 'core',
      children: [
        { id: 'market', label: 'Market', metrics: ['$8.9B TAM', '12.4% Growth'] },
        { id: 'product', label: 'Product', metrics: ['4 Key Features', '2 Patents'] },
        { id: 'team', label: 'Team', metrics: ['25 Members', '3 Offices'] }
      ]
    },
    {
      id: 'operations',
      label: 'Operations',
      type: 'process',
      children: [
        { id: 'sales', label: 'Sales Process', metrics: ['85% Win Rate'] },
        { id: 'delivery', label: 'Delivery', metrics: ['99% On Time'] }
      ]
    },
    {
      id: 'finance',
      label: 'Finance',
      type: 'metrics',
      children: [
        { id: 'revenue', label: 'Revenue', metrics: ['$2.5M ARR'] },
        { id: 'growth', label: 'Growth', metrics: ['156% YoY'] }
      ]
    }
  ];

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

      {mindMapNodes.map((node, idx) => (
        <MindMapNode
          key={node.id}
          node={node}
          index={idx}
          totalNodes={mindMapNodes.length}
          zoomLevel={zoomLevel}
          expandedNode={expandedNode}
          setExpandedNode={setExpandedNode}
        />
      ))}

      <MindMapControls zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
    </div>
  );
};
