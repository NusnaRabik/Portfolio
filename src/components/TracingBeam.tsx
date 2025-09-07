import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const TracingBeam: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setSvgHeight(ref.current.offsetHeight);
    }
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]);

  return (
    <motion.div
      ref={ref}
      className="relative w-full max-w-4xl mx-auto h-full"
    >
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center dark:border-neutral-700"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "#06b6d4" : "#e2e8f0",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white dark:bg-neutral-700 dark:border-neutral-600"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`m 1 2 V -1 l 18 24 V ${svgHeight * 0.8} l -18 24 V ${svgHeight + 2}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          />
          <motion.path
            d={`m 1 2 V -1 l 18 24 V ${svgHeight * 0.8} l -18 24 V ${svgHeight + 2}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#06b6d4" stopOpacity="0" />
              <stop stopColor="#06b6d4" />
              <stop offset="0.325" stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <motion.div className="relative">{children}</motion.div>
    </motion.div>
  );
};