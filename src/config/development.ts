export const config = {
  environment: 'development',
  api: {
    baseUrl: 'http://localhost:8080',
    supabaseUrl: 'https://hjlbhoyxsdidzqbubquf.supabase.co',
    supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  },
  features: {
    enableMocking: true,
    debugLogging: true,
  }
};