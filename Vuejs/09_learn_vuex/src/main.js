/*
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 18:04:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 10:42:57
 */
import { createApp } from 'vue'
// import App from './App.vue'
import App from './App_nexttick.vue';
import store from './store';

createApp(App)
  .use(store)
  .mount('#app');
