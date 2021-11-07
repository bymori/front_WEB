/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 15:19:20
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 15:21:52
 */
var n = 100;

function foo1() {
  console.log(n, 'foo1'); // 100 foo1
}

function foo2() {
  var n = 200;
  console.log(n, 'foo2'); // 200 foo2
  foo1();
}

foo2();
console.log(n); // 100
