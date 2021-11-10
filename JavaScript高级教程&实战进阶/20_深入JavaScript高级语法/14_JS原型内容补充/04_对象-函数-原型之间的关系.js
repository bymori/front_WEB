/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 20:45:14
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 21:24:21
 */
var obj = {
  name: 'ioinn',
};

console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);

// 对象里面是有一个__proto__对象: 隐式原型对象

// Foo是一个函数, 那么它会有一个显示原型对象: Foo.prototype
// var Foo = new Function()
function Foo() {}

// Foo.prototype来自哪里?
// 答案: 创建了一个函数, Foo.prototype = { constructor: Foo }

// Foo是一个对象, 那么它会有一个隐式原型对象: Foo.__proto__
// Foo.__proto__来自哪里?
// 答案: new Function()  Foo.__proto__ = Function.prototype
// Function.prototype = { constructor: Function }

// var Foo = new Function()
function Foo() {}

console.log(Foo.prototype === Foo.__proto__); // false
console.log(Foo.prototype.constructor); // [Function: Foo]
console.log(Foo.__proto__.constructor); // [Function: Function]

var foo1 = new Foo();
var obj1 = new Object();

console.log(Object.getOwnPropertyDescriptors(Function.__proto__));
