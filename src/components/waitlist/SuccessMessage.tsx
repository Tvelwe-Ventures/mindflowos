import React from 'react';
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const SuccessMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-4"
    >
      <Alert className="max-w-md w-full bg-github-subtle border-github-border">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <Check className="h-6 w-6 text-github-accent" />
          </div>
          <AlertDescription className="text-lg text-white">
            Thanks for joining! We're excited to have you on our waitlist. 
            You'll receive an email shortly with more details about Mappen.
          </AlertDescription>
        </div>
      </Alert>
    </motion.div>
  );
};