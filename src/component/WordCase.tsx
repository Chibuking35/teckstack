"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// Reusable component: cycles through a list of words
export default function WordCase() {
  // Words to cycle through
  const words = [
    "development",
    "fintech",
    "hospital",
    "e-commerce",
    "logistics",
    "education",
    "real-estate",
    "agritech",
    "healthtech",
  ];

  // Interval in ms
  const interval = 2000;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [interval, words.length]);

  return (
    <section className="w-full  flex items-center justify-center  px-6 py-12  bg-white">
      <div className="text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-blue-950">
          We work with
          <span className="inline-block mx-2 md:min-w-[19rem] sm:min-w-[12rem] min-w-[11rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={index}
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 60, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-r from-amber-500 to-pink-600 bg-clip-text text-transparent decoration-amber-400/60 decoration-2"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          companies
        </h1>

        <p className="mt-4 text-sm md:text-lg text-gray-600">
        From innovative startups to global enterprises, we collaborate across industries to craft cutting-edge, reliable, and scalable software that transforms businesses.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2 rounded bg-blue-950 text-white font-medium shadow-lg hover:shadow-xl transition"
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
