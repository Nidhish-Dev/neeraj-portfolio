"use client";

import React, { useState, useEffect } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Navbar from '@/components/Navbar'
interface HeroProps {
  onScrollToProjects: () => void;
}

function Hero({ onScrollToProjects }: HeroProps) {
  const activeLink = '/';
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
    <>
   <div className="h-[40rem] w-full rounded-md   md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
   <div className="navbar  ">
   <Navbar activeLink={activeLink} />
    </div>
    
    <div className=" flex flex-col  mt-40">
    <div className="spotlight">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      </div>
      
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-0 md:pt-0">
      <h1 className="text-4xl mb-4 font-bold text-center bg-clip-text text-transparent pb-2 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 md:text-7xl md:text-transparent md:bg-clip-text md:bg-gradient-to-b md:from-neutral-50 md:to-neutral-400 md:bg-opacity-50">
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
              className="text-white font-light text-xs cursor-pointer inset-x-0 fixed bottom-12"
            >          Scroll Down to view projects
            </button>
          </div>
        )}
      </div>
    </div>
    </div>
    </>
  );
}

export default Hero;
