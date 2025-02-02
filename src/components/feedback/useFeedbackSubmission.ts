import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const useFeedbackSubmission = (onSubmitSuccess?: () => void) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitFeedback = async (formData: {
    email: string;
    feedbackType: string;
    message: string;
    specificArea: string | null;
    selectedCategory: string;
    selectedTags: string[];
  }) => {
    setIsSubmitting(true);
    console.log("Submitting feedback:", formData);

    try {
      const { error } = await supabase
        .from('feedback')
        .insert([
          {
            user_email: formData.email,
            feedback_type: formData.feedbackType,
            message: formData.message,
            specific_area: formData.feedbackType === 'specific' ? formData.specificArea : null,
            category: formData.selectedCategory ? [formData.selectedCategory] : [],
            tags: formData.selectedTags
          }
        ]);

      if (error) throw error;

      toast({
        title: "Thank you for your feedback!",
        description: "We appreciate your input and will use it to improve our service.",
      });

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

  return { isSubmitting, submitFeedback };
};