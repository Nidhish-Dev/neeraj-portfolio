"use client"; // Ensure this is included

import React from "react";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <>
  
    {/* <p className="ml-20 text-2xl font-bold"> Projects</p> */}
        <div className=" project-cards flex flex-wrap justify-center">
        <div className="h-[30rem] flex items-center justify-center ">
          <PinContainer
            title="/modamuse.com"
            href="https://neeraj-design.github.io/Portfolio/#/Portfolio/modaMuse"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Moda Muse
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor ">
                Moda Muse merges fashion and data analytics for trend-driven insights.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 " >
              <div className="imgcls mb-32">
<Image
  className="rounded-lg mb-44"
  src="/modaMuse.jpg"
  width={300}
  height={300}
  alt="Picture of the author"
/>
</div>
                </div>
            </div>
          </PinContainer>
        </div>
    
        <div className="h-[30rem]  flex items-center justify-center ">
          <PinContainer
            title="/homehive.com"
            href="https://neeraj-design.github.io/Portfolio/#/Portfolio/homeHive"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Home Hive
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor ">
                Platform for international students to find housing and community.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 " >
              <div className="imgcls mb-32">
<Image
  className="rounded-lg mb-44"
  src="/homeHive.jpg"
  width={300}
  height={300}
  alt="Picture of the author"
/>
</div>
        
                </div>
            </div>
          </PinContainer>
        </div>
    
        <div className="h-[30rem] flex items-center justify-center ">
          <PinContainer
            title="/alivespaces.com"
            href="https://neeraj-design.github.io/Portfolio/#/Portfolio/aliveSpaces"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Alive Spaces
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor">
                An immersive experience making luxury vehicles feel alive to users.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 " >
              <div className="imgcls mb-32">
<Image
  className="rounded-lg mb-44"
  src="/aliveSpaces.jpg"
  width={300}
  height={300}
  alt="Picture of the author"
/>
</div>
                </div>
            </div>
          </PinContainer>
        </div>
    
        <div className="h-[30rem]  flex items-center justify-center ">
          <PinContainer
            title="/zenify.com"
            href="https://neeraj-design.github.io/Portfolio/#/Portfolio/sereniTech"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Zenify
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor ">
                Personalized biofeedback to enhance modern meditation practices.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 " >
             <div className="imgcls mb-32">
<Image
  className="rounded-lg mb-44"
  src="/zenify.jpg"
  width={300}
  height={300}
  alt="Picture of the author"
/>
</div>
                </div>
            </div>
          </PinContainer>
        </div>
    
        <div className="h-[30rem] flex items-center justify-center ">
          <PinContainer
            title="/easygrocery.com"
            href="https://neeraj-design.github.io/Portfolio/#/Portfolio/easyGrocery"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Easy Grocery
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor ">
                Platform for buying groceries online from local retail shops easily.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 " >
              <div className="imgcls mb-32">
<Image
  className="rounded-lg mb-44"
  src="/easyGrocery.jpg"
  width={300}
  height={300}
  alt="Picture of the author"
/>
</div>
                </div>
            </div>
          </PinContainer>
        </div>
        
        </div>
        </>
  );
}
