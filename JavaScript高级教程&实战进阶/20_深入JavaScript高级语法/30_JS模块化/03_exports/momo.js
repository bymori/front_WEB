/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-08 23:19:49
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-09 09:54:28
 */
const name = 'momo';
const age = 19;

function sum(num1, num2) {
  return num1 + num2;
}

// 实现原理
// module.exports = {
//     name = name
// };
// exports = module.exports;

// 第二种导出方式 exports

// exports.name = name;
// exports.age = age;
// exports.sum = sum;

//  这种代码不会进行导出
// exports = {
//   name,
//   age,
//   sum,
// }; // {}

//  这种代码不会进行导出
exports.name = name;
exports.age = age;
exports.sum = sum;

module.exports = {};

//  最终能导出的一定是 module.exports
