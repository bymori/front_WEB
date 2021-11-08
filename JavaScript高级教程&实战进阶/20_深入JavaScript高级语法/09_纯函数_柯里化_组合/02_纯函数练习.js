/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 23:19:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 23:46:15
 */
/**
 *  foo 函数是否是一个纯函数
 *    1. 相同的输入一定产生相同的输出 ✔️
 *    2. 在执行的过程中不会产生任何的副作用 ✔️
 */
function foo(num1, num2) {
  return num1 * 2 + num2 * num2;
}

// bar 不是一个纯函数, 因为它修改了外界的变量
var name = 'aaa';
function bar() {
  console.log('bar函数执行了');
  name = 'abc';
}

bar();
console.log(name);

// baz 不是一个纯函数 因为修改值输入的值
function baz(info) {
  info.age = 100;
}
var obj = { name: 'ioinn', age: 18 };
baz(obj);
console.log(obj);

// test 是一个纯函数
// function test(info) {
//   return {
//     ...info,
//     age: 200,
//   };
// }

// test(obj);
// test(obj);
// console.log(obj);

// React 的函数组件(类组件)
function HelloWorld(props) {
  props.info = {};
  props.info.name = 'ioinn';
}
