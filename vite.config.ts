import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServer } from 'vite-plugin-mock';

const path = require('path');
// import.meta.env.MODE === 'development'
// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@components': path.resolve(__dirname, './components'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@directives': path.resolve(__dirname, './src/directives')
  },
  plugins: [
    vue(),
    viteMockServer({
      mockPath: path.resolve(__dirname, './src/RequestUtil/mock'),
      localEnable: true // 写死true会导致生产环境也用mock，写false禁用mock
    })
  ]
})
