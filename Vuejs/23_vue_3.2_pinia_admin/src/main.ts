/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-29 16:29:57
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-29 20:47:56
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './styles/index.scss';
import 'element-plus/dist/index.css'; // 解决 element-plus 部分样式丢失
// 创建 Pinia 实例
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
