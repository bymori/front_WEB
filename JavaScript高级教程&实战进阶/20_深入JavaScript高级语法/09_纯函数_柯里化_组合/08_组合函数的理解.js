/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 01:42:28
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 01:47:56
 */
function double(num) {
  return num * 2;
}
function square(num) {
  return num ** 2;
}

var count = 10;
var result = square(double(count));
console.log(result);

// 组合函数
function composeFn(m, n) {
  return function (count) {
    return n(m(count));
  };
}
var newFn = composeFn(double, square);
console.log(newFn(20));
