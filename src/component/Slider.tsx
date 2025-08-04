"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Slide type definition
type Slide = {
  image: string;
  title: string;
  description: string;
  link: string;
};

interface SliderProps {
  slides: Slide[];
}

const Slider = ({ slides }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, 7000); // 7 seconds per slide
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) goToPrev();
    else if (deltaX < -50) goToNext();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full h-72 sm:h-96 overflow-hidden md:rounded-xl shadow-lg group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex
              ? "opacity-100 z-10 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title || "Slide Image"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
            <h2 className="text-2xl md:text-4xl font-bold ">{slide.title}</h2>
            <p className="mt-2 text-sm md:text-lg w-[60%] m-0  md:w-[40%] md:text-center text-11px] font-light ">
              {slide.description}
            </p>
            <Link
              href={slide.link}
              className="mt-4 inline-block bg-white text-xs md:text-sm py-1 px-2  text-black md:px-4 md:py-2 rounded hover:bg-gray-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}

      {/* Arrow left */}
      <button
        onClick={goToPrev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black/80 transition z-20"
      >
        <ChevronLeft />
      </button>

      {/* Arrow right */}
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black/80 transition z-20"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 md:gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className={`w-1 h-1 md:w-2 md:h-2 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-white/50"
            } hover:scale-110 transition`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
