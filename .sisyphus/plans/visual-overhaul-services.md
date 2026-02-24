# Visual Overhaul + Services Restructure

## TL;DR

> **Quick Summary**: Transform the CadlyLabs single-page website into a multi-page consultancy site with a new animated hero, asymmetric bento grid showing 6 services, individual solution pages, /nosotros/ page, and curated visuals throughout — all following the taste skill's anti-slop design philosophy.
> 
> **Deliverables**:
> - Redesigned hero with white-themed radial breathing gradient + asymmetric layout
> - Asymmetric bento grid showcasing all 6 services on homepage
> - 6 individual service pages at /soluciones/{slug}
> - /soluciones/ index page
> - /nosotros/ page (team + founding story)
> - Success story section redesign
> - WhatsApp floating CTA button
> - Calendly booking integration (replaces contact form CTA)
> - Mobile optimization pass across all pages
> - SVG icon/pattern integration points + mood image placeholders
> 
> **Estimated Effort**: XL
> **Parallel Execution**: YES — 5 waves
> **Critical Path**: Task 1 → Task 3 → Task 8 → Task 9 → Tasks 14-19 → Final

---

## Context

### Original Request
User wants to overhaul the CadlyLabs website visuals and expand the services section. The company is pivoting from a product to an AI consultancy for the food industry. Current site has 2 services; needs 6. Current hero is centered with SVG paths; needs asymmetric layout with animated breathing gradient. Wants trendy design (bento grid, serif+sans mixing, animated backgrounds) aligned with brand aesthetics. Includes adding WhatsApp CTA, Calendly booking, /nosotros/ page, and mobile optimization.

### Interview Summary
**Key Discussions**:
- Hero: White-themed radial gradient breathing with warm orange/amber edges. Asymmetric layout (taste skill enforces anti-center at DESIGN_VARIANCE=6)
- Services: Asymmetric bento grid, all 6 visible on homepage with different card sizes. NO 3-column equal cards.
- Service pages: All 6 get full /soluciones/{slug} pages following template: Hero → How it works → Visual → Results → CTA
- Visual pipeline: Mixed — Gemini SVGs for icons/patterns, user supplies mood images via Midjourney/NanoBanana Pro
- Typography: Keep Libre Baskerville (serif) + Manrope (sans), make the mixing more prominent throughout
- Scope includes: /nosotros/, success story redesign, WhatsApp CTA, Calendly, mobile pass

**Research Findings**:
- KokonutUI: Full source obtained for flow-field, beams, shape-hero, background-paths. Radial breathing = Motion animate on gradient divs (not a KokonutUI published component)
- Existing codebase: Already has `background-paths.tsx`, `bento-grid.tsx`, `FadeInView.tsx`, Motion library, Phosphor Icons
- Bento 2026 trend: Asymmetric, animated backgrounds per card, hover-reveal CTAs. Magic UI and Aceternity patterns researched.
- Gemini SVG quality: Good for simple icons (Easy-Medium benchmark), not for complex illustrations
- Brand voice (zettelkasten): Direct, practical, Spanish. "Somos tu equipo de IA para la industria alimentaria."

### Metis Review
**Identified Gaps** (addressed):
- Content collections vs typed array: RESOLVED — Use typed TS array for 6 services (simpler, no content collection infrastructure needed)
- Astro 5 API changes: RESOLVED — `<ClientRouter />` (not ViewTransitions), `transition:persist` on React islands, `viewport={{ once: true }}` for Motion animations
- View Transitions coordination: RESOLVED — Add ClientRouter to Layout.astro, persist Navbar, coordinate AnimatePresence with `astro:page-load`

---

## Work Objectives

### Core Objective
Transform CadlyLabs from a single-page product site into a multi-page AI consultancy site with premium visuals, 6 service offerings, and a design quality bar enforced by the taste skill.

### Concrete Deliverables
- `src/components/backgrounds/RadialBreathing.tsx` — New hero background
- `src/components/sections/Hero.tsx` — Redesigned asymmetric hero
- `src/components/sections/ServicesBento.tsx` — Asymmetric bento grid, 6 services
- `src/components/sections/SuccessStory.tsx` — Redesigned case study (React island for animations)
- `src/components/ui/WhatsAppCTA.tsx` — Floating WhatsApp button
- `src/data/services.ts` — Typed service data model
- `src/pages/soluciones/index.astro` — Solutions index page
- `src/pages/soluciones/[slug].astro` — Dynamic service page template
- `src/pages/nosotros.astro` — About page
- `src/layouts/Layout.astro` — Updated with ClientRouter + transition:persist
- Updated Navbar, Contact, Footer for new pages and Calendly integration
- Mobile-responsive across all pages

### Definition of Done
- [ ] `bun build` completes with zero errors
- [ ] All 6 service pages render at /soluciones/{slug}
- [ ] /nosotros/ page renders correctly
- [ ] Hero shows breathing gradient on white background with asymmetric text layout
- [ ] Bento grid shows 6 services with micro-animations
- [ ] WhatsApp CTA visible on all pages
- [ ] Calendly link replaces contact form CTA
- [ ] All pages mobile-responsive (375px, 768px, 1024px, 1440px viewports)
- [ ] No hyphens in any text content across the entire site
- [ ] No emojis anywhere

### Must Have
- Asymmetric hero layout (taste skill: ANTI-CENTER BIAS)
- Spring physics for all Motion animations (type: "spring", stiffness: 100, damping: 20)
- `min-h-[100dvh]` for full-height sections (never h-screen)
- GPU-only animations (transform + opacity only)
- Staggered orchestration for bento grid card reveals
- Isolated client components for perpetual animations
- Phosphor Icons (already installed) — NO emoji substitutes
- Image placeholders with `<img>` slots for user-supplied mood images (AVIF primary + WebP fallback)
- NO hyphens in ANY text content, titles, meta tags, headings — nowhere on the site
- `transition:persist` on Navbar when using ClientRouter
- All content in Spanish following brand voice guidelines

### Must NOT Have (Guardrails)
- NO centered hero text (ANTI-CENTER BIAS at DESIGN_VARIANCE=6)
- NO 3-column equal card layouts (taste skill Rule: banned)
- NO purple/blue AI aesthetic (The Lila Ban)
- NO Inter font
- NO emojis in code, markup, or text
- NO hyphens as separators in text content
- NO h-screen (use min-h-[100dvh])
- NO linear easing on animations (spring physics only)
- NO window.addEventListener('scroll') (use Motion hooks)
- NO corporate buzzwords: "sinergia", "transformación digital", "game-changer", "escalable"
- NO English content (entire site is Spanish)
- NO content collection infrastructure (use typed TS array)
- NO Unsplash links (use proper image placeholders or SVG)

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO
- **Automated tests**: None
- **Framework**: N/A
- **QA approach**: Agent-executed via Playwright screenshots + viewport checks + build verification

### QA Policy
Every task MUST include agent-executed QA scenarios.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

- **Frontend/UI**: Use Playwright (playwright skill) — Navigate, interact, assert DOM, screenshot
- **Build**: `bun build` must complete with zero errors after each wave
- **Visual**: Screenshot at 375px, 768px, 1024px, 1440px viewports
- **Content**: Grep for hyphens in text content, verify Spanish, verify no emojis

### Mandatory Skills for Visual Tasks
Every task categorized as `visual-engineering` MUST load:
- `taste` — Design quality enforcement (anti-slop, spring physics, Bento 2.0, etc.)
- `frontend-design` — Production-grade frontend interfaces

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Foundation — all parallel, 7 tasks):
├── Task 1: Design tokens + typography hierarchy update [quick]
├── Task 2: Service data model (typed TS array, 6 services) [quick]
├── Task 3: RadialBreathing background component [visual-engineering]
├── Task 4: WhatsApp floating CTA component [quick]
├── Task 5: Layout.astro updates (ClientRouter, transition:persist, font loading) [quick]
├── Task 6: Solution page layout template (Astro) [quick]
└── Task 7: Navbar updates (new routes, mobile menu) [visual-engineering]

Wave 2 (Homepage sections — 6 tasks, parallel after Wave 1):
├── Task 8: Hero redesign (asymmetric + breathing gradient) [visual-engineering]
├── Task 9: Services bento grid (6 asymmetric cards) [visual-engineering]
├── Task 10: Success story redesign [visual-engineering]
├── Task 11: Contact section (Calendly integration) [quick]
├── Task 12: Footer updates (new nav links) [quick]
└── Task 13: /nosotros/ page [visual-engineering]

Wave 3 (Service pages — 6 tasks, MAX PARALLEL after Wave 2):
├── Task 14: /soluciones/documentos [visual-engineering]
├── Task 15: /soluciones/appcc [visual-engineering]
├── Task 16: /soluciones/whatsapp [visual-engineering]
├── Task 17: /soluciones/dashboard [visual-engineering]
├── Task 18: /soluciones/proveedores [visual-engineering]
└── Task 19: /soluciones/automatizacion [visual-engineering]

Wave 4 (Index + Visual Polish + Mobile — 5 tasks, parallel):
├── Task 20: /soluciones/ index page [visual-engineering]
├── Task 21: SVG icons/patterns + mood image integration [visual-engineering]
├── Task 22: Mobile optimization pass [visual-engineering]
├── Task 23: SEO + meta tags for all new pages [quick]
└── Task 24: HowWeWork + WhyCadly section refresh [visual-engineering]

Wave FINAL (Verification — 4 parallel):
├── Task F1: Plan compliance audit [oracle]
├── Task F2: Code quality review [unspecified-high]
├── Task F3: Real manual QA [unspecified-high + playwright]
└── Task F4: Scope fidelity check [deep]

