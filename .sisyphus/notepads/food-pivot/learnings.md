# Learnings

## Task 1: FoodServices.tsx

- `bun build` in this project = `bunx astro build`, not `bun build` (Astro project)
- Pre-existing `renderers.mjs` error in Astro SSR generation — unrelated to changes
- APPCCDashboardVisual & DocumentScannerVisual use `@container` queries extensively — need `@container` parent wrapper
- ERP_LOGOS preload block uses `typeof window !== 'undefined'` guard — required for SSR safety
- DocumentScannerVisual depends on `useMemo` for ERP logos subset
- FadeInView API: `delay`, `duration`, `className`, `once` props — used with `client:visible` in Astro
- Card styling convention: `rounded-3xl border border-gray-200 bg-white shadow-sm hover:border-brand-200 hover:shadow-lg transition-all`
- index.astro imports must be reverted after QA testing (don't commit temp wiring)
- Dev server: port 4321, takes ~1.5s to start
