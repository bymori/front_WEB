/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 20:29:26
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 20:32:09
 */
function createObject(o) {
  function Fn() {}
  Fn.prototype = o;
  return new Fn();
}

function inheritPrototype(SubType, SuperType) {
  SubType.prototype = createObject(SuperType.prototype);
  Object.defineProperty(SubType.prototype, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType,
  });
}

function Person() {}

function Student() {}

inheritPrototype(Student, Person);

console.log(Person.prototype.__proto__); // [Object: null prototype] {}

var stu = new Student();
console.log(stu instanceof Student); // true
console.log(stu instanceof Person); // true
console.log(stu instanceof Object); // true
