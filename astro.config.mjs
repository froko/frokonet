import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://frokonet.ch',
  output: 'static',
  integrations: [preact(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
