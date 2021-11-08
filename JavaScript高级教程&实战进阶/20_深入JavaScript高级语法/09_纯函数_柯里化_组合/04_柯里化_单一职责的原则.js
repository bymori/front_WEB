/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 00:29:20
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 00:34:17
 */
function add(x, y, z) {
  x = x + 2;
  y = y * 2;
  z = z * z;
  return x + y + z;
}
console.log(add(10, 20, 30));

function sum(x) {
  x = x + 2;
  return function (y) {
    y = y * 2;
    return function (z) {
      z = z * z;
      return x + y + z;
      //   return function () {
      //     return x + y + z;
      //   };
    };
  };
}

console.log(sum(20)(30)(40));
