/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 15:19:33
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 15:20:16
 */
var a = 100;

function foo() {
  console.log(a); // undefined
  return;
  var a = 200;
}

foo();
