/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 19:46:49
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 19:51:58
 */
// 'use strict'; // 开启严格模式

// message = 'Hello World';
var message = 'Hello World';
console.log(message);

// 静默错误
// true.foo = 'abc';

function foo() {
  'use strict'; // 函数中单独开启严格模式
  true.foo = 'abcd';
}
foo();
