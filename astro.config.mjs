// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

export default defineConfig({
  integrations: [react()],
  output: 'server',
  site: 'https://cadlylabs.com',
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone'
  })
});
