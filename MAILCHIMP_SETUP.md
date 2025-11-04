# Mailchimp Newsletter Setup

This guide will help you set up the Mailchimp integration for the newsletter subscription feature.

## Step 1: Get Your Mailchimp API Key

1. Log in to your Mailchimp account
2. Go to **Account** → **Extras** → **API keys**
3. If you don't have an API key, click **Create A Key**
4. Copy your API key (it will look like: `abc123def456-us1`)

## Step 2: Get Your Mailchimp List ID

1. In Mailchimp, go to **Audience** → **All contacts**
2. Click **Settings** → **Audience name and defaults**
3. Scroll down to find your **Audience ID** (it will look like: `a1b2c3d4e5`)
4. Copy this ID

## Step 3: Add Environment Variables to Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

   - **Variable Name**: `MAILCHIMP_API_KEY`
     - **Value**: Your Mailchimp API key (e.g., `abc123def456-us1`)
     - **Environment**: Production, Preview, Development (select all)

   - **Variable Name**: `MAILCHIMP_LIST_ID`
     - **Value**: Your Mailchimp List/Audience ID (e.g., `a1b2c3d4e5`)
     - **Environment**: Production, Preview, Development (select all)

5. Click **Save**

## Step 4: Redeploy Your Application

After adding the environment variables, you need to redeploy:

1. In Vercel, go to **Deployments**
2. Click the three dots (⋯) on your latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger automatic deployment

## Testing

Once deployed, test the newsletter subscription:

1. Go to your website
2. Fill out the newsletter form (on homepage or blog page)
3. Submit the form
4. You should see a success message
5. Check your Mailchimp audience to confirm the subscriber was added

## Troubleshooting

### "Newsletter service not configured" error
- Make sure environment variables are set in Vercel
- Redeploy after adding environment variables
- Check that variable names match exactly: `MAILCHIMP_API_KEY` and `MAILCHIMP_LIST_ID`

### "Member Exists" error
- This is actually handled gracefully - the user will see "You are already subscribed!"
- No action needed

### Subscription not working
- Check Vercel function logs: **Deployments** → Click on deployment → **Functions** tab
- Verify your API key is correct and active
- Verify your List ID is correct
- Check that your Mailchimp account is in good standing

## Notes

- The serverless function is located at `/api/newsletter.ts`
- It uses Mailchimp API v3.0
- Subscribers are automatically set to "subscribed" status (no double opt-in)
- If you want double opt-in, change `status: 'subscribed'` to `status: 'pending'` in the serverless function