Critical Path: Task 1 → Task 3 → Task 8 → Task 9 → Tasks 14-19 → Task 20 → F1-F4
Parallel Speedup: ~65% faster than sequential
Max Concurrent: 7 (Waves 1, 3)
```

### Dependency Matrix

| Task | Depends On | Blocks | Wave |
|------|-----------|--------|------|
| 1 | — | 3, 7, 8, 9, 10, 13, 14-19, 20, 24 | 1 |
| 2 | — | 6, 9, 14-19, 20 | 1 |
| 3 | 1 | 8 | 1 |
| 4 | — | 5 | 1 |
| 5 | 4 | 8, 13, 14-19 | 1 |
| 6 | 2 | 14-19 | 1 |
| 7 | 1 | 8, 13, 14-19 | 1 |
| 8 | 1, 3, 5, 7 | — | 2 |
| 9 | 1, 2 | — | 2 |
| 10 | 1 | — | 2 |
| 11 | — | — | 2 |
| 12 | 7 | — | 2 |
| 13 | 1, 5, 7 | — | 2 |
| 14-19 | 1, 2, 5, 6, 7 | 20 | 3 |
| 20 | 2, 14-19 | — | 4 |
| 21 | 1 | — | 4 |
| 22 | 8, 9, 13, 14-19 | — | 4 |
| 23 | 5, 14-19 | — | 4 |
| 24 | 1 | — | 4 |
| F1-F4 | ALL | — | FINAL |

### Agent Dispatch Summary

- **Wave 1**: **7 tasks** — T1 → `quick`, T2 → `quick`, T3 → `visual-engineering`, T4 → `quick`, T5 → `quick`, T6 → `quick`, T7 → `visual-engineering`
- **Wave 2**: **6 tasks** — T8 → `visual-engineering`, T9 → `visual-engineering`, T10 → `visual-engineering`, T11 → `quick`, T12 → `quick`, T13 → `visual-engineering`
- **Wave 3**: **6 tasks** — T14-T19 → ALL `visual-engineering`
- **Wave 4**: **5 tasks** — T20 → `visual-engineering`, T21 → `visual-engineering`, T22 → `visual-engineering`, T23 → `quick`, T24 → `visual-engineering`
- **Wave FINAL**: **4 tasks** — F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high`, F4 → `deep`

---

## TODOs

> Implementation + Test = ONE Task. Never separate.
> EVERY task MUST have: Recommended Agent Profile + Parallelization info + QA Scenarios.
> **A task WITHOUT QA Scenarios is INCOMPLETE. No exceptions.**
> **ALL visual-engineering tasks MUST load skills: `taste`, `frontend-design`**

- [ ] 1. Design Tokens + Typography Hierarchy Update

  **What to do**:
  - Update `src/styles/global.css` to make serif+sans typography mixing more prominent
  - Ensure Libre Baskerville is used for ALL section headings (h1-h3) with tight tracking (`tracking-tighter`)
  - Manrope for body text, labels, buttons, navigation
  - Add CSS custom properties for typography scale if missing: `--text-display`, `--text-heading`, `--text-subheading`
  - Verify brand color tokens are complete: brand-500 through brand-700, surface, charcoal, gray scale
  - Add a `.text-serif` utility class mapping to Libre Baskerville for inline serif accents
  - Ensure no hyphens exist in any CSS content properties or text

  **Must NOT do**:
  - Do NOT change font families (keep Libre Baskerville + Manrope)
  - Do NOT add new font imports
  - Do NOT modify component files (only global.css and potentially tailwind theme)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`taste`, `frontend-design`]
    - `taste`: Typography rules (Rule 1), anti-slop font constraints, heading defaults
    - `frontend-design`: Production typography patterns

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 2-7)
  - **Blocks**: Tasks 3, 7, 8, 9, 10, 13, 14-19, 20, 24
  - **Blocked By**: None

  **References**:
  - `src/styles/global.css` — Current theme config with `@theme inline`, brand color CSS vars, font-heading/font-body definitions
  - `src/layouts/Layout.astro` — Font loading (Google Fonts links for Libre Baskerville + Manrope)
  - `.opencode/skills/taste/SKILL.md:39-43` — Rule 1: Deterministic Typography (heading defaults, tracking)
  - `CLAUDE.md` — Project conventions and constraints

  **Acceptance Criteria**:
  - [ ] `global.css` has clear typography scale with serif headings + sans body
  - [ ] `.text-serif` utility available
  - [ ] `bun build` succeeds

  **QA Scenarios**:
  ```
  Scenario: Typography tokens applied correctly
    Tool: Bash
    Steps:
      1. Run `bun build` — expect zero errors
      2. Grep `src/styles/global.css` for `font-heading` — expect Libre Baskerville reference
      3. Grep `src/styles/global.css` for `font-body` — expect Manrope reference
      4. Grep all `.astro` and `.tsx` files for hyphen characters in visible text strings — expect zero matches in user-facing content
    Expected Result: Build passes, typography tokens present, no hyphens in text
    Evidence: .sisyphus/evidence/task-1-typography-tokens.txt
  ```

  **Commit**: YES (groups with Wave 1)
  - Message: `feat(tokens): typography hierarchy and design token updates`
  - Files: `src/styles/global.css`
  - Pre-commit: `bun build`

---

