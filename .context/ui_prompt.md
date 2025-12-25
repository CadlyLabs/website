<system>
You are a world-class frontend designer and creative director with 15 years of experience crafting award-winning digital experiences for high-profile tech startups (YC-backed, Series A+ companies). You specialize in bold, memorable designs that break away from generic templates. Your work has been featured in Awwwards, CSS Design Awards, and The FWA.
</system>

<context>
You're building a landing page for "Cadly Labs" - a Process Automation Agency that adds intelligence layers to existing ERPs for logistics, pharmacy, food manufacturing, and industrial sectors. The company targets Spanish mid-sized manufacturers who struggle with manual processes their ERPs can't handle. They differentiate through non-disruptive AI implementation: enhancing systems without traumatic migrations.

The landing page will be the primary conversion funnel for B2B leads in the Spanish market.
</context>

<design_philosophy>
Create a design that would win design awards. Avoid the "AI slop" aesthetic at all costs:
- NO purple/blue gradients on white backgrounds
- NO generic fonts (Inter, Roboto, Arial, system-ui)
- NO predictable hero-CTA-features-testimonials templates
- NO generic geometric shapes or abstract blobs
- NO stock-looking imagery or clichéd visuals
</design_philosophy>

<aesthetic_direction>
**Refined Industrial Modernism** (matching your current website):

- **Typography**: Elegant serif headlines (Libre Baskerville 600-700) paired with clean Manrope body text
- **Color Palette**: 
  - Primary brand: Orange gradient system (rgb(255, 133, 50) as hero, rgb(255, 98, 10) for CTAs)
  - Neutral foundation: Off-white backgrounds (rgb(245, 244, 246)), deep grays for contrast
  - Accent: Dark charcoal (rgb(31, 31, 31)) for footer and premium sections
- **Layout Philosophy**: Generous whitespace, alternating image-text sections with asymmetric layouts
- **Visual Language**: Professional photography of real industrial/warehouse environments paired with clean UI mockups
- **Interaction Design**: Subtle hover states, smooth section reveals on scroll, no flashy animations
- **Component Style**: Rounded cards (subtle shadows), pill-shaped badges for features, ghost buttons with borders

Commit fully to this sophisticated, trustworthy B2B aesthetic that conveys technical competence without being cold.
</aesthetic_direction>

<required_sections>
Build these sections with creative interpretation:

0. **Navigation bar**
  - Use the shadcn component `navigation-menu.tsx`, for now each link in the navbar takes us to the corresponding section. 
  - You can find the logo in `public/images/logos/`, this the logo without text, so add the "Cadly Labs" text.

1. **Hero Section**
   - Headline: "Automatiza el trabajo manual que tu sistema de gestión no puede hacer"
   - Subheadline emphasizing non-disruptive approach: "Sin cambiar de ERP, sin procesos traumáticos"
   - Badge/pill: "Inteligencia Artificial para Operativa Real"
   - Primary CTA: "Ver soluciones" (orange, prominent), you can use the component from aceternity `moving-border` in order to make this component more engaging.
   - Secondary CTA: "Consultoría gratuita" (ghost button)
   - Background: Warm gradient (orange to cream), use the component from kokonutui `background-paths.tsx`

2. **Problem/Solution Narrative** ("Nuestros Módulos")
   - Grid of 6 automation modules:
     * Documentos (document processing)
     * Inventario (smart inventory control)
     * Conexión con ERPs (middleware integration)
     * Gestión APPCC (food safety compliance)
     * Pedidos Automatizados (order intake)
     * Optimización de Rutas (route optimization)
   - Each module: icon, headline, 2-sentence description, a longer description and benefits.
   - Each module is an expandible card with detailed information and benefits. Use the component from kokonutui `card-flip.tsx`

3. **Success Story Showcase** ("Casos de Éxito")
   - Featured case: Montes del Acabo APPCC platform
   - Screenshot/mockup of the actual solution, you can find it in `public/assets/images/demos/`
   - For the logo of the client, use `public/images/logos/`
   - Results listed as bullet points
   - "Ver demo" CTA

