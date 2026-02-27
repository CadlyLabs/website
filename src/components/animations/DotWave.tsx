"use client";

import { useRef, useEffect, memo } from "react";

interface DotWaveProps {
  className?: string;
}

export const DotWave = memo(function DotWave({ className = "" }: DotWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.setTransform(
        window.devicePixelRatio,
        0,
        0,
        window.devicePixelRatio,
        0,
        0,
      );
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(canvas);
    resizeCanvas();

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const spacing = 16;
      const cols = Math.floor(width / spacing) + 1;
      const rows = Math.floor(height / spacing) + 1;

      // Wave crest sits at ~45% from top of the full viewport
      const waveBaseY = height * 0.45;
      const waveAmplitude = height * 0.06;

      // Clear zone: right 40% of screen, below 35% height (subheader + buttons area)
      const clearZoneX = width * 0.55;
      const clearZoneY = height * 0.35;
      const clearFadeWidth = width * 0.1; // smooth fade into clear zone
      const clearFadeHeight = height * 0.08;

      for (let i = 0; i < cols; i++) {
        const x = i * spacing;

        // Multiplied sines → sharp crest with organic undulation
        const wave =
          Math.sin(x * 0.004 + time * 0.8) *
          Math.sin(x * 0.007 + time * 1.1) *
          Math.sin(x * 0.002 + time * 0.5);
        const waveY = waveBaseY + wave * waveAmplitude;

        for (let j = 0; j < rows; j++) {
          const y = j * spacing;

          // Skip dots well above the wave crest
          if (y < waveY - spacing * 3) continue;

          // Distance from wave crest → drives density
          const distFromCrest = y - waveY;
          const absDist = Math.abs(distFromCrest);

          // Dots above crest: tight falloff. Dots below: gradual dispersion
          let falloff: number;
          if (distFromCrest < 0) {
            // Above crest — sharp cutoff
            falloff = Math.max(0, 1 - absDist / (spacing * 3));
          } else {
            // Below crest — gradual quadratic dispersion
            const maxBelow = height - waveBaseY;
            const norm = Math.min(absDist / maxBelow, 1);
            falloff = (1 - norm) * (1 - norm);
          }

          if (falloff <= 0.02) continue;

          // Clear zone fade: dots fade out approaching subheader/buttons area
          let clearMask = 1;
          if (x > clearZoneX - clearFadeWidth && y > clearZoneY - clearFadeHeight) {
            const xFade =
              x > clearZoneX
                ? 0
                : (clearZoneX - x) / clearFadeWidth;
            const yFade =
              y > clearZoneY
                ? 1
                : (y - (clearZoneY - clearFadeHeight)) / clearFadeHeight;
            clearMask = Math.max(0, xFade + (1 - yFade));
            clearMask = Math.min(clearMask, 1);
          }

          if (clearMask <= 0.02) continue;

          // Add slight jitter so grid doesn't look too regular
          const jitterX = Math.sin(i * 7.3 + j * 3.1) * 3;
          const jitterY = Math.cos(i * 4.7 + j * 5.9) * 3;

          // Radius: 1-3px, bigger at crest
          const radius = (0.8 + 2.2 * falloff) * clearMask;

          // Opacity: 0.08-0.5, stronger at crest
          const opacity = (0.08 + 0.42 * falloff) * clearMask;

          ctx.beginPath();
          ctx.arc(x + jitterX, y + jitterY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 133, 50, ${opacity})`;
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        time += 0.008;
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
});
