import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus()
  ],
  resolve: {
    alias: {
      '@': join(__dirname,"src")
    }
  },
  base: process.env.NODE_ENV === 'prod' ? '/': '',
  server: {
    host: '0.0.0.0',
    port: 8080,
    proxy:{
      "/api":{
        target:"http://hangbb.cn/"
        // target:"http://localhost:3000"
      }
    }
  },

})
