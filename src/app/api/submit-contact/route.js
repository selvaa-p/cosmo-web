// src\app\api\submit-contact.js
import { Resend } from 'resend';
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req) {
  // CORS handling
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    // Parse request body
    const body = await req.json();

    // Input validation
    const { name, email, subject, message } = body;
  
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ 
        success: false, 
        message: 'All fields are required' 
      }, { 
        status: 400,
        headers: corsHeaders
      });
    }

    // Initialize Resend
    // const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Check existing sheets
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId
    });

    // Find or create Submissions sheet
    let submissionsSheetId = spreadsheet.data.sheets.find(
      sheet => sheet.properties.title === 'Submissions'
    )?.properties.sheetId;

    // If sheet doesn't exist, create it
    if (!submissionsSheetId) {
      const addSheetResponse = await sheets.spreadsheets.batchUpdate({
        spreadsheetId: spreadsheetId,
        resource: {
          requests: [{
            addSheet: {
              properties: {
                title: 'Submissions',
                gridProperties: {
                  rowCount: 1000,
                  columnCount: 5
                }
              }
            }
          }]
        }
      });

      submissionsSheetId = addSheetResponse.data.replies[0].addSheet.properties.sheetId;

      // Add headers to the new sheet
      await sheets.spreadsheets.values.update({
        spreadsheetId: spreadsheetId,
        range: 'Submissions!A1:E1',
        valueInputOption: 'RAW',
        resource: {
          values: [['Timestamp', 'Name', 'Email', 'Subject', 'Message']]
        }
      });
    }

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
    await resend.emails.send({
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
    return NextResponse.json({ 
      success: false, 
      message: 'Submission failed',
      error: error.message,
      errorDetails: {
        name: error.name,
        code: error.code,
        library: error.library,
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
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}