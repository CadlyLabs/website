---
📋 Cadly Labs Website - Implementation Plan
Executive Summary
Project: Single-page B2B landing page for Cadly Labs (Process Automation Agency)  
Target: Spanish mid-sized manufacturers (logistics, pharmacy, food, industrial)  
Tech Stack: Next.js 16 (App Router), Bun, Tailwind CSS v4, shadcn/ui, motion/react  
Aesthetic: "Refined Industrial Modernism" - warm orange gradients, elegant serif headers  
Estimated Effort: 1.5-2 days for full implementation
---
1. File/Component Architecture
app/
├── layout.tsx                    # Fonts, metadata, base HTML (lang="es")
├── page.tsx                      # Server Component - composes all sections
├── globals.css                   # Tailwind v4 + CSS custom properties (brand colors)
├── actions/
│   └── contact.ts                # Server Action for form submission
│
components/
├── sections/                     # Page sections
│   ├── Navbar.tsx                # Client - scroll state, sticky nav
│   ├── Hero.tsx                  # Client - uses background-paths
│   ├── Services.tsx              # Client - uses card-flip for 6 modules
│   ├── SuccessStory.tsx          # Server - static case study
│   ├── ValueProps.tsx            # Client - customized bento-grid
│   ├── HowWeWork.tsx             # Server - 4-step timeline
│   ├── WhyCadly.tsx              # Server - differentiators grid
│   ├── Contact.tsx               # Client - form with validation
│   └── Footer.tsx                # Server - dark footer
│
├── animations/
│   └── FadeInView.tsx            # Shared Intersection Observer wrapper
│
├── icons/
│   └── ModuleIcons.tsx           # Custom SVG icons for 6 modules
│
├── ui/                           # Existing shadcn components
│   ├── button.tsx                # ✅ Already exists
│   ├── form.tsx                  # ✅ Already exists
│   ├── label.tsx                 # ✅ Already exists
│   ├── input.tsx                 # 🔧 Need to add
│   ├── textarea.tsx              # 🔧 Need to add
│   ├── navigation-menu.tsx       # ✅ Already exists
│   └── moving-border.tsx         # ✅ Already exists
│
└── kokonutui/                    # Existing KokonutUI (need color modifications)
    ├── background-paths.tsx      # 🔧 Modify gradient to orange
    ├── card-flip.tsx             # 🔧 Customize for modules
    └── bento-grid.tsx            # 🔧 Simplify for value props
---
2. Component Strategy (Server vs Client)
| Section | Component Type | Rationale |
|---------|---------------|-----------|
| layout.tsx | Server | Font loading, metadata, SEO |
| page.tsx | Server | Orchestrates section imports |
| Navbar.tsx | Client | Scroll detection, sticky state, active section |
| Hero.tsx | Client | Uses animated background-paths |
| Services.tsx | Client | Uses card-flip with hover state |
| SuccessStory.tsx | Server | Static content, image optimization |
| ValueProps.tsx | Client | Customized bento-grid with animations |
| HowWeWork.tsx | Server | CSS-only scroll animations |
| WhyCadly.tsx | Server | Static grid with CSS fade-in |
| Contact.tsx | Client | react-hook-form + zod validation |
| Footer.tsx | Server | Static dark section |
---
3. Theming & Design System
3.1 Color Palette (to add in globals.css)
@theme inline {
  /* Brand Orange Gradient System */
  --color-brand-50: rgb(255, 247, 239);   /* Very light orange */
  --color-brand-100: rgb(254, 235, 213);  /* Light orange */
  --color-brand-500: rgb(255, 133, 50);   /* Primary brand */
  --color-brand-600: rgb(255, 98, 10);    /* CTAs, hover */
  --color-brand-700: rgb(255, 72, 0);     /* Strong orange */
  --color-brand-800: rgb(149, 48, 23);    /* Dark orange */
  --color-brand-900: rgb(120, 42, 22);    /* Very dark orange */
  
  /* Neutral Foundation */
  --color-surface: rgb(245, 244, 246);    /* Off-white background */
  --color-charcoal: rgb(31, 31, 31);      /* Footer, dark sections */
  --color-gray-300: #a7a7a7;              /* Muted text */
  --color-gray-400: #8e8e8e;              /* Secondary text */
  
  /* Typography */
  --font-heading: var(--font-libre-baskerville);
  --font-body: var(--font-manrope);
}
3.2 Typography Configuration
// layout.tsx
import { Libre_Baskerville, Manrope } from 'next/font/google';
const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  display: 'swap',
});
const manrope = Manrope({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});
3.3 Type Scale (matching Framer design)
- Display (H1): 60px / 3.75rem
- H2: 48px / 3rem  
- H3: 36px / 2.25rem
- H4: 24px / 1.5rem
- Body Large: 18px / 1.125rem
- Body: 16px / 1rem
- Small: 14px / 0.875rem
---
4. Section Specifications
Section 0: Navigation Bar
- Component: Navbar.tsx (Client)
- Features:
  - Sticky on scroll with backdrop blur
  - Logo (from cadly_logo.avif) + "Cadly Labs" text
  - Navigation links: Soluciones, Casos de éxito, Cómo trabajamos, Contacto
  - Scroll-spy for active section highlighting
  - Mobile hamburger menu
