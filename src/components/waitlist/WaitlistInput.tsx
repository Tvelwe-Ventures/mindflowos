import React from 'react';
import { cn } from "@/lib/utils";

interface WaitlistInputProps {
  email: string;
  setEmail: (email: string) => void;
  isLoading: boolean;
  className?: string;
}

export const WaitlistInput = ({ email, setEmail, isLoading, className }: WaitlistInputProps) => {
  return (
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      className={cn(
        "flex-1 px-4 py-2 rounded-lg border border-github-border bg-github-subtle",
        "text-white placeholder-github-muted",
        "focus:outline-none focus:ring-2 focus:ring-github-accent/50",
        "transition-all duration-200",
        className
      )}
      disabled={isLoading}
      required
    />
  );
};