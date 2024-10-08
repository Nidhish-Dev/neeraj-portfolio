"use client"; // Ensure this is included

import React from "react";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <>
      <p className="project-heading text-white ml-20 text-xl mt-16 font-semibold">
        Graphic Design
      </p>
      <div className=" project-cards flex flex-wrap justify-center">
        <div className="h-[30rem] flex items-center justify-center ">
          <PinContainer title="/cocobakes.com" href="/projects/cocobakes">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 flex !m-0 font-bold  text-base text-slate-100">
                Coco Bakes |{" "}
                <div className="ml-1 font-normal"> Brand Identity</div>
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor ">
                  Moda Muse merges fashion and data analytics for trend-driven
                  insights.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 ">
                <div className="imgcls mb-32">
                  <Image
                    className="rounded-lg mb-44"
                    src="/cocoBakes.jpg"
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
          <PinContainer title="/cti.com" href="/projects/cti">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  flex text-base text-slate-100">
                CTI | <div className="ml-1 font-normal"> Brochure Design</div>
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor ">
                Modern brochure design with clear messaging, compelling visuals.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 ">
                <div className="imgcls mb-32">
                  <Image
                    className="rounded-lg mb-44"
                    src="/cti.jpg"
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
          <PinContainer title="/jjw.com" href="/projects/jjw">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs flex !pb-2 !m-0 font-bold  text-base text-slate-100">
                JJW | <div className="ml-1 font-normal"> Brand Identity</div>
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor">
                Elegant, heritage-inspired logo showcasing Jaipur&apos;s culture and Kundan jewelry.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 ">
                <div className="imgcls mb-32">
                  <Image
                    className="rounded-lg mb-44"
                    src="/jjw.jpg"
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

      {/* <p className="ml-20 text-2xl font-bold"> Projects</p> */}
      <p className="project-heading text-white ml-20 text-xl font-semibold mt-5">
        UI/UX Design
      </p>
      <div className=" project-cards flex flex-wrap justify-center">
        <div className="h-[30rem] flex items-center justify-center ">
          <PinContainer title="/modamuse.com" href="/projects/modamuse">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Moda Muse
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor ">
                  Moda Muse merges fashion and data analytics for trend-driven
                  insights.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 ">
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
          <PinContainer title="/homehive.com" href="/projects/homehive">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Home Hive
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor ">
                  Platform for international students to find housing and
                  community.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 ">
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
        <div className="h-[30rem]  flex items-center justify-center ">
          <PinContainer title="/zenify.com" href="/projects/zenify">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Zenify
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor ">
                  Personalized biofeedback to enhance modern meditation
                  practices.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 ">
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
          <PinContainer title="/easygrocery.com" href="/projects/easygrocery">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Easy Grocery
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor ">
                  Platform for buying groceries online from local retail shops
                  easily.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 ">
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

        <div className="h-[30rem] flex items-center justify-center ">
          <PinContainer title="/alivespaces.com" href="/projects/alivespaces">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Alive Spaces
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="pinColor">
                  An immersive experience making luxury vehicles feel alive to
                  users.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 ">
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
      </div>
    </>
  );
}
