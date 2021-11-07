/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 15:22:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 15:30:02
 */
function foo() {
  m = 100; // 放到全局对象上
}

foo();

console.log(m); // 100

function foo1() {
  var a = (b = 200);
  //  --> 转换成下面两行代码
  //  var a = 10
  //  b = 10
}

foo1();
// console.log(a); // 执行错误
console.log(b); // 200
