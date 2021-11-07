/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 14:43:11
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 14:44:11
 */
var msg = 'Hello Global';

function foo() {
  console.log(msg);
}

function bar() {
  var msg = 'hello Bar';
  foo();
}

bar();
