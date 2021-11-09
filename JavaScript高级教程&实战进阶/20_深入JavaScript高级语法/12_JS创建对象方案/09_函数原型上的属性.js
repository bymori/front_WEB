/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 01:38:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 01:54:16
 */
function foo() {}

// console.log(foo.prototype);
// console.log(Object.getOwnPropertyDescriptors(foo.prototype));

// // prototype.constructor = 构造函数本身
// console.log(foo.prototype.constructor); // [Function: foo]
// console.log(foo.prototype.constructor.name); // foo

// 2. 也可以添加自己的属性
// foo.prototype.name = 'ioinn';
// foo.prototype.age = 18;
// foo.prototype.height = 1.8;
// foo.prototype.eating = function () {};

// var f1 = new foo();
// console.log(f1.name, f1.age);

// 3. 直接修改整个 prototype 对象
foo.prototype = {
  //   constructor: foo,
  name: 'ioinn',
  age: 18,
  height: 1.8,
};

var f2 = new foo();

console.log(f2.name, f2.age, f2.height);

// 真是开发中 可以通过 Object.defineProperty 方式添加 constructor
Object.defineProperty(foo.prototype, 'constructor', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: foo,
});
