"use client";

import {
  Check,
  AlertCircle,
  FileSearch,
  ArrowRight,
  Mail,
  MessageCircle,
  Truck,
  ScanBarcode,
  ClipboardList,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
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

function APPCCDashboardVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
      >
        <div className="mb-2 flex items-center justify-between">
          <div className="text-xs font-medium text-gray-700">Lote #2024-1847</div>
          <div className="rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-700">
            Trazado
          </div>
        </div>
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">Producto</span>
            <span className="font-medium text-gray-700">Pechuga de pollo</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Proveedor</span>
            <span className="font-medium text-gray-700">Avícola Norte S.L.</span>
          </div>
          <div className="flex justify-between">
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
        className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
      >
        <div className="mb-2 text-xs font-medium text-gray-700">
          Registros del día
        </div>
        <div className="space-y-2">
          {[
            { label: "Recepción mercancía", done: true },
            { label: "Control de etiquetado", done: true },
            { label: "Verificación caducidades", done: true },
            { label: "Limpieza y desinfección", done: false, pending: true },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded",
                  item.done
                    ? "bg-emerald-100 text-emerald-600"
                    : item.pending
                      ? "bg-amber-100 text-amber-600"
                      : "bg-gray-100"
                )}
              >
                {item.done && <Check className="h-3 w-3" />}
                {item.pending && <AlertCircle className="h-3 w-3" />}
              </div>
              <span className="text-xs text-gray-600">{item.label}</span>
              {item.pending && (
                <span className="ml-auto rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700">
                  Pendiente
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-3 flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2"
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
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative mb-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
      >
        <div className="mb-2 flex items-center justify-between">
          <div className="text-xs font-medium text-gray-700">Factura #F-2847</div>
          <div className="rounded bg-brand-100 px-1.5 py-0.5 text-xs text-brand-600">
            Procesando...
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-3/4 rounded bg-gray-200" />
          <div className="h-2 w-1/2 rounded bg-gray-200" />
          <div className="h-2 w-2/3 rounded bg-gray-200" />
        </div>
        <motion.div
          className="absolute inset-x-3 h-0.5 bg-brand-500/60"
          initial={{ top: 8 }}
          animate={{ top: [8, 60, 8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-lg border border-emerald-200 bg-emerald-50 p-3"
      >
        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-emerald-700">
          <FileSearch className="h-3.5 w-3.5" />
          Datos extraídos
        </div>
        <div className="space-y-1 text-xs">
          {[
            { label: "Proveedor", value: "Distribuciones García S.L." },
            { label: "NIF", value: "B-12345678" },
            { label: "Fecha", value: "15/01/2026" },
            { label: "Base imponible", value: "1.527,69 €" },
            { label: "IVA (21%)", value: "320,81 €" },
            { label: "Total", value: "1.847,50 €" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-gray-500">{item.label}</span>
              <span className="font-medium text-gray-700">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-2 flex items-center justify-center gap-3"
      >
        <span className="text-xs text-gray-400">Sincroniza con</span>
        <div className="flex items-center gap-2">
          {ERP_LOGOS.slice(0, 5).map((erp, i) => (
            <img
              key={i}
              src={erp.src}
              alt={erp.name}
              className="h-4 w-auto opacity-60 grayscale"
            />
          ))}
          <span className="text-xs text-gray-400">+más</span>
        </div>
      </motion.div>
    </div>
  );
}

function ERPIntegrationVisual() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ERP_LOGOS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative flex items-center justify-center gap-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 shadow-sm">
            <img 
              src="/images/logos/cadly_logo.avif" 
              alt="Cadly" 
              className="h-8 w-8 object-contain"
            />
          </div>
          
          <ArrowRight className="h-5 w-5 text-brand-500" />

          <div className="relative h-14 w-20 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={ERP_LOGOS[currentIndex].src}
                alt={ERP_LOGOS[currentIndex].name}
                className="absolute inset-0 m-auto h-8 max-w-14 object-contain"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 rounded-lg bg-emerald-50 px-3 py-1.5"
        >
          <span className="text-xs font-medium text-emerald-700">
            Sincronización en tiempo real
          </span>
        </motion.div>
      </div>
    </div>
  );
}

function PedidosVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="flex h-full flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3 flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            <Mail className="h-5 w-5 text-gray-500" />
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
            <MessageCircle className="h-5 w-5 text-green-600" />
          </div>
          <div className="text-xs text-gray-400">EDI</div>
          <ArrowRight className="h-4 w-4 text-brand-500" />
          <div className="rounded-lg bg-brand-100 px-3 py-2 text-xs font-medium text-brand-700">
            Tu Sistema
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-700">Pedido entrante</span>
            <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-xs text-emerald-700">
              Procesado
            </span>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">Cliente</span>
              <span className="font-medium text-gray-700">Restaurante Sol</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Productos</span>
              <span className="font-medium text-gray-700">12 líneas</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Total</span>
              <span className="font-medium text-gray-700">842,30 €</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-3 text-center text-xs text-gray-500"
        >
          Sin intervención manual
        </motion.div>
      </div>
    </div>
  );
}

function PickingVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="flex h-full flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
        >
          <div className="mb-2 flex items-center gap-2">
            <ScanBarcode className="h-4 w-4 text-brand-500" />
            <span className="text-xs font-medium text-gray-700">Lista de picking</span>
          </div>
          <div className="space-y-2">
            {[
              { product: "Aceite oliva virgen", qty: "480 L", status: "picked" },
              { product: "Harina de trigo", qty: "1.200 kg", status: "picked" },
              { product: "Conservas vegetales", qty: "360 uds", status: "pending" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "h-3 w-3 rounded",
                      item.status === "picked" ? "bg-emerald-500" : "bg-gray-300"
                    )}
                  />
                  <span className="text-gray-700">{item.product}</span>
                </div>
                <span className="text-gray-500">{item.qty}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-between rounded-lg bg-brand-50 px-3 py-2"
        >
          <div className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4 text-brand-600" />
            <span className="text-xs text-brand-700">Pedido #4521</span>
          </div>
          <span className="text-xs font-medium text-brand-600">67%</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-3 text-center text-xs text-gray-500"
        >
          Escanea → Confirma → Listo en ERP
        </motion.div>
      </div>
    </div>
  );
}

function RutasVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="flex h-full flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-700">Ruta optimizada</span>
            <div className="flex items-center gap-1">
              <Truck className="h-3.5 w-3.5 text-brand-500" />
              <motion.div
                className="h-2 w-2 rounded-full bg-emerald-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
          <div className="space-y-2">
            {[
              { stop: "Restaurante Sol", time: "09:15" },
              { stop: "Hotel Marina", time: "09:45" },
              { stop: "Café Central", time: "10:20" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  {i + 1}
                </div>
                <span className="flex-1 text-gray-700">{item.stop}</span>
                <span className="text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="text-center">
            <div className="text-lg font-bold text-emerald-600">-23%</div>
            <div className="text-xs text-gray-500">kilómetros</div>
          </div>
          <div className="h-8 w-px bg-gray-200" />
          <div className="text-center">
            <div className="text-lg font-bold text-emerald-600">+15%</div>
            <div className="text-xs text-gray-500">entregas/día</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  visual: React.ReactNode;
}

const services: Service[] = [
  {
    id: "appcc",
    title: "APPCC Digital",
    subtitle: "De 10 horas semanales en papeleo a 2",
    description:
      "Digitaliza tus registros de seguridad alimentaria. Gestiona lotes, trazabilidad y controles. Cuando venga el inspector, tendrás todo listo en 2 clics.",
    benefits: [
      "Trazabilidad completa de lotes",
      "Registros con firma digital",
      "Informes de auditoría instantáneos",
    ],
    visual: <APPCCDashboardVisual />,
  },
  {
    id: "documentos",
    title: "Documentos Inteligentes",
    subtitle: "Extrae datos sin teclear",
    description:
      "Facturas, albaranes, formularios. La IA extrae los datos y los mete en tu sistema. Sin errores, sin copiar a mano.",
    benefits: [
      "OCR con inteligencia artificial",
      "Integración directa con tu ERP",
      "Archivo digital organizado",
    ],
    visual: <DocumentScannerVisual />,
  },
  {
    id: "erp",
    title: "Integración ERP",
    subtitle: "Sin migraciones traumáticas",
    description:
      "Conectamos SAP, Dynamics, A3, Holded, Sage, Odoo o cualquier sistema. Tus datos sincronizados en tiempo real.",
    benefits: [
      "Compatible con cualquier ERP",
      "Sincronización bidireccional",
      "Sin interrupciones operativas",
    ],
    visual: <ERPIntegrationVisual />,
  },
  {
    id: "pedidos",
    title: "Pedidos Automáticos",
    subtitle: "Multicanal sin intervención",
    description:
      "Tus clientes envían pedidos por email, WhatsApp o EDI. Nosotros los procesamos y los metemos en tu sistema automáticamente.",
    benefits: [
      "Email, WhatsApp, EDI",
      "Validación automática",
      "Confirmación al cliente",
    ],
    visual: <PedidosVisual />,
  },
  {
    id: "picking",
    title: "Picking Automatizado",
    subtitle: "Del pedido al albarán sin papel",
    description:
      "Cuando entra un pedido, generamos la lista de picking. Escanea, confirma cantidades y el albarán se crea solo en el ERP.",
    benefits: [
      "Listas de picking automáticas",
      "Escaneo de productos",
      "Albarán directo al ERP",
    ],
    visual: <PickingVisual />,
  },
  {
    id: "rutas",
    title: "Rutas Optimizadas",
    subtitle: "Menos km, más entregas",
    description:
      "Planificamos rutas de reparto considerando tiempo, capacidad y prioridades. Menos combustible, más eficiencia.",
    benefits: [
      "Optimización automática",
      "Restricciones personalizables",
      "Seguimiento en tiempo real",
    ],
    visual: <RutasVisual />,
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-brand-200 hover:shadow-xl">
      <div className="aspect-[16/10] w-full overflow-hidden">{service.visual}</div>

      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-gray-900">
          {service.title}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-brand-600">
          {service.subtitle}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {service.description}
        </p>

        <ul className="mt-3 space-y-1.5">
          {service.benefits.map((benefit, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <Check className="h-3.5 w-3.5 flex-shrink-0 text-brand-500" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SecondaryServiceCard({ 
  service, 
  layout = "vertical" 
}: { 
  service: Service; 
  layout?: "vertical" | "horizontal";
}) {
  if (layout === "horizontal") {
    return (
      <div className="group relative flex overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-brand-200 hover:shadow-xl">
        <div className="w-2/5 min-h-[200px] overflow-hidden">{service.visual}</div>
        <div className="flex-1 p-5">
          <h3 className="font-heading text-lg font-bold text-gray-900">
            {service.title}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-brand-600">
            {service.subtitle}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {service.description}
          </p>
          <ul className="mt-3 space-y-1.5">
            {service.benefits.map((benefit, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <Check className="h-3.5 w-3.5 flex-shrink-0 text-brand-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-brand-200 hover:shadow-xl">
      <div className="h-40 w-full overflow-hidden">{service.visual}</div>
      <div className="p-4">
        <h3 className="font-heading text-base font-bold text-gray-900">
          {service.title}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-brand-600">
          {service.subtitle}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-2">
          {service.description}
        </p>
        <ul className="mt-3 space-y-1">
          {service.benefits.slice(0, 2).map((benefit, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <Check className="h-3 w-3 flex-shrink-0 text-brand-500" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Services() {
  const primaryServices = services.slice(0, 2);
  const secondaryServices = services.slice(2);

  return (
    <section id="soluciones" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Soluciones
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Sin cambiar lo que ya funciona
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Añadimos capas de automatización encima de tus sistemas actuales.
            Sin migraciones, sin proyectos de meses.
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {primaryServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </FadeInView>

        <FadeInView delay={0.3}>
          <div className="mt-8">
            <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-500">
              Y también automatizamos
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <SecondaryServiceCard 
                service={secondaryServices[0]} 
                layout="horizontal" 
              />
              <SecondaryServiceCard 
                service={secondaryServices[1]} 
                layout="horizontal" 
              />
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <SecondaryServiceCard 
                service={secondaryServices[2]} 
                layout="horizontal" 
              />
              <SecondaryServiceCard 
                service={secondaryServices[3]} 
                layout="horizontal" 
              />
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600">
              Esto es solo una muestra. Si tienes un proceso repetitivo que te quita tiempo,
              <span className="font-medium text-gray-900"> seguro que podemos automatizarlo</span>.
            </p>
            <a
              href="#contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-700"
            >
              Cuéntanos tu caso
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
