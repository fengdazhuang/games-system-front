import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
    alias:{
      '@': resolve( __dirname, './src' )
    }
  },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import '@/assets/style/base.scss';`
//       }
//     }
//   },
    server: {
        host: 'localhost',
        port: 8080,
        
        // proxy: {
        //     "/api": {
        //         target: "http://localhost:3000"
        //     }
        // }
    }
})
