import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client"; // Import the existing client
import { FeedbackTypeSelector } from './FeedbackTypeSelector';
import { CategorySelector } from './CategorySelector';
import { TagSelector } from './TagSelector';
import { FeedbackCategory, FeedbackTag, FeedbackFormProps } from './types';

export const FeedbackForm = ({ onSubmitSuccess }: FeedbackFormProps) => {
  const [email, setEmail] = useState("");
  const [feedbackType, setFeedbackType] = useState("general");
  const [message, setMessage] = useState("");
  const [specificArea, setSpecificArea] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [categories, setCategories] = useState<FeedbackCategory[]>([]);
  const [tags, setTags] = useState<FeedbackTag[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchCategoriesAndTags = async () => {
      const { data: categoriesData } = await supabase
        .from('feedback_categories')
        .select('id, name');
      
      const { data: tagsData } = await supabase
        .from('feedback_tags')
        .select('id, name');

      if (categoriesData) setCategories(categoriesData);
      if (tagsData) setTags(tagsData);
    };

    fetchCategoriesAndTags();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Submitting feedback:", { email, feedbackType, message, specificArea, selectedCategory, selectedTags });

    try {
      const { error } = await supabase
        .from('feedback')
        .insert([
          {
            user_email: email,
            feedback_type: feedbackType,
            message,
            specific_area: feedbackType === 'specific' ? specificArea : null,
            category: selectedCategory ? [selectedCategory] : [],
            tags: selectedTags
          }
        ]);

      if (error) throw error;

      toast({
        title: "Thank you for your feedback!",
        description: "We appreciate your input and will use it to improve our service.",
      });

      // Reset form
      setEmail("");
      setMessage("");
      setSpecificArea("");
      setFeedbackType("general");
      setSelectedCategory("");
      setSelectedTags([]);
      
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast({
        title: "Error submitting feedback",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTagToggle = (tagName: string) => {
    setSelectedTags(prev => 
      prev.includes(tagName)
        ? prev.filter(t => t !== tagName)
        : [...prev, tagName]
    );
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
        onTagToggle={handleTagToggle}
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