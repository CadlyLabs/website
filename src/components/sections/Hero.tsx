"use client";

import { motion } from "motion/react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { FloatingPaths } from "@/components/kokonutui/background-paths";

export function Hero() {
  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white"
    >
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 text-center md:px-6 md:pt-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
              Inteligencia Artificial para Operativa Real
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 font-heading text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            Automatiza el trabajo manual que tu sistema de gestión no puede
            hacer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl"
          >
            Sin cambiar de ERP, sin procesos traumáticos. Añadimos capas de
            inteligencia a tus sistemas actuales para que tu equipo se centre
            en lo que importa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MovingBorderButton
              onClick={() => handleScrollToSection("#modulos")}
              borderRadius="0.75rem"
              containerClassName="h-14 w-48"
              borderClassName="bg-[radial-gradient(rgb(255,133,50)_40%,transparent_60%)]"
              className="border-brand-600/20 bg-brand-600 font-medium text-white hover:bg-brand-700"
            >
              Ver soluciones
            </MovingBorderButton>

            <button
              onClick={() => handleScrollToSection("#contacto")}
              className="flex h-14 items-center justify-center rounded-lg border-2 border-gray-300 bg-white/80 px-8 font-medium text-gray-700 backdrop-blur-sm transition-all hover:border-brand-500 hover:text-brand-600"
            >
              Consultoría gratuita
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm">Descubre más</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
