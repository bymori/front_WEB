/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 19:50:26
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 20:02:04
 */
function createObject(o) {
  function Fn() {}
  Fn.prototype = o;
  return new Fn();
}

function inheritPrototype(SubType, SuperType) {
  //   SubType.prototype = createObject(SuperType.prototype);
  SubType.prototype = Object.create(SuperType.prototype);
  Object.defineProperty(SubType.prototype, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType,
  });
}

function Person(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person.prototype.running = function () {
  console.log('running~');
};

Person.prototype.eating = function () {
  console.log('eating~');
};

function Student(name, age, friends, sno, score) {
  Person.call(this, name, age, friends);
  this.sno = sno;
  this.score = score;
}

inheritPrototype(Student, Person);

Student.prototype.studying = function () {
  console.log('studying~');
};

var stu = new Student('ioinn', 17, ['momo'], 111, 100);
console.log(stu);
stu.studying();
stu.running();
stu.eating();

console.log(stu.constructor.name);
