/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 19:08:20
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 19:29:47
 */
'use strict'; // 开启严格模式 严格模式下不能包含 with 语句

var message = 'Hello World';
// console.log(message);

var obj = { name: 'ioinn', age: 19, message: 'obj message' };

function foo() {
  function bar() {
    with (obj) {
      console.log(message);
    }
  }

  bar();
}

foo();

var info = { name: 'momo' };
with (info) {
  console.log(name);
}
