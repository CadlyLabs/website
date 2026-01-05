"use client";

import { useState } from "react";
import { Mail, Phone, Clock, UserCheck, Shield, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeInView } from "@/components/animations/FadeInView";
import { cn } from "@/lib/utils";

interface FormErrors {
  name?: string;
  email?: string;
  details?: string;
  submit?: string;
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
    name: "",
    email: "",
    details: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateForm(): boolean {
    const newErrors: FormErrors = {};

    if (formData.name.length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    } else if (formData.name.length > 100) {
      newErrors.name = "El nombre es demasiado largo";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Por favor, introduce un email válido";
    }

    if (formData.details.length < 10) {
      newErrors.details = "Por favor, cuéntanos un poco más sobre tu proyecto";
    } else if (formData.details.length > 2000) {
      newErrors.details = "El mensaje es demasiado largo";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const webhookUrl = "https://n8n.cadlylabs.com/webhook/cadlylabs-form";
      
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('details', formData.details);

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      const responseData = await response.text();

      setShowModal(true);
      setFormData({ name: "", email: "", details: "" });
    } catch (error) {
      setErrors({
        submit: "Hubo un error al enviar el formulario. Inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
    <>
      <section id="contacto" className="bg-white py-24 relative">
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
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8" suppressHydrationWarning>
                <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      suppressHydrationWarning
                      className={cn(
                        errors.name && "border-red-500 focus:ring-red-500"
                      )}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
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
                      suppressHydrationWarning
                      className={cn(
                        errors.email && "border-red-500 focus:ring-red-500"
                      )}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Cuéntanos sobre tu proyecto</Label>
                    <Textarea
                      id="details"
                      name="details"
                      placeholder="¿Qué procesos te gustaría automatizar? ¿Qué sistemas usáis actualmente?"
                      rows={4}
                      required
                      value={formData.details}
                      onChange={handleInputChange}
                      suppressHydrationWarning
                      className={cn(
                        errors.details && "border-red-500 focus:ring-red-500"
                      )}
                    />
                    {errors.details && (
                      <p className="text-sm text-red-500">{errors.details}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-brand-600 py-3 font-medium text-white transition-colors hover:bg-brand-700 disabled:opacity-50"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </button>

                  {errors.submit && (
                    <p className="text-center text-sm text-red-500">
                      {errors.submit}
                    </p>
                  )}

                </form>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative mx-4 max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900">
                Mensaje enviado
              </h3>
              <p className="mt-2 text-gray-600">
                Gracias por contactarnos. Recibirás una respuesta en un plazo de 24
                horas.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 w-full rounded-full bg-brand-600 py-2 font-medium text-white transition-colors hover:bg-brand-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
