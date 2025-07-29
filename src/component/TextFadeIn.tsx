"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type FadeInTextProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const TextFadeIn = ({
  children,
  className = "",
  id = "default",
}: FadeInTextProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasAnimated(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TextFadeIn;
