"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    headerImage: "/data.jpg",
    headerText: "Awesome service and support",
    text: "Tech Hike transformed our online presence. Their team was professional, creative, and delivered beyond expectations!",
    name: "Chibueze",
    role: "CEO, Tech Hike",
    profileImage: "/digitalS.jpg",
    rating: 5,
  },
  {
    headerImage: "/data.jpg",
    headerText: "Outstanding design",
    text: "Their design ideas elevated our branding and helped us stand out. Highly recommend Tech Hike!",
    name: "Sarah",
    role: "Marketing Lead",
    profileImage: "/digitalS.jpg",
    rating: 5,
  },
  {
    headerImage: "/data.jpg",
    headerText: "Professional and reliable",
    text: "A seamless experience from start to finish. Reliable, efficient, and creative team!",
    name: "Michael",
    role: "Founder, Bright Solutions",
    profileImage: "/digitalS.jpg",
    rating: 4,
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

const TestimonialCarousel = () => {
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 0]);

  const nextTestimonial = () =>
    setCurrent(([prev]) => [(prev + 1) % testimonials.length, 1]);

  const prevTestimonial = () =>
    setCurrent(([prev]) => [
      prev === 0 ? testimonials.length - 1 : prev - 1,
      -1,
    ]);

  const testimonial = testimonials[current];

  return (
    <div className="flex flex-col md:flex-row md:items-start gap-10 w-full">
      {/* Intro Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-950">
          What Our Clients Say
        </h1>
        <p className="text-gray-600 mt-3 max-w-md mx-auto md:mx-0">
          We're proud to have worked with amazing businesses and individuals.
          Here's what some of them had to say about their experience with Tech
          Hike.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
        <div className="justify-center items-baseline flex gap-3">
                    <div className="flex ">
                      {" "}
                      <Image src="/tecklogo.png" alt="logo" width={40} height={40} />
                    </div>
                    <h1 className="text-gray-600 text-thin text-center text-2xl">
                      Tech Hick
                    </h1>
                  </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1">
        {/* Testimonial Section */}
        <div className="flex-1 md:flex-[4] flex justify-center relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md md:max-w-lg flex-col"
            >
              {/* header picture */}
              <Image
                src={testimonial.headerImage}
                alt="header"
                width={300}
                height={180}
                className="rounded-lg object-cover h-40 w-full"
              />

              {/* message */}
              <p className="text-gray-300 text-base mt-4 flex-1 text-center">
                {testimonial.text}
              </p>

              {/* bottom section */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <Image
                  src={testimonial.profileImage}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full border border-gray-600"
                />
                <div className="text-center">
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <span className="text-gray-400 text-sm">
                    {testimonial.role}
                  </span>
                </div>
              </div>

              {/* stars */}
              <div className="flex mt-3 justify-center text-yellow-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center md:flex-col gap-4 md:gap-3 md:flex-[1] items-center">
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="p-3 rounded-full bg-blue-950 hover:bg-blue-900 text-white shadow-md"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="p-3 rounded-full bg-blue-950 hover:bg-blue-900 text-white shadow-md"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
