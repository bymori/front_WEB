/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-09 22:22:40
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-09 22:48:01
 */
import { name, age } from './foo.js';
console.log(name, age);

setTimeout(() => {
  console.log(name, age);
}, 2000);
