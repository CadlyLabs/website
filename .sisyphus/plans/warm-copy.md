# Warm Up Copy + De-emphasize Non-Food (Issues #8 + #6)

## TL;DR

> **Quick Summary**: Full copy rewrite across all website sections — kill enterprise SaaS voice, adopt warm colloquial Spanish for food industry SMB owners. Simultaneously collapse non-food solutions to de-emphasize breadth and sharpen food-first positioning. Reposition as "AI team that chose food first" not "food-only APPCC company."
>
> **Deliverables**:
> - All 8 section components rewritten with warm, direct Spanish
> - "También automatizamos" grid collapsed to single de-emphasized line
> - SEO meta tags + structured data aligned with new positioning
> - Marketing skills installed for future use
>
> **Estimated Effort**: Medium
> **Parallel Execution**: YES — 3 waves
> **Critical Path**: Skills install → Core rewrite (7 parallel) → SEO alignment → Verification

---

## Context

### Original Request
Issue #8: Current copy reads like enterprise SaaS. Target audience is food industry SMB owners who want plain Spanish, trust, and directness. Full rewrite with positioning tweak: "AI team that chose food first."

Issue #6: De-emphasize non-food solutions (orders, picking, routes). Collapse "También automatizamos" into minimized section. Keep capability breadth without diluting food focus.

### Interview Summary
**Key Discussions**:
- **Rewrite depth**: Full — rethink all headlines, subtitles, CTAs, badges (not just jargon swap)
- **CTA decision**: "Agendar consultoría" → "¿Hablamos?" for primary contact CTAs
- **Skills**: Load `copywriting` + `copy-editing` from coreyhaines31/marketingskills
- **Sacred copy**: Preserve WhyCadly cofounder line + SuccessStory blockquote verbatim
- **WhyCadly heading**: Shift toward "IA de verdad. Resultados en semanas." positioning
- **"IA de verdad" section**: Confirmed = WhyCadly (not a new section)

**Research Findings**:
- Copywriting skill: clarity-over-cleverness framework, CTA formulas, page structure guidance
- Copy-editing skill: 7-sweep framework (Clarity, Voice, So What, Prove It, Specificity, Emotion, +1)
- Brand voice guide (Zettelkasten): comprehensive word swap table, forbidden phrases, tone-by-context

### Metis Review
**Identified Gaps** (addressed):
- **SEO.astro + StructuredData.astro missing from scope** → Added as Wave 3 task
- **Section `id` attributes must be preserved** → Added as guardrail + verification
- **Form `name` attributes must be preserved** → Added as guardrail + verification
- **"Plataforma APPCC Digital" in SuccessStory uses forbidden word** → Flagged for rewrite
- **Visual mock labels (20+ strings in dashboard visuals)** → Excluded from scope (product illustrations, not marketing copy)
- **Contact form validation messages** → Excluded (functional, not marketing)
- **Playwright not installed** → Switched to `bun build` + grep assertions (Path A)
- **CTA funnel differentiation** → Applied default: "¿Hablamos?" for contact CTAs only, exploration CTAs stay differentiated
- **WhyCadly card copy tension with "IA de verdad" heading** → Cards rewritten to bridge AI + food positioning

---

## Work Objectives

### Core Objective
Rewrite all website copy to sound like a trusted industry partner talking to a food business owner, while subtly repositioning Cadly as an AI team that chose food first.

### Concrete Deliverables
- 8 section components with rewritten copy (Hero, FoodServices, SuccessStory, HowWeWork, WhyCadly, Contact, Navbar, Footer)
- Collapsed "También automatizamos" section in FoodServices
- Updated SEO.astro meta tags and StructuredData.astro JSON-LD
- 2 marketing skills installed in `skills/` directory

### Definition of Done
- [ ] `bun build` exits 0
- [ ] Zero forbidden words in changed files (grep verification)
- [ ] Sacred copy preserved verbatim (grep verification)
- [ ] All section `id` attributes intact
- [ ] All form `name` attributes intact
- [ ] New key phrases present in built output

### Must Have
- "tú" register throughout — no "usted"
- Specific numbers preserved or improved (never vaguer than current)
- CTA "¿Hablamos?" on Navbar (desktop + mobile) and Footer
- Hero positions AI/automation broadly, then narrows to food
- WhyCadly heading reflects "IA de verdad" positioning
- "También automatizamos" grid collapsed to de-emphasized format
- No forbidden words: sinergia, transformación digital, disruptivo, escalable, implementación, plataforma

