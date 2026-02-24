"use client";

import {
  CheckIcon,
  WarningCircleIcon,
  FileMagnifyingGlassIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/animations/FadeInView";

const ERP_LOGOS = [
  { name: "SAP", src: "/images/erps_logos/sap.png" },
  { name: "Dynamics", src: "/images/erps_logos/dynamics.png" },
  { name: "A3", src: "/images/erps_logos/a3erp.png" },
  { name: "Holded", src: "/images/erps_logos/holded.png" },
  { name: "Sage", src: "/images/erps_logos/sage.png" },
  { name: "Odoo", src: "/images/erps_logos/odoo.png" },
];

// Preload images once at module level to prevent repeated requests
if (typeof window !== "undefined") {
  ERP_LOGOS.forEach((logo) => {
    const img = new Image();
    img.src = logo.src;
  });
}

function APPCCDashboardVisual() {
  const checklistItems = [
    { label: "Recepción mercancía", done: true },
    { label: "Control de etiquetado", done: true },
    { label: "Verificación caducidades", done: true },
    { label: "Limpieza y desinfección", done: false, pending: true },
  ];

  return (
    <div className="@container relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-3 @[280px]:p-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-2 @[280px]:mb-3 rounded-lg border border-gray-200 bg-white p-2 @[280px]:p-3 shadow-sm"
      >
        <div className="mb-1.5 @[280px]:mb-2 flex items-center justify-between">
          <div className="text-xs font-medium text-gray-700">
            Lote #2024-1847
          </div>
          <div className="rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-700">
            Trazado
          </div>
        </div>
        <div className="space-y-1 @[280px]:space-y-1.5 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">Producto</span>
            <span className="ml-2 truncate font-medium text-gray-700">
              Pechuga de pollo
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Proveedor</span>
            <span className="ml-2 truncate font-medium text-gray-700">
              Avícola Norte
            </span>
          </div>
          <div className="hidden @[300px]:flex justify-between">
            <span className="text-gray-500">Fecha entrada</span>
            <span className="font-medium text-gray-700">15/01/2026</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Caducidad</span>
            <span className="font-medium text-gray-700">22/01/2026</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-lg border border-gray-200 bg-white p-2 @[280px]:p-3 shadow-sm"
      >
        <div className="mb-1.5 @[280px]:mb-2 text-xs font-medium text-gray-700">
          Registros del día
        </div>
        <div className="space-y-1.5 @[280px]:space-y-2">
          {checklistItems.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={cn(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded",
                  item.done
                    ? "bg-emerald-100 text-emerald-600"
                    : item.pending
                      ? "bg-amber-100 text-amber-600"
                      : "bg-gray-100",
                )}
              >
                {item.done && <CheckIcon className="h-3 w-3" />}
                {item.pending && <WarningCircleIcon className="h-3 w-3" />}
              </div>
              <span className="truncate text-xs text-gray-600">
                {item.label}
              </span>
            </div>
          ))}
          {/* Show 4th item only on larger containers */}
          <div className="hidden @[320px]:flex items-center gap-2">
            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-amber-100 text-amber-600">
              <WarningCircleIcon className="h-3 w-3" />
            </div>
            <span className="truncate text-xs text-gray-600">
              {checklistItems[3].label}
            </span>
            <span className="ml-auto hidden rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700 @[380px]:inline">
              Pendiente
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-2 hidden items-center justify-between rounded-lg bg-emerald-50 px-2 py-1.5 @[280px]:mt-3 @[280px]:px-3 @[280px]:py-2 @[300px]:flex"
      >
        <span className="text-xs font-medium text-emerald-700">
          Cumplimiento: 75%
        </span>
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 delay-75" />
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 delay-150" />
        </div>
      </motion.div>
    </div>
  );
}

