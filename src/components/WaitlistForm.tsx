import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Check } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Starting waitlist submission for email:', email);
      
      const { data, error } = await supabase
        .from('waitlist')
        .insert([{ email }])
        .select();

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Successfully added to waitlist:', data);
      
      setIsSubmitted(true);
      setEmail("");
      
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. Check your email for confirmation!",
        variant: "default",
        duration: 5000,
        className: "bg-green-50 border-green-200 text-green-900",
      });
    } catch (error: any) {
      console.error("Error joining waitlist:", error);
      
      let errorMessage = "Failed to join waitlist. Please try again.";
      if (error.message?.includes('duplicate')) {
        errorMessage = "This email is already on the waitlist.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
        className: "bg-red-50 border-red-200 text-red-900",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-4">
        <Alert className="max-w-md w-full bg-white shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <Check className="h-6 w-6 text-green-500" />
            </div>
            <AlertDescription className="text-lg text-gray-700">
              Thanks for joining! We're excited to have you on our waitlist. You'll receive an email shortly with more details about MindflowOS.
            </AlertDescription>
          </div>
        </Alert>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all disabled:opacity-50 text-sm whitespace-nowrap"
        >
          {isLoading ? "Joining..." : "Join Waitlist"}
        </button>
      </div>
    </form>
  );
};