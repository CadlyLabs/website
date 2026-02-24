"use client";

import { MagnifyingGlassIcon, FileTextIcon, CodeIcon, RocketIcon } from "@phosphor-icons/react";
import { FadeInView } from "@/components/animations/FadeInView";


const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos tu operación, tus sistemas y tus cuellos de botella. Encontramos exactamente dónde pierdes más tiempo.",
    Icon: MagnifyingGlassIcon,
  },
  {
    number: "02",
    title: "Construcción",
    description:
      "Construimos los agentes y flujos específicos para tu caso. Nos integramos con lo que ya usas sin romper nada.",
    Icon: CodeIcon,
  },
  {
    number: "03",
    title: "Acompañamiento",
    description:
      "No desaparecemos. Formamos a tu equipo, iteramos, mejoramos y ampliamos el sistema según tus necesidades.",
    Icon: RocketIcon,
  },
];


export function HowWeWork() {
  return (
    <section id="proceso" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 font-body">
            Metodología
          </span>
          <h2 className="mt-6 font-heading text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            De la primera llamada al sistema en marcha
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-gray-600 font-body">
            Resultados visibles desde el primer mes. Sin proyectos eternos y sin sorpresas.
          </p>
        </FadeInView>

        <div className="mt-16 flex flex-col gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.Icon;
            return (
              <FadeInView key={step.number} delay={index * 0.15}>
                <div className="group relative grid gap-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-brand-200 hover:shadow-lg md:grid-cols-[1fr_3fr] md:p-12">
                  <div className="flex flex-col justify-between gap-6 border-b border-gray-100 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 transition-colors group-hover:bg-brand-100">
                      <Icon className="h-8 w-8 text-brand-600" />
                    </div>
                    <span className="font-heading text-6xl font-bold text-brand-100 transition-colors group-hover:text-brand-200">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-heading text-3xl font-bold text-gray-900 md:text-4xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 font-body">
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