- [ ] 2. Service Data Model (Typed TS Array)

  **What to do**:
  - Create `src/data/services.ts` with a typed `SERVICES` array containing all 6 services
  - Each service entry must include: `slug`, `title`, `tagline` (one-liner outcome), `description` (2-3 sentences), `icon` (Phosphor icon name), `features` (3-4 bullet points), `cta` (CTA text), `href` (link to /soluciones/{slug}), `heroColor` (accent color for the service page), `order` (display order)
  - Slugs (NO hyphens): `documentos`, `appcc`, `whatsapp`, `dashboard`, `proveedores`, `automatizacion`
  - Export a `ServiceData` type and the `SERVICES` const array
  - Use `as const satisfies readonly ServiceData[]` for type safety
  - ALL text content in Spanish following brand voice (direct, practical, benefit-focused)
  - NO hyphens in any title, tagline, or description text

  **Service content** (from zettelkasten strategy/solutions-catalog.md):
  1. **documentos** — "Agente de Documentos" — Albaranes y facturas que se procesan solos. AI extraction → auto-entry into ERP.
  2. **appcc** — "APPCC y Trazabilidad Digital" — El inspector pregunta, 2 clics y listo. Full traceability chain.
  3. **whatsapp** — "WhatsApp y ERP Conectados" — Pedidos por WhatsApp que entran solos al sistema.
  4. **dashboard** — "Dashboard de Operaciones" — Stock, márgenes y caducidades en tiempo real.
  5. **proveedores** — "Inteligencia de Proveedores" — Comparativa de precios, certificados, alertas de renovación.
  6. **automatizacion** — "Orquestación de Procesos" — Flujos de trabajo complejos automatizados paso a paso.

  **Must NOT do**:
  - Do NOT create content collection infrastructure (no content.config.ts, no loaders)
  - Do NOT use hyphens in slugs or text content
  - Do NOT use English

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`taste`]
    - `taste`: Anti-hyphen policy, anti-emoji, content quality rules (no filler words, no startup slop)

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 3-7)
  - **Blocks**: Tasks 6, 9, 14-19, 20
  - **Blocked By**: None

  **References**:
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/strategy/solutions-catalog.md` — Internal reference of all buildable solutions with complexity/positioning
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/brand/voice.md` — Tone, language guidelines, key messages, forbidden phrases
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/strategy/website-structure.md` — URL strategy, homepage sections
  - `src/lib/utils.ts` — cn() utility pattern to follow
  - `.opencode/skills/taste/SKILL.md:27` — ANTI-HYPHEN POLICY
  - `.opencode/skills/taste/SKILL.md:117-122` — Content anti-patterns (no generic names, no filler words, no startup slop)

  **Acceptance Criteria**:
  - [ ] `src/data/services.ts` exists with `ServiceData` type + `SERVICES` array
  - [ ] 6 services with correct slugs (no hyphens)
  - [ ] All text in Spanish, brand voice compliant
  - [ ] TypeScript compiles with zero errors

  **QA Scenarios**:
  ```
  Scenario: Service data model is type-safe and complete
    Tool: Bash
    Steps:
      1. Run `bun build` — expect zero errors
      2. Check `src/data/services.ts` exists
      3. Grep for hyphen characters in slug values — expect zero
      4. Grep for English words ("the", "and", "with") in title/description — expect zero
      5. Count service entries — expect exactly 6
    Expected Result: Type-safe, 6 services, Spanish, no hyphens
    Evidence: .sisyphus/evidence/task-2-service-data.txt
  ```

  **Commit**: YES (groups with Wave 1)
  - Message: `feat(data): typed service data model with 6 solutions`
  - Files: `src/data/services.ts`
  - Pre-commit: `bun build`

---

- [ ] 3. RadialBreathing Background Component

  **What to do**:
  - Create `src/components/backgrounds/RadialBreathing.tsx` — a React component using Motion
  - WHITE themed: white/light center that breathes outward with warm orange (#FF8532), amber (#FFAB76), coral gradient edges
  - Implementation: Two `motion.div` layers with `animate={{ scale: [...], opacity: [...] }}` on `radial-gradient` styles
  - Layer 1: Primary breathing — scale pulses [1, 1.15, 1] over 6s ease-in-out infinite
  - Layer 2: Secondary offset — scale pulses [1.1, 1, 1.1] over 8s with 1s delay for depth
  - Gradients use brand colors: transparent center → brand-500/15 at 35% → brand-400/25 at 55% → brand-300/30 at 72% → transparent at 100%
  - Component accepts `className` and `children` props
  - Must use `'use client'` directive (Astro React island)
  - Spring physics or ease-in-out for the breathing (ease-in-out is acceptable here since it's ambient, not interactive)
  - Top and bottom fade overlays (white → transparent) for clean section blending
  - Performance: use `will-change: transform` sparingly, GPU-composited transforms only

  **Must NOT do**:
  - Do NOT use dark background (this is white-themed)
  - Do NOT use purple/blue colors (The Lila Ban)
  - Do NOT use Canvas API (keep it simple with CSS gradients + Motion)
  - Do NOT use `h-screen` (use `min-h-[100dvh]` if full-height needed)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`taste`, `frontend-design`]
    - `taste`: Performance guardrails (Section 5), GPU-only animations, motion intensity level 5
    - `frontend-design`: Production-grade animated component patterns

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1-2, 4-7)
  - **Blocks**: Task 8 (Hero depends on this background)
  - **Blocked By**: Task 1 (needs design tokens for brand colors)

  **References**:
  - `src/components/kokonutui/background-paths.tsx` — Existing hero background pattern (will be replaced). Study its structure: `'use client'`, `motion` imports, `useMemo`, `memo` optimization patterns
  - `src/styles/global.css` — Brand color CSS vars (brand-500: #ff8532, brand-400, brand-300)
  - `.opencode/skills/taste/SKILL.md:75-78` — Performance guardrails (GPU-only, no layout animations, z-index restraint)
  - `.opencode/skills/taste/SKILL.md:88-91` — MOTION_INTENSITY level 4-7: use transitions with cubic-bezier, focus on transform+opacity
  - KokonutUI research (from planning session): Radial breathing pattern uses Motion `animate` on radial-gradient divs with scale+opacity keyframes. Two layers for depth. NOT a KokonutUI published component — recreated from first principles.

  **Acceptance Criteria**:
  - [ ] `src/components/backgrounds/RadialBreathing.tsx` renders a white-centered breathing gradient
  - [ ] Gradient uses brand orange/amber/coral colors
  - [ ] Animation loops smoothly (no jank)
  - [ ] Component accepts className + children
  - [ ] `bun build` succeeds

  **QA Scenarios**:
  ```
  Scenario: Breathing gradient renders and animates
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running at localhost:4321
    Steps:
      1. Create a temporary test page that renders <RadialBreathing> with a child <h1>Test</h1>
      2. Navigate to the test page
      3. Screenshot at t=0s — expect white center with soft orange edges
      4. Wait 3s (half the 6s animation cycle)
      5. Screenshot at t=3s — expect slightly larger/more visible gradient edges
      6. Verify the h1 text is visible and readable against the white background
    Expected Result: Two screenshots showing the breathing animation at different phases, child content readable
    Failure Indicators: Black/dark background, purple colors, no animation, child text not visible
    Evidence: .sisyphus/evidence/task-3-breathing-t0.png, .sisyphus/evidence/task-3-breathing-t3.png

  Scenario: Performance — no layout-triggering animations
    Tool: Bash
    Steps:
      1. Grep `RadialBreathing.tsx` for `top|left|width|height` in animate props — expect zero
      2. Grep for `transform|scale|opacity` — expect matches (GPU-composited)
      3. Grep for `h-screen` — expect zero (should use min-h-[100dvh] if needed)
    Expected Result: Only GPU-composited properties animated
    Evidence: .sisyphus/evidence/task-3-performance-check.txt
  ```

  **Commit**: YES (groups with Wave 1)
  - Message: `feat(bg): white-themed radial breathing gradient component`
  - Files: `src/components/backgrounds/RadialBreathing.tsx`
  - Pre-commit: `bun build`

---

- [ ] 4. WhatsApp Floating CTA Component

  **What to do**:
  - Create `src/components/ui/WhatsAppCTA.tsx` — floating WhatsApp button
  - Fixed position bottom-right corner (`fixed bottom-6 right-6 z-40`)
  - WhatsApp green (#25D366) circular button with WhatsApp SVG icon (NOT emoji, NOT Phosphor — use official WhatsApp SVG)
  - Hover: scale up slightly with spring physics (`scale: 1.1`, type: 'spring')
  - Active: press feedback (`scale: 0.95`)
  - Links to `https://wa.me/PHONE_NUMBER` (use a constant for the phone number — to be filled by user)
  - `aria-label="Contactar por WhatsApp"` for accessibility
  - Render as React island with `client:load` on all pages
  - Add to Layout.astro so it appears globally
  - Must be visible but not obstruct content on mobile

  **Must NOT do**:
  - Do NOT use emoji for the WhatsApp icon
  - Do NOT use Phosphor icon (WhatsApp brand requires official SVG)
  - Do NOT use z-50 (taste skill: z-index restraint — use z-40)
  - Do NOT add any text label on mobile (icon only)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`taste`]
    - `taste`: Spring physics (Section 4), z-index restraint (Section 5), anti-emoji policy

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1-3, 5-7)
  - **Blocks**: Task 5 (Layout.astro needs to include this)
  - **Blocked By**: None

  **References**:
  - `src/components/sections/Contact.tsx` — Existing contact component, has WhatsApp reference in contact info section. Check current WhatsApp phone number.
  - `.opencode/skills/taste/SKILL.md:62` — Tactile feedback: on :active use scale-[0.98] for physical push
  - `.opencode/skills/taste/SKILL.md:70` — Spring physics for interactive elements (stiffness: 100, damping: 20)
  - `.opencode/skills/taste/SKILL.md:78-79` — Z-index restraint, performance guardrails
  - WhatsApp brand SVG: inline SVG path for the WhatsApp icon (the executor should create a clean SVG from the official WhatsApp logo)

  **Acceptance Criteria**:
  - [ ] Floating green button visible bottom-right on all pages
  - [ ] Links to wa.me with correct phone
  - [ ] Spring hover + press animations
  - [ ] Accessible (aria-label)
  - [ ] Does not obstruct content on mobile

  **QA Scenarios**:
  ```
  Scenario: WhatsApp CTA renders globally
    Tool: Playwright
    Steps:
      1. Navigate to localhost:4321/
      2. Assert element with aria-label 'Contactar por WhatsApp' exists
      3. Assert it has `position: fixed` styling
      4. Assert link href contains 'wa.me'
      5. Screenshot at 375px viewport — verify button doesn't overlap main content
    Expected Result: Green floating button, fixed position, correct link
    Evidence: .sisyphus/evidence/task-4-whatsapp-cta.png

  Scenario: No emoji in WhatsApp component
    Tool: Bash
    Steps:
      1. Grep WhatsAppCTA.tsx for emoji Unicode ranges — expect zero
      2. Verify SVG path element exists for the icon
    Expected Result: Clean SVG icon, no emoji
    Evidence: .sisyphus/evidence/task-4-no-emoji.txt
  ```

  **Commit**: YES (groups with Wave 1)
  - Message: `feat(cta): floating WhatsApp button component`
  - Files: `src/components/ui/WhatsAppCTA.tsx`
  - Pre-commit: `bun build`

---

- [ ] 5. Layout.astro Updates (ClientRouter + Global Components)

  **What to do**:
  - Add `<ClientRouter />` from `astro:transitions` to enable smooth page transitions across the new multi-page site
  - Add `transition:persist` directive on the `<Navbar>` island to prevent remount on navigation
  - Add `transition:persist` on the `<WhatsAppCTA>` island (from Task 4) so it persists across pages
  - Verify all `whileInView` Motion animations across existing components use `viewport={{ once: true }}` to prevent re-flash on navigation
  - Import and render `<WhatsAppCTA client:load />` in the layout (global across all pages)
  - Ensure font loading links (Libre Baskerville, Manrope) remain in the `<head>`
  - Add viewport meta tag if missing: `<meta name="viewport" content="width=device-width, initial-scale=1">`

  **Must NOT do**:
  - Do NOT use `<ViewTransitions />` (renamed to `<ClientRouter />` in Astro 5)
  - Do NOT remove existing SEO component or StructuredData component
  - Do NOT modify font loading (keep Google Fonts links)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1-4, 6-7)
  - **Blocks**: Tasks 8, 13, 14-19 (all new pages need the layout)
  - **Blocked By**: Task 4 (WhatsAppCTA component must exist first)

  **References**:
  - `src/layouts/Layout.astro` — Current layout with SEO, fonts, body structure. Study existing `<head>` and `<body>` structure.
  - `src/components/sections/Navbar.tsx` — Already `client:load`. Needs `transition:persist` added to its usage in Layout.
  - `src/components/animations/FadeInView.tsx` — Check if its Motion `whileInView` already has `once: true`; if not, update it.
  - Astro 5 docs: `<ClientRouter />` replaces `<ViewTransitions />`. Import from `astro:transitions`.

  **Acceptance Criteria**:
  - [ ] `<ClientRouter />` imported and rendered in Layout.astro
  - [ ] Navbar has `transition:persist`
  - [ ] WhatsAppCTA rendered globally with `client:load`
  - [ ] `bun build` succeeds

  **QA Scenarios**:
  ```
  Scenario: ClientRouter enables page transitions
    Tool: Bash
    Steps:
      1. Grep Layout.astro for 'ClientRouter' — expect match
      2. Grep Layout.astro for 'transition:persist' — expect match on Navbar
      3. Grep Layout.astro for 'WhatsAppCTA' — expect match
      4. Run `bun build` — expect zero errors
    Expected Result: Layout has ClientRouter, persist directives, and global WhatsApp CTA
    Evidence: .sisyphus/evidence/task-5-layout-update.txt
  ```

  **Commit**: YES (groups with Wave 1)
  - Message: `feat(layout): ClientRouter, transition persist, global WhatsApp CTA`
  - Files: `src/layouts/Layout.astro`, `src/components/animations/FadeInView.tsx`
  - Pre-commit: `bun build`

