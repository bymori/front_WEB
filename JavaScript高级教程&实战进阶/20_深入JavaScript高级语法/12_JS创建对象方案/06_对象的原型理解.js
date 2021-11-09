/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 01:01:29
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 01:13:53
 */
// 每个对象中都有一个 [[prototype]] , 这个属性可以称之为对象的原型(隐式原型)
var obj = { name: 'ioinn' }; //  [[prototype]]
var info = {}; //  [[prototype]]

// 1. 解释原型的概念和查看原型
// 早期的ECMA是没有规范如何查看 [[prototype]]

// 给对象中提供了一个属性, 可以查看原型对象(浏览器提供的方法)
// // __proto__
// console.log(obj.__proto__);
// console.log(info.__proto__);

// var obj = { name: 'ioinn', __proto__: {} };

// ES5 之后提供的Object.getPrototypeOf
// console.log(Object.getPrototypeOf(obj));

// 2. 原型有什么用？
// 当我们从一个对象中获取某一个属性时, 它会触发 [[get]] 操作
//   1. 在当前对象中去查找对应的属性, 如果找到就直接使用
//   2. 如果没有找到, 那么会沿着它的原型去查找 [[prototype]]

// obj.age = 18;
obj.__proto__.age = 19;

console.log(obj.age);
