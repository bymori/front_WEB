/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 19:44:29
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 19:46:21
 */

// ES6的代码块级作用域
// 对let / const / function / class 声明的类型是有效
{
  let foo = 'ioinn';
  function demo() {
    console.log('demo function');
  }
  class Person {}
}
// console.log(foo); // foo is not defined

// 不同的浏览器有不同实现的(大部分浏览器为了兼容以前的代码, 让function是没有块级作用域)
// demo();
var p = new Person(); // Person is not defined
