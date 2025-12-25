import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";

const results = [
  "Reducción del 80% en tiempo de registro de controles",
  "Informes de auditoría generados en segundos",
  "Cumplimiento APPCC 100% digitalizado",
  "Alertas automáticas de vencimientos y tareas",
  "Acceso en tiempo real desde cualquier dispositivo",
];

export function SuccessStory() {
  return (
    <section id="casos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Casos de Éxito
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Resultados que hablan por sí solos
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 lg:grid lg:grid-cols-2 lg:gap-0">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src="/images/logos/appcc_demo.avif"
                alt="Plataforma APPCC de Montes del Acebo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r" />
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logos/montes_acebo_logo.avif"
                  alt="Montes del Acebo"
                  width={60}
                  height={60}
                  className="rounded-xl"
                />
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900">
                    Montes del Acebo
                  </h3>
                  <p className="text-sm text-gray-500">
                    Industria Alimentaria
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-lg font-medium text-gray-900">
                  Plataforma APPCC Digital
                </p>
                <p className="mt-2 text-gray-600">
                  Transformamos la gestión de seguridad alimentaria de Montes
                  del Acebo con una plataforma integral que automatiza registros,
                  genera informes y garantiza el cumplimiento normativo.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {results.map((result) => (
                  <div key={result} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                    <span className="text-sm text-gray-700">{result}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700">
                  Ver caso completo
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
