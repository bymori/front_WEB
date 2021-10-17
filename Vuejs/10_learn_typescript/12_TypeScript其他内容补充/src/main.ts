/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 13:52:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-17 10:51:59
 */
import { add, sub } from './utils/math';
import { time, price } from './utils/format';

import noGameNoLife from './img/83989505_p1.png';

import axios from 'axios';
import lodash from 'lodash';

console.log(add(20, 30));
console.log(sub(20, 30));

console.log(time.format('11111111'));
console.log(price.format(123));

console.log(lodash.join(['abc', 'cba']));

// axios.get('https://api.ioinn.cn/banner').then((res) => {
//   console.log(res);
// });

// document.getElementById

console.log(ioName);
console.log(ioAge);
console.log(ioHeight);

ioFoo();

const p = new Person('ioinn', 18);
console.log(p);

$.ajax({});
