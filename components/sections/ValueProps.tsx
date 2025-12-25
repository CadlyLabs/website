"use client";

import { Clock, TrendingUp, Target, Eye } from "lucide-react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/animations/FadeInView";

interface Benefit {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: React.ElementType;
  color: string;
}

const benefits: Benefit[] = [
  {
    id: "time",
    title: "Menos horas en tareas manuales",
    description:
      "Tu equipo dedica su tiempo a lo que importa, no a picar datos o buscar documentos.",
    metric: "70%",
    metricLabel: "reducción de tiempo",
    icon: Clock,
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "roi",
    title: "Inversión que se paga sola",
    description:
      "Retorno visible desde el primer mes. Sin costes ocultos, sin sorpresas.",
    metric: "3x",
    metricLabel: "ROI primer año",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "accuracy",
    title: "Datos fiables, decisiones mejores",
    description:
      "Elimina errores de entrada manual. Información consistente en todos tus sistemas.",
    metric: "95%",
    metricLabel: "precisión de datos",
    icon: Target,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "visibility",
    title: "Control total de tu operativa",
    description:
      "Dashboard en tiempo real. Ve exactamente qué pasa en tu negocio en cualquier momento.",
    metric: "24/7",
    metricLabel: "visibilidad",
    icon: Eye,
    color: "from-violet-500 to-purple-500",
  },
];

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const Icon = benefit.icon;

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300",
          "hover:border-gray-300 hover:shadow-xl"
        )}
      >
        <div
          className={cn(
            "absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-10 blur-3xl transition-opacity duration-500",
            `bg-gradient-to-br ${benefit.color}`,
            isHovered ? "opacity-30" : "opacity-10"
          )}
        />

        <div className="relative">
          <div
            className={cn(
              "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br",
              benefit.color
            )}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>

          <div className="mb-3">
            <span
              className={cn(
                "bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent",
                benefit.color
              )}
            >
              {benefit.metric}
            </span>
            <span className="ml-2 text-sm text-gray-500">
              {benefit.metricLabel}
            </span>
          </div>

          <h3 className="font-heading text-lg font-bold text-gray-900">
            {benefit.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {benefit.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function ValueProps() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Beneficios
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Resultados medibles desde el primer mes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            No prometemos magia. Prometemos métricas que puedes medir y
            resultados que impactan tu cuenta de resultados.
          </p>
        </FadeInView>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
