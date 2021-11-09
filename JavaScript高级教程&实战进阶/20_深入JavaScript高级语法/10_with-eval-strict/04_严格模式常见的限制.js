/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 19:56:23
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 20:16:35
 */
'use strict';

// 1. 禁止意外创建全局变量
// var message = 'Hello World';
// console.log(message);

// function foo() {
//   age = 20;
// }
// foo();
// console.log(age);

// 2. 不允许函数有相同的参数名称
// function foo(x, y, x) {
//   console.log(x, y, x);
// }
// foo(10, 20, 30);

// 3. 静默错误
// true.name = 'abc';
// NaN = 123;

// var obj = {};
// Object.defineProperty(obj, 'name', {
//   configurable: false,
//   writable: false,
//   value: 'ioinn',
// });
// console.log(obj.name);
// // obj.name = 'momo';

// delete obj.name;

// 4. 不允许使用原先的八进制格式 0123
// var num = 0123;
// var num1 = 0o123; // 严格模式下的八进制
// var num2 = 0x123; // 十六进制
// var num3 = 0b1110; // 二进制
// console.log(num1, num2, num3);

// 05. with语句不允许使用
// 在01_with语句有编写

// 06.eval函数不会向上引用变量
// var jsString = "var message = 'Hello World eval'; console.log(message);";
// eval(jsString);
// console.log(message);
