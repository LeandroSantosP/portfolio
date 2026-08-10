import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    // Configure the Cloudflare plugin with an assets directory.
    // The plugin requires `assets.directory`; use `public` which is the project's static folder.
    cloudflare({ assets: { directory: 'public' } })
  ]
})
