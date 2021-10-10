/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-10 12:24:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 01:14:37
 */
// import { createApp } from 'vue/dist/vue.esm-bundler';
import { createApp } from 'vue';
import { sum } from './js/math';
import { priceFormat } from './js/format';

import App from './vue/App.vue';

import './js/element';

console.log(sum(20, 25));
console.log(priceFormat());

// Vue 代码
/* const app = createApp({
  template: ``,
  data() {
    return {
      msg: 'hello vue',
    };
  },
}); */

const app = createApp(App);
app.mount('#app');

console.log('--watch');
