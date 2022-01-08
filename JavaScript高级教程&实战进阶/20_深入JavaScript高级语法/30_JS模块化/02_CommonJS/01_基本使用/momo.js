/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-08 22:07:46
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-08 23:19:29
 */
const name = 'momo';
const age = 19;

function sum(num1, num2) {
  return num1 + num2;
}

// CommonJS模块导出方案
// 1. module.exports
module.exports = {
  //   aaa: 'aaa',
  //   bbb: 'bbb',
  name,
  age,
  sum,
};

// 2. exports
