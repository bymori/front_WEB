/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-08 22:36:18
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-08 23:03:37
 */
const momo = require('./momo.js');

console.log(momo);

// setTimeout(() => {
//   console.log(momo.name);
// }, 2000);

setTimeout(() => {
  momo.name = 'mori';
}, 1000);
