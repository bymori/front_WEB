/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 15:15:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 15:15:40
 */
function foo() {
  console.log(n); // undefined
  var n = 200;
  console.log(n); // 200
}

var n = 100;

foo();
