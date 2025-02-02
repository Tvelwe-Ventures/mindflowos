import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { FeedbackCategory, FeedbackTag } from './types';

export const useFeedbackMetadata = () => {
  const [categories, setCategories] = useState<FeedbackCategory[]>([]);
  const [tags, setTags] = useState<FeedbackTag[]>([]);

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

  return { categories, tags };
};