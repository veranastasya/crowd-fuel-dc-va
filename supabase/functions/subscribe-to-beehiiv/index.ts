import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SubscribeRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: SubscribeRequest = await req.json();

    // Validate email
    if (!email || !email.trim()) {
      console.error('Email is required');
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      console.error('Invalid email format:', email);
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Get Beehiiv credentials from environment
    const beehiivApiKey = Deno.env.get('BEEHIIV_API_KEY');
    const beehiivPublicationId = Deno.env.get('BEEHIIV_PUBLICATION_ID');

    if (!beehiivApiKey || !beehiivPublicationId) {
      console.error('Beehiiv credentials not configured');
      return new Response(
        JSON.stringify({ error: 'Service configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    console.log(`Subscribing email to Beehiiv: ${email}`);

    // Call Beehiiv API
    const beehiivResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${beehiivPublicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${beehiivApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          reactivate_existing: false,
          send_welcome_email: true,
          double_opt_override: "true",
          utm_source: 'website',
          utm_medium: 'newsletter_form'
        })
      }
    );

    const responseData = await beehiivResponse.json();

    if (!beehiivResponse.ok) {
      console.error('Beehiiv API error:', responseData);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to subscribe to newsletter',
          details: responseData 
        }),
        { status: beehiivResponse.status, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    console.log('Successfully subscribed to Beehiiv:', responseData);

    // Send custom welcome email via Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const welcomeEmail = await resend.emails.send({
          from: 'CrowdFuel <hello@crowdfuel.co>',
          to: [email.trim()],
          subject: 'Welcome to CrowdFuel Founders Club! 🚀',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f8f9fa;">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                  <!-- Header with gradient -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #3B82F6 0%, #A855F7 50%, #EC4899 100%); padding: 40px 20px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">Welcome to CrowdFuel!</h1>
                    </td>
                  </tr>
                  
                  <!-- Main content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 24px; font-weight: bold;">Hey there, Founder! 👋</h2>
                      
                      <p style="margin: 0 0 16px 0; color: #4a5568; font-size: 16px; line-height: 1.6;">
                        We're thrilled to have you join the CrowdFuel Founders Club community!
                      </p>
                      
                      <p style="margin: 0 0 16px 0; color: #4a5568; font-size: 16px; line-height: 1.6;">
                        You're now part of a vibrant community of 500+ founders across DC and Northern Virginia who understand the challenges and triumphs of entrepreneurship.
                      </p>
                      
                      <div style="background-color: #f7fafc; border-left: 4px solid #3B82F6; padding: 20px; margin: 24px 0;">
                        <p style="margin: 0 0 12px 0; color: #2d3748; font-size: 16px; font-weight: bold;">What's Next?</p>
                        <ul style="margin: 0; padding-left: 20px; color: #4a5568; font-size: 15px; line-height: 1.8;">
                          <li>Get exclusive insights delivered to your inbox</li>
                          <li>Early access to networking events</li>
                          <li>Founder resources and growth strategies</li>
                          <li>Connect with like-minded entrepreneurs</li>
                        </ul>
                      </div>
                      
                      <p style="margin: 24px 0 16px 0; color: #4a5568; font-size: 16px; line-height: 1.6;">
                        If you're looking for a support group that truly understands the entrepreneurship journey, you're in the right place!
                      </p>
                      
                      <!-- CTA Button -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 32px 0;">
                        <tr>
                          <td align="center">
                            <a href="https://www.linkedin.com/company/104932081" style="display: inline-block; background: linear-gradient(135deg, #3B82F6 0%, #A855F7 50%, #EC4899 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: bold; font-size: 16px;">
                              Connect with Us on LinkedIn
                            </a>
                          </td>
                        </tr>
                      </table>
                      
                      <p style="margin: 24px 0 0 0; color: #4a5568; font-size: 16px; line-height: 1.6;">
                        To your success,<br>
                        <strong style="color: #2d3748;">The CrowdFuel Team</strong>
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f7fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="margin: 0 0 8px 0; color: #718096; font-size: 14px;">
                        CrowdFuel Founders Club
                      </p>
                      <p style="margin: 0; color: #a0aec0; font-size: 12px;">
                        DC & Northern Virginia's Premier Startup Community
                      </p>
                    </td>
                  </tr>
                </table>
              </body>
            </html>
          `,
        });
        
        console.log('Welcome email sent successfully:', welcomeEmail);
      } catch (emailError: any) {
        console.error('Failed to send welcome email:', emailError);
        // Don't fail the whole request if email fails
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Successfully subscribed to newsletter',
        data: responseData 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );

  } catch (error: any) {
    console.error('Error in subscribe-to-beehiiv function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
};

serve(handler);