---

- [ ] 6. Solution Page Layout Template

  **What to do**:
  - Create `src/pages/soluciones/[slug].astro` — dynamic route for individual service pages
  - Use `getStaticPaths()` importing `SERVICES` from `src/data/services.ts` to generate routes for all 6 slugs
  - Template structure following zettelkasten solution page template:
    1. **Hero section**: Service title (serif, large), tagline, brief description, CTA button
    2. **How it works**: 3 simple steps (numbered, with brief descriptions)
    3. **Visual section**: Placeholder `<img>` slot for mood image (AVIF primary + WebP fallback) or SVG illustration
    4. **Results/metrics**: Key outcome metrics or case study snippet
    5. **CTA section**: "\u00bfQuieres verlo en acci\u00f3n?" with Calendly or contact link
  - Import service data from props (`Astro.props.service`)
  - Use Layout.astro as the wrapper
  - Each section should use FadeInView for scroll animations
  - Responsive layout (mobile-first)

  **Must NOT do**:
  - Do NOT fill in detailed content for each service (that's Tasks 14-19)
  - Do NOT use content collections
  - Do NOT hardcode service data (import from services.ts)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`taste`, `frontend-design`]
    - `taste`: Layout diversification rules, mobile override
    - `frontend-design`: Page template patterns

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1-5, 7)
  - **Blocks**: Tasks 14-19 (service pages build on this template)
  - **Blocked By**: Task 2 (needs service data model)

  **References**:
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/strategy/website-structure.md` — Solution page template: Hero → How it works → Visual → Results → CTA
  - `src/data/services.ts` (from Task 2) — ServiceData type with slug, title, tagline, etc.
  - `src/pages/index.astro` — Pattern for how pages use Layout.astro and render sections
  - `src/components/animations/FadeInView.tsx` — Scroll animation wrapper to use in sections
  - Astro 5 docs: `getStaticPaths()` returns `{ params: { slug }, props: { service } }` per route

  **Acceptance Criteria**:
  - [ ] `src/pages/soluciones/[slug].astro` generates 6 routes
  - [ ] Template has 5 sections (Hero, How it works, Visual, Results, CTA)
  - [ ] `bun build` succeeds and creates pages for all 6 slugs

  **QA Scenarios**:
  ```
  Scenario: Dynamic routes generated for all 6 services
    Tool: Bash
    Steps:
      1. Run `bun build`
      2. Check dist/soluciones/ directory — expect 6 subdirectories
      3. Verify each slug exists: documentos, appcc, whatsapp, dashboard, proveedores, automatizacion
    Expected Result: 6 service pages built to dist/
    Evidence: .sisyphus/evidence/task-6-routes.txt
  ```

  **Commit**: YES (groups with Wave 1)
  - Message: `feat(pages): solution page dynamic route template`
  - Files: `src/pages/soluciones/[slug].astro`
  - Pre-commit: `bun build`

---

- [ ] 7. Navbar Updates (New Routes + Mobile)

  **What to do**:
  - Update `src/components/sections/Navbar.tsx` with new navigation structure:
    - Links: Cadly Labs (logo/home) | Soluciones | Casos | C\u00f3mo trabajamos | \u00bfHablamos?
    - "Soluciones" links to `/soluciones/`
    - "Casos" scrolls to success story section (anchor link)
    - "C\u00f3mo trabajamos" scrolls to HowWeWork section
    - "\u00bfHablamos?" scrolls to Contact section or links to Calendly
  - Mobile hamburger menu: ensure it works with the new links
  - Active state indicator for current page (highlight "Soluciones" when on /soluciones/*)
  - Ensure `transition:persist` compatibility (component must handle navigation state correctly when persisted)
  - Typography: nav links in Manrope (sans), logo text can mix serif accent
  - NO hyphens in any nav text

  **Must NOT do**:
  - Do NOT add dropdown menus for individual solutions (keep nav simple)
  - Do NOT change the overall Navbar styling/theme drastically

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`taste`, `frontend-design`]
    - `taste`: Navigation patterns (Section 8: Mac OS Dock, Magnetic Button concepts), mobile collapse rules
    - `frontend-design`: Production nav patterns

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1-6)
  - **Blocks**: Tasks 8, 12, 13, 14-19
  - **Blocked By**: Task 1 (design tokens)

  **References**:
  - `src/components/sections/Navbar.tsx` — Current nav: fixed header, links (Soluciones, Casos, Proceso, Contacto), mobile menu toggle, scroll-based background opacity
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/strategy/website-structure.md` — Navbar structure: Cadly Labs | Soluciones | Casos | C\u00f3mo trabajamos | \u00bfHablamos?
  - `src/styles/global.css` — Typography tokens for nav styling
  - `.opencode/skills/taste/SKILL.md:135-142` — Navigation creative arsenal (magnetic buttons, mega menu concepts)

  **Acceptance Criteria**:
  - [ ] Nav has correct links: Soluciones, Casos, C\u00f3mo trabajamos, \u00bfHablamos?
  - [ ] "Soluciones" links to /soluciones/
  - [ ] Mobile menu works with new links
  - [ ] Active state on current page
  - [ ] No hyphens in nav text

  **QA Scenarios**:
  ```
  Scenario: Navigation links render correctly
    Tool: Playwright
    Steps:
      1. Navigate to localhost:4321/
      2. Assert nav contains links: 'Soluciones', 'Casos', 'C\u00f3mo trabajamos', '\u00bfHablamos?'
      3. Click 'Soluciones' link — expect navigation to /soluciones/
      4. Verify no hyphen characters in any nav link text content
    Expected Result: All nav links present, Soluciones navigates correctly
    Evidence: .sisyphus/evidence/task-7-navbar.png

  Scenario: Mobile menu works
    Tool: Playwright
    Steps:
      1. Set viewport to 375px width
      2. Assert hamburger menu button visible
      3. Click hamburger — expect menu to open with all links visible
      4. Screenshot mobile menu open state
    Expected Result: Mobile menu opens with all nav links
    Evidence: .sisyphus/evidence/task-7-mobile-menu.png
  ```

  **Commit**: YES (groups with Wave 1)
  - Message: `feat(nav): updated navbar with new routes and mobile menu`
  - Files: `src/components/sections/Navbar.tsx`
  - Pre-commit: `bun build`

---

- [ ] 8. Hero Section Redesign (Asymmetric + Breathing Gradient)

  **What to do**:
  - Rewrite `src/components/sections/Hero.tsx` with asymmetric layout (taste skill: ANTI-CENTER BIAS at DESIGN_VARIANCE=6)
  - Layout: Left-aligned content (60%) + right-side decorative area (40%) with breathing gradient bleeding through
  - Use `<RadialBreathing>` from Task 3 as the full-section background
  - Left side: Serif heading (Libre Baskerville, large, `text-4xl md:text-6xl tracking-tighter`) + body text (Manrope) + 2 CTA buttons
  - Hero copy (from zettelkasten): Heading — "Optimizamos los procesos que tu ERP no cubre" | Subtitle — "Consultoría de IA especializada en industria alimentaria. Diagnosticamos, construimos, automatizamos." | CTA1 — "Reserva una llamada" (links to Calendly) | CTA2 — "Ver soluciones" (links to /soluciones/)
  - Right side: Can be a subtle SVG illustration placeholder or the gradient itself with decorative Phosphor icons floating
  - Remove the old `FloatingPaths` / `background-paths` component usage
  - FadeInView entrance animation with staggered children
  - Use `min-h-[100dvh]` for full-height hero
  - Ensure heading uses serif font prominently (this is the key serif+sans mixing moment)
  - NO hyphens in any hero text

  **Must NOT do**:
  - Do NOT center the hero text (ANTI-CENTER BIAS)
  - Do NOT keep the old centered layout
  - Do NOT use the old background-paths component
  - Do NOT use purple/blue gradient colors
  - Do NOT use h-screen

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`taste`, `frontend-design`]
    - `taste`: Anti-center bias (Rule 3), typography hierarchy (Rule 1), motion intensity 5, hero paradigm (Section 8)
    - `frontend-design`: Premium hero section patterns

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 9-13)
  - **Parallel Group**: Wave 2
  - **Blocks**: Task 22 (mobile optimization needs hero done)
  - **Blocked By**: Tasks 1, 3, 5, 7

  **References**:
  - `src/components/sections/Hero.tsx` — Current hero (centered, uses BackgroundPaths, two CTA buttons). Understand current structure before rewriting.
  - `src/components/backgrounds/RadialBreathing.tsx` (Task 3) — New background component to integrate
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/strategy/website-structure.md` — Hero copy: "Optimizamos los procesos que tu ERP no cubre"
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/brand/voice.md` — Key messages, CTA phrasing
  - `.opencode/skills/taste/SKILL.md:50-51` — Rule 3: ANTI-CENTER BIAS, force asymmetric layouts
  - `.opencode/skills/taste/SKILL.md:132-133` — Standard Hero Paradigm: asymmetric, text aligned left/right, background with stylistic fade

  **Acceptance Criteria**:
  - [ ] Hero has asymmetric layout (text left, visual right)
  - [ ] Breathing gradient visible as background
  - [ ] Heading in serif font (Libre Baskerville), large and prominent
  - [ ] Two CTAs: "Reserva una llamada" + "Ver soluciones"
  - [ ] min-h-[100dvh] used
  - [ ] No hyphens in text

  **QA Scenarios**:
  ```
  Scenario: Hero renders with asymmetric layout
    Tool: Playwright
    Steps:
      1. Navigate to localhost:4321/
      2. Screenshot hero section at 1440px viewport
      3. Assert heading text contains 'Optimizamos'
      4. Assert heading element has serif font-family (Libre Baskerville)
      5. Assert layout is NOT centered — text content should be in left 60% of viewport
      6. Assert two CTA buttons exist
      7. Assert no hyphen characters in any text within the hero section
    Expected Result: Asymmetric hero, serif heading, two CTAs, breathing gradient behind
    Evidence: .sisyphus/evidence/task-8-hero-desktop.png

  Scenario: Hero mobile layout
    Tool: Playwright
    Steps:
      1. Set viewport to 375px
      2. Screenshot hero — expect stacked layout (text above, full width)
      3. Assert both CTAs visible and tappable
    Expected Result: Clean mobile stack, no horizontal scroll
    Evidence: .sisyphus/evidence/task-8-hero-mobile.png
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(hero): asymmetric layout with breathing gradient background`
  - Files: `src/components/sections/Hero.tsx`
  - Pre-commit: `bun build`

