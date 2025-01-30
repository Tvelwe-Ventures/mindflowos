export const config = {
  environment: 'development',
  api: {
    baseUrl: 'http://localhost:8080',
    supabaseUrl: 'https://hjlbhoyxsdidzqbubquf.supabase.co',
    supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbGJob3l4c2RpZHpxYnVicXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MzY3MTYsImV4cCI6MjAyMjIxMjcxNn0.1WxXqHYDV4oBM_vqGZBEGqYs-WXDFHUqThweWDgxeJw',
  },
  features: {
    enableMocking: true,
    debugLogging: true,
  }
};