"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface CounterCardProps {
  endNumber: number;
  duration?: number;
  label?: string;
}

const CounterCard = ({ endNumber, label, duration = 2 }: CounterCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-2xl transition-shadow duration-300"
    >
      <div className="text-4xl font-bold text-[var(--maincolor)]">
        {inView && <CountUp start={0} end={endNumber} suffix="+" />}
      </div>
      <p className="text-gray-500 mt-2">{label} </p>
    </div>
  );
};

export default CounterCard;
