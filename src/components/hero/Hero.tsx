import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll';
import { SparklesText } from '@/components/ui/sparkles-text';
import { WaitlistForm } from '@/components/WaitlistForm';

export const Hero = () => {
  const titleComponent = (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full">
      <SparklesText
        text="Make it Mappen"
        colors={{ first: "#9E7AFF", second: "#6E59A5" }}
        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
      />
      <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-400 mx-auto">
        Transform static business plans and resumes into dynamic, interactive mind maps. 
        Turn ideas into actionable strategies with real-time insights and intelligent visualisations.
      </p>
      <div className="mt-8">
        <WaitlistForm />
      </div>
    </div>
  );

  return (
    <ContainerScroll titleComponent={titleComponent}>
      <div className="w-full h-full flex items-center justify-center">
        {/* The image is now handled by the Card component */}
      </div>
    </ContainerScroll>
  );
};