/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-10 12:24:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-10 23:29:17
 */
import { sum } from './js/math';
import { priceFormat } from './js/format';
// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler';

import './js/element';

console.log(sum(20, 25));
console.log(priceFormat());

// Vue 代码
const app = createApp({
  template: `<h2>这里是Vue渲染出来的-</h2>`,
  data() {
    return {
      msg: 'hello vue',
    };
  },
});

app.mount('#app');
