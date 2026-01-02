"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
  markerPositions?: number[];
}

export const TracingBeam = ({
  children,
  className,
  markerPositions = [],
}: TracingBeamProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  const BRAND_ORANGE_500 = "rgb(255, 133, 50)";
  const BRAND_ORANGE_600 = "rgb(255, 98, 10)";
  const BRAND_ORANGE_700 = "rgb(255, 72, 0)";
  const BRAND_ORANGE_100 = "rgb(254, 235, 213)";

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full", className)}
    >
      <div className="absolute top-0 left-0">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(255, 133, 50, 0.4) 0px 3px 12px",
          }}
          className="ml-[3px] flex h-4 w-4 items-center justify-center rounded-full border border-brand-200 bg-white shadow-sm"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : BRAND_ORANGE_500,
              borderColor: scrollYProgress.get() > 0 ? "white" : BRAND_ORANGE_600,
            }}
            className="h-2 w-2 rounded-full border border-brand-300 bg-brand-500"
          />
        </motion.div>
        
        <svg
          viewBox={`0 0 12 ${svgHeight}`}
          width="12"
          height={svgHeight}
          className="ml-1 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 6 0 V ${svgHeight}`}
            fill="none"
            stroke={BRAND_ORANGE_100}
            strokeWidth="2"
            transition={{ duration: 10 }}
          />
          <motion.path
            d={`M 6 0 V ${svgHeight}`}
            fill="none"
            stroke="url(#brand-gradient)"
            strokeWidth="2.5"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          />
          
          {markerPositions.map((pos, index) => {
            const yPos = pos * svgHeight;
            return (
              <g key={index}>
                <circle
                  cx="6"
                  cy={yPos}
                  r="6"
                  fill="white"
                  stroke={BRAND_ORANGE_100}
                  strokeWidth="1.5"
                />
                <circle
                  cx="6"
                  cy={yPos}
                  r="3"
                  fill={BRAND_ORANGE_500}
                />
              </g>
            );
          })}
          
          <defs>
            <motion.linearGradient
              id="brand-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor={BRAND_ORANGE_500} stopOpacity="0" />
              <stop stopColor={BRAND_ORANGE_500} />
              <stop offset="0.5" stopColor={BRAND_ORANGE_600} />
              <stop offset="1" stopColor={BRAND_ORANGE_700} stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
