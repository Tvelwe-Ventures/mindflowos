import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="mt-8 max-w-md mx-auto">
      {submitted ? (
        <Alert className="bg-green-50 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertTitle>Thank you for joining!</AlertTitle>
          <AlertDescription>
            We'll notify you as soon as we launch.
          </AlertDescription>
        </Alert>
      ) : (
        <form onSubmit={handleSubmit} className="sm:flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:max-w-xs rounded-md"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0"
          >
            Join Waitlist
          </button>
        </form>
      )}
    </div>
  );
};