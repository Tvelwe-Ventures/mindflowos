import { createClient } from '@supabase/supabase-js';

// These values are public and can be exposed in the client
const supabaseUrl = 'https://hjlbhoyxsdidzqbubquf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbGJob3l4c2RpZHpxYnVicXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwNzA3NzYsImV4cCI6MjAxOTY0Njc3Nn0.Wd_oWxHcH6gNvHbL-p0WiAKVvLi-k1nQQD0Ywm-Aqvs';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Failed to load Supabase environment variables. Please ensure Supabase is connected.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);