"use client";
import React from "react";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";
export function AnimatedPinDemo() {
  return (
    <div className=" project-cards flex flex-wrap justify-center">

    <div className="h-[30rem] flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          Vogue Voyage
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Vogue Voyage merges fashion and data analytics for trend-driven insights.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " >
          <Image
      src="/bg.jpg"
      width={400}
      height={400}
      alt="Picture of the author"
    />
            </div>
        </div>
      </PinContainer>
    </div>

    <div className="h-[30rem]  flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          Vogue Voyage
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Vogue Voyage merges fashion and data analytics for trend-driven insights.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " >
          <Image
      src="/bg.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
            </div>
        </div>
      </PinContainer>
    </div>

    <div className="h-[30rem] flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          Vogue Voyage
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Vogue Voyage merges fashion and data analytics for trend-driven insights.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " >
          <Image
      src="/bg.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
            </div>
        </div>
      </PinContainer>
    </div>

    <div className="h-[30rem]  flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          Vogue Voyage
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Vogue Voyage merges fashion and data analytics for trend-driven insights.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " >
          <Image
      src="/bg.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
            </div>
        </div>
      </PinContainer>
    </div>

    <div className="h-[30rem] flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          Vogue Voyage
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Vogue Voyage merges fashion and data analytics for trend-driven insights.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " >
          <Image
      src="/bg.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
            </div>
        </div>
      </PinContainer>
    </div>
    
    </div>
  );
}

export default AnimatedPinDemo