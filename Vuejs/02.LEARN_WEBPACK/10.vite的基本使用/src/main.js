/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-11 16:24:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 16:55:52
 */
import _ from 'lodash-es';
// import _ from '../node_modules/lodash-es/lodash.default.js';

// import { sum } from './js/math.js';
import { sum } from './js/math.js';
import './css/style.css';
import './css/title.less';

console.log('hello world vite');
console.log(sum(20, 30));

console.log(_.join(['abc', 'nba'], '-'));

const titleEl = document.createElement('div');
titleEl.className = 'title';
titleEl.innerHTML = 'Hello Vite';
document.body.appendChild(titleEl);
