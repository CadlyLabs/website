export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  cta: string;
  href: string;
  heroColor: string;
  order: number;
}

export const SERVICES = [
  {
    slug: "documentos",
    title: "Agente de Documentos",
    tagline: "Albaranes y facturas que se procesan solos",
    description:
      "Fotografía o PDF de un albarán, factura o certificado. En 10 segundos está en tu sistema. Maneja escritura a mano, formatos variables y layouts raros. Los datos van directos a tu ERP o Excel.",
    icon: "FileText",
    features: [
      "Extrae datos de albaranes, facturas y certificados en segundos",
      "Integración directa con tu ERP o Excel",
      "Maneja escritura a mano y formatos variables",
      "Sin plantillas: funciona con cualquier documento",
    ],
    cta: "Ver cómo funciona",
    href: "/soluciones/documentos",
    heroColor: "#FF8532",
    order: 1,
  },
  {
    slug: "appcc",
    title: "APPCC y Trazabilidad Digital",
    tagline: "El inspector pregunta, dos clics y listo",
    description:
      "Trazabilidad completa lote a lote: origen, transformación, destino. Controles APPCC digitales de temperatura, limpieza y recepción. Alertas de caducidad. Reportes listos para auditoría.",
    icon: "ClipboardText",
    features: [
      "Trazabilidad completa lote a lote",
      "Controles APPCC digitales automatizados",
      "Alertas de caducidad en tiempo real",
      "Reportes listos para inspecciones",
    ],
    cta: "Ver cómo funciona",
    href: "/soluciones/appcc",
    heroColor: "#FF6B35",
    order: 2,
  },
  {
    slug: "whatsapp",
    title: "WhatsApp y ERP Conectados",
    tagline: "Pedidos por WhatsApp que entran solos al sistema",
    description:
      "Tus clientes ya te mandan pedidos por WhatsApp. Que se procesen solos. El agente entiende contexto, responde consultas de precio, confirma pedidos. Todo entra directo en tu ERP.",
    icon: "ChatCircle",
    features: [
      "Captura pedidos de WhatsApp automáticamente",
      "Responde consultas de precio en tiempo real",
      "Entiende contexto: 3 cajas de lo de siempre",
      "Integración directa con tu ERP",
    ],
    cta: "Ver cómo funciona",
    href: "/soluciones/whatsapp",
    heroColor: "#FF8532",
    order: 3,
  },
  {
    slug: "dashboard",
    title: "Dashboard de Operaciones",
    tagline: "Stock, márgenes y caducidades en tiempo real",
    description:
      "¿Sabes cuánto stock tienes ahora mismo? Visibilidad total: stock por lote con fechas de caducidad, márgenes por producto, pedidos pendientes. Se alimenta automáticamente de lo que extrae el Agente de Documentos.",
    icon: "ChartBar",
    features: [
      "Stock en tiempo real por lote y caducidad",
      "Márgenes por producto a la vista",
      "Pedidos pendientes y alertas",
      "Se alimenta automáticamente de tus datos",
    ],
    cta: "Ver cómo funciona",
    href: "/soluciones/dashboard",
    heroColor: "#FF9A5C",
    order: 4,
  },
  {
    slug: "proveedores",
    title: "Inteligencia de Proveedores",
    tagline: "Comparativa de precios, certificados y alertas de renovación",
    description:
      "El agente ingiere listas de precios de proveedores. Compara automáticamente, alerta de cambios significativos, rastrea certificaciones y te avisa cuando vencen. Scoring de proveedores en el tiempo.",
    icon: "Storefront",
    features: [
      "Comparativa automática de precios entre proveedores",
      "Alertas de cambios significativos",
      "Seguimiento de certificaciones y vencimientos",
      "Scoring de proveedores en el tiempo",
    ],
    cta: "Ver cómo funciona",
    href: "/soluciones/proveedores",
    heroColor: "#FF7A40",
    order: 5,
  },
  {
    slug: "automatizacion",
    title: "Orquestación de Procesos",
    tagline: "Flujos de trabajo complejos automatizados paso a paso",
    description:
      "Automatizamos el flujo completo: pedido recibido, chequeo de stock, orden a proveedor si falta, programación de producción, entrega. Cada cliente tiene su flujo. Donde los agentes múltiples brillan.",
    icon: "GitBranch",
    features: [
      "Flujos multi-paso completamente automatizados",
      "Personalizado a tu proceso específico",
      "Integración con todos tus sistemas",
      "Ahorros masivos de tiempo y errores",
    ],
    cta: "Ver cómo funciona",
    href: "/soluciones/automatizacion",
    heroColor: "#FF6020",
    order: 6,
  },
] as const satisfies readonly ServiceData[];