### Must NOT Have (Guardrails)
- **NO changes to section `id` attributes** (`hero`, `soluciones`, `casos`, `proceso`, `contacto`) — Navbar scroll targets depend on these
- **NO changes to form `name` attributes** (`name`, `email`, `details`) — webhook at `n8n.cadlylabs.com/webhook/cadlylabs-form` depends on these
- **NO changes to visual mock data** in APPCCDashboardVisual or DocumentScannerVisual (product illustrations, not marketing copy)
- **NO copy centralization** — keep strings inline in components, don't extract to constants file
- **NO layout/visual/animation changes** — except collapsing "También automatizamos" grid
- **NO i18n infrastructure** — Spanish only
- **NO new dependencies** — except marketing skills (dev tooling, not runtime)
- **NO changes to form validation messages** — functional copy, not marketing
- **NO "AI slop" patterns** — no over-commenting, no generic names, no filler abstractions
- Use brand word swaps: Implementación→Puesta en marcha, Plataforma→Sistema/herramienta, Innovador→Que funciona, Escalable→Que crece contigo

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO (no test framework)
- **Automated tests**: None (content-only changes)
- **Framework**: N/A
- **Verification method**: `bun build` + grep assertions against source and dist

### QA Policy
Every task MUST include agent-executed QA scenarios.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

- **Copy verification**: Use Bash (grep) — assert new copy present, forbidden words absent, sacred copy preserved
- **Build verification**: Use Bash (bun build) — assert exit code 0
- **Structural verification**: Use Bash (grep) — assert section IDs, form names intact
- **Browser QA**: Use dev-browser skill — navigate to localhost:4321, visually verify sections render correctly with new copy

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Setup — 2 parallel):
├── Task 1: Install marketing skills from GitHub [quick]
└── Task 2: Capture "before" state baseline [quick]

Wave 2 (Core rewrite — 7 parallel, MAX THROUGHPUT):
├── Task 3: Hero.tsx copy rewrite [writing]
├── Task 4: FoodServices.tsx copy + collapse grid [unspecified-high]
├── Task 5: HowWeWork.tsx copy rewrite [writing]
├── Task 6: WhyCadly.astro copy rewrite + positioning [writing]
├── Task 7: SuccessStory.astro copy rewrite [writing]
├── Task 8: Contact.tsx copy rewrite [writing]
└── Task 9: Navbar.tsx + Footer.astro CTA + tagline [quick]

Wave 3 (SEO alignment — sequential after Wave 2):
└── Task 10: SEO.astro + StructuredData.astro meta update [quick]

Wave 4 (Verification — 2 parallel):
├── Task 11: Build + grep assertions [quick]
└── Task 12: Copy-editing review pass [writing]

Wave FINAL (After ALL — 4 parallel):
├── Task F1: Plan compliance audit [oracle]
├── Task F2: Code quality review [unspecified-high]
├── Task F3: Browser QA — navigate all sections [unspecified-high]
└── Task F4: Scope fidelity check [deep]

Critical Path: Task 1 → Tasks 3-9 → Task 10 → Task 11 → F1-F4
Parallel Speedup: ~65% faster than sequential
Max Concurrent: 7 (Wave 2)
```

### CTA Mapping (explicit — agents MUST follow)

| Location | Current CTA | New CTA | Rationale |
|----------|-------------|---------|-----------|
| Navbar desktop (line 114) | "Agendar consultoría" | "¿Hablamos?" | User decision |
| Navbar mobile (line 188) | "Agendar consultoría" | "¿Hablamos?" | User decision |
| Footer (line 37) | "Agendar consultoría gratuita" | "¿Hablamos?" | User decision |
| Hero primary (line 74) | "Ver las herramientas" | Rewrite (explorative, not contact) | Keep funnel differentiation |
| Hero secondary (line 81) | "Habla con nosotros" | "¿Hablamos?" | Contact CTA |
| Service cards ×2 (line 316) | "Quiero saber más" | Warm up, keep explorative | Not a contact CTA |
| SuccessStory (line 78) | "Acceder a la demo" | Keep or warm up | Different funnel stage (demo access) |

### Dependency Matrix

| Task | Depends On | Blocks | Wave |
|------|-----------|--------|------|
| 1 | — | 3-9, 12 | 1 |
| 2 | — | F3 | 1 |
| 3-9 | 1 | 10, 11, 12 | 2 |
| 10 | 3-9 | 11 | 3 |
| 11 | 10 | F1-F4 | 4 |
| 12 | 3-9, 1 | F1-F4 | 4 |
| F1-F4 | 11, 12 | — | FINAL |

### Agent Dispatch Summary

- **Wave 1**: **2** — T1 → `quick`, T2 → `quick`
- **Wave 2**: **7** — T3,T5,T6,T7,T8 → `writing` (load `copywriting`), T4 → `unspecified-high` (load `copywriting`), T9 → `quick`
- **Wave 3**: **1** — T10 → `quick`
- **Wave 4**: **2** — T11 → `quick`, T12 → `writing` (load `copy-editing`)
- **FINAL**: **4** — F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high` (load `dev-browser`), F4 → `deep`

---

## TODOs
> Implementation + Test = ONE Task. Never separate.
> EVERY task MUST have: Recommended Agent Profile + Parallelization info + QA Scenarios.
> **A task WITHOUT QA Scenarios is INCOMPLETE. No exceptions.**
> **CRITICAL CONTEXT**: All copy is in Spanish. The brand voice guide, word swap table, and forbidden phrases list are in the brand identity files at `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md` and `identity.md`. Read these BEFORE writing any copy.

