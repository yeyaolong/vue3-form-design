import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock';

const path = require('path');
// if (import.meta.env.mode === 'development') {
//   const BASE_URL = import.meta.env.VITE_BASE_URL;
// }


// import.meta.env.MODE === 'development'
console.log(path.resolve(__dirname, './src/RequestUtil/mock'))
// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@components': path.resolve(__dirname, './components'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@directives': path.resolve(__dirname, './src/directives'),
    '@type': path.resolve(__dirname, './type'),
    '@': path.resolve(__dirname, './src'),
    
  },
  plugins: [
    vue(),
    viteMockServe({
      // mockPath: path.resolve(__dirname, './src/RequestUtil/mock'),
      // mockPath: path.resolve(__dirname, 'src/RequestUtil/mock'), // 这种写法无法找到mock的文件
      // mockPath: 'src/RequestUtil/mock', // 这种写法可以找到mock的文件
      mockPath: 'mock', // 不过我最终还是写成了这个路径，因为mock其实和源码没什么关系，也就没必要放到src目录下
      localEnabled: true // 写死true会导致生产环境也用mock，写false禁用mock
    })
  ],
  server: {
    proxy: {
      // 解决跨域指向代理地址 target为请求内的baseUrl  拦截以api开头的请求，再把api替换为空
      "/api": {
        target: "http://10.11.38.249:18088/", //胡斌
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },

    },
  },
})
