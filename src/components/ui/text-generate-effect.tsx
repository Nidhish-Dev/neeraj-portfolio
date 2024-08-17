"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [startAnimation, setStartAnimation] = useState(false); // State to control animation start

  let wordsArray = words.split(" ");

  useEffect(() => {
    // Set a timeout to start the animation after 2 seconds
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1500); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (startAnimation) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [startAnimation, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="">
      <div className={cn("font-bold", className)}>
        <div className="mt-1">
          <div className="dark:text-white font-normal text-md text-neutral-300 leading-snug tracking-wide">
            {renderWords()}
          </div>
        </div>
      </div>
    </div>
  );
};
