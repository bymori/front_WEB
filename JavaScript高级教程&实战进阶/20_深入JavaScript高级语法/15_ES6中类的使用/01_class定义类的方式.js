/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 21:32:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 22:01:32
 */
// 类的声明
class Person {}

// babel 转换代码

// 类的表达式
var Animal = class {};

// 类的特性
console.log(Person.prototype); // {}
console.log(Person.prototype.__proto__); // [Object: null prototype] {}
console.log(Person.prototype.constructor); // [class Person]
console.log(typeof Person); // function

var p = new Person();
console.log(p.__proto__ === Person.prototype); // true
