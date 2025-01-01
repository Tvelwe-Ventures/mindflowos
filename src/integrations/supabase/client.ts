import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hjlbhoyxsdidzqbubquf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbGJob3l4c2RpZHpxYnVicXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxNjE2MDAsImV4cCI6MjAxOTczNzYwMH0.OYYDcpvxPxKVVpxqMU_wXxMPxpmP4-UoG3QE9-Hs_Ow';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});