---

- [ ] 9. Services Bento Grid (Asymmetric, 6 Cards)

  **What to do**:
  - Create `src/components/sections/ServicesBento.tsx` — replaces the old `FoodServices.tsx`
  - Asymmetric bento grid layout showing all 6 services with different card sizes:
    ```
    Row 1: [Document Agent — col-span-2, hero card] [APPCC — col-span-1]
    Row 2: [WhatsApp — 1col] [Dashboard — 1col] [Supplier Intel — 1col]
    Row 3: [Process Orchestration — col-span-3, full-width subtle card]
    ```
  - Import `SERVICES` from `src/data/services.ts` to populate cards
  - Each card: rounded-[2.5rem] container, title (serif), one-liner tagline, subtle animated background, hover-reveal CTA linking to /soluciones/{slug}
  - Staggered entrance animation using FadeInView or Motion staggerChildren
  - Card backgrounds: each service gets a subtle, unique micro-animation (taste skill Bento 2.0)
    - Document Agent (hero card): Could have a simulated document scanning animation or shimmer
    - APPCC: Checklist items appearing/completing
    - WhatsApp: Chat bubble float animation
    - Dashboard: Subtle bar chart or number counter
    - Supplier Intel: Price comparison shifting
    - Process Orchestration: Connected nodes/flow diagram
  - These micro-animations can be simple CSS/Motion perpetual loops or Gemini-generated SVGs
  - Hover state: card lifts (`-translate-y-1`), border brightens, CTA appears
  - Spring physics on all interactions
  - Section heading: "Nuestras Soluciones" or "Lo que automatizamos" (serif, large)
  - Below the grid: "Tambi\u00e9n nos adaptamos a tu caso concreto. \u00bfHablamos?" link
  - Mobile: stack to single column, hero card keeps prominence
  - The NOTE about Gemini SVG prompting: for each card's animated background, the executor can use the Gemini prompting style (exact layout + exact animation + exact styling) to generate custom SVGs. Example prompt structure:
    ```
    Generate an SVG animation for a service card background.
    Card: Document Agent (invoice/delivery note processing)
    Visual: A simplified document icon with lines of text that shimmer as if being scanned.
    Colors: Neutral gray lines on transparent background, scanning highlight in brand orange (#FF8532) at 20% opacity.
    Size: 300x200 viewBox, clean paths, minimal elements.
    Animation: A horizontal scan line moves top to bottom in a 4s infinite loop using CSS @keyframes.
    Output: Valid SVG with embedded <style> for animations. No external dependencies.
    ```

  **Must NOT do**:
  - Do NOT use 3-column equal card layout (BANNED by taste skill)
  - Do NOT use the old FoodServices.tsx CSS mock card pattern
  - Do NOT center the section heading (follow anti-center bias)
  - Do NOT use linear easing on animations
  - Do NOT use generic card backgrounds (each service must have unique visual)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`taste`, `frontend-design`]
    - `taste`: Bento 2.0 paradigm (Section 9), card archetypes, perpetual micro-animations, staggered orchestration, anti-3-col-equal rule
    - `frontend-design`: Premium bento grid implementation

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 8, 10-13)
  - **Parallel Group**: Wave 2
  - **Blocks**: None directly (service pages are independent)
  - **Blocked By**: Tasks 1, 2

  **References**:
  - `src/components/sections/FoodServices.tsx` — Current services section (2 cards: APPCC + Document Scanner, CSS mock UIs). Study structure then replace.
  - `src/components/ui/bento-grid.tsx` — Existing bento grid UI component. Check if reusable or needs replacement.
  - `src/data/services.ts` (Task 2) — Service data to populate cards
  - `.opencode/skills/taste/SKILL.md:115` — NO 3-column equal cards (BANNED). Use asymmetric, zig-zag, or horizontal scroll.
  - `.opencode/skills/taste/SKILL.md:193-218` — Section 9: THE MOTION-ENGINE BENTO PARADIGM. Core design philosophy, animation engine specs, 5-card archetypes.
  - `.opencode/skills/taste/SKILL.md:144-145` — Bento Grid layout creative arsenal
  - Gemini SVG prompting reference (from user): Use exact layout description + exact animation behavior + exact styling tokens for generating card background SVGs

  **Acceptance Criteria**:
  - [ ] Asymmetric bento grid with 6 cards (1 hero col-span-2, others varied)
  - [ ] Each card has unique animated background
  - [ ] Staggered entrance animation
  - [ ] Hover-reveal CTAs linking to /soluciones/{slug}
  - [ ] Mobile: single column stack
  - [ ] No 3-col equal layout
  - [ ] Spring physics on interactions

  **QA Scenarios**:
  ```
  Scenario: Bento grid renders 6 service cards asymmetrically
    Tool: Playwright
    Steps:
      1. Navigate to localhost:4321/
      2. Scroll to services section
      3. Assert 6 service cards visible at 1440px viewport
      4. Assert first card (Document Agent) is wider than others (col-span check)
      5. Assert each card links to /soluciones/{slug}
      6. Hover over first card — assert CTA becomes visible
      7. Screenshot full bento grid
    Expected Result: Asymmetric grid, 6 cards, hover CTAs, unique backgrounds
    Evidence: .sisyphus/evidence/task-9-bento-desktop.png

  Scenario: Bento mobile stacks to single column
    Tool: Playwright
    Steps:
      1. Set viewport to 375px
      2. Scroll to services section
      3. Assert cards stack vertically
      4. Assert no horizontal scroll
      5. Screenshot
    Expected Result: Single column, no overflow
    Evidence: .sisyphus/evidence/task-9-bento-mobile.png
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(services): asymmetric bento grid with 6 animated service cards`
  - Files: `src/components/sections/ServicesBento.tsx`
  - Pre-commit: `bun build`

---

- [ ] 10. Success Story Section Redesign

  **What to do**:
  - Redesign `src/components/sections/SuccessStory` (currently .astro, may convert to .tsx for animations)
  - Montes del Acebo case study: lead with metrics/outcomes, not company description
  - Layout: asymmetric (left: large metric number + brief outcome text; right: company context + details)
  - Key metric prominently displayed: e.g., a time savings number or compliance improvement stat
  - Include subtle mood image placeholder (slot for user-supplied cinematic image)
  - Montes del Acebo logo (already in public/images/logos/)
  - Brief case study text following brand voice (direct, outcome-focused)
  - FadeInView entrance + number counter animation for the metric
  - Keep the cofounder connection subtle (zettelkasten: "reveal selectively")
  - NO hyphens in any text

  **Must NOT do**:
  - Do NOT make it feel like a product testimonial (consultancy feel)
  - Do NOT over-reveal the cofounder connection
  - Do NOT center the layout

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`taste`, `frontend-design`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 8-9, 11-13)
  - **Parallel Group**: Wave 2
  - **Blocks**: None
  - **Blocked By**: Task 1

  **References**:
  - `src/components/sections/SuccessStory.astro` — Current case study section. Read current content and structure.
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/sales/pitch-appcc.md` — APPCC pitch with Montes del Acebo as proof point
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/brand/identity.md` — Founding team credibility, cofounder owned Montes del Acebo
  - `public/images/logos/montes_acebo_logo.avif` — Client logo
  - `.opencode/skills/taste/SKILL.md:117-122` — Content anti-patterns: no generic names, no fake numbers, use organic data

  **Acceptance Criteria**:
  - [ ] Metric-first layout (large number + outcome)
  - [ ] Asymmetric design
  - [ ] Image placeholder for mood image
  - [ ] No hyphens in text

  **QA Scenarios**:
  ```
  Scenario: Success story renders with metric-first layout
    Tool: Playwright
    Steps:
      1. Navigate to localhost:4321/
      2. Scroll to success story section
      3. Assert a large metric number is visible
      4. Assert Montes del Acebo is mentioned
      5. Assert no hyphen characters in section text
      6. Screenshot at 1440px + 375px
    Expected Result: Metric-led, asymmetric, responsive
    Evidence: .sisyphus/evidence/task-10-success-story.png
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(case-study): metric-first success story redesign`
  - Files: `src/components/sections/SuccessStory.tsx`
  - Pre-commit: `bun build`

---

