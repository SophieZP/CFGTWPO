// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://SophieZP.github.io',
  base: '/CFGTWPO',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
