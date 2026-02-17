"use client";

import { motion } from "motion/react";
import { SparkleIcon } from "@phosphor-icons/react";
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
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
              <SparkleIcon className="h-4 w-4" />
              Automatización para la Industria Alimentaria
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 font-heading text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            El papeleo de siempre, resuelto de una vez.
          </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl"
            >
              Software que tu equipo usa desde el primer día. APPCC digital, trazabilidad por lote y documentación — todo en un sistema que tú manejas.
            </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MovingBorderButton
              onClick={() => handleScrollToSection("#soluciones")}
              borderRadius="1.5rem"
              containerClassName="h-12 w-fit"
              borderClassName="bg-[radial-gradient(rgb(255,133,50)_40%,transparent_60%)]"
              className="border-brand-600/20 bg-brand-600 text-sm font-medium text-white hover:bg-brand-700 cursor-pointer px-6 py-3"
            >
              Ver las herramientas
            </MovingBorderButton>

            <button
              onClick={() => handleScrollToSection("#contacto")}
              className="flex h-12 items-center justify-center rounded-3xl border-2 border-gray-300 bg-white/80 px-6 text-sm font-medium text-gray-700 backdrop-blur-sm transition-all hover:border-brand-500 hover:text-brand-600"
            >
              Habla con nosotros
            </button>
          </motion.div>
        </motion.div>
      </div>

      <a href="#soluciones" className="absolute bottom-8 left-1/2 -translate-x-1/2">
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
      </a>
    </section>
  );
}
