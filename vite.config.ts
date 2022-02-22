import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  rollupOptions: {
    input: 'src/main.js',
    format: 'system',
    preserveEntrySignatures: true,
  },
  base: 'http://localhost:3000',
  plugins: [
    vueJsx({ optimize: true }),
    ,
    vue({
      template: {
        transformAssetUrls: {
          base: '/src',
        },
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 3100,
  },
});