- Components used: NavigationMenu from shadcn
Section 1: Hero
- Component: Hero.tsx (Client)
- Content:
  - Badge: "Inteligencia Artificial para Operativa Real" (pill-shaped)
  - Headline: "Automatiza el trabajo manual que tu sistema de gestión no puede hacer"
  - Subheadline: "Sin cambiar de ERP, sin procesos traumáticos"
  - Primary CTA: "Ver soluciones" (orange, with moving-border effect)
  - Secondary CTA: "Consultoría gratuita" (ghost button)
- Background: Modified background-paths.tsx with orange gradient
- Animation: Staggered fade-in (0ms → 200ms → 400ms)
Section 2: Services ("Nuestros Módulos")
- Component: Services.tsx (Client)
- Layout: 3x2 grid on desktop, 2x3 on tablet, 1x6 on mobile
- Components used: Customized card-flip.tsx
- 6 Modules:
  1. Documentos - Document processing automation
  2. Inventario - Smart inventory control
  3. Conexión con ERPs - Middleware integration
  4. Gestión APPCC - Food safety compliance
  5. Pedidos Automatizados - Automated order intake
  6. Optimización de Rutas - Route optimization
Each card flips to show:
- Detailed description
- 4-5 bullet point benefits
- "Ver más" CTA
Section 3: Success Story ("Casos de Éxito")
- Component: SuccessStory.tsx (Server)
- Content:
  - Client: Montes del Acebo (logo from montes_acebo_logo.avif)
  - Solution: APPCC Platform
  - Screenshot: appcc_demo.avif
  - Results as bullet points
  - "Ver demo" CTA button
- Layout: Two-column (image left, content right)
Section 4: Value Propositions ("Resultados medibles")
- Component: ValueProps.tsx (Client)
- Layout: 2x2 bento grid (4 benefits)
- Benefits (reduced from 6 to 4 for cleaner layout):
  1. 70% menos horas en tareas manuales
  2. Inversión que se paga sola (ROI)
  3. 95% datos fiables, decisiones mejores
  4. Control total de tu operativa
- Components used: Simplified bento-grid.tsx (stripped of AI icons, typing animation)
Section 5: How We Work ("De la idea al sistema funcionando")
- Component: HowWeWork.tsx (Server)
- Layout: Horizontal timeline with 4 numbered steps
- Steps:
  1. Diagnóstico gratuito
  2. Propuesta y planificación
  3. Desarrollo e integración
  4. Puesta en marcha y soporte
- Animation: CSS scroll-driven fade-in
Section 6: Why Cadly Labs ("¿Por qué Cadly Labs?")
- Component: WhyCadly.tsx (Server)
- Hero statement: "IA de verdad. Resultados en semanas."
- Subhead: "Fundada por ingenieros para resolver problemas reales de operativa"
- Grid (2x2):
  1. AI-Native desde el día uno
  2. Producto sobre proyectos
  3. Enfoque en ROI
  4. Experiencia técnica real
Section 7: Contact ("¿Listo para optimizar tu logística?")
- Component: Contact.tsx (Client)
- Layout: 
  - Top: Two contact cards side-by-side
    - Left: "Escríbenos" (info@cadlylabs.com)
    - Right: "Llámanos" (+34 606 518 235)
  - Below: Contact form card
- Form fields: Nombre, Correo Electrónico, Detalles (textarea)
- Trust badges: "Respuesta en 24h", "Análisis personalizado", "Sin compromiso"
- Submit button: Black "Enviar"
- Validation: Zod schema with Spanish error messages
- Action: Server Action in app/actions/contact.ts
Section 8: Footer
- Component: Footer.tsx (Server)
- Background: rgb(31, 31, 31) (charcoal)
- Layout:
  - Left: Cadly logo, tagline, email
  - Right: Orange CTA "Agendar consultoría gratuita"