- [x] 1. Install marketing skills from GitHub

  **What to do**:
  - Clone/download `copywriting` and `copy-editing` skills from `coreyhaines31/marketingskills` GitHub repo
  - Download `skills/copywriting/SKILL.md` and `skills/copywriting/references/` directory
  - Download `skills/copy-editing/SKILL.md` and `skills/copy-editing/references/` directory
  - Place in project's `skills/copywriting/` and `skills/copy-editing/` directories
  - Verify files are readable

  **Must NOT do**:
  - Don't install npm packages
  - Don't modify existing skills in `skills/` directory

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []
  - Reason: Simple file download, no domain expertise needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Task 2)
  - **Blocks**: Tasks 3-9, 12
  - **Blocked By**: None

  **References**:
  - `https://github.com/coreyhaines31/marketingskills` — source repo
  - `skills/` — project skills directory (has 4 existing skills: baseline-ui, fixing-accessibility, fixing-metadata, fixing-motion-performance)

  **Acceptance Criteria**:
  - [ ] `skills/copywriting/SKILL.md` exists and is readable
  - [ ] `skills/copy-editing/SKILL.md` exists and is readable
  - [ ] Reference files present in both skill directories

  **QA Scenarios:**
  ```
  Scenario: Skills installed correctly
    Tool: Bash
    Steps:
      1. ls -la skills/copywriting/SKILL.md
      2. ls -la skills/copy-editing/SKILL.md
      3. ls skills/copywriting/references/
      4. ls skills/copy-editing/references/
    Expected Result: All files present, non-empty
    Evidence: .sisyphus/evidence/task-1-skills-installed.txt
  ```

  **Commit**: NO (tooling setup, commit with Wave 2)

- [x] 2. Capture "before" state baseline

  **What to do**:
  - Start dev server with `bun dev`
  - Use dev-browser to navigate to localhost:4321
  - Take screenshots of each section: Hero, FoodServices, SuccessStory, HowWeWork, WhyCadly, Contact, Footer
  - Save screenshots to `.sisyphus/evidence/before/`
  - Also capture current copy by grepping key strings from source files

  **Must NOT do**:
  - Don't modify any files
  - Don't leave dev server running after screenshots

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`dev-browser`]
  - `dev-browser`: Browser navigation for screenshots

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Task 1)
  - **Blocks**: F3 (before/after comparison)
  - **Blocked By**: None

  **References**:
  - `src/pages/index.astro` — section order and IDs

  **Acceptance Criteria**:
  - [ ] 7 screenshots saved to `.sisyphus/evidence/before/`
  - [ ] Key strings captured to `.sisyphus/evidence/before/copy-baseline.txt`

  **QA Scenarios:**
  ```
  Scenario: Baseline captured
    Tool: Bash
    Steps:
      1. ls .sisyphus/evidence/before/*.png | wc -l
      2. cat .sisyphus/evidence/before/copy-baseline.txt | head -20
    Expected Result: 7 screenshots, baseline file has current copy strings
    Evidence: .sisyphus/evidence/task-2-baseline-captured.txt
  ```

  **Commit**: NO (evidence only)

- [ ] 3. Hero.tsx — full copy rewrite

  **What to do**:
  - Read brand voice guide at `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md`
  - Read the `copywriting` skill at `skills/copywriting/SKILL.md`
  - Rewrite ALL text strings in `src/components/sections/Hero.tsx`:
    - **Badge** (line 39): "Automatización para la Industria Alimentaria" → something that positions AI broadly then narrows to food. E.g., "IA aplicada a tu negocio alimentario" or similar warm phrasing
    - **H1 headline** (line 49): "El papeleo de siempre, resuelto de una vez." → rewrite with warm, direct tone. Keep benefit-focused.
    - **Subtitle** (line 58): "Software que tu equipo usa desde el primer día..." → rewrite. Remove "Software" (enterprise). Lean into colloquial phrasing. Keep specifics (APPCC, trazabilidad, documentación).
    - **Primary CTA** (line 74): "Ver las herramientas" → rewrite as explorative CTA (NOT "¿Hablamos?" — that's for contact CTAs). Something like "Mira lo que hacemos" or similar.
    - **Secondary CTA** (line 81): "Habla con nosotros" → "¿Hablamos?"
    - **Scroll hint** (line 100): "Descubre más" → warm up if needed
  - Apply positioning tweak: Hero should subtly communicate "AI team that does food" not "food software company"
  - Preserve: `id="hero"`, all className attributes, all motion/animation props

  **Must NOT do**:
  - Don't change `id="hero"`
  - Don't modify animation/motion props
  - Don't use forbidden words (sinergia, transformación digital, disruptivo, escalable, implementación, plataforma)
  - Don't use "usted" register

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`copywriting`]
  - `copywriting`: Conversion copy framework, headline formulas, CTA guidelines

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 4-9)
  - **Blocks**: Tasks 10, 11, 12
  - **Blocked By**: Task 1

  **References**:
  **Pattern References**:
  - `src/components/sections/Hero.tsx` — target file, full content
  **Brand References**:
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md` — tone, word swaps, forbidden phrases
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/identity.md` — positioning, differentiators
  **Skill References**:
  - `skills/copywriting/SKILL.md` — headline formulas, CTA guidelines, above-the-fold framework
  **Issue References**:
  - Issue #8 body (positioning tweak section): Hero should mention AI/automation broadly, then narrow to food

  **Acceptance Criteria**:
  - [ ] All 6 text strings rewritten
  - [ ] `id="hero"` preserved
  - [ ] No forbidden words in file
  - [ ] "tú" register used (no "usted")
  - [ ] Secondary CTA says "¿Hablamos?"
  - [ ] `bun build` passes

  **QA Scenarios:**
  ```
  Scenario: Hero copy is warm and positioned correctly
    Tool: Bash (grep)
    Steps:
      1. grep -F 'Hablamos' src/components/sections/Hero.tsx
      2. grep -iE 'sinergia|transformación digital|disruptivo|escalable|implementación|plataforma' src/components/sections/Hero.tsx
      3. grep -c 'id="hero"' src/components/sections/Hero.tsx
      4. bun build
    Expected Result: (1) 1+ match, (2) 0 matches, (3) 1, (4) exit 0
    Evidence: .sisyphus/evidence/task-3-hero-copy.txt

  Scenario: No enterprise register
    Tool: Bash (grep)
    Steps:
      1. grep -i 'usted' src/components/sections/Hero.tsx
      2. grep -iE 'consultoría|diagnóstico|implementación' src/components/sections/Hero.tsx
    Expected Result: 0 matches for both
    Evidence: .sisyphus/evidence/task-3-hero-no-enterprise.txt
  ```

  **Commit**: YES (group with Wave 2)
  - Message: `content(copy): warm up all section copy — issues #8 + #6`
  - Files: `src/components/sections/Hero.tsx`
  - Pre-commit: `bun build`