- [ ] 11. Contact Section (Calendly Integration)

  **What to do**:
  - Update `src/components/sections/Contact.tsx` to replace the primary CTA with a Calendly booking link
  - Keep the contact form but make Calendly the PRIMARY action ("Reserva una llamada de 20 minutos")
  - Add a prominent Calendly button/link above or alongside the form
  - The form becomes secondary ("O si prefieres, escr\u00edbenos directamente")
  - Calendly URL: placeholder `https://calendly.com/cadlylabs/20min` (user will update)
  - Keep existing contact info (email, phone, WhatsApp)
  - NO hyphens in any contact text

  **Must NOT do**:
  - Do NOT remove the contact form entirely (keep as secondary option)
  - Do NOT embed Calendly iframe (just link to it — keeps page lightweight)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`taste`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 8-10, 12-13)
  - **Parallel Group**: Wave 2
  - **Blocks**: None
  - **Blocked By**: None

  **References**:
  - `src/components/sections/Contact.tsx` — Current contact form with Zod validation, n8n webhook, success modal. Keep form structure, add Calendly CTA above.
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/brand/voice.md` — CTA phrasing: "Una llamada de 20 minutos para entender si podemos ayudarte"

  **Acceptance Criteria**:
  - [ ] Calendly button prominent above form
  - [ ] Form still functional as secondary option
  - [ ] No hyphens in text

  **QA Scenarios**:
  ```
  Scenario: Calendly CTA is prominent
    Tool: Playwright
    Steps:
      1. Scroll to contact section
      2. Assert a link/button with 'Reserva' or 'Calendly' text exists
      3. Assert link href contains 'calendly.com'
      4. Assert contact form still exists below
    Expected Result: Calendly CTA above form
    Evidence: .sisyphus/evidence/task-11-calendly.png
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(contact): Calendly booking as primary CTA`
  - Files: `src/components/sections/Contact.tsx`
  - Pre-commit: `bun build`

---

- [ ] 12. Footer Updates

  **What to do**:
  - Update `src/components/sections/Footer.astro` with new navigation links matching the updated Navbar
  - Add links to: /soluciones/, /nosotros/, individual solution pages (optional — at least /soluciones/)
  - Ensure CTA in footer aligns with Calendly direction
  - Update any text to remove hyphens
  - Keep existing structure (links, copyright, brand)

  **Must NOT do**:
  - Do NOT over-redesign (keep it clean and minimal)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 8-11, 13)
  - **Parallel Group**: Wave 2
  - **Blocks**: None
  - **Blocked By**: Task 7 (Navbar determines the link structure)

  **References**:
  - `src/components/sections/Footer.astro` — Current footer with links and CTA

  **Acceptance Criteria**:
  - [ ] Footer has links to /soluciones/ and /nosotros/
  - [ ] No hyphens in footer text
  - [ ] `bun build` succeeds

  **QA Scenarios**:
  ```
  Scenario: Footer links updated
    Tool: Playwright
    Steps:
      1. Scroll to footer
      2. Assert link to '/soluciones/' exists
      3. Assert no hyphen characters in footer text
    Expected Result: Updated footer links
    Evidence: .sisyphus/evidence/task-12-footer.txt
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(footer): updated navigation links`
  - Files: `src/components/sections/Footer.astro`
  - Pre-commit: `bun build`

---

- [ ] 13. /nosotros/ Page (About)

  **What to do**:
  - Create `src/pages/nosotros.astro` — About page with team and founding story
  - Sections:
    1. **Hero**: "Somos tu equipo de IA para la industria alimentaria" (serif heading, asymmetric)
    2. **Founding story**: Brief narrative about how CadlyLabs started — cofounder owned a cutting room (sala de despiece), experienced the pain firsthand, built AI to solve it
    3. **Team**: 3 founders with brief roles (no photos needed initially — use stylized initials or Phosphor icons as placeholders)
       - Sales cofounder: Deep food industry network
       - Technical cofounder: Built original APPCC system, former cutting room owner
       - Dani: AI Engineer, Master's Applied Math, AI agents specialist
    4. **Values/philosophy**: "Diagnosticamos antes de construir", "No migramos, integramos", "Empezamos peque\u00f1o, demostramos valor"
    5. **CTA**: "\u00bfQuieres conocernos?" linking to Calendly
  - Use Layout.astro
  - FadeInView animations for each section
  - Typography: prominent serif headings, sans body
  - Image placeholders for team photos or mood images
  - ALL text Spanish, brand voice, NO hyphens

  **Must NOT do**:
  - Do NOT use real team photos (not provided — use tasteful placeholders)
  - Do NOT use corporate buzzwords
  - Do NOT center all content (asymmetric layouts per taste skill)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`taste`, `frontend-design`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 8-12)
  - **Parallel Group**: Wave 2
  - **Blocks**: None
  - **Blocked By**: Tasks 1, 5, 7

  **References**:
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/brand/identity.md` — Core philosophy, founding team credibility, differentiators
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/brand/voice.md` — Brand voice, key messages
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/sales/value-proposition.md` — Core value promise, why clients choose us
  - `src/layouts/Layout.astro` — Page wrapper pattern
  - `.opencode/skills/taste/SKILL.md:50-51` — Anti-center bias, asymmetric layouts
  - `.opencode/skills/taste/SKILL.md:119` — NO generic avatars (use creative placeholders)

  **Acceptance Criteria**:
  - [ ] /nosotros/ page renders with founding story + team + values
  - [ ] Asymmetric layouts
  - [ ] Serif headings prominent
  - [ ] No hyphens, no emojis, no English
  - [ ] `bun build` succeeds

  **QA Scenarios**:
  ```
  Scenario: About page renders correctly
    Tool: Playwright
    Steps:
      1. Navigate to localhost:4321/nosotros/
      2. Assert heading contains 'equipo' or 'IA'
      3. Assert 3 team member sections exist
      4. Assert founding story section exists
      5. Assert CTA with Calendly link exists
      6. Screenshot at 1440px + 375px
    Expected Result: Complete about page with team, story, values, CTA
    Evidence: .sisyphus/evidence/task-13-nosotros-desktop.png, .sisyphus/evidence/task-13-nosotros-mobile.png
  ```

  **Commit**: YES (groups with Wave 2)
  - Message: `feat(about): /nosotros/ page with team and founding story`
  - Files: `src/pages/nosotros.astro`
  - Pre-commit: `bun build`

---

