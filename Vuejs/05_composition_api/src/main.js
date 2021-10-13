/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-13 14:57:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 15:51:03
 */
import { createApp } from 'vue';
import App from './02_compositionAPI基础/App.vue';

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
