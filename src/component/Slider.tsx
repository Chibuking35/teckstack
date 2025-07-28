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
    const interval = setInterval(goToNext, 5000);
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
      className="relative w-full h-72 sm:h-96 overflow-hidden rounded-xl shadow-lg group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ${
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
            <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
            <p className="mt-2 text-sm md:text-lg">{slide.description}</p>
            <Link
              href={slide.link}
              className="mt-4 inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}

      {/* Arrow left */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft />
      </button>

      {/* Arrow right */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-white/50"
            } hover:scale-110 transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