- [ ] 14-19. Individual Service Pages (6 tasks, MAX PARALLEL)

  > These 6 tasks follow the SAME template but each has unique content.
  > Each task = one service page. All 6 run in PARALLEL (Wave 3).
  > The template from Task 6 provides the page structure.
  > Each executor fills in service-specific content, visuals, and copy.

  **Common structure for each page** (from zettelkasten solution page template):
  1. Hero: Service title (serif) + problem statement + tagline + CTA
  2. How it works: 3 simple steps (numbered)
  3. Visual: Image placeholder or Gemini SVG illustration
  4. Results: Metrics or case study reference
  5. CTA: "\u00bfQuieres verlo en acci\u00f3n?" + Calendly link

  **Common constraints**:
  - ALL text in Spanish, brand voice
  - NO hyphens anywhere
  - NO emojis
  - Asymmetric layouts (taste skill)
  - Serif headings, sans body
  - FadeInView animations
  - Image placeholders for mood images (AVIF slot)

  **Common Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`taste`, `frontend-design`]
  - **Blocked By**: Tasks 1, 2, 5, 6, 7
  - **Blocks**: Tasks 20, 22

  **Common references**:
  - `src/pages/soluciones/[slug].astro` (Task 6) — Template structure to fill
  - `src/data/services.ts` (Task 2) — Service data (slug, title, tagline, features)
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/strategy/solutions-catalog.md` — Solution details, complexity, positioning
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/brand/voice.md` — Brand voice for copy
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/sales/pitch-appcc.md` — APPCC-specific pitch points
  - `.opencode/skills/taste/SKILL.md` — Full design constraints

---

- [ ] 14. /soluciones/documentos (Document Agent)

  **Service-specific content**:
  - Problem: "Pasas horas tecleando datos de albaranes y facturas en tu ERP"
  - Solution: AI extracts data from delivery notes and invoices automatically
  - How it works: 1. Escaneas o fotografias el documento → 2. La IA extrae los datos → 3. Se registran en tu ERP autom\u00e1ticamente
  - Key metric: "10 horas/semana menos de entrada manual de datos"
  - Visual: Document scanning SVG animation or image placeholder
  - ERP compatibility logos: SAP, Dynamics, A3, Holded, Sage, Odoo (already in public/images/erps_logos/)
  - This is the "door opener" service — make it compelling

  **References**: `public/images/erps_logos/` — 6 ERP partner logos to display

  **QA Scenario**:
  ```
  Scenario: Document Agent page renders
    Tool: Playwright
    Steps:
      1. Navigate to localhost:4321/soluciones/documentos/
      2. Assert page title contains 'Documentos' or 'Agente'
      3. Assert 3 'how it works' steps visible
      4. Assert ERP logos section exists
      5. Assert CTA with Calendly link
      6. Assert no hyphens in visible text
      7. Screenshot at 1440px + 375px
    Expected Result: Complete service page
    Evidence: .sisyphus/evidence/task-14-documentos.png
  ```

  **Commit**: YES (groups with Wave 3)
  - Message: `feat(soluciones): Document Agent service page`

---

- [ ] 15. /soluciones/appcc (APPCC y Trazabilidad)

  **Service-specific content**:
  - Problem: "Cuando viene el inspector, necesitas tener todo a mano en segundos"
  - Solution: Digital APPCC records + full traceability chain
  - How it works: 1. Registras controles con 2 clics → 2. Trazabilidad de lotes autom\u00e1tica → 3. Documentaci\u00f3n lista para inspecci\u00f3n
  - Key metric: "De horas buscando papeles a 2 clics" or real Montes del Acebo stat
  - Visual: Checklist/compliance SVG animation or image placeholder
  - This is the PROVEN service (Montes del Acebo) — emphasize credibility
  - Reference to case study (link back to success story section on homepage)

  **QA Scenario**:
  ```
  Scenario: APPCC page renders
    Tool: Playwright
    Steps:
      1. Navigate to localhost:4321/soluciones/appcc/
      2. Assert page mentions 'APPCC' or 'trazabilidad'
      3. Assert 3 steps visible
      4. Assert CTA exists
      5. Assert no hyphens
      6. Screenshot 1440px + 375px
    Expected Result: Complete APPCC page
    Evidence: .sisyphus/evidence/task-15-appcc.png
  ```

  **Commit**: YES (groups with Wave 3)
  - Message: `feat(soluciones): APPCC and traceability service page`

---

- [ ] 16. /soluciones/whatsapp (WhatsApp y ERP)

  **Service-specific content**:
  - Problem: "Los pedidos por WhatsApp se pierden, se duplican o llegan tarde al sistema"
  - Solution: WhatsApp messages automatically processed into ERP orders
  - How it works: 1. Tu cliente env\u00eda pedido por WhatsApp → 2. La IA interpreta el pedido → 3. Se registra en tu ERP como pedido formal
  - Key metric: "Cero pedidos perdidos. Cero retrasos."
  - Visual: Chat interface SVG or message flow animation
  - High demand service — relatable pain point

  **QA Scenario**: Same structure as Tasks 14-15. Navigate to /soluciones/whatsapp/, verify content, CTA, no hyphens.
  **Evidence**: .sisyphus/evidence/task-16-whatsapp.png
  **Commit**: `feat(soluciones): WhatsApp ERP bridge service page`

---

- [ ] 17. /soluciones/dashboard (Dashboard de Operaciones)

  **Service-specific content**:
  - Problem: "No sabes cu\u00e1nto stock tienes, qu\u00e9 m\u00e1rgenes manejas, ni qu\u00e9 caduca ma\u00f1ana"
  - Solution: Real-time dashboard pulling data from your existing systems
  - How it works: 1. Conectamos tus sistemas actuales → 2. Agregamos los datos clave → 3. Dashboard en tiempo real para decisiones r\u00e1pidas
  - Key metric: "Todas tus m\u00e9tricas clave en una sola pantalla"
  - Visual: Dashboard mockup SVG with animated bar chart or counter (this is where Gemini SVG prompting shines — prompt for a dashboard UI with animated bars)
  - Upsell service — comes after the initial engagement

  **QA Scenario**: Same structure. Navigate to /soluciones/dashboard/, verify content.
  **Evidence**: .sisyphus/evidence/task-17-dashboard.png
  **Commit**: `feat(soluciones): operations dashboard service page`

---

- [ ] 18. /soluciones/proveedores (Inteligencia de Proveedores)

  **Service-specific content**:
  - Problem: "Comparar precios de proveedores es un trabajo manual que nadie tiene tiempo de hacer"
  - Solution: Automated price comparison, certificate tracking, renewal alerts
  - How it works: 1. Conectamos con tus proveedores → 2. Comparamos precios autom\u00e1ticamente → 3. Alertas de renovaci\u00f3n de certificados
  - Key metric: "Compra al mejor precio sin perder horas comparando"
  - Visual: Price comparison table or supplier network SVG

  **QA Scenario**: Same structure. Navigate to /soluciones/proveedores/.
  **Evidence**: .sisyphus/evidence/task-18-proveedores.png
  **Commit**: `feat(soluciones): supplier intelligence service page`

---

- [ ] 19. /soluciones/automatizacion (Orquestaci\u00f3n de Procesos)

  **Service-specific content**:
  - Problem: "Tienes flujos de trabajo que dependen de 5 pasos manuales entre 3 sistemas"
  - Solution: End-to-end process automation across multiple systems
  - How it works: 1. Mapeamos tu flujo actual → 2. Dise\u00f1amos la automatizaci\u00f3n → 3. Conectamos todo sin cambiar tus sistemas
  - Key metric: "Procesos de horas reducidos a minutos"
  - Visual: Connected workflow nodes SVG or flowchart animation
  - This is the complex/premium service — position it as "the big picture" offering
  - Zettelkasten notes: this is the least defined service, keep it aspirational but honest

  **QA Scenario**: Same structure. Navigate to /soluciones/automatizacion/.
  **Evidence**: .sisyphus/evidence/task-19-automatizacion.png
  **Commit**: `feat(soluciones): process orchestration service page`

---

- [ ] 20. /soluciones/ Index Page

  **What to do**:
  - Create `src/pages/soluciones/index.astro` — the solutions catalog page
  - Hero: "Nuestras Soluciones" (serif heading) + subtitle: "Cada negocio es diferente. Por eso diagnosticamos primero y construimos despu\u00e9s."
  - Display all 6 services as cards linking to their individual pages
  - Can reuse a simplified version of the bento grid, or use a clean list/card layout
  - Each card: service title, brief tagline, CTA arrow/link to /soluciones/{slug}
  - Bottom CTA: "\u00bfTu problema no est\u00e1 en la lista? Hablemos." → Calendly
  - Import SERVICES from data/services.ts
  - FadeInView entrance animations, staggered

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`taste`, `frontend-design`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 21-24)
  - **Parallel Group**: Wave 4
  - **Blocks**: None
  - **Blocked By**: Tasks 2, 14-19 (needs services built so links work)

  **References**:
  - `src/data/services.ts` (Task 2) — Service data for cards
  - `src/components/sections/ServicesBento.tsx` (Task 9) — Study bento pattern, adapt for index page

  **QA Scenarios**:
  ```
  Scenario: Solutions index shows all 6 services
    Tool: Playwright
    Steps:
      1. Navigate to localhost:4321/soluciones/
      2. Assert 6 service cards/items visible
      3. Click first card — navigates to /soluciones/documentos/
      4. Navigate back, click last card — navigates to /soluciones/automatizacion/
      5. Assert no hyphens in text
      6. Screenshot at 1440px + 375px
    Expected Result: All 6 services listed with working links
    Evidence: .sisyphus/evidence/task-20-soluciones-index.png
  ```

  **Commit**: YES (groups with Wave 4)
  - Message: `feat(soluciones): solutions index page`
  - Files: `src/pages/soluciones/index.astro`
  - Pre-commit: `bun build`

---

- [ ] 21. SVG Icons/Patterns + Mood Image Integration

  **What to do**:
  - Create SVG icons for each of the 6 services (simple, clean, brand-consistent)
  - Either generate via Gemini (using the detailed prompting style) or create manually
  - Gemini prompt template for each service icon:
    ```
    Generate a clean SVG icon for a service card.
    Service: [name] ([description])
    Style: Minimal line art, stroke only, no fills.
    Colors: Brand orange (#FF8532) for primary strokes, neutral gray (#9CA3AF) for secondary.
    Size: 48x48 viewBox.
    Constraints: Max 5 path elements, clean geometry, no text.
    Output: Valid SVG, no external dependencies.
    ```
  - Create mood image integration points across the site:
    - Hero: Optional decorative image slot (right side of asymmetric layout)
    - Success story: Background mood image slot
    - /nosotros/: Team section background or decorative image
    - Service pages: Visual section image slot
  - Each slot: `<img>` with `loading="lazy"`, `decoding="async"`, supports AVIF + WebP via `<picture>` element
  - Create `src/components/ui/MoodImage.tsx` — reusable picture element with fallback
  - Placeholder images (subtle branded gradient SVG) for when user hasn't supplied images yet

  **Must NOT do**:
  - Do NOT use Unsplash links (taste skill)
  - Do NOT generate complex SVG illustrations (Gemini degrades on complex)
  - Do NOT use emoji as icon substitutes

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`taste`, `frontend-design`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 20, 22-24)
  - **Parallel Group**: Wave 4
  - **Blocks**: None
  - **Blocked By**: Task 1 (needs design tokens for colors)

  **References**:
  - `.opencode/skills/taste/SKILL.md:125` — NO broken Unsplash links, use reliable placeholders
  - `.opencode/skills/taste/SKILL.md:26` — ANTI-EMOJI POLICY
  - User's Gemini SVG prompting guide: exact layout + exact animation + exact styling tokens
  - `public/images/` — Existing image assets, directory structure for new assets

  **QA Scenarios**:
  ```
  Scenario: SVG icons render correctly
    Tool: Bash + Playwright
    Steps:
      1. Verify SVG files exist in public/images/ or src/components/icons/
      2. Run `bun build` — success
      3. Navigate to homepage, verify service cards show icons (not emoji)
      4. Navigate to a service page, verify image placeholder renders
    Expected Result: Clean SVG icons, functional image placeholders
    Evidence: .sisyphus/evidence/task-21-svg-icons.png
  ```

  **Commit**: YES (groups with Wave 4)
  - Message: `feat(visual): SVG service icons and mood image integration`
  - Files: `public/images/icons/`, `src/components/ui/MoodImage.tsx`
  - Pre-commit: `bun build`

---

- [ ] 22. Mobile Optimization Pass

  **What to do**:
  - Systematic responsive check across ALL pages at 375px, 768px, 1024px, 1440px
  - Fix any layout issues: horizontal scroll, overlapping elements, unreadable text
  - Ensure hero stacks correctly on mobile (text above, full width)
  - Ensure bento grid stacks to single column on mobile
  - Ensure all service pages are readable on mobile
  - Ensure WhatsApp CTA doesn't obstruct content on mobile
  - Ensure nav hamburger menu works on all pages
  - Taste skill mobile override: "For levels 4-10, any asymmetric layout above md: MUST aggressively fall back to single-column (w-full, px-4, py-8) on viewports < 768px"
  - Test touch targets: all interactive elements >= 44x44px
  - NO horizontal scrolling on any page at any viewport

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`taste`, `frontend-design`, `playwright`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 20-21, 23-24)
  - **Parallel Group**: Wave 4
  - **Blocks**: None
  - **Blocked By**: Tasks 8, 9, 13, 14-19 (all pages must exist)

  **References**:
  - `.opencode/skills/taste/SKILL.md:86` — MOBILE OVERRIDE: aggressive single-column fallback below 768px
  - `.opencode/skills/taste/SKILL.md:31` — Viewport stability: min-h-[100dvh] not h-screen
  - All page components from previous tasks

  **QA Scenarios**:
  ```
  Scenario: All pages responsive without horizontal scroll
    Tool: Playwright
    Steps:
      1. For each page (/, /soluciones/, /soluciones/documentos, /soluciones/appcc, /soluciones/whatsapp, /soluciones/dashboard, /soluciones/proveedores, /soluciones/automatizacion, /nosotros/):
         a. Set viewport to 375px
         b. Assert document.documentElement.scrollWidth <= viewport.width (no horizontal scroll)
         c. Screenshot
      2. For each page at 768px: screenshot
      3. For each page at 1440px: screenshot
    Expected Result: Zero horizontal scroll at any viewport, clean stacking on mobile
    Evidence: .sisyphus/evidence/task-22-mobile-{page}-{viewport}.png
  ```

  **Commit**: YES (groups with Wave 4)
  - Message: `fix(responsive): mobile optimization pass across all pages`
  - Pre-commit: `bun build`

---

- [ ] 23. SEO + Meta Tags for New Pages

  **What to do**:
  - Add proper SEO meta tags to all new pages using the existing SEO.astro component
  - Each page needs: title, description, og:title, og:description, og:image
  - Update StructuredData.astro if needed for new page types
  - Titles: NO hyphens (e.g., "Agente de Documentos | Cadly Labs" not "Agente-de-Documentos")
  - Descriptions: Spanish, brand voice, benefit-focused, < 160 chars
  - Add new pages to sitemap configuration
  - Verify all page titles across the site have NO hyphens

  **Must NOT do**:
  - Do NOT use hyphens in ANY title, description, or meta tag
  - Do NOT use English in meta tags

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`taste`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 20-22, 24)
  - **Parallel Group**: Wave 4
  - **Blocks**: None
  - **Blocked By**: Tasks 5, 14-19 (pages must exist)

  **References**:
  - `src/components/SEO.astro` — Existing SEO component pattern
  - `src/components/StructuredData.astro` — JSON-LD structured data
  - `astro.config.mjs` — Sitemap config

  **QA Scenarios**:
  ```
  Scenario: All pages have proper meta tags without hyphens
    Tool: Bash
    Steps:
      1. Run `bun build`
      2. For each built HTML in dist/: grep for <title> tag content
      3. Assert no hyphen character in any <title> tag
      4. Assert all <title> tags contain 'Cadly Labs'
      5. Assert all pages have og:description meta tag
    Expected Result: Clean SEO, no hyphens in titles
    Evidence: .sisyphus/evidence/task-23-seo-audit.txt
  ```

  **Commit**: YES (groups with Wave 4)
  - Message: `feat(seo): meta tags for all new pages, no hyphens`
  - Pre-commit: `bun build`

---

- [ ] 24. HowWeWork + WhyCadly Section Refresh

  **What to do**:
  - Update `src/components/sections/HowWeWork.tsx` content to reflect consultancy positioning:
    1. Charlamos (discovery call) → 2. Proponemos (diagnosis + proposal) → 3. Montamos (build solution) → 4. Arrancamos (launch + iterate)
  - Update `src/components/sections/WhyCadly.astro` differentiators to match zettelkasten:
    1. Conocemos el sector (industry expertise)
    2. No te pedimos que migres (no migration)
    3. En 3 semanas tienes resultados (speed)
    4. Tambi\u00e9n automatizamos lo que a\u00fan no imaginas (breadth/vision)
  - Ensure serif+sans mixing is prominent in section headings
  - Update any text with hyphens to remove them
  - Light visual polish (not full redesign — these sections work, just need content alignment)

  **Must NOT do**:
  - Do NOT completely redesign these sections (just content + minor visual update)
  - Do NOT change the 4-step / 4-differentiator structure

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`taste`, `frontend-design`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 20-23)
  - **Parallel Group**: Wave 4
  - **Blocks**: None
  - **Blocked By**: Task 1

  **References**:
  - `src/components/sections/HowWeWork.tsx` — Current 4-step timeline with tracing beam
  - `src/components/sections/WhyCadly.astro` — Current 4 differentiators
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/strategy/website-structure.md` — Section content: How We Work steps, Why Cadly differentiators
  - `/Users/danik/zettelkasten/40 Projects/CadlyLabs/brand/identity.md` — Differentiators vs competitors

  **QA Scenarios**:
  ```
  Scenario: Sections reflect consultancy positioning
    Tool: Playwright
    Steps:
      1. Navigate to homepage, scroll to HowWeWork
      2. Assert 4 steps visible with updated copy ('Charlamos', 'Proponemos', 'Montamos', 'Arrancamos')
      3. Scroll to WhyCadly
      4. Assert 4 differentiators visible
      5. Assert no hyphens in any section text
    Expected Result: Updated content matching zettelkasten
    Evidence: .sisyphus/evidence/task-24-sections-refresh.png
  ```

  **Commit**: YES (groups with Wave 4)
  - Message: `feat(sections): HowWeWork and WhyCadly content alignment`
  - Files: `src/components/sections/HowWeWork.tsx`, `src/components/sections/WhyCadly.astro`
  - Pre-commit: `bun build`

---

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Rejection → fix → re-run.

- [ ] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, curl endpoint, run command). For each "Must NOT Have": search codebase for forbidden patterns (centered hero text, 3-col equal cards, hyphens in text, emojis, h-screen, linear easing, purple/blue glows, Inter font). Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [ ] F2. **Code Quality Review** — `unspecified-high`
  Run `bun build`. Review all changed files for: `as any`/`@ts-ignore`, empty catches, console.log in prod, commented-out code, unused imports. Check AI slop: excessive comments, over-abstraction, generic names. Verify Tailwind v4 syntax used correctly. Verify `motion` imports (not `framer-motion`). Check taste skill compliance: spring physics, GPU-only animations, isolated client components.
  Output: `Build [PASS/FAIL] | Files [N clean/N issues] | Taste Compliance [N/N rules] | VERDICT`

