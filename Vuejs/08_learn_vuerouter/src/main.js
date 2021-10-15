/*
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 10:21:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 11:43:38
 */
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(router);

app.mount('#app');
