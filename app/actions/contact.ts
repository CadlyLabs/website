"use server";

import { z } from "zod";

const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  email: z.string().email("Por favor, introduce un email válido"),
  detalles: z
    .string()
    .min(10, "Por favor, cuéntanos un poco más sobre tu proyecto")
    .max(2000, "El mensaje es demasiado largo"),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    nombre?: string[];
    email?: string[];
    detalles?: string[];
  };
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    detalles: formData.get("detalles"),
  };

  const validatedData = contactSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      success: false,
      message: "Por favor, corrige los errores del formulario",
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  // TODO: Send email or save to database

  return {
    success: true,
    message:
      "¡Gracias por contactarnos! Te responderemos en menos de 24 horas.",
  };
}
