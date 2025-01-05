import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import { FeedbackTag } from './types';

interface TagSelectorProps {
  tags: FeedbackTag[];
  selectedTags: string[];
  onTagToggle: (tagName: string) => void;
}

export const TagSelector = ({ tags, selectedTags, onTagToggle }: TagSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label>Tags</Label>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Button
            key={tag.id}
            type="button"
            variant={selectedTags.includes(tag.name) ? "default" : "outline"}
            size="sm"
            onClick={() => onTagToggle(tag.name)}
            className="flex items-center gap-1"
          >
            {tag.name}
            {selectedTags.includes(tag.name) && <Check className="h-4 w-4" />}
          </Button>
        ))}
      </div>
    </div>
  );
};