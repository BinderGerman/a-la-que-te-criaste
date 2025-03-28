// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

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
  ],
  output: "server",
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/compile'
    }
  },
  vite: {
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD ? {
        "react-dom/server": "react-dom/server.edge",
      } : undefined
      
    },
  }   
});