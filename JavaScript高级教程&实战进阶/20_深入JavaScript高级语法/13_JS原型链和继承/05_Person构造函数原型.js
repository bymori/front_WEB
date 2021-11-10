/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 17:30:27
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 17:30:27
 */
function Person() {}

// console.log(Person.prototype); // {}
// console.log(Object.getOwnPropertyDescriptors(Person.prototype));

console.log(Person.prototype.__proto__);
console.log(Person.prototype.__proto__.__proto__); // null
