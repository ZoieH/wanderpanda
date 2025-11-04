import { useState } from 'react';
import { subscribeToNewsletter, NewsletterSubscription } from '../lib/newsletter';

export interface UseNewsletterReturn {
  email: string;
  name: string;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  loading: boolean;
  success: boolean;
  error: string | null;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  reset: () => void;
}

export function useNewsletter(): UseNewsletterReturn {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await subscribeToNewsletter({ email, name });
      
      if (result.success) {
        setSuccess(true);
        setEmail('');
        setName('');
        // Reset success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setEmail('');
    setName('');
    setLoading(false);
    setSuccess(false);
    setError(null);
  };

  return {
    email,
    name,
    setEmail,
    setName,
    loading,
    success,
    error,
    handleSubmit,
    reset,
  };
}

