import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-full border border-gray-700 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-[#B341F9]/50 text-sm"
        required
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-6 py-3 bg-[#B341F9] text-white rounded-full hover:bg-[#9B20E3] transition-all disabled:opacity-50 text-sm whitespace-nowrap"
      >
        {isLoading ? "Joining..." : "Join Waitlist"}
      </button>
    </form>
  );
};