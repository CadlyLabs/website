"use client";

import { useState } from "react";
import {
  FileText,
  Package,
  Plug,
  ClipboardCheck,
  ShoppingCart,
  MapPin,
  ArrowRight,
  RotateCw,
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  FadeInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/FadeInView";

interface Module {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ElementType;
}

const modules: Module[] = [
  {
    id: "documentos",
    title: "Documentos",
    subtitle: "Procesamiento inteligente de documentos",
    description:
      "Extrae información de albaranes, facturas y formularios automáticamente. Elimina la entrada manual de datos y reduce errores.",
    features: [
      "OCR con IA para extracción precisa",
      "Integración directa con tu ERP",
      "Validación automática de datos",
      "Archivo digital organizado",
    ],
    icon: FileText,
  },
  {
    id: "inventario",
    title: "Inventario",
    subtitle: "Control de stock inteligente",
    description:
      "Anticipa roturas de stock y optimiza niveles de inventario con predicciones basadas en histórico y tendencias.",
    features: [
      "Predicción de demanda",
      "Alertas de stock mínimo",
      "Optimización de compras",
      "Trazabilidad completa",
    ],
    icon: Package,
  },
  {
    id: "erp",
    title: "Conexión con ERPs",
    subtitle: "Middleware de integración universal",
    description:
      "Conectamos cualquier sistema con tu ERP sin necesidad de migraciones. Datos sincronizados en tiempo real.",
    features: [
      "Compatible con SAP, Navision, A3...",
      "APIs personalizadas",
      "Sincronización bidireccional",
      "Sin interrupciones operativas",
    ],
    icon: Plug,
  },
  {
    id: "appcc",
    title: "Gestión APPCC",
    subtitle: "Cumplimiento alimentario automatizado",
    description:
      "Digitaliza registros de seguridad alimentaria, automatiza controles y genera informes de auditoría al instante.",
    features: [
      "Registros digitales con firma",
      "Alertas de vencimientos",
      "Informes de auditoría automáticos",
      "Dashboard de cumplimiento",
    ],
    icon: ClipboardCheck,
  },
  {
    id: "pedidos",
    title: "Pedidos Automatizados",
    subtitle: "Entrada de pedidos sin intervención",
    description:
      "Recibe pedidos por email, WhatsApp o EDI y procésalos automáticamente en tu sistema sin intervención manual.",
    features: [
      "Procesamiento multicanal",
      "Validación de clientes y productos",
      "Confirmación automática",
      "Integración con logística",
    ],
    icon: ShoppingCart,
  },
  {
    id: "rutas",
    title: "Optimización de Rutas",
    subtitle: "Logística inteligente",
    description:
      "Planifica rutas de reparto óptimas considerando restricciones de tiempo, capacidad y prioridades de entrega.",
    features: [
      "Algoritmos de optimización",
      "Restricciones personalizables",
      "Seguimiento en tiempo real",
      "Reducción de costes de transporte",
    ],
    icon: MapPin,
  },
];

function ServiceCard({ module }: { module: Module }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = module.icon;

  return (
    <div
      className="group relative h-[380px] w-full cursor-pointer [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-3xl",
            "bg-white",
            "border border-gray-200",
            "shadow-sm",
            "transition-all duration-700",
            "group-hover:shadow-lg",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="relative flex h-full flex-col p-6">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50">
              <Icon className="h-7 w-7 text-brand-600" />
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900">
              {module.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{module.subtitle}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
              {module.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-medium text-brand-600">
                Ver beneficios
              </span>
              <RotateCw className="h-4 w-4 text-brand-500 transition-transform group-hover:rotate-180" />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "rounded-3xl p-6",
            "bg-gradient-to-br from-brand-50 to-white",
            "border border-brand-100",
            "shadow-sm",
            "flex flex-col",
            "transition-all duration-700",
            "group-hover:shadow-lg",
            isFlipped ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900">
                {module.title}
              </h3>
            </div>

            <div className="space-y-2">
              {module.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-start gap-2 text-sm text-gray-700"
                  style={{
                    transform: isFlipped ? "translateX(0)" : "translateX(-10px)",
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 100 + 200}ms`,
                    transition: "all 0.5s ease-out",
                  }}
                >
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-4 border-t border-brand-100 pt-4">
            <button className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-900 transition-all hover:bg-brand-50 hover:text-brand-700">
              <span>Solicitar demo</span>
              <ArrowRight className="h-4 w-4 text-brand-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="modulos" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Soluciones
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Nuestros Módulos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Cada módulo se integra con tus sistemas actuales. Combínalos según
            tus necesidades o empieza con uno solo.
          </p>
        </FadeInView>

        <StaggerContainer
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {modules.map((module) => (
            <StaggerItem key={module.id}>
              <ServiceCard module={module} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
