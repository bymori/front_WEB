/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 00:13:45
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 00:25:39
 */
function foo() {
  console.log('foo~~ 函数体代码');
}

// foo 就是一个普通的函数
// foo();

// 换一种方式来调用 foo 函数: 通过 new 关键字去调用一个函数, 那么这个函数就是一个构造函数了

var f1 = new foo();
console.log(f1);

// 通过new去调用一个函数时, 和普通的调用有什么区别
