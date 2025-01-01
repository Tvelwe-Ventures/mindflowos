import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting waitlist process...");
    
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing Supabase environment variables");
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { email } = await req.json();
    console.log("Processing waitlist registration for:", email);

    // First, let's create the waitlist table if it doesn't exist
    const { error: tableError } = await supabase.rpc('create_waitlist_table');
    if (tableError) {
      console.error("Error ensuring table exists:", tableError);
      // Continue anyway as the table might already exist
    }

    // Insert into waitlist table
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(dbError.message);
    }

    console.log("Successfully added to waitlist table");

    // Send welcome email via Resend
    if (RESEND_API_KEY) {
      console.log("Attempting to send email via Resend...");
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "MindflowOS <onboarding@resend.dev>",
          to: [email],
          subject: "Welcome to MindflowOS! 🚀",
          html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to MindflowOS</title>
</head>
<body>
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <h1>Welcome to the Future of Business Planning</h1>
    
    <p>Hi there,</p>
    
    <p>Thanks for joining the MindflowOS early access list! We're excited to have you be among the first to experience our platform that transforms static business plans into dynamic, living systems.</p>

    <h2>What to Expect</h2>
    <ul>
      <li>⭐️ Early Access: Be among the first to try MindflowOS</li>
      <li>🎁 Founding Member Benefits: Special launch pricing and features</li>
      <li>🎯 Priority Support: Direct access to our team during onboarding</li>
    </ul>

    <h2>Coming Soon</h2>
    <ul>
      <li>🧠 AI-powered strategy visualization</li>
      <li>👥 Real-time collaborative planning</li>
      <li>📊 Intelligent business insights</li>
      <li>🔄 Seamless tool integration</li>
    </ul>

    <div style="margin-top: 40px;">
      <p><strong>Stay Connected</strong></p>
      <p>
        <a href="https://linkedin.com/company/mindflowos">LinkedIn</a> | 
        <a href="https://twitter.com/mindflowos">Twitter</a>
      </p>
    </div>

    <div style="margin-top: 40px; font-size: 12px; color: #666;">
      <p>You're receiving this email because you joined the MindflowOS waitlist.</p>
      <p>MindflowOS Inc.<br>San Francisco, CA</p>
    </div>
  </div>
</body>
</html>`,
        }),
      });

      if (!res.ok) {
        const error = await res.text();
        console.error("Resend API error:", error);
        // Don't throw here, we still want to return success since the user was added to waitlist
      } else {
        const emailResponse = await res.json();
        console.log("Email sent successfully:", emailResponse);
      }
    }

    return new Response(
      JSON.stringify({ message: "Successfully joined waitlist" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error in process-waitlist function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
};

serve(handler);