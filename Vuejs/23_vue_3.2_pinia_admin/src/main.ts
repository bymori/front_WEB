/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-29 16:29:57
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-29 19:10:55
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/index.scss';

createApp(App).use(router).mount('#app');