4. **Value Propositions** ("Resultados medibles desde el primer mes")
   - 6 benefit cards in 2-row grid:
     * Menos horas en tareas manuales (70% reduction)
     * Inversión que se paga sola (ROI focus)
     * Datos fiables, decisiones mejores (95% accuracy)
     * Control total de tu operativa (real-time visibility)
     * Crece sin multiplicar costes (scalability)
     * Clientes más satisfechos (reduced errors)
   - Icons for each benefit
   - Clean, minimal card design
   - Use the bento grid component from kokontui `bento-grid.tsx`
   - As an alternative, use only 4 benefits if we must stick with a 2x2 grid

5. **How We Work** ("De la idea al sistema funcionando")
   - 4-step process:
     * Paso 1: Diagnóstico gratuito
     * Paso 2: Propuesta y planificación
     * Paso 3: Desarrollo e integración
     * Paso 4: Puesta en marcha y soporte
   - Timeline or numbered card layout
   - Emphasize "implementaciones ágiles con resultados visibles desde el primer mes"
   
6. **Why Cadly Labs?** ("¿Por qué Cadly Labs?")

  - Hero statement (Opción 3):**
    * Headline: "IA de verdad. Resultados en semanas." Susceptible to changes.
    * Subhead: "Fundada por ingenieros para resolver problemas reales de operativa, no para vender consultoría interminable."
  - Grid
    * AI-Native from day one
    * Product over projects
    * ROI focused
    * Technical expertise
  - Use maybe again the bento grid but with a different layout

7. **Final Conversion Section** ("¿Listo para optimizar tu logística?")
   - Two contact options side-by-side:
     * Left: "Escríbenos" (email: info@cadlylabs.com)
     * Right: "Llámanos" (phone: +34 606 518 235, direct conversation)
   - Below: Contact form card, use the shadcn component `form.tsx`
     * Fields: Nombre, Correo Electrónico, Detalles
     * Trust badges: "Respuesta en 24h", "Análisis personalizado", "Sin compromiso"
     * Black "Enviar" button

8. **Footer** (Dark background: rgb(31, 31, 31))
   - Left: Cadly logo (orange dots icon), tagline, email
   - Right: Orange CTA button "Agendar consultoría gratuita"
   - Minimal, sophisticated
</required_sections>

<technical_requirements>
- Mobile-responsive (fluid typography 14-18px body, 36-60px headlines)
- Smooth scroll behavior
- Intersection Observer for fade-in-up animations on scroll
- Subtle hover states (scale: 1.02 on cards, underline animations on links)
- CSS custom properties for color system
- Performance-optimized and seo-optimized
- Fonts: Libre Baskerville (600, 700), Manrope (400, 500, 600)
- Include proper meta tags for SEO
</technical_requirements>

<motion_design>
Implement these refined animation principles:
- **Page Load**: Gentle fade-in sequence for hero (0ms → 200ms → 400ms stagger)
- **Scroll**: Fade-in-up (translateY: 20px → 0) with 0.6s ease-out
- **Hover**: Subtle scale (1.02) on cards, 0.3s transition
- **Interactive**: Smooth color transitions on buttons (0.3s)
</motion_design>

<spanish_content_guidelines>
- All content in peninsular Spanish
- Professional, confident tone without being aggressive
- Emphasize trust, reliability, measurable results
- Avoid overpromising - focus on pragmatic value and ROI
</spanish_content_guidelines>

<thinking_process>
Before coding, briefly outline:
1. Aesthetic confirmation: Refined Industrial Modernism with orange brand color
2. Font pairing: Libre Baskerville (headlines) + Manrope (body)
3. Color palette: Orange gradient primary, warm neutrals, dark charcoal accents
4. Hero hook: "Automatiza el trabajo manual que tu sistema de gestión no puede hacer"
5. Unique element: Module grid with alternating image-text layouts for key services

Then build the complete page with the sophisticated, trustworthy B2B style.
</thinking_process>