- [ ] F3. **Real Manual QA** — `unspecified-high` (+ `playwright` skill + `taste` skill)
  Start dev server. Navigate every page: /, /soluciones/, /soluciones/documentos, /soluciones/appcc, /soluciones/whatsapp, /soluciones/dashboard, /soluciones/proveedores, /soluciones/automatizacion, /nosotros/. Screenshot each at 375px, 768px, 1440px. Verify: breathing gradient animates, bento cards have micro-animations, WhatsApp CTA visible, Calendly link works, no hyphens in any visible text, no emojis, asymmetric hero layout, serif+sans typography mixing. Test cross-page navigation (ClientRouter transitions).
  Output: `Pages [N/N render] | Viewports [N/N] | Animations [N/N] | Content [hyphens: N, emojis: N] | VERDICT`

- [ ] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", read actual diff. Verify 1:1 — everything in spec was built, nothing beyond spec was built. Check taste skill constraints: anti-center hero, no 3-col equal cards, spring physics, Bento 2.0 patterns. Verify all 6 service pages have content following template (Hero → How it works → Visual → Results → CTA). Detect cross-task contamination. Flag unaccounted changes.
  Output: `Tasks [N/N compliant] | Contamination [CLEAN/N issues] | Unaccounted [CLEAN/N files] | VERDICT`

---

## Commit Strategy

| Wave | Commit Message | Files | Pre-commit |
|------|---------------|-------|------------|
| 1 | `feat(foundation): design tokens, service data model, breathing gradient, layout updates` | global.css, services.ts, RadialBreathing.tsx, Layout.astro, WhatsAppCTA.tsx, Navbar.tsx, solution-page template | `bun build` |
| 2 | `feat(homepage): asymmetric hero, bento grid, success story, contact, nosotros` | Hero.tsx, ServicesBento.tsx, SuccessStory.tsx, Contact.tsx, Footer.astro, nosotros.astro | `bun build` |
| 3 | `feat(soluciones): 6 individual service pages` | soluciones/[slug].astro + 6 page content files | `bun build` |
| 4 | `feat(polish): soluciones index, SVG icons, mobile pass, SEO, section refresh` | soluciones/index.astro, SVG assets, meta tags, HowWeWork, WhyCadly | `bun build` |

---

## Success Criteria

### Verification Commands
```bash
bun build                           # Expected: zero errors, clean static output
bun dev                             # Expected: dev server starts at localhost:4321
```

### Final Checklist
- [ ] All 6 service pages accessible at /soluciones/{slug}
- [ ] /nosotros/ page renders with team + founding story
- [ ] /soluciones/ index shows all 6 services
- [ ] Hero: white breathing gradient + asymmetric text layout
- [ ] Bento grid: 6 services, asymmetric, animated cards
- [ ] WhatsApp CTA floating on all pages
- [ ] Calendly link in contact section
- [ ] No hyphens in ANY visible text content
- [ ] No emojis anywhere
- [ ] All pages responsive at 375px, 768px, 1024px, 1440px
- [ ] Spring physics on all animations
- [ ] Serif (Libre Baskerville) + sans (Manrope) mixing prominent in typography
- [ ] All Spanish content following brand voice
- [ ] `bun build` succeeds
