/**
 * Newsletter subscription service
 * Connects to Mailchimp API via serverless function
 */

export interface NewsletterSubscription {
  email: string;
  name: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
}

/**
 * Subscribe to newsletter via Mailchimp
 * This calls a serverless function endpoint to keep API keys secure
 */
export async function subscribeToNewsletter(
  data: NewsletterSubscription
): Promise<NewsletterResponse> {
  try {
    // Call your serverless function endpoint
    // For Vercel, this would be: /api/newsletter
    // For Netlify, this would be: /.netlify/functions/newsletter
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Subscription failed' }));
      throw new Error(error.message || 'Failed to subscribe');
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || 'Successfully subscribed!',
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to subscribe. Please try again.',
    };
  }
}