function DocumentScannerVisual() {
  const extractedData = [
    { label: "Proveedor", value: "Distribuciones García" },
    { label: "NIF", value: "B-12345678" },
    { label: "Fecha", value: "15/01/2026" },
    { label: "Base", value: "1.527,69 €" },
    { label: "IVA", value: "320,81 €" },
    { label: "Total", value: "1.847,50 €" },
  ];

  const erpLogosToShow = useMemo(() => ERP_LOGOS.slice(0, 3), []);

  return (
    <div className="@container relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-3 @[280px]:p-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative mb-2 rounded-lg border border-gray-200 bg-white p-2 shadow-sm @[280px]:mb-3 @[280px]:p-3"
      >
        <div className="mb-1.5 flex items-center justify-between @[280px]:mb-2">
          <div className="text-xs font-medium text-gray-700">
            Factura #F-2847
          </div>
          <div className="rounded bg-brand-100 px-1.5 py-0.5 text-xs text-brand-600">
            Procesando...
          </div>
        </div>
        <div className="space-y-1 @[280px]:space-y-1.5">
          <div className="h-2 w-3/4 rounded bg-gray-200" />
          <div className="h-2 w-1/2 rounded bg-gray-200" />
          <div className="h-2 w-2/3 rounded bg-gray-200" />
        </div>
        <motion.div
          className="absolute inset-x-2 h-0.5 bg-brand-500/60 @[280px]:inset-x-3"
          initial={{ top: 8 }}
          animate={{ top: [8, 50, 8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-lg border border-emerald-200 bg-emerald-50 p-2 @[280px]:p-3"
      >
        <div className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-emerald-700 @[280px]:mb-2">
          <FileMagnifyingGlassIcon className="h-3.5 w-3.5 shrink-0" />
          Datos extraídos
        </div>
        <div className="space-y-0.5 text-xs @[280px]:space-y-1">
          {extractedData.slice(0, 4).map((item, i) => (
            <div key={i} className="flex justify-between gap-2">
              <span className="shrink-0 text-gray-500">{item.label}</span>
              <span className="truncate font-medium text-gray-700">
                {item.value}
              </span>
            </div>
          ))}
          {extractedData.slice(4).map((item, i) => (
            <div
              key={i + 4}
              className="hidden justify-between gap-2 @[300px]:flex"
            >
              <span className="shrink-0 text-gray-500">{item.label}</span>
              <span className="truncate font-medium text-gray-700">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-2 hidden items-center justify-center gap-2 @[280px]:flex @[320px]:gap-3"
      >
        <span className="hidden text-xs text-gray-400 @[320px]:inline">
          Sincroniza con
        </span>
        <div className="flex items-center gap-1.5 @[320px]:gap-2">
          {erpLogosToShow.map((erp, i) => (
            <img
              key={i}
              src={erp.src}
              alt={erp.name}
              className="h-3.5 w-auto opacity-60 grayscale @[320px]:h-4"
              loading="lazy"
            />
          ))}
          <span className="text-xs text-gray-400">+más</span>
        </div>
      </motion.div>
    </div>
  );
}



interface ServiceCardData {
  title: string;
  subtitle: string;
  benefits: readonly string[];
  visual: React.ReactNode;
}

const SERVICE_CARDS: readonly [ServiceCardData, ServiceCardData] = [
  {
    title: "El APPCC que no te quita tiempo",
    subtitle:
      "Llevar registros de seguridad alimentaria a mano es lento y da miedo cuando viene una inspección. Lo digitalizamos para que siempre estés al día.",
    benefits: [
      "Registros listos en minutos, no en horas",
      "Trazabilidad por lote con un par de clics",
      "Siempre preparado para una inspección",
    ],
    visual: <APPCCDashboardVisual />,
  },
  {
    title: "Los albaranes y facturas que se procesan solos",
    subtitle: "Cada documento que llega es tiempo que alguien dedica a teclear datos. Lo automatizamos para que ese tiempo lo uses en otra cosa.",
    benefits: [
      "Datos extraídos al instante, sin errores de transcripción",
      "Facturas y albaranes archivados y buscables",
      "Sincroniza con tu ERP sin cambiar nada",
    ],
    visual: <DocumentScannerVisual />,
  },
];

function ServiceCard({ card }: { card: ServiceCardData }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:border-brand-200 hover:shadow-lg">
      <div className="min-h-[280px] w-full overflow-hidden sm:min-h-0 sm:aspect-[16/10]">
        {card.visual}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-bold text-gray-900">
          {card.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">
          {card.subtitle}
        </p>

        <ul className="mt-4 space-y-2">
          {card.benefits.map((benefit, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <CheckIcon className="h-3.5 w-3.5 shrink-0 text-brand-500" />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-2">
          <a
            href="#contacto"
            className="inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            Cuéntame más
          </a>
        </div>
      </div>
    </div>
  );
}

export function FoodServices() {
  return (
    <section id="soluciones" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Lo que más resolvemos
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Los retos que más resolvemos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Cada negocio tiene sus retos. Estos son los que más resolvemos.
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {SERVICE_CARDS.map((card, i) => (
              <ServiceCard key={i} card={card} />
            ))}
          </div>
        </FadeInView>

        <FadeInView delay={0.3}>
          <div className="mt-16 rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center sm:p-8">
            <p className="text-base font-medium text-brand-800 sm:text-lg">
              Pedidos, picking, rutas, integración con tu ERP — si te quita tiempo, lo automatizamos.
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
