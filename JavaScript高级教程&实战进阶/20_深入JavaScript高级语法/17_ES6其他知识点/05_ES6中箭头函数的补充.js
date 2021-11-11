/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 22:32:26
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 22:35:20
 */
// function foo() {}

// console.log(foo.prototype);
// const f = new foo();
// f.__proto__ = foo.prototype;

var bar = () => {
  console.log(this, arguments);
};

console.log(bar.prototype);

// bar is not a constructor
const b = new bar();
