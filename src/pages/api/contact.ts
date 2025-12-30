import type { APIRoute } from "astro";

interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    nombre?: string[];
    email?: string[];
    detalles?: string[];
  };
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const nombre = formData.get("nombre")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";
  const detalles = formData.get("detalles")?.toString() ?? "";

  const errors: ContactFormState["errors"] = {};

  if (nombre.length < 2) {
    errors.nombre = ["El nombre debe tener al menos 2 caracteres"];
  } else if (nombre.length > 100) {
    errors.nombre = ["El nombre es demasiado largo"];
  }

  if (!validateEmail(email)) {
    errors.email = ["Por favor, introduce un email válido"];
  }

  if (detalles.length < 10) {
    errors.detalles = ["Por favor, cuéntanos un poco más sobre tu proyecto"];
  } else if (detalles.length > 2000) {
    errors.detalles = ["El mensaje es demasiado largo"];
  }

  if (Object.keys(errors).length > 0) {
    const response: ContactFormState = {
      success: false,
      message: "Por favor, corrige los errores del formulario",
      errors,
    };
    return new Response(JSON.stringify(response), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const response: ContactFormState = {
    success: true,
    message: "¡Gracias por contactarnos! Te responderemos en menos de 24 horas.",
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
