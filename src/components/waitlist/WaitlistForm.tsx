import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { WaitlistInput } from "./WaitlistInput";
import { WaitlistButton } from "./WaitlistButton";
import { SuccessMessage } from "./SuccessMessage";
import { motion } from "framer-motion";

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
        className: "bg-github-success/10 border-github-success/20 text-white",
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
        className: "bg-red-900/10 border-red-900/20 text-white",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return <SuccessMessage />;
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-2">
        <WaitlistInput 
          email={email}
          setEmail={setEmail}
          isLoading={isLoading}
        />
        <WaitlistButton isLoading={isLoading} />
      </div>
    </motion.form>
  );
};