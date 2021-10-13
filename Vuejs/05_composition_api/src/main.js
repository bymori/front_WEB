/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-13 14:57:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 22:50:22
 */
import { createApp } from 'vue';
import App from './07_compositionAPI练习/App.vue';

const app = createApp(App);

// app.mixin({
//   data() {
//     return {};
//   },
//   methods: {},
//   created() {
//     console.log('全局的created生命周期');
//   },
// });

app.mount('#app');
