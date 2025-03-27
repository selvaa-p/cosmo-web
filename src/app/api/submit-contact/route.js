// src\app\api\submit-contact\route.js
import { Resend } from 'resend';
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req) {
  // CORS handling
  const corsHeaders = {
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    // Log the entire request body for debugging
    const body = await req.json();
    console.log('Received form submission:', body);

    // Input validation
    const { name, email, subject, message } = body;
  
    if (!name || !email || !subject || !message) {
      console.error('Validation failed: Missing fields');
      return NextResponse.json({ 
        success: false, 
        message: 'All fields are required' 
      }, { 
        status: 400,
        headers: corsHeaders
      });
    }

    // Check if required environment variables are present
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY');
      return NextResponse.json({
        success: false,
        message: 'Server configuration error'
      }, {
        status: 500,
        headers: corsHeaders
      });
    }

    // Decode and parse the private key
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY
      .replace(/^"|"$/g, '')
      .replace(/\\n/g, '\n');

    // Initialize Google Sheets
    const client = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: privateKey
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth: client });
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    // Submit to Google Sheets
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: 'Submissions!A:E',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [[
          new Date().toISOString(),
          name,
          email,
          subject,
          message
        ]]
      }
    });

    // Send notification email
    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailResponse = await resend.emails.send({
      from: 'ClientResponse <onboarding@resend.dev>',
      to: ['sit22it123@sairamtap.edu.in'],
      subject: `New Contact Form: ${subject}`,
      html: `<h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      `
    });

    console.log('Sheets response:', response.data);
    console.log('Email response:', emailResponse);

    return NextResponse.json({ 
      success: true, 
      message: 'Submission successful',
      sheetsResponse: {
        updatedRange: response.data.updates.updatedRange,
        updatedRows: response.data.updates.updatedRows
      }
    }, {
      status: 200,
      headers: corsHeaders
    });
  } catch (error) {
    console.error('Full Submission Error:', error);
    
    // More detailed error logging
    console.error('Error Details:', {
      message: error.message,
      name: error.name,
      code: error.code,
      stack: error.stack
    });

    return NextResponse.json({ 
      success: false, 
      message: 'Submission failed',
      error: error.message,
      errorDetails: {
        name: error.name,
        code: error.code,
        reason: error.reason,
        stack: error.stack
      }
    }, { 
      status: 500,
      headers: corsHeaders
    });
  }
}

// CORS OPTIONS handler
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}