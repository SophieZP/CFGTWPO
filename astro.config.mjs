// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://SophieZP.github.io',
  base: '/CFGTWPO',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    css: {
      transformer: 'lightningcss',
    },
  },
});
