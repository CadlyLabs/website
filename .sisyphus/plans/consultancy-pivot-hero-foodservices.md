# Consultancy Pivot: Hero + FoodServices Copy

## TL;DR

> **Quick Summary**: Pivot 2 homepage sections from "APPCC/traceability tool" to "AI consultancy for food industry." Hero gets new headline, subtitle, CTA. FoodServices gets reframed cards, new section copy, and a promoted callout block.
> 
> **Deliverables**:
> - Updated Hero.tsx with consultancy-focused headline, subtitle, CTA
> - Updated FoodServices.tsx with problem-framed cards, new section copy, styled callout block
> 
> **Estimated Effort**: Short
> **Parallel Execution**: YES — 2 waves
> **Critical Path**: Task 1 + Task 2 (parallel) → Task 3 (verify)

---

## Context

### Original Request
Issues #18 and #19: pivot homepage hero and FoodServices sections from product-focused (APPCC tool) to consultancy-focused (AI consultancy specialized in food industry).

### Interview Summary
**Key Discussions**:
- Hero headline: user picked "Lo que tu ERP no cubre, lo cubrimos nosotros" from 3 proposed alternatives
- Hero subtitle: from issue #18 — "Documentos, trazabilidad, pedidos — lo que te quite tiempo, lo automatizamos"
- Hero badge: explicitly keep as-is
- Hero CTA: update "Mira cómo funciona" to match consultancy pivot
- FoodServices: reframe cards as problems-we-solve, not product cards
- FoodServices: promote buried line to styled callout (soft/light style)
- All unspecified copy (section heading, card titles, subtitles, benefits): delegated to executor with brand voice constraints
- Card links to /soluciones/[slug]: explicitly out of scope

**Research Findings**:
- Brand identity confirms: "Consultoría de IA especializada en industria alimentaria"
- Website structure doc confirms: homepage should mention solutions briefly, "también automatizamos..." line should be PROMINENT
- Voice guidelines: no corporate buzzwords, "tú" not "usted", speak in benefits, be specific
- Solutions catalog: Document Agent and APPCC are current showcases, broader capabilities (WhatsApp-ERP, dashboard, suppliers) exist

### Metis Review
**Identified Gaps** (addressed):
- Card benefits arrays were unspecified → delegated to executor with voice constraints
- Section heading replacement missing → delegated to executor
- Callout block design unspecified → soft/light style confirmed (bg-brand-50, border-brand-200)
- Hero CTA "Mira cómo funciona" slightly product-y → user chose to update
- Animated visual labels (product-specific) → freeze, don't touch

---

## Work Objectives

### Core Objective
Reposition the homepage hero and solutions sections from "we sell APPCC software" to "we're an AI consultancy that solves food industry operational problems."

### Concrete Deliverables
- `src/components/sections/Hero.tsx` — new headline, subtitle, CTA text
- `src/components/sections/FoodServices.tsx` — new badge, heading, subtitle, reframed card data, styled callout block

### Definition of Done
- [ ] `bun build` exits 0
- [ ] Old copy strings removed (verified via grep)
- [ ] New copy strings present (verified via grep)
- [ ] Section IDs unchanged (`id="hero"`, `id="soluciones"`)
- [ ] No new imports or files added

### Must Have
- Hero headline: "Lo que tu ERP no cubre, lo cubrimos nosotros"
- Hero subtitle: "Documentos, trazabilidad, pedidos — lo que te quite tiempo, lo automatizamos"
- Hero badge unchanged: "Tecnología que entiende tu día a día"
- Hero CTA updated to consultancy framing
- FoodServices card titles/subtitles/benefits reframed as problems-we-solve
- Promoted line as styled callout block (soft/light: bg-brand-50/border-brand-200 family)
- All copy follows brand voice: direct, practical, benefits-focused, "tú", no buzzwords

