import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Check, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FeedbackFormProps {
  onSubmitSuccess?: () => void;
}

const FeedbackForm = ({ onSubmitSuccess }: FeedbackFormProps) => {
  const [email, setEmail] = useState("");
  const [feedbackType, setFeedbackType] = useState("general");
  const [message, setMessage] = useState("");
  const [specificArea, setSpecificArea] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [tags, setTags] = useState<{ id: string; name: string }[]>([]);
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

      <div className="space-y-2">
        <Label>Feedback Type</Label>
        <RadioGroup value={feedbackType} onValueChange={setFeedbackType} className="flex gap-4">
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

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Tags</Label>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button
              key={tag.id}
              type="button"
              variant={selectedTags.includes(tag.name) ? "default" : "outline"}
              size="sm"
              onClick={() => handleTagToggle(tag.name)}
              className="flex items-center gap-1"
            >
              {tag.name}
              {selectedTags.includes(tag.name) && <Check className="h-4 w-4" />}
            </Button>
          ))}
        </div>
      </div>

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