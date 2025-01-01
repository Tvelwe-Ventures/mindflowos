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
      const { error } = await supabase.functions.invoke("process-waitlist", {
        body: { email },
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to our waitlist. Check your email for confirmation!",
      });

      setIsSubmitted(true);
      setEmail("");
    } catch (error: any) {
      console.error("Error joining waitlist:", error);
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm z-50 px-4">
        <Alert className="max-w-md w-full bg-green-500/10 border-green-500/20 text-green-500">
          <Check className="h-5 w-5" />
          <AlertDescription className="text-lg">
            Great thanks! We're excited to have you join our waitlist. You'll receive an email shortly with more details about MindflowOS.
          </AlertDescription>
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