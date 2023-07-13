import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import vercel from '@astrojs/vercel/serverless';
import sanity from "astro-sanity";

export default defineConfig({
  integrations: [svelte(), sanity({
    projectId: '6f642s5x',
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: true,
  })],
  output: "server",
  adapter: vercel(),
});
