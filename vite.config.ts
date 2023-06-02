import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/design/' : '/',
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ['vue', 'vue-router'],
      defaultExportByFilename: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
