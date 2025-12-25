"use client";

import { useActionState } from "react";
import { Mail, Phone, Clock, UserCheck, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

const trustBadges = [
  { icon: Clock, text: "Respuesta en 24h" },
  { icon: UserCheck, text: "Análisis personalizado" },
  { icon: Shield, text: "Sin compromiso" },
];

export function Contact() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <section id="contacto" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Contacto
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            ¿Listo para optimizar tu operativa?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Cuéntanos tu situación. Sin presiones, sin letra pequeña.
          </p>
        </FadeInView>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <FadeInView delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:info@cadlylabs.com"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-brand-200 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 transition-colors group-hover:bg-brand-100">
                  <Mail className="h-7 w-7 text-brand-600" />
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-gray-900">
                    Escríbenos
                  </p>
                  <p className="mt-1 text-sm text-brand-600">
                    info@cadlylabs.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+34606518235"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-brand-200 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 transition-colors group-hover:bg-brand-100">
                  <Phone className="h-7 w-7 text-brand-600" />
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-gray-900">
                    Llámanos
                  </p>
                  <p className="mt-1 text-sm text-brand-600">+34 606 518 235</p>
                </div>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <Icon className="h-4 w-4 text-brand-500" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              {state.success ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-gray-900">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="mt-2 text-gray-600">{state.message}</p>
                </div>
              ) : (
                <form action={formAction} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                      className={cn(
                        state.errors?.nombre && "border-red-500 focus:ring-red-500"
                      )}
                    />
                    {state.errors?.nombre && (
                      <p className="text-sm text-red-500">
                        {state.errors.nombre[0]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@empresa.com"
                      required
                      className={cn(
                        state.errors?.email && "border-red-500 focus:ring-red-500"
                      )}
                    />
                    {state.errors?.email && (
                      <p className="text-sm text-red-500">
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="detalles">
                      Cuéntanos sobre tu proyecto
                    </Label>
                    <Textarea
                      id="detalles"
                      name="detalles"
                      placeholder="¿Qué procesos te gustaría automatizar? ¿Qué sistemas usáis actualmente?"
                      rows={4}
                      required
                      className={cn(
                        state.errors?.detalles &&
                          "border-red-500 focus:ring-red-500"
                      )}
                    />
                    {state.errors?.detalles && (
                      <p className="text-sm text-red-500">
                        {state.errors.detalles[0]}
                      </p>
                    )}
                  </div>

                  {state.message && !state.success && (
                    <p className="text-sm text-red-500">{state.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full rounded-full bg-charcoal py-3 font-medium text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isPending ? "Enviando..." : "Enviar"}
                  </button>
                </form>
              )}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
