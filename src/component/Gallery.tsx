"use client";

import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const Images = [
  "/event1 (2).jpg",
  "/event2 (2).jpg",
  "/event3 (2).jpg",
  "/event4 (2).jpg",
  "/event5.jpg",
  "/event6 (2).jpg",
  "/event7.jpg",
  "/event8.jpg",
  "/event9.jpg",
  "/event10.jpg",
  "/event11.png",

];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const [{ x, y, scale }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
  }));

  const lastTapRef = useRef<number>(0);

  const openImage = (img: string, index: number) => {
    setSelectedImage(img);
    setCurrentIndex(index);
    api.start({ x: 0, y: 0, scale: 1 });
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
    api.start({ x: 0, y: 0, scale: 1 });
  };

  const nextImage = () => {
    if (currentIndex !== null) {
      const newIndex = (currentIndex + 1) % Images.length;
      setCurrentIndex(newIndex);
      setSelectedImage(Images[newIndex]);
      api.start({ x: 0, y: 0, scale: 1 });
    }
  };

  const prevImage = () => {
    if (currentIndex !== null) {
      const newIndex = (currentIndex - 1 + Images.length) % Images.length;
      setCurrentIndex(newIndex);
      setSelectedImage(Images[newIndex]);
      api.start({ x: 0, y: 0, scale: 1 });
    }
  };

  const bind = useGesture(
    {
      onPinch: ({ offset: [d] }) => {
        api.start({ scale: 1 + d / 200 });
      },
      onDrag: ({ offset: [dx, dy], swipe: [swipeX] }) => {
        if (scale.get() > 1.1) {
          api.start({ x: dx, y: dy });
        } else {
          if (swipeX == -1) nextImage();
          if (swipeX == 1) prevImage();
        }

        onclick: () => {
          const now = Date.now();
          if (now - lastTapRef.current < 300) {
            api.start({
              scale: scale.get() > 1 ? 1 : 2,
              x: 0,
              y: 0,
            });
          }
          lastTapRef.current = now;
        };
      },
    },

    { drag: { filterTaps: true }, pinch: { scaleBounds: { min: 1, max: 3 } } }
  );

  useEffect(() => {
    if (!selectedImage) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, currentIndex]);

  return (
    <div className="p-6 py-20 md:py-30 ">
      <h2 className="text-2xl font-bold mb-6 text-center italic text-gray-500">
        Events{" "}
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 md:gap-6 gap-5 space-y-4">
        {Images.map((img, index) => (
          <div
            className="cursor-pointer  overflow-hidden rounded shadow-md hover:opacity-90"
            key={index}
            onClick={() => openImage(img, index)}
          >
            <Image
              src={img}
              alt=""
              width={500}
              height={400}
              className="w-full  object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal  */}
      {selectedImage && (
        <div
          className="fixed inset-0  bg-black/90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <animated.div
              {...bind()}
              style={{
                x,
                y,
                scale,
                touchAction: "none",
              }}
              className="w-full  flex h-full items-center justify-center "
            >
              <Image
                src={selectedImage}
                alt="selected"
                width={900}
                height={700}
                className=" object-contain max-h-full max-w-full"
              />
            </animated.div>

            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-3 right-4 text-white bg-black/70  px-3 py-3 rounded-full "
            >
                 <X />
         
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
