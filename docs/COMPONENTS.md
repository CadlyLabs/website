# Components

This document catalogs all components in the Cadly Labs website.

## Page Sections

Main sections that compose the landing page, rendered in order in `src/pages/index.astro`.

### Navbar

| Property | Value |
|----------|-------|
| File | `src/components/sections/Navbar.tsx` |
| Type | React |
| Hydration | `client:load` |

Features:
- Fixed header with scroll-based background change
- Desktop navigation with smooth scroll links
- Mobile slide-out menu with animations
- Active section highlighting via IntersectionObserver

### Hero

| Property | Value |
|----------|-------|
| File | `src/components/sections/Hero.tsx` |
| Type | React |
| Hydration | `client:load` |

Features:
- Full-viewport hero section
- Animated background paths (FloatingPaths component)
- Staggered text entrance animations
- MovingBorder CTA button
- Scroll indicator animation

### Services

| Property | Value |
|----------|-------|
| File | `src/components/sections/Services.tsx` |
| Type | React |
| Hydration | `client:visible` |

Features:
- Grid of 6 service module cards
- 3D card flip on hover/click
- Front: service overview
- Back: feature list with staggered animations
- Uses StaggerContainer for entrance animations

Modules: Documentos, Inventario, Conexion con ERPs, Gestion APPCC, Pedidos Automatizados, Optimizacion de Rutas

### SuccessStory

| Property | Value |
|----------|-------|
| File | `src/components/sections/SuccessStory.astro` |
| Type | Astro |
| Hydration | None (static) |

Features:
- Case study for Montes del Acebo
- Image with gradient overlay
- Results checklist with Lucide icons
- FadeInView animations (client:visible)

### ValueProps

| Property | Value |
|----------|-------|
| File | `src/components/sections/ValueProps.tsx` |
| Type | React |
| Hydration | `client:visible` |

Features:
- 4 benefit cards with metrics
- 3D tilt effect on mouse move (useMotionValue)
- Gradient background glow on hover
- Staggered entrance animations

Metrics: 70% time reduction, 3x ROI, 95% accuracy, 24/7 visibility

### HowWeWork

| Property | Value |
|----------|-------|
| File | `src/components/sections/HowWeWork.astro` |
| Type | Astro |
| Hydration | None (static) |

Features:
- 4-step process timeline
- Alternating left/right layout on desktop
- Vertical timeline with gradient line
- FadeInView animations per step

Steps: Diagnostico gratuito, Propuesta y planificacion, Desarrollo e integracion, Puesta en marcha y soporte

### WhyCadly

| Property | Value |
|----------|-------|
| File | `src/components/sections/WhyCadly.astro` |
| Type | Astro |
| Hydration | None (static) |

Features:
- 4 differentiator cards
- Icon + title + description layout
- Hover state with border and shadow
- FadeInView animations

Differentiators: AI-Native, Product over projects, ROI focus, Technical experience

### Contact

| Property | Value |
|----------|-------|
| File | `src/components/sections/Contact.tsx` |
| Type | React |
| Hydration | `client:visible` |

Features:
- Contact info cards (email, phone)
- Trust badges
- Form with validation
- Submits to `/api/contact` endpoint
- Success state with confirmation message

Form fields: nombre, email, detalles

### Footer

| Property | Value |
|----------|-------|
| File | `src/components/sections/Footer.astro` |
| Type | Astro |
| Hydration | None (static) |

Features:
- Logo and tagline
- Contact email link
- CTA button
- Copyright with dynamic year

---

## Animation Components

Located in `src/components/animations/`.

### FadeInView

| Property | Value |
|----------|-------|
| File | `src/components/animations/FadeInView.tsx` |
| Export | Named: `FadeInView`, `FadeIn`, `StaggerContainer`, `StaggerItem` |

**FadeInView** - Fade in and slide up when element enters viewport
```tsx
<FadeInView delay={0.2} className="...">
  {children}
</FadeInView>
```

Props:
- `delay?: number` - Animation delay in seconds (default: 0)
- `duration?: number` - Animation duration (default: 0.6)
- `className?: string` - Additional CSS classes
- `once?: boolean` - Only animate once (default: true)

**StaggerContainer** - Parent for staggered child animations
```tsx
<StaggerContainer staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```

---

## KokonutUI Components

Specialized UI components in `src/components/kokonutui/`.

### FloatingPaths

| Property | Value |
|----------|-------|
| File | `src/components/kokonutui/background-paths.tsx` |
| Export | Named: `FloatingPaths` |

Animated SVG background with flowing path lines. Used in the Hero section.

```tsx
<FloatingPaths position={1} />
```

Props:
- `position: number` - Affects path generation (use 1 for standard)

---

## UI Components

Reusable primitives in `src/components/ui/`.

### Button (MovingBorder)

| Property | Value |
|----------|-------|
| File | `src/components/ui/moving-border.tsx` |
| Export | Named: `Button` |

Button with animated border effect.

```tsx
<Button
  borderRadius="0.75rem"
  containerClassName="h-14 w-48"
  borderClassName="bg-[radial-gradient(rgb(255,133,50)_40%,transparent_60%)]"
  className="bg-brand-600 text-white"
  onClick={() => {}}
>
  Click me
</Button>
```

### Input

| Property | Value |
|----------|-------|
| File | `src/components/ui/input.tsx` |
| Export | Named: `Input` |

Styled input field with focus and validation states.

```tsx
<Input
  id="email"
  name="email"
  type="email"
  placeholder="tu@empresa.com"
  required
/>
```

### Textarea

| Property | Value |
|----------|-------|
| File | `src/components/ui/textarea.tsx` |
| Export | Named: `Textarea` |

Styled textarea with auto-growing height.

```tsx
<Textarea
  id="detalles"
  name="detalles"
  rows={4}
  placeholder="..."
/>
```

### Label

| Property | Value |
|----------|-------|
| File | `src/components/ui/label.tsx` |
| Export | Named: `Label` |

Form label built on Radix UI Label primitive.

```tsx
<Label htmlFor="email">Email</Label>
```

---

## Layout

### Layout.astro

| Property | Value |
|----------|-------|
| File | `src/layouts/Layout.astro` |

Base HTML layout with:
- Font imports (@fontsource)
- Global CSS import
- Meta tags (SEO, Open Graph, Twitter)
- Slot for page content

Props:
- `title?: string` - Page title
- `description?: string` - Meta description

---

## Utilities

### cn (classnames utility)

| Property | Value |
|----------|-------|
| File | `src/lib/utils.ts` |
| Export | Named: `cn` |

Combines clsx and tailwind-merge for conditional class names.

```typescript
import { cn } from "@/lib/utils";

cn("base-class", isActive && "active-class", className)
```
