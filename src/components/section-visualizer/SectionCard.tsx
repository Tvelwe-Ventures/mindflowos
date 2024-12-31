import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { renderSectionStatus } from './utils';
import { renderMetrics, renderSubsections } from './SectionContent';
import { Section } from './types';

interface SectionCardProps {
  section: Section;
  isExpanded: boolean;
  onToggle: () => void;
  isSelected: boolean;
}

const SectionCard = ({ section, isExpanded, onToggle, isSelected }: SectionCardProps) => {
  return (
    <div 
      className={`border rounded-lg ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-gray-500" />
          <span className="font-medium">{section.title}</span>
          {renderSectionStatus(section.status)}
        </div>
        {isExpanded ? (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronRight className="h-5 w-5 text-gray-500" />
        )}
      </div>
      
      {isExpanded && (
        <div className="p-4 pt-0 border-t">
          {renderSubsections(section.subsections)}
          {renderMetrics(section.metrics)}
        </div>
      )}
    </div>
  );
};

export default SectionCard;