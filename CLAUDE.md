# Cadly Labs Website - Agent Instructions

## Quick Context

**What**: Marketing website for Cadly Labs - AI automation agency for Spanish SMBs.  
**Stack**: Astro + React + Tailwind CSS v4.  
**Deploy**: GitHub Pages (static build).  
**URL**: https://cadlylabs.com

---

## Commands

```bash
bun install     # Install dependencies
bun dev         # Dev server at localhost:4321
bun build       # Build static site to ./dist/
bun preview     # Preview production build
```

---

## Architecture at a Glance

```
src/
├── pages/index.astro      # Single page (landing)
├── layouts/Layout.astro   # Base HTML, meta, fonts
├── components/
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   ├── ui/                # Reusable primitives (Input, Button)
│   ├── animations/        # FadeInView, StaggerContainer
│   └── kokonutui/         # Special effects (FloatingPaths)
├── lib/utils.ts           # cn() helper
└── styles/global.css      # Tailwind theme + CSS vars
```

### Hydration Strategy

| Pattern | When to Use |
|---------|-------------|
| `client:load` | Above-the-fold interactive (Navbar, Hero) |
| `client:visible` | Below-the-fold interactive (Services, Contact) |
| No directive | Static Astro components (Footer, HowWeWork) |

---

## Key Patterns

### Path Aliases
```typescript
import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/animations/FadeInView";
// "@/*" → "./src/*"
```

### Class Merging
```typescript
import { cn } from "@/lib/utils";
cn("base-class", condition && "conditional-class", className)
```

### Scroll Animations
```tsx
// Single element
<FadeInView delay={0.2}>
  <div>Fades in when visible</div>
</FadeInView>

// Staggered children
<StaggerContainer staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```

### Section Layout
```html
<section class="bg-white py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Content -->
  </div>
</section>
```

---

## Brand System

### Colors

| Token | Usage |
|-------|-------|
| `brand-500` - `brand-700` | Primary actions, CTAs |
| `brand-50` - `brand-100` | Light backgrounds, badges |
| `surface` | Section backgrounds (light gray) |
| `charcoal` | Footer, dark sections |

### Typography

| Class | Font | Usage |
|-------|------|-------|
| `font-heading` | Libre Baskerville | Headings |
| `font-body` | Manrope | Body text, UI |

### Common Components

```html
<!-- Primary Button -->
<button class="rounded-lg bg-brand-600 px-6 py-3 text-white hover:bg-brand-700">

<!-- Badge -->
<span class="rounded-full bg-brand-100 px-4 py-1.5 text-sm text-brand-700">

<!-- Card -->
<div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm 
            hover:border-brand-200 hover:shadow-lg">
```

---

## Content Guidelines (Spanish)

### Voice
- **Direct**: No fluff, get to the point
- **Practical**: Benefits over features
- **Confident**: We know what we're doing
- **Human**: Real language, not corporate

### DO
- Use "tú" not "usted"
- Speak in benefits: "Ahorra 10 horas/semana"
- Be specific: "3 semanas" not "rápidamente"

### DON'T
- Corporate buzzwords: "sinergia", "transformación digital"
- Tech jargon: "arquitectura transformer", "modelos de deep learning"
- Startup speak: "disruptivo", "escalable", "game-changer"

### Key Messages
- "Automatización inteligente sin cambiar lo que ya funciona"
- "Añadimos capas de inteligencia a lo que ya usas"
- "Sin cambiar de ERP, sin proyectos traumáticos"

---

## Critical Constraints

### DO NOT
- Add server-side features (static-only for GitHub Pages)
- Use `as any`, `@ts-ignore`
- Add new dependencies without explicit request
- Remove or modify `.github/workflows/deploy.yml`
- Change `output: 'static'` in astro.config.mjs

### Contact Form
Currently client-side only. Form submission needs external service (Formspree, Netlify Forms, etc.) - not implemented yet.

### Build Verification
Always run after changes:
```bash
bun build  # Must succeed for deploy
```

---

## Quick Reference

| Need | File |
|------|------|
| Add new section | `src/pages/index.astro` (import + add) |
| Change colors | `src/styles/global.css` (@theme inline) |
| Edit meta/SEO | `src/layouts/Layout.astro` |
| Add animation | Use `FadeInView` from `@/components/animations/` |
| New UI component | `src/components/ui/` |

---

## Related Resources

- **Engineering Standards**: `../.claude/skills/cadly-swe/SKILL.md`
- **Cofounder mindset**: `../.claude/skills/cadly-cofounder/SKILL.md`
- **Brand Identity**: `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/`
- **Architecture Docs**: `./docs/ARCHITECTURE.md`
- **Component Catalog**: `./docs/COMPONENTS.md`
- **Styling Guide**: `./docs/STYLING.md`
