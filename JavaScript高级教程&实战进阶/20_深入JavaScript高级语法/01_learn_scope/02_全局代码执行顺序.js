/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 12:36:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 12:54:54
 */
// 执行代码
var name = 'momo';
function foo() {
  var name = 'mori';
  console.log(name);
}

console.log(num1); // undefined 作用域提升

var num1 = 20;
var num2 = 30;
var result = num1 + num2;
console.log(result); // 50

foo(); // mori
