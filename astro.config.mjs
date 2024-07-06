import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://benruehl.github.io',
  base: 'astro-recipes',
  integrations: [icon()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/main.scss";',
        },
      },
    },
  },
});