"use client";

import { motion } from "motion/react";
import { Robot, Cpu, ChartLine } from "@phosphor-icons/react";
import { RadialBreathing } from "@/components/backgrounds/RadialBreathing";
import { FadeInView } from "@/components/animations/FadeInView";

export function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      <RadialBreathing className="min-h-[100dvh] flex items-center w-full">
        <div className="container mx-auto px-4 pt-20 md:px-6 md:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column - 60% */}
            <div className="md:col-span-7 flex flex-col items-start text-left">
              <FadeInView delay={0}>
                <h1 className="font-heading text-3xl md:text-6xl lg:text-7xl tracking-tighter font-semibold leading-tight text-gray-900">
                  Optimizamos los procesos que tu ERP no cubre
                </h1>
              </FadeInView>
              
              <FadeInView delay={0.1}>
                <p className="mt-6 max-w-2xl font-body text-lg md:text-xl text-gray-600">
                  Consultoría de IA especializada en industria alimentaria. Diagnosticamos, construimos, automatizamos.
                </p>
              </FadeInView>

              <FadeInView delay={0.2} className="mt-10 flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto">
                <motion.a
                  href="https://calendly.com/cadlylabs/20min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
                >
                  Reserva una llamada
                </motion.a>
                <motion.a
                  href="/soluciones/"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="flex w-full sm:w-auto items-center justify-center rounded-full border border-brand-600 px-6 py-3 text-sm font-medium text-brand-600 hover:bg-brand-50 transition-colors"
                >
                  Ver soluciones
                </motion.a>
              </FadeInView>
            </div>

            {/* Right Column - 40% */}
            <div className="md:col-span-5 relative hidden md:flex h-full min-h-[400px] items-center justify-center">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 text-brand-500/40"
              >
                <Robot weight="duotone" className="h-24 w-24" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 text-brand-600/30"
              >
                <Cpu weight="duotone" className="h-32 w-32" />
              </motion.div>
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 right-1/3 text-brand-400/50"
              >
                <ChartLine weight="duotone" className="h-20 w-20" />
              </motion.div>
            </div>
          </div>
        </div>
      </RadialBreathing>
    </section>
  );
}
