# Styling Guide

This document covers the styling system used in the Cadly Labs website.

## Tailwind CSS v4

The website uses Tailwind CSS v4 with the Vite plugin. Configuration is done via CSS instead of a JavaScript config file.

### Setup

```javascript
// astro.config.mjs
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### Global Styles

All custom theme values are defined in `src/styles/global.css`.

```css
@import "tailwindcss";

@theme inline {
  /* Custom theme values here */
}
```

---

## Brand Colors

The brand uses an orange gradient system.

### Primary Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand-50` | `rgb(255, 247, 239)` | Light backgrounds, hover states |
| `brand-100` | `rgb(254, 235, 213)` | Badges, subtle accents |
| `brand-500` | `rgb(255, 133, 50)` | Primary actions, icons |
| `brand-600` | `rgb(255, 98, 10)` | Buttons, links |
| `brand-700` | `rgb(255, 72, 0)` | Hover states, emphasis |
| `brand-800` | `rgb(149, 48, 23)` | Dark accents |
| `brand-900` | `rgb(120, 42, 22)` | Very dark accents |

Usage:
```html
<button class="bg-brand-600 hover:bg-brand-700 text-white">
  Primary Button
</button>

<span class="bg-brand-100 text-brand-700">
  Badge Text
</span>
```

### Neutral Colors

| Token | Value | Usage |
|-------|-------|-------|
| `surface` | `rgb(245, 244, 246)` | Section backgrounds |
| `charcoal` | `rgb(31, 31, 31)` | Footer background, dark text |
| `gray-100` - `gray-900` | Grayscale | Text, borders, backgrounds |

Usage:
```html
<section class="bg-surface">...</section>
<footer class="bg-charcoal text-white">...</footer>
```

---

## Typography

### Font Families

Two fonts are used, loaded via `@fontsource`:

| Font | Variable | Usage |
|------|----------|-------|
| Libre Baskerville | `--font-heading` | Headings, display text |
| Manrope | `--font-body` | Body text, UI elements |

### Font Classes

```html
<!-- Headings (serif) -->
<h1 class="font-heading text-4xl font-bold">Heading</h1>

<!-- Body text (sans-serif) -->
<p class="font-body text-base">Body text</p>
```

### Font Loading

Fonts are imported in the Layout component:

```astro
---
import '@fontsource/libre-baskerville/400.css';
import '@fontsource/libre-baskerville/700.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
---
```

---

## CSS Variables

### Semantic Colors

The following CSS variables support light/dark modes (though dark mode is not currently active):

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  /* ... more in global.css */
}
```

Usage in Tailwind:
```html
<div class="bg-background text-foreground border-border">
  ...
</div>
```

### Border Radius

```css
:root {
  --radius: 0.75rem;
}

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
}
```

---

## Common Patterns

### Section Layout

```html
<section class="bg-white py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Content -->
  </div>
</section>
```

Alternating backgrounds:
- `bg-white` - White sections
- `bg-surface` - Light gray sections
- `bg-charcoal` - Dark footer

### Cards

```html
<div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm 
            transition-all hover:border-brand-200 hover:shadow-lg">
  <!-- Card content -->
</div>
```

### Badges

```html
<span class="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 
             text-sm font-medium text-brand-700">
  Badge Text
</span>
```

### Buttons

Primary:
```html
<button class="rounded-lg bg-brand-600 px-6 py-3 text-sm font-medium 
               text-white transition-colors hover:bg-brand-700">
  Primary Action
</button>
```

Secondary:
```html
<button class="rounded-lg border-2 border-gray-300 bg-white px-8 py-3 
               font-medium text-gray-700 transition-all 
               hover:border-brand-500 hover:text-brand-600">
  Secondary Action
</button>
```

Dark:
```html
<button class="rounded-lg bg-charcoal py-3 font-medium text-white 
               transition-colors hover:bg-gray-800">
  Submit
</button>
```

### Icon Containers

```html
<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50">
  <Icon class="h-7 w-7 text-brand-600" />
</div>
```

---

## Animations

### Fade In Up (CSS)

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}
```

### Motion (Framer Motion)

Most animations use the Motion library. See `COMPONENTS.md` for FadeInView usage.

---

## Responsive Design

The site uses Tailwind's default breakpoints:

| Breakpoint | Min Width | Prefix |
|------------|-----------|--------|
| Mobile | 0px | (default) |
| SM | 640px | `sm:` |
| MD | 768px | `md:` |
| LG | 1024px | `lg:` |
| XL | 1280px | `xl:` |

Common patterns:
```html
<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col gap-4 md:flex-row">

<!-- Full width on mobile, constrained on desktop -->
<div class="w-full md:max-w-md">

<!-- Hidden on mobile, visible on desktop -->
<div class="hidden md:block">

<!-- Different grid columns -->
<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
```
