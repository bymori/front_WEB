/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-09 14:24:43
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-09 14:30:51
 */
console.log('foo');

// define(['require', 'dependency'], function (require, factory) {
//   'use strict';
// });
define(function () {
  const name = 'momo';
  const age = 19;
  function sum(num1, num2) {
    return num1 + num2;
  }

  return {
    name,
    age,
    sum,
  };
});
