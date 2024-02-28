"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"


const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Client-side-only code
    return window.location.origin; // This will give you the base URL like 'http://localhost:3000' or your production domain
  }
  // Optional: Handle server-side logic or set a default/fallback base URL
  // This might depend on your deployment or environment variables
  // Example: return process.env.NEXT_PUBLIC_BASE_URL || 'default_base_url';
  return ''; // Return an empty string or a default base URL if necessary
};


export const StickyScroll = ({ content, imageUrls }:
  {
    content: {
      title: string;
      description: string;
    }[],
    imageUrls: string;
  },
) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });
  const imageUrlsArray = imageUrls?.split(',').map(ele => getBaseUrl() + `/${ele}`)

  const backgroundColors = [
    "#1a1a1a",
    "#292929",
    "#040404"
  ];

  return (
    <motion.div

      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="w-screen md:container h-[40rem] overflow-y-auto flex flex-col sm:flex-row relative  rounded-md py-0 md:py-10 mx-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300"
      ref={ref}
    >
      <div className="order-2 sm:order-1 relative flex px-4 w-full md:w-1/2 justify-center">
        <div className="md:mx-4 md:max-w-[400px]">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300  mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-20" />
        </div>
      </div>

      <div className={cn(`order-1 sm:order-2 md:block  h-1/3 md:h-full  sticky top-0 z-10 w-auto bg-red-800  backdrop-blur-sm bg-white/30  rounded custom-image-container py-12 md:py-4`)}>
        <motion.img
          key={imageUrlsArray[activeCard % imageUrlsArray.length]}
          src={imageUrlsArray[activeCard % imageUrlsArray.length]}
          className={cn(`block object-cover w-full sticky top-0 z-10  mx-auto md:p-12`)}
        />

      </div>
    </motion.div>
  );
};
