/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-09 22:22:46
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-09 22:47:03
 */
let name = 'momo';
let age = 19;

setTimeout(() => {
  name = 'mori';
  age = 20;
}, 1000);

export { name, age };
