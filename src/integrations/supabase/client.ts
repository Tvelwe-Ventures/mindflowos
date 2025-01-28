import { createClient } from '@supabase/supabase-js';
import { config } from '@/config/development';

export const supabase = createClient(
  config.api.supabaseUrl,
  config.api.supabaseAnonKey,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);