"use client";

import React, { useRef } from "react";
import Hero from "@/components/Hero";
import { AnimatedPinDemo } from "@/app/projects/AnimatedPinDemo"; // Adjust import path

export default function Home() {
  const animatedPinDemoRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (animatedPinDemoRef.current) {
      animatedPinDemoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <Hero onScrollToProjects={scrollToSection} />
        <div ref={animatedPinDemoRef}>
          <AnimatedPinDemo />
        </div>
      </main>
    </>
  );
}