- [ ] 4. FoodServices.tsx — copy rewrite + collapse "También automatizamos" (#6)

  **What to do**:
  - Read brand voice guide at `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md`
  - Read the `copywriting` skill at `skills/copywriting/SKILL.md`
  - Rewrite ALL marketing text strings in `src/components/sections/FoodServices.tsx`:
    - **Badge** (line 329): "Nuestros Servicios" → warmer, less corporate. E.g., "Lo que hacemos" or "Tus herramientas"
    - **Section heading** (line 333): "Dos herramientas. Un sector. Tu negocio." → warm up
    - **Section subtitle** (line 336): "Diseñadas para la industria alimentaria española. Sin complicaciones técnicas." → less brochure-like
    - **Card 1 title** (line 263): "Gestión APPCC Digital" → warmer. E.g., "Tu APPCC, sin papeles"
    - **Card 1 subtitle** (line 264-265): rewrite colloquially
    - **Card 1 benefits** (lines 266-269): warm up language
    - **Card 2 title** (line 273): "Procesamiento de Documentos" → warmer. E.g., "Documentos que se procesan solos"
    - **Card 2 subtitle** (line 274): rewrite
    - **Card 2 benefits** (lines 275-279): warm up
    - **Card CTAs** (line 316): "Quiero saber más" → keep explorative but warmer. E.g., "Cuéntame más" or "Enséñame cómo funciona"
  - **STRUCTURAL CHANGE (Issue #6)**: Collapse "También automatizamos" section (lines 349-366):
    - Replace the 2x2 icon grid with a single de-emphasized text line
    - New format: `<p>` tag with text like "También podemos ayudarte con pedidos, picking, rutas e integración ERP." — no icons, no grid
    - Keep it inside the existing `FadeInView` wrapper
    - Remove the `TAMBIEN_ITEMS` constant array and related icon imports (ShoppingCartIcon, PackageIcon, TruckIcon, PlugsConnectedIcon) if no longer used
  - Do NOT modify visual mock data (APPCCDashboardVisual, DocumentScannerVisual internal labels)

  **Must NOT do**:
  - Don't change `id="soluciones"`
  - Don't modify APPCCDashboardVisual or DocumentScannerVisual internal labels
  - Don't change card layout, animation, or styling
  - Don't remove unused ERP_LOGOS — they're used by DocumentScannerVisual
  - Don't use forbidden words

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: [`copywriting`]
  - `copywriting`: Service page copy, benefit framing
  - Reason: `unspecified-high` instead of `writing` because this task includes a structural code change (collapsing the grid)

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 3, 5-9)
  - **Blocks**: Tasks 10, 11, 12
  - **Blocked By**: Task 1

  **References**:
  **Pattern References**:
  - `src/components/sections/FoodServices.tsx` — target file, full content
  - `src/components/sections/FoodServices.tsx:246-251` — `TAMBIEN_ITEMS` constant to remove
  - `src/components/sections/FoodServices.tsx:349-366` — "También automatizamos" section to collapse
  **Brand References**:
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md` — tone, word swaps
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/identity.md:50-70` — food industry platform capabilities (context for what APPCC/docs tools do)
  **Issue References**:
  - Issue #6: De-emphasize non-food solutions. Option 2 (collapsed section).
  - Issue #8 positioning: avoid making site feel ONLY APPCC software

  **Acceptance Criteria**:
  - [ ] All marketing text strings rewritten
  - [ ] `id="soluciones"` preserved
  - [ ] "También automatizamos" grid replaced with single text line
  - [ ] `TAMBIEN_ITEMS` constant and unused icon imports removed
  - [ ] Visual mock data untouched
  - [ ] No forbidden words
  - [ ] `bun build` passes

  **QA Scenarios:**
  ```
  Scenario: FoodServices copy warm + grid collapsed
    Tool: Bash (grep)
    Steps:
      1. grep -c 'id="soluciones"' src/components/sections/FoodServices.tsx
      2. grep -iE 'sinergia|transformación digital|disruptivo|escalable|implementación|plataforma' src/components/sections/FoodServices.tsx
      3. grep -c 'TAMBIEN_ITEMS' src/components/sections/FoodServices.tsx
      4. grep -F 'También podemos' src/components/sections/FoodServices.tsx
      5. grep -F 'Pechuga de pollo' src/components/sections/FoodServices.tsx
      6. bun build
    Expected Result: (1) 1, (2) 0 matches, (3) 0 (removed), (4) 1+ match (new collapsed text), (5) 1 match (mock data preserved), (6) exit 0
    Evidence: .sisyphus/evidence/task-4-foodservices-copy.txt

  Scenario: Unused icon imports cleaned up
    Tool: Bash (grep)
    Steps:
      1. grep -E 'ShoppingCartIcon|PackageIcon|TruckIcon|PlugsConnectedIcon' src/components/sections/FoodServices.tsx
    Expected Result: 0 matches (icons removed since grid is gone)
    Failure Indicators: Any of these icon names still imported
    Evidence: .sisyphus/evidence/task-4-imports-clean.txt
  ```

  **Commit**: YES (group with Wave 2)
  - Message: `content(copy): warm up all section copy — issues #8 + #6`
  - Files: `src/components/sections/FoodServices.tsx`
  - Pre-commit: `bun build`

---


- [ ] 5. HowWeWork.tsx — full copy rewrite

  **What to do**:
  - Read brand voice guide at `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md`
  - Read the `copywriting` skill at `skills/copywriting/SKILL.md`
  - Rewrite ALL text strings in `src/components/sections/HowWeWork.tsx`:
    - **Badge** (line 45): "Proceso" — keep or warm up slightly
    - **Section heading** (line 48): "De la idea al sistema funcionando" → warm up
    - **Section subtitle** (lines 52-53): **KILL** "Implementaciones ágiles con resultados visibles desde el primer mes. Sin sorpresas, sin proyectos interminables." → rewrite completely. Use brand swap: "implementación" → "puesta en marcha". E.g., "Lo montamos rápido, sin sorpresas. Resultados desde el primer mes."
    - **Step 1 title** (line 10): "Diagnóstico gratuito" → warmer. E.g., "Te escuchamos" or "Miramos tu caso"
    - **Step 1 desc** (line 12): "Analizamos tus procesos actuales, identificamos cuellos de botella..." → less consultant-speak
    - **Step 2 title** (line 18): "Propuesta y planificación" → warmer. E.g., "Te decimos qué, cuánto y cuándo"
    - **Step 2 desc** (line 19): "Definimos alcance, tiempos y presupuesto cerrado..." → less formal
    - **Step 3 title** (line 24): "Desarrollo e integración" → warmer. E.g., "Lo montamos" or "Manos a la obra"
    - **Step 3 desc** (line 26): **KILL** "Iteraciones cortas con demos frecuentes" → E.g., "Lo construimos y lo conectamos con lo que ya usas. Te enseñamos avances cada semana."
    - **Step 4 title** (line 32): "Puesta en marcha y soporte" → already OK, maybe warmer
    - **Step 4 desc** (line 33): "Formación a tu equipo..." → "Enseñamos a tu equipo, arrancamos poco a poco..."

  **Must NOT do**:
  - Don't change `id="proceso"`
  - Don't modify TracingBeam component, motion props, or layout structure
  - Don't use forbidden words
  - Key jargon to ELIMINATE: "implementaciones ágiles", "iteraciones cortas", "diagnóstico", "alcance"

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`copywriting`]
  - `copywriting`: Process/how-it-works copy, step frameworks

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 3, 4, 6-9)
  - **Blocks**: Tasks 10, 11, 12
  - **Blocked By**: Task 1

  **References**:
  - `src/components/sections/HowWeWork.tsx` — target file
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md:78-88` — word swap table
  - `skills/copywriting/SKILL.md` — "How It Works" section copy guidance

  **Acceptance Criteria**:
  - [ ] "Implementaciones ágiles" removed
  - [ ] "Iteraciones cortas" removed
  - [ ] All 4 step titles + descriptions rewritten
  - [ ] Section heading + subtitle rewritten
  - [ ] `id="proceso"` preserved
  - [ ] No forbidden words
  - [ ] `bun build` passes

  **QA Scenarios:**
  ```
  Scenario: Jargon eliminated from HowWeWork
    Tool: Bash (grep)
    Steps:
      1. grep -iE 'implementacion|iteracion' src/components/sections/HowWeWork.tsx
      2. grep -iE 'ágil|diagnóstico|alcance' src/components/sections/HowWeWork.tsx
      3. grep -c 'id="proceso"' src/components/sections/HowWeWork.tsx
      4. bun build
    Expected Result: (1) 0 matches, (2) 0 matches, (3) 1, (4) exit 0
    Evidence: .sisyphus/evidence/task-5-howwework-copy.txt
  ```

  **Commit**: YES (group with Wave 2)
  - Message: `content(copy): warm up all section copy — issues #8 + #6`
  - Files: `src/components/sections/HowWeWork.tsx`

