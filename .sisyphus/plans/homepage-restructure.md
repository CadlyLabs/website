# Homepage Restructure: Food Industry as Hero

## TL;DR

> **Quick Summary**: Restructure CadlyLabs homepage from generic AI automation agency to 100% food industry focus. Kill the 6-card bento grid, replace with 2 prominent service cards (APPCC + Documents) + subtle "también automatizamos" row. Rewrite all copy for food-industry tone.
> 
> **Deliverables**:
> - New FoodServices section component (2 cards + secondary row)
> - Rewritten Hero with food-industry messaging
> - Adapted copy across SuccessStory, WhyCadly, Contact, Footer
> - Updated SEO/structured data for food industry
> - Dead code cleanup (ValueProps.tsx, HowWeWork.astro)
> 
> **Estimated Effort**: Medium
> **Parallel Execution**: YES — 3 waves + final verification
> **Critical Path**: T1 (FoodServices) → T4 (Assembly) → T6 (Cleanup + Build)

---

## Context

### Original Request
GitHub Issue #1: "Restructure homepage: food industry as hero". Pivoting Cadly to focus 100% on food industry SMBs in Spain. Homepage currently positions as generic automation agency with 6 solutions.

### Interview Summary
**Key Discussions**:
- **Section order**: Hero → 2 Service Cards → "También automatizamos" row → SuccessStory → HowWeWork → WhyCadly → Contact → Footer. ValueProps REMOVED.
- **Non-food services**: Subtle horizontal row with icons + one-liners (pedidos, picking, rutas, ERP). Not cards, not removed entirely.
- **Copy strategy**: Agent drafts best-effort Spanish copy, user reviews. Tone: informal "tú", benefit-focused, specific numbers. SEO optimization deferred (issue #11).
- **Visual direction**: "Professional warmth" — clean readable layout + product UI mockup components in service cards + orange as graphic personality. NOT soulless template, NOT editorial art piece. "50-year-old food operator understands in 5 seconds."
- **Hero CTAs**: Primary → scroll to service cards. Secondary → scroll to contact form.
- **Test strategy**: Skip unit tests. Agent QA via Playwright.

**Key copy inspirations from Variant.com exploration**:
- "Dedícate a la carne, nosotros al papeleo"
- "La primera plataforma diseñada para personas, no para informáticos"
- "Tu sala de despiece, bajo control"
- Specific metrics in testimonials: "AHORRO: 12H/SEMANA"

### Brand Voice (from Zettelkasten — still valid post-pivot)
- Direct, practical, confident, human, local
- "tú" not "usted"; benefits over features; specific numbers
- FORBIDDEN words: sinergia, transformación digital, disruptivo, escalable, partner estratégico, solución end-to-end, innovador
- Use instead: automatización práctica, herramienta que funciona, puesta en marcha, quitar trabajo manual

### Research Findings
- **Framework**: Astro 5.16 + React 19 islands, Tailwind v4, static GitHub Pages deploy
- **Current homepage**: 9 sections, Services.tsx (760 lines, 6 cards with visual sub-components) is the main target
- **Key visual components to salvage**: `APPCCDashboardVisual` and `DocumentScannerVisual` from Services.tsx — interactive React mockups showing real product UI
- **Design system**: orange brand (#FF8532), Libre Baskerville headings, Manrope body, FadeInView animations, Phosphor icons
- **All copy hardcoded** in components
- **No tests**: zero framework, zero coverage

### Metis Review
**Identified Gaps** (all addressed):
- Hero visual source → Resolved: headline-driven hero, keep FloatingPaths. Visual components reused in service cards.
- Service card CTAs → Resolved: link to `#contacto` (landing pages don't exist yet, issues #4/#5)
- SuccessStory placeholder quote → Resolved: agent rewrites with authentic-feeling copy, avoids "Transformamos" (too close to forbidden "transformación")
- Footer/Contact generic copy → Resolved: both IN scope, food-industry pivot
- Dead HowWeWork.astro file → Resolved: delete (unused, index.astro imports .tsx)
- SEO vs keywords → Resolved: update meta descriptions for food industry, no keyword research
- FloatingPaths background → Resolved: keep as brand personality element
- Navbar labels → Resolved: keep as-is ("Soluciones", "Casos de éxito", "Cómo trabajamos" still apply)

---

## Work Objectives

### Core Objective
Transform the homepage from a generic AI automation agency into a focused food-industry brand page that builds trust with Spanish food SMB operators and channels them to two core service landing pages.

### Concrete Deliverables
- `src/components/sections/FoodServices.tsx` — new section replacing Services.tsx usage
- `src/components/sections/Hero.tsx` — rewritten copy + swapped CTAs
- `src/components/sections/WhyCadly.astro` — food-specific differentiators
- `src/components/sections/SuccessStory.astro` — improved copy, no "transformamos"
- `src/components/sections/Contact.tsx` — food-industry headings
- `src/components/sections/Footer.astro` — pivoted tagline
- `src/components/SEO.astro` — food-industry meta descriptions
- `src/components/StructuredData.astro` — food-industry organization description
- `src/pages/index.astro` — new section order, swapped imports
- DELETED: `src/components/sections/ValueProps.tsx`
- DELETED: `src/components/sections/HowWeWork.astro` (dead file, .tsx kept)

### Definition of Done
- [ ] `bun build` exits 0 with no errors
- [ ] Homepage loads with sections in correct order
- [ ] No mention of "logística, farmacia" in page content
- [ ] Food-industry terms present (industria alimentaria, seguridad alimentaria, APPCC)
- [ ] ValueProps section does NOT exist in DOM
- [ ] All internal anchor links resolve correctly

### Must Have
- Food-industry-specific hero messaging visible above the fold
- Exactly 2 prominent service cards (APPCC + Document Processing)
- "También automatizamos" row with 4 secondary items
- All copy in Spanish with "tú" informal tone
- Service cards link to `#contacto` (landing pages pending issues #4/#5)
- SuccessStory retains Montes del Acebo case
- Build passes for GitHub Pages deploy

### Must NOT Have (Guardrails)
- MUST NOT create `/appcc` or `/documentos` routes (issues #4, #5)
- MUST NOT modify Contact form submission logic (webhook URL, fetch call)
- MUST NOT touch design system tokens in global.css (brand colors, fonts)
- MUST NOT change astro.config.mjs, build config, or deploy pipeline
- MUST NOT add new npm dependencies
- MUST NOT introduce new animation patterns (use existing FadeInView/StaggerContainer)
- MUST NOT leave dead/commented-out code from replaced sections
- MUST NOT use forbidden brand words: sinergia, transformación digital, disruptivo, escalable, partner estratégico, solución end-to-end
- MUST NOT break accessibility features (SkipLink, focus-visible, prefers-reduced-motion, aria-labels)
- MUST NOT break mobile layout (match existing sm/md/lg breakpoints, no new breakpoint work)
- Keep `client:load` vs `client:visible` hydration strategy consistent

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO
- **Automated tests**: None (skip for this visual restructure)
- **Framework**: N/A

### QA Policy
Every task includes agent-executed QA scenarios via Playwright browser verification.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

| Deliverable Type | Verification Tool | Method |
|------------------|-------------------|--------|
| Section layout/content | Playwright (playwright skill) | Navigate, verify text content, check section order, screenshot |
| Build integrity | Bash | `bun build`, assert exit 0 |
| Dead code removal | Bash | Verify files deleted, grep for stale imports |
| SEO metadata | Bash | Check built HTML for correct meta tags |

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately — independent component work, 3 parallel):
├── Task 1: Create FoodServices section [visual-engineering]
├── Task 2: Rewrite Hero section [visual-engineering]
└── Task 3: Content adaptation pass (WhyCadly, SuccessStory, Contact, Footer) [visual-engineering]

Wave 2 (After Wave 1 — assembly + metadata, 2 parallel):
├── Task 4: Structural assembly in index.astro (depends: T1, T2, T3) [quick]
└── Task 5: SEO/metadata update (depends: none, but logically after content) [quick]

Wave 3 (After Wave 2 — cleanup + verification):
└── Task 6: Dead code cleanup + build verification (depends: T4, T5) [quick]

Wave FINAL (After ALL tasks — independent review, 4 parallel):
├── Task F1: Plan compliance audit [oracle]
├── Task F2: Code quality review [unspecified-high]
├── Task F3: Real manual QA [unspecified-high]
└── Task F4: Scope fidelity check [deep]

Critical Path: T1 → T4 → T6 → F1-F4
Parallel Speedup: ~50% faster than sequential
Max Concurrent: 3 (Wave 1)
```

### Dependency Matrix

| Task | Depends On | Blocks | Wave |
|------|------------|--------|------|
| T1 (FoodServices) | — | T4 | 1 |
| T2 (Hero) | — | T4 | 1 |
| T3 (Content) | — | T4 | 1 |
| T4 (Assembly) | T1, T2, T3 | T6 | 2 |
| T5 (SEO) | — | T6 | 2 |
| T6 (Cleanup) | T4, T5 | F1-F4 | 3 |

### Agent Dispatch Summary

| Wave | # Parallel | Tasks → Agent Category | Skills |
|------|------------|----------------------|--------|
| 1 | **3** | T1 → `visual-engineering`, T2 → `visual-engineering`, T3 → `visual-engineering` | `frontend-design` + `frontend-ui-ux` |
| 2 | **2** | T4 → `quick`, T5 → `quick` | none |
| 3 | **1** | T6 → `quick` | none |
| FINAL | **4** | F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high` (+`playwright`), F4 → `deep` | as noted |

---

## TODOs

- [ ] 1. Create FoodServices section component

  **What to do**:
  - Create `src/components/sections/FoodServices.tsx` — a new React component replacing Services.tsx usage on the homepage
  - **Two prominent service cards** (APPCC platform + Document Processing):
    - Each card: icon + title + 2-3 benefit bullet points + CTA button linking to `#contacto`
    - Embed the existing `APPCCDashboardVisual` component inside the APPCC card (extract from Services.tsx)
    - Embed the existing `DocumentScannerVisual` component inside the Documents card (extract from Services.tsx)
    - Cards should be side-by-side on desktop (grid-cols-2), stacked on mobile
    - Style: `rounded-3xl border border-gray-200 bg-white shadow-sm hover:border-brand-200 hover:shadow-lg` (match existing card pattern)
  - **"También automatizamos" subtle row** below the two cards:
    - Horizontal row of 4 items: Pedidos, Picking Inteligente, Rutas, Integración ERP
    - Each item: Phosphor icon + short label (no description, no card styling)
    - Style: muted text (text-gray-500), small icons, separated by subtle dividers or even spacing
    - On mobile: 2x2 grid or horizontal scroll
    - Prefix text: "También automatizamos:" in small gray text above the row
  - Section wrapper: `<section id="soluciones">` (keep same ID so nav links work)
  - Use `<FadeInView>` for scroll animations
  - Layout: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
  - Copy for cards (draft — user will review):
    - APPCC card: "Gestión APPCC Digital" — "Registros, trazabilidad y controles de seguridad alimentaria. Todo digital, todo trazable." Benefits: "Registros APPCC sin papel", "Trazabilidad por lote en 2 clics", "Alertas automáticas de caducidades"
    - Docs card: "Procesamiento de Documentos" — "Albaranes, facturas y documentación. Se procesan solos." Benefits: "Lectura automática de albaranes", "Extracción de datos de facturas", "Archivo digital con búsqueda"
  - Extract `APPCCDashboardVisual` and `DocumentScannerVisual` from Services.tsx — copy the function code, keep all their internal logic. Also copy the `ERP_LOGOS` array and preload logic if DocumentScannerVisual uses it.
  - Use `@phosphor-icons/react` icons for the "también automatizamos" items: `ShoppingCartIcon` (Pedidos), `PackageIcon` (Picking), `TruckIcon` (Rutas), `PlugIcon` or `ArrowsClockwiseIcon` (ERP)

  **Must NOT do**:
  - Do NOT create /appcc or /documentos routes
  - Do NOT add new npm dependencies
  - Do NOT create new animation patterns (use FadeInView only)
  - Do NOT use forbidden brand words in copy
  - Do NOT modify the original Services.tsx file (it will be removed later in T6 if orphaned, but may still be imported elsewhere)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: New UI component with layout, styling, responsive breakpoints, and embedded interactive visuals
  - **Skills**: [`frontend-design`, `frontend-ui-ux`]
    - `frontend-design`: Tailwind v4 reference docs, Motion animation API, shadcn/ui patterns
    - `frontend-ui-ux`: Designer-turned-developer sensibility for "professional warmth" aesthetic. No mockups exist — agent must envision layout from verbal direction. Ensures cards feel crafted, not generic.
  - **Skills Evaluated but Omitted**:
    - `playwright`: Not needed for creation, only verification

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 2, 3)
  - **Blocks**: Task 4 (Assembly)
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `src/components/sections/Services.tsx:36-120` — `APPCCDashboardVisual` component to extract and reuse
  - `src/components/sections/Services.tsx` — `DocumentScannerVisual` component to extract (search for function name)
  - `src/components/sections/Services.tsx:19-34` — `ERP_LOGOS` array and preload logic, needed by DocumentScannerVisual
  - `src/components/sections/WhyCadly.astro:49-72` — Card grid layout pattern (2-col grid, rounded-3xl cards)
  - `src/components/sections/ValueProps.tsx` — Another card layout pattern (for reference, will be deleted)

  **API/Type References**:
  - `src/lib/utils.ts` — `cn()` utility for className merging
  - `src/components/animations/FadeInView.tsx` — Scroll animation wrapper (use for section entry)

  **External References**:
  - Phosphor Icons: `@phosphor-icons/react` — all icons imported from here
  - Existing brand voice: Copy should follow `CLAUDE.md:122-143` voice guidelines

  **WHY Each Reference Matters**:
  - Services.tsx visuals: These are the product UI mockups to embed in the new cards — they show the actual APPCC dashboard and document scanner interface
  - WhyCadly card grid: Copy this exact grid pattern for consistency — same border-radius, shadows, hover states
  - ERP_LOGOS + preload: DocumentScannerVisual renders ERP logos and the preload prevents layout shift

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Service cards render correctly on desktop
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running (bun dev), page loaded at localhost:4321
    Steps:
      1. Set viewport to 1280x800
      2. Navigate to localhost:4321
      3. Scroll to section#soluciones
      4. Assert: exactly 2 elements matching `.rounded-3xl` cards within section#soluciones are visible
      5. Assert: first card contains text "APPCC" (case-insensitive)
      6. Assert: second card contains text "Documento" or "Albarán" (case-insensitive)
      7. Assert: each card has a CTA button/link with href="#contacto"
      8. Screenshot the section
    Expected Result: Two side-by-side cards visible with APPCC and Document content, each linking to contact
    Failure Indicators: Cards missing, stacked instead of side-by-side, wrong href
    Evidence: .sisyphus/evidence/task-1-service-cards-desktop.png

  Scenario: "También automatizamos" row renders with 4 items
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running, desktop viewport
    Steps:
      1. Scroll to section#soluciones
      2. Assert: text "También automatizamos" is visible below the service cards
      3. Assert: exactly 4 items visible in the subtle row (Pedidos, Picking, Rutas, ERP/Integración)
      4. Assert: items use muted styling (gray text, small icons, no card borders)
      5. Screenshot the row
    Expected Result: Horizontal row with 4 muted items below the prominent cards
    Failure Indicators: Missing items, card-style items instead of subtle row, text not visible
    Evidence: .sisyphus/evidence/task-1-tambien-row.png

  Scenario: Mobile layout stacks cards vertically
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Set viewport to 375x812 (iPhone)
      2. Navigate to localhost:4321
      3. Scroll to section#soluciones
      4. Assert: service cards are stacked vertically (not side-by-side)
      5. Assert: "también automatizamos" items are in 2x2 grid or stacked
      6. Screenshot
    Expected Result: Cards stacked, subtle row adapted for mobile
    Failure Indicators: Horizontal overflow, cards cut off, text unreadable
    Evidence: .sisyphus/evidence/task-1-mobile-layout.png
  ```

  **Evidence to Capture:**
  - [ ] task-1-service-cards-desktop.png
  - [ ] task-1-tambien-row.png
  - [ ] task-1-mobile-layout.png

  **Commit**: YES
  - Message: `feat(services): create food-focused service cards section`
  - Files: `src/components/sections/FoodServices.tsx`
  - Pre-commit: `bun build`

- [ ] 2. Rewrite Hero section for food industry

  **What to do**:
  - Edit `src/components/sections/Hero.tsx` — rewrite copy and swap CTA behavior
  - **New badge text**: Change "Inteligencia Artificial para Operativa Real" → "Automatización para la Industria Alimentaria" (or similar food-specific badge)
  - **New h1**: Replace "Automatiza el trabajo manual que tu sistema de gestión no puede hacer" → food-industry-specific headline. Draft options (user will review):
    - "Dedícate a tu producto. Nosotros nos encargamos del papeleo."
    - "Tu negocio de alimentación, bajo control total."
    - "Menos papel. Más oficio."
  - **New subtitle**: Replace the generic subtitle with food-specific: "Automatizamos el APPCC, la trazabilidad y la gestión documental para que tú te centres en la calidad de tu producto."
  - **CTA swap** (CRITICAL):
    - Primary (MovingBorderButton): Change text to "Descubre cómo te ayudamos" → onClick scrolls to `#soluciones` (currently scrolls to #contacto)
    - Secondary (outline button): Change text to "Habla con nosotros" → onClick scrolls to `#contacto` (currently scrolls to #soluciones)
    - This is a REVERSAL of current behavior
  - **Bottom scroll arrow**: Keep pointing to `#soluciones` (still valid after restructure)
  - **Keep FloatingPaths background** — no changes to the animated SVG
  - **Keep all motion animations** — same fade-in sequence

  **Must NOT do**:
  - Do NOT modify FloatingPaths component or background-paths.tsx
  - Do NOT change animation timings or motion patterns
  - Do NOT modify MovingBorderButton component
  - Do NOT use forbidden brand words
  - Do NOT change the section ID ("hero") or className structure

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Copy replacement with CTA logic changes in a React component with animations
  - **Skills**: [`frontend-design`, `frontend-ui-ux`]
    - `frontend-design`: Tailwind v4 reference docs, Motion animation patterns
    - `frontend-ui-ux`: Design sensibility for hero copy placement and CTA hierarchy. Ensures the food-industry message lands with visual impact — typography weight, spacing, badge styling.
  - **Skills Evaluated but Omitted**:
    - `playwright`: Verification only, not creation

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 3)
  - **Blocks**: Task 4 (Assembly)
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `src/components/sections/Hero.tsx:1-121` — FULL FILE: current Hero component (modify in place)
  - `src/components/sections/Hero.tsx:9-14` — `handleScrollToSection` function (keep, swap targets)
  - `src/components/sections/Hero.tsx:70-85` — CTA buttons (swap scroll targets + text)
  - `src/components/sections/Hero.tsx:37-40` — Badge text to change
  - `src/components/sections/Hero.tsx:49-51` — h1 text to change
  - `src/components/sections/Hero.tsx:59-61` — Subtitle text to change

  **External References**:
  - Brand voice guidelines: `CLAUDE.md:122-143` — Copy DO/DON'T rules
  - Copy inspirations from Variant.com: "Dedícate a la carne, nosotros al papeleo", "Tu sala de despiece, bajo control", "La primera plataforma diseñada para personas, no para informáticos"

  **WHY Each Reference Matters**:
  - Hero.tsx full file: Agent must read the ENTIRE component to understand structure before making changes — animation sequence, CTA logic, scroll behavior
  - CTA buttons lines: The EXACT swap needed — primary goes to #soluciones (was #contacto), secondary goes to #contacto (was #soluciones)
  - Voice guidelines: Critical for writing food-industry copy that matches brand tone

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Hero displays food-industry messaging
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running at localhost:4321
    Steps:
      1. Navigate to localhost:4321
      2. Assert: badge text contains "Alimentaria" or "Industria Alimentaria"
      3. Assert: h1 does NOT contain "sistema de gestión" (old generic copy)
      4. Assert: h1 contains food-relevant terms (alimentación, producto, papeleo, or similar)
      5. Assert: subtitle mentions APPCC or trazabilidad or seguridad alimentaria
      6. Screenshot the hero section
    Expected Result: Hero shows food-industry-specific copy, no generic automation messaging
    Failure Indicators: Old copy still present, generic terms, forbidden brand words
    Evidence: .sisyphus/evidence/task-2-hero-copy.png

  Scenario: Primary CTA scrolls to services section
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to localhost:4321
      2. Click the primary CTA button (MovingBorderButton — the orange one)
      3. Wait 1 second for smooth scroll
      4. Assert: section#soluciones is now in viewport (scrolled into view)
      5. Assert: button text is NOT "Agendar Consultoría" (old text)
    Expected Result: Primary button scrolls to #soluciones, not #contacto
    Failure Indicators: Scrolls to contact form instead, old button text
    Evidence: .sisyphus/evidence/task-2-primary-cta-scroll.png

  Scenario: Secondary CTA scrolls to contact
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to localhost:4321
      2. Click the secondary CTA button (outline/ghost button)
      3. Wait 1 second for smooth scroll
      4. Assert: section#contacto is now in viewport
      5. Assert: button text is NOT "Ver Soluciones" (old text)
    Expected Result: Secondary button scrolls to #contacto
    Failure Indicators: Scrolls to services instead, old button text
    Evidence: .sisyphus/evidence/task-2-secondary-cta-scroll.png
  ```

  **Evidence to Capture:**
  - [ ] task-2-hero-copy.png
  - [ ] task-2-primary-cta-scroll.png
  - [ ] task-2-secondary-cta-scroll.png

  **Commit**: YES
  - Message: `feat(hero): rewrite for food industry messaging`
  - Files: `src/components/sections/Hero.tsx`
  - Pre-commit: `bun build`

- [ ] 3. Content adaptation pass (WhyCadly, SuccessStory, Contact, Footer)

  **What to do**:
  - Edit 4 existing components to pivot copy from generic to food-industry. Layout/structure stays, only text content changes.
  
  **WhyCadly.astro** — Full rewrite of the 4 differentiators:
  - Change section heading from "IA de verdad. Resultados en semanas." → "Por qué empresas alimentarias confían en nosotros" (or similar food-specific)
  - Change subtitle from generic "fundada por ingenieros" → "Nacimos resolviendo los problemas que tú vives cada día en tu negocio."
  - Rewrite all 4 differentiator items to be food-specific:
    1. "AI-Native desde el día uno" → "Conocemos tu sector" — "Nuestro cofundador tenía una sala de despiece. No somos consultores adivinando — conocemos el día a día de la industria alimentaria."
    2. "Producto sobre proyectos" → "Sin cambiar lo que ya funciona" — "Nos integramos con tu ERP, tu Excel, tu forma de trabajar. Añadimos, no sustituimos."
    3. "Enfoque en ROI" → "Resultados en semanas, no meses" — "Primera puesta en marcha en 2-4 semanas. Si no ves valor, lo dejamos."
    4. "Experiencia técnica real" → "Siempre preparado para la inspección" — "Auditoría sorpresa? 2 clics para tener todo listo. Trazabilidad completa, registros al día."
  - Icons may change to better match new content (use Phosphor icons only)

  **SuccessStory.astro** — Copy refinement:
  - Keep layout, keep Montes del Acebo branding, keep results list, keep demo link
  - Change description (line 60-62): Remove "Transformamos la gestión de seguridad alimentaria" → "Montes del Acebo digitalizó su gestión APPCC completa con nuestra plataforma. Registros, trazabilidad y controles — todo en un solo sistema."
  - Change blockquote (line 64-65): Remove placeholder → "Antes perdíamos horas buscando papeles para cada inspección. Ahora lo tenemos todo en 2 clics." (or similar authentic-sounding quote)
  - Keep results list (lines 6-11) — these are already food-specific and good

  **Contact.tsx** — Heading and placeholder updates only:
  - Find and update the section heading (search for "¿Listo para optimizar tu operativa?" or similar) → "¿Hablamos de tu negocio?"
  - Find and update the subtitle → "Cuéntanos qué te quita más tiempo en el día a día. Una llamada de 20 minutos para ver si podemos ayudarte."
  - Update the textarea placeholder: "¿Qué procesos te gustaría automatizar?" → "¿Qué es lo que más tiempo te quita? ¿Cómo lleváis el APPCC y la documentación?"
  - Do NOT modify form logic, validation, webhook URL, or trust badges

  **Footer.astro** — Tagline update:
  - Change line 22: "Automatización inteligente para empresas que quieren crecer." → "Automatización inteligente para la industria alimentaria."
  - Keep everything else (logo, email, CTA button, copyright)

  **Must NOT do**:
  - Do NOT change layouts, grid structures, or component architecture
  - Do NOT modify Contact form submission logic or validation
  - Do NOT change section IDs (#casos, #contacto)
  - Do NOT add new animations or visual elements
  - Do NOT use forbidden brand words
  - Do NOT touch the SuccessStory demo link URL or results list

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Multiple component edits requiring design/copy sensibility and understanding of Astro + React patterns
  - **Skills**: [`frontend-design`, `frontend-ui-ux`]
    - `frontend-design`: Tailwind v4 reference docs, Astro + React component patterns
    - `frontend-ui-ux`: Copy must feel designed, not just replaced. The differentiators in WhyCadly need to read as compelling value props, not generic bullets. The SuccessStory blockquote must feel authentic. Design eye ensures copy changes maintain visual rhythm.
  - **Skills Evaluated but Omitted**:
    - `writing`: Copy is part of component edits, not standalone prose

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2)
  - **Blocks**: Task 4 (Assembly)
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `src/components/sections/WhyCadly.astro:1-75` — FULL FILE: 4 differentiators with icons, grid layout
  - `src/components/sections/SuccessStory.astro:1-101` — FULL FILE: case study layout
  - `src/components/sections/SuccessStory.astro:59-66` — Description + blockquote to rewrite
  - `src/components/sections/Contact.tsx:1-50` — Top of Contact component (headings are further down, search for section heading text)
  - `src/components/sections/Footer.astro:21-23` — Tagline line to change

  **External References**:
  - Brand voice: `CLAUDE.md:122-143` — DO/DON'T rules for copy
  - Value proposition: Key messages from Zettelkasten voice.md — "Nuestro cofundador tenía una sala de despiece", "Inspector asks → 2 clicks", "Sin cambiar de ERP"
  - Forbidden phrases: transformación digital, sinergia, disruptivo, escalable, partner estratégico, solución end-to-end

  **WHY Each Reference Matters**:
  - WhyCadly full file: Must understand the frontmatter data structure to rewrite differentiators correctly
  - SuccessStory lines 59-66: These are the EXACT lines with "Transformamos" (forbidden word) and the placeholder blockquote
  - Contact.tsx: Heading is somewhere in the render body — agent must search for the section heading text to find and replace it
  - Footer tagline: Single line change, but must read context to avoid breaking surrounding JSX

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: WhyCadly shows food-specific differentiators
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running at localhost:4321
    Steps:
      1. Navigate to localhost:4321
      2. Scroll to the WhyCadly section (bg-surface section after HowWeWork)
      3. Assert: section heading does NOT contain "IA de verdad" (old text)
      4. Assert: section contains text about "industria alimentaria" or "sector" or "alimentarias"
      5. Assert: at least one differentiator mentions "cofundador" or "sala de despiece" or "sector"
      6. Assert: text does NOT contain "transformación digital" or "sinergia" or "disruptivo"
      7. Screenshot
    Expected Result: 4 food-industry-specific differentiators with sector knowledge messaging
    Failure Indicators: Old generic copy, forbidden brand words, missing differentiators
    Evidence: .sisyphus/evidence/task-3-whycadly.png

  Scenario: SuccessStory copy updated, no "Transformamos"
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Scroll to section#casos
      2. Assert: text does NOT contain "Transformamos" (old copy)
      3. Assert: description mentions "digitalizó" or "plataforma" or "sistema"
      4. Assert: blockquote does NOT contain "revolucionado" (old placeholder)
      5. Assert: "Montes del Acebo" text still present (company name kept)
      6. Assert: demo link still present with href containing "appcc-demo"
    Expected Result: Improved copy without forbidden words, authentic-feeling quote
    Failure Indicators: "Transformamos" still present, blockquote unchanged
    Evidence: .sisyphus/evidence/task-3-successstory.png

  Scenario: Footer tagline mentions food industry
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Scroll to footer
      2. Assert: footer text contains "alimentaria" (new tagline)
      3. Assert: footer does NOT contain "empresas que quieren crecer" (old tagline)
    Expected Result: Footer tagline pivoted to food industry
    Failure Indicators: Old tagline still present
    Evidence: .sisyphus/evidence/task-3-footer.png

  Scenario: Contact heading is food-specific
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Scroll to section#contacto
      2. Assert: section heading does NOT contain "optimizar tu operativa" (old)
      3. Assert: heading contains "negocio" or "hablamos" (new tone)
    Expected Result: Contact section heading pivoted to informal food-industry tone
    Failure Indicators: Old heading, generic placeholder
    Evidence: .sisyphus/evidence/task-3-contact.png
  ```

  **Evidence to Capture:**
  - [ ] task-3-whycadly.png
  - [ ] task-3-successstory.png
  - [ ] task-3-footer.png
  - [ ] task-3-contact.png

  **Commit**: YES
  - Message: `content(homepage): pivot copy to food industry`
  - Files: `src/components/sections/WhyCadly.astro`, `src/components/sections/SuccessStory.astro`, `src/components/sections/Contact.tsx`, `src/components/sections/Footer.astro`
  - Pre-commit: `bun build`

- [ ] 4. Structural assembly in index.astro

  **What to do**:
  - Edit `src/pages/index.astro` to wire up the new section order
  - **Remove imports**: `Services` (line 6), `ValueProps` (line 8)
  - **Add import**: `import { FoodServices } from "@/components/sections/FoodServices";`
  - **New section order** in the `<main>` block:
    ```
    <Navbar client:load />
    <Hero client:load />
    <FoodServices client:visible />
    <SuccessStory />
    <HowWeWork client:visible />
    <WhyCadly />
    <Contact client:load />
    <Footer />
    ```
  - Note: `FoodServices` uses `client:visible` (same as old Services — below the fold, hydrate on scroll)
  - Note: ValueProps line removed entirely
  - Note: Services import replaced by FoodServices import

  **Must NOT do**:
  - Do NOT change Layout import or SkipLink
  - Do NOT change hydration directives on unchanged sections
  - Do NOT reorder sections beyond the specified new order
  - Do NOT modify the `<main>` element's className or attributes

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single file edit, straightforward import swap and line reordering
  - **Skills**: []
  - **Skills Evaluated but Omitted**:
    - `frontend-design`: Overkill for import changes

  **Parallelization**:
  - **Can Run In Parallel**: YES (with T5, once Wave 1 complete)
  - **Parallel Group**: Wave 2 (with Task 5)
  - **Blocks**: Task 6 (Cleanup)
  - **Blocked By**: Tasks 1, 2, 3 (needs FoodServices component to exist)

  **References**:

  **Pattern References**:
  - `src/pages/index.astro:1-32` — FULL FILE: current import list + section order (32 lines total)

  **WHY Each Reference Matters**:
  - index.astro full file: This is a tiny file (32 lines). Agent must read it entirely, understand the import/section pattern, make the swap.

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Homepage sections render in correct order
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running at localhost:4321
    Steps:
      1. Navigate to localhost:4321
      2. Get all section elements in DOM order
      3. Assert order: hero → soluciones → casos → proceso → (whycadly section) → contacto → footer
      4. Assert: NO element with data or class matching ValueProps/beneficios exists
      5. Assert: FoodServices section (id="soluciones") exists and contains the 2 service cards
      6. Full page screenshot
    Expected Result: Sections in correct post-pivot order, ValueProps absent
    Failure Indicators: Wrong order, ValueProps still present, FoodServices missing
    Evidence: .sisyphus/evidence/task-4-section-order.png

  Scenario: No stale imports or references
    Tool: Bash
    Preconditions: Wave 1 tasks committed
    Steps:
      1. Run: grep -r "ValueProps" src/pages/
      2. Assert: no matches (import removed)
      3. Run: grep -r "from.*Services" src/pages/index.astro
      4. Assert: only FoodServices import, no old Services import
    Expected Result: Clean imports, no stale references
    Failure Indicators: Old imports still present
    Evidence: .sisyphus/evidence/task-4-clean-imports.txt
  ```

  **Evidence to Capture:**
  - [ ] task-4-section-order.png
  - [ ] task-4-clean-imports.txt

  **Commit**: YES
  - Message: `refactor(homepage): restructure section order for food pivot`
  - Files: `src/pages/index.astro`
  - Pre-commit: `bun build`

- [ ] 5. SEO and metadata update

  **What to do**:
  - Edit `src/components/SEO.astro`:
    - Change default title (line 13): "Cadly Labs - Automatización de Procesos con IA" → "Cadly Labs - Automatización para la Industria Alimentaria"
    - Change default description (line 14): Remove "logística, farmacia e industria" → "APPCC digital, trazabilidad y gestión documental para empresas alimentarias en España."
    - Change keywords (line 59): Remove "logística, industria 4.0" → Add "APPCC, trazabilidad, seguridad alimentaria, industria alimentaria, gestión documental, automatización alimentaria"
  - Edit `src/components/StructuredData.astro`:
    - Change organization description (line 9): Remove "logística, farmacia e industria" → "Automatización de APPCC, trazabilidad y gestión documental para la industria alimentaria en España."
    - Change website description (line 23): Update to match new food-industry messaging

  **Must NOT do**:
  - Do NOT do keyword research or SEO optimization (issue #11)
  - Do NOT change the schema.org structure or types
  - Do NOT modify the canonical URL logic
  - Do NOT add new meta properties

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple text replacements in 2 small files
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with T4)
  - **Parallel Group**: Wave 2 (with Task 4)
  - **Blocks**: Task 6 (Cleanup)
  - **Blocked By**: None (technically independent, but logically after content pivot)

  **References**:

  **Pattern References**:
  - `src/components/SEO.astro:1-61` — FULL FILE: meta tag defaults
  - `src/components/StructuredData.astro:1-50` — FULL FILE: JSON-LD schemas
  - `src/components/SEO.astro:13-14` — Title and description defaults to change
  - `src/components/SEO.astro:57-60` — Keywords meta tag to update
  - `src/components/StructuredData.astro:8-9` — Organization description
  - `src/components/StructuredData.astro:22-23` — Website description

  **WHY Each Reference Matters**:
  - Both are small files (<61 lines). Agent must read entirely and do targeted string replacements for the food-industry pivot.

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: SEO meta tags reflect food industry
    Tool: Bash
    Preconditions: Build completed (bun build)
    Steps:
      1. Run: bun build
      2. Run: grep "logística" dist/index.html
      3. Assert: NO matches (old generic terms removed)
      4. Run: grep "farmacia" dist/index.html
      5. Assert: NO matches
      6. Run: grep "industria alimentaria\|APPCC\|seguridad alimentaria" dist/index.html
      7. Assert: at least 1 match per term
      8. Run: grep "<title>" dist/index.html
      9. Assert: title contains "Alimentaria" or "Industria Alimentaria"
    Expected Result: All meta tags updated for food industry, no legacy generic terms
    Failure Indicators: "logística" or "farmacia" still in built HTML
    Evidence: .sisyphus/evidence/task-5-seo-check.txt

  Scenario: Structured data updated
    Tool: Bash
    Preconditions: Build completed
    Steps:
      1. Run: grep "application/ld+json" dist/index.html -A 5
      2. Assert: Organization description contains "alimentaria" or "APPCC"
      3. Assert: No mention of "logística, farmacia"
    Expected Result: JSON-LD schemas reflect food industry focus
    Failure Indicators: Old descriptions in structured data
    Evidence: .sisyphus/evidence/task-5-structured-data.txt
  ```

  **Evidence to Capture:**
  - [ ] task-5-seo-check.txt
  - [ ] task-5-structured-data.txt

  **Commit**: YES
  - Message: `content(seo): update metadata for food industry`
  - Files: `src/components/SEO.astro`, `src/components/StructuredData.astro`
  - Pre-commit: `bun build`

- [ ] 6. Dead code cleanup + build verification

  **What to do**:
  - **Delete** `src/components/sections/ValueProps.tsx` — no longer imported after T4
  - **Delete** `src/components/sections/HowWeWork.astro` — dead file (index.astro imports HowWeWork from .tsx, the .astro version is unused)
  - **Verify no stale imports**: grep entire `src/` for "ValueProps" — should return 0 results
  - **Verify no stale imports**: grep entire `src/` for "HowWeWork.astro" — should return 0 results
  - **Run full build**: `bun build` — must exit 0
  - **Check for orphaned Services.tsx**: After T4 removed its import from index.astro, check if anything else imports Services.tsx. If nothing does, delete it too. If something else imports it, leave it.
  - **Create evidence directory**: `mkdir -p .sisyphus/evidence`

  **Must NOT do**:
  - Do NOT delete files that are still imported somewhere
  - Do NOT delete HowWeWork.tsx (only the .astro version is dead)
  - Do NOT modify any remaining files beyond removing stale imports

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: File deletion, grep verification, build check — all simple operations
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO (depends on all previous tasks)
  - **Parallel Group**: Wave 3 (sequential)
  - **Blocks**: F1-F4 (final verification)
  - **Blocked By**: Tasks 4, 5

  **References**:

  **Pattern References**:
  - `src/pages/index.astro` — After T4 edits, verify no stale imports remain
  - `src/components/sections/ValueProps.tsx` — File to delete
  - `src/components/sections/HowWeWork.astro` — Dead file to delete
  - `src/components/sections/Services.tsx` — Check if orphaned after T4

  **WHY Each Reference Matters**:
  - Must verify import graph before deleting — don't break anything that still references these files

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Dead code removed, build passes
    Tool: Bash
    Preconditions: Tasks 1-5 committed
    Steps:
      1. Run: test -f src/components/sections/ValueProps.tsx && echo "EXISTS" || echo "DELETED"
      2. Assert: output is "DELETED"
      3. Run: test -f src/components/sections/HowWeWork.astro && echo "EXISTS" || echo "DELETED"
      4. Assert: output is "DELETED"
      5. Run: grep -r "ValueProps" src/
      6. Assert: 0 matches
      7. Run: bun build
      8. Assert: exit code 0
    Expected Result: Dead files removed, no stale references, build passes
    Failure Indicators: Files still exist, stale imports cause build failure
    Evidence: .sisyphus/evidence/task-6-cleanup.txt

  Scenario: Homepage loads correctly after cleanup
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running after cleanup
    Steps:
      1. Navigate to localhost:4321
      2. Assert: page loads without console errors
      3. Assert: all sections render (hero, soluciones, casos, proceso, whycadly, contacto, footer)
      4. Assert: no JavaScript errors in console
      5. Full page screenshot
    Expected Result: Clean homepage load, all sections present, no errors
    Failure Indicators: Missing sections, JS errors, broken layout
    Evidence: .sisyphus/evidence/task-6-final-load.png
  ```

  **Evidence to Capture:**
  - [ ] task-6-cleanup.txt
  - [ ] task-6-final-load.png

  **Commit**: YES
  - Message: `chore: remove dead code (ValueProps, HowWeWork.astro)`
  - Files: deleted files
  - Pre-commit: `bun build`

---

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Rejection → fix → re-run.

- [ ] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, check DOM via Playwright). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [ ] F2. **Code Quality Review** — `unspecified-high`
  Run `bun build`. Review all changed files for: `as any`/`@ts-ignore`, empty catches, console.log in prod, commented-out code, unused imports. Check AI slop: excessive comments, over-abstraction, generic names, forbidden brand words in copy. Verify TypeScript strict mode compliance.
  Output: `Build [PASS/FAIL] | Files [N clean/N issues] | Brand Voice [PASS/FAIL] | VERDICT`

- [ ] F3. **Real Manual QA** — `unspecified-high` (+ `playwright` skill)
  Start dev server (`bun dev`). Execute EVERY QA scenario from EVERY task — follow exact steps, capture evidence. Test cross-task integration (hero CTA scrolls to correct new service section, nav links work). Test at mobile (375px) and desktop (1280px). Save to `.sisyphus/evidence/final-qa/`.
  Output: `Scenarios [N/N pass] | Integration [N/N] | Mobile [N/N] | VERDICT`

- [ ] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", read actual diff (git diff). Verify 1:1 — everything in spec was built, nothing beyond spec was built. Check "Must NOT do" compliance. Detect cross-task contamination. Flag unaccounted changes. Verify no /appcc or /documentos routes created, no new dependencies added, no design tokens modified.
  Output: `Tasks [N/N compliant] | Contamination [CLEAN/N issues] | VERDICT`

---

## Commit Strategy

| After Task | Message | Files | Verification |
|------------|---------|-------|--------------|
| T1 | `feat(services): create food-focused service cards section` | FoodServices.tsx | bun build |
| T2 | `feat(hero): rewrite for food industry messaging` | Hero.tsx | bun build |
| T3 | `content(homepage): pivot copy to food industry` | WhyCadly.astro, SuccessStory.astro, Contact.tsx, Footer.astro | bun build |
| T4 | `refactor(homepage): restructure section order for food pivot` | index.astro | bun build |
| T5 | `content(seo): update metadata for food industry` | SEO.astro, StructuredData.astro | bun build |
| T6 | `chore: remove dead code (ValueProps, HowWeWork.astro)` | deleted files | bun build |

---

## Success Criteria

### Verification Commands
```bash
bun build  # Expected: exits 0, no errors
```

### Final Checklist
- [ ] All "Must Have" present (food hero, 2 service cards, subtle row, Spanish copy)
- [ ] All "Must NOT Have" absent (no forbidden words, no new deps, no /appcc route)
- [ ] `bun build` passes
- [ ] Homepage sections in correct order
- [ ] Dead code removed (ValueProps.tsx, HowWeWork.astro)
- [ ] SEO meta reflects food industry, not "logística, farmacia"
