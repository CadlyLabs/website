"use client";

import { useState } from "react";
import { Mail, Phone, Clock, UserCheck, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeInView } from "@/components/animations/FadeInView";
import { cn } from "@/lib/utils";

interface FormErrors {
  nombre?: string;
  email?: string;
  detalles?: string;
}

const trustBadges = [
  { icon: Clock, text: "Respuesta en 24h" },
  { icon: UserCheck, text: "Análisis personalizado" },
  { icon: Shield, text: "Sin compromiso" },
];

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    detalles: "",
  });

  function validateForm(): boolean {
    const newErrors: FormErrors = {};

    if (formData.nombre.length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
    } else if (formData.nombre.length > 100) {
      newErrors.nombre = "El nombre es demasiado largo";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Por favor, introduce un email válido";
    }

    if (formData.detalles.length < 10) {
      newErrors.detalles = "Por favor, cuéntanos un poco más sobre tu proyecto";
    } else if (formData.detalles.length > 2000) {
      newErrors.detalles = "El mensaje es demasiado largo";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const subject = encodeURIComponent(`Contacto de ${formData.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\nMensaje:\n${formData.detalles}`
    );
    const mailtoLink = `mailto:info@cadlylabs.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

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
                className="group flex flex-col items-center gap-3 rounded-3xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-brand-200 hover:shadow-lg"
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
                className="group flex flex-col items-center gap-3 rounded-3xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-brand-200 hover:shadow-lg"
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
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={cn(
                      errors.nombre && "border-red-500 focus:ring-red-500"
                    )}
                  />
                  {errors.nombre && (
                    <p className="text-sm text-red-500">{errors.nombre}</p>
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
                    value={formData.email}
                    onChange={handleInputChange}
                    className={cn(
                      errors.email && "border-red-500 focus:ring-red-500"
                    )}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="detalles">Cuéntanos sobre tu proyecto</Label>
                  <Textarea
                    id="detalles"
                    name="detalles"
                    placeholder="¿Qué procesos te gustaría automatizar? ¿Qué sistemas usáis actualmente?"
                    rows={4}
                    required
                    value={formData.detalles}
                    onChange={handleInputChange}
                    className={cn(
                      errors.detalles && "border-red-500 focus:ring-red-500"
                    )}
                  />
                  {errors.detalles && (
                    <p className="text-sm text-red-500">{errors.detalles}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-charcoal py-3 font-medium text-white transition-colors hover:bg-gray-800"
                >
                  Enviar
                </button>

                <p className="text-center text-xs text-gray-500">
                  Se abrirá tu cliente de correo para enviar el mensaje
                </p>
              </form>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
