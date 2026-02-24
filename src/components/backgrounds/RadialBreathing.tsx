"use client";

import { motion } from "motion/react";
import { memo } from "react";

interface RadialBreathingProps {
  className?: string;
  children?: React.ReactNode;
}

export const RadialBreathing = memo(function RadialBreathing({
  className = "",
  children,
}: RadialBreathingProps) {
  const gradientStyle = {
    backgroundImage:
      "radial-gradient(circle, transparent 0%, rgba(255,133,50,0.12) 35%, rgba(255,171,118,0.20) 55%, rgba(255,133,50,0.25) 72%, transparent 100%)",
  };

  return (
    <div className={`relative overflow-hidden bg-white ${className}`}>
      {/* Top fade overlay */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-[20%] bg-gradient-to-b from-white to-transparent"
        aria-hidden="true"
      />

      {/* Background animation container */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Layer 1 */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          className="absolute inset-0 will-change-transform"
          style={{ borderRadius: "50%", ...gradientStyle }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Layer 2 */}
        <motion.div
          animate={{ scale: [1.1, 1, 1.1] }}
          className="absolute inset-0 will-change-transform"
          style={{ borderRadius: "50%", ...gradientStyle }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Bottom fade overlay */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[20%] bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
});
