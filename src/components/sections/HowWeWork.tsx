"use client";

import { MagnifyingGlassIcon, FileTextIcon, CodeIcon, RocketIcon } from "@phosphor-icons/react";
import { FadeInView } from "@/components/animations/FadeInView";
import { TracingBeam } from "@/components/ui/tracing-beam";

const steps = [
  {
    number: "01",
    title: "Una charla sin compromiso",
    description:
      "Nos cuentas cómo trabajas ahora. Vemos dónde se pierde más tiempo y te decimos qué haríamos. Sin rodeos.",
    Icon: MagnifyingGlassIcon,
  },
  {
    number: "02",
    title: "Propuesta clara y precio cerrado",
    description:
      "Te decimos exactamente qué vamos a hacer, cuánto tarda y cuánto cuesta. Sin sorpresas al final.",
    Icon: FileTextIcon,
  },
  {
    number: "03",
    title: "Montamos tu sistema",
    description:
      "Construimos e integramos todo con lo que ya usas. Cada semana te enseñamos cómo va avanzando.",
    Icon: CodeIcon,
  },
  {
    number: "04",
    title: "Arrancamos y te acompañamos",
    description:
      "Formamos a tu equipo, arrancamos poco a poco y seguimos contigo. Si algo falla, lo resolvemos.",
    Icon: RocketIcon,
  },
];

const MARKER_POSITIONS = [0.125, 0.375, 0.625, 0.875];

export function HowWeWork() {
  return (
    <section id="proceso" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Así trabajamos
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            De la primera llamada al sistema en marcha
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Resultados visibles desde el primer mes. Sin proyectos eternos, sin sorpresas.
          </p>
        </FadeInView>

        <div className="mt-16 hidden md:block">
          <TracingBeam className="max-w-4xl" markerPositions={MARKER_POSITIONS}>
            <div className="space-y-8 pl-12">
              {steps.map((step, index) => {
                const Icon = step.Icon;
                return (
                  <FadeInView key={step.number} delay={index * 0.15}>
                    <div className="rounded-none border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-brand-200">
                      <div className="mb-5 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                          <Icon className="h-6 w-6 text-brand-600" />
                        </div>
                        <span className="font-heading text-sm font-bold text-brand-600">
                          Paso {step.number}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </FadeInView>
                );
              })}
            </div>
          </TracingBeam>
        </div>

        <div className="mt-16 space-y-6 md:hidden">
          {steps.map((step, index) => {
            const Icon = step.Icon;
            return (
              <FadeInView key={step.number} delay={index * 0.1}>
                <div className="relative rounded-none border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="absolute -left-3 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                  <div className="ml-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50">
                        <Icon className="h-5 w-5 text-brand-600" />
                      </div>
                      <span className="font-heading text-sm font-bold text-brand-600">
                        Paso {step.number}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
