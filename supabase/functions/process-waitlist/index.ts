import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

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
    const { email } = await req.json();
    console.log("Processing waitlist registration for:", email);

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
  <style>
    /* ... keep existing code (CSS styles) */
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://mindflowos.com/logo-white.png" alt="MindflowOS Logo" width="200">
    </div>

    <div class="content">
      <h1>Welcome to the Future of Business Planning</h1>
      
      <p>Hi there,</p>
      
      <p>Thanks for joining the MindflowOS early access list! We're excited to have you be among the first to experience our platform that transforms static business plans into dynamic, living systems.</p>

      <h2>What to Expect</h2>
      <div class="features">
        <div class="feature-item">
          <strong>⭐️ Early Access:</strong> Be among the first to try MindflowOS
        </div>
        <div class="feature-item">
          <strong>🎁 Founding Member Benefits:</strong> Special launch pricing and features
        </div>
        <div class="feature-item">
          <strong>🎯 Priority Support:</strong> Direct access to our team during onboarding
        </div>
      </div>

      <h2>Coming Soon</h2>
      <div class="features">
        <div class="feature-item">
          <strong>🧠 AI-powered strategy visualization</strong>
        </div>
        <div class="feature-item">
          <strong>👥 Real-time collaborative planning</strong>
        </div>
        <div class="feature-item">
          <strong>📊 Intelligent business insights</strong>
        </div>
        <div class="feature-item">
          <strong>🔄 Seamless tool integration</strong>
        </div>
      </div>

      <div class="social">
        <p><strong>Stay Connected</strong></p>
        <a href="https://linkedin.com/company/mindflowos" class="social-link">LinkedIn</a>
        <a href="https://twitter.com/mindflowos" class="social-link">Twitter</a>
      </div>
    </div>

    <div class="footer">
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
      throw new Error("Failed to send email");
    }

    const emailResponse = await res.json();
    console.log("Email sent successfully:", emailResponse);

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