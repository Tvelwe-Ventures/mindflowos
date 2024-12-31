import React from 'react';
import { Brain, Settings, ChevronRight } from 'lucide-react';

interface MindMapNodeProps {
  node: {
    id: string;
    label: string;
    type: string;
    children: Array<{
      id: string;
      label: string;
      metrics: string[];
    }>;
  };
  index: number;
  totalNodes: number;
  zoomLevel: number;
  expandedNode: string | null;
  setExpandedNode: (nodeId: string | null) => void;
}

export const MindMapNode: React.FC<MindMapNodeProps> = ({
  node,
  index,
  totalNodes,
  zoomLevel,
  expandedNode,
  setExpandedNode
}) => {
  const angle = (index * 2 * Math.PI) / totalNodes;
  const radius = 200;
  const x = Math.cos(angle) * radius + 300;
  const y = Math.sin(angle) * radius + 300;

  return (
    <div
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
};