- [ ] 6. WhyCadly.astro — copy rewrite + "IA de verdad" positioning

  **What to do**:
  - Read brand voice guide at `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md`
  - Rewrite text in `src/components/sections/WhyCadly.astro`:
    - **Section heading** (line 41): "Por qué empresas alimentarias confían en nosotros" → shift toward "IA de verdad. Resultados en semanas." positioning. Communicate "we're an AI team" not just "food software"
    - **Section subtitle** (line 44): "Nacimos resolviendo los problemas que tú vives cada día en tu negocio." → punchier, bridges AI + food. E.g., "Somos un equipo de IA que empezó donde tú estás: en la industria alimentaria."
    - **Card 1 desc** (line 10): **SACRED** — "Nuestro cofundador tenía una sala de despiece..." → PRESERVE VERBATIM
    - **Card titles/descriptions** (lines 9-33): warm up lightly, bridge AI + food positioning

  **Must NOT do**:
  - **DO NOT MODIFY the cofounder line** (Card 1 desc, line 10) — SACRED COPY
  - Don't change section structure or card layout
  - Don't make it sound like "generic AI company" — food-first is the differentiator

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`copywriting`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 3-5, 7-9)
  - **Blocks**: Tasks 10, 11, 12
  - **Blocked By**: Task 1

  **References**:
  - `src/components/sections/WhyCadly.astro` — target file
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/identity.md:85-107` — differentiators and philosophy
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md:57-73` — key messages
  - Issue #8 body: "Somos un equipo de IA que empezó resolviendo los problemas de la industria alimentaria"

  **Acceptance Criteria**:
  - [ ] Heading reflects "IA de verdad" positioning
  - [ ] Cofounder line preserved VERBATIM
  - [ ] No forbidden words
  - [ ] `bun build` passes

  **QA Scenarios:**
  ```
  Scenario: WhyCadly positioning + sacred copy
    Tool: Bash (grep)
    Steps:
      1. grep -F 'Nuestro cofundador tenía una sala de despiece' src/components/sections/WhyCadly.astro
      2. grep -iE 'sinergia|transformación digital|disruptivo|escalable|implementación|plataforma' src/components/sections/WhyCadly.astro
      3. bun build
    Expected Result: (1) 1 match, (2) 0 matches, (3) exit 0
    Evidence: .sisyphus/evidence/task-6-whycadly-copy.txt
  ```

  **Commit**: YES (group with Wave 2)
  - Files: `src/components/sections/WhyCadly.astro`

