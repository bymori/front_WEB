/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-15 10:21:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 11:55:48
 */
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

// const app = createApp(App);

// app.use(router);

// app.mount('#app');

//链式调用
createApp(App)
  .use(router)
  .mount('#app');
