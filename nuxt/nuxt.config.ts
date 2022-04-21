import path from 'path';
import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    ...(process.env.CDN_URL ? { cdnURL: process.env.CDN_URL } : {}),
  },
  nitro: {
    preset: 'aws-lambda',
  },
  vite: {
    resolve: {
      alias: {
        $src: path.resolve(__dirname, '../src'),
      },
    },
  },
});
