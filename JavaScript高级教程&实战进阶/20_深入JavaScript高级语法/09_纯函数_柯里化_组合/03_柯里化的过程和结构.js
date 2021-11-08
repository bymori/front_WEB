/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 00:13:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 00:23:49
 */
function add(x, y, z) {
  return x + y + z;
}

var result = add(10, 20, 30);
console.log(result);

// 柯里化过程
function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
var result1 = sum(40)(20)(30);
console.log(result1);

// 简化柯里化的代码
var sum2 = (x) => (y) => (z) => {
  return x + y + z;
};
var sum3 = (x) => (y) => (z) => x + y + z;

console.log(sum2(50)(20)(30));
console.log(sum3(60)(20)(30));
