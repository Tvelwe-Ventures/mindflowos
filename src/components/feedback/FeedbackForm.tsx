import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { FeedbackTypeSelector } from './FeedbackTypeSelector';
import { CategorySelector } from './CategorySelector';
import { TagSelector } from './TagSelector';
import { FeedbackFormProps } from './types';
import { useFeedbackSubmission } from './useFeedbackSubmission';
import { useFeedbackMetadata } from './useFeedbackMetadata';

export const FeedbackForm = ({ onSubmitSuccess }: FeedbackFormProps) => {
  const [email, setEmail] = useState("");
  const [feedbackType, setFeedbackType] = useState("general");
  const [message, setMessage] = useState("");
  const [specificArea, setSpecificArea] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { categories, tags } = useFeedbackMetadata();
  const { isSubmitting, submitFeedback } = useFeedbackSubmission(onSubmitSuccess);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitFeedback({
      email,
      feedbackType,
      message,
      specificArea,
      selectedCategory,
      selectedTags
    });

    // Reset form
    setEmail("");
    setMessage("");
    setSpecificArea("");
    setFeedbackType("general");
    setSelectedCategory("");
    setSelectedTags([]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your@email.com"
        />
      </div>

      <FeedbackTypeSelector 
        value={feedbackType}
        onChange={setFeedbackType}
      />

      {feedbackType === 'specific' && (
        <div className="space-y-2">
          <Label htmlFor="specificArea">Specific Area</Label>
          <Input
            id="specificArea"
            value={specificArea}
            onChange={(e) => setSpecificArea(e.target.value)}
            placeholder="Which area are you providing feedback for?"
          />
        </div>
      )}

      <CategorySelector 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <TagSelector 
        tags={tags}
        selectedTags={selectedTags}
        onTagToggle={(tagName) => {
          setSelectedTags(prev => 
            prev.includes(tagName)
              ? prev.filter(t => t !== tagName)
              : [...prev, tagName]
          );
        }}
      />

      <div className="space-y-2">
        <Label htmlFor="message">Your Feedback</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Please share your thoughts..."
          className="min-h-[100px]"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Feedback"
        )}
      </Button>
    </form>
  );
};

export default FeedbackForm;