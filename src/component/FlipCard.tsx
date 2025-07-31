"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  width?: string;
  height?: string;
  flipOnHover?: boolean;
}

const FlipCard = ({
  front,
  back,
  width = "w-full",
  height = "h-40",
  flipOnHover = false,
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };
  const handleClick = () => {
    if (!flipOnHover) setIsFlipped(true);
  };
  const handleMouseEnter = () => {
    if (!flipOnHover) setIsFlipped(true);
  };
  const handleMouseLeave = () => {
    if (!flipOnHover) setIsFlipped(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsFlipped(false);
      }
    };

    if (isFlipped && !flipOnHover) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isFlipped, flipOnHover]);

  return (
    <div
      ref={cardRef}
      className={`relative ${width} ${height} perspective-1000 cursor-pointer`}
      onClick={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
        transition={{ duration: 0.1 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/*front page */}
        <div className="absolute w-full h-full backface-hidden  rounded-xl overflow-hidden shadow-md">
          {front}
        </div>

        {/*back page */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-md">
          {back}
        </div>
      </motion.div>
    </div>
  );
};
export default FlipCard;