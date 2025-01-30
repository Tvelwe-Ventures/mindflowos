import { createClient } from '@supabase/supabase-js';
import { config } from '@/config/development';

console.log('Initializing Supabase client with:', {
  url: config.api.supabaseUrl,
  hasAnonKey: !!config.api.supabaseAnonKey,
});

if (!config.api.supabaseUrl) {
  throw new Error('Supabase URL is not configured');
}

if (!config.api.supabaseAnonKey) {
  throw new Error('Supabase Anon Key is not configured');
}

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