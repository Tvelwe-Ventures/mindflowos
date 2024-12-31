import { createClient } from '@supabase/supabase-js';

// Add console logs to help debug environment variables
console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('Supabase Anon Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Failed to load Supabase environment variables. Please ensure Supabase is connected.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);