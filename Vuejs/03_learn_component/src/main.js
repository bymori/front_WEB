/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-11 19:46:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 22:47:58
 */
import { createApp } from 'vue';
import App from './11_动态组件的使用/App.vue';

// import { sum } from './12_异步组件的使用/utils/math';
// console.log(sum(5, 999));

//通过import函数导入的模块， 后续webpack对其进行打包的时候就会进行分包的操作
// import('./12_异步组件的使用/utils/math').then((res) => {
//   console.log(res.sum(20, 509));
// });

createApp(App).mount('#app');
