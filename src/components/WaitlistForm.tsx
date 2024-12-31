import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Success!",
      description: "You've been added to our waitlist. We'll be in touch soon!",
    });

    setEmail("");
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
        >
          {isLoading ? "Joining..." : "Join Waitlist"}
        </button>
      </div>
    </form>
  );
};