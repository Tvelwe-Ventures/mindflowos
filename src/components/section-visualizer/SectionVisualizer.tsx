import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { sections } from './data';
import SectionCard from './SectionCard';

const SectionVisualizer = () => {
  const [expandedSections, setExpandedSections] = useState(new Set(['overview']));
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const toggleSection = (sectionKey: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionKey)) {
      newExpanded.delete(sectionKey);
    } else {
      newExpanded.add(sectionKey);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Business Plan Sections</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {Object.entries(sections).map(([sectionKey, sectionData]) => (
          <SectionCard
            key={sectionKey}
            section={sectionData}
            isExpanded={expandedSections.has(sectionKey)}
            onToggle={() => toggleSection(sectionKey)}
            isSelected={selectedSection === sectionKey}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default SectionVisualizer;