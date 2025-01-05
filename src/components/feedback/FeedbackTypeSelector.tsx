import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface FeedbackTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const FeedbackTypeSelector = ({ value, onChange }: FeedbackTypeSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label>Feedback Type</Label>
      <RadioGroup value={value} onValueChange={onChange} className="flex gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="general" id="general" />
          <Label htmlFor="general">General</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="specific" id="specific" />
          <Label htmlFor="specific">Specific</Label>
        </div>
      </RadioGroup>
    </div>
  );
};