- [ ] 7. SuccessStory.astro — copy rewrite

  **What to do**:
  - Rewrite text in `src/components/sections/SuccessStory.astro`:
    - **Badge** (line 18): "Casos de Éxito" → warmer. E.g., "Esto ya funciona" or "Un ejemplo real"
    - **Heading** (line 20): "Resultados que hablan por sí solos" → less generic
    - **"Plataforma APPCC Digital"** (line 57): MUST replace "Plataforma" → "Sistema" per brand guide
    - **Case description** (lines 60-61): warm up, more colloquial
    - **Blockquote** (lines 62-64): **SACRED** — PRESERVE VERBATIM
    - **Results list** (lines 6-11): warm phrasing, PRESERVE numbers

  **Must NOT do**:
  - **DO NOT MODIFY the blockquote** — SACRED COPY
  - Don't change `id="casos"`
  - Don't use "plataforma"

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`copywriting`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocked By**: Task 1

  **References**:
  - `src/components/sections/SuccessStory.astro` — target file
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md:78-88` — word swap table

  **Acceptance Criteria**:
  - [ ] Blockquote preserved VERBATIM
  - [ ] "Plataforma" replaced
  - [ ] Result numbers preserved
  - [ ] `id="casos"` preserved
  - [ ] `bun build` passes

  **QA Scenarios:**
  ```
  Scenario: SuccessStory sacred copy + forbidden words
    Tool: Bash (grep)
    Steps:
      1. grep -F 'Antes perdíamos horas buscando papeles' src/components/sections/SuccessStory.astro
      2. grep -i 'plataforma' src/components/sections/SuccessStory.astro
      3. grep -F '80%' src/components/sections/SuccessStory.astro
      4. bun build
    Expected Result: (1) 1 match, (2) 0 matches, (3) 1+ match, (4) exit 0
    Evidence: .sisyphus/evidence/task-7-successstory-copy.txt
  ```

  **Commit**: YES (group with Wave 2)
  - Files: `src/components/sections/SuccessStory.astro`

- [ ] 8. Contact.tsx — copy rewrite

  **What to do**:
  - Rewrite marketing text in `src/components/sections/Contact.tsx`:
    - **Section heading** (line 119): warm up
    - **Trust badges** (lines 18-22): "Análisis personalizado" → "Miramos tu caso" or similar
    - **Success modal** (lines 277-281): "Mensaje enviado" → "¡Recibido!", warm up body text
  - Do NOT change form `name` attributes, webhook URL, or validation messages

  **Must NOT do**:
  - **DO NOT CHANGE** form `name` attributes or webhook URL
  - Don't change validation messages
  - Don't change `id="contacto"`

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`copywriting`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocked By**: Task 1

  **References**:
  - `src/components/sections/Contact.tsx` — target file
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md:93-110` — conversation openers

  **Acceptance Criteria**:
  - [ ] Form `name` attributes preserved (3 total)
  - [ ] Webhook URL unchanged
  - [ ] `id="contacto"` preserved
  - [ ] `bun build` passes

  **QA Scenarios:**
  ```
  Scenario: Contact form integrity
    Tool: Bash (grep)
    Steps:
      1. grep -cE 'name="(name|email|details)"' src/components/sections/Contact.tsx
      2. grep -F 'n8n.cadlylabs.com/webhook/cadlylabs-form' src/components/sections/Contact.tsx
      3. grep -c 'id="contacto"' src/components/sections/Contact.tsx
      4. bun build
    Expected Result: (1) 3, (2) 1 match, (3) 1, (4) exit 0
    Evidence: .sisyphus/evidence/task-8-contact-copy.txt
  ```

  **Commit**: YES (group with Wave 2)
  - Files: `src/components/sections/Contact.tsx`

