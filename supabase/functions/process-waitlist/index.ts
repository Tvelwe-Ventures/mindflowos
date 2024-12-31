import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

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
        subject: "Welcome to the MindflowOS Journey! 🚀",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background: linear-gradient(135deg, #9b87f5 0%, #6f4ff2 100%);
                  color: white;
                  padding: 30px;
                  border-radius: 10px;
                  text-align: center;
                  margin-bottom: 30px;
                }
                .content {
                  background: #f9f9f9;
                  padding: 30px;
                  border-radius: 10px;
                  margin-bottom: 20px;
                }
                .footer {
                  text-align: center;
                  color: #666;
                  font-size: 14px;
                  margin-top: 30px;
                }
                .button {
                  display: inline-block;
                  padding: 12px 24px;
                  background: linear-gradient(135deg, #9b87f5 0%, #6f4ff2 100%);
                  color: white;
                  text-decoration: none;
                  border-radius: 5px;
                  margin: 20px 0;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <h1>Welcome to MindflowOS! 🎉</h1>
              </div>
              
              <div class="content">
                <p>Hi there,</p>
                
                <p>Thank you for joining the MindflowOS waitlist! We're thrilled to have you on board as we build the future of mind mapping and knowledge organization.</p>
                
                <p>What's next?</p>
                <ul>
                  <li>You'll be among the first to know when we launch</li>
                  <li>Get exclusive early access to new features</li>
                  <li>Receive updates about our development progress</li>
                </ul>
                
                <p>In the meantime, follow us on social media to stay updated:</p>
                <a href="https://twitter.com/mindflowos" class="button">Follow us on Twitter</a>
              </div>
              
              <div class="footer">
                <p>Best regards,<br>The MindflowOS Team</p>
                <p>If you didn't sign up for MindflowOS, please ignore this email.</p>
              </div>
            </body>
          </html>
        `,
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