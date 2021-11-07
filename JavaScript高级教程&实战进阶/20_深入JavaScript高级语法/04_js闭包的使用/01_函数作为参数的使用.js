/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 16:11:54
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 17:01:49
 */

// function foo() {
//   console.log('foo');
// }

// foo();

// 将函数作为另一个函数的参数
// function foo(aaa) {
//   aaa();
// }

// function bar() {
//   console.log('bar');
// }

// foo(bar);

function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2));
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 * num2;
}

var m = 20;
var n = 30;

calc(m, n, sub);