- [ ] 9. Navbar.tsx + Footer.astro — CTA + tagline rewrite

  **What to do**:
  - **Navbar.tsx**: Desktop CTA (line 114) + Mobile CTA (line 188): "Agendar consultoría" → "¿Hablamos?"
  - **Footer.astro**: CTA (line 37): "Agendar consultoría gratuita" → "¿Hablamos?". Tagline (line 22): "Automatización inteligente para la industria alimentaria." → warmer, aligned with AI-first positioning
  - Don't change nav hrefs, scroll logic, email link, or logo

  **Recommended Agent Profile**: `quick`, Skills: []

  **Parallelization**: Wave 2 (parallel) | Blocked By: Task 1

  **References**: `src/components/sections/Navbar.tsx:114,188`, `src/components/sections/Footer.astro:22,37`

  **Acceptance Criteria**:
  - [ ] All 3 "Agendar consultoría" instances → "¿Hablamos?"
  - [ ] Footer tagline rewritten
  - [ ] Nav hrefs preserved
  - [ ] `bun build` passes

  **QA Scenarios:**
  ```
  Scenario: CTAs updated, nav intact
    Tool: Bash (grep)
    Steps:
      1. grep -i 'consultoría' src/components/sections/Navbar.tsx src/components/sections/Footer.astro
      2. grep -c 'Hablamos' src/components/sections/Navbar.tsx
      3. grep -c 'Hablamos' src/components/sections/Footer.astro
      4. bun build
    Expected Result: (1) 0 matches, (2) 2, (3) 1, (4) exit 0
    Evidence: .sisyphus/evidence/task-9-nav-footer.txt
  ```

  **Commit**: YES (group with Wave 2)
  - Files: `Navbar.tsx`, `Footer.astro`

- [ ] 10. SEO.astro + StructuredData.astro — meta alignment

  **What to do**:
  - Update meta title, description, keywords in SEO component to match new positioning
  - Update JSON-LD descriptions in StructuredData component
  - Align with final Hero + WhyCadly copy from Wave 2
  - Don't change URL structures or schema.org types

  **Recommended Agent Profile**: `quick`, Skills: []

  **Parallelization**: Wave 3 (sequential) | Blocked By: Tasks 3-9

  **References**: `src/components/SEO.astro` or `src/layouts/Layout.astro`, `src/components/StructuredData.astro`

  **Acceptance Criteria**:
  - [ ] Meta title + description updated
  - [ ] JSON-LD descriptions updated
  - [ ] No forbidden words
  - [ ] `bun build` passes

  **QA Scenarios:**
  ```
  Scenario: SEO tags clean
    Tool: Bash (grep)
    Steps:
      1. grep -riE 'plataforma|implementación|sinergia' src/components/SEO.astro src/components/StructuredData.astro src/layouts/Layout.astro 2>/dev/null
      2. bun build
    Expected Result: (1) 0 matches, (2) exit 0
    Evidence: .sisyphus/evidence/task-10-seo.txt
  ```

  **Commit**: YES
  - Message: `content(seo): align meta tags with warm copy positioning`
  - Files: SEO/StructuredData files

