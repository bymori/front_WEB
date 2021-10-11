/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-11 16:24:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 18:07:29
 */
import _ from 'lodash-es';
import { createApp } from 'vue';
import { sum } from './js/math.js';
import mul from './ts/mul.ts';
import App from './vue/App.vue';

import './css/style.css';
import './css/title.less';

console.log('hello world vite');
console.log(sum(20, 30));
console.log(mul(5, 6));

console.log(_.join(['abc', 'nba'], '-'));

const titleEl = document.createElement('div');
titleEl.className = 'title';
titleEl.innerHTML = 'Hello Vite';
document.body.appendChild(titleEl);

// vue
createApp(App).mount('#app');
