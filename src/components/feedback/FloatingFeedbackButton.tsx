import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import FeedbackForm from '../FeedbackForm';

export const FloatingFeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 p-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        aria-label="Open feedback form"
      >
        <MessageSquare className="h-6 w-6 animate-bounce" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Share Your Feedback</DialogTitle>
          </DialogHeader>
          <FeedbackForm onSubmitSuccess={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};