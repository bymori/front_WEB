/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 21:35:29
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 21:44:04
 */
// var foo = () => {
//   console.log(arguments);
// };
// foo();

// function foo() {
//   var bar = () => {
//     console.log(arguments);
//   };
//   return bar;
// }
// var fn = foo(100, 123, 456);
// fn();

var foo = (num1, num2, ...args) => {
  console.log(args);
};

foo(10, 20, 30, 40, 50, 60);