- Style: Minimal, sophisticated
---
5. Animation System
5.1 Shared Animation Component
// components/animations/FadeInView.tsx
"use client";
import { motion } from "motion/react";
export function FadeInView({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
5.2 CSS Scroll-Driven Animations (for Server Components)
.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  animation-timeline: view();
  animation-range: entry 0% entry 30%;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
5.3 Hover States
- Cards: scale: 1.02, transition: 0.3s
- Buttons: Color transition 0.3s
- Links: Underline animation
---
6. Components to Modify
6.1 background-paths.tsx - Change gradient to orange
// Line 154-158: Change gradient colors
<linearGradient id="sharedGradient" x1="0%" x2="100%" y1="0%" y2="0%">
  <stop offset="0%" stopColor="rgba(255, 133, 50, 0.5)" />
  <stop offset="50%" stopColor="rgba(255, 98, 10, 0.5)" />
  <stop offset="100%" stopColor="rgba(255, 72, 0, 0.5)" />
</linearGradient>
6.2 card-flip.tsx - Add icon prop, customize content
- Add icon prop for module icons
- Modify animation keyframes from orange to match brand
- Add Spanish "Ver más" CTA text
6.3 moving-border.tsx - Change border color to orange
// Line 50: Change gradient
<div className="h-20 w-20 bg-[radial-gradient(var(--color-brand-500)_40%,transparent_60%)] opacity-[0.8]" />
---
7. Components to Add (via shadcn CLI)
bunx shadcn-ui@latest add input
bunx shadcn-ui@latest add textarea
---
8. SEO Configuration
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Cadly Labs | Automatización de Procesos con IA',
  description: 'Automatiza el trabajo manual que tu sistema de gestión no puede hacer. Sin cambiar de ERP, sin procesos traumáticos. Soluciones de IA para logística, farmacia e industria.',
  keywords: ['automatización de procesos', 'IA para empresas', 'ERP', 'logística', 'industria 4.0', 'España'],
  authors: [{ name: 'Cadly Labs' }],
  openGraph: {
    title: 'Cadly Labs | Automatización de Procesos con IA',
    description: 'Soluciones de automatización para empresas industriales españolas',
    type: 'website',
    locale: 'es_ES',
    url: 'https://cadlylabs.com',
    siteName: 'Cadly Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadly Labs | Automatización de Procesos con IA',
  },
  robots: {
    index: true,
    follow: true,
  },
};
---
9. Implementation Order
| Phase | Task | Effort | Dependencies |
|-------|------|--------|--------------|
| 1 | Update layout.tsx (fonts, lang="es", metadata) | 30 min | None |
| 2 | Add brand colors to globals.css | 20 min | None |
| 3 | Create FadeInView animation component | 20 min | None |
| 4 | Modify background-paths.tsx gradient | 15 min | None |
| 5 | Add input.tsx, textarea.tsx via shadcn | 10 min | None |
| 6 | Build Navbar.tsx | 1 hour | Phase 1-2 |
| 7 | Build Hero.tsx | 1.5 hours | Phase 3-4 |
| 8 | Create module icons SVGs | 30 min | None |
| 9 | Build Services.tsx + customize card-flip | 2 hours | Phase 8 |
| 10 | Build SuccessStory.tsx | 45 min | None |
| 11 | Build ValueProps.tsx + simplify bento-grid | 1.5 hours | Phase 3 |
| 12 | Build HowWeWork.tsx | 45 min | Phase 2 |
| 13 | Build WhyCadly.tsx | 30 min | Phase 2 |
| 14 | Create Server Action for contact form | 30 min | Phase 5 |
| 15 | Build Contact.tsx | 1.5 hours | Phase 5, 14 |
| 16 | Build Footer.tsx | 30 min | Phase 2 |
| 17 | Compose page.tsx with all sections | 30 min | All above |
| 18 | Mobile responsiveness pass | 1 hour | Phase 17 |
| 19 | Testing & polish | 1 hour | Phase 18 |
Total estimated time: ~14-16 hours (1.5-2 days)
---
10. Performance Considerations
| Concern | Mitigation |
|---------|------------|
| background-paths.tsx (37 SVG paths) | Already memoized; monitor Lighthouse; reduce if needed |
| Font loading | Using next/font with display: swap ✅ |
| Images | Use next/image with priority for hero, lazy for others |
| Motion bundle | Tree-shaking enabled; only import used functions |
| Card-flip on mobile | Add touch support (click toggle instead of hover) |
---
11. Questions for Your Review
Before we begin implementation, please confirm:
1. Content: Do you have finalized Spanish copy for all sections, or should I use the placeholder text from ui_prompt.md?
2. Success Story: Is "Montes del Acebo" the correct client name? (I see montes_acebo_logo.avif in the assets)
3. Value Props: The design suggests 4 benefits work better than 6 in a bento grid. Should I keep 4, or do you want all 6 in a different layout?
4. Contact Form: Should the form actually send emails in this phase, or just validate and show success? If sending emails, what service do you prefer (Resend, SendGrid, etc.)?
5. Mobile Navigation: Hamburger menu with slide-out panel, or simple dropdown?
6. "Why Cadly Labs" Section: The headline "IA de verdad. Resultados en semanas." - is this approved, or do you want to explore alternatives?
---
