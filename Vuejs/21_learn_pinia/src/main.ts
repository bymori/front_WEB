/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-21 14:27:16
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-21 14:35:22
 */
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

// 创建 Pinia 实例
const pinia = createPinia();

const app = createApp(App);

// Pinia 挂载到 Vue 根实例
app.use(pinia);

app.mount('#app');
