export const config = {
  environment: 'development',
  api: {
    baseUrl: 'http://localhost:8080',
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
    supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },
  features: {
    enableMocking: true,
    debugLogging: true,
  }
};