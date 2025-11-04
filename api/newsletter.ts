/**
 * Vercel Serverless Function for Mailchimp Newsletter Subscription
 * 
 * Environment Variables Required:
 * - MAILCHIMP_API_KEY: Your Mailchimp API key
 * - MAILCHIMP_LIST_ID: Your Mailchimp audience/list ID
 * 
 * To get these:
 * 1. Go to Mailchimp → Account → Extras → API keys
 * 2. Create a new API key
 * 3. Go to Audience → Settings → Audience name and defaults to get List ID
 * 4. Add these as environment variables in Vercel dashboard
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

interface NewsletterRequest {
  email: string;
  name: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { email, name }: NewsletterRequest = req.body;

  // Validate input
  if (!email || !name) {
    return res.status(400).json({ 
      success: false,
      message: 'Email and name are required' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false,
      message: 'Invalid email address' 
    });
  }

  // Get Mailchimp credentials from environment variables
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;

  if (!apiKey || !listId) {
    console.error('Mailchimp credentials not configured');
    return res.status(500).json({ 
      success: false,
      message: 'Newsletter service not configured. Please contact support.' 
    });
  }

  // Extract server prefix from API key (e.g., "us1", "us2", etc.)
  const serverPrefix = apiKey.split('-')[1];
  const mailchimpUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;

  try {
    // Subscribe to Mailchimp
    const response = await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed', // or 'pending' for double opt-in
        merge_fields: {
          FNAME: name.split(' ')[0], // First name
          LNAME: name.split(' ').slice(1).join(' ') || '', // Last name (if provided)
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle Mailchimp errors
      if (data.title === 'Member Exists') {
        return res.status(200).json({ 
          success: true,
          message: 'You are already subscribed!' 
        });
      }
      
      return res.status(response.status).json({ 
        success: false,
        message: data.detail || 'Failed to subscribe. Please try again.' 
      });
    }

    // Success
    return res.status(200).json({ 
      success: true,
      message: 'Successfully subscribed! Please check your email to confirm.' 
    });

  } catch (error) {
    console.error('Mailchimp API error:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Failed to subscribe. Please try again later.' 
    });
  }
}

