"use client";

import { SERVICES } from "../../data/services";
import { motion } from "motion/react";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  FileText,
  ClipboardText,
  ChatCircle,
  ChartBar,
  Storefront,
  GitBranch,
  ArrowRight,
} from "@phosphor-icons/react";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  ClipboardText,
  ChatCircle,
  ChartBar,
  Storefront,
  GitBranch,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export function ServicesBento() {
  return (
    <section id="soluciones" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="font-heading text-3xl font-bold text-gray-900 md:text-4xl">
            Lo que automatizamos
          </h2>
        </FadeInView>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            
            // Determine grid span based on index
            let spanClass = "md:col-span-1";
            if (index === 0) spanClass = "md:col-span-2"; // Documentos
            if (index === 5) spanClass = "md:col-span-3"; // Automatizacion

            return (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className={spanClass}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="h-full"
                >
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 md:p-8">
                    {/* Subtle animated background per card */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 z-0"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${service.heroColor}15 0%, transparent 70%)`,
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Icon (Phosphor) */}
                    <div 
                      className="relative z-10 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${service.heroColor}15`, color: service.heroColor }}
                    >
                      {Icon && <Icon weight="duotone" className="h-6 w-6" />}
                    </div>

                    {/* Title (serif/font-heading) */}
                    <h3 className={`relative z-10 mb-2 font-heading font-bold text-gray-900 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                      {service.title}
                    </h3>
                    
                    {/* Tagline (font-body text-gray-600) */}
                    <p className="relative z-10 mb-8 font-body text-gray-600">
                      {service.tagline}
                    </p>

                    {/* Hover-reveal CTA */}
                    <div className="relative z-10 mt-auto pt-4">
                      <a
                        href={service.href}
                        className="inline-flex items-center gap-2 font-medium opacity-0 transition-opacity group-hover:opacity-100"
                        style={{ color: service.heroColor }}
                      >
                        Ver solución <ArrowRight weight="bold" className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <FadeInView delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-gray-600">
              ¿Tu caso no encaja aquí?{" "}
              <a href="#contacto" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">
                Hablamos.
              </a>
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
