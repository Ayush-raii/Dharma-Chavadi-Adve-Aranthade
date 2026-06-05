import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, place, message } = body

    // Validate required fields
    if (!name || !phone || !place || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate Twilio credentials
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER
    const recipientNumber = process.env.RECIPIENT_WHATSAPP_NUMBER

    if (!accountSid || !authToken || !fromNumber || !recipientNumber) {
      console.error('Missing Twilio environment variables')
      return NextResponse.json(
        { error: 'Twilio configuration is incomplete. Please set all required environment variables.' },
        { status: 500 }
      )
    }

    // Initialize Twilio client
    const client = twilio(accountSid, authToken)

    // Prepare the message to send
    const whatsappMessage = `Hello! New visitor inquiry for Old Sana:

👤 Name: ${name}
📱 Phone: ${phone}
📍 From: ${place}
💬 Message: ${message}`

    // Send WhatsApp message using Twilio
    const result = await client.messages.create({
      from: fromNumber,
      to: recipientNumber,
      body: whatsappMessage,
    })

    console.log('WhatsApp message sent successfully:', {
      messageSid: result.sid,
      to: recipientNumber,
      from: fromNumber,
      status: result.status,
      userData: { name, phone, place },
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully',
        messageSid: result.sid,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
