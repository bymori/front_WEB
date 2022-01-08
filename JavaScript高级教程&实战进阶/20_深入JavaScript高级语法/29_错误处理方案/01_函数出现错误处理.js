/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-08 15:54:45
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-08 16:06:49
 */
function sum(num1, num2) {
  // 当传入的参数类型不正确时, 应告知调用者一个错误
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    // return; // 返回 undefined 后续代码继续执行
    throw '参数为错误类型'; // 终止在此行
  }
  return num1 + num2;
}

// ”调用者（，如果没有对错误进行处理，那么程序会直接终止）
console.log(sum({ name: 'momo' }, true)); // [object Object]true
// console.log(sum(20, 30));

console.log('后续代码继续执行');
