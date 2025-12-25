import { Cpu, Box, LineChart, Wrench } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";

const differentiators = [
  {
    id: "ai-native",
    title: "AI-Native desde el día uno",
    description:
      "No somos una consultora tradicional que añadió IA. Nacimos en la era de la inteligencia artificial y la usamos en cada proyecto.",
    icon: Cpu,
  },
  {
    id: "product",
    title: "Producto sobre proyectos",
    description:
      "Construimos módulos reutilizables que desplegamos rápido. No reinventamos la rueda en cada cliente.",
    icon: Box,
  },
  {
    id: "roi",
    title: "Enfoque en ROI",
    description:
      "Cada propuesta incluye métricas de éxito claras. Si no ves resultados, no tiene sentido.",
    icon: LineChart,
  },
  {
    id: "technical",
    title: "Experiencia técnica real",
    description:
      "Ingenieros que han trabajado en empresas de todos los tamaños. Sabemos lo que funciona y lo que no.",
    icon: Wrench,
  },
];

export function WhyCadly() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            IA de verdad. Resultados en semanas.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Fundada por ingenieros para resolver problemas reales de operativa,
            no para vender consultoría interminable.
          </p>
        </FadeInView>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeInView key={item.id} delay={index * 0.1}>
                <div className="group rounded-3xl border border-gray-200 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 transition-colors group-hover:bg-brand-100">
                      <Icon className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
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
