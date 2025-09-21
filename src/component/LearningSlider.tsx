"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type LearningSlide = {
  imageurl: string;
  upperTitle: string;
  lowerTitle: string;
  description: string;
};

interface LearningSliderprops {
  LearningSlides: LearningSlide[];
}

const LearningSlider = ({ LearningSlides }: LearningSliderprops) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? LearningSlides.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % LearningSlides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchX.current;
    if (deltaX > 50) goToPrev();
    else if (deltaX < -50) goToNext();
    touchX.current = null;
  };

  return (
    <div
      className="w-full h-[24rem] md:h-[17rem] overflow-hidden md:rounded-xl relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {LearningSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex
              ? "opacity-100 z-10 pointer-events-auto"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <div className="h-[15rem] md:h-[9rem] relative">
            <Image
              src={slide.imageurl}
              alt={slide.upperTitle || "Slide Image"}
              fill
              className="object-cover rounded-2xl"
              priority={index === 0}
            />

            <h1 className="px-4 py-1 rounded-full bg-white/50 backdrop-blur-sm absolute top-2 left-2 text-xs text-blue-950">
              {slide.upperTitle}
            </h1>

            <h1 className="bottom-2 absolute left-3 text-sm text-white">
              {slide.lowerTitle}
            </h1>
          </div>
          <div className="flex flex-col items-start justify-center p-4 w-full">
            <p className="mt-2 md:text-[9px] text-[11px] lg:text-[11px] ">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <div className="absolute left-3 bottom-0.5 gap-2 flex items-center z-20">
        <button
          onClick={goToPrev}
          className="p-2 rounded-md ring-1 text-blue-950 hover:bg-blue-950 transition hover:text-white hover:ring-0"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={goToNext}
          className="p-2 rounded-md ring-1 text-blue-950 hover:bg-blue-950 transition hover:text-white hover:ring-0"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default LearningSlider;
