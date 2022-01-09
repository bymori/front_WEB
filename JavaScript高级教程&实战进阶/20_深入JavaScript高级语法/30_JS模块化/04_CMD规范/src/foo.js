/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-09 15:03:38
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-09 15:06:29
 */
define(function (require, exports, module) {
  const name = 'momo';
  const age = 19;
  function sum(num1, num2) {
    return num1 + num2;
  }

  module.exports = {
    name,
    age,
    sum,
  };
});
