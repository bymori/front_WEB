/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 00:35:57
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 00:45:16
 */
// function sum(m, n) {
//   return m + n;
// }

// // 如果经常需要把固定的数字和另外一个数相加
// console.log(sum(5, 10));
// console.log(sum(5, 16));
// console.log(sum(5, 29));
// console.log(sum(5, 999));

function makeAdder(count) {
  count = count * count;

  return function (sum) {
    return count + sum;
  };
}

// var result = makeAdder(5)(10);
// console.log(result);

var adder5 = makeAdder(5);

console.log(adder5(12));
console.log(adder5(26));
console.log(adder5(37));
console.log(adder5(999));
