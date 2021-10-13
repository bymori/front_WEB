/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-13 14:57:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 00:43:45
 */
import { createApp } from 'vue';
import App from './08_setup顶层编写方式/App.vue';

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
