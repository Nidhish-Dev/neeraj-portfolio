"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function Hero() {
  const words = `A multidisciplinary visual designer based in Berlin, Germany I craft seamless digital experiences that harmonize functionality with aesthetics.`;

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
      </div>
    </div>
  );
}

export default Hero;
