// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

/* 
import { loadEnv } from "vite";
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
); 
*/

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: '9fbd0yax',
      dataset: 'production',
      useCdn: false,
      apiVersion: "2025-03-19",
      studioBasePath: '/studio',
      stega: {
        studioUrl: "/studio",
      },
    }), 
    react()
  ]
});