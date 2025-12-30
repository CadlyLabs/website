# Cadly Labs Documentation

Welcome to the official documentation for the Cadly Labs website.

## Project Overview

Cadly Labs is a Spanish B2B AI automation company dedicated to transforming business operations through cutting-edge artificial intelligence solutions. This website serves as the primary digital presence, showcasing our services, success stories, and providing a point of contact for potential partners.

## Tech Stack

The website is built using a modern, high-performance stack:

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation with SSR for API routes)
- **UI Library**: [React 19](https://react.dev/) (used via Astro Islands)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Runtime**: [Bun](https://bun.sh/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)

## Quick Start

To get started with development, follow these commands:

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

```bash
bun install
```

### Development

Start the development server:

```bash
bun run dev
```

The site will be available at `http://localhost:4321`.

### Build

Create a production build:

```bash
bun run build
```

### Preview

Preview the production build locally:

```bash
bun run preview
```

## Project Structure

```text
website/
├── src/
│   ├── components/
│   │   ├── animations/     # Animation-wrapper components (React/Motion)
│   │   ├── kokonutui/      # Specialized UI components (SVG animations, etc.)
│   │   ├── sections/       # Major landing page sections (Astro & React)
│   │   └── ui/             # Reusable UI primitives (Button, Input, etc.)
│   ├── layouts/            # Base Astro layouts
│   ├── lib/                # Utility functions (cn, etc.)
│   ├── pages/              # Routing (Astro pages and API endpoints)
│   └── styles/             # Global CSS and Tailwind configuration
├── public/                 # Static assets (images, logos, robots.txt)
└── docs/                   # Documentation files
```

## Documentation Index

- [Architecture](./ARCHITECTURE.md) - Deep dive into Astro Islands, hydration, and SSR.
- [Components](./COMPONENTS.md) - Documentation for sections, UI primitives, and animations.
- [Styling](./STYLING.md) - Brand colors, typography, and Tailwind v4 configuration.
