/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-20 19:29:55
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-20 19:40:18
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cesium from 'vite-plugin-cesium';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cesium()],
});
