"use client";

import React, { useState, useEffect } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

interface HeroProps {
  onScrollToProjects: () => void;
}

function Hero({ onScrollToProjects }: HeroProps) {
  const words = `A multidisciplinary visual designer based in Berlin, Germany I craft seamless digital experiences that harmonize functionality with aesthetics.`;
  
  const [showScrollLink, setShowScrollLink] = useState(true);

  const handleScrollClick = () => {
    onScrollToProjects();
    setShowScrollLink(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollLink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl mb-4 md:text-7xl font-bold text-center bg-clip-text text-transparent pb-2 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hello,<br />I&apos;m Neeraj Kumar.
        </h1>
        <TextGenerateEffect
          className="mt-1 max-w-2xl px-2 text-center mx-auto"
          words={words}
          filter={true}
          duration={0.5}
        />
        {showScrollLink && (
          <div className="text-center mt-8">
            <button
              onClick={handleScrollClick}
              className="text-white text-xs cursor-pointer inset-x-0 fixed bottom-12"
            >          Scroll Down to view projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
