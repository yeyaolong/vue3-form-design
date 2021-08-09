import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@components': path.resolve(__dirname, './components'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@directives': path.resolve(__dirname, './src/directives')
  },
  plugins: [
    vue()
  ]
})
