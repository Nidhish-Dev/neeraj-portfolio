"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import AnimatedPinDemo from '@/app/projects/page'; // Ensure this is compatible as a client component
import { useRef } from "react";

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
