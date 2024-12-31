import { createClient } from '@supabase/supabase-js';

// Add console logs to help debug environment variables
console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('Supabase Anon Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);

// Wait a short time to ensure environment variables are loaded
const getSupabaseClient = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase environment variables not found. Retrying in 1 second...');
    return new Promise((resolve) => {
      setTimeout(() => {
        const retryUrl = import.meta.env.VITE_SUPABASE_URL;
        const retryKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        
        if (!retryUrl || !retryKey) {
          throw new Error('Failed to load Supabase environment variables. Please ensure Supabase is connected.');
        }
        
        resolve(createClient(retryUrl, retryKey));
      }, 1000);
    });
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = await getSupabaseClient();