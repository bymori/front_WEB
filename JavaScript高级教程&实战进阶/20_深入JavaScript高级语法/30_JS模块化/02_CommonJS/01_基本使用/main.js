/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-08 22:07:40
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-08 22:32:32
 */
// 使用另外一个模块导出的对象, 那么就要使用 require 导入

// const momo = require('./momo.js');
// console.log(momo.aaa);
// console.log(momo.bbb);

// const { aaa, bbb } = require('./momo.js');
// console.log(aaa);
// console.log(bbb);

const { name, age, sum } = require('./momo.js');

console.log(name);
console.log(age);
console.log(sum(20, 32));

// console.log(name);
// console.log(age);
// console.log(sum(20, 30));
