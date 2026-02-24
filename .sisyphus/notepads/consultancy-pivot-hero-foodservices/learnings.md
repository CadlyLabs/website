# Learnings

## 2026-02-24 Session Start

### Stack
- Astro 5 + React 19 + Tailwind CSS v4
- Static build (GitHub Pages) — no server-side features
- `bun build` for verification

### Brand Voice Constraints (CRITICAL)
- Always "tú" not "usted"
- No buzzwords: "sinergia", "transformación digital", "innovador", "escalable", "disruptivo"
- Speak in benefits, be specific
- Direct, practical, confident, human

### Key Copy Decisions
- Hero headline: "Lo que tu ERP no cubre, lo cubrimos nosotros"
- Hero subtitle: "Documentos, trazabilidad, pedidos — lo que te quite tiempo, lo automatizamos"
- Hero badge: FROZEN — "Tecnología que entiende tu día a día"
- Hero CTA: update "Mira cómo funciona" to consultancy framing
- FoodServices subtitle: "Cada negocio tiene sus retos. Estos son los que más resolvemos."
- Callout block: soft/light style (bg-brand-50, border-brand-200)

### Scope Boundaries
- ONLY Hero.tsx and FoodServices.tsx
- DO NOT touch: APPCCDashboardVisual, DocumentScannerVisual internals
- DO NOT touch: section IDs, card CTAs, animations, imports
- DO NOT add: new files, components, dependencies

## Task 1: Hero.tsx Copy Update — COMPLETED

### Changes Applied
- **h1 (line 49)**: "Gana dos horas al día olvidándote del papeleo" → "Lo que tu ERP no cubre, lo cubrimos nosotros"
- **subtitle (line 58)**: "Una herramienta que tu equipo aprende a usar en diez minutos. Controla el APPCC y la trazabilidad por lote sin complicaciones y desde el móvil." → "Documentos, trazabilidad, pedidos — lo que te quite tiempo, lo automatizamos"
- **CTA (line 74)**: "Mira cómo funciona" → "Mira lo que hacemos"

### CTA Rationale
- Kept "Mira" verb for familiarity
- Shifted from "how it works" (product focus) to "what we do" (consultancy focus)
- Natural Spanish, no buzzwords
- Scrolls to #soluciones (solutions section) — invitation to explore

### Verification
✅ All structural elements intact (imports, animations, section IDs, scroll targets)
✅ Badge and secondary CTA frozen as required
✅ No buzzwords, no hyphens, "tú" throughout
✅ LSP diagnostics: no errors
✅ Brand voice: Direct, practical, confident, human

### Evidence Files
- `.sisyphus/evidence/task-1-copy-verification.txt`
- `.sisyphus/evidence/task-1-structure-verification.txt`