- [ ] 11. Build verification + grep assertions

  **What to do**: Run ALL verification commands from Success Criteria. Capture evidence. Report failures.

  **Recommended Agent Profile**: `quick`, Skills: []

  **Parallelization**: Wave 4 | Blocked By: Task 10

  **QA Scenarios:**
  ```
  Scenario: Full verification suite
    Tool: Bash
    Steps: Run all commands from Success Criteria section
    Expected Result: All pass
    Evidence: .sisyphus/evidence/task-11-verification.txt
  ```

  **Commit**: NO

- [ ] 12. Copy-editing review pass

  **What to do**:
  - Load `copy-editing` skill, read ALL 8 modified section files
  - Apply 7-sweep framework: Clarity, Voice/Tone, So What, Prove It, Specificity, Emotion, Polish
  - Check cross-section voice consistency
  - Make corrections directly, run `bun build`
  - Don't restructure components, modify sacred copy, or change IDs/form attributes

  **Recommended Agent Profile**: `writing`, Skills: [`copy-editing`]

  **Parallelization**: Wave 4 (parallel with Task 11) | Blocked By: Tasks 3-9

  **References**: `skills/copy-editing/SKILL.md`, all section files, `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md`

  **Acceptance Criteria**:
  - [ ] 7 sweeps completed
  - [ ] Cross-section voice consistent
  - [ ] No forbidden words after corrections
  - [ ] `bun build` passes

  **QA Scenarios:**
  ```
  Scenario: Post-edit clean
    Tool: Bash (grep)
    Steps:
      1. grep -riE 'sinergia|transformación digital|disruptivo|escalable|implementación|plataforma|consultoría' src/components/sections/*.{tsx,astro}
      2. bun build
    Expected Result: (1) 0 matches, (2) exit 0
    Evidence: .sisyphus/evidence/task-12-copyedit.txt
  ```

  **Commit**: YES
  - Message: `content(copy): copy-editing review pass`

## Final Verification Wave

> 4 review agents run in PARALLEL. ALL must APPROVE. Rejection → fix → re-run.

- [ ] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (grep source files for key phrases, check section IDs, check CTA text). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [ ] F2. **Code Quality Review** — `unspecified-high`
  Run `bun build`. Review all changed files for: broken JSX, unclosed tags, missing imports, TypeScript errors. Check that no structural code was accidentally modified (only string content should change, except FoodServices collapse). Verify no `as any` or `@ts-ignore` introduced.
  Output: `Build [PASS/FAIL] | Files [N clean/N issues] | VERDICT`

- [ ] F3. **Browser QA** — `unspecified-high` + `dev-browser` skill
  Start dev server (`bun dev`). Navigate to localhost:4321. Scroll through ALL sections. Verify: copy renders correctly (no broken Spanish, no English fragments), "También automatizamos" is collapsed, CTA buttons show correct text, all sections visible and properly laid out. Take screenshots of each section. Save to `.sisyphus/evidence/final-qa/`.
  Output: `Sections [N/N rendered] | CTAs [N/N correct] | Collapse [OK/FAIL] | VERDICT`

- [ ] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", read actual file changes. Verify 1:1 — everything in spec was changed, nothing beyond spec was changed. Check sacred copy preserved verbatim. Check section IDs unchanged. Check form `name` attributes unchanged. Check visual mock data untouched. Flag unaccounted changes.
  Output: `Tasks [N/N compliant] | Sacred [PRESERVED/VIOLATED] | IDs [INTACT/BROKEN] | VERDICT`

---

## Commit Strategy

- **Wave 2 commit**: `content(copy): warm up all section copy — issues #8 + #6` — all section files
- **Wave 3 commit**: `content(seo): align meta tags with warm copy positioning` — SEO.astro, StructuredData.astro
- Pre-commit: `bun build`

---

## Success Criteria

### Verification Commands
```bash
bun build                          # Expected: exit 0
# Forbidden words absent:
grep -riE "sinergia|transformación digital|disruptivo|escalable" src/components/sections/*.{tsx,astro}  # Expected: 0 matches
grep -ri "implementación" src/components/sections/*.{tsx,astro}  # Expected: 0 matches
grep -ri "plataforma" src/components/sections/*.{tsx,astro}  # Expected: 0 matches
# Sacred copy preserved:
grep -F "Nuestro cofundador tenía una sala de despiece" src/components/sections/WhyCadly.astro  # Expected: 1 match
grep -F "Antes perdíamos horas buscando papeles para cada inspección" src/components/sections/SuccessStory.astro  # Expected: 1 match
# Section IDs intact:
grep -oE 'id="(hero|soluciones|casos|proceso|contacto)"' src/components/sections/*.{tsx,astro} src/pages/index.astro  # Expected: 5 IDs
# Form fields intact:
grep -cE 'name="(name|email|details)"' src/components/sections/Contact.tsx  # Expected: 3
# New key phrases:
grep -F "Hablamos" dist/index.html  # Expected: 3+ matches
```

### Final Checklist
- [ ] All "Must Have" present
- [ ] All "Must NOT Have" absent
- [ ] `bun build` passes
- [ ] Issues #6 and #8 closeable
