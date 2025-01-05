export interface FeedbackCategory {
  id: string;
  name: string;
}

export interface FeedbackTag {
  id: string;
  name: string;
}

export interface FeedbackFormProps {
  onSubmitSuccess?: () => void;
  supabaseUrl?: string;
  supabaseAnonKey?: string;
}