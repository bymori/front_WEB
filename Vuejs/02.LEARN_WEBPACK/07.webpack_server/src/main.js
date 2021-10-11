/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-10 12:24:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 11:05:31
 */
// import { createApp } from 'vue/dist/vue.esm-bundler';
import { createApp } from 'vue';
import axios from 'axios';

import { sum } from './js/math';
import { priceFormat } from './js/format';

import App from './vue/App.vue';

import './js/element';

if (module.hot) {
  module.hot.accept('./js/element', () => {
    console.log('element更新了');
  });
}

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

axios
  .get('/api/banner')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
