import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend API
    const response = await axios.post(
      'https://api.resend.com/emails',
      {
        from: 'inidarifieldemail@resend.dev',
        to: 'alfaizunaulia@gmail.com',
        subject: `New message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #b76080;">New Contact Form Message</h2>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
          </div>
        `
      },
      {
        headers: {
          'Authorization': 'Bearer re_FbyJvad3_57Ns7TYSAfgCxyxk7k5Cat3k',
          'Content-Type': 'application/json'
        }
      }
    );

    return NextResponse.json(
      { message: 'Email sent successfully', id: response.data.id },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Handle Resend API errors
    if (error.response) {
      const { status, data } = error.response;
      return NextResponse.json(
        { error: data.message || 'Failed to send email' },
        { status: status }
      );
    }

    // Handle network or other errors
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}