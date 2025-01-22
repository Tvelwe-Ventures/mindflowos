import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SparklesText } from '@/components/ui/sparkles-text';
import { WaitlistForm } from './WaitlistForm';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-30" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/57b181b3-d8a0-49b7-b7be-89e917d3918b.png')] bg-cover bg-center opacity-5" />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <SparklesText
          text="Turn Your Vision into Reality"
          colors={{ first: "#9E7AFF", second: "#6E59A5" }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
        />
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Turn your static business plan into an interactive mind map and dynamic operating system. 
          Visualize, adapt, and execute your strategy in real-time.
        </p>
        
        <WaitlistForm />
      </div>
    </div>
  );
};