### Must NOT Have (Guardrails)
- DO NOT touch `APPCCDashboardVisual` or `DocumentScannerVisual` component internals (animation, data labels, layout)
- DO NOT touch `ServiceCard` component structure/layout — only the `SERVICE_CARDS` data array changes
- DO NOT touch section `id` attributes (`id="hero"`, `id="soluciones"`)
- DO NOT touch card CTAs ("Cuéntame más" → #contacto)
- DO NOT change Hero secondary CTA ("¿Hablamos?" → #contacto)
- DO NOT add new imports, components, or files
- DO NOT change animation timing, delays, or motion config
- DO NOT add card links to /soluciones/[slug] (future issue #21)
- DO NOT touch Navbar.tsx, index.astro, or any file besides Hero.tsx and FoodServices.tsx
- DO NOT use corporate buzzwords: "sinergia", "transformación digital", "innovador", "escalable", "disruptivo"
- DO NOT use "usted" — always "tú"

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: YES (bun test available)
- **Automated tests**: None — pure copy/styling changes
- **Framework**: N/A

### QA Policy
Every task includes agent-executed QA scenarios.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

- **Build**: Use Bash (`bun build`) — assert exit 0
- **Copy verification**: Use Bash (grep) — assert old strings gone, new strings present
- **Structure preservation**: Use Bash (grep) — assert section IDs and import counts unchanged

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately — both files independent):
├── Task 1: Hero.tsx copy pivot [quick]
└── Task 2: FoodServices.tsx reframe + callout [quick]

Wave 2 (After Wave 1 — verification):
└── Task 3: Build + grep verification [quick]

Wave FINAL (After ALL tasks — review):
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Code quality review (unspecified-high)
├── Task F3: Real QA — Playwright visual check (unspecified-high)
└── Task F4: Scope fidelity check (deep)

Critical Path: Task 1+2 → Task 3 → F1-F4
Parallel Speedup: Tasks 1+2 run simultaneously
Max Concurrent: 2 (Wave 1)
```

### Dependency Matrix

| Task | Depends On | Blocks |
|------|-----------|--------|
| 1 | — | 3 |
| 2 | — | 3 |
| 3 | 1, 2 | F1-F4 |

### Agent Dispatch Summary

- **Wave 1**: **2** — T1 → `quick`, T2 → `quick`
- **Wave 2**: **1** — T3 → `quick`
- **FINAL**: **4** — F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high`, F4 → `deep`

---

## TODOs

- [x] 1. Hero.tsx — pivot copy to consultancy positioning

  **What to do**:
  - Change `<h1>` from "Gana dos horas al día olvidándote del papeleo" to "Lo que tu ERP no cubre, lo cubrimos nosotros"
  - Change subtitle `<p>` from "Una herramienta que tu equipo aprende a usar en diez minutos. Controla el APPCC y la trazabilidad por lote sin complicaciones y desde el móvil." to "Documentos, trazabilidad, pedidos — lo que te quite tiempo, lo automatizamos"
  - Change primary CTA text from "Mira cómo funciona" to consultancy-appropriate phrasing (e.g. "Descubre lo que hacemos", "Mira nuestras soluciones", "Ver soluciones"). Must feel natural in Spanish, match brand voice. NOT "Descubre nuestras innovadoras soluciones" or anything buzzwordy.
  - Leave EVERYTHING else untouched: badge text, secondary CTA "¿Hablamos?", FloatingPaths, animations, section id, scroll behavior

  **Must NOT do**:
  - Change badge text ("Tecnología que entiende tu día a día" stays)
  - Change secondary CTA ("¿Hablamos?" stays)
  - Change animation config or timing
  - Change imports or component structure
  - Add any new elements

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single file, 3 text replacements, no structural changes
  - **Skills**: []
    - No special skills needed for copy replacement
  - **Skills Evaluated but Omitted**:
    - `frontend-design`: No design/layout changes, just text
    - `ui-ux-pro-max`: No UI/UX decisions, just copy

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Task 2)
  - **Blocks**: Task 3
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `src/components/sections/Hero.tsx:49` — Current headline to replace (line 49)
  - `src/components/sections/Hero.tsx:58` — Current subtitle to replace (line 58)
  - `src/components/sections/Hero.tsx:74` — Current CTA text to replace (line 74)

  **Voice/Copy References**:
  - `CLAUDE.md:122-138` — Content guidelines: voice, DO/DON'T for Spanish copy
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md:17-29` — Language DO/DON'T list
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md:40-43` — Website copy tone: "Clear, confident, benefit-focused"
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md:76-88` — Words We Use: replacement table (e.g. "optimización de procesos" → "quitar trabajo manual")
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/identity.md:11-17` — One-line positioning alternatives for reference

  **WHY Each Reference Matters**:
  - Hero.tsx lines: exact locations of the 3 text nodes to change
  - CLAUDE.md: the voice constraints the executor MUST follow when drafting CTA text
  - voice.md: forbidden phrases and replacement words — executor drafting CTA text must check against these

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Old hero copy removed, new copy present
    Tool: Bash (grep)
    Preconditions: Task 1 implementation complete
    Steps:
      1. grep -c "Gana dos horas" src/components/sections/Hero.tsx
      2. Assert: count is 0
      3. grep -c "Lo que tu ERP no cubre" src/components/sections/Hero.tsx
      4. Assert: count is 1
      5. grep -c "lo que te quite tiempo, lo automatizamos" src/components/sections/Hero.tsx
      6. Assert: count is 1
      7. grep -c "Mira cómo funciona" src/components/sections/Hero.tsx
      8. Assert: count is 0
      9. grep -c "Tecnología que entiende tu día a día" src/components/sections/Hero.tsx
      10. Assert: count is 1 (badge preserved)
    Expected Result: All old copy gone, all new copy present, badge unchanged
    Failure Indicators: Any old string found, or badge text missing
    Evidence: .sisyphus/evidence/task-1-copy-verification.txt

  Scenario: Structure preserved — no imports or IDs changed
    Tool: Bash (grep)
    Preconditions: Task 1 implementation complete
    Steps:
      1. grep -c '^import' src/components/sections/Hero.tsx
      2. Assert: count is 4 (unchanged from current)
      3. grep -c 'id="hero"' src/components/sections/Hero.tsx
      4. Assert: count is 1
      5. grep -c '#soluciones' src/components/sections/Hero.tsx
      6. Assert: count is 2 (CTA scroll + bottom arrow)
      7. grep -c '#contacto' src/components/sections/Hero.tsx
      8. Assert: count is 1
    Expected Result: All structural references preserved exactly
    Failure Indicators: Import count changed, section ID missing, scroll targets altered
    Evidence: .sisyphus/evidence/task-1-structure-verification.txt
  ```

  **Evidence to Capture:**
  - [ ] task-1-copy-verification.txt
  - [ ] task-1-structure-verification.txt

  **Commit**: YES
  - Message: `content(hero): pivot copy to AI consultancy positioning`
  - Files: `src/components/sections/Hero.tsx`
  - Pre-commit: `bun build`

---

- [x] 2. FoodServices.tsx — reframe as solution teasers + add callout block

  **What to do**:

  **Section header copy (all 3 elements):**
  - Badge: change from "Para el sector alimentario" to consultancy-framing (e.g. "Nuestras soluciones"). Follow existing badge pattern: `<span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">`
  - Section heading `<h2>`: change from "Menos papeleo. Más control." to problem-focused consultancy heading. Must convey "these are the problems we solve." Reference voice.md for tone.
  - Subtitle `<p>`: change from "Dos herramientas pensadas para carnicerías, salas de despiece y distribuidores. Las pones en marcha en un día." to "Cada negocio tiene sus retos. Estos son los que más resolvemos." (from issue #19)

  **SERVICE_CARDS data array reframe:**
  - Card 1 title: change from "Tu APPCC, sin papeles" to a problem-focused framing (e.g. "¿Inspección mañana? Sin estrés." or "El APPCC te quita tiempo, no debería."). Frame as the PROBLEM, not the product.
  - Card 1 subtitle: reframe from product description to problem-empathy. Must resonate with a food industry owner who hates paperwork.
  - Card 1 benefits (3 items): reframe from feature list to outcome list. Current: "Registros del día en 2 minutos, no en 20" — this is already benefit-ish but too product-specific. Shift to broader value.
  - Card 2 title: change from "Tus albaranes y facturas, solos" to problem framing (e.g. "Datos que se tecean solos" or "Del papel a tu sistema, sin tocar un teclado.")
  - Card 2 subtitle: reframe similarly.
  - Card 2 benefits (3 items): reframe from feature list to outcomes.
  - IMPORTANT: Executor MUST read voice.md (see References) before drafting ANY copy. Check against forbidden phrases list. Use "Words We Use" replacement table.

  **Promoted line → styled callout block:**
  - Remove the current tiny gray line: `<p className="mt-16 text-center text-sm text-gray-400">También automatizamos pedidos, picking, rutas y conexión con tu ERP.</p>`
  - Replace with a styled callout block using soft/light brand tokens. Design spec:
    ```
    Wrapper: rounded-2xl or rounded-3xl (match card corners), bg-brand-50, border border-brand-200
    Padding: p-8 or p-6 sm:p-8 (generous, not cramped)
    Layout: text-center
    Text: text-base sm:text-lg, text-brand-800 or text-gray-800, font-medium
    Content: the promoted line, but rewritten to be a confident statement (not a footnote).
      Current: "También automatizamos pedidos, picking, rutas y conexión con tu ERP."
      Target: Rewrite to feel like a value proposition, not an afterthought. 
      E.g. "Pedidos, picking, rutas, conexión con tu ERP — si te quita tiempo, lo automatizamos."
      Or: "Y esto es solo el principio. Pedidos, rutas, picking, integración con tu ERP — también lo hacemos."
    Optional: Add a small brand icon (SparkleIcon or similar from @phosphor-icons/react) if it fits naturally.
    ```
  - Wrap in `<FadeInView>` to match existing pattern (see L339)
  - Position: after the cards grid div, replacing the old `<p>` — same location, upgraded visual weight

  **Must NOT do**:
  - Touch `APPCCDashboardVisual` or `DocumentScannerVisual` functions (lines 30-140, 142-240)
  - Touch `ServiceCard` component structure (lines 275-313)
  - Change section `id="soluciones"`
  - Change card CTA text "Cuéntame más" or its href="#contacto"
  - Add links to /soluciones/[slug] on cards
  - Change `ERP_LOGOS` array or preload logic
  - Change animation timing/delays on any motion elements
  - Add new component files or new imports beyond what's needed (e.g. if adding SparkleIcon, it's already imported in Hero.tsx — check if FoodServices needs it)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single file, copy changes + one styled block. No complex logic.
  - **Skills**: []
    - No special skills needed
  - **Skills Evaluated but Omitted**:
    - `frontend-design`: The callout is a simple styled div, not a design challenge
    - `ui-ux-pro-max`: No complex UI decisions

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Task 1)
  - **Blocks**: Task 3
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `src/components/sections/FoodServices.tsx:320-321` — Current badge to replace
  - `src/components/sections/FoodServices.tsx:323-325` — Current section heading to replace
  - `src/components/sections/FoodServices.tsx:326-328` — Current subtitle to replace
  - `src/components/sections/FoodServices.tsx:251-273` — `SERVICE_CARDS` data array (titles, subtitles, benefits to reframe)
  - `src/components/sections/FoodServices.tsx:339-343` — Current promoted line to replace with callout block
  - `src/components/sections/FoodServices.tsx:319` — `<FadeInView>` wrapping pattern to follow for callout
  - `src/components/sections/Hero.tsx:37-40` — Badge pattern reference (existing brand badge styling)

  **Voice/Copy References**:
  - `CLAUDE.md:122-138` — Content guidelines: voice, DO/DON'T for Spanish copy
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md:17-29` — Language DO/DON'T
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md:40-43` — Website copy tone
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md:76-88` — Words We Use replacement table
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/voice.md:114-123` — Forbidden phrases (MUST check against)
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/identity.md:5-7` — Positioning: "We don't sell a product. We solve problems."
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/strategy/solutions-catalog.md:9-11` — "We diagnose bottlenecks and build the right solution"
  - `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/strategy/website-structure.md:57-61` — Key homepage principles (solutions mentioned briefly, promoted line prominent, consultancy feel)

  **Design References**:
  - Callout block: use existing brand tokens from `src/styles/global.css` — `bg-brand-50`, `border-brand-200`, `text-brand-800`
  - Match card border radius: existing cards use `rounded-3xl` (see ServiceCard L277)
  - Wrap in `FadeInView` (already imported, see L11)

  **WHY Each Reference Matters**:
  - FoodServices.tsx line refs: exact locations of every text node to change
  - voice.md: CRITICAL for executor drafting copy — contains forbidden phrases, replacement words, tone guidance
  - identity.md + solutions-catalog.md: gives executor the mental model for reframing ("we solve problems, not sell products")
  - website-structure.md: confirms the design intent (prominent promoted line, consultancy feel)

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Old section copy removed, new copy present
    Tool: Bash (grep)
    Preconditions: Task 2 implementation complete
    Steps:
      1. grep -c "Para el sector alimentario" src/components/sections/FoodServices.tsx
      2. Assert: count is 0
      3. grep -c "Menos papeleo" src/components/sections/FoodServices.tsx
      4. Assert: count is 0
      5. grep -c "Dos herramientas pensadas" src/components/sections/FoodServices.tsx
      6. Assert: count is 0
      7. grep -c "Cada negocio tiene sus retos" src/components/sections/FoodServices.tsx
      8. Assert: count is 1
    Expected Result: All old section-level copy replaced
    Failure Indicators: Any old string found or new subtitle missing
    Evidence: .sisyphus/evidence/task-2-section-copy.txt

  Scenario: Card data reframed — old product titles gone
    Tool: Bash (grep)
    Preconditions: Task 2 implementation complete
    Steps:
      1. grep -c "Tu APPCC, sin papeles" src/components/sections/FoodServices.tsx
      2. Assert: count is 0
      3. grep -c "Tus albaranes y facturas, solos" src/components/sections/FoodServices.tsx
      4. Assert: count is 0
      5. grep -c "Registros del día en 2 minutos" src/components/sections/FoodServices.tsx
      6. Assert: count is 0
    Expected Result: All product-focused card copy replaced with problem-focused copy
    Failure Indicators: Any old card title or benefit text still present
    Evidence: .sisyphus/evidence/task-2-card-reframe.txt

  Scenario: Callout block exists — old tiny gray text gone
    Tool: Bash (grep)
    Preconditions: Task 2 implementation complete
    Steps:
      1. grep -c "text-sm text-gray-400" src/components/sections/FoodServices.tsx
      2. Assert: count is 0 (old style class removed)
      3. grep -c "bg-brand-50" src/components/sections/FoodServices.tsx
      4. Assert: count is >= 1 (callout block uses brand background)
      5. grep -c "border-brand-200" src/components/sections/FoodServices.tsx
      6. Assert: count is >= 1 (callout block has brand border)
      7. grep "pedidos\|picking\|rutas\|ERP" src/components/sections/FoodServices.tsx | grep -v "^[[:space:]]*\/\/" | wc -l
      8. Assert: count >= 1 (promoted content still mentions these capabilities)
    Expected Result: Old gray text replaced with styled callout block using brand tokens
    Failure Indicators: Old gray text style present, or brand tokens missing, or promoted content removed entirely
    Evidence: .sisyphus/evidence/task-2-callout-block.txt

  Scenario: Structure preserved — visuals, IDs, imports intact
    Tool: Bash (grep)
    Preconditions: Task 2 implementation complete
    Steps:
      1. grep -c 'id="soluciones"' src/components/sections/FoodServices.tsx
      2. Assert: count is 1
      3. grep -c "APPCCDashboardVisual" src/components/sections/FoodServices.tsx
      4. Assert: count >= 2 (function def + usage in SERVICE_CARDS)
      5. grep -c "DocumentScannerVisual" src/components/sections/FoodServices.tsx
      6. Assert: count >= 2 (function def + usage in SERVICE_CARDS)
      7. grep -c "Cuéntame más" src/components/sections/FoodServices.tsx
      8. Assert: count is 1 (card CTA preserved)
      9. grep -c '#contacto' src/components/sections/FoodServices.tsx
      10. Assert: count >= 1 (CTA link preserved)
    Expected Result: All structural elements preserved
    Failure Indicators: Visual components removed, section ID changed, CTA altered
    Evidence: .sisyphus/evidence/task-2-structure.txt

  Scenario: No forbidden copy patterns
    Tool: Bash (grep)
    Preconditions: Task 2 implementation complete
    Steps:
      1. grep -ic "transformación digital\|sinergia\|innovador\|escalable\|disruptivo\|game-changer\|partner estratégico" src/components/sections/FoodServices.tsx
      2. Assert: count is 0
      3. grep -ic "usted" src/components/sections/FoodServices.tsx
      4. Assert: count is 0
    Expected Result: Zero forbidden phrases in new copy
    Failure Indicators: Any buzzword or "usted" found
    Evidence: .sisyphus/evidence/task-2-voice-check.txt
  ```

  **Evidence to Capture:**
  - [ ] task-2-section-copy.txt
  - [ ] task-2-card-reframe.txt
  - [ ] task-2-callout-block.txt
  - [ ] task-2-structure.txt
  - [ ] task-2-voice-check.txt

  **Commit**: YES
  - Message: `content(foodservices): reframe as solution teasers with consultancy positioning`
  - Files: `src/components/sections/FoodServices.tsx`
  - Pre-commit: `bun build`

---

- [ ] 3. Build verification + cross-file checks

  **What to do**:
  - Run `bun build` and assert exit 0
  - Verify no cross-file references broke (Hero scroll targets, section IDs)
  - Verify no unintended file changes leaked

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Just running commands and checking output
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 2 (after Tasks 1+2)
  - **Blocks**: Final verification wave
  - **Blocked By**: Tasks 1, 2

  **References**:
  - `src/components/sections/Hero.tsx` — must still reference `#soluciones` (2 occurrences)
  - `src/components/sections/FoodServices.tsx` — must still have `id="soluciones"`

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Full build succeeds
    Tool: Bash
    Preconditions: Tasks 1 and 2 complete
    Steps:
      1. Run: bun build
      2. Assert: exit code 0
      3. Assert: output contains "Complete!" or similar success indicator
    Expected Result: Static site builds without errors
    Failure Indicators: Non-zero exit code, TypeScript errors, missing imports
    Evidence: .sisyphus/evidence/task-3-build.txt

  Scenario: Cross-file references intact
    Tool: Bash (grep)
    Preconditions: Build succeeded
    Steps:
      1. grep -c '#soluciones' src/components/sections/Hero.tsx
      2. Assert: count is 2
      3. grep -c 'id="soluciones"' src/components/sections/FoodServices.tsx
      4. Assert: count is 1
      5. git diff --name-only
      6. Assert: only Hero.tsx and FoodServices.tsx modified (no other files changed)
    Expected Result: All cross-references preserved, only target files modified
    Failure Indicators: Missing references, unexpected file changes
    Evidence: .sisyphus/evidence/task-3-crossref.txt
  ```

  **Evidence to Capture:**
  - [ ] task-3-build.txt
  - [ ] task-3-crossref.txt

  **Commit**: NO (verification only)

---

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Rejection → fix → re-run.

- [ ] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (grep for strings, read files). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [ ] F2. **Code Quality Review** — `unspecified-high`
  Run `bun build`. Review Hero.tsx and FoodServices.tsx for: `as any`/`@ts-ignore`, empty catches, console.log, commented-out code, unused imports. Check AI slop: excessive comments, over-abstraction, generic variable names. Verify TypeScript types unchanged.
  Output: `Build [PASS/FAIL] | Files [N clean/N issues] | VERDICT`

- [ ] F3. **Real QA — Visual Check** — `unspecified-high` (+ `playwright` skill)
  Start dev server (`bun dev`). Navigate to localhost:4321. Screenshot the hero section — verify new headline and subtitle render correctly, badge unchanged. Scroll to #soluciones — verify reframed cards render, callout block visible with brand styling. Check mobile viewport (375px width) — verify callout block responsive, text readable.
  Output: `Hero [PASS/FAIL] | FoodServices [PASS/FAIL] | Mobile [PASS/FAIL] | VERDICT`

- [ ] F4. **Scope Fidelity Check** — `deep`
  Run `git diff` on both files. For each changed line: verify it matches plan spec. Flag any changes beyond specified scope: animation timing, imports, component structure, visual component internals. Verify "Must NOT Have" compliance line-by-line. Detect scope creep.
  Output: `Hero [N/N lines compliant] | FoodServices [N/N lines compliant] | Scope creep [CLEAN/N issues] | VERDICT`

---

## Commit Strategy

| Task | Message | Files | Pre-commit |
|------|---------|-------|------------|
| 1 | `content(hero): pivot copy to AI consultancy positioning` | Hero.tsx | `bun build` |
| 2 | `content(foodservices): reframe as solution teasers with consultancy positioning` | FoodServices.tsx | `bun build` |

---

## Success Criteria

### Verification Commands
```bash
bun build                    # Expected: exit 0
grep "Lo que tu ERP" src/components/sections/Hero.tsx  # Expected: 1 match
grep "Gana dos horas" src/components/sections/Hero.tsx  # Expected: 0 matches
grep "Para el sector alimentario" src/components/sections/FoodServices.tsx  # Expected: 0 matches
grep "bg-brand-50" src/components/sections/FoodServices.tsx  # Expected: >= 1 match
grep "text-sm text-gray-400" src/components/sections/FoodServices.tsx  # Expected: 0 matches
```

### Final Checklist
- [ ] All "Must Have" present
- [ ] All "Must NOT Have" absent
- [ ] Build passes
- [ ] Only Hero.tsx and FoodServices.tsx modified
- [ ] Issues #18 and #19 addressed
