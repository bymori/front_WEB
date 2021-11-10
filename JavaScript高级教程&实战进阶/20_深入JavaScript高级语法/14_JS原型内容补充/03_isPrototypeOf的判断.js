/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 20:40:54
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 20:44:00
 */
function Person() {}

var p = new Person();

console.log(p instanceof Person);
console.log(Person.prototype.isPrototypeOf(p));

var obj = {
  name: 'ioinn',
  age: 18,
};

var info = Object.create(obj);

// console.log(info instanceof obj)
console.log(obj.isPrototypeOf(info));
