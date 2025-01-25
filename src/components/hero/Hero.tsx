import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll';
import { SparklesText } from '@/components/ui/sparkles-text';
import { WaitlistForm } from '@/components/WaitlistForm';

export const Hero = () => {
  const titleComponent = (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full">
      <SparklesText
        text="Make it Mappen"
        colors={{ first: "#FFFFFF", second: "#9E7AFF" }}
        className="text-5xl md:text-7xl font-bold mb-6 text-white"
      />
      <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-200 mx-auto">
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
        <img 
          src="/lovable-uploads/db1bd259-fc6d-419a-a36c-f3548fcb1470.png" 
          alt="Mappen Mind Map Visualization"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
    </ContainerScroll>
  );
};