/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 16:51:22
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 17:22:17
 */
// var obj1 = {}; // 创建了一个对象
// var obj2 = new Object(); // 创建了一个对象

// function Person() {}

// var p = new Person();

var obj = {
  name: 'ioinn',
  age: 18,
};

var obj2 = {
  address: '北京',
};

obj.__proto__ = obj2;

// Object.prototype
// console.log(obj.__proto__);
// console.log(Object.prototype);
// console.log(obj.__proto__ === Object.prototype); // true

console.log(Object.prototype);
console.log(Object.prototype.constructor);
console.log(Object.prototype.__proto__);

console.log(Object.getOwnPropertyDescriptors(Object.prototype));
