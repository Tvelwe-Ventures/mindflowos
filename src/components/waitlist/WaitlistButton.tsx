import React from 'react';
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface WaitlistButtonProps {
  isLoading: boolean;
  className?: string;
}

export const WaitlistButton = ({ isLoading, className }: WaitlistButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={cn(
        "px-4 py-2 bg-github-accent text-white rounded-lg",
        "hover:bg-github-accent/90 transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "relative overflow-hidden group",
        className
      )}
    >
      <span className={cn(
        "inline-flex items-center gap-2",
        isLoading ? "opacity-0" : "opacity-100",
        "transition-opacity duration-200"
      )}>
        Join Waitlist
      </span>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-5 w-5 animate-spin" />
        </span>
      )}
    </button>
  );
};