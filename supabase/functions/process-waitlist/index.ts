import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { email } = await req.json()
    console.log('Processing waitlist submission for email:', email)

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // First, let's create a waitlist table if it doesn't exist
    const { error: tableError } = await supabaseClient.rpc('create_waitlist_table')
    if (tableError) {
      console.error('Error creating table:', tableError)
      throw tableError
    }

    // Insert the email into the waitlist table
    const { error: insertError } = await supabaseClient
      .from('waitlist')
      .insert([{ email }])

    if (insertError) {
      console.error('Error inserting email:', insertError)
      throw insertError
    }

    return new Response(
      JSON.stringify({ message: 'Successfully added to waitlist' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error processing waitlist:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})