import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works both at the custom domain root
// and at a project subpath like /bestrongthegym/.
export default defineConfig({ plugins: [react()], base: './' })
