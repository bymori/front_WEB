/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 01:30:39
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 01:33:03
 */
function Person() {}

var p1 = new Person();
var p2 = new Person();

// console.log(p1.__proto__ === Person.prototype); // true
// console.log(p2.__proto__ === Person.prototype); // true

// p1.name = 'ioinn';
// p1.__proto__.name = '沫沫';
// Person.prototype.name = 'mori';
p2.__proto__.name = 'momo';

console.log(p1.name);
