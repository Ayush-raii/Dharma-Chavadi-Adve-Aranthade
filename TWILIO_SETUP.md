# Twilio WhatsApp Setup Guide

## Step 1: Create Twilio Account

1. Go to [Twilio Console](https://console.twilio.com/) and sign up for a free account
2. Once logged in, you'll see your **Account SID** and **Auth Token** on the dashboard

## Step 2: Get Your Credentials

From the Twilio Console Dashboard:
- Copy your **Account SID** → Add to `.env.local` as `TWILIO_ACCOUNT_SID`
- Copy your **Auth Token** → Add to `.env.local` as `TWILIO_AUTH_TOKEN`

## Step 3: Enable WhatsApp

1. In Twilio Console, go to **Messaging** → **Services**
2. Create a new Service or use existing one
3. Go to **Phone Numbers** → **Manage Numbers**
4. Request a WhatsApp-enabled number or use the sandbox number
5. Your WhatsApp number will look like: `whatsapp:+1234567890`

## Step 4: Update Environment Variables

Open `.env.local` and fill in:

```
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890
RECIPIENT_WHATSAPP_NUMBER=whatsapp:+919535570218
```

## Step 5: Test with Sandbox (Optional)

Twilio provides a free WhatsApp sandbox for testing:
1. Go to **Messaging** → **Try it Out** → **Send a Whatsapp Message**
2. Follow the instructions to join the sandbox
3. Once confirmed, you can test messages

## Important Notes

- **Free Account Limit**: Twilio free accounts can only send messages to verified recipients
- **Sandbox Mode**: For testing, use Twilio's WhatsApp sandbox (limited to 100 messages/day)
- **Production**: Upgrade to a paid account for full WhatsApp Business features
- **Message Cost**: Each message costs approximately $0.01 - $0.05 depending on your plan

## Troubleshooting

If messages aren't sending:
1. Verify all environment variables are correctly set in `.env.local`
2. Check that the recipient number is in format: `whatsapp:+919535570218`
3. Check server logs for error messages
4. Ensure your Twilio account has sufficient balance (free account may have limits)
5. Restart the development server after updating `.env.local`

## More Information

- [Twilio WhatsApp Documentation](https://www.twilio.com/docs/whatsapp)
- [Twilio Node.js SDK](https://www.twilio.com/docs/libraries/node)
- [WhatsApp Business API](https://www.whatsapp.com/business/api)
