import { Search, FileText, Code, Rocket } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";

const steps = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Analizamos tus procesos actuales, identificamos cuellos de botella y diseñamos una propuesta personalizada. Sin compromiso.",
    icon: Search,
  },
  {
    number: "02",
    title: "Propuesta y planificación",
    description:
      "Definimos alcance, tiempos y presupuesto cerrado. Sabes exactamente qué vas a recibir y cuándo.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Desarrollo e integración",
    description:
      "Construimos e integramos la solución con tus sistemas actuales. Iteraciones cortas con demos frecuentes.",
    icon: Code,
  },
  {
    number: "04",
    title: "Puesta en marcha y soporte",
    description:
      "Formación a tu equipo, despliegue gradual y soporte continuo. Estamos contigo en cada paso.",
    icon: Rocket,
  },
];

export function HowWeWork() {
  return (
    <section id="proceso" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Proceso
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            De la idea al sistema funcionando
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Implementaciones ágiles con resultados visibles desde el primer
            mes. Sin sorpresas, sin proyectos interminables.
          </p>
        </FadeInView>

        <div className="relative mt-16">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-brand-200 via-brand-400 to-brand-600 md:left-1/2 md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <FadeInView
                  key={step.number}
                  delay={index * 0.15}
                  className="relative md:mb-12"
                >
                  <div
                    className={`flex flex-col items-start gap-4 md:flex-row md:items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        isEven ? "md:pr-16 md:text-right" : "md:pl-16"
                      }`}
                    >
                      <div
                        className={`rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
                          isEven ? "md:ml-auto md:mr-0" : "md:ml-0 md:mr-auto"
                        } md:max-w-md`}
                      >
                        <div
                          className={`mb-4 flex items-center gap-3 ${
                            isEven ? "md:flex-row-reverse" : ""
                          }`}
                        >
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

                    <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-brand-500 text-xl font-bold text-white shadow-lg md:static">
                      {step.number}
                    </div>

                    <div className="hidden flex-1 md:block" />
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
