import Image from "next/image";
import Hero from "@/components/Hero";
import AnimatedPinDemo from '@/app/projects/page'

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
<Hero />
<AnimatedPinDemo />
    </main>
    </>
  );
}
