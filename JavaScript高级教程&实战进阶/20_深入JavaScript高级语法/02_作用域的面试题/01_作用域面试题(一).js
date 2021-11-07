/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 15:12:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 15:12:42
 */
var n = 100;

function foo() {
  n = 200;
}

foo();

console.log(n); // 200
