# Architecture

This document explains the technical architecture of the Cadly Labs website.

## Astro Islands Architecture

The website uses Astro's Islands architecture, which allows for partial hydration of interactive components while keeping the majority of the page as static HTML.

### How It Works

1. **Static by default**: Astro renders all components to static HTML at build time
2. **Selective hydration**: Only components with `client:*` directives are hydrated with JavaScript
3. **Framework-agnostic**: React components coexist with native Astro components

### Benefits

- Faster initial page load (less JavaScript shipped)
- Better Core Web Vitals scores
- Progressive enhancement - page works without JavaScript
- Reduced Time to Interactive (TTI)

## Component Hydration Strategy

Components are hydrated based on their interactivity requirements:

### `client:load` - Immediate Hydration

Used for components that need to be interactive immediately on page load.

| Component | Reason |
|-----------|--------|
| `Navbar` | User interaction expected immediately (scroll detection, mobile menu) |
| `Hero` | Animations should start on page load |

### `client:visible` - Lazy Hydration

Used for below-the-fold components that can wait until they enter the viewport.

| Component | Reason |
|-----------|--------|
| `Services` | Card flip interactions, but not immediately visible |
| `ValueProps` | 3D tilt effects, below the fold |
| `Contact` | Form submission, near page bottom |
| `FadeInView` (in Astro sections) | Scroll-triggered animations |

### No Hydration - Static Components

These Astro components render as pure HTML with no client-side JavaScript:

| Component | Location |
|-----------|----------|
| `SuccessStory.astro` | `src/components/sections/` |
| `HowWeWork.astro` | `src/components/sections/` |
| `WhyCadly.astro` | `src/components/sections/` |
| `Footer.astro` | `src/components/sections/` |

Note: These Astro components may import React components with `client:visible` for animations.

## SSR Setup

The website runs in SSR (Server-Side Rendering) mode using the `@astrojs/node` adapter.

### Configuration

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [react()],
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: node({
    mode: 'standalone'
  })
});
```

### Why SSR?

1. **API Endpoints**: The contact form requires a server-side endpoint
2. **Dynamic Content**: Future features may require server-side data fetching
3. **Flexibility**: Easy to add authenticated routes or personalization

### Running the Server

After building, the server can be started with:

```bash
node ./dist/server/entry.mjs
```

Or with Bun:

```bash
bun ./dist/server/entry.mjs
```

## API Endpoints

API routes are located in `src/pages/api/`.

### POST /api/contact

Handles contact form submissions.

**Request**: `FormData` with fields:
- `nombre` (string, required, min 2 chars)
- `email` (string, required, valid email)
- `detalles` (string, required, min 10 chars)

**Response**: JSON
```typescript
{
  success: boolean;
  message: string;
  errors?: {
    nombre?: string[];
    email?: string[];
    detalles?: string[];
  };
}
```

## Build Output

The build produces two directories in `dist/`:

```
dist/
├── client/           # Static assets (JS, CSS, images)
│   └── _astro/       # Hashed asset files
└── server/           # Node.js server entry point
    └── entry.mjs     # Start server with this file
```

## Path Aliases

The project uses TypeScript path aliases for cleaner imports:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Usage:
```typescript
import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/animations/FadeInView";
```
