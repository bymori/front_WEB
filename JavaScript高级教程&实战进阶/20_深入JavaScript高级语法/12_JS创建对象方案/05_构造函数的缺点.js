/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 00:49:21
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 00:49:21
 */
function foo() {
  function bar() {}
  return bar;
}

var fn1 = foo();
var fn2 = foo();

console.log(fn1 === fn2